// External API integrations

// Weather API (Open-Meteo - free, no API key required)
export interface WeatherData {
  temperature: number;
  humidity: number;
  windspeed: number;
  description: string;
  city: string;
  icon: string;
}

const WEATHER_CODES: Record<number, string> = {
  0: 'Clear sky', 1: 'Mainly clear', 2: 'Partly cloudy', 3: 'Overcast',
  45: 'Foggy', 48: 'Depositing rime fog',
  51: 'Light drizzle', 53: 'Moderate drizzle', 55: 'Dense drizzle',
  61: 'Slight rain', 63: 'Moderate rain', 65: 'Heavy rain',
  71: 'Slight snow', 73: 'Moderate snow', 75: 'Heavy snow',
  80: 'Slight rain showers', 81: 'Moderate rain showers', 82: 'Violent rain showers',
  95: 'Thunderstorm', 96: 'Thunderstorm with slight hail', 99: 'Thunderstorm with heavy hail',
};

export async function getWeather(lat: number, lon: number, city: string = 'Unknown'): Promise<WeatherData> {
  try {
    const url = `https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${lon}&current_weather=true&hourly=relativehumidity_2m`;
    const res = await fetch(url);
    const data = await res.json();
    const weather = data.current_weather;
    return {
      temperature: weather.temperature,
      humidity: data.hourly?.relativehumidity_2m?.[0] ?? 50,
      windspeed: weather.windspeed,
      description: WEATHER_CODES[weather.weathercode] || 'Unknown',
      city,
      icon: getWeatherIcon(weather.weathercode),
    };
  } catch (e) {
    return { temperature: 0, humidity: 0, windspeed: 0, description: 'Unavailable', city, icon: '❓' };
  }
}

function getWeatherIcon(code: number): string {
  if (code === 0 || code === 1) return '☀️';
  if (code === 2) return '⛅';
  if (code === 3) return '☁️';
  if (code >= 45 && code <= 48) return '🌫️';
  if (code >= 51 && code <= 67) return '🌧️';
  if (code >= 71 && code <= 77) return '🌨️';
  if (code >= 80 && code <= 82) return '🌦️';
  if (code >= 95) return '⛈️';
  return '🌤️';
}

export async function getWeatherByCity(city: string): Promise<WeatherData> {
  try {
    const geoRes = await fetch(`https://geocoding-api.open-meteo.com/v1/search?name=${encodeURIComponent(city)}&count=1`);
    const geoData = await geoRes.json();
    if (!geoData.results?.length) {
      return { temperature: 0, humidity: 0, windspeed: 0, description: 'City not found', city, icon: '❓' };
    }
    const { latitude, longitude, name } = geoData.results[0];
    return getWeather(latitude, longitude, name);
  } catch {
    return { temperature: 0, humidity: 0, windspeed: 0, description: 'Error', city, icon: '❓' };
  }
}

// Web search (DuckDuckGo Instant Answer API - free)
export interface SearchResult {
  title: string;
  url: string;
  snippet: string;
}

export async function webSearch(query: string): Promise<SearchResult[]> {
  try {
    const res = await fetch(`https://api.duckduckgo.com/?q=${encodeURIComponent(query)}&format=json&no_html=1`);
    const data = await res.json();
    const results: SearchResult[] = [];

    if (data.Abstract) {
      results.push({
        title: data.Heading || query,
        url: data.AbstractURL || '',
        snippet: data.Abstract,
      });
    }

    if (data.RelatedTopics) {
      for (const topic of data.RelatedTopics.slice(0, 5)) {
        if (topic.Text && topic.FirstURL) {
          results.push({
            title: topic.Text.split(' - ')[0] || topic.Text.slice(0, 60),
            url: topic.FirstURL,
            snippet: topic.Text,
          });
        }
      }
    }

    return results;
  } catch {
    return [];
  }
}

// News search
export async function searchNews(query: string): Promise<SearchResult[]> {
  return webSearch(`${query} news today`);
}

// System monitoring (browser-based)
export interface SystemMetrics {
  cpu: number;
  memory: number;
  memoryUsed: number;
  memoryTotal: number;
  battery: number | null;
  batteryCharging: boolean | null;
  online: boolean;
  connectionType: string;
  downlink: number;
}

export async function getSystemMetrics(): Promise<SystemMetrics> {
  const nav = navigator as any;
  let battery: number | null = null;
  let batteryCharging: boolean | null = null;

  try {
    if (nav.getBattery) {
      const bat = await nav.getBattery();
      battery = Math.round(bat.level * 100);
      batteryCharging = bat.charging;
    }
  } catch {}

  let memory = 0;
  let memoryUsed = 0;
  let memoryTotal = 0;
  if (nav.deviceMemory) {
    memoryTotal = nav.deviceMemory * 1024;
    const perf = performance as any;
    if (perf.memory) {
      memoryUsed = Math.round(perf.memory.usedJSHeapSize / 1024 / 1024);
      memory = Math.round((memoryUsed / memoryTotal) * 100);
    }
  }

  const conn = nav.connection || nav.mozConnection || nav.webkitConnection;
  return {
    cpu: Math.round(Math.random() * 30 + 10), // Simulated - browsers can't read CPU
    memory,
    memoryUsed,
    memoryTotal,
    battery,
    batteryCharging,
    online: navigator.onLine,
    connectionType: conn?.effectiveType || 'unknown',
    downlink: conn?.downlink || 0,
  };
}

// WebSocket for real-time sync
export class SyncManager {
  private ws: WebSocket | null = null;
  private onMessageCallback: ((data: any) => void) | null = null;
  private _isConnected = false;

  get isConnected() { return this._isConnected; }

  connect(url: string): void {
    try {
      this.ws = new WebSocket(url);
      this.ws.onopen = () => { this._isConnected = true; };
      this.ws.onclose = () => { this._isConnected = false; };
      this.ws.onerror = () => { this._isConnected = false; };
      this.ws.onmessage = (event) => {
        try {
          const data = JSON.parse(event.data);
          this.onMessageCallback?.(data);
        } catch {}
      };
    } catch {
      this._isConnected = false;
    }
  }

  disconnect(): void {
    if (this.ws) {
      this.ws.close();
      this.ws = null;
    }
    this._isConnected = false;
  }

  send(data: any): void {
    if (this.ws && this._isConnected) {
      this.ws.send(JSON.stringify(data));
    }
  }

  onMessage(callback: (data: any) => void): void {
    this.onMessageCallback = callback;
  }
}

export const syncManager = new SyncManager();
