'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FaCalendarAlt, FaArrowLeft } from 'react-icons/fa';
import Image from 'next/image';

const HeroSection = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  return (
    <section 
      id="hero-section" 
      dir="rtl" 
      className="relative h-screen w-full overflow-hidden"
    >
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="https://images.unsplash.com/photo-1560066984-138dadb4c035?ixlib=rb-1.2.1&auto=format&fit=crop&w=1920&q=80"
          alt="מספרה מודרנית ומעוצבת"
          layout="fill"
          objectFit="cover"
          priority
          className="transition-opacity duration-500"
          onLoadingComplete={() => setIsLoaded(true)}
        />
        <div className="absolute inset-0 bg-gradient-to-l from-black/70 to-black/40" />
      </div>

      {/* Content Container */}
      <div className="relative z-10 flex h-full w-full items-center justify-end px-6 md:px-12 lg:px-24">
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: isLoaded ? 1 : 0, x: isLoaded ? 0 : 50 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="max-w-xl text-right"
        >
          {/* Glass Card */}
          <div className="rounded-2xl backdrop-blur-md bg-white/10 p-8 border border-white/20 shadow-[0_8px_32px_0_rgba(31,38,135,0.37)]">
            {/* Logo/Brand */}
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: isLoaded ? 1 : 0.8, opacity: isLoaded ? 1 : 0 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="mb-6 inline-block"
            >
              <div className="bg-white/20 backdrop-blur-sm px-4 py-2 rounded-lg border border-white/30 inline-block">
                <h3 className="text-xl font-bold text-white">מספרה דלתא</h3>
              </div>
            </motion.div>

            {/* Headline */}
            <motion.h1
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: isLoaded ? 0 : 20, opacity: isLoaded ? 1 : 0 }}
              transition={{ duration: 0.6, delay: 0.7 }}
              className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 text-white leading-tight"
            >
              מספרה <span className="text-[#FF6B6B]">מוביל</span> בישראל
            </motion.h1>

            {/* Description */}
            <motion.p
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: isLoaded ? 0 : 20, opacity: isLoaded ? 1 : 0 }}
              transition={{ duration: 0.6, delay: 0.9 }}
              className="text-lg md:text-xl text-[#f7e9e9] mb-8"
            >
              חווית לקוח מושלמת בכל ביקור
            </motion.p>

            {/* CTA Button - Neumorphic Style */}
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: isLoaded ? 0 : 20, opacity: isLoaded ? 1 : 0 }}
              transition={{ duration: 0.6, delay: 1.1 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-block"
            >
              <button 
                className="group flex items-center justify-center gap-3 bg-[#FF6B6B] hover:bg-[#ff5252] text-white py-3 px-6 rounded-xl font-bold text-lg transition-all duration-300 shadow-[6px_6px_12px_0px_rgba(0,0,0,0.3),-4px_-4px_12px_0px_rgba(255,255,255,0.1)]"
                aria-label="קבע תור עכשיו"
              >
                <span>קבע תור עכשיו</span>
                <FaCalendarAlt className="text-white transition-transform duration-300 group-hover:-translate-x-1" />
              </button>
            </motion.div>
          </div>

          {/* Floating Elements */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: isLoaded ? 1 : 0 }}
            transition={{ duration: 1, delay: 1.3 }}
            className="absolute -top-10 -left-10 md:-top-16 md:-left-16"
          >
            <div className="w-24 h-24 md:w-32 md:h-32 rounded-full bg-gradient-to-br from-[#FF6B6B]/40 to-[#f7e9e9]/40 backdrop-blur-md border border-white/20 shadow-lg" />
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: isLoaded ? 1 : 0 }}
            transition={{ duration: 1, delay: 1.5 }}
            className="absolute -bottom-8 -right-8 md:-bottom-12 md:-right-12"
          >
            <div className="w-16 h-16 md:w-24 md:h-24 rounded-full bg-gradient-to-tl from-[#FF6B6B]/30 to-[#f7e9e9]/30 backdrop-blur-md border border-white/20 shadow-lg" />
          </motion.div>
        </motion.div>
      </div>

      {/* Mobile Responsive Adjustments */}
      <style jsx>{`
        @media (max-width: 768px) {
          .hero-content {
            padding: 0 1.5rem;
          }
        }
      `}</style>
    </section>
  );
};

export default HeroSection;