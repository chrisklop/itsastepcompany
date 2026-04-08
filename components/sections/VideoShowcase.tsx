'use client';

import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Play } from 'lucide-react';

interface VideoShowcaseProps {
  src?: string;
  youtubeId?: string;
  caption?: string;
  darkBg?: boolean;
}

const VideoShowcase: React.FC<VideoShowcaseProps> = ({
  src,
  youtubeId,
  caption,
  darkBg = false,
}) => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className={`section-padding ${darkBg ? 'bg-gray-900' : 'bg-gray-50'}`}>
      <div className="container-custom">
        <motion.div
          ref={ref}
          className="flex flex-col items-center"
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          {/* Phone-frame container for 9:16 video */}
          <div className="relative w-full max-w-[320px] mx-auto">
            <div className="aspect-[9/16] rounded-[2.5rem] overflow-hidden shadow-2xl border-[6px] border-gray-800 bg-black">
              {src ? (
                <video
                  autoPlay
                  muted
                  loop
                  playsInline
                  className="w-full h-full object-cover"
                >
                  <source src={src} type="video/mp4" />
                </video>
              ) : youtubeId ? (
                <iframe
                  src={`https://www.youtube.com/embed/${youtubeId}?autoplay=1&mute=1&loop=1&controls=0&playsinline=1&playlist=${youtubeId}`}
                  className="w-full h-full"
                  allow="autoplay; encrypted-media"
                  allowFullScreen
                />
              ) : (
                /* Placeholder when no video provided */
                <div className="w-full h-full bg-gradient-to-br from-gray-800 to-gray-900 flex flex-col items-center justify-center">
                  <motion.div
                    className="w-16 h-16 rounded-full bg-white/10 flex items-center justify-center mb-4"
                    animate={{ scale: [1, 1.1, 1] }}
                    transition={{ duration: 2, repeat: Infinity }}
                  >
                    <Play className="w-8 h-8 text-white ml-1" />
                  </motion.div>
                  <p className="text-white/50 text-sm font-medium">Video Coming Soon</p>
                </div>
              )}
            </div>
            {/* Notch */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-24 h-6 bg-gray-800 rounded-b-2xl" />
          </div>

          {caption && (
            <motion.p
              className={`mt-8 text-lg font-medium text-center ${
                darkBg ? 'text-gray-400' : 'text-gray-500'
              }`}
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : {}}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              {caption}
            </motion.p>
          )}
        </motion.div>
      </div>
    </section>
  );
};

export default VideoShowcase;
