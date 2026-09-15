const DB_NAME = 'webigai_db';
const DB_VERSION = 1;

export interface MemoryEntry {
  key: string;
  value: string;
  category: string;
  updated: string;
}

export interface SessionEntry {
  id: string;
  timestamp: string;
  messages: Array<{
    role: 'user' | 'ai' | 'sys';
    text: string;
    timestamp: string;
  }>;
  summary?: string;
}

export interface LogEntry {
  text: string;
  tag: 'you' | 'ai' | 'sys' | 'err' | 'file';
  timestamp: string;
}

export interface AutomationRule {
  id: string;
  name: string;
  trigger: string;
  action: string;
  enabled: boolean;
  createdAt: string;
}

export interface PluginEntry {
  id: string;
  name: string;
  code: string;
  enabled: boolean;
  createdAt: string;
}

function openDB(): Promise<IDBDatabase> {
  return new Promise((resolve, reject) => {
    const request = indexedDB.open(DB_NAME, DB_VERSION);
    request.onerror = () => reject(request.error);
    request.onsuccess = () => resolve(request.result);
    request.onupgradeneeded = (event) => {
      const db = (event.target as IDBOpenDBRequest).result;
      if (!db.objectStoreNames.contains('memory')) {
        db.createObjectStore('memory', { keyPath: 'key' });
      }
      if (!db.objectStoreNames.contains('sessions')) {
        db.createObjectStore('sessions', { keyPath: 'id' });
      }
      if (!db.objectStoreNames.contains('logs')) {
        const logStore = db.createObjectStore('logs', { keyPath: 'id', autoIncrement: true });
        logStore.createIndex('timestamp', 'timestamp');
      }
      if (!db.objectStoreNames.contains('automations')) {
        db.createObjectStore('automations', { keyPath: 'id' });
      }
      if (!db.objectStoreNames.contains('plugins')) {
        db.createObjectStore('plugins', { keyPath: 'id' });
      }
      if (!db.objectStoreNames.contains('settings')) {
        db.createObjectStore('settings', { keyPath: 'key' });
      }
    };
  });
}

// Memory operations
export async function getAllMemory(): Promise<MemoryEntry[]> {
  const db = await openDB();
  return new Promise((resolve, reject) => {
    const tx = db.transaction('memory', 'readonly');
    const store = tx.objectStore('memory');
    const request = store.getAll();
    request.onerror = () => reject(request.error);
    request.onsuccess = () => resolve(request.result);
  });
}

export async function saveMemory(entry: MemoryEntry): Promise<void> {
  const db = await openDB();
  return new Promise((resolve, reject) => {
    const tx = db.transaction('memory', 'readwrite');
    const store = tx.objectStore('memory');
    store.put(entry);
    tx.oncomplete = () => resolve();
    tx.onerror = () => reject(tx.error);
  });
}

export async function deleteMemory(key: string): Promise<void> {
  const db = await openDB();
  return new Promise((resolve, reject) => {
    const tx = db.transaction('memory', 'readwrite');
    const store = tx.objectStore('memory');
    store.delete(key);
    tx.oncomplete = () => resolve();
    tx.onerror = () => reject(tx.error);
  });
}

export async function searchMemory(query: string): Promise<MemoryEntry[]> {
  const all = await getAllMemory();
  const q = query.toLowerCase();
  return all.filter(e =>
    e.key.toLowerCase().includes(q) ||
    e.value.toLowerCase().includes(q) ||
    e.category.toLowerCase().includes(q)
  );
}

export async function exportMemory(): Promise<string> {
  const memory = await getAllMemory();
  return JSON.stringify(memory, null, 2);
}

export async function importMemory(json: string): Promise<number> {
  const entries: MemoryEntry[] = JSON.parse(json);
  const db = await openDB();
  return new Promise((resolve, reject) => {
    const tx = db.transaction('memory', 'readwrite');
    const store = tx.objectStore('memory');
    entries.forEach(e => store.put(e));
    tx.oncomplete = () => resolve(entries.length);
    tx.onerror = () => reject(tx.error);
  });
}

// Session operations
export async function saveSession(session: SessionEntry): Promise<void> {
  const db = await openDB();
  return new Promise((resolve, reject) => {
    const tx = db.transaction('sessions', 'readwrite');
    const store = tx.objectStore('sessions');
    store.put(session);
    tx.oncomplete = () => resolve();
    tx.onerror = () => reject(tx.error);
  });
}

export async function getAllSessions(): Promise<SessionEntry[]> {
  const db = await openDB();
  return new Promise((resolve, reject) => {
    const tx = db.transaction('sessions', 'readonly');
    const store = tx.objectStore('sessions');
    const request = store.getAll();
    request.onerror = () => reject(request.error);
    request.onsuccess = () => {
      resolve(request.result.sort((a, b) =>
        new Date(b.timestamp).getTime() - new Date(a.timestamp).getTime()
      ));
    };
  });
}

export async function deleteSession(id: string): Promise<void> {
  const db = await openDB();
  return new Promise((resolve, reject) => {
    const tx = db.transaction('sessions', 'readwrite');
    const store = tx.objectStore('sessions');
    store.delete(id);
    tx.oncomplete = () => resolve();
    tx.onerror = () => reject(tx.error);
  });
}

// Log operations
export async function saveLog(entry: Omit<LogEntry, 'id'>): Promise<void> {
  const db = await openDB();
  return new Promise((resolve, reject) => {
    const tx = db.transaction('logs', 'readwrite');
    const store = tx.objectStore('logs');
    store.put(entry);
    tx.oncomplete = () => resolve();
    tx.onerror = () => reject(tx.error);
  });
}

export async function getRecentLogs(limit: number = 200): Promise<LogEntry[]> {
  const db = await openDB();
  return new Promise((resolve, reject) => {
    const tx = db.transaction('logs', 'readonly');
    const store = tx.objectStore('logs');
    const request = store.getAll();
    request.onerror = () => reject(request.error);
    request.onsuccess = () => {
      resolve(request.result.slice(-limit));
    };
  });
}

export async function clearLogs(): Promise<void> {
  const db = await openDB();
  return new Promise((resolve, reject) => {
    const tx = db.transaction('logs', 'readwrite');
    const store = tx.objectStore('logs');
    store.clear();
    tx.oncomplete = () => resolve();
    tx.onerror = () => reject(tx.error);
  });
}

// Settings
export async function saveSetting(key: string, value: any): Promise<void> {
  const db = await openDB();
  return new Promise((resolve, reject) => {
    const tx = db.transaction('settings', 'readwrite');
    const store = tx.objectStore('settings');
    store.put({ key, value });
    tx.oncomplete = () => resolve();
    tx.onerror = () => reject(tx.error);
  });
}

export async function getSetting<T = any>(key: string): Promise<T | null> {
  const db = await openDB();
  return new Promise((resolve, reject) => {
    const tx = db.transaction('settings', 'readonly');
    const store = tx.objectStore('settings');
    const request = store.get(key);
    request.onerror = () => reject(request.error);
    request.onsuccess = () => resolve(request.result?.value ?? null);
  });
}

// Automation rules
export async function saveAutomation(rule: AutomationRule): Promise<void> {
  const db = await openDB();
  return new Promise((resolve, reject) => {
    const tx = db.transaction('automations', 'readwrite');
    const store = tx.objectStore('automations');
    store.put(rule);
    tx.oncomplete = () => resolve();
    tx.onerror = () => reject(tx.error);
  });
}

export async function getAllAutomations(): Promise<AutomationRule[]> {
  const db = await openDB();
  return new Promise((resolve, reject) => {
    const tx = db.transaction('automations', 'readonly');
    const store = tx.objectStore('automations');
    const request = store.getAll();
    request.onerror = () => reject(request.error);
    request.onsuccess = () => resolve(request.result);
  });
}

export async function deleteAutomation(id: string): Promise<void> {
  const db = await openDB();
  return new Promise((resolve, reject) => {
    const tx = db.transaction('automations', 'readwrite');
    const store = tx.objectStore('automations');
    store.delete(id);
    tx.oncomplete = () => resolve();
    tx.onerror = () => reject(tx.error);
  });
}

// Plugins
export async function savePlugin(plugin: PluginEntry): Promise<void> {
  const db = await openDB();
  return new Promise((resolve, reject) => {
    const tx = db.transaction('plugins', 'readwrite');
    const store = tx.objectStore('plugins');
    store.put(plugin);
    tx.oncomplete = () => resolve();
    tx.onerror = () => reject(tx.error);
  });
}

export async function getAllPlugins(): Promise<PluginEntry[]> {
  const db = await openDB();
  return new Promise((resolve, reject) => {
    const tx = db.transaction('plugins', 'readonly');
    const store = tx.objectStore('plugins');
    const request = store.getAll();
    request.onerror = () => reject(request.error);
    request.onsuccess = () => resolve(request.result);
  });
}

export async function deletePlugin(id: string): Promise<void> {
  const db = await openDB();
  return new Promise((resolve, reject) => {
    const tx = db.transaction('plugins', 'readwrite');
    const store = tx.objectStore('plugins');
    store.delete(id);
    tx.oncomplete = () => resolve();
    tx.onerror = () => reject(tx.error);
  });
}

// Full export/import
export async function exportAll(): Promise<string> {
  const [memory, sessions, automations, plugins] = await Promise.all([
    getAllMemory(),
    getAllSessions(),
    getAllAutomations(),
    getAllPlugins(),
  ]);
  return JSON.stringify({ memory, sessions, automations, plugins, exportedAt: new Date().toISOString() }, null, 2);
}

export async function importAll(json: string): Promise<void> {
  const data = JSON.parse(json);
  const db = await openDB();

  if (data.memory) {
    const tx = db.transaction('memory', 'readwrite');
    data.memory.forEach((e: MemoryEntry) => tx.objectStore('memory').put(e));
    await new Promise(r => { tx.oncomplete = r; });
  }
  if (data.sessions) {
    const tx = db.transaction('sessions', 'readwrite');
    data.sessions.forEach((s: SessionEntry) => tx.objectStore('sessions').put(s));
    await new Promise(r => { tx.oncomplete = r; });
  }
}
