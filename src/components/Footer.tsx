import React from 'react';

interface FooterProps {
  onNavigate: (sectionId: string) => void;
  onOpenEnquiry: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate, onOpenEnquiry }) => {
  return (
    <footer className="bg-[#0E0E0D] text-[#F7F4EC] border-t border-[#0E0E0D]">
      <div className="max-w-7xl mx-auto px-6 md:px-12 py-16 flex flex-col md:flex-row items-start md:items-center justify-between gap-10">
        
        {/* Brand Mark */}
        <button
          onClick={() => onNavigate('hero')}
          className="text-left group cursor-pointer focus:outline-none flex flex-col items-start"
          aria-label="Safari LAX"
        >
          <span className="text-[10px] tracking-[0.38em] text-[#B8B3AA] font-light uppercase">
            SAFARI
          </span>
          <span className="font-serif text-3xl tracking-[0.24em] text-[#F7F4EC] font-normal leading-tight">
            L A X
          </span>
          <span className="text-[7.5px] tracking-[0.28em] text-[#B8B3AA] uppercase mt-0.5 border-t border-[#B8B3AA]/30 pt-0.5">
            PRIVATE AFRICA, UNHURRIED.
          </span>
        </button>

        {/* Navigation Links */}
        <div className="flex flex-wrap items-center gap-8 md:gap-12">
          <button
            onClick={() => onNavigate('journeys')}
            className="text-[11px] uppercase tracking-[0.22em] text-[#F7F4EC]/80 hover:text-[#F7F4EC] transition-colors cursor-pointer"
          >
            JOURNEYS
          </button>
          <button
            onClick={() => onNavigate('kenya')}
            className="text-[11px] uppercase tracking-[0.22em] text-[#F7F4EC]/80 hover:text-[#F7F4EC] transition-colors cursor-pointer"
          >
            KENYA
          </button>
          <button
            onClick={() => onNavigate('approach')}
            className="text-[11px] uppercase tracking-[0.22em] text-[#F7F4EC]/80 hover:text-[#F7F4EC] transition-colors cursor-pointer"
          >
            OUR APPROACH
          </button>
          <button
            onClick={() => onNavigate('about')}
            className="text-[11px] uppercase tracking-[0.22em] text-[#F7F4EC]/80 hover:text-[#F7F4EC] transition-colors cursor-pointer"
          >
            ABOUT
          </button>
          <button
            onClick={onOpenEnquiry}
            className="text-[11px] uppercase tracking-[0.22em] text-[#E6E0D4] hover:text-[#F7F4EC] transition-colors cursor-pointer border-b border-[#E6E0D4]/40 pb-0.5"
          >
            ENQUIRE
          </button>
        </div>
      </div>

      {/* Contacts & Copyright */}
      <div className="border-t border-white/10 py-8 px-6">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6 text-[10.5px] tracking-[0.22em] text-[#B8B3AA] uppercase font-light text-center md:text-left">
          <div className="flex flex-wrap items-center justify-center md:justify-start gap-x-5 gap-y-2">
            <a 
              href="mailto:bookings@safarilax.world" 
              className="hover:text-[#F7F4EC] transition-colors"
            >
              bookings@safarilax.world
            </a>
            <span>·</span>
            <a 
              href="mailto:info@safarilax.world" 
              className="hover:text-[#F7F4EC] transition-colors"
            >
              info@safarilax.world
            </a>
            <span>·</span>
            <a 
              href="tel:+254700892400" 
              className="hover:text-[#F7F4EC] transition-colors"
            >
              +254 (0) 700 892 400
            </a>
            <span className="hidden lg:inline">·</span>
            <span className="hidden lg:inline text-[#B8B3AA]/70">Nairobi, Kenya</span>
          </div>

          <div className="flex flex-col sm:flex-row items-center gap-3 text-[#B8B3AA]/80">
            <span>© 2023 SAFARI LAX</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
