import React, { useState } from 'react';
import { PageId, Journey } from '../types';
import { JOURNEYS } from '../data/journeys';
import { Clock, Compass, MapPin, ArrowRight, Filter, SlidersHorizontal, Check } from 'lucide-react';

interface JourneysViewProps {
  onOpenJourney: (journey: Journey) => void;
  onCustomizeJourney: (journey: Journey) => void;
  setActivePage: (page: PageId) => void;
}

export const JourneysView: React.FC<JourneysViewProps> = ({
  onOpenJourney,
  onCustomizeJourney,
  setActivePage,
}) => {
  const [filterStyle, setFilterStyle] = useState<string>('all');
  
  // Interactive Custom Journey Builder State
  const [builderRegion, setBuilderRegion] = useState('Masai Mara & Private Concessions');
  const [builderDuration, setBuilderDuration] = useState('8-10 Days');
  const [builderTravelers, setBuilderTravelers] = useState('2 Guests (Private)');
  const [builderMonth, setBuilderMonth] = useState('July – October (Great Migration)');
  const [builderFlying, setBuilderFlying] = useState('Direct Bush Charter Aviation');

  const filteredJourneys = filterStyle === 'all'
    ? JOURNEYS
    : JOURNEYS.filter((j) => j.style === filterStyle);

  const handleLaunchBuilderEnquiry = () => {
    setActivePage('contact');
  };

  return (
    <div className="pt-28 pb-24 space-y-20 bg-[#faf8f5] text-[#1c1a17]">
      
      {/* HEADER SECTION */}
      <section className="max-w-4xl mx-auto px-6 text-center space-y-5">
        <div className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.3em] text-[#997449] font-semibold">
          <span>Curated Expeditions</span>
          <span>·</span>
          <span>East Africa</span>
        </div>

        <h1 className="font-serif text-4xl sm:text-6xl text-[#1c1a17] font-normal leading-tight text-balance">
          Tailor-Made <br />
          <span className="italic text-[#997449] font-light">African Journeys</span>
        </h1>

        <p className="max-w-2xl mx-auto text-base text-[#5c564c] font-light leading-relaxed">
          Each itinerary below is a meticulously conceived blueprint. Every journey is customized around your personal pace, dates, flight logistics, and conservation interests.
        </p>
      </section>

      {/* FILTER BUTTONS / SEGMENTED CONTROL */}
      <section className="max-w-7xl mx-auto px-6 md:px-10">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pb-6 border-b border-[#e8e2d5]">
          
          <div className="flex items-center gap-2 text-xs text-[#736f67]">
            <Filter className="w-3.5 h-3.5 text-[#997449]" />
            <span>Filter by Expedition Style:</span>
          </div>

          <div className="flex flex-wrap items-center gap-2 p-1.5 bg-[#f5f0e6] border border-[#e8e2d5]">
            {[
              { id: 'all', label: 'All Journeys' },
              { id: 'classic', label: 'Migration & Concessions' },
              { id: 'photographic', label: 'Rare Species & North' },
              { id: 'aerial', label: 'Helicopter Expeditions' },
              { id: 'romance', label: 'Kilimanjaro & Coast' }
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setFilterStyle(tab.id)}
                className={`px-4 py-2 text-xs font-medium tracking-wider uppercase transition-colors whitespace-nowrap cursor-pointer ${
                  filterStyle === tab.id
                    ? 'bg-[#1c1a17] text-[#faf8f5]'
                    : 'text-[#5c564c] hover:text-[#1c1a17]'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>

        </div>
      </section>

      {/* JOURNEYS CARDS LIST */}
      <section className="max-w-7xl mx-auto px-6 md:px-10">
        <div className="space-y-12">
          {filteredJourneys.map((j) => (
            <div
              key={j.id}
              className="bg-white border border-[#e8e2d5] hover:border-[#c5a880] transition-all duration-300 shadow-sm overflow-hidden"
            >
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-0">
                
                {/* Visual side */}
                <div className="lg:col-span-5 relative min-h-[300px] lg:min-h-[420px] overflow-hidden bg-[#e8e2d5]">
                  <img
                    src={j.heroImage}
                    alt={j.title}
                    className="w-full h-full object-cover"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute top-4 left-4 bg-[#faf8f5]/90 backdrop-blur-sm px-3.5 py-1.5 border border-[#e8e2d5] text-[10px] uppercase tracking-wider text-[#997449] font-semibold">
                    {j.country} · {j.region}
                  </div>
                </div>

                {/* Details side */}
                <div className="lg:col-span-7 p-8 sm:p-10 flex flex-col justify-between space-y-6">
                  
                  <div className="space-y-3">
                    <div className="flex flex-wrap items-center gap-2 text-xs text-[#736f67]">
                      <span className="text-[#997449] font-semibold">{j.styleLabel}</span>
                      <span>·</span>
                      <span>{j.duration}</span>
                      <span>·</span>
                      <span>{j.pacing}</span>
                    </div>

                    <h2 className="font-serif text-2xl sm:text-3xl text-[#1c1a17]">
                      {j.title}
                    </h2>

                    <p className="font-serif italic text-xs text-[#5c564c]">
                      {j.subtitle}
                    </p>

                    <p className="text-sm text-[#4a453d] leading-relaxed pt-1">
                      {j.overview}
                    </p>
                  </div>

                  {/* Highlights Bullet List */}
                  <div className="border-t border-[#f0eae0] pt-4 space-y-2">
                    <div className="text-[10px] uppercase tracking-wider text-[#997449] font-semibold">
                      Curated Highlights
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-[#5c564c]">
                      {j.highlights.slice(0, 4).map((h, idx) => (
                        <div key={idx} className="flex items-start gap-2">
                          <span className="w-1.5 h-1.5 rounded-full bg-[#997449] mt-1.5 shrink-0" />
                          <span className="line-clamp-2">{h}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Pricing and Action */}
                  <div className="pt-4 border-t border-[#f0eae0] flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                    <div>
                      <div className="text-[10px] uppercase tracking-wider text-[#736f67]">
                        Indicative All-Inclusive Investment
                      </div>
                      <div className="font-serif text-lg text-[#1c1a17] font-semibold">
                        {j.indicativePrice}
                      </div>
                    </div>

                    <div className="flex items-center gap-3">
                      <button
                        onClick={() => onOpenJourney(j)}
                        className="py-2.5 px-5 bg-[#f5f0e6] hover:bg-[#e8e2d5] text-[#1c1a17] text-xs uppercase tracking-[0.18em] transition-colors border border-[#ded7c8] cursor-pointer"
                      >
                        Expedition Details
                      </button>

                      <button
                        onClick={() => onCustomizeJourney(j)}
                        className="py-2.5 px-6 bg-[#1c1a17] hover:bg-[#997449] text-[#faf8f5] text-xs uppercase tracking-[0.18em] font-medium transition-colors flex items-center gap-2 cursor-pointer shadow-sm"
                      >
                        <span>Tailor Journey</span>
                        <ArrowRight className="w-3.5 h-3.5" />
                      </button>
                    </div>
                  </div>

                </div>

              </div>
            </div>
          ))}
        </div>
      </section>

      {/* INTERACTIVE CUSTOM JOURNEY BUILDER */}
      <section className="bg-[#f5f0e6]/70 py-24 border-y border-[#e8e2d5]">
        <div className="max-w-6xl mx-auto px-6 md:px-10">
          
          <div className="max-w-2xl mb-12 space-y-3">
            <div className="text-xs uppercase tracking-[0.25em] text-[#997449] font-semibold flex items-center gap-2">
              <SlidersHorizontal className="w-3.5 h-3.5" />
              <span>Interactive Itinerary Planner</span>
            </div>
            <h3 className="font-serif text-3xl sm:text-4xl text-[#1c1a17]">
              Design Your Sovereign Expedition
            </h3>
            <p className="text-sm text-[#5c564c] leading-relaxed">
              Select your ideal parameters. Our Nairobi private travel team will prepare an exact proposal and quote for your party.
            </p>
          </div>

          <div className="bg-white border border-[#e8e2d5] p-8 md:p-12 shadow-sm grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            <div className="lg:col-span-8 space-y-6">
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-xs uppercase tracking-wider text-[#736f67] font-semibold">Sanctuary & Concessions</label>
                  <select
                    value={builderRegion}
                    onChange={(e) => setBuilderRegion(e.target.value)}
                    className="w-full p-3 bg-[#faf8f5] border border-[#ded7c8] text-xs text-[#1c1a17] focus:outline-none focus:border-[#997449]"
                  >
                    <option>Masai Mara & Private Concessions</option>
                    <option>Lewa Wildlife Sanctuary & Laikipia</option>
                    <option>Amboseli Elephant Enclave & Chyulu Hills</option>
                    <option>Northern Frontier & Samburu Namunyak</option>
                    <option>Kenya Grand Bush & Lamu Coast</option>
                  </select>
                </div>

                <div className="space-y-2">
                  <label className="text-xs uppercase tracking-wider text-[#736f67] font-semibold">Ideal Duration</label>
                  <select
                    value={builderDuration}
                    onChange={(e) => setBuilderDuration(e.target.value)}
                    className="w-full p-3 bg-[#faf8f5] border border-[#ded7c8] text-xs text-[#1c1a17] focus:outline-none focus:border-[#997449]"
                  >
                    <option>6-7 Days (Focused Immersion)</option>
                    <option>8-10 Days (Optimal Unhurried Pacing)</option>
                    <option>12-14 Days (Grand Multi-Ecosystem)</option>
                    <option>15+ Days (Exclusive Continent Traverse)</option>
                  </select>
                </div>

                <div className="space-y-2">
                  <label className="text-xs uppercase tracking-wider text-[#736f67] font-semibold">Party Composition</label>
                  <select
                    value={builderTravelers}
                    onChange={(e) => setBuilderTravelers(e.target.value)}
                    className="w-full p-3 bg-[#faf8f5] border border-[#ded7c8] text-xs text-[#1c1a17] focus:outline-none focus:border-[#997449]"
                  >
                    <option>2 Guests (Private Couple / Solo)</option>
                    <option>Family (Parents + Children)</option>
                    <option>Small Private Group (4-6 Principals)</option>
                    <option>Multi-Generational Sole-Use Camp</option>
                  </select>
                </div>

                <div className="space-y-2">
                  <label className="text-xs uppercase tracking-wider text-[#736f67] font-semibold">Preferred Timing</label>
                  <select
                    value={builderMonth}
                    onChange={(e) => setBuilderMonth(e.target.value)}
                    className="w-full p-3 bg-[#faf8f5] border border-[#ded7c8] text-xs text-[#1c1a17] focus:outline-none focus:border-[#997449]"
                  >
                    <option>July – October (Great River Crossings)</option>
                    <option>January – March (Calving & Predator Hunts)</option>
                    <option>November – December (Festive & Short Rains)</option>
                    <option>April – June (Emerald Season Solitude)</option>
                  </select>
                </div>
              </div>

            </div>

            <div className="lg:col-span-4 bg-[#f5f0e6] border border-[#ded7c8] p-6 space-y-4 text-center">
              <div className="text-[10px] uppercase tracking-widest text-[#997449] font-semibold">
                Your Bespoke Draft
              </div>
              <div className="font-serif text-xl text-[#1c1a17]">
                {builderRegion.split('&')[0]}
              </div>
              <div className="text-xs text-[#5c564c] space-y-1 border-y border-[#ded7c8] py-3">
                <div>{builderDuration} · {builderTravelers}</div>
                <div>{builderMonth.split('(')[0]}</div>
                <div>Direct Private Bush Aviation</div>
              </div>
              <button
                onClick={handleLaunchBuilderEnquiry}
                className="w-full py-3.5 bg-[#1c1a17] text-[#faf8f5] hover:bg-[#997449] text-xs uppercase tracking-[0.2em] font-medium transition-colors cursor-pointer"
              >
                Request Itinerary Proposal
              </button>
            </div>

          </div>

        </div>
      </section>

    </div>
  );
};
