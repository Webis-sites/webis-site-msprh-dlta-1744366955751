'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { FiMenu, FiX } from 'react-icons/fi';
import { FaScissors, FaCalendarAlt, FaImages, FaHome, FaInfoCircle } from 'react-icons/fa';

interface NavLink {
  id: string;
  title: string;
  href: string;
  icon: React.ReactNode;
}

const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const navLinks: NavLink[] = [
    { id: 'home', title: 'ראשי', href: '/', icon: <FaHome /> },
    { id: 'services', title: 'שירותים', href: '/services', icon: <FaScissors /> },
    { id: 'gallery', title: 'גלריה', href: '/gallery', icon: <FaImages /> },
    { id: 'about', title: 'אודות', href: '/about', icon: <FaInfoCircle /> },
  ];

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header
      id="header"
      dir="rtl"
      className={`fixed top-0 right-0 left-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'py-2 bg-white/80 backdrop-blur-md shadow-md'
          : 'py-4 bg-transparent'
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="relative z-10">
            <div className="flex items-center">
              <div className="relative h-12 w-12 overflow-hidden rounded-full shadow-lg mr-2">
                <Image
                  src="https://images.unsplash.com/photo-1562322140-8baeececf3df?ixlib=rb-1.2.1&auto=format&fit=crop&w=100&q=80"
                  alt="מספרה דלתא"
                  fill
                  sizes="48px"
                  className="object-cover"
                />
              </div>
              <div className="mr-2">
                <h1 className="text-xl font-bold text-right text-[#FF6B6B]">
                  מספרה דלתא
                </h1>
                <p className="text-xs text-gray-600 text-right">עיצוב שיער מקצועי</p>
              </div>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-1 space-x-reverse">
            {navLinks.map((link) => (
              <Link
                key={link.id}
                href={link.href}
                className="relative mx-3 py-2 text-gray-700 hover:text-[#FF6B6B] transition-colors group"
              >
                <span className="flex items-center text-right">
                  <span className="ml-1">{link.icon}</span>
                  {link.title}
                </span>
                <span className="absolute bottom-0 right-0 w-0 h-0.5 bg-[#FF6B6B] transition-all duration-300 group-hover:w-full"></span>
              </Link>
            ))}
          </nav>

          {/* Book Now Button */}
          <div className="hidden md:block">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-6 py-2 rounded-full bg-[#FF6B6B] text-white font-medium shadow-[4px_4px_10px_rgba(255,107,107,0.3),-4px_-4px_10px_rgba(255,255,255,0.8)] hover:shadow-[2px_2px_5px_rgba(255,107,107,0.4),-2px_-2px_5px_rgba(255,255,255,0.9)] transition-all duration-300 flex items-center"
            >
              <FaCalendarAlt className="ml-2" />
              <span>קבע תור עכשיו</span>
            </motion.button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={toggleMenu}
            className="md:hidden relative z-10 p-2 rounded-full bg-[#f7e9e9] shadow-[3px_3px_6px_rgba(0,0,0,0.1),-3px_-3px_6px_rgba(255,255,255,0.8)]"
            aria-label={isOpen ? "סגור תפריט" : "פתח תפריט"}
          >
            {isOpen ? <FiX size={24} /> : <FiMenu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ x: 300, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: 300, opacity: 0 }}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
            className="fixed top-0 right-0 h-full w-[75%] max-w-xs bg-white/90 backdrop-blur-lg shadow-xl z-40 overflow-y-auto"
          >
            <div className="p-6 pt-20">
              <div className="flex flex-col items-center mb-8">
                <div className="relative h-20 w-20 overflow-hidden rounded-full shadow-lg mb-4">
                  <Image
                    src="https://images.unsplash.com/photo-1562322140-8baeececf3df?ixlib=rb-1.2.1&auto=format&fit=crop&w=200&q=80"
                    alt="מספרה דלתא"
                    fill
                    sizes="80px"
                    className="object-cover"
                  />
                </div>
                <h2 className="text-xl font-bold text-[#FF6B6B]">מספרה דלתא</h2>
                <p className="text-sm text-gray-600">עיצוב שיער מקצועי</p>
              </div>

              <nav className="flex flex-col space-y-4">
                {navLinks.map((link) => (
                  <Link
                    key={link.id}
                    href={link.href}
                    className="flex items-center py-3 px-4 rounded-lg text-right text-gray-700 hover:bg-[#f7e9e9] hover:text-[#FF6B6B] transition-colors"
                    onClick={() => setIsOpen(false)}
                  >
                    <span className="ml-3">{link.icon}</span>
                    <span>{link.title}</span>
                  </Link>
                ))}
              </nav>

              <div className="mt-8">
                <motion.button
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.97 }}
                  className="w-full py-3 rounded-full bg-[#FF6B6B] text-white font-medium shadow-[4px_4px_10px_rgba(255,107,107,0.3),-4px_-4px_10px_rgba(255,255,255,0.8)] hover:shadow-[2px_2px_5px_rgba(255,107,107,0.4),-2px_-2px_5px_rgba(255,255,255,0.9)] transition-all duration-300 flex items-center justify-center"
                  onClick={() => setIsOpen(false)}
                >
                  <FaCalendarAlt className="ml-2" />
                  <span>קבע תור עכשיו</span>
                </motion.button>
              </div>

              <div className="mt-8 pt-6 border-t border-gray-200">
                <div className="flex justify-center space-x-4 space-x-reverse">
                  <div className="relative h-16 w-16 overflow-hidden rounded-lg">
                    <Image
                      src="https://images.unsplash.com/photo-1560066984-138dadb4c035?ixlib=rb-1.2.1&auto=format&fit=crop&w=100&q=80"
                      alt="עיצוב שיער"
                      fill
                      sizes="64px"
                      className="object-cover"
                    />
                  </div>
                  <div className="relative h-16 w-16 overflow-hidden rounded-lg">
                    <Image
                      src="https://images.unsplash.com/photo-1580618672591-eb180b1a973f?ixlib=rb-1.2.1&auto=format&fit=crop&w=100&q=80"
                      alt="תספורת"
                      fill
                      sizes="64px"
                      className="object-cover"
                    />
                  </div>
                  <div className="relative h-16 w-16 overflow-hidden rounded-lg">
                    <Image
                      src="https://images.unsplash.com/photo-1522337660859-02fbefca4702?ixlib=rb-1.2.1&auto=format&fit=crop&w=100&q=80"
                      alt="צביעת שיער"
                      fill
                      sizes="64px"
                      className="object-cover"
                    />
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Overlay for mobile menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 bg-black/50 z-30"
            onClick={() => setIsOpen(false)}
          />
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;