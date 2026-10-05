import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';

interface HeaderProps {
  onNavigate: (sectionId: string) => void;
  onOpenEnquiry: () => void;
  onOpenConcierge?: () => void;
}

export const Header: React.FC<HeaderProps> = ({
  onNavigate,
  onOpenEnquiry,
  onOpenConcierge
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { id: 'journeys', label: 'JOURNEYS' },
    { id: 'kenya', label: 'KENYA' },
    { id: 'approach', label: 'OUR APPROACH' },
    { id: 'about', label: 'ABOUT' },
  ];

  const handleLinkClick = (id: string) => {
    onNavigate(id);
    setMobileMenuOpen(false);
  };

  return (
    <header className="sticky top-0 z-50 bg-[#0E0E0D] border-b border-[#0E0E0D] text-[#F7F4EC] transition-all">
      <div className="max-w-7xl mx-auto px-6 md:px-12 py-5 flex items-center justify-between">
        
        {/* Brand Mark (Exact match to Word/PDF document) */}
        <button
          onClick={() => handleLinkClick('hero')}
          className="text-left group cursor-pointer focus:outline-none flex flex-col items-start"
          aria-label="Safari LAX"
        >
          <span className="text-[10px] tracking-[0.38em] text-[#B8B3AA] font-light uppercase">
            SAFARI
          </span>
          <span className="font-serif text-2xl md:text-3xl tracking-[0.24em] text-[#F7F4EC] font-normal leading-tight">
            L A X
          </span>
          <span className="text-[7.5px] tracking-[0.28em] text-[#B8B3AA] uppercase mt-0.5 border-t border-[#B8B3AA]/30 pt-0.5">
            PRIVATE AFRICA, UNHURRIED.
          </span>
        </button>

        {/* Desktop Navigation Links */}
        <nav className="hidden lg:flex items-center gap-10" aria-label="Main Navigation">
          {navLinks.map((item) => (
            <button
              key={item.id}
              onClick={() => handleLinkClick(item.id)}
              className="text-[11px] uppercase tracking-[0.24em] font-normal text-[#F7F4EC]/85 hover:text-[#F7F4EC] transition-colors cursor-pointer py-1"
            >
              {item.label}
            </button>
          ))}

          {/* AI Concierge Trigger */}
          {onOpenConcierge && (
            <button
              onClick={onOpenConcierge}
              className="text-[10px] uppercase tracking-[0.24em] text-[#B8B3AA] hover:text-[#F7F4EC] transition-colors flex items-center gap-1.5 cursor-pointer py-1"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-[#E6E0D4] animate-pulse"></span>
              AI CONCIERGE
            </button>
          )}

          {/* PRIVATE ENQUIRY Button (Outlined border box) */}
          <button
            onClick={onOpenEnquiry}
            className="text-[10.5px] uppercase tracking-[0.22em] font-normal px-5 py-2.5 border border-[#E6E0D4] text-[#F7F4EC] hover:bg-[#F7F4EC] hover:text-[#0E0E0D] transition-all duration-300 cursor-pointer"
          >
            PRIVATE ENQUIRY
          </button>
        </nav>

        {/* Mobile Hamburger Button */}
        <div className="flex items-center gap-3 lg:hidden">
          <button
            onClick={onOpenEnquiry}
            className="text-[9.5px] uppercase tracking-[0.18em] px-3 py-1.5 border border-[#E6E0D4] text-[#F7F4EC]"
          >
            ENQUIRE
          </button>
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 text-[#F7F4EC] hover:text-[#E6E0D4] focus:outline-none"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#0E0E0D] border-b border-[#B8B3AA]/20 px-6 py-8 flex flex-col gap-6 animate-fadeIn">
          {navLinks.map((item) => (
            <button
              key={item.id}
              onClick={() => handleLinkClick(item.id)}
              className="text-left text-sm uppercase tracking-[0.24em] text-[#F7F4EC] hover:text-[#E6E0D4] py-1 border-b border-white/5"
            >
              {item.label}
            </button>
          ))}

          {onOpenConcierge && (
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenConcierge();
              }}
              className="text-left text-xs uppercase tracking-[0.22em] text-[#B8B3AA] hover:text-[#F7F4EC] py-2 flex items-center gap-2"
            >
              <span className="w-2 h-2 rounded-full bg-[#E6E0D4]"></span>
              OPEN AI EXPEDITION CONCIERGE
            </button>
          )}

          <button
            onClick={() => {
              setMobileMenuOpen(false);
              onOpenEnquiry();
            }}
            className="w-full text-center text-xs uppercase tracking-[0.22em] py-3.5 border border-[#E6E0D4] text-[#0E0E0D] bg-[#F7F4EC] font-medium"
          >
            MAKE A PRIVATE ENQUIRY
          </button>
        </div>
      )}
    </header>
  );
};
