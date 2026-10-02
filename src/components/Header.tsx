import React, { useState, useEffect } from 'react';
import { PageId } from '../types';
import { BRAND } from '../data/brand';
import { Menu, X } from 'lucide-react';

interface HeaderProps {
  activePage: PageId;
  setActivePage: (page: PageId) => void;
  openProposal: () => void;
}

export const Header: React.FC<HeaderProps> = ({
  activePage,
  setActivePage
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems: { id: PageId; label: string }[] = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'journeys', label: 'Journeys' },
    { id: 'services', label: 'Services' },
    { id: 'gallery', label: 'Gallery' },
    { id: 'contact', label: 'Contact' },
  ];

  const handleNavClick = (id: PageId) => {
    setActivePage(id);
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-[#0e0d0b]/90 backdrop-blur-md border-b border-[#262420] py-3.5'
          : 'bg-gradient-to-b from-[#0e0d0b]/90 via-[#0e0d0b]/60 to-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-10 flex items-center justify-between">
        {/* Brand Wordmark */}
        <button
          onClick={() => handleNavClick('home')}
          className="text-left group cursor-pointer focus:outline-none focus-visible:ring-1 focus-visible:ring-[#c5a880]"
          aria-label="Safari LAX - Home"
        >
          <span className="font-serif tracking-[0.28em] text-lg md:text-xl font-medium text-[#FAF8F5] group-hover:text-[#c5a880] transition-colors uppercase">
            SAFARI LAX
          </span>
        </button>

        {/* Clean Editorial Nav Links */}
        <nav className="hidden lg:flex items-center gap-8" aria-label="Main Navigation">
          {navItems.map((item) => {
            const isActive = activePage === item.id;
            return (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                className={`text-xs uppercase tracking-[0.2em] font-medium transition-all relative py-1 focus:outline-none focus-visible:text-[#c5a880] ${
                  isActive
                    ? 'text-[#c5a880]'
                    : 'text-[#FAF8F5]/80 hover:text-[#FAF8F5]'
                }`}
              >
                {item.label}
                {isActive && (
                  <span className="absolute bottom-0 left-0 w-full h-[1px] bg-[#c5a880]" />
                )}
              </button>
            );
          })}
        </nav>

        {/* Primary Luxury CTA */}
        <div className="hidden lg:flex items-center gap-3">
          <button
            onClick={() => handleNavClick('contact')}
            className="text-xs uppercase tracking-[0.2em] font-medium py-2.5 px-5 bg-[#c5a880] text-[#0e0d0b] hover:bg-[#d4b896] transition-colors whitespace-nowrap focus:outline-none focus-visible:ring-2 focus-visible:ring-[#c5a880] cursor-pointer"
          >
            Private Enquiry
          </button>
        </div>

        {/* Mobile Nav Toggle */}
        <div className="flex items-center gap-2.5 lg:hidden">
          <button
            onClick={() => handleNavClick('contact')}
            className="text-[11px] uppercase tracking-[0.16em] font-medium py-1.5 px-3 bg-[#c5a880] text-[#0e0d0b] hover:bg-[#d4b896] transition-colors"
          >
            Enquire
          </button>

          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 text-[#FAF8F5] focus:outline-none focus-visible:ring-1 focus-visible:ring-[#c5a880]"
            aria-expanded={mobileMenuOpen}
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#0e0d0b] border-b border-[#262420] px-6 py-6 space-y-4 animate-in fade-in duration-200">
          <nav className="flex flex-col space-y-3" aria-label="Mobile Navigation">
            {navItems.map((item) => {
              const isActive = activePage === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => handleNavClick(item.id)}
                  className={`text-left text-sm uppercase tracking-[0.22em] font-medium py-2.5 border-b border-[#1c1b18] ${
                    isActive ? 'text-[#c5a880]' : 'text-[#FAF8F5]/80'
                  }`}
                >
                  {item.label}
                </button>
              );
            })}
          </nav>

          <div className="pt-3">
            <button
              onClick={() => {
                handleNavClick('contact');
              }}
              className="w-full text-center text-xs uppercase tracking-[0.2em] font-medium py-3 bg-[#c5a880] text-[#0e0d0b]"
            >
              Private Enquiry
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
