import React, { useState, useEffect, useRef } from 'react';
import { Play, Pause, Image as ImageIcon, Music, Video } from 'lucide-react';

interface MediaPlaceholderProps {
  type: 'image' | 'video' | 'audio';
  height?: string; // e.g., 'h-64'
  className?: string;
  bgColor?: string;
  label?: string;
}

const MediaPlaceholder: React.FC<MediaPlaceholderProps> = ({ 
  type, 
  height = 'h-64', 
  className = '', 
  bgColor = 'bg-gray-200',
  label
}) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [seconds, setSeconds] = useState(0);
  const intervalRef = useRef<number | null>(null);

  useEffect(() => {
    if (isPlaying) {
      intervalRef.current = window.setInterval(() => {
        setSeconds((prev) => prev + 1);
      }, 1000);
    } else {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    }

    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, [isPlaying]);

  const togglePlay = () => {
    setIsPlaying(!isPlaying);
  };

  const formatTime = (secs: number) => {
    const mins = Math.floor(secs / 60);
    const remainingSecs = secs % 60;
    return `${mins}:${remainingSecs < 10 ? '0' : ''}${remainingSecs}`;
  };

  const getIcon = () => {
    switch (type) {
      case 'image': return <ImageIcon className="w-12 h-12 text-white opacity-50" />;
      case 'video': return <Video className="w-12 h-12 text-white opacity-50" />;
      case 'audio': return <Music className="w-12 h-12 text-white opacity-50" />;
    }
  };

  return (
    <div className={`relative rounded-lg overflow-hidden ${height} ${bgColor} ${className} flex flex-col items-center justify-center transition-all duration-300 hover:shadow-lg`}>
      {/* Background Icon */}
      <div className="absolute inset-0 flex items-center justify-center z-0">
        {getIcon()}
      </div>

      {/* Interactive Layer for Audio/Video */}
      {type !== 'image' && (
        <div className="z-10 flex flex-col items-center gap-4 bg-black/20 p-6 rounded-xl backdrop-blur-sm">
          <button 
            onClick={togglePlay}
            className="w-16 h-16 rounded-full bg-white flex items-center justify-center shadow-lg hover:scale-105 transition-transform"
          >
            {isPlaying ? (
              <Pause className="w-8 h-8 text-brand-600" fill="currentColor" />
            ) : (
              <Play className="w-8 h-8 text-brand-600 ml-1" fill="currentColor" />
            )}
          </button>
          <div className="text-white font-mono text-xl font-bold bg-black/40 px-3 py-1 rounded">
            {formatTime(seconds)}
          </div>
        </div>
      )}

      {/* Label/Caption */}
      {label && (
        <div className="absolute bottom-4 left-4 bg-white/90 px-3 py-1 rounded text-sm font-medium text-gray-700 shadow z-10">
          {label}
        </div>
      )}

      {type === 'image' && (
        <div className="absolute bottom-4 right-4 text-white text-xs opacity-70">
          Giả lập hình ảnh
        </div>
      )}
    </div>
  );
};

export default MediaPlaceholder;