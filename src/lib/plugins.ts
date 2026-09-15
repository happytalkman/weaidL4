// Plugin system
export interface Plugin {
  id: string;
  name: string;
  description: string;
  execute: (context: PluginContext) => Promise<string>;
}

export interface PluginContext {
  input: string;
  memory: Record<string, string>;
  settings: Record<string, any>;
}

const registeredPlugins: Map<string, Plugin> = new Map();

export function registerPlugin(plugin: Plugin): void {
  registeredPlugins.set(plugin.id, plugin);
}

export function unregisterPlugin(id: string): void {
  registeredPlugins.delete(id);
}

export function getPlugin(id: string): Plugin | undefined {
  return registeredPlugins.get(id);
}

export function listPlugins(): Plugin[] {
  return Array.from(registeredPlugins.values());
}

export async function executePlugin(id: string, context: PluginContext): Promise<string> {
  const plugin = registeredPlugins.get(id);
  if (!plugin) throw new Error(`Plugin not found: ${id}`);
  return plugin.execute(context);
}

// Built-in plugins
registerPlugin({
  id: 'calculator',
  name: 'Calculator',
  description: 'Evaluate mathematical expressions',
  execute: async (ctx) => {
    try {
      const expr = ctx.input.replace(/[^0-9+\-*/().%\s]/g, '');
      const result = Function(`"use strict"; return (${expr})`)();
      return `Result: ${result}`;
    } catch {
      return 'Error: Invalid expression';
    }
  },
});

registerPlugin({
  id: 'datetime',
  name: 'DateTime',
  description: 'Get current date and time information',
  execute: async () => {
    const now = new Date();
    return `Current time: ${now.toLocaleString()}\nTimezone: ${Intl.DateTimeFormat().resolvedOptions().timeZone}`;
  },
});

registerPlugin({
  id: 'uuid',
  name: 'UUID Generator',
  description: 'Generate unique identifiers',
  execute: async () => {
    return crypto.randomUUID();
  },
});

registerPlugin({
  id: 'base64',
  name: 'Base64 Encoder/Decoder',
  description: 'Encode or decode Base64 strings',
  execute: async (ctx) => {
    const input = ctx.input;
    if (input.startsWith('decode:')) {
      try {
        return atob(input.slice(7));
      } catch {
        return 'Error: Invalid Base64';
      }
    }
    return btoa(input);
  },
});

registerPlugin({
  id: 'wordcount',
  name: 'Word Counter',
  description: 'Count words, characters, and lines',
  execute: async (ctx) => {
    const text = ctx.input;
    const words = text.trim().split(/\s+/).filter(w => w.length > 0).length;
    const chars = text.length;
    const lines = text.split('\n').length;
    return `Words: ${words}\nCharacters: ${chars}\nLines: ${lines}`;
  },
});

// Automation workflow engine
export interface AutomationRule {
  id: string;
  name: string;
  trigger: string;
  action: string;
  enabled: boolean;
  createdAt: string;
}

const automationRules: Map<string, AutomationRule> = new Map();

export function addAutomationRule(rule: AutomationRule): void {
  automationRules.set(rule.id, rule);
}

export function removeAutomationRule(id: string): void {
  automationRules.delete(id);
}

export function listAutomationRules(): AutomationRule[] {
  return Array.from(automationRules.values());
}

export async function checkAutomations(trigger: string): Promise<string[]> {
  const results: string[] = [];
  for (const rule of automationRules.values()) {
    if (!rule.enabled) continue;
    if (trigger.toLowerCase().includes(rule.trigger.toLowerCase())) {
      results.push(`[${rule.name}] ${rule.action}`);
    }
  }
  return results;
}

// Code execution environment
export async function executeCode(code: string, language: string = 'javascript'): Promise<string> {
  if (language === 'javascript') {
    try {
      const logs: string[] = [];
      const mockConsole = {
        log: (...args: any[]) => logs.push(args.map(String).join(' ')),
        error: (...args: any[]) => logs.push('ERROR: ' + args.map(String).join(' ')),
        warn: (...args: any[]) => logs.push('WARN: ' + args.map(String).join(' ')),
      };
      const fn = new Function('console', `"use strict"; ${code}`);
      const result = fn(mockConsole);
      const output = logs.length > 0 ? logs.join('\n') : '';
      const retVal = result !== undefined ? `\n→ ${JSON.stringify(result)}` : '';
      return output + retVal || 'Code executed successfully (no output)';
    } catch (e: any) {
      return `Error: ${e.message}`;
    }
  } else if (language === 'python') {
    return 'Python execution requires a backend service. Use JavaScript for client-side execution.';
  }
  return `Language "${language}" is not supported for client-side execution.`;
}
