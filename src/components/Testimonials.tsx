import React, { useState, useRef, useEffect } from 'react';
import { useTranslation } from '../hooks/useTranslation';

interface VideoTestimonial {
  id: string;
  url: string;
  nombre?: string;
  ubicacion?: string;
}

const videos: VideoTestimonial[] = [
  { id: '1', url: '/assets/videos/WhatsApp Video 2025-12-17 at 8.28.37 PM.mp4' }, // Broker video - primero
  { id: '2', url: '/assets/videos/WhatsApp Video 2025-12-17 at 8.28.46 PM (1).mp4' }, // Segundo
  { id: '3', url: '/assets/videos/WhatsApp Video 2025-12-17 at 8.28.45 PM (3).mp4' }, // Tercero
  { id: '4', url: '/assets/videos/WhatsApp Video 2025-12-17 at 8.28.35 PM.mp4' },
  { id: '5', url: '/assets/videos/WhatsApp Video 2025-12-17 at 8.28.36 PM.mp4' },
  { id: '6', url: '/assets/videos/WhatsApp Video 2025-12-17 at 8.28.45 PM (1).mp4' },
  { id: '7', url: '/assets/videos/WhatsApp Video 2025-12-17 at 8.28.45 PM (2).mp4' },
  { id: '8', url: '/assets/videos/WhatsApp Video 2025-12-17 at 8.28.45 PM.mp4' },
  { id: '9', url: '/assets/videos/WhatsApp Video 2025-12-17 at 8.28.46 PM (2).mp4' },
  { id: '10', url: '/assets/videos/WhatsApp Video 2025-12-17 at 8.28.46 PM.mp4' },
  { id: '11', url: '/assets/videos/WhatsApp Video 2025-12-17 at 8.28.31 PM.mp4' }, // Movido al final
  { id: '12', url: '/assets/videos/WhatsApp Video 2025-12-17 at 8.28.33 PM.mp4' }, // Movido al final
];

const Testimonials: React.FC = () => {
  const t = useTranslation();
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [touchStart, setTouchStart] = useState(0);
  const [touchEnd, setTouchEnd] = useState(0);
  const videoRefs = useRef<(HTMLVideoElement | null)[]>([]);
  const carouselRef = useRef<HTMLDivElement>(null);

  const minSwipeDistance = 50;

  const goToNext = () => {
    if (currentIndex < videos.length - 1) {
      setCurrentIndex(currentIndex + 1);
      setIsPlaying(false);
    }
  };

  const goToPrevious = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
      setIsPlaying(false);
    }
  };

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
    setIsPlaying(false);
  };

  const handleVideoClick = () => {
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
  };

  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchEnd(0);
    setTouchStart(e.targetTouches[0].clientX);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const handleTouchEnd = () => {
    if (!touchStart || !touchEnd) return;
    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > minSwipeDistance;
    const isRightSwipe = distance < -minSwipeDistance;

    if (isLeftSwipe) {
      goToNext();
    }
    if (isRightSwipe) {
      goToPrevious();
    }
  };

  // Pause all videos except current
  useEffect(() => {
    videoRefs.current.forEach((video, index) => {
      if (video) {
        if (index !== currentIndex) {
          video.pause();
          video.currentTime = 0;
        }
      }
    });
  }, [currentIndex]);

  // Handle video end
  useEffect(() => {
    const video = videoRefs.current[currentIndex];
    if (video) {
      const handleEnded = () => {
        setIsPlaying(false);
        if (currentIndex < videos.length - 1) {
          setTimeout(() => {
            goToNext();
          }, 500);
        }
      };
      video.addEventListener('ended', handleEnded);
      return () => video.removeEventListener('ended', handleEnded);
    }
  }, [currentIndex]);

  return (
    <section id="testimonios" className="py-20 md:py-28 bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-brand-blue-900 mb-4">
            {t.testimonials.title}
          </h2>
          <p className="max-w-2xl mx-auto text-lg text-gray-600">
            {t.testimonials.subtitle}
          </p>
        </div>

        {/* Instagram-style Carousel */}
        <div className="max-w-md mx-auto">
          <div
            ref={carouselRef}
            className="relative bg-black rounded-3xl shadow-2xl overflow-hidden"
            style={{ aspectRatio: '9/16', minHeight: '400px' }}
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}
          >
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
                    muted={!isPlaying || index !== currentIndex}
                    loop={false}
                    preload="metadata"
                    onClick={handleVideoClick}
                  />

                  {/* Play/Pause Overlay */}
                  {index === currentIndex && !isPlaying && (
                    <div
                      className="absolute inset-0 flex items-center justify-center bg-black/30 cursor-pointer"
                      onClick={handleVideoClick}
                    >
                      <div className="bg-white/20 backdrop-blur-md rounded-full p-6 hover:bg-white/30 transition-colors">
                        <svg
                          className="w-16 h-16 text-white"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path d="M6.3 2.841A1.5 1.5 0 004 4.11V15.89a1.5 1.5 0 002.3 1.269l9.344-5.89a1.5 1.5 0 000-2.538L6.3 2.84z"></path>
                        </svg>
                      </div>
                    </div>
                  )}

                  {/* Video Counter */}
                  <div className="absolute top-4 left-4 bg-black/50 backdrop-blur-sm rounded-full px-4 py-2">
                    <span className="text-white text-sm font-semibold">
                      {index + 1} / {videos.length}
                    </span>
                  </div>
                </div>
              ))}
            </div>

            {/* Navigation Arrows */}
            {currentIndex > 0 && (
              <button
                onClick={goToPrevious}
                className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/20 backdrop-blur-md hover:bg-white/30 rounded-full p-3 transition-colors z-10"
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
                onClick={goToNext}
                className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/20 backdrop-blur-md hover:bg-white/30 rounded-full p-3 transition-colors z-10"
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

            {/* Progress Indicators */}
            <div className="absolute top-0 left-0 right-0 flex gap-1 p-2 z-10">
              {videos.map((_, index) => (
                <button
                  key={index}
                  onClick={() => goToSlide(index)}
                  className={`flex-1 h-1 rounded-full transition-all ${
                    index === currentIndex
                      ? 'bg-white'
                      : index < currentIndex
                      ? 'bg-white/50'
                      : 'bg-white/20'
                  }`}
                  aria-label={`${t.testimonials.goToVideo} ${index + 1}`}
                />
              ))}
            </div>
          </div>

          {/* Thumbnail Navigation */}
          <div className="mt-6 flex gap-2 overflow-x-auto pb-2 scrollbar-hide">
            {videos.map((video, index) => (
              <button
                key={video.id}
                onClick={() => goToSlide(index)}
                className={`relative flex-shrink-0 rounded-lg overflow-hidden transition-all ${
                  index === currentIndex
                    ? 'ring-4 ring-brand-yellow-400 scale-105'
                    : 'opacity-60 hover:opacity-100'
                }`}
                style={{ width: '60px', height: '80px' }}
              >
                <video
                  src={video.url}
                  className="w-full h-full object-cover"
                  muted
                  playsInline
                  preload="metadata"
                />
                {index === currentIndex && (
                  <div className="absolute inset-0 bg-brand-yellow-400/20" />
                )}
              </button>
            ))}
          </div>
        </div>

        {/* Text Testimonials Section */}
        <div className="mt-16 grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          <div className="bg-white p-6 rounded-2xl shadow-md border border-gray-100">
            <div className="flex items-center mb-2">
              <span className="text-yellow-400">★★★★★</span>
            </div>
            <p className="text-gray-600 italic">
              &quot;{t.testimonials.testimonials.ana.text}&quot;
            </p>
            <p className="font-bold text-right mt-3 text-brand-blue-900">{t.testimonials.testimonials.ana.author}</p>
          </div>
          <div className="bg-white p-6 rounded-2xl shadow-md border border-gray-100">
            <div className="flex items-center mb-2">
              <span className="text-yellow-400">★★★★★</span>
            </div>
            <p className="text-gray-600 italic">
              &quot;{t.testimonials.testimonials.isabella.text}&quot;
            </p>
            <p className="font-bold text-right mt-3 text-brand-blue-900">{t.testimonials.testimonials.isabella.author}</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
