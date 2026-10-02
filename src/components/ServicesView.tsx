import React, { useState } from 'react';
import { PageId } from '../types';
import { SERVICES } from '../data/services';
import { BRAND } from '../data/brand';
import { Compass, Plane, Home, Wine, Camera, ShieldCheck, Check, ArrowRight, HelpCircle } from 'lucide-react';

interface ServicesViewProps {
  setActivePage: (page: PageId) => void;
}

export const ServicesView: React.FC<ServicesViewProps> = ({ setActivePage }) => {
  const [activeFaq, setActiveFaq] = useState<number | null>(null);

  const iconMap: Record<string, React.ReactNode> = {
    Compass: <Compass className="w-5 h-5 text-[#c5a880]" />,
    Plane: <Plane className="w-5 h-5 text-[#c5a880]" />,
    Home: <Home className="w-5 h-5 text-[#c5a880]" />,
    Wine: <Wine className="w-5 h-5 text-[#c5a880]" />,
    Camera: <Camera className="w-5 h-5 text-[#c5a880]" />,
    ShieldCheck: <ShieldCheck className="w-5 h-5 text-[#c5a880]" />,
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
      a: "As soon as you disembark your international flight at Jomo Kenyatta International Airport (NBO), an airside protocol officer greets you with a personalized placard at the passenger bridge or tarmac. You are escorted through diplomatic or fast-track immigration lanes and private customs, avoiding the general passenger queue, before being transferred to our private lounge or waiting chauffeur."
    },
    {
      q: "Can itineraries be adapted for multi-generational families with children?",
      a: "Absolutely. We specialize in exclusive-use safari villas and private tented camps where your family has complete run of the estate. Private chefs prepare customized meal schedules, and junior ranger programs allow children to learn track casting, archery with Maasai warriors, and astronomy without disturbing other guests."
    }
  ];

  return (
    <div className="pt-24 pb-20 space-y-24">
      
      {/* HEADER SECTION */}
      <section className="max-w-5xl mx-auto px-6 text-center space-y-6">
        <div className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.3em] text-[#c5a880] font-medium">
          <span>Bespoke Logistics</span>
          <span>·</span>
          <span>Flawless Execution</span>
        </div>

        <h1 className="font-serif text-4xl sm:text-6xl text-[#FAF8F5] font-normal leading-tight text-balance">
          Tailored Services for the <br />
          <span className="italic text-[#c5a880] font-light">Discerning Traveler</span>
        </h1>

        <p className="max-w-2xl mx-auto text-sm sm:text-base text-[#ded7c8] font-light leading-relaxed">
          The art of an unhurried safari lies in seamless, invisible logistics. From dedicated private aviation to gold-accredited guides and private villa buyouts, every element is curated with discreet precision.
        </p>
      </section>

      {/* DETAILED SERVICES LIST */}
      <section className="max-w-7xl mx-auto px-6 md:px-10 space-y-16">
        {SERVICES.map((s, index) => {
          const isEven = index % 2 === 1;
          return (
            <div
              key={s.id}
              className="bg-[#141311] border border-[#24221d] p-8 md:p-12 hover:border-[#c5a880]/40 transition-colors"
            >
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
                
                {/* Content Side */}
                <div className={`lg:col-span-7 space-y-6 ${isEven ? 'lg:order-2' : ''}`}>
                  <div className="flex items-center gap-4">
                    <span className="font-serif text-3xl text-[#c5a880] font-light">
                      {s.number}
                    </span>
                    <div className="p-2.5 bg-[#1e1c17] border border-[#2a2720]">
                      {iconMap[s.iconName]}
                    </div>
                  </div>

                  <h2 className="font-serif text-2xl sm:text-3xl text-[#FAF8F5]">
                    {s.title}
                  </h2>

                  <p className="text-sm text-[#ded7c8] leading-relaxed">
                    {s.fullDesc}
                  </p>

                  <div className="space-y-2.5 pt-2 border-t border-[#22201b]">
                    <div className="text-[10px] uppercase tracking-wider text-[#c5a880] font-medium">
                      Bespoke Service Inclusions:
                    </div>
                    {s.features.map((feat, idx) => (
                      <div key={idx} className="flex items-start gap-2.5 text-xs text-[#a8a396]">
                        <Check className="w-3.5 h-3.5 text-[#c5a880] shrink-0 mt-0.5" />
                        <span>{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Image Side */}
                <div className={`lg:col-span-5 relative h-72 sm:h-80 lg:h-96 overflow-hidden border border-[#282620] ${isEven ? 'lg:order-1' : ''}`}>
                  {s.image && (
                    <img
                      src={s.image}
                      alt={s.title}
                      className="w-full h-full object-cover"
                      referrerPolicy="no-referrer"
                    />
                  )}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#141311]/80 via-transparent to-transparent" />
                </div>

              </div>
            </div>
          );
        })}
      </section>

      {/* FREQUENTLY ASKED QUESTIONS */}
      <section className="bg-[#141311] py-20 border-y border-[#211f1a]">
        <div className="max-w-4xl mx-auto px-6 md:px-10 space-y-12">
          
          <div className="text-center space-y-3">
            <div className="text-xs uppercase tracking-[0.25em] text-[#c5a880] font-medium flex items-center justify-center gap-1.5">
              <HelpCircle className="w-3.5 h-3.5 text-[#c5a880]" />
              <span>Essential Planning Guidance</span>
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl text-[#FAF8F5]">
              Frequently Addressed Inquiries
            </h2>
            <p className="text-xs text-[#8e8a80]">
              Transparent answers regarding concessions, private aviation, and health protocol.
            </p>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, idx) => {
              const isOpen = activeFaq === idx;
              return (
                <div
                  key={idx}
                  className="border border-[#262420] bg-[#181613] overflow-hidden transition-colors"
                >
                  <button
                    onClick={() => setActiveFaq(isOpen ? null : idx)}
                    className="w-full text-left p-5 flex items-center justify-between gap-4 focus:outline-none"
                  >
                    <span className="font-serif text-base text-[#FAF8F5]">
                      {faq.q}
                    </span>
                    <span className="font-mono text-sm text-[#c5a880] shrink-0">
                      {isOpen ? '—' : '+'}
                    </span>
                  </button>

                  {isOpen && (
                    <div className="px-5 pb-5 pt-1 text-xs text-[#a8a396] leading-relaxed border-t border-[#24221d] animate-in fade-in duration-200">
                      {faq.a}
                    </div>
                  )}
                </div>
              );
            })}
          </div>

        </div>
      </section>

      {/* CTA SECTION */}
      <section className="max-w-4xl mx-auto px-6 text-center space-y-6">
        <div className="text-xs uppercase tracking-[0.25em] text-[#c5a880] font-medium">
          Ready to Coordinate Your Safari?
        </div>
        <h2 className="font-serif text-3xl sm:text-4xl text-[#FAF8F5]">
          Connect with Our Private Travel Concierge
        </h2>
        <p className="text-xs sm:text-sm text-[#a8a396] max-w-xl mx-auto leading-relaxed">
          Tell us about your envisioned trip. Our team will tailor all aviation, accommodation, and guiding arrangements to perfection.
        </p>

        <div>
          <button
            onClick={() => setActivePage('contact')}
            className="px-8 py-3.5 bg-[#c5a880] text-[#0e0d0b] text-xs uppercase tracking-[0.2em] font-medium hover:bg-[#d4b896] transition-colors"
          >
            Initiate Private Consultation
          </button>
        </div>
      </section>

    </div>
  );
};
