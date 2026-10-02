import React, { useState, useEffect } from 'react';
import { PageId } from '../types';
import { BRAND } from '../data/brand';
import { Menu, X, ArrowUpRight, FileText, Download } from 'lucide-react';

interface HeaderProps {
  activePage: PageId;
  setActivePage: (page: PageId) => void;
  openProposal: () => void;
}

export const Header: React.FC<HeaderProps> = ({
  activePage,
  setActivePage,
  openProposal
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [downloading, setDownloading] = useState(false);
  const [downloadSuccess, setDownloadSuccess] = useState(false);

  const handleDownloadZip = async (e: React.MouseEvent) => {
    e.preventDefault();
    if (downloading) return;
    try {
      setDownloading(true);
      const res = await fetch('/safarilax-website.zip');
      if (!res.ok) throw new Error('Download failed');
      const blob = await res.blob();
      const blobUrl = window.URL.createObjectURL(blob);
      const link = document.createElement('a');
      link.href = blobUrl;
      link.download = 'safarilax-website.zip';
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      window.URL.revokeObjectURL(blobUrl);
      setDownloadSuccess(true);
      setTimeout(() => setDownloadSuccess(false), 4000);
    } catch (err) {
      console.error(err);
      window.location.href = '/safarilax-website.zip';
    } finally {
      setDownloading(false);
    }
  };

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
        {/* Zone 1: Single text element wordmark / Brand */}
        <button
          onClick={() => handleNavClick('home')}
          className="text-left group cursor-pointer focus:outline-none focus-visible:ring-1 focus-visible:ring-[#c5a880]"
          aria-label="Safari LAX - Home"
        >
          <span className="font-serif tracking-[0.28em] text-lg md:text-xl font-medium text-[#FAF8F5] group-hover:text-[#c5a880] transition-colors uppercase">
            SAFARI LAX
          </span>
        </button>

        {/* Zone 2: 4-6 clean text navigation links */}
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

        {/* Zone 3: 1-2 primary actions */}
        <div className="hidden lg:flex items-center gap-3">
          <button
            onClick={handleDownloadZip}
            className="flex items-center gap-1.5 text-[11px] tracking-wider uppercase text-emerald-400 hover:text-emerald-300 py-2 px-3 border border-emerald-500/40 hover:border-emerald-400 bg-emerald-950/20 transition-colors cursor-pointer"
            title="Download complete project ZIP for local execution (E:\SafariLax)"
          >
            <Download className="w-3.5 h-3.5" />
            <span>Download ZIP</span>
          </button>

          <button
            onClick={openProposal}
            className="flex items-center gap-1.5 text-xs tracking-wider uppercase text-[#c5a880] hover:text-[#d4b896] py-2 px-3 border border-[#c5a880]/30 hover:border-[#c5a880] transition-colors focus:outline-none focus-visible:ring-1 focus-visible:ring-[#c5a880]"
            title="View technical proposal, Namecheap DNS guide & WordPress handover"
          >
            <FileText className="w-3.5 h-3.5" />
            <span>Setup & Handover</span>
          </button>

          <button
            onClick={() => handleNavClick('contact')}
            className="text-xs uppercase tracking-[0.2em] font-medium py-2 px-4 bg-[#c5a880] text-[#0e0d0b] hover:bg-[#d4b896] transition-colors whitespace-nowrap focus:outline-none focus-visible:ring-2 focus-visible:ring-[#c5a880]"
          >
            Private Enquiry
          </button>
        </div>

        {/* Mobile Hamburger Button */}
        <div className="flex items-center gap-2.5 lg:hidden">
          <button
            onClick={handleDownloadZip}
            className="p-2 text-emerald-400 border border-emerald-500/40 bg-emerald-950/20"
            aria-label="Download Project ZIP"
            title="Download ZIP"
          >
            <Download className="w-4 h-4" />
          </button>

          <button
            onClick={openProposal}
            className="p-2 text-[#c5a880] border border-[#c5a880]/30 focus:outline-none"
            aria-label="View Handover Dossier"
          >
            <FileText className="w-4 h-4" />
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

          <div className="pt-3 flex flex-col gap-3">
            <button
              onClick={handleDownloadZip}
              className="w-full text-center text-xs uppercase tracking-[0.18em] py-3 bg-emerald-500 text-black font-semibold flex items-center justify-center gap-2 cursor-pointer"
            >
              <Download className="w-4 h-4" />
              <span>Download Project ZIP (Clean Codebase)</span>
            </button>

            <button
              onClick={() => {
                handleNavClick('contact');
              }}
              className="w-full text-center text-xs uppercase tracking-[0.2em] font-medium py-3 bg-[#c5a880] text-[#0e0d0b]"
            >
              Private Enquiry
            </button>
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                openProposal();
              }}
              className="w-full text-center text-xs uppercase tracking-[0.18em] py-2.5 border border-[#c5a880]/40 text-[#c5a880]"
            >
              Handover & Namecheap DNS Guide
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
