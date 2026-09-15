// Web Audio API for real-time audio analysis
export class AudioAnalyzer {
  private audioContext: AudioContext | null = null;
  private analyser: AnalyserNode | null = null;
  private source: MediaStreamAudioSourceNode | null = null;
  private stream: MediaStream | null = null;
  private dataArray: Uint8Array<ArrayBuffer> = new Uint8Array(0);
  private _isActive = false;

  get isActive() { return this._isActive; }

  async start(): Promise<void> {
    try {
      this.stream = await navigator.mediaDevices.getUserMedia({ audio: true });
      this.audioContext = new AudioContext();
      this.analyser = this.audioContext.createAnalyser();
      this.analyser.fftSize = 256;
      this.source = this.audioContext.createMediaStreamSource(this.stream);
      this.source.connect(this.analyser);
      this.dataArray = new Uint8Array(this.analyser.frequencyBinCount);
      this._isActive = true;
    } catch (e) {
      console.error('Audio start failed:', e);
      this._isActive = false;
    }
  }

  stop(): void {
    if (this.stream) {
      this.stream.getTracks().forEach(t => t.stop());
      this.stream = null;
    }
    if (this.source) {
      this.source.disconnect();
      this.source = null;
    }
    if (this.audioContext) {
      this.audioContext.close();
      this.audioContext = null;
    }
    this.analyser = null;
    this._isActive = false;
  }

  getLevel(): number {
    if (!this.analyser || !this._isActive) return 0;
    this.analyser.getByteFrequencyData(this.dataArray);
    let sum = 0;
    for (let i = 0; i < this.dataArray.length; i++) {
      sum += this.dataArray[i];
    }
    const avg = sum / this.dataArray.length;
    return Math.min(1, avg / 128);
  }

  getFrequencyData(): number[] {
    if (!this.analyser || !this._isActive) return [];
    this.analyser.getByteFrequencyData(this.dataArray);
    return Array.from(this.dataArray);
  }

  getTimeDomainData(): number[] {
    if (!this.analyser || !this._isActive) return [];
    const data = new Uint8Array(this.analyser.frequencyBinCount);
    this.analyser.getByteTimeDomainData(data);
    return Array.from(data);
  }
}

// Web Speech API
export class SpeechManager {
  private recognition: any = null;
  private synthesis = window.speechSynthesis;
  private _isListening = false;
  private _isSpeaking = false;
  private onResultCallback: ((text: string, isFinal: boolean) => void) | null = null;
  private onErrorCallback: ((error: string) => void) | null = null;
  private selectedVoice: SpeechSynthesisVoice | null = null;
  private rate = 1.0;
  private pitch = 1.0;

  get isListening() { return this._isListening; }
  get isSpeaking() { return this._isSpeaking; }

  getVoices(): SpeechSynthesisVoice[] {
    return this.synthesis.getVoices();
  }

  setVoice(voice: SpeechSynthesisVoice | null): void {
    this.selectedVoice = voice;
  }

  setRate(rate: number): void {
    this.rate = rate;
  }

  setPitch(pitch: number): void {
    this.pitch = pitch;
  }

  onResult(callback: (text: string, isFinal: boolean) => void): void {
    this.onResultCallback = callback;
  }

  onError(callback: (error: string) => void): void {
    this.onErrorCallback = callback;
  }

  startListening(language: string = 'en-US'): void {
    if (this._isListening) return;

    const SpeechRecognition = (window as any).SpeechRecognition || (window as any).webkitSpeechRecognition;
    if (!SpeechRecognition) {
      this.onErrorCallback?.('Speech recognition not supported');
      return;
    }

    this.recognition = new SpeechRecognition();
    this.recognition.continuous = true;
    this.recognition.interimResults = true;
    this.recognition.lang = language;

    this.recognition.onresult = (event: any) => {
      for (let i = event.resultIndex; i < event.results.length; i++) {
        const transcript = event.results[i][0].transcript;
        const isFinal = event.results[i].isFinal;
        this.onResultCallback?.(transcript, isFinal);
      }
    };

    this.recognition.onerror = (event: any) => {
      this.onErrorCallback?.(event.error);
      if (event.error !== 'no-speech') {
        this._isListening = false;
      }
    };

    this.recognition.onend = () => {
      if (this._isListening) {
        try { this.recognition.start(); } catch {}
      }
    };

    try {
      this.recognition.start();
      this._isListening = true;
    } catch (e) {
      this.onErrorCallback?.('Failed to start recognition');
    }
  }

  stopListening(): void {
    this._isListening = false;
    if (this.recognition) {
      try { this.recognition.stop(); } catch {}
      this.recognition = null;
    }
  }

  speak(text: string): Promise<void> {
    return new Promise((resolve) => {
      if (this._isSpeaking) {
        this.synthesis.cancel();
      }
      const utterance = new SpeechSynthesisUtterance(text);
      if (this.selectedVoice) {
        utterance.voice = this.selectedVoice;
      }
      utterance.rate = this.rate;
      utterance.pitch = this.pitch;
      utterance.onstart = () => { this._isSpeaking = true; };
      utterance.onend = () => { this._isSpeaking = false; resolve(); };
      utterance.onerror = () => { this._isSpeaking = false; resolve(); };
      this.synthesis.speak(utterance);
    });
  }

  cancelSpeech(): void {
    this.synthesis.cancel();
    this._isSpeaking = false;
  }
}

export const audioAnalyzer = new AudioAnalyzer();
export const speechManager = new SpeechManager();
