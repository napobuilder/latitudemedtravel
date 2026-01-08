import React, { useState, useRef, useEffect, useCallback } from 'react';
import { useTranslation } from '../hooks/useTranslation';

interface VideoTestimonial {
  id: string;
  url: string;
  nombre?: string;
  ubicacion?: string;
}

const videos: VideoTestimonial[] = [
  { id: '1', url: '/assets/videos/WhatsApp Video 2025-12-17 at 8.28.37 PM.mp4' },
  { id: '2', url: '/assets/videos/WhatsApp Video 2025-12-17 at 8.28.46 PM (1).mp4' },
  { id: '3', url: '/assets/videos/WhatsApp Video 2025-12-17 at 8.28.45 PM (3).mp4' },
  { id: '4', url: '/assets/videos/WhatsApp Video 2025-12-17 at 8.28.35 PM.mp4' },
  { id: '5', url: '/assets/videos/WhatsApp Video 2025-12-17 at 8.28.36 PM.mp4' },
  { id: '6', url: '/assets/videos/WhatsApp Video 2025-12-17 at 8.28.45 PM (1).mp4' },
  { id: '7', url: '/assets/videos/WhatsApp Video 2025-12-17 at 8.28.45 PM (2).mp4' },
  { id: '8', url: '/assets/videos/WhatsApp Video 2025-12-17 at 8.28.45 PM.mp4' },
  { id: '9', url: '/assets/videos/WhatsApp Video 2025-12-17 at 8.28.46 PM (2).mp4' },
  { id: '10', url: '/assets/videos/WhatsApp Video 2025-12-17 at 8.28.46 PM.mp4' },
  { id: '11', url: '/assets/videos/WhatsApp Video 2025-12-17 at 8.28.31 PM.mp4' },
  { id: '12', url: '/assets/videos/WhatsApp Video 2025-12-17 at 8.28.33 PM.mp4' },
];

const Testimonials: React.FC = () => {
  const t = useTranslation();
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const [progress, setProgress] = useState<number[]>(new Array(videos.length).fill(0));
  const [videoDurations, setVideoDurations] = useState<number[]>(new Array(videos.length).fill(0));
  const [ripple, setRipple] = useState<{ x: number; y: number } | null>(null);
  const [longPressTimer, setLongPressTimer] = useState<NodeJS.Timeout | null>(null);
  
  const videoRefs = useRef<(HTMLVideoElement | null)[]>([]);
  const carouselRef = useRef<HTMLDivElement>(null);
  const thumbnailRefs = useRef<(HTMLButtonElement | null)[]>([]);
  const progressIntervalRef = useRef<NodeJS.Timeout | null>(null);

  const goToNext = useCallback(() => {
    if (currentIndex < videos.length - 1) {
      setCurrentIndex(currentIndex + 1);
      setIsPlaying(false);
    }
  }, [currentIndex]);

  const goToPrevious = useCallback(() => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
      setIsPlaying(false);
    }
  }, [currentIndex]);

  const goToSlide = useCallback((index: number) => {
    setCurrentIndex(index);
    setIsPlaying(false);
  }, []);

  const handlePlayPause = useCallback(() => {
    const video = videoRefs.current[currentIndex];
    if (video) {
      if (isPlaying) {
        video.pause();
        setIsPlaying(false);
      } else {
        video.play();
        setIsPlaying(true);
      }
    }
  }, [currentIndex, isPlaying]);

  const handleMuteToggle = useCallback((e: React.MouseEvent) => {
    e.stopPropagation();
    setIsMuted(!isMuted);
  }, [isMuted]);

  // Tap zones handler
  const handleTap = useCallback((e: React.MouseEvent<HTMLDivElement>) => {
    const rect = carouselRef.current?.getBoundingClientRect();
    if (!rect) return;

    const x = e.clientX - rect.left;
    const width = rect.width;
    const tapZone = x / width;

    // Ripple effect
    setRipple({ x: e.clientX - rect.left, y: e.clientY - rect.top });
    setTimeout(() => setRipple(null), 600);

    if (tapZone < 0.25) {
      // Left zone - previous
      goToPrevious();
    } else if (tapZone > 0.75) {
      // Right zone - next
      goToNext();
    } else {
      // Center zone - play/pause
      handlePlayPause();
    }
  }, [goToNext, goToPrevious, handlePlayPause]);

  // Touch handlers
  const handleTouchStart = useCallback((e: React.TouchEvent) => {
    const touch = e.touches[0];
    const rect = carouselRef.current?.getBoundingClientRect();
    if (!rect) return;

    const x = touch.clientX - rect.left;
    const width = rect.width;
    const tapZone = x / width;

    // Long press detection
    const timer = setTimeout(() => {
      if (isPlaying) {
        handlePlayPause();
      }
    }, 500);
    setLongPressTimer(timer);
  }, [isPlaying, handlePlayPause]);

  const handleTouchEnd = useCallback((e: React.TouchEvent) => {
    if (longPressTimer) {
      clearTimeout(longPressTimer);
      setLongPressTimer(null);
    }

    const touch = e.changedTouches[0];
    const rect = carouselRef.current?.getBoundingClientRect();
    if (!rect) return;

    const x = touch.clientX - rect.left;
    const width = rect.width;
    const tapZone = x / width;

    // Ripple effect
    setRipple({ x: touch.clientX - rect.left, y: touch.clientY - rect.top });
    setTimeout(() => setRipple(null), 600);

    if (tapZone < 0.25) {
      goToPrevious();
    } else if (tapZone > 0.75) {
      goToNext();
    } else {
      handlePlayPause();
    }
  }, [longPressTimer, goToNext, goToPrevious, handlePlayPause]);

  // Track video progress
  useEffect(() => {
    const video = videoRefs.current[currentIndex];
    if (!video) return;

    const updateProgress = () => {
      if (video.duration) {
        const currentProgress = (video.currentTime / video.duration) * 100;
        setProgress(prev => {
          const newProgress = [...prev];
          newProgress[currentIndex] = currentProgress;
          return newProgress;
        });
      }
    };

    if (isPlaying) {
      progressIntervalRef.current = setInterval(updateProgress, 100);
    } else {
      if (progressIntervalRef.current) {
        clearInterval(progressIntervalRef.current);
      }
    }

    return () => {
      if (progressIntervalRef.current) {
        clearInterval(progressIntervalRef.current);
      }
    };
  }, [currentIndex, isPlaying]);

  // Load video durations
  useEffect(() => {
    videoRefs.current.forEach((video, index) => {
      if (video) {
        const handleLoadedMetadata = () => {
          if (video.duration) {
            setVideoDurations(prev => {
              const newDurations = [...prev];
              newDurations[index] = video.duration;
              return newDurations;
            });
          }
        };
        video.addEventListener('loadedmetadata', handleLoadedMetadata);
        return () => video.removeEventListener('loadedmetadata', handleLoadedMetadata);
      }
    });
  }, []);

  // Pause all videos except current
  useEffect(() => {
    videoRefs.current.forEach((video, index) => {
      if (video) {
        if (index !== currentIndex) {
          video.pause();
          video.currentTime = 0;
        } else {
          video.muted = isMuted;
        }
      }
    });
  }, [currentIndex, isMuted]);

  // Handle video end - auto advance
  useEffect(() => {
    const video = videoRefs.current[currentIndex];
    if (video) {
      const handleEnded = () => {
        setIsPlaying(false);
        setProgress(prev => {
          const newProgress = [...prev];
          newProgress[currentIndex] = 100;
          return newProgress;
        });
        if (currentIndex < videos.length - 1) {
          setTimeout(() => {
            goToNext();
          }, 300);
        }
      };
      video.addEventListener('ended', handleEnded);
      return () => video.removeEventListener('ended', handleEnded);
    }
  }, [currentIndex, goToNext]);

  // Visibility API - pause when tab is hidden
  useEffect(() => {
    const handleVisibilityChange = () => {
      if (document.hidden) {
        const video = videoRefs.current[currentIndex];
        if (video && isPlaying) {
          video.pause();
          setIsPlaying(false);
        }
      }
    };

    document.addEventListener('visibilitychange', handleVisibilityChange);
    return () => document.removeEventListener('visibilitychange', handleVisibilityChange);
  }, [currentIndex, isPlaying]);

  // Auto-scroll thumbnail to active
  useEffect(() => {
    const thumbnail = thumbnailRefs.current[currentIndex];
    if (thumbnail) {
      thumbnail.scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'center' });
    }
  }, [currentIndex]);

  // Reset progress when changing video
  useEffect(() => {
    const video = videoRefs.current[currentIndex];
    if (video && !isPlaying) {
      setProgress(prev => {
        const newProgress = [...prev];
        newProgress[currentIndex] = 0;
        return newProgress;
      });
    }
  }, [currentIndex, isPlaying]);

  return (
    <section id="testimonios" className="py-12 md:py-20 lg:py-28 bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8 md:mb-12">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-brand-blue-900 mb-4">
            {t.testimonials.title}
          </h2>
          <p className="max-w-2xl mx-auto text-base md:text-lg text-gray-600">
            {t.testimonials.subtitle}
          </p>
        </div>

        {/* Instagram Stories-style Player */}
        <div className="max-w-sm sm:max-w-md md:max-w-lg lg:max-w-xl mx-auto">
          <div
            ref={carouselRef}
            className="relative bg-black rounded-2xl md:rounded-3xl shadow-2xl overflow-hidden"
            style={{ aspectRatio: '9/16' }}
            onTouchStart={handleTouchStart}
            onTouchEnd={handleTouchEnd}
            onClick={handleTap}
          >
            {/* Animated Progress Bars (Story-style) */}
            <div className="absolute top-0 left-0 right-0 flex gap-1 p-2 z-20">
              {videos.map((_, index) => (
                <div
                  key={index}
                  className="flex-1 h-1 bg-white/20 rounded-full overflow-hidden cursor-pointer"
                  onClick={(e) => {
                    e.stopPropagation();
                    goToSlide(index);
                  }}
                >
                  <div
                    className={`h-full rounded-full transition-all duration-100 ${
                      index < currentIndex
                        ? 'bg-white w-full'
                        : index === currentIndex
                        ? 'bg-white'
                        : 'bg-white/20 w-0'
                    }`}
                    style={{
                      width: index === currentIndex ? `${progress[index]}%` : index < currentIndex ? '100%' : '0%',
                      transition: index === currentIndex && isPlaying ? 'width 0.1s linear' : 'width 0.3s ease-out',
                    }}
                  />
                </div>
              ))}
            </div>

            {/* Video Container */}
            <div
              className="flex transition-transform duration-500 ease-out h-full"
              style={{
                transform: `translateX(-${currentIndex * 100}%)`,
              }}
            >
              {videos.map((video, index) => (
                <div
                  key={video.id}
                  className="min-w-full h-full relative flex-shrink-0"
                >
                  <video
                    ref={(el) => (videoRefs.current[index] = el)}
                    src={video.url}
                    className="w-full h-full object-cover"
                    playsInline
                    muted={isMuted}
                    loop={false}
                    preload="metadata"
                  />

                  {/* Play/Pause Overlay */}
                  {index === currentIndex && !isPlaying && (
                    <div className="absolute inset-0 flex items-center justify-center bg-black/20 pointer-events-none">
                      <div className="bg-white/20 backdrop-blur-md rounded-full p-4 md:p-6 transform transition-transform hover:scale-110">
                        <svg
                          className="w-12 h-12 md:w-16 md:h-16 text-white"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path d="M6.3 2.841A1.5 1.5 0 004 4.11V15.89a1.5 1.5 0 002.3 1.269l9.344-5.89a1.5 1.5 0 000-2.538L6.3 2.84z"></path>
                        </svg>
                      </div>
                    </div>
                  )}

                  {/* Video Counter with Animation */}
                  <div className="absolute top-12 md:top-16 left-4 bg-black/60 backdrop-blur-md rounded-full px-3 md:px-4 py-1.5 md:py-2 transform transition-all duration-300">
                    <span className="text-white text-xs md:text-sm font-semibold">
                      {index + 1} / {videos.length}
                    </span>
                  </div>
                </div>
              ))}
            </div>

            {/* Ripple Effect */}
            {ripple && (
              <div
                className="absolute pointer-events-none z-30 animate-ripple"
                style={{
                  left: ripple.x - 20,
                  top: ripple.y - 20,
                  width: 40,
                  height: 40,
                }}
              >
                <div className="w-full h-full bg-white/30 rounded-full" />
              </div>
            )}

            {/* Mute/Unmute Button */}
            <button
              onClick={handleMuteToggle}
              className="absolute top-12 md:top-16 right-4 bg-black/60 backdrop-blur-md hover:bg-black/80 rounded-full p-2 md:p-2.5 transition-all duration-300 z-20 transform hover:scale-110"
              aria-label={isMuted ? 'Unmute' : 'Mute'}
            >
              {isMuted ? (
                <svg
                  className="w-5 h-5 md:w-6 md:h-6 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M5.586 15H4a1 1 0 01-1-1v-4a1 1 0 011-1h1.586l4.707-4.707C10.923 3.663 12 4.109 12 5v14c0 .891-1.077 1.337-1.707.707L5.586 15z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2"
                  />
                </svg>
              ) : (
                <svg
                  className="w-5 h-5 md:w-6 md:h-6 text-white animate-pulse"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M15.536 8.464a5 5 0 010 7.072m2.828-9.9a9 9 0 010 12.728M5.586 15H4a1 1 0 01-1-1v-4a1 1 0 011-1h1.586l4.707-4.707C10.923 3.663 12 4.109 12 5v14c0 .891-1.077 1.337-1.707.707L5.586 15z"
                  />
                </svg>
              )}
            </button>

            {/* Navigation Arrows - Desktop only */}
            {currentIndex > 0 && (
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  goToPrevious();
                }}
                className="hidden md:block absolute left-4 top-1/2 -translate-y-1/2 bg-white/20 backdrop-blur-md hover:bg-white/30 rounded-full p-3 transition-all duration-300 z-20 transform hover:scale-110"
                aria-label={t.testimonials.previousVideo}
              >
                <svg
                  className="w-6 h-6 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M15 19l-7-7 7-7"
                  />
                </svg>
              </button>
            )}

            {currentIndex < videos.length - 1 && (
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  goToNext();
                }}
                className="hidden md:block absolute right-4 top-1/2 -translate-y-1/2 bg-white/20 backdrop-blur-md hover:bg-white/30 rounded-full p-3 transition-all duration-300 z-20 transform hover:scale-110"
                aria-label={t.testimonials.nextVideo}
              >
                <svg
                  className="w-6 h-6 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </button>
            )}
          </div>

          {/* Enhanced Thumbnail Navigation */}
          <div className="mt-4 md:mt-6 flex gap-2 md:gap-3 overflow-x-auto pb-2 scrollbar-hide snap-x snap-mandatory">
            {videos.map((video, index) => (
              <button
                key={video.id}
                ref={(el) => (thumbnailRefs.current[index] = el)}
                onClick={() => goToSlide(index)}
                className={`relative flex-shrink-0 rounded-lg md:rounded-xl overflow-hidden transition-all duration-300 snap-center ${
                  index === currentIndex
                    ? 'ring-2 md:ring-4 ring-brand-yellow-400 scale-105 shadow-lg'
                    : 'opacity-60 hover:opacity-100 hover:scale-[1.02]'
                }`}
                style={{ 
                  width: '60px', 
                  height: '80px',
                  minWidth: '60px',
                }}
              >
                <video
                  src={video.url}
                  className="w-full h-full object-cover"
                  muted
                  playsInline
                  preload="metadata"
                />
                {index === currentIndex && (
                  <div className="absolute inset-0 bg-brand-yellow-400/20 border-2 border-brand-yellow-400 rounded-lg md:rounded-xl" />
                )}
                {/* Progress indicator on thumbnail */}
                {index < currentIndex && (
                  <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-brand-yellow-400" />
                )}
              </button>
            ))}
          </div>
        </div>

        {/* Text Testimonials Section */}
        <div className="mt-12 md:mt-16 grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          <div className="bg-white p-6 rounded-2xl shadow-md border border-gray-100 transform transition-all duration-300 hover:shadow-lg hover:scale-[1.02]">
            <div className="flex items-center mb-2">
              <span className="text-yellow-400 text-lg">★★★★★</span>
            </div>
            <p className="text-gray-600 italic text-sm md:text-base">
              &quot;{t.testimonials.testimonials.ana.text}&quot;
            </p>
            <p className="font-bold text-right mt-3 text-brand-blue-900 text-sm md:text-base">{t.testimonials.testimonials.ana.author}</p>
          </div>
          <div className="bg-white p-6 rounded-2xl shadow-md border border-gray-100 transform transition-all duration-300 hover:shadow-lg hover:scale-[1.02]">
            <div className="flex items-center mb-2">
              <span className="text-yellow-400 text-lg">★★★★★</span>
            </div>
            <p className="text-gray-600 italic text-sm md:text-base">
              &quot;{t.testimonials.testimonials.isabella.text}&quot;
            </p>
            <p className="font-bold text-right mt-3 text-brand-blue-900 text-sm md:text-base">{t.testimonials.testimonials.isabella.author}</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
