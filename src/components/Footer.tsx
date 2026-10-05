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
    <footer className="bg-[#161412] text-[#faf8f5] border-t border-[#2a2622] pt-20 pb-12">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        <div className="bg-[#1f1d19] border border-[#2e2a24] p-8 md:p-12 mb-16 relative overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-4 flex justify-center lg:justify-start">
              <div className="bg-[#f5f0e6] text-[#1c1a17] p-8 md:p-10 text-center shadow-xl w-64 max-w-full border border-[#ded7c8]">
                <div className="font-serif tracking-[0.38em] text-xs font-semibold text-[#5c564c] uppercase">
                  S A F A R I
                </div>
                <div className="w-20 h-[1px] bg-[#997449]/40 mx-auto my-3" />
                <div className="font-serif tracking-[0.18em] text-4xl font-normal text-[#1c1a17] my-2">
                  L A X
                </div>
                <div className="font-sans tracking-[0.25em] text-[9px] uppercase text-[#736f67] mt-3 font-semibold">
                  Private Africa, Unhurried.
                </div>
              </div>
            </div>

            <div className="lg:col-span-8 space-y-4">
              <p className="font-serif italic text-sm md:text-base text-[#dfc8a2] tracking-wide leading-relaxed">
                {BRAND.multilingualSignoffs.join('  ·  ')}
              </p>
              
              <div className="space-y-1">
                <h4 className="font-serif italic text-2xl md:text-3xl text-white font-light">
                  {BRAND.teamTitle}
                </h4>
                <p className="text-[11px] uppercase tracking-[0.25em] text-[#a8a396] font-medium">
                  {BRAND.customerServiceNote}
                </p>
              </div>

              <div className="pt-2 flex flex-wrap items-center gap-x-6 gap-y-2 text-sm text-[#ded7c8]">
                <a href={`mailto:${BRAND.bookingEmail}`} className="hover:text-[#dfc8a2] transition-colors flex items-center gap-1.5">
                  <Mail className="w-3.5 h-3.5 text-[#dfc8a2]" />
                  <span>{BRAND.bookingEmail}</span>
                </a>
                <span className="text-[#3c3933] hidden sm:inline">|</span>
                <a href={`mailto:${BRAND.infoEmail}`} className="hover:text-[#dfc8a2] transition-colors flex items-center gap-1.5">
                  <Mail className="w-3.5 h-3.5 text-[#dfc8a2]" />
                  <span>{BRAND.infoEmail}</span>
                </a>
                <span className="text-[#3c3933] hidden sm:inline">|</span>
                <a href={`tel:${BRAND.phone.replace(/[^0-9+]/g, '')}`} className="hover:text-[#dfc8a2] transition-colors flex items-center gap-1.5">
                  <Phone className="w-3.5 h-3.5 text-[#dfc8a2]" />
                  <span>{BRAND.phone}</span>
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 pb-16 border-b border-[#2a2622]">
          <div className="space-y-4">
            <h5 className="font-serif tracking-[0.2em] text-sm text-white uppercase">SAFARI LAX</h5>
            <p className="text-xs text-[#a8a396] leading-relaxed">
              Specialising in private, tailor-made journeys in Kenya and across Africa. Unhurried itineraries, private wildlife concessions, and dedicated aerial charter aviation.
            </p>
            <p className="text-xs text-[#dfc8a2] italic font-serif">“Private Africa, Unhurried.”</p>
          </div>

          <div className="space-y-4">
            <h5 className="font-serif tracking-[0.2em] text-sm text-white uppercase">Curated Pages</h5>
            <ul className="space-y-2.5 text-xs text-[#a8a396]">
              {(['home', 'about', 'journeys', 'services', 'gallery', 'contact'] as PageId[]).map((page) => (
                <li key={page}>
                  <button onClick={() => handleNav(page)} className="hover:text-[#dfc8a2] transition-colors uppercase tracking-[0.16em] capitalize text-left cursor-pointer">
                    {page}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          <div className="space-y-4">
            <h5 className="font-serif tracking-[0.2em] text-sm text-white uppercase">Operations & Concierge</h5>
            <div className="space-y-2.5 text-xs text-[#a8a396]">
              <div className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-[#dfc8a2] shrink-0 mt-0.5" />
                <span>{BRAND.officeAddress}</span>
              </div>
              <div className="flex items-start gap-2">
                <Globe className="w-4 h-4 text-[#dfc8a2] shrink-0 mt-0.5" />
                <span>{BRAND.domain}</span>
              </div>
              <div className="flex items-start gap-2">
                <Shield className="w-4 h-4 text-[#dfc8a2] shrink-0 mt-0.5" />
                <span>KATO & KPSGA Accredited Partner Network</span>
              </div>
            </div>
          </div>
        </div>

        <div className="pt-8 flex flex-col md:flex-row items-center justify-between text-xs text-[#8e8a80] gap-4">
          <div className="flex flex-col sm:flex-row items-center sm:items-baseline gap-2 sm:gap-4 text-center sm:text-left">
            <p>© {new Date().getFullYear()} Safari LAX. All rights reserved.</p>
            <span className="hidden sm:inline text-[#3a372f]">·</span>
            <p className="text-[#dfc8a2] font-medium tracking-wide">Designed by Kiprop Yego, 2026</p>
          </div>

          <div className="flex items-center gap-6">
            <button onClick={() => handleNav('contact')} className="hover:text-[#dfc8a2] transition-colors uppercase tracking-wider text-[11px] cursor-pointer">
              Private Enquiry
            </button>
            <button onClick={scrollToTop} className="flex items-center gap-1 hover:text-white transition-colors cursor-pointer" aria-label="Scroll back to top">
              <span>Back to Top</span>
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};