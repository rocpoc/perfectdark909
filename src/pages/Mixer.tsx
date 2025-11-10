import React, { useRef, useEffect, useState, useCallback } from "react";
import { Container } from "../components/Container";
import { useBPM } from "../contexts/BPMContext";

interface TrackConfig {
  name: string;
  path: string;
}

const TRACKS: TrackConfig[] = [
  { name: "Kick", path: "/audio/PD Locked Groove 2/KICK.wav" },
  { name: "Top", path: "/audio/PD Locked Groove 2/TOP.wav" },
  { name: "Bass", path: "/audio/PD Locked Groove 2/BASS.wav" },
];

export const Mixer: React.FC = () => {
  const { beatInterval, getTimeToNextBeat, startTime } = useBPM();
  // Double buffering: each track has two audio instances for seamless looping
  const audioBuffersRef = useRef<{ [key: string]: { primary: HTMLAudioElement | null; secondary: HTMLAudioElement | null; active: 'primary' | 'secondary' } }>({});
  const syncIntervalRef = useRef<number | null>(null);
  const loopCheckIntervalRef = useRef<number | null>(null);
  const audioDurationsRef = useRef<{ [key: string]: number }>({});
  const masterTimeRef = useRef<number>(0);
  const beatSyncRef = useRef<number | null>(null);
  const [volumes, setVolumes] = useState<{ [key: string]: number }>({
    Kick: 0,
    Top: 0,
    Bass: 0,
  });
  const [isPlaying, setIsPlaying] = useState(false);
  const [hasUserInteracted, setHasUserInteracted] = useState(false);

  // Get active audio instance for a track
  const getActiveAudio = useCallback((trackName: string): HTMLAudioElement | null => {
    const buffer = audioBuffersRef.current[trackName];
    if (!buffer) return null;
    return buffer.active === 'primary' ? buffer.primary : buffer.secondary;
  }, []);

  // Get all active audio instances
  const getAllActiveAudio = useCallback((): HTMLAudioElement[] => {
    return TRACKS.map((track) => getActiveAudio(track.name)).filter(Boolean) as HTMLAudioElement[];
  }, [getActiveAudio]);

  // Sync all tracks to the same position
  const syncTracks = useCallback(() => {
    const playingTracks = getAllActiveAudio().filter((audio) => !audio.paused);
    if (playingTracks.length === 0) return;

    const avgTime = playingTracks.reduce((sum, audio) => sum + audio.currentTime, 0) / playingTracks.length;
    
    // Set all active tracks to the average time
    playingTracks.forEach((audio) => {
      if (!audio.paused) {
        audio.currentTime = avgTime;
      }
    });

    masterTimeRef.current = avgTime;
  }, [getAllActiveAudio]);

  // Start sync monitoring - sync tracks to BPM beat boundaries
  const startSyncMonitoring = useCallback(() => {
    if (syncIntervalRef.current !== null) return;

    syncIntervalRef.current = window.setInterval(() => {
      const playingTracks = getAllActiveAudio().filter((audio) => !audio.paused);
      
      if (playingTracks.length === 0 || startTime === null) return;

      // Calculate expected position based on BPM timing
      const now = performance.now() / 1000;
      const elapsed = now - startTime;
      
      // Get all track times
      const times = playingTracks.map((audio) => audio.currentTime);
      const maxTime = Math.max(...times);
      const minTime = Math.min(...times);
      const drift = maxTime - minTime;

      // If drift is significant, sync them to BPM timing
      if (drift > 0.02) {
        playingTracks.forEach((audio) => {
          const duration = audio.duration;
          if (duration) {
            const beatsInDuration = Math.floor(duration / beatInterval);
            const beatAlignedDuration = beatsInDuration * beatInterval;
            // Sync to beat-aligned position based on elapsed time
            const syncTime = elapsed % beatAlignedDuration;
            if (syncTime < duration - 0.15) {
              audio.currentTime = syncTime;
            }
          }
        });
        masterTimeRef.current = elapsed % (playingTracks[0].duration || beatInterval);
      } else {
        // Update master time reference
        masterTimeRef.current = playingTracks[0].currentTime;
      }
    }, 50); // Check more frequently (every 50ms) for tighter sync
  }, [beatInterval, startTime, getAllActiveAudio]);

  // Stop sync monitoring
  const stopSyncMonitoring = useCallback(() => {
    if (syncIntervalRef.current !== null) {
      clearInterval(syncIntervalRef.current);
      syncIntervalRef.current = null;
    }
  }, []);

  // Preload next buffer for seamless looping
  const preloadNextBuffer = useCallback((trackName: string) => {
    const buffer = audioBuffersRef.current[trackName];
    if (!buffer) return;

    const inactiveBuffer = buffer.active === 'primary' ? buffer.secondary : buffer.primary;
    if (!inactiveBuffer) return;

    // Reset and preload the inactive buffer
    inactiveBuffer.currentTime = 0;
    inactiveBuffer.volume = volumes[trackName] * 0.5;
    
    // Pre-warm by playing and immediately pausing
    inactiveBuffer.play().then(() => {
      inactiveBuffer.pause();
      inactiveBuffer.currentTime = 0;
    }).catch(() => {});
  }, [volumes]);

  // Switch to next buffer (seamless loop)
  const switchToNextBuffer = useCallback((trackName: string) => {
    const buffer = audioBuffersRef.current[trackName];
    if (!buffer) return;

    const currentAudio = buffer.active === 'primary' ? buffer.primary : buffer.secondary;
    const nextAudio = buffer.active === 'primary' ? buffer.secondary : buffer.primary;
    
    if (!currentAudio || !nextAudio) return;

    // Stop current audio
    currentAudio.pause();
    currentAudio.currentTime = 0;

    // Start next audio (already preloaded)
    nextAudio.currentTime = 0;
    nextAudio.play().catch(() => {});

    // Switch active buffer
    buffer.active = buffer.active === 'primary' ? 'secondary' : 'primary';

    // Preload the buffer we just stopped for next loop
    preloadNextBuffer(trackName);
  }, [preloadNextBuffer]);

  // Start loop check for seamless looping with buffering
  const startLoopCheck = useCallback(() => {
    if (loopCheckIntervalRef.current !== null) return;
    
    loopCheckIntervalRef.current = window.setInterval(() => {
      TRACKS.forEach((track) => {
        const audio = getActiveAudio(track.name);
        if (!audio || audio.paused) return;
        
        const duration = audioDurationsRef.current[track.name] || audio.duration;
        if (duration) {
          // Calculate how many beats fit in the audio duration
          const beatsInDuration = Math.floor(duration / beatInterval);
          const beatAlignedDuration = beatsInDuration * beatInterval;
          
          // If we're near the end, switch to preloaded buffer
          if (audio.currentTime >= beatAlignedDuration - 0.1) {
            switchToNextBuffer(track.name);
          }
        }
      });
    }, 16); // Check every ~16ms (60fps) for smooth looping
  }, [beatInterval, getActiveAudio, switchToNextBuffer]);

  // Stop loop check
  const stopLoopCheck = useCallback(() => {
    if (loopCheckIntervalRef.current !== null) {
      clearInterval(loopCheckIntervalRef.current);
      loopCheckIntervalRef.current = null;
    }
  }, []);

  // Initialize audio elements with double buffering
  useEffect(() => {
    // Create double buffers for each track
    TRACKS.forEach((track) => {
      const primary = new Audio(track.path);
      const secondary = new Audio(track.path);
      
      primary.preload = "auto";
      secondary.preload = "auto";
      primary.volume = 0;
      secondary.volume = 0;
      primary.load();
      secondary.load();
      
      audioBuffersRef.current[track.name] = {
        primary,
        secondary,
        active: 'primary'
      };

      // Wait for metadata to get duration
      primary.addEventListener("loadedmetadata", () => {
        audioDurationsRef.current[track.name] = primary.duration;
      });
      secondary.addEventListener("loadedmetadata", () => {
        if (!audioDurationsRef.current[track.name]) {
          audioDurationsRef.current[track.name] = secondary.duration;
        }
      });
    });

    // Wait for all audio to load before attempting to play
    const attemptAutoplay = async () => {
      try {
        // Wait for all audio buffers to be fully ready
        await Promise.all(
          TRACKS.flatMap((track) => {
            const buffer = audioBuffersRef.current[track.name];
            if (!buffer) return [];
            
            return [buffer.primary, buffer.secondary].map((audio) => {
              return new Promise<void>((resolve) => {
                if (!audio) {
                  resolve();
                  return;
                }

                const checkReady = () => {
                  if (audio.readyState >= 4) {
                    resolve();
                  } else {
                    audio.addEventListener("canplaythrough", checkReady, { once: true });
                    audio.addEventListener("loadeddata", checkReady, { once: true });
                  }
                };
                
                checkReady();
                audio.load();
              });
            });
          })
        );

        // Pre-warm all buffers
        TRACKS.forEach((track) => {
          const buffer = audioBuffersRef.current[track.name];
          if (buffer) {
            [buffer.primary, buffer.secondary].forEach((audio) => {
              if (audio) {
                audio.currentTime = 0;
                audio.play().then(() => {
                  audio.pause();
                  audio.currentTime = 0;
                }).catch(() => {});
              }
            });
          }
        });

        // Preload secondary buffers for seamless looping
        TRACKS.forEach((track) => {
          preloadNextBuffer(track.name);
        });

        // Wait for next beat boundary with precise timing
        const schedulePlayback = () => {
          const timeToNextBeat = getTimeToNextBeat();
          const delayMs = Math.max(0, timeToNextBeat * 1000 - 50);
          
          setTimeout(() => {
            requestAnimationFrame(() => {
              requestAnimationFrame(() => {
                // Reset and start all primary buffers
                TRACKS.forEach((track) => {
                  const buffer = audioBuffersRef.current[track.name];
                  if (buffer && buffer.primary) {
                    buffer.primary.currentTime = 0;
                    buffer.primary.play().catch(() => {});
                  }
                });
                
                masterTimeRef.current = 0;
                setIsPlaying(true);
                startSyncMonitoring();
                startLoopCheck();
              });
            });
          }, delayMs);
        };

        schedulePlayback();
      } catch (error) {
        setIsPlaying(false);
      }
    };

    attemptAutoplay();

    // Cleanup
    return () => {
      stopSyncMonitoring();
      stopLoopCheck();
      TRACKS.forEach((track) => {
        const buffer = audioBuffersRef.current[track.name];
        if (buffer) {
          [buffer.primary, buffer.secondary].forEach((audio) => {
            if (audio) {
              audio.pause();
              audio.src = "";
            }
          });
          audioBuffersRef.current[track.name] = {
            primary: null,
            secondary: null,
            active: 'primary'
          };
        }
      });
    };
  }, [startSyncMonitoring, stopSyncMonitoring, startLoopCheck, stopLoopCheck, getTimeToNextBeat, preloadNextBuffer]);

  // Handle user interaction to start playback with sync to BPM
  const handleUserInteraction = useCallback(async () => {
    if (!hasUserInteracted && !isPlaying && startTime !== null) {
      try {
        // Ensure all buffers are ready
        await Promise.all(
          TRACKS.flatMap((track) => {
            const buffer = audioBuffersRef.current[track.name];
            if (!buffer) return [];
            
            return [buffer.primary, buffer.secondary].map((audio) => {
              return new Promise<void>((resolve) => {
                if (!audio || audio.readyState >= 4) {
                  resolve();
                  return;
                }
                audio.addEventListener("canplaythrough", () => resolve(), { once: true });
              });
            });
          })
        );

        // Pre-warm all buffers
        TRACKS.forEach((track) => {
          const buffer = audioBuffersRef.current[track.name];
          if (buffer) {
            [buffer.primary, buffer.secondary].forEach((audio) => {
              if (audio) {
                audio.currentTime = 0;
                audio.play().then(() => {
                  audio.pause();
                  audio.currentTime = 0;
                }).catch(() => {});
              }
            });
          }
        });

        // Preload secondary buffers
        TRACKS.forEach((track) => {
          preloadNextBuffer(track.name);
        });

        // Schedule playback on next beat boundary
        const timeToNextBeat = getTimeToNextBeat();
        const delayMs = Math.max(0, timeToNextBeat * 1000 - 50);
        
        setTimeout(() => {
          requestAnimationFrame(() => {
            requestAnimationFrame(() => {
              TRACKS.forEach((track) => {
                const buffer = audioBuffersRef.current[track.name];
                if (buffer && buffer.primary) {
                  buffer.primary.currentTime = 0;
                  buffer.primary.play().catch(() => {});
                }
              });
              
              masterTimeRef.current = 0;
              setIsPlaying(true);
              setHasUserInteracted(true);
              startSyncMonitoring();
              startLoopCheck();
            });
          });
        }, delayMs);
      } catch (error) {
        console.error("Failed to start playback:", error);
      }
    }
  }, [hasUserInteracted, isPlaying, startTime, getTimeToNextBeat, startSyncMonitoring, startLoopCheck, preloadNextBuffer]);

  // Manual sync button handler
  const handleSync = useCallback(() => {
    syncTracks();
  }, [syncTracks]);

  // Update volume when slider changes
  // 100% slider = -6dB = 0.5 linear volume
  const handleVolumeChange = useCallback(
    (trackName: string, value: number) => {
      const sliderPercent = value / 100; // Convert 0-100 to 0-1
      const audioVolume = sliderPercent * 0.5; // Scale to max 0.5 (-6dB)
      setVolumes((prev) => ({ ...prev, [trackName]: sliderPercent }));

      // Update volume on both buffers
      const buffer = audioBuffersRef.current[trackName];
      if (buffer) {
        if (buffer.primary) buffer.primary.volume = audioVolume;
        if (buffer.secondary) buffer.secondary.volume = audioVolume;
      }

      // Trigger user interaction if needed
      if (!hasUserInteracted) {
        handleUserInteraction();
      }
    },
    [hasUserInteracted, handleUserInteraction]
  );

  return (
    <Container
      showToolbar
      showMarquee={false}
      fullHeight={true}
      padBottom={true}
      className="!bg-black"
      contentClassName="max-w-6xl w-full text-white px-6 sm:px-10 pt-16 md:pt-20"
    >
      <div className="flex flex-col items-center justify-center min-h-[60vh]">
        <div className="flex flex-col items-center mb-12">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold uppercase mb-4 font-helvetica">
            Audio Mixer
          </h1>
          {isPlaying && (
            <button
              onClick={handleSync}
              className="px-4 py-2 text-sm uppercase tracking-wider text-white/80 hover:text-white border border-white/30 hover:border-white/60 transition-colors duration-200 font-helvetica font-bold"
            >
              Sync
            </button>
          )}
        </div>

        {!isPlaying && !hasUserInteracted && (
          <div className="mb-8 text-center text-white/70 text-sm md:text-base">
            <p>Click any slider to start playback</p>
          </div>
        )}

        <div className="w-full max-w-4xl">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
            {TRACKS.map((track) => (
              <div
                key={track.name}
                className="flex flex-col items-center space-y-4"
              >
                <h2 className="text-xl md:text-2xl font-bold uppercase font-helvetica">
                  {track.name}
                </h2>

                <div className="w-full flex flex-col items-center space-y-2">
                  <input
                    type="range"
                    min="0"
                    max="100"
                    value={volumes[track.name] * 100}
                    onChange={(e) =>
                      handleVolumeChange(track.name, Number(e.target.value))
                    }
                    className="w-full h-2 bg-white/20 rounded-lg appearance-none cursor-pointer accent-white slider"
                    style={{
                      background: `linear-gradient(to right, white 0%, white ${
                        volumes[track.name] * 100
                      }%, rgba(255,255,255,0.2) ${volumes[track.name] * 100}%, rgba(255,255,255,0.2) 100%)`,
                    }}
                  />

                  <div className="text-sm md:text-base text-white/80 font-helvetica">
                    {Math.round(volumes[track.name] * 100)}%
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Container>
  );
};

