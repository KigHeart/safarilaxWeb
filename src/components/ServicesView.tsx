import React, { useState } from 'react';
import { PageId } from '../types';
import { SERVICES } from '../data/services';
import { BRAND } from '../data/brand';
import { Compass, Plane, Home, Wine, Camera, ShieldCheck, Check, ArrowRight, HelpCircle, ChevronDown, ChevronUp } from 'lucide-react';

interface ServicesViewProps {
  setActivePage: (page: PageId) => void;
}

export const ServicesView: React.FC<ServicesViewProps> = ({ setActivePage }) => {
  const [activeFaq, setActiveFaq] = useState<number | null>(null);

  const iconMap: Record<string, React.ReactNode> = {
    Compass: <Compass className="w-5 h-5 text-[#997449]" />,
    Plane: <Plane className="w-5 h-5 text-[#997449]" />,
    Home: <Home className="w-5 h-5 text-[#997449]" />,
    Wine: <Wine className="w-5 h-5 text-[#997449]" />,
    Camera: <Camera className="w-5 h-5 text-[#997449]" />,
    ShieldCheck: <ShieldCheck className="w-5 h-5 text-[#997449]" />,
  };

  const faqs = [
    {
      q: "Why do you emphasize private concessions over National Parks?",
      a: "In national reserves like the public Masai Mara or Amboseli, hundreds of minivans can crowd a single cheetah sighting, and vehicles are strictly barred from off-road driving or night game drives. Private conservancies, by contrast, maintain strict land-to-guest ratios (e.g. 1 vehicle per 3,500 acres), allow night safaris with thermal scopes, permit guided bush walking, and allow respectful off-roading for prime photographic angles."
    },
    {
      q: "What are the luggage restrictions for internal bush flights?",
      a: "Due to internal airstrip runways and aircraft safety, scheduled and light charter bush aircraft (such as Cessna Grand Caravans) strictly enforce a limit of 15 kg (33 lbs) per passenger in soft-sided duffel bags with no rigid frames or wheels. For guests traveling with substantial camera gear, we arrange an additional freight seat or private charter aircraft where full baggage allowances are customized to your needs."
    },
    {
      q: "How does the VIP airport protocol operate upon landing in Nairobi?",
      a: "As soon as you disembark your international flight at Jomo Kenyatta International Airport (NBO), an airside protocol officer greets you with a personalized placard at the passenger bridge or tarmac. You are escorted through fast-track immigration lanes and private customs, avoiding general passenger queues, before being transferred to our private lounge or waiting chauffeur."
    },
    {
      q: "Can itineraries be adapted for multi-generational families with children?",
      a: "Absolutely. We specialize in exclusive-use safari villas and private tented camps where your family has complete run of the estate. Private chefs prepare customized meal schedules, and junior ranger programs allow children to learn track casting, archery with Maasai warriors, and astronomy without disturbing other guests."
    }
  ];

  return (
    <div className="pt-28 pb-24 space-y-24 bg-[#faf8f5] text-[#1c1a17]">
      
      {/* HEADER SECTION */}
      <section className="max-w-4xl mx-auto px-6 text-center space-y-5">
        <div className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.3em] text-[#997449] font-semibold">
          <span>Bespoke Logistics</span>
          <span>·</span>
          <span>Flawless Execution</span>
        </div>

        <h1 className="font-serif text-4xl sm:text-6xl text-[#1c1a17] font-normal leading-tight text-balance">
          The Unhurried <br />
          <span className="italic text-[#997449] font-light">Concierge Standard</span>
        </h1>

        <p className="max-w-2xl mx-auto text-base text-[#5c564c] font-light leading-relaxed">
          Behind every quiet moment in the African savannah lies an orchestra of private aviation, diplomatic airside clearance, and intimate culinary precision.
        </p>
      </section>

      {/* 6 CORE SERVICES GRID */}
      <section className="max-w-7xl mx-auto px-6 md:px-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {SERVICES.map((srv) => (
            <div
              key={srv.id}
              className="bg-white border border-[#e8e2d5] p-8 space-y-5 hover:border-[#c5a880] transition-colors shadow-sm flex flex-col justify-between"
            >
              <div className="space-y-4">
                <div className="w-12 h-12 bg-[#f5f0e6] flex items-center justify-center border border-[#ded7c8]">
                  {iconMap[srv.icon] || <Compass className="w-5 h-5 text-[#997449]" />}
                </div>

                <h3 className="font-serif text-2xl text-[#1c1a17]">
                  {srv.title}
                </h3>

                <p className="text-sm text-[#5c564c] leading-relaxed">
                  {srv.description}
                </p>
              </div>

              <div className="pt-4 border-t border-[#f0eae0] space-y-2">
                <div className="text-[10px] uppercase tracking-wider text-[#997449] font-semibold">
                  Standard Specifications
                </div>
                <div className="space-y-1.5">
                  {srv.features.map((f, idx) => (
                    <div key={idx} className="flex items-start gap-2 text-xs text-[#4a453d]">
                      <Check className="w-3.5 h-3.5 text-[#997449] shrink-0 mt-0.5" />
                      <span>{f}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* FREQUENTLY ASKED QUESTIONS */}
      <section className="bg-[#f5f0e6]/70 py-24 border-y border-[#e8e2d5]">
        <div className="max-w-4xl mx-auto px-6 space-y-12">
          
          <div className="text-center space-y-3">
            <div className="text-xs uppercase tracking-[0.25em] text-[#997449] font-semibold">
              Travel Intelligence
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl text-[#1c1a17]">
              Essential Safari Inquiries
            </h2>
            <p className="text-sm text-[#5c564c]">
              Answers to critical questions regarding private concessions, internal flights, and bespoke logistics.
            </p>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, idx) => {
              const isOpen = activeFaq === idx;
              return (
                <div
                  key={idx}
                  className="bg-white border border-[#e8e2d5] overflow-hidden"
                >
                  <button
                    onClick={() => setActiveFaq(isOpen ? null : idx)}
                    className="w-full p-6 text-left flex items-center justify-between gap-4 cursor-pointer focus:outline-none"
                  >
                    <span className="font-serif text-lg text-[#1c1a17]">
                      {faq.q}
                    </span>
                    {isOpen ? (
                      <ChevronUp className="w-5 h-5 text-[#997449] shrink-0" />
                    ) : (
                      <ChevronDown className="w-5 h-5 text-[#736f67] shrink-0" />
                    )}
                  </button>

                  {isOpen && (
                    <div className="px-6 pb-6 text-sm text-[#4a453d] leading-relaxed border-t border-[#f0eae0] pt-4">
                      {faq.a}
                    </div>
                  )}
                </div>
              );
            })}
          </div>

        </div>
      </section>

      {/* BOTTOM CTA */}
      <section className="max-w-4xl mx-auto px-6 text-center space-y-6">
        <h3 className="font-serif text-3xl sm:text-4xl text-[#1c1a17]">
          Require a Bespoke Aviation or Exclusive-Use Quote?
        </h3>
        <p className="text-base text-[#5c564c] max-w-xl mx-auto">
          Our senior logistics managers at Wilson Airport and Karen Sanctuary Lane coordinate private flight slots and private camp buyouts.
        </p>
        <div>
          <button
            onClick={() => setActivePage('contact')}
            className="px-8 py-3.5 bg-[#1c1a17] text-[#faf8f5] text-xs uppercase tracking-[0.22em] font-medium hover:bg-[#997449] transition-colors cursor-pointer"
          >
            Speak With Our Nairobi Logistics Desk
          </button>
        </div>
      </section>

    </div>
  );
};
