import React, { useState } from 'react';
import { PageId, Journey } from '../types';
import { JOURNEYS } from '../data/journeys';
import { Clock, Compass, MapPin, ArrowRight, ArrowUpRight, Sparkles, Filter, SlidersHorizontal, Check } from 'lucide-react';

interface JourneysViewProps {
  onOpenJourney: (journey: Journey) => void;
  onCustomizeJourney: (journey: Journey) => void;
  setActivePage: (page: PageId) => void;
  setPreselectedStyle?: (style: string) => void;
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
    // Navigate to contact and fill special requests
    setActivePage('contact');
  };

  return (
    <div className="pt-24 pb-20 space-y-20">
      
      {/* HEADER SECTION */}
      <section className="max-w-5xl mx-auto px-6 text-center space-y-6">
        <div className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.3em] text-[#c5a880] font-medium">
          <span>Curated Expeditions</span>
          <span>·</span>
          <span>East Africa</span>
        </div>

        <h1 className="font-serif text-4xl sm:text-6xl text-[#FAF8F5] font-normal leading-tight text-balance">
          Tailor-Made <br />
          <span className="italic text-[#c5a880] font-light">African Journeys</span>
        </h1>

        <p className="max-w-2xl mx-auto text-sm sm:text-base text-[#ded7c8] font-light leading-relaxed">
          Each itinerary below is a meticulously conceived blueprint. Every journey is customized around your personal pace, dates, flight logistics, and conservation interests.
        </p>
      </section>

      {/* FILTER BUTTONS / SEGMENTED CONTROL */}
      <section className="max-w-7xl mx-auto px-6 md:px-10">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pb-6 border-b border-[#211f1a]">
          
          <div className="flex items-center gap-2 text-xs text-[#8e8a80]">
            <Filter className="w-3.5 h-3.5 text-[#c5a880]" />
            <span>Filter by Expedition Style:</span>
          </div>

          <div className="flex flex-wrap items-center gap-1.5 p-1 bg-[#141311] border border-[#24221d]">
            {[
              { id: 'all', label: 'All Journeys' },
              { id: 'classic', label: 'Migration & Concessions' },
              { id: 'photographic', label: 'Rare Species & North' },
              { id: 'aerial', label: 'Helicopter Expeditions' },
              { id: 'romance', label: 'Kilimanjaro & Bush to Beach' }
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setFilterStyle(tab.id)}
                className={`px-3 py-1.5 text-xs font-medium tracking-wider uppercase transition-colors whitespace-nowrap ${
                  filterStyle === tab.id
                    ? 'bg-[#c5a880] text-[#0e0d0b]'
                    : 'text-[#8e8a80] hover:text-[#FAF8F5]'
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
              className="bg-[#141311] border border-[#24221d] hover:border-[#c5a880]/50 transition-all duration-300 overflow-hidden"
            >
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-0">
                
                {/* Visual side */}
                <div className="lg:col-span-5 relative min-h-[300px] lg:min-h-[420px] overflow-hidden">
                  <img
                    src={j.heroImage}
                    alt={j.title}
                    className="w-full h-full object-cover"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#141311] via-transparent to-transparent lg:hidden" />
                  
                  <div className="absolute top-4 left-4 bg-[#0e0d0b]/80 backdrop-blur-sm px-3 py-1 border border-[#2e2a22] text-[10px] uppercase tracking-wider text-[#c5a880]">
                    {j.country} · {j.region}
                  </div>
                </div>

                {/* Details side */}
                <div className="lg:col-span-7 p-6 sm:p-8 md:p-10 flex flex-col justify-between space-y-6">
                  
                  <div className="space-y-3">
                    <div className="flex flex-wrap items-center gap-2 text-xs text-[#8e8a80]">
                      <span className="text-[#c5a880] font-medium">{j.styleLabel}</span>
                      <span>·</span>
                      <span>{j.duration}</span>
                      <span>·</span>
                      <span>{j.pacing}</span>
                    </div>

                    <h2 className="font-serif text-2xl sm:text-3xl text-[#FAF8F5]">
                      {j.title}
                    </h2>

                    <p className="font-serif italic text-xs text-[#ded7c8]/90">
                      {j.subtitle}
                    </p>

                    <p className="text-xs sm:text-sm text-[#a8a396] leading-relaxed pt-1">
                      {j.overview}
                    </p>
                  </div>

                  {/* Highlights Bullet List */}
                  <div className="border-t border-[#22201b] pt-4 space-y-2">
                    <div className="text-[10px] uppercase tracking-wider text-[#c5a880] font-medium">
                      Bespoke Curated Highlights
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-[#ded7c8]">
                      {j.highlights.slice(0, 4).map((h, idx) => (
                        <div key={idx} className="flex items-start gap-2">
                          <span className="w-1.5 h-1.5 rounded-full bg-[#c5a880] mt-1.5 shrink-0" />
                          <span className="line-clamp-2">{h}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Pricing and Action */}
                  <div className="pt-4 border-t border-[#22201b] flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                    <div>
                      <div className="text-[10px] uppercase tracking-wider text-[#8e8a80]">
                        Indicative All-Inclusive Investment
                      </div>
                      <div className="font-mono text-sm sm:text-base text-[#c5a880] font-medium">
                        {j.indicativePrice}
                      </div>
                    </div>

                    <div className="flex items-center gap-3">
                      <button
                        onClick={() => onOpenJourney(j)}
                        className="py-2.5 px-4 bg-[#1f1d18] hover:bg-[#2b2720] text-[#FAF8F5] text-xs uppercase tracking-[0.16em] transition-colors border border-[#2e2a22]"
                      >
                        Full Dossier
                      </button>

                      <button
                        onClick={() => onCustomizeJourney(j)}
                        className="py-2.5 px-5 bg-[#c5a880] hover:bg-[#d4b896] text-[#0e0d0b] text-xs uppercase tracking-[0.18em] font-medium transition-colors flex items-center gap-2"
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
      <section className="bg-[#141311] py-20 border-y border-[#211f1a]">
        <div className="max-w-6xl mx-auto px-6 md:px-10">
          
          <div className="max-w-2xl mb-12 space-y-3">
            <div className="text-xs uppercase tracking-[0.25em] text-[#c5a880] font-medium flex items-center gap-2">
              <SlidersHorizontal className="w-3.5 h-3.5 text-[#c5a880]" />
              <span>Interactive Itinerary Planner</span>
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl text-[#FAF8F5]">
              Design Your Unhurried Itinerary
            </h2>
            <p className="text-xs text-[#8e8a80]">
              Configure your ideal parameters. Our Nairobi private travel team will prepare an exact proposal and quote for your party.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            
            {/* Left: Interactive Controls */}
            <div className="lg:col-span-7 bg-[#181613] border border-[#262420] p-6 sm:p-8 space-y-6">
              
              {/* Region Selection */}
              <div className="space-y-2">
                <label className="block text-xs uppercase tracking-wider text-[#c5a880] font-medium">
                  Primary Concession / Region
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {[
                    'Masai Mara & Private Concessions',
                    'Laikipia & Samburu Frontiers',
                    'Amboseli & Chyulu Hills (Kilimanjaro)',
                    'Rift Valley & Suguta (Helicopter)',
                    'Bush to Lamu/Diani Barefoot Beach'
                  ].map((reg) => (
                    <button
                      key={reg}
                      type="button"
                      onClick={() => setBuilderRegion(reg)}
                      className={`text-left text-xs p-3 border transition-colors ${
                        builderRegion === reg
                          ? 'border-[#c5a880] bg-[#222019] text-[#FAF8F5]'
                          : 'border-[#262420] bg-[#141311] text-[#8e8a80] hover:text-[#FAF8F5]'
                      }`}
                    >
                      {reg}
                    </button>
                  ))}
                </div>
              </div>

              {/* Duration and Travelers */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label className="block text-xs uppercase tracking-wider text-[#c5a880] font-medium">
                    Expedition Duration
                  </label>
                  <select
                    value={builderDuration}
                    onChange={(e) => setBuilderDuration(e.target.value)}
                    className="w-full bg-[#141311] border border-[#262420] text-xs text-[#FAF8F5] p-3 focus:outline-none focus:border-[#c5a880]"
                  >
                    <option value="6-7 Days (Single Ecosystem Deep Dive)">6-7 Days (Single Ecosystem Deep Dive)</option>
                    <option value="8-10 Days (Quintessential Two-Concession Safari)">8-10 Days (Quintessential Two-Concession Safari)</option>
                    <option value="11-14 Days (Grand Unhurried Odyssey)">11-14 Days (Grand Unhurried Odyssey)</option>
                    <option value="15+ Days (Continent-Wide Bespoke)">15+ Days (Continent-Wide Bespoke)</option>
                  </select>
                </div>

                <div className="space-y-2">
                  <label className="block text-xs uppercase tracking-wider text-[#c5a880] font-medium">
                    Traveling Party
                  </label>
                  <select
                    value={builderTravelers}
                    onChange={(e) => setBuilderTravelers(e.target.value)}
                    className="w-full bg-[#141311] border border-[#262420] text-xs text-[#FAF8F5] p-3 focus:outline-none focus:border-[#c5a880]"
                  >
                    <option value="Solo Traveler (Dedicated Guide)">Solo Traveler (Dedicated Guide)</option>
                    <option value="Couple / Honeymoon (Private Cruiser)">Couple / Honeymoon (Private Cruiser)</option>
                    <option value="Family with Children (Private Villa)">Family with Children (Private Villa)</option>
                    <option value="Small Group Buyout (Exclusive Camp)">Small Group Buyout (Exclusive Camp)</option>
                  </select>
                </div>
              </div>

              {/* Preferred Season */}
              <div className="space-y-2">
                <label className="block text-xs uppercase tracking-wider text-[#c5a880] font-medium">
                  Ideal Travel Window
                </label>
                <select
                  value={builderMonth}
                  onChange={(e) => setBuilderMonth(e.target.value)}
                  className="w-full bg-[#141311] border border-[#262420] text-xs text-[#FAF8F5] p-3 focus:outline-none focus:border-[#c5a880]"
                >
                  <option value="July – October (Great Migration & Prime Dry Season)">July – October (Great Migration & Prime Dry Season)</option>
                  <option value="December – March (Emerald Season & Calving Season)">December – March (Emerald Season & Calving Season)</option>
                  <option value="June & November (Quiet Shoulder Months)">June & November (Quiet Shoulder Months)</option>
                  <option value="Flexible / Guide Recommendation">Flexible / Guide Recommendation</option>
                </select>
              </div>

            </div>

            {/* Right: Live Custom Summary & Dispatch */}
            <div className="lg:col-span-5 bg-[#181613] border border-[#c5a880]/40 p-6 sm:p-8 space-y-6">
              <div>
                <div className="text-[10px] uppercase tracking-[0.25em] text-[#c5a880] font-medium">
                  Your Bespoke Proposal Draft
                </div>
                <h3 className="font-serif text-2xl text-[#FAF8F5] mt-1">
                  Private African Itinerary
                </h3>
              </div>

              <div className="space-y-3 border-t border-[#262420] pt-4 text-xs">
                <div className="flex justify-between py-1 border-b border-[#22201b]">
                  <span className="text-[#8e8a80]">Target Focus:</span>
                  <span className="text-[#FAF8F5] text-right font-medium">{builderRegion}</span>
                </div>
                <div className="flex justify-between py-1 border-b border-[#22201b]">
                  <span className="text-[#8e8a80]">Length:</span>
                  <span className="text-[#FAF8F5] font-medium">{builderDuration}</span>
                </div>
                <div className="flex justify-between py-1 border-b border-[#22201b]">
                  <span className="text-[#8e8a80]">Party:</span>
                  <span className="text-[#FAF8F5] font-medium">{builderTravelers}</span>
                </div>
                <div className="flex justify-between py-1 border-b border-[#22201b]">
                  <span className="text-[#8e8a80]">Season:</span>
                  <span className="text-[#c5a880] font-medium">{builderMonth}</span>
                </div>
                <div className="flex justify-between py-1 border-b border-[#22201b]">
                  <span className="text-[#8e8a80]">Aviation:</span>
                  <span className="text-[#FAF8F5] font-medium">Private Bush Charters Included</span>
                </div>
              </div>

              <div className="p-4 bg-[#14120f] border border-[#2a2720] space-y-1">
                <div className="text-[11px] text-[#c5a880] font-medium">
                  Direct Dispatch to Bookings Desk
                </div>
                <p className="text-[11px] text-[#8e8a80]">
                  This draft will be sent to <span className="text-[#ded7c8]">bookings@safarilax.world</span> with custom logistics and pricing within 24 hours.
                </p>
              </div>

              <button
                onClick={handleLaunchBuilderEnquiry}
                className="w-full py-3.5 bg-[#c5a880] text-[#0e0d0b] text-xs uppercase tracking-[0.2em] font-medium hover:bg-[#d4b896] transition-colors flex items-center justify-center gap-2"
              >
                <span>Proceed to Private Enquiry Form</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>

          </div>

        </div>
      </section>

    </div>
  );
};
