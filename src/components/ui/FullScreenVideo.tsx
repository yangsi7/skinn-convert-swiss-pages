import React, { useRef, useState, useEffect } from 'react';
import { Play, Pause, Volume2, VolumeX } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

interface FullScreenVideoProps {
  src: string;
  thumbnail?: string;
  title: string;
  className?: string;
}

/**
 * FullScreenVideo Component
 * A modern full-screen video component with lazy loading and smooth transitions
 * Inspired by Apple's product pages and high-end health tech sites
 */
const FullScreenVideo: React.FC<FullScreenVideoProps> = ({
  src,
  thumbnail,
  title,
  className
}) => {
  const [isInView, setIsInView] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(true);
  const [showControls, setShowControls] = useState(true);
  const videoRef = useRef<HTMLVideoElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  // Set up Intersection Observer for lazy loading
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsInView(entry.isIntersecting);
        if (entry.isIntersecting && videoRef.current) {
          // Start loading the video when in view
          videoRef.current.load();
        }
      },
      {
        threshold: 0.3, // Trigger when 30% of the video is visible
        rootMargin: '100px' // Start loading 100px before the video comes into view
      }
    );

    const containerElement = containerRef.current;
    if (containerElement) {
      observer.observe(containerElement);
    }

    return () => {
      if (containerElement) {
        observer.unobserve(containerElement);
      }
    };
  }, []);

  // Auto-play when video comes into view
  useEffect(() => {
    if (isInView && videoRef.current && !isPlaying) {
      // Auto-play muted when scrolled into view
      videoRef.current.play().catch(() => {
        // Handle autoplay policy restrictions
        console.log('Autoplay was prevented');
      });
      setIsPlaying(true);
    } else if (!isInView && videoRef.current && isPlaying) {
      // Pause when out of view
      videoRef.current.pause();
      setIsPlaying(false);
    }
  }, [isInView, isPlaying]);

  const togglePlayPause = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  const toggleMute = () => {
    if (videoRef.current) {
      videoRef.current.muted = !isMuted;
      setIsMuted(!isMuted);
    }
  };

  // Hide controls after 3 seconds of inactivity
  useEffect(() => {
    let timeout: NodeJS.Timeout;
    
    const hideControls = () => {
      timeout = setTimeout(() => {
        if (isPlaying) {
          setShowControls(false);
        }
      }, 3000);
    };

    const showControlsHandler = () => {
      setShowControls(true);
      clearTimeout(timeout);
      hideControls();
    };

    const containerElement = containerRef.current;
    if (containerElement) {
      containerElement.addEventListener('mousemove', showControlsHandler);
      containerElement.addEventListener('touchstart', showControlsHandler);
    }

    hideControls();

    return () => {
      clearTimeout(timeout);
      if (containerElement) {
        containerElement.removeEventListener('mousemove', showControlsHandler);
        containerElement.removeEventListener('touchstart', showControlsHandler);
      }
    };
  }, [isPlaying]);

  return (
    <section 
      ref={containerRef}
      className={cn(
        "relative w-full h-screen overflow-hidden bg-black",
        className
      )}
    >
      {/* Video Element */}
      <video
        ref={videoRef}
        className="absolute inset-0 w-full h-full object-cover"
        poster={thumbnail}
        muted={isMuted}
        loop
        playsInline
        preload="none"
      >
        <source src={src} type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-black/40 pointer-events-none" />

      {/* Title Overlay */}
      <div 
        className={cn(
          "absolute inset-0 flex items-center justify-center transition-opacity duration-500",
          isPlaying && !showControls ? "opacity-0" : "opacity-100"
        )}
      >
        <h2 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white text-center px-6 drop-shadow-2xl">
          {title}
        </h2>
      </div>

      {/* Video Controls */}
      <div 
        className={cn(
          "absolute bottom-0 left-0 right-0 p-8 flex items-center justify-between transition-all duration-300",
          showControls ? "opacity-100 translate-y-0" : "opacity-0 translate-y-full"
        )}
      >
        <div className="flex items-center gap-4">
          {/* Play/Pause Button */}
          <Button
            variant="ghost"
            size="icon"
            onClick={togglePlayPause}
            className="w-12 h-12 rounded-full bg-white/20 backdrop-blur-md hover:bg-white/30 text-white"
          >
            {isPlaying ? (
              <Pause className="w-6 h-6" />
            ) : (
              <Play className="w-6 h-6 ml-0.5" />
            )}
          </Button>

          {/* Mute/Unmute Button */}
          <Button
            variant="ghost"
            size="icon"
            onClick={toggleMute}
            className="w-12 h-12 rounded-full bg-white/20 backdrop-blur-md hover:bg-white/30 text-white"
          >
            {isMuted ? (
              <VolumeX className="w-6 h-6" />
            ) : (
              <Volume2 className="w-6 h-6" />
            )}
          </Button>
        </div>

        {/* Video Progress Indicator */}
        <div className="flex-1 max-w-md mx-8">
          <div className="h-1 bg-white/20 rounded-full overflow-hidden backdrop-blur-md">
            <div 
              className="h-full bg-white transition-all duration-300"
              style={{ 
                width: videoRef.current ? 
                  `${(videoRef.current.currentTime / videoRef.current.duration) * 100}%` : 
                  '0%' 
              }}
            />
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div 
        className={cn(
          "absolute bottom-8 left-1/2 transform -translate-x-1/2 transition-opacity duration-500",
          isPlaying ? "opacity-0" : "opacity-100"
        )}
      >
        <div className="w-6 h-10 border-2 border-white/50 rounded-full flex items-start justify-center p-1">
          <div className="w-1 h-3 bg-white/50 rounded-full animate-bounce" />
        </div>
      </div>
    </section>
  );
};

export default FullScreenVideo;