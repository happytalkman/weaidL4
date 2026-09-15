import { useState } from 'react';
import { THEMES } from '../lib/themes';

interface SettingsDrawerProps {
  open: boolean;
  onClose: () => void;
  assistantName: string;
  userName: string;
  voice: string;
  wakeWordEnabled: boolean;
  uiColor: string;
  currentThemeName: string;
  geminiKey: string;
  onAssistantNameChange: (name: string) => void;
  onVoiceChange: (voice: string) => void;
  onWakeWordToggle: (enabled: boolean) => void;
  onThemeChange: (themeName: string) => void;
  onGeminiKeyChange: (key: string) => void;
}

const VOICES = ['Puck', 'Charon', 'Kore', 'Fenrir', 'Aoede'];

export default function SettingsDrawer({
  open, onClose, assistantName, voice, wakeWordEnabled, currentThemeName, geminiKey,
  onAssistantNameChange, onVoiceChange, onWakeWordToggle, onThemeChange, onGeminiKeyChange
}: SettingsDrawerProps) {
  const [name, setName] = useState(assistantName);
  const [apiKey, setApiKey] = useState(geminiKey);

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      <div className="absolute inset-0 bg-black/60" onClick={onClose} />
      <div className="relative w-[480px] max-h-[85vh] overflow-y-auto rounded-lg border border-[#1a5c7a] bg-[rgba(0,6,10,0.97)] p-6">
        {/* Header */}
        <h2 className="text-[12px] font-bold text-[#00d4ff] mb-2">⚙ SETTINGS</h2>
        <div className="h-px bg-[#0d3347] mb-4" />

        {/* Assistant Name */}
        <div className="mb-4">
          <label className="text-[8px] text-[#3a8a9a] uppercase tracking-wider block mb-1">
            Assistant Name
          </label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            onBlur={() => onAssistantNameChange(name)}
            className="w-full h-8 bg-[#000d12] border border-[#0d3347] rounded px-2 text-[10px] text-[#8ffcff] font-mono focus:border-[#00d4ff] outline-none"
          />
        </div>

        {/* Gemini API Key */}
        <div className="mb-4">
          <label className="text-[8px] text-[#3a8a9a] uppercase tracking-wider block mb-1">
            Gemini API Key
          </label>
          <input
            type="password"
            value={apiKey}
            onChange={(e) => setApiKey(e.target.value)}
            onBlur={() => onGeminiKeyChange(apiKey)}
            placeholder="Enter your Gemini API key..."
            className="w-full h-8 bg-[#000d12] border border-[#0d3347] rounded px-2 text-[10px] text-[#8ffcff] font-mono focus:border-[#00d4ff] outline-none placeholder:text-[#1a5c7a]"
          />
          <p className="text-[7px] text-[#3a8a9a] mt-1">
            Get a free key at <span className="text-[#00d4ff]">aistudio.google.com</span>
          </p>
        </div>

        {/* Voice */}
        <div className="mb-4">
          <label className="text-[8px] text-[#3a8a9a] uppercase tracking-wider block mb-2">
            Assistant Voice
          </label>
          <div className="flex gap-1 flex-wrap">
            {VOICES.map((v) => (
              <button
                key={v}
                onClick={() => onVoiceChange(v)}
                className={`px-3 py-1 text-[8px] font-bold rounded border transition-all ${
                  voice === v
                    ? 'bg-[#001f2e] text-[#00d4ff] border-[#00d4ff]'
                    : 'bg-transparent text-[#5ab8cc] border-[#0d3347] hover:text-[#8ffcff] hover:border-[#1a5c7a]'
                }`}
              >
                {v}
              </button>
            ))}
          </div>
        </div>

        {/* Theme */}
        <div className="mb-4">
          <label className="text-[8px] text-[#3a8a9a] uppercase tracking-wider block mb-2">
            Theme
          </label>
          <div className="flex gap-1 flex-wrap">
            {Object.entries(THEMES).map(([key, theme]) => (
              <button
                key={key}
                onClick={() => onThemeChange(key)}
                className={`px-3 py-1.5 text-[8px] font-bold rounded border transition-all ${
                  currentThemeName === key
                    ? 'border-[#00d4ff] text-[#00d4ff]'
                    : 'border-[#0d3347] text-[#5ab8cc] hover:text-[#8ffcff] hover:border-[#1a5c7a]'
                }`}
                style={currentThemeName === key ? { background: `${theme.pri}14` } : {}}
              >
                <span className="inline-block w-2 h-2 rounded-full mr-1" style={{ background: theme.pri }} />
                {theme.name}
              </button>
            ))}
          </div>
        </div>

        {/* Wake Word */}
        <div className="mb-4">
          <label className="text-[8px] text-[#3a8a9a] uppercase tracking-wider block mb-2">
            Wake Word ("Hey WEAID")
          </label>
          <button
            onClick={() => onWakeWordToggle(!wakeWordEnabled)}
            className={`px-4 py-1.5 text-[8px] font-bold rounded border transition-all ${
              wakeWordEnabled
                ? 'bg-[#001a08] text-[#00ff88] border-[#00aa55]'
                : 'bg-transparent text-[#3a8a9a] border-[#0d3347] hover:text-[#8ffcff]'
            }`}
          >
            {wakeWordEnabled ? 'ON' : 'OFF'}
          </button>
        </div>

        {/* Close */}
        <button
          onClick={onClose}
          className="w-full h-8 mt-4 bg-transparent border border-[#0d3347] rounded text-[9px] text-[#5ab8cc] hover:text-[#8ffcff] hover:border-[#1a5c7a] transition-all"
        >
          CLOSE
        </button>
      </div>
    </div>
  );
}
