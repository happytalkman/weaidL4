// Gemini API integration
const GEMINI_API_URL = 'https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent';

export interface GeminiMessage {
  role: 'user' | 'model';
  parts: Array<{ text: string }>;
}

export interface GeminiConfig {
  apiKey: string;
  systemInstruction?: string;
  temperature?: number;
  maxTokens?: number;
}

let currentApiKey = '';
let conversationHistory: GeminiMessage[] = [];

export function setGeminiApiKey(key: string): void {
  currentApiKey = key;
}

export function getGeminiApiKey(): string {
  return currentApiKey;
}

export function clearConversation(): void {
  conversationHistory = [];
}

export async function sendMessage(
  text: string,
  config?: Partial<GeminiConfig>,
  imageBase64?: string
): Promise<string> {
  const apiKey = config?.apiKey || currentApiKey;
  if (!apiKey) {
    throw new Error('API key not set. Please configure your Gemini API key in Settings.');
  }

  const systemInstruction = config?.systemInstruction ||
    'You are WEAID, a highly capable AI assistant displayed on a futuristic HUD interface. ' +
    'Be concise, direct, and helpful. Use technical language when appropriate. ' +
    'Keep responses under 200 words unless asked for detail.';

  // Add user message to history
  const userParts: any[] = [{ text }];
  if (imageBase64) {
    userParts.push({
      inline_data: {
        mime_type: 'image/jpeg',
        data: imageBase64,
      },
    });
  }

  conversationHistory.push({
    role: 'user',
    parts: [{ text }],
  });

  // Keep history manageable (last 20 messages)
  if (conversationHistory.length > 20) {
    conversationHistory = conversationHistory.slice(-20);
  }

  try {
    const response = await fetch(`${GEMINI_API_URL}?key=${apiKey}`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        contents: conversationHistory,
        systemInstruction: {
          parts: [{ text: systemInstruction }],
        },
        generationConfig: {
          temperature: config?.temperature ?? 0.7,
          maxOutputTokens: config?.maxTokens ?? 1024,
        },
      }),
    });

    if (!response.ok) {
      const err = await response.json();
      throw new Error(err.error?.message || `API error: ${response.status}`);
    }

    const data = await response.json();
    const aiText = data.candidates?.[0]?.content?.parts?.[0]?.text || 'No response generated.';

    // Add AI response to history
    conversationHistory.push({
      role: 'model',
      parts: [{ text: aiText }],
    });

    return aiText;
  } catch (error: any) {
    // Remove the failed user message from history
    conversationHistory.pop();
    throw error;
  }
}

export async function streamMessage(
  text: string,
  onChunk: (chunk: string) => void,
  config?: Partial<GeminiConfig>
): Promise<string> {
  const apiKey = config?.apiKey || currentApiKey;
  if (!apiKey) {
    throw new Error('API key not set');
  }

  const systemInstruction = config?.systemInstruction ||
    'You are WEAID, a highly capable AI assistant. Be concise and direct.';

  conversationHistory.push({
    role: 'user',
    parts: [{ text }],
  });

  if (conversationHistory.length > 20) {
    conversationHistory = conversationHistory.slice(-20);
  }

  try {
    const response = await fetch(
      `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:streamGenerateContent?alt=sse&key=${apiKey}`,
      {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          contents: conversationHistory,
          systemInstruction: {
            parts: [{ text: systemInstruction }],
          },
          generationConfig: {
            temperature: config?.temperature ?? 0.7,
            maxOutputTokens: config?.maxTokens ?? 1024,
          },
        }),
      }
    );

    if (!response.ok) {
      const err = await response.json();
      throw new Error(err.error?.message || `API error: ${response.status}`);
    }

    const reader = response.body?.getReader();
    if (!reader) throw new Error('No response body');

    const decoder = new TextDecoder();
    let fullText = '';

    while (true) {
      const { done, value } = await reader.read();
      if (done) break;

      const chunk = decoder.decode(value, { stream: true });
      const lines = chunk.split('\n');

      for (const line of lines) {
        if (line.startsWith('data: ')) {
          try {
            const json = JSON.parse(line.slice(6));
            const text = json.candidates?.[0]?.content?.parts?.[0]?.text;
            if (text) {
              fullText += text;
              onChunk(fullText);
            }
          } catch {}
        }
      }
    }

    conversationHistory.push({
      role: 'model',
      parts: [{ text: fullText }],
    });

    return fullText;
  } catch (error: any) {
    conversationHistory.pop();
    throw error;
  }
}

// Image analysis
export function imageToBase64(file: File): Promise<string> {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = () => {
      const base64 = (reader.result as string).split(',')[1];
      resolve(base64);
    };
    reader.onerror = reject;
    reader.readAsDataURL(file);
  });
}
