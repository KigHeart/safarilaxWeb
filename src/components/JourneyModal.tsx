import React, { useState } from 'react';
import { Journey } from '../types';
import { X, Calendar, MapPin, Compass, Check, ArrowRight, Clock } from 'lucide-react';

interface JourneyModalProps {
  journey: Journey | null;
  onClose: () => void;
  onEnquireJourney: (journey: Journey) => void;
}

export const JourneyModal: React.FC<JourneyModalProps> = ({
  journey,
  onClose,
  onEnquireJourney
}) => {
  const [activeTab, setActiveTab] = useState<'itinerary' | 'details' | 'accommodations'>('itinerary');

  if (!journey) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/80 backdrop-blur-sm animate-in fade-in duration-150">
      <div 
        className="bg-white border border-[#ded7c8] text-[#1c1a17] w-full max-w-4xl max-h-[92vh] flex flex-col shadow-2xl relative"
        role="dialog"
        aria-modal="true"
        aria-labelledby="journey-modal-title"
      >
        {/* Header / Hero Strip */}
        <div className="relative h-64 sm:h-72 overflow-hidden border-b border-[#e8e2d5] shrink-0 bg-[#e8e2d5]">
          <img
            src={journey.heroImage}
            alt={journey.title}
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
          
          <button
            onClick={onClose}
            className="absolute top-4 right-4 p-2 bg-black/60 hover:bg-black text-white transition-colors focus:outline-none cursor-pointer"
            aria-label="Close itinerary details"
          >
            <X className="w-5 h-5" />
          </button>

          <div className="absolute bottom-5 left-6 right-6 text-white">
            <div className="text-[11px] uppercase tracking-[0.25em] text-[#dfc8a2] font-semibold mb-1">
              {journey.country} · {journey.region}
            </div>
            <h2 id="journey-modal-title" className="font-serif text-2xl sm:text-3xl text-white">
              {journey.title}
            </h2>
            <p className="text-xs sm:text-sm text-white/90 italic font-serif mt-1">
              {journey.subtitle}
            </p>
          </div>
        </div>

        {/* Quick Meta Strip */}
        <div className="grid grid-cols-2 sm:grid-cols-4 divide-x divide-[#ded7c8] border-b border-[#ded7c8] bg-[#f5f0e6] text-xs">
          <div className="p-3.5 space-y-1">
            <div className="text-[#736f67] text-[10px] uppercase tracking-wider font-semibold">Duration</div>
            <div className="font-medium text-[#1c1a17] flex items-center gap-1.5">
              <Clock className="w-3.5 h-3.5 text-[#997449]" />
              <span>{journey.duration}</span>
            </div>
          </div>
          <div className="p-3.5 space-y-1">
            <div className="text-[#736f67] text-[10px] uppercase tracking-wider font-semibold">Pacing</div>
            <div className="font-medium text-[#1c1a17] flex items-center gap-1.5">
              <Compass className="w-3.5 h-3.5 text-[#997449]" />
              <span>{journey.pacing}</span>
            </div>
          </div>
          <div className="p-3.5 space-y-1">
            <div className="text-[#736f67] text-[10px] uppercase tracking-wider font-semibold">Indicative Investment</div>
            <div className="font-serif text-sm text-[#997449] font-semibold truncate">
              {journey.indicativePrice}
            </div>
          </div>
          <div className="p-3.5 space-y-1">
            <div className="text-[#736f67] text-[10px] uppercase tracking-wider font-semibold">Best Months</div>
            <div className="text-[#1c1a17] truncate text-[11px]">
              {journey.bestMonths.slice(0, 3).join(', ')}...
            </div>
          </div>
        </div>

        {/* Tab Selector */}
        <div className="flex border-b border-[#e8e2d5] px-6 bg-[#faf8f5] text-xs">
          <button
            onClick={() => setActiveTab('itinerary')}
            className={`py-3.5 px-4 font-semibold tracking-wider uppercase border-b-2 transition-colors cursor-pointer ${
              activeTab === 'itinerary'
                ? 'border-[#997449] text-[#997449]'
                : 'border-transparent text-[#736f67] hover:text-[#1c1a17]'
            }`}
          >
            Day-by-Day Expedition ({journey.days.length} Days)
          </button>
          <button
            onClick={() => setActiveTab('details')}
            className={`py-3.5 px-4 font-semibold tracking-wider uppercase border-b-2 transition-colors cursor-pointer ${
              activeTab === 'details'
                ? 'border-[#997449] text-[#997449]'
                : 'border-transparent text-[#736f67] hover:text-[#1c1a17]'
            }`}
          >
            Highlights & Inclusions
          </button>
          <button
            onClick={() => setActiveTab('accommodations')}
            className={`py-3.5 px-4 font-semibold tracking-wider uppercase border-b-2 transition-colors cursor-pointer ${
              activeTab === 'accommodations'
                ? 'border-[#997449] text-[#997449]'
                : 'border-transparent text-[#736f67] hover:text-[#1c1a17]'
            }`}
          >
            Lodges & Private Camps
          </button>
        </div>

        {/* Scrollable Body */}
        <div className="p-6 sm:p-8 overflow-y-auto space-y-6 text-sm text-[#4a453d]">
          
          {/* TAB 1: Day by Day */}
          {activeTab === 'itinerary' && (
            <div className="space-y-6">
              <p className="text-xs text-[#5c564c] leading-relaxed border-l-2 border-[#997449] pl-4 py-1">
                {journey.overview}
              </p>

              <div className="space-y-4 relative before:absolute before:left-3 before:top-2 before:bottom-2 before:w-[1px] before:bg-[#e8e2d5]">
                {journey.days.map((d) => (
                  <div key={d.day} className="relative pl-9 space-y-1.5">
                    {/* Circle marker */}
                    <div className="absolute left-1.5 top-1 -translate-x-1/2 w-4 h-4 rounded-full bg-white border-2 border-[#997449] flex items-center justify-center text-[9px] font-bold text-[#997449]">
                      {d.day}
                    </div>

                    <div className="flex flex-wrap items-baseline gap-2">
                      <span className="font-serif text-base text-[#1c1a17] font-semibold">
                        Day {d.day}: {d.title}
                      </span>
                      <span className="text-xs text-[#736f67]">· {d.location}</span>
                    </div>

                    <p className="text-xs text-[#5c564c] leading-relaxed">
                      {d.description}
                    </p>

                    <div className="pt-1 flex flex-wrap gap-x-4 gap-y-1 text-[11px] text-[#997449]">
                      <div>
                        <span className="text-[#736f67]">Sanctuary: </span>
                        {d.stay}
                      </div>
                      <div>
                        <span className="text-[#736f67]">Highlight: </span>
                        {d.activityHighlight}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* TAB 2: Details & Inclusions */}
          {activeTab === 'details' && (
            <div className="space-y-6">
              <div className="space-y-3">
                <h4 className="font-serif text-lg text-[#1c1a17]">
                  Curated Highlights
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {journey.highlights.map((h, i) => (
                    <div key={i} className="flex items-start gap-2.5 text-xs text-[#4a453d] bg-[#f5f0e6]/50 p-3 border border-[#ded7c8]">
                      <Check className="w-3.5 h-3.5 text-[#997449] shrink-0 mt-0.5" />
                      <span>{h}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="space-y-3 pt-4 border-t border-[#f0eae0]">
                <h4 className="font-serif text-lg text-[#1c1a17]">
                  All-Inclusive Amenities
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-[#5c564c]">
                  {journey.inclusions.map((inc, i) => (
                    <div key={i} className="flex items-start gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#997449] mt-1.5 shrink-0" />
                      <span>{inc}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* TAB 3: Accommodations */}
          {activeTab === 'accommodations' && (
            <div className="space-y-6">
              <div className="space-y-2">
                <h4 className="font-serif text-lg text-[#1c1a17]">
                  Featured Private Lodges & Tented Suites
                </h4>
                <p className="text-xs text-[#5c564c]">
                  Our partner concessions are hand-selected for uncompromising luxury, environmental stewardship, and sovereign seclusion.
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {journey.accommodations.map((acc, i) => (
                  <div key={i} className="p-4 bg-[#f5f0e6] border border-[#ded7c8] space-y-1">
                    <div className="font-serif text-base text-[#1c1a17] font-medium">{acc}</div>
                    <div className="text-[11px] text-[#736f67]">Private Concession Verified Partner</div>
                  </div>
                ))}
              </div>
            </div>
          )}

        </div>

        {/* Footer Action Bar */}
        <div className="p-5 border-t border-[#e8e2d5] bg-[#faf8f5] flex items-center justify-between gap-4 shrink-0">
          <button
            onClick={onClose}
            className="text-xs uppercase tracking-wider text-[#736f67] hover:text-[#1c1a17] transition-colors cursor-pointer"
          >
            Close Details
          </button>

          <button
            onClick={() => {
              onEnquireJourney(journey);
            }}
            className="px-6 py-3 bg-[#1c1a17] hover:bg-[#997449] text-[#faf8f5] text-xs uppercase tracking-[0.2em] font-medium transition-colors flex items-center gap-2 cursor-pointer shadow-sm"
          >
            <span>Tailor This Itinerary</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>

      </div>
    </div>
  );
};
