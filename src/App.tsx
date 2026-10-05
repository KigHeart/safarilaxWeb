import React, { useState } from 'react';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { EditorialSections } from './components/EditorialSections';
import { AIConciergeModal } from './components/AIConciergeModal';
import { Sparkles } from 'lucide-react';

export default function App() {
  const [isConciergeOpen, setIsConciergeOpen] = useState(false);

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const handleOpenEnquiry = () => {
    scrollToSection('enquiry');
  };

  return (
    <div className="min-h-screen bg-[#0E0E0D] text-[#F7F4EC] flex flex-col font-sans selection:bg-[#E6E0D4] selection:text-[#0E0E0D]">
      
      {/* Universal Top Navigation matching Word/PDF spec */}
      <Header
        onNavigate={scrollToSection}
        onOpenEnquiry={handleOpenEnquiry}
        onOpenConcierge={() => setIsConciergeOpen(true)}
      />

      {/* Main Editorial Narrative matching Pages 1-9 */}
      <main className="flex-1">
        <EditorialSections
          onNavigate={scrollToSection}
          onOpenEnquiry={handleOpenEnquiry}
          onOpenConcierge={() => setIsConciergeOpen(true)}
        />
      </main>

      {/* Universal Footer matching Word/PDF spec */}
      <Footer
        onNavigate={scrollToSection}
        onOpenEnquiry={handleOpenEnquiry}
      />

      {/* Autonomous AI Concierge Floating Button */}
      <div className="fixed bottom-6 right-6 z-40">
        <button
          onClick={() => setIsConciergeOpen(true)}
          className="group flex items-center gap-2.5 px-4 py-2.5 bg-[#0E0E0D] border border-[#E6E0D4]/70 text-[#F7F4EC] hover:bg-[#F7F4EC] hover:text-[#0E0E0D] transition-all duration-300 shadow-xl cursor-pointer"
          aria-label="Open AI Concierge"
        >
          <span className="w-2 h-2 rounded-full bg-[#E6E0D4] group-hover:bg-[#0E0E0D] animate-pulse"></span>
          <span className="text-[10px] uppercase tracking-[0.24em] font-normal">
            AI ATELIER CONCIERGE
          </span>
        </button>
      </div>

      {/* Interactive AI Concierge & VIP Onboarding Modal */}
      <AIConciergeModal
        isOpen={isConciergeOpen}
        onClose={() => setIsConciergeOpen(false)}
      />

    </div>
  );
}
