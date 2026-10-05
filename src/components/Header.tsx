import React, { useState, useEffect } from 'react';
import { PageId } from '../types';
import { Menu, X } from 'lucide-react';

interface HeaderProps {
  activePage: PageId;
  setActivePage: (page: PageId) => void;
}

export const Header: React.FC<HeaderProps> = ({ activePage, setActivePage }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems: { id: PageId; label: string }[] = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'Our Story' },
    { id: 'journeys', label: 'Journeys' },
    { id: 'services', label: 'Expeditions' },
    { id: 'gallery', label: 'Gallery' },
    { id: 'contact', label: 'Enquiry' },
  ];

  const handleNavClick = (id: PageId) => {
    setActivePage(id);
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const isLightHeader = scrolled;

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isLightHeader
          ? 'bg-[#faf8f5]/95 backdrop-blur-md border-b border-[#e8e2d5] py-3.5 shadow-xs'
          : 'bg-gradient-to-b from-black/80 via-black/40 to-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-10 flex items-center justify-between">
        <button
          onClick={() => handleNavClick('home')}
          className="text-left group cursor-pointer focus:outline-none"
          aria-label="Safari LAX - Home"
        >
          <span
            className={`font-serif tracking-[0.32em] text-lg md:text-xl font-medium uppercase transition-colors ${
              isLightHeader ? 'text-[#1c1a17] group-hover:text-[#997449]' : 'text-white group-hover:text-[#dfc8a2]'
            }`}
          >
            SAFARI LAX
          </span>
        </button>

        <nav className="hidden lg:flex items-center gap-9" aria-label="Main Navigation">
          {navItems.map((item) => {
            const isActive = activePage === item.id;
            return (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                className={`text-xs uppercase tracking-[0.22em] font-medium transition-all relative py-1 focus:outline-none cursor-pointer ${
                  isActive
                    ? isLightHeader ? 'text-[#997449]' : 'text-[#dfc8a2]'
                    : isLightHeader
                      ? 'text-[#5c564c] hover:text-[#1c1a17]'
                      : 'text-white/85 hover:text-white'
                }`}
              >
                {item.label}
                {isActive && (
                  <span
                    className={`absolute bottom-0 left-0 w-full h-[1.5px] ${
                      isLightHeader ? 'bg-[#997449]' : 'bg-[#dfc8a2]'
                    }`}
                  />
                )}
              </button>
            );
          })}
        </nav>

        <div className="hidden lg:flex items-center gap-4">
          <button
            onClick={() => handleNavClick('contact')}
            className={`text-xs uppercase tracking-[0.22em] font-medium py-2.5 px-6 transition-all duration-200 cursor-pointer ${
              isLightHeader
                ? 'bg-[#1c1a17] text-[#faf8f5] hover:bg-[#997449]'
                : 'bg-[#c5a880] text-[#0f0e0c] hover:bg-[#dfc8a2]'
            }`}
          >
            Plan Your Journey
          </button>
        </div>

        <div className="flex items-center gap-3 lg:hidden">
          <button
            onClick={() => handleNavClick('contact')}
            className={`text-[11px] uppercase tracking-[0.18em] font-medium py-1.5 px-3 transition-colors ${
              isLightHeader ? 'bg-[#1c1a17] text-[#faf8f5]' : 'bg-[#c5a880] text-[#0f0e0c]'
            }`}
          >
            Enquire
          </button>

          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className={`p-1.5 focus:outline-none cursor-pointer ${isLightHeader ? 'text-[#1c1a17]' : 'text-white'}`}
            aria-expanded={mobileMenuOpen}
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#faf8f5] border-b border-[#e8e2d5] px-6 py-6 space-y-4 animate-in fade-in duration-150 shadow-xl text-[#1c1a17]">
          <nav className="flex flex-col space-y-2" aria-label="Mobile Navigation">
            {navItems.map((item) => {
              const isActive = activePage === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => handleNavClick(item.id)}
                  className={`text-left text-sm uppercase tracking-[0.22em] font-medium py-2.5 border-b border-[#f0eae0] ${
                    isActive ? 'text-[#997449]' : 'text-[#5c564c]'
                  }`}
                >
                  {item.label}
                </button>
              );
            })}
          </nav>
          <div className="pt-2">
            <button
              onClick={() => handleNavClick('contact')}
              className="w-full text-center text-xs uppercase tracking-[0.22em] font-medium py-3.5 bg-[#1c1a17] text-[#faf8f5] hover:bg-[#997449] transition-colors"
            >
              Plan Your Journey
            </button>
          </div>
        </div>
      )}
    </header>
  );
};