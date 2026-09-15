import { useState, useEffect, useCallback, useRef } from 'react';
import HudCanvas3D from './components/HudCanvas3D';
import MetricBar from './components/MetricBar';
import LogPanel from './components/LogPanel';
import SettingsDrawer from './components/SettingsDrawer';
import MemoryPanel from './components/MemoryPanel';
import ContentPanel from './components/ContentPanel';
import Terminal from './components/Terminal';
import CommandPalette from './components/CommandPalette';
import CodeEditor from './components/CodeEditor';
import { THEMES, applyTheme, type Theme } from './lib/themes';
import { getAllMemory, saveMemory, deleteMemory, saveSession, getAllSessions, type MemoryEntry, type SessionEntry } from './lib/db';
import { audioAnalyzer, speechManager } from './lib/audio';
import { sendMessage, setGeminiApiKey, getGeminiApiKey, clearConversation } from './lib/gemini';
import { listPlugins, executePlugin, checkAutomations, addAutomationRule, listAutomationRules } from './lib/plugins';
import { getWeatherByCity, webSearch, getSystemMetrics, type WeatherData } from './lib/external';
import { downloadProjectZip } from './lib/download';

interface LogEntry {
  text: string;
  tag: 'you' | 'ai' | 'sys' | 'err' | 'file';
  timestamp: string;
}

function getTimestamp(): string {
  return new Date().toLocaleTimeString('en-US', { hour12: false });
}

export default function App() {
  // Core state
  const [assistantName, setAssistantName] = useState('W.E.BIG.A.I');
  const [voice, setVoice] = useState('Puck');
  const [wakeWordEnabled, setWakeWordEnabled] = useState(false);
  const [currentTheme, setCurrentTheme] = useState<Theme>(THEMES.default);
  const [use3D, setUse3D] = useState(true);
  const [state, setState] = useState('LISTENING');
  const [speaking, setSpeaking] = useState(false);
  const [muted, setMuted] = useState(false);
  const [logs, setLogs] = useState<LogEntry[]>([]);
  const [memory, setMemory] = useState<MemoryEntry[]>([]);
  const [contentTitle, setContentTitle] = useState('');
  const [contentText, setContentText] = useState('');
  const [contentVisible, setContentVisible] = useState(false);
  const [inputText, setInputText] = useState('');
  const [clock, setClock] = useState('');
  const [audioLevel, setAudioLevel] = useState(0);

  // UI panels
  const [settingsOpen, setSettingsOpen] = useState(false);
  const [memoryOpen, setMemoryOpen] = useState(false);
  const [terminalOpen, setTerminalOpen] = useState(false);
  const [commandPaletteOpen, setCommandPaletteOpen] = useState(false);
  const [codeEditorOpen, setCodeEditorOpen] = useState(false);
  const [sessionsOpen, setSessionsOpen] = useState(false);

  // Features
  const [geminiKey, setGeminiKey] = useState('');
  const [weatherData, setWeatherData] = useState<WeatherData | null>(null);
  const [systemMetrics, setSystemMetrics] = useState({ cpu: 23, mem: 41, gpu: 15, net: 2.4, temp: 52 });
  const [audioActive, setAudioActive] = useState(false);
  const [speechActive, setSpeechActive] = useState(false);
  const [interimTranscript, setInterimTranscript] = useState('');

  const sessionId = useRef(crypto.randomUUID());
  const sessionMessages = useRef<Array<{role: 'user' | 'ai' | 'sys'; text: string; timestamp: string}>>([]);

  // Initialize
  useEffect(() => {
    applyTheme(currentTheme);
    loadMemory();
    loadSessions();
    loadSystemMetrics();
  }, []);

  // Clock
  useEffect(() => {
    const update = () => setClock(new Date().toLocaleTimeString('en-US', { hour12: false }));
    update();
    const interval = setInterval(update, 1000);
    return () => clearInterval(interval);
  }, []);

  // Audio level monitoring
  useEffect(() => {
    if (!audioActive) {
      // Simulated audio when not using mic
      const interval = setInterval(() => {
        if (speaking) setAudioLevel(0.3 + Math.random() * 0.7);
        else if (state === 'LISTENING') setAudioLevel(Math.random() * 0.3);
        else setAudioLevel(Math.random() * 0.05);
      }, 50);
      return () => clearInterval(interval);
    } else {
      const interval = setInterval(() => {
        setAudioLevel(audioAnalyzer.getLevel());
      }, 50);
      return () => clearInterval(interval);
    }
  }, [audioActive, speaking, state]);

  // System metrics
  const loadSystemMetrics = async () => {
    const metrics = await getSystemMetrics();
    setSystemMetrics({
      cpu: metrics.cpu,
      mem: metrics.memory || 41,
      gpu: Math.round(Math.random() * 40 + 10),
      net: metrics.downlink || 2.4,
      temp: 52,
    });
  };

  useEffect(() => {
    const interval = setInterval(loadSystemMetrics, 5000);
    return () => clearInterval(interval);
  }, []);

  // Memory
  const loadMemory = async () => {
    const mem = await getAllMemory();
    if (mem.length === 0) {
      // Default memories
      const defaults: MemoryEntry[] = [
        { key: 'assistant_name', value: 'WEAID', category: 'identity', updated: new Date().toISOString().split('T')[0] },
        { key: 'platform', value: 'Web Browser', category: 'identity', updated: new Date().toISOString().split('T')[0] },
        { key: 'version', value: 'Mark LIII', category: 'identity', updated: new Date().toISOString().split('T')[0] },
      ];
      for (const d of defaults) await saveMemory(d);
      setMemory(defaults);
    } else {
      setMemory(mem);
    }
  };

  const loadSessions = async () => {
    // Sessions loaded on demand
  };

  const addLog = useCallback((text: string, tag: LogEntry['tag'] = 'sys') => {
    setLogs(prev => [...prev.slice(-100), { text, tag, timestamp: getTimestamp() }]);
  }, []);

  // Handle user input
  const handleSend = useCallback(async () => {
    if (!inputText.trim()) return;
    const text = inputText;
    setInputText('');
    setInterimTranscript('');

    addLog(`You: ${text}`, 'you');
    sessionMessages.current.push({ role: 'user', text, timestamp: getTimestamp() });

    // Check automations
    const autoResults = await checkAutomations(text);
    autoResults.forEach(r => addLog(r, 'sys'));

    // Handle built-in commands
    const lower = text.toLowerCase();
    if (lower.startsWith('/weather')) {
      const city = text.split(' ').slice(1).join(' ') || 'Seoul';
      addLog(`SYS: Fetching weather for ${city}...`, 'sys');
      setState('THINKING');
      const weather = await getWeatherByCity(city);
      setWeatherData(weather);
      setContentTitle(`WEATHER — ${weather.city}`);
      setContentText(`Temperature: ${weather.temperature}°C\nHumidity: ${weather.humidity}%\nWind: ${weather.windspeed} km/h\nCondition: ${weather.description} ${weather.icon}`);
      setContentVisible(true);
      addLog(`🌤️ weather → ${weather.temperature}°C, ${weather.description}`, 'file');
      setState('LISTENING');
      return;
    }

    if (lower.startsWith('/search') || lower.startsWith('/news')) {
      const query = text.split(' ').slice(1).join(' ');
      if (!query) { addLog('ERR: Please provide a search query', 'err'); return; }
      addLog(`SYS: Searching for "${query}"...`, 'sys');
      setState('THINKING');
      const results = await webSearch(query);
      if (results.length > 0) {
        setContentTitle(`SEARCH — ${query}`);
        setContentText(results.map((r, i) => `${i + 1}. ${r.title}\n   ${r.snippet.slice(0, 100)}...\n   ${r.url}`).join('\n\n'));
        setContentVisible(true);
        addLog(`🔍 search → ${results.length} results found`, 'file');
      } else {
        addLog('SYS: No results found', 'sys');
      }
      setState('LISTENING');
      return;
    }

    if (lower === '/clear') {
      setLogs([]);
      return;
    }

    if (lower === '/status') {
      const m = await getSystemMetrics();
      addLog(`SYS: CPU ${m.cpu}% | Memory ${m.memory}% | Online: ${m.online} | Connection: ${m.connectionType}`, 'sys');
      return;
    }

    if (lower === '/plugins') {
      const plugins = listPlugins();
      addLog(`SYS: ${plugins.length} plugins active: ${plugins.map(p => p.name).join(', ')}`, 'sys');
      return;
    }

    if (lower === '/memory') {
      const mem = await getAllMemory();
      addLog(`SYS: ${mem.length} memories stored`, 'sys');
      setMemoryOpen(true);
      return;
    }

    if (lower === '/help') {
      addLog('SYS: Commands: /weather [city], /search [query], /news [query], /clear, /status, /plugins, /memory, /help', 'sys');
      return;
    }

    // Try Gemini API
    const apiKey = geminiKey || getGeminiApiKey();
    if (apiKey) {
      setState('THINKING');
      try {
        setSpeaking(true);
        setState('SPEAKING');
        const response = await sendMessage(text);
        addLog(`WEAID: ${response}`, 'ai');
        sessionMessages.current.push({ role: 'ai', text: response, timestamp: getTimestamp() });

        // Speak response if speech is active
        if (speechActive) {
          await speechManager.speak(response);
        }
      } catch (e: any) {
        addLog(`ERR: ${e.message}`, 'err');
      }
      setSpeaking(false);
      setState('LISTENING');
    } else {
      // Offline response
      setState('THINKING');
      setTimeout(() => {
        const responses = [
          "I understand your request. Please configure a Gemini API key in Settings for full AI capabilities.",
          "Processing... For complete AI responses, add your Gemini API key in ⚙ Settings.",
          "I'm running in offline mode. Connect a Gemini API key for intelligent responses.",
          "Command received. Enable Gemini API in Settings for advanced AI assistance.",
        ];
        const response = responses[Math.floor(Math.random() * responses.length)];
        addLog(`WEAID: ${response}`, 'ai');
        setState('LISTENING');
      }, 800);
    }
  }, [inputText, geminiKey, speechActive, addLog]);

  // Audio toggle
  const toggleAudio = async () => {
    if (audioActive) {
      audioAnalyzer.stop();
      setAudioActive(false);
      addLog('SYS: Microphone deactivated', 'sys');
    } else {
      await audioAnalyzer.start();
      setAudioActive(audioAnalyzer.isActive);
      if (audioAnalyzer.isActive) {
        addLog('SYS: Microphone activated — real-time audio analysis', 'sys');
      } else {
        addLog('ERR: Could not access microphone', 'err');
      }
    }
  };

  // Speech toggle
  const toggleSpeech = () => {
    if (speechActive) {
      speechManager.stopListening();
      setSpeechActive(false);
      setInterimTranscript('');
      addLog('SYS: Voice recognition deactivated', 'sys');
    } else {
      speechManager.onResult((text, isFinal) => {
        if (isFinal) {
          setInputText(text);
          setInterimTranscript('');
          // Auto-send
          setTimeout(() => {
            setInputText('');
            handleSendWithText(text);
          }, 100);
        } else {
          setInterimTranscript(text);
        }
      });
      speechManager.startListening();
      setSpeechActive(true);
      addLog('SYS: Voice recognition activated — speak your command', 'sys');
    }
  };

  const handleSendWithText = async (text: string) => {
    setInputText(text);
    setTimeout(() => {
      setInputText('');
      // Trigger send logic
      addLog(`You: ${text}`, 'you');
      setState('THINKING');
      setTimeout(() => {
        const apiKey = geminiKey || getGeminiApiKey();
        if (apiKey) {
          sendMessage(text).then(response => {
            addLog(`WEAID: ${response}`, 'ai');
            setState('LISTENING');
          }).catch(e => {
            addLog(`ERR: ${e.message}`, 'err');
            setState('LISTENING');
          });
        } else {
          addLog('WEAID: API key not configured. Please add your Gemini API key in Settings.', 'ai');
          setState('LISTENING');
        }
      }, 500);
    }, 0);
  };

  // Theme change
  const handleThemeChange = (themeName: string) => {
    const theme = THEMES[themeName];
    if (theme) {
      setCurrentTheme(theme);
      applyTheme(theme);
      addLog(`SYS: Theme changed to "${theme.name}"`, 'sys');
    }
  };

  // Keyboard shortcuts
  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if ((e.ctrlKey || e.metaKey) && e.key === 'k') {
        e.preventDefault();
        setCommandPaletteOpen(prev => !prev);
      } else if ((e.ctrlKey || e.metaKey) && e.key === '`') {
        e.preventDefault();
        setTerminalOpen(prev => !prev);
      } else if ((e.ctrlKey || e.metaKey) && e.shiftKey && e.key === 'E') {
        e.preventDefault();
        setCodeEditorOpen(prev => !prev);
      } else if (e.key === 'Escape') {
        setCommandPaletteOpen(false);
        setTerminalOpen(false);
        setCodeEditorOpen(false);
        setSettingsOpen(false);
        setMemoryOpen(false);
      }
    };
    window.addEventListener('keydown', handler);
    return () => window.removeEventListener('keydown', handler);
  }, []);

  // Commands for palette
  const commands = [
    { id: 'settings', label: 'Open Settings', description: 'Configure assistant', shortcut: '⚙', action: () => setSettingsOpen(true) },
    { id: 'memory', label: 'Open Memory Panel', description: 'View stored memories', shortcut: '🧠', action: () => setMemoryOpen(true) },
    { id: 'terminal', label: 'Open Terminal', description: 'Command-line interface', shortcut: 'Ctrl+`', action: () => setTerminalOpen(true) },
    { id: 'code', label: 'Open Code Editor', description: 'Write and execute code', shortcut: 'Ctrl+Shift+E', action: () => setCodeEditorOpen(true) },
    { id: 'mute', label: muted ? 'Unmute' : 'Mute', description: 'Toggle audio output', action: () => setMuted(!muted) },
    { id: 'mic', label: audioActive ? 'Stop Microphone' : 'Start Microphone', description: 'Toggle real-time audio analysis', action: toggleAudio },
    { id: 'voice', label: speechActive ? 'Stop Voice Recognition' : 'Start Voice Recognition', description: 'Toggle speech-to-text', action: toggleSpeech },
    { id: '3d', label: use3D ? 'Switch to 2D HUD' : 'Switch to 3D HUD', description: 'Toggle 3D visualization', action: () => setUse3D(!use3D) },
    { id: 'clear', label: 'Clear Logs', description: 'Remove all log entries', action: () => setLogs([]) },
    { id: 'download', label: 'Download Source Code', description: 'Download project as ZIP file', action: downloadProjectZip },
    { id: 'theme-default', label: 'Theme: Default (Cyan)', description: 'Classic cyan theme', action: () => handleThemeChange('default') },
    { id: 'theme-ironman', label: 'Theme: Iron Man', description: 'Gold and red', action: () => handleThemeChange('ironman') },
    { id: 'theme-tron', label: 'Theme: Tron', description: 'Neon cyan and magenta', action: () => handleThemeChange('tron') },
    { id: 'theme-matrix', label: 'Theme: Matrix', description: 'Green code rain', action: () => handleThemeChange('matrix') },
    { id: 'theme-cyberpunk', label: 'Theme: Cyberpunk', description: 'Pink and purple', action: () => handleThemeChange('cyberpunk') },
  ];

  // Terminal command handler
  const handleTerminalCommand = (cmd: string): string => {
    if (cmd === 'memory') return `${memory.length} memories stored`;
    if (cmd === 'theme default') { handleThemeChange('default'); return 'Theme changed to Default'; }
    if (cmd === 'theme ironman') { handleThemeChange('ironman'); return 'Theme changed to Iron Man'; }
    if (cmd === 'theme tron') { handleThemeChange('tron'); return 'Theme changed to Tron'; }
    if (cmd === 'theme matrix') { handleThemeChange('matrix'); return 'Theme changed to Matrix'; }
    if (cmd === 'theme cyberpunk') { handleThemeChange('cyberpunk'); return 'Theme changed to Cyberpunk'; }
    if (cmd === 'weather') return weatherData ? `${weatherData.city}: ${weatherData.temperature}°C, ${weatherData.description}` : 'No weather data. Use /weather [city] first.';
    return `Unknown command: ${cmd}. Type "help" for available commands.`;
  };

  // Save session on unmount
  useEffect(() => {
    return () => {
      if (sessionMessages.current.length > 0) {
        saveSession({
          id: sessionId.current,
          timestamp: new Date().toISOString(),
          messages: sessionMessages.current,
        });
      }
    };
  }, []);

  return (
    <div className="w-full h-full flex flex-col overflow-hidden" style={{ background: currentTheme.bg }}>
      {/* Header */}
      <header className="h-10 flex items-center justify-between px-4 border-b shrink-0" style={{ borderColor: currentTheme.border, background: currentTheme.panel }}>
        <div className="flex items-center gap-3">
          <span className="text-[10px] font-bold" style={{ color: currentTheme.pri }}>◈</span>
          <span className="text-[10px] font-bold tracking-wider" style={{ color: currentTheme.white }}>
            {assistantName}
          </span>
          <span className="text-[8px] px-2 py-0.5 rounded border" style={{ borderColor: currentTheme.borderA, color: currentTheme.textDim }}>
            PROTOCOL LIII
          </span>
          {interimTranscript && (
            <span className="text-[8px] italic animate-pulse" style={{ color: currentTheme.acc }}>
              🎙 {interimTranscript}
            </span>
          )}
        </div>
        <div className="flex items-center gap-4">
          <span className="text-[8px]" style={{ color: currentTheme.textDim }}>
            {geminiKey || getGeminiApiKey() ? '🟢 AI Connected' : '🔴 No API Key'}
          </span>
          <span className="text-[8px]" style={{ color: currentTheme.textDim }}>
            {audioActive ? '🎙 Mic Active' : '🔇 Mic Off'}
          </span>
          <button
            onClick={downloadProjectZip}
            className="px-2 py-0.5 text-[8px] font-bold border rounded transition-all hover:opacity-80"
            style={{ borderColor: currentTheme.borderB, color: currentTheme.pri }}
            title="Download source code as ZIP"
          >
            📥 DOWNLOAD
          </button>
          <span className="text-[10px] font-mono" style={{ color: currentTheme.textMed }}>{clock}</span>
        </div>
      </header>

      {/* Main body */}
      <div className="flex-1 flex overflow-hidden">
        {/* Left panel */}
        <aside className="w-[148px] flex flex-col gap-1.5 p-2 border-r overflow-y-auto shrink-0" style={{ borderColor: currentTheme.border, background: currentTheme.panel }}>
          <div className="text-[7px] uppercase tracking-wider px-1 mb-1" style={{ color: currentTheme.textDim }}>Quick Access</div>

          <SidebarButton icon="⚙" label="SETTINGS" onClick={() => setSettingsOpen(true)} theme={currentTheme} />
          <SidebarButton icon="🧠" label="MEMORY" onClick={() => setMemoryOpen(true)} theme={currentTheme} />
          <SidebarButton icon="💻" label="TERMINAL" onClick={() => setTerminalOpen(true)} theme={currentTheme} />
          <SidebarButton icon="📝" label="CODE" onClick={() => setCodeEditorOpen(true)} theme={currentTheme} />
          <SidebarButton
            icon={muted ? '🔇' : '🎙'}
            label={muted ? 'UNMUTE' : 'MUTE'}
            onClick={() => setMuted(!muted)}
            active={muted}
            activeColor={currentTheme.red}
            theme={currentTheme}
          />
          <SidebarButton
            icon="🎤"
            label={audioActive ? 'MIC ON' : 'MIC OFF'}
            onClick={toggleAudio}
            active={audioActive}
            activeColor={currentTheme.green}
            theme={currentTheme}
          />
          <SidebarButton
            icon="🗣"
            label={speechActive ? 'VOICE ON' : 'VOICE'}
            onClick={toggleSpeech}
            active={speechActive}
            activeColor={currentTheme.acc}
            theme={currentTheme}
          />
          <SidebarButton
            icon={use3D ? '3D' : '2D'}
            label="HUD MODE"
            onClick={() => setUse3D(!use3D)}
            theme={currentTheme}
          />
          <SidebarButton
            icon="📥"
            label="DOWNLOAD"
            onClick={downloadProjectZip}
            theme={currentTheme}
          />

          <div className="flex-1" />

          <div className="text-[7px] uppercase tracking-wider px-1 mb-1 mt-2" style={{ color: currentTheme.textDim }}>System</div>
          <MetricBar label="CPU" value={systemMetrics.cpu} text={`${Math.round(systemMetrics.cpu)}%`} color={currentTheme.pri} />
          <MetricBar label="RAM" value={systemMetrics.mem} text={`${Math.round(systemMetrics.mem)}%`} color={currentTheme.pri} />
          <MetricBar label="GPU" value={systemMetrics.gpu} text={`${Math.round(systemMetrics.gpu)}%`} color={currentTheme.acc} />
          <MetricBar label="NET" value={Math.min(100, systemMetrics.net * 2)} text={`${systemMetrics.net.toFixed(1)} MB/s`} color={currentTheme.green} />
        </aside>

        {/* Center - HUD + Content */}
        <main className="flex-1 flex flex-col overflow-hidden">
          <div className="flex-1 relative min-h-0">
            {use3D ? (
              <HudCanvas3D
                state={state}
                speaking={speaking}
                muted={muted}
                audioLevel={audioLevel}
                assistantName={assistantName}
                themeColor={currentTheme.pri}
              />
            ) : (
              <div className="w-full h-full flex items-center justify-center" style={{ background: currentTheme.bg }}>
                <div className="text-center">
                  <div className="text-[24px] font-bold tracking-[0.3em] mb-4" style={{ color: currentTheme.pri }}>
                    {assistantName}
                  </div>
                  <div className="text-[10px]" style={{ color: currentTheme.textDim }}>{state}</div>
                </div>
              </div>
            )}
            {/* State overlay */}
            <div className="absolute top-3 left-3 flex items-center gap-2">
              <div className="w-2 h-2 rounded-full" style={{
                backgroundColor: state === 'LISTENING' ? currentTheme.green :
                  state === 'SPEAKING' ? currentTheme.acc :
                  state === 'THINKING' ? currentTheme.acc2 : currentTheme.textDim
              }} />
              <span className="text-[8px] uppercase" style={{ color: currentTheme.textDim }}>{state}</span>
            </div>
            <div className="absolute top-3 right-3 flex items-center gap-2">
              <div className="w-16 h-1.5 rounded-full overflow-hidden" style={{ background: currentTheme.barBg }}>
                <div className="h-full rounded-full transition-all duration-75" style={{
                  width: `${audioLevel * 100}%`,
                  backgroundColor: speaking ? currentTheme.acc : currentTheme.pri,
                }} />
              </div>
              <span className="text-[7px]" style={{ color: currentTheme.textDim }}>
                {speaking ? 'OUT' : 'IN'}
              </span>
            </div>
          </div>

          {/* Content panel */}
          <div className="h-[180px] shrink-0 p-2 border-t" style={{ borderColor: currentTheme.border }}>
            {contentVisible ? (
              <ContentPanel title={contentTitle} content={contentText} visible={contentVisible} />
            ) : (
              <div className="h-full flex items-center justify-center">
                <div className="text-[8px] text-center" style={{ color: currentTheme.borderB }}>
                  ◈ Content panel — use /weather, /search, /news commands
                </div>
              </div>
            )}
          </div>
        </main>

        {/* Right panel - Log */}
        <aside className="w-[340px] flex flex-col border-l shrink-0" style={{ borderColor: currentTheme.border, background: currentTheme.panel }}>
          <div className="h-8 flex items-center justify-between px-3 border-b" style={{ borderColor: currentTheme.border }}>
            <span className="text-[8px] font-bold" style={{ color: currentTheme.pri }}>◈ ACTIVITY LOG</span>
            <span className="text-[7px]" style={{ color: currentTheme.textDim }}>{logs.length} entries</span>
          </div>
          <div className="flex-1 overflow-hidden p-2">
            <LogPanel logs={logs} />
          </div>
          <div className="p-2 border-t" style={{ borderColor: currentTheme.border }}>
            <div className="flex gap-2">
              <input
                type="text"
                value={inputText}
                onChange={(e) => setInputText(e.target.value)}
                onKeyDown={(e) => e.key === 'Enter' && handleSend()}
                placeholder="Type /help for commands..."
                className="flex-1 h-8 border rounded px-3 text-[9px] font-mono outline-none"
                style={{
                  background: currentTheme.dark,
                  borderColor: currentTheme.border,
                  color: currentTheme.text,
                }}
              />
              <button
                onClick={handleSend}
                className="h-8 px-3 border rounded text-[8px] font-bold transition-all"
                style={{
                  borderColor: currentTheme.borderA,
                  color: currentTheme.pri,
                }}
              >
                ▸ SEND
              </button>
            </div>
          </div>
        </aside>
      </div>

      {/* Footer */}
      <footer className="h-7 flex items-center justify-between px-4 border-t shrink-0" style={{ borderColor: currentTheme.border, background: currentTheme.panel }}>
        <div className="flex items-center gap-4">
          <span className="text-[7px]" style={{ color: currentTheme.textDim }}>
            VOICE: <span style={{ color: currentTheme.textMed }}>{voice}</span>
          </span>
          <span className="text-[7px]" style={{ color: currentTheme.textDim }}>
            THEME: <span style={{ color: currentTheme.pri }}>{currentTheme.name}</span>
          </span>
          <span className="text-[7px]" style={{ color: currentTheme.textDim }}>
            HUD: <span style={{ color: currentTheme.textMed }}>{use3D ? '3D' : '2D'}</span>
          </span>
        </div>
        <div className="flex items-center gap-4">
          <span className="text-[7px]" style={{ color: currentTheme.textDim }}>
            <kbd className="px-1 border rounded text-[6px]" style={{ borderColor: currentTheme.border }}>Ctrl+K</kbd> Commands
          </span>
          <span className="text-[7px]" style={{ color: currentTheme.textDim }}>
            <kbd className="px-1 border rounded text-[6px]" style={{ borderColor: currentTheme.border }}>Ctrl+`</kbd> Terminal
          </span>
          <span className="text-[7px]" style={{ color: currentTheme.borderB }}>MARK LIII v2.0</span>
        </div>
      </footer>

      {/* Overlays */}
      <SettingsDrawer
        open={settingsOpen}
        onClose={() => setSettingsOpen(false)}
        assistantName={assistantName}
        userName=""
        voice={voice}
        wakeWordEnabled={wakeWordEnabled}
        uiColor={currentTheme.pri}
        currentThemeName={Object.keys(THEMES).find(k => THEMES[k] === currentTheme) || 'default'}
        geminiKey={geminiKey}
        onAssistantNameChange={setAssistantName}
        onVoiceChange={setVoice}
        onWakeWordToggle={setWakeWordEnabled}
        onThemeChange={handleThemeChange}
        onGeminiKeyChange={(key: string) => { setGeminiKey(key); setGeminiApiKey(key); }}
      />
      <MemoryPanel
        open={memoryOpen}
        onClose={() => setMemoryOpen(false)}
        entries={memory}
        onDelete={async (key, category) => {
          await deleteMemory(key);
          setMemory(prev => prev.filter(m => !(m.key === key && m.category === category)));
          addLog(`SYS: Memory "${key}" deleted`, 'sys');
        }}
      />
      <Terminal
        open={terminalOpen}
        onClose={() => setTerminalOpen(false)}
        onCommand={handleTerminalCommand}
      />
      <CommandPalette
        open={commandPaletteOpen}
        onClose={() => setCommandPaletteOpen(false)}
        commands={commands}
      />
      <CodeEditor
        open={codeEditorOpen}
        onClose={() => setCodeEditorOpen(false)}
      />
    </div>
  );
}

// Sidebar button
function SidebarButton({ icon, label, onClick, active = false, activeColor = '#00d4ff', theme }: {
  icon: string; label: string; onClick: () => void; active?: boolean; activeColor?: string; theme: Theme;
}) {
  return (
    <button
      onClick={onClick}
      className="flex items-center gap-2 px-2 py-1.5 rounded text-left transition-all border"
      style={{
        borderColor: active ? activeColor : 'transparent',
        background: active ? `${activeColor}14` : 'transparent',
      }}
      onMouseEnter={(e) => {
        if (!active) {
          e.currentTarget.style.borderColor = theme.border;
          e.currentTarget.style.background = theme.panel2;
        }
      }}
      onMouseLeave={(e) => {
        if (!active) {
          e.currentTarget.style.borderColor = 'transparent';
          e.currentTarget.style.background = 'transparent';
        }
      }}
    >
      <span className="text-[10px]">{icon}</span>
      <span className="text-[7px] font-bold tracking-wider" style={{ color: active ? activeColor : theme.textMed }}>
        {label}
      </span>
    </button>
  );
}
