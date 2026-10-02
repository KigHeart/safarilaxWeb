import React, { useState } from 'react';
import { Journey } from '../types';
import { X, Calendar, MapPin, Compass, Check, ArrowRight, ShieldCheck, Clock } from 'lucide-react';

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
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/85 backdrop-blur-md animate-in fade-in duration-200">
      <div 
        className="bg-[#12110f] border border-[#2e2b24] text-[#FAF8F5] w-full max-w-4xl max-h-[92vh] flex flex-col shadow-2xl relative"
        role="dialog"
        aria-modal="true"
        aria-labelledby="journey-modal-title"
      >
        {/* Header / Hero Strip */}
        <div className="relative h-64 sm:h-72 overflow-hidden border-b border-[#24221d] shrink-0">
          <img
            src={journey.heroImage}
            alt={journey.title}
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#12110f] via-[#12110f]/60 to-transparent" />
          
          <button
            onClick={onClose}
            className="absolute top-4 right-4 p-2 bg-[#0e0d0b]/80 hover:bg-[#0e0d0b] text-[#FAF8F5] border border-[#2e2a22] transition-colors focus:outline-none"
            aria-label="Close itinerary details"
          >
            <X className="w-5 h-5" />
          </button>

          <div className="absolute bottom-5 left-6 right-6">
            <div className="text-[11px] uppercase tracking-[0.25em] text-[#c5a880] font-medium mb-1">
              {journey.country} · {journey.region}
            </div>
            <h2 id="journey-modal-title" className="font-serif text-2xl sm:text-3xl text-[#FAF8F5]">
              {journey.title}
            </h2>
            <p className="text-xs sm:text-sm text-[#ded7c8]/90 italic font-serif mt-1">
              {journey.subtitle}
            </p>
          </div>
        </div>

        {/* Quick Meta Strip */}
        <div className="grid grid-cols-2 sm:grid-cols-4 divide-x divide-[#24221d] border-b border-[#24221d] bg-[#0e0d0b] text-xs">
          <div className="p-3.5 space-y-1">
            <div className="text-[#8e8a80] text-[10px] uppercase tracking-wider">Duration</div>
            <div className="font-medium text-[#FAF8F5] flex items-center gap-1.5">
              <Clock className="w-3.5 h-3.5 text-[#c5a880]" />
              <span>{journey.duration}</span>
            </div>
          </div>
          <div className="p-3.5 space-y-1">
            <div className="text-[#8e8a80] text-[10px] uppercase tracking-wider">Pacing</div>
            <div className="font-medium text-[#FAF8F5] flex items-center gap-1.5">
              <Compass className="w-3.5 h-3.5 text-[#c5a880]" />
              <span>{journey.pacing}</span>
            </div>
          </div>
          <div className="p-3.5 space-y-1">
            <div className="text-[#8e8a80] text-[10px] uppercase tracking-wider">Indicative Investment</div>
            <div className="font-mono text-[#c5a880] font-medium truncate">
              {journey.indicativePrice}
            </div>
          </div>
          <div className="p-3.5 space-y-1">
            <div className="text-[#8e8a80] text-[10px] uppercase tracking-wider">Best Travel Months</div>
            <div className="text-[#FAF8F5] truncate text-[11px]">
              {journey.bestMonths.slice(0, 3).join(', ')}...
            </div>
          </div>
        </div>

        {/* Tab Selector */}
        <div className="flex border-b border-[#24221d] px-6 bg-[#12110f] text-xs">
          <button
            onClick={() => setActiveTab('itinerary')}
            className={`py-3 px-4 font-medium tracking-wider uppercase border-b-2 transition-colors ${
              activeTab === 'itinerary'
                ? 'border-[#c5a880] text-[#c5a880]'
                : 'border-transparent text-[#8e8a80] hover:text-[#FAF8F5]'
            }`}
          >
            Day-by-Day Itinerary ({journey.days.length} Days)
          </button>
          <button
            onClick={() => setActiveTab('details')}
            className={`py-3 px-4 font-medium tracking-wider uppercase border-b-2 transition-colors ${
              activeTab === 'details'
                ? 'border-[#c5a880] text-[#c5a880]'
                : 'border-transparent text-[#8e8a80] hover:text-[#FAF8F5]'
            }`}
          >
            Highlights & Inclusions
          </button>
          <button
            onClick={() => setActiveTab('accommodations')}
            className={`py-3 px-4 font-medium tracking-wider uppercase border-b-2 transition-colors ${
              activeTab === 'accommodations'
                ? 'border-[#c5a880] text-[#c5a880]'
                : 'border-transparent text-[#8e8a80] hover:text-[#FAF8F5]'
            }`}
          >
            Lodges & Private Camps
          </button>
        </div>

        {/* Scrollable Body */}
        <div className="p-6 overflow-y-auto space-y-6 text-sm text-[#ded7c8]">
          
          {/* TAB 1: Day by Day */}
          {activeTab === 'itinerary' && (
            <div className="space-y-6">
              <p className="text-xs text-[#a8a396] leading-relaxed border-l-2 border-[#c5a880] pl-4 py-1">
                {journey.overview}
              </p>

              <div className="space-y-4 relative before:absolute before:left-3 before:top-2 before:bottom-2 before:w-[1px] before:bg-[#2e2a22]">
                {journey.days.map((d) => (
                  <div key={d.day} className="relative pl-9 space-y-1.5">
                    {/* Circle marker */}
                    <div className="absolute left-1.5 top-1 -translate-x-1/2 w-3.5 h-3.5 rounded-full bg-[#1e1c18] border border-[#c5a880] flex items-center justify-center text-[8px] font-mono text-[#c5a880]">
                      {d.day}
                    </div>

                    <div className="flex flex-wrap items-baseline gap-2">
                      <span className="font-serif text-base text-[#FAF8F5] font-medium">
                        Day {d.day}: {d.title}
                      </span>
                      <span className="text-xs text-[#8e8a80]">· {d.location}</span>
                    </div>

                    <p className="text-xs text-[#a8a396] leading-relaxed">
                      {d.description}
                    </p>

                    <div className="pt-1 flex flex-wrap gap-x-4 gap-y-1 text-[11px] text-[#c5a880]">
                      <div>
                        <span className="text-[#8e8a80]">Exclusive Stay: </span>
                        {d.stay}
                      </div>
                      <div>
                        <span className="text-[#8e8a80]">Curated Moment: </span>
                        {d.activityHighlight}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* TAB 2: Highlights & Inclusions */}
          {activeTab === 'details' && (
            <div className="space-y-6">
              <div>
                <h4 className="text-xs uppercase tracking-[0.2em] text-[#c5a880] font-medium mb-3">
                  Signature Highlights
                </h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  {journey.highlights.map((h, i) => (
                    <div key={i} className="p-3 bg-[#161411] border border-[#24221d] flex items-start gap-2.5">
                      <Compass className="w-4 h-4 text-[#c5a880] shrink-0 mt-0.5" />
                      <span className="text-xs text-[#ded7c8] leading-relaxed">{h}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <h4 className="text-xs uppercase tracking-[0.2em] text-[#c5a880] font-medium mb-3">
                  What Is Included
                </h4>
                <div className="bg-[#14120f] border border-[#24221d] p-4 space-y-2.5">
                  {journey.inclusions.map((inc, i) => (
                    <div key={i} className="flex items-start gap-2.5 text-xs text-[#a8a396]">
                      <Check className="w-3.5 h-3.5 text-[#c5a880] shrink-0 mt-0.5" />
                      <span>{inc}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* TAB 3: Accommodations */}
          {activeTab === 'accommodations' && (
            <div className="space-y-4">
              <p className="text-xs text-[#a8a396]">
                Safari LAX partners only with independently operated, boutique eco-camps and private homes that reflect our unhurried ethos and conservation commitments.
              </p>
              <div className="space-y-3">
                {journey.accommodations.map((acc, i) => (
                  <div key={i} className="p-4 bg-[#161411] border border-[#24221d] flex items-center justify-between">
                    <div>
                      <div className="font-serif text-sm text-[#FAF8F5]">{acc}</div>
                      <div className="text-[11px] text-[#8e8a80]">Private ensuite canvas suites or exclusive villa use</div>
                    </div>
                    <span className="text-xs text-[#c5a880] font-serif italic">Bespoke luxury</span>
                  </div>
                ))}
              </div>
            </div>
          )}

        </div>

        {/* Modal Footer / Action */}
        <div className="p-4 sm:p-5 border-t border-[#24221d] bg-[#0e0d0b] flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="text-xs text-[#8e8a80] text-center sm:text-left">
            <span>Every journey is tailor-made to your dates, rhythm & preferences.</span>
          </div>

          <div className="flex items-center gap-3 w-full sm:w-auto">
            <button
              onClick={onClose}
              className="w-1/2 sm:w-auto px-4 py-2.5 border border-[#2e2a22] text-xs uppercase tracking-wider text-[#8e8a80] hover:text-[#FAF8F5]"
            >
              Close
            </button>
            <button
              onClick={() => {
                onClose();
                onEnquireJourney(journey);
              }}
              className="w-1/2 sm:w-auto px-5 py-2.5 bg-[#c5a880] text-[#0e0d0b] text-xs uppercase tracking-[0.18em] font-medium hover:bg-[#d4b896] transition-colors flex items-center justify-center gap-2"
            >
              <span>Tailor This Journey</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
