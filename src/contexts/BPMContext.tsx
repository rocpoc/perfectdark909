import React, { createContext, useContext, useRef, useEffect, useState, ReactNode } from "react";

interface BPMContextType {
  bpm: number;
  beatInterval: number; // seconds per beat
  getCurrentBeat: () => number;
  getTimeToNextBeat: () => number;
  startTime: number | null;
}

const BPMContext = createContext<BPMContextType | undefined>(undefined);

const GLOBAL_BPM = 133;
const BEAT_INTERVAL = 60 / GLOBAL_BPM; // ~0.451 seconds per beat

export const BPMProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const startTimeRef = useRef<number | null>(null);
  const [startTime, setStartTime] = useState<number | null>(null);

  // Initialize BPM timing when provider mounts
  useEffect(() => {
    // Set start time to current time
    const now = performance.now() / 1000; // Convert to seconds
    startTimeRef.current = now;
    setStartTime(now);
  }, []);

  const getCurrentBeat = () => {
    if (startTimeRef.current === null) return 0;
    const now = performance.now() / 1000;
    const elapsed = now - startTimeRef.current;
    return Math.floor(elapsed / BEAT_INTERVAL);
  };

  const getTimeToNextBeat = () => {
    if (startTimeRef.current === null) return 0;
    const now = performance.now() / 1000;
    const elapsed = now - startTimeRef.current;
    const currentBeat = Math.floor(elapsed / BEAT_INTERVAL);
    const nextBeatTime = startTimeRef.current + (currentBeat + 1) * BEAT_INTERVAL;
    return nextBeatTime - now;
  };

  const value: BPMContextType = {
    bpm: GLOBAL_BPM,
    beatInterval: BEAT_INTERVAL,
    getCurrentBeat,
    getTimeToNextBeat,
    startTime,
  };

  return <BPMContext.Provider value={value}>{children}</BPMContext.Provider>;
};

export const useBPM = (): BPMContextType => {
  const context = useContext(BPMContext);
  if (context === undefined) {
    throw new Error("useBPM must be used within a BPMProvider");
  }
  return context;
};

