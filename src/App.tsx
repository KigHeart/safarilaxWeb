/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { PageId, Journey, GalleryImage } from './types';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { HomeView } from './components/HomeView';
import { AboutView } from './components/AboutView';
import { JourneysView } from './components/JourneysView';
import { ServicesView } from './components/ServicesView';
import { GalleryView } from './components/GalleryView';
import { ContactView } from './components/ContactView';
import { JourneyModal } from './components/JourneyModal';
import { GalleryModal } from './components/GalleryModal';
import { TechnicalProposalModal } from './components/TechnicalProposalModal';
import { GALLERY_ITEMS } from './data/gallery';

export default function App() {
  const [activePage, setActivePage] = useState<PageId>('home');
  const [selectedJourney, setSelectedJourney] = useState<Journey | null>(null);
  const [selectedGalleryImage, setSelectedGalleryImage] = useState<GalleryImage | null>(null);
  const [isProposalOpen, setIsProposalOpen] = useState(false);
  const [contactInitialJourney, setContactInitialJourney] = useState<string>('');

  // Handle URL hash or direct deep linking if needed
  useEffect(() => {
    const handleHash = () => {
      const hash = window.location.hash.replace('#', '') as PageId;
      if (['home', 'about', 'journeys', 'services', 'gallery', 'contact'].includes(hash)) {
        setActivePage(hash);
      }
    };
    handleHash();
    window.addEventListener('hashchange', handleHash);
    return () => window.removeEventListener('hashchange', handleHash);
  }, []);

  const handlePageChange = (page: PageId) => {
    setActivePage(page);
    window.location.hash = page;
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleOpenJourney = (journey: Journey) => {
    setSelectedJourney(journey);
  };

  const handleCustomizeJourney = (journey: Journey) => {
    setContactInitialJourney(journey.title);
    setSelectedJourney(null);
    handlePageChange('contact');
  };

  return (
    <div className="min-h-screen bg-[#0e0d0b] text-[#FAF8F5] flex flex-col font-sans selection:bg-[#c5a880]/30 selection:text-[#FAF8F5]">
      
      {/* Universal Top Navigation Contract */}
      <Header
        activePage={activePage}
        setActivePage={handlePageChange}
        openProposal={() => setIsProposalOpen(true)}
      />

      {/* Main View Area */}
      <main className="flex-1">
        {activePage === 'home' && (
          <HomeView
            setActivePage={handlePageChange}
            onOpenJourney={handleOpenJourney}
            openProposal={() => setIsProposalOpen(true)}
          />
        )}

        {activePage === 'about' && (
          <AboutView setActivePage={handlePageChange} />
        )}

        {activePage === 'journeys' && (
          <JourneysView
            onOpenJourney={handleOpenJourney}
            onCustomizeJourney={handleCustomizeJourney}
            setActivePage={handlePageChange}
          />
        )}

        {activePage === 'services' && (
          <ServicesView setActivePage={handlePageChange} />
        )}

        {activePage === 'gallery' && (
          <GalleryView
            onSelectImage={(img) => setSelectedGalleryImage(img)}
          />
        )}

        {activePage === 'contact' && (
          <ContactView
            initialJourneyTitle={contactInitialJourney}
            openProposal={() => setIsProposalOpen(true)}
          />
        )}
      </main>

      {/* Universal Quiet Brand Signature Footer */}
      <Footer
        setActivePage={handlePageChange}
        openProposal={() => setIsProposalOpen(true)}
      />

      {/* Journey Detail Modal */}
      <JourneyModal
        journey={selectedJourney}
        onClose={() => setSelectedJourney(null)}
        onEnquireJourney={handleCustomizeJourney}
      />

      {/* Gallery Lightbox Modal */}
      <GalleryModal
        image={selectedGalleryImage}
        allImages={GALLERY_ITEMS}
        onClose={() => setSelectedGalleryImage(null)}
        onSelectImage={(img) => setSelectedGalleryImage(img)}
      />

      {/* Technical Proposal, Namecheap DNS & WordPress Handover Modal */}
      <TechnicalProposalModal
        isOpen={isProposalOpen}
        onClose={() => setIsProposalOpen(false)}
      />

    </div>
  );
}
