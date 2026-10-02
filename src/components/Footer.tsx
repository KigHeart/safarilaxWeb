import React from 'react';
import { PageId } from '../types';
import { BRAND } from '../data/brand';
import { ArrowUp, Mail, Phone, MapPin, Globe, Shield } from 'lucide-react';

interface FooterProps {
  setActivePage: (page: PageId) => void;
}

export const Footer: React.FC<FooterProps> = ({ setActivePage }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleNav = (id: PageId) => {
    setActivePage(id);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#0a0908] text-[#FAF8F5] border-t border-[#1f1d19] pt-20 pb-12">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        
        {/* Brand Card Replica / Multilingual Signature Block */}
        <div className="bg-[#141311] border border-[#24221d] p-8 md:p-12 mb-16 relative overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            {/* Left Box: Ecru / Linen Brand Card Seal */}
            <div className="lg:col-span-4 flex justify-center lg:justify-start">
              <div className="bg-[#f5f2eb] text-[#0e0d0b] p-7 md:p-9 text-center shadow-xl w-64 max-w-full border border-[#ded7c8]">
                <div className="font-serif tracking-[0.35em] text-xs font-medium text-[#3c3933] uppercase">
                  S A F A R I
                </div>
                <div className="w-24 h-[1px] bg-[#3c3933]/30 mx-auto my-3" />
                <div className="font-serif tracking-[0.18em] text-4xl font-normal text-[#0e0d0b] my-2">
                  L A X
                </div>
                <div className="font-sans tracking-[0.25em] text-[9px] uppercase text-[#736f67] mt-3">
                  Private Africa, Unhurried.
                </div>
              </div>
            </div>

            {/* Right: Signature and Direct Service Lines */}
            <div className="lg:col-span-8 space-y-4">
              <p className="font-serif italic text-sm md:text-base text-[#c5a880]/90 tracking-wide leading-relaxed">
                {BRAND.multilingualSignoffs.join('  ·  ')}
              </p>
              
              <div className="space-y-1">
                <h4 className="font-serif italic text-2xl md:text-3xl text-[#FAF8F5] font-light">
                  {BRAND.teamTitle}
                </h4>
                <p className="text-[11px] uppercase tracking-[0.25em] text-[#8e8a80] font-medium">
                  {BRAND.customerServiceNote}
                </p>
              </div>

              <div className="pt-2 flex flex-wrap items-center gap-x-6 gap-y-2 text-sm text-[#ded7c8]">
                <a
                  href={`mailto:${BRAND.bookingEmail}`}
                  className="hover:text-[#c5a880] transition-colors flex items-center gap-1.5"
                >
                  <Mail className="w-3.5 h-3.5 text-[#c5a880]" />
                  <span>{BRAND.bookingEmail}</span>
                </a>
                <span className="text-[#3c3933] hidden sm:inline">|</span>
                <a
                  href={`mailto:${BRAND.infoEmail}`}
                  className="hover:text-[#c5a880] transition-colors flex items-center gap-1.5"
                >
                  <Mail className="w-3.5 h-3.5 text-[#c5a880]" />
                  <span>{BRAND.infoEmail}</span>
                </a>
                <span className="text-[#3c3933] hidden sm:inline">|</span>
                <a
                  href={`tel:${BRAND.phone.replace(/[^0-9+]/g, '')}`}
                  className="hover:text-[#c5a880] transition-colors flex items-center gap-1.5"
                >
                  <Phone className="w-3.5 h-3.5 text-[#c5a880]" />
                  <span>{BRAND.phone}</span>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Clean 3 Columns: Pure Safari Content */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 pb-16 border-b border-[#1c1b18]">
          
          {/* Column 1: Brand Ethos */}
          <div className="space-y-4">
            <h5 className="font-serif tracking-[0.2em] text-sm text-[#FAF8F5] uppercase">
              SAFARI LAX
            </h5>
            <p className="text-xs text-[#8e8a80] leading-relaxed">
              Specialising in private, tailor-made journeys in Kenya and across Africa. Unhurried itineraries, private wildlife concessions, and dedicated aerial charter aviation.
            </p>
            <p className="text-xs text-[#c5a880] italic font-serif">
              “Private Africa, Unhurried.”
            </p>
          </div>

          {/* Column 2: Navigation Links */}
          <div className="space-y-4">
            <h5 className="font-serif tracking-[0.2em] text-sm text-[#FAF8F5] uppercase">
              Curated Pages
            </h5>
            <ul className="space-y-2.5 text-xs text-[#8e8a80]">
              {(['home', 'about', 'journeys', 'services', 'gallery', 'contact'] as PageId[]).map((page) => (
                <li key={page}>
                  <button
                    onClick={() => handleNav(page)}
                    className="hover:text-[#c5a880] transition-colors uppercase tracking-[0.16em] capitalize text-left cursor-pointer"
                  >
                    {page}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Operations & Concierge */}
          <div className="space-y-4">
            <h5 className="font-serif tracking-[0.2em] text-sm text-[#FAF8F5] uppercase">
              Operations & Concierge
            </h5>
            <div className="space-y-2.5 text-xs text-[#8e8a80]">
              <div className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-[#c5a880] shrink-0 mt-0.5" />
                <span>{BRAND.officeAddress}</span>
              </div>
              <div className="flex items-start gap-2">
                <Globe className="w-4 h-4 text-[#c5a880] shrink-0 mt-0.5" />
                <span>{BRAND.domain}</span>
              </div>
              <div className="flex items-start gap-2">
                <Shield className="w-4 h-4 text-[#c5a880] shrink-0 mt-0.5" />
                <span>KATO & KPSGA Accredited Partner Network</span>
              </div>
            </div>
          </div>
        </div>

        {/* Clean Luxury Bottom Bar */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between text-xs text-[#78746c] gap-4">
          <div className="flex flex-col sm:flex-row items-center sm:items-baseline gap-2 sm:gap-4 text-center sm:text-left">
            <p>
              © {new Date().getFullYear()} Safari LAX. All rights reserved.
            </p>
            <span className="hidden sm:inline text-[#3a372f]">·</span>
            <p className="text-[#c5a880] font-medium tracking-wide">
              Designed by Kiprop Yego, 2026
            </p>
          </div>

          <div className="flex items-center gap-6">
            <button
              onClick={() => handleNav('contact')}
              className="hover:text-[#c5a880] transition-colors uppercase tracking-wider text-[11px]"
            >
              Private Enquiry
            </button>
            <button
              onClick={scrollToTop}
              className="flex items-center gap-1 hover:text-[#FAF8F5] transition-colors cursor-pointer"
              aria-label="Scroll back to top"
            >
              <span>Back to Top</span>
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
};
