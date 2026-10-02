import React, { useState } from 'react';
import { PageId, Journey } from '../types';
import { BRAND, BRAND_VALUES } from '../data/brand';
import { JOURNEYS } from '../data/journeys';
import { TESTIMONIALS, PRESS_ACCOLADES } from '../data/testimonials';
import { ArrowRight, Compass, Clock, MapPin, Sparkles, Shield, Plane, ArrowUpRight } from 'lucide-react';

import { heroImg, campImg, leopardImg, diningImg } from '../data/images';

interface HomeViewProps {
  setActivePage: (page: PageId) => void;
  onOpenJourney: (journey: Journey) => void;
  openProposal: () => void;
}

export const HomeView: React.FC<HomeViewProps> = ({
  setActivePage,
  onOpenJourney,
  openProposal
}) => {
  const [activeCycleTab, setActiveCycleTab] = useState<'dawn' | 'midday' | 'sundowner' | 'night'>('dawn');

  const cycleDetails = {
    dawn: {
      time: "06:00 — 10:30",
      title: "The First Light of the Savannah",
      desc: "Awaken to steaming French press coffee on your canvas veranda as mist curls off the Mara River. Set out in your custom open-sided Land Cruiser into undisturbed conservancy lands just as apex predators return from their night hunt.",
      highlight: "Private silver-service bush breakfast in the wild shade of an acacia tree",
      image: diningImg
    },
    midday: {
      time: "12:00 — 15:30",
      title: "The Unhurried Midday Repose",
      desc: "While the midday heat slows the plains, retreat to your private plunge pool or deep canvas armchairs. Read from the camp's botanical library, observe bathing elephants at the lodge waterhole, or indulge in an in-tent aromatherapy massage.",
      highlight: "Chilled crisp wines, fresh organic salads, and total seclusion",
      image: campImg
    },
    sundowner: {
      time: "17:30 — 19:30",
      title: "The Sacred African Sundowner",
      desc: "As the sun blazes amber over the Great Rift escarpment, pull up to a secluded ridge. Camp staff arrange a silver campaign bar with artisanal gin, chilled champagne, and warm canapés as the sky turns lilac and gold.",
      highlight: "Unmatched silence overlooking 100 miles of open African wilderness",
      image: heroImg
    },
    night: {
      time: "20:00 — Late",
      title: "Starlight & The Crackling Boma",
      desc: "Gather around the sunken campfire (boma) with your private naturalist guide. Savor a four-course dinner paired with fine African estate wines, accompanied by the distant, haunting roar of territorial lions.",
      highlight: "Infrared night game drives tracking leopards and nocturnal wonders",
      image: leopardImg
    }
  };

  return (
    <div className="space-y-0">
      
      {/* HERO SECTION */}
      <section className="relative min-h-[92vh] flex items-center justify-center overflow-hidden pt-20">
        {/* Background Visual Asset */}
        <div className="absolute inset-0 z-0">
          <img
            src={heroImg}
            alt="Private luxury safari in Kenya Masai Mara savannah"
            className="w-full h-full object-cover object-center scale-105 transition-transform duration-1000 ease-out"
            referrerPolicy="no-referrer"
          />
          {/* Measured Contrast Scrims */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#0e0d0b] via-[#0e0d0b]/50 to-[#0e0d0b]/40" />
          <div className="absolute inset-0 bg-black/25" />
        </div>

        {/* Content Container */}
        <div className="relative z-10 max-w-5xl mx-auto px-6 py-20 text-center space-y-6">
          
          <div className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.3em] text-[#c5a880] font-medium">
            <span>Kenya</span>
            <span aria-hidden="true">·</span>
            <span>East Africa</span>
            <span aria-hidden="true">·</span>
            <span>Private Concessions</span>
          </div>

          <h1 className="font-serif text-4xl sm:text-6xl md:text-7xl lg:text-8xl text-[#FAF8F5] font-normal tracking-tight leading-[1.08] text-balance">
            Private Africa, <br className="hidden sm:inline" />
            <span className="italic font-light text-[#c5a880]">Unhurried.</span>
          </h1>

          <p className="max-w-2xl mx-auto text-base sm:text-lg text-[#ded7c8] font-light leading-relaxed">
            Specialising in private, tailor-made journeys in Kenya and across Africa. We curate singular wilderness encounters where time slows, crowds vanish, and Africa reveals her true, intimate soul.
          </p>

          <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
            <button
              onClick={() => setActivePage('journeys')}
              className="w-full sm:w-auto px-8 py-3.5 bg-[#c5a880] text-[#0e0d0b] text-xs uppercase tracking-[0.22em] font-medium hover:bg-[#d4b896] transition-colors flex items-center justify-center gap-2"
            >
              <span>Explore Curated Journeys</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>

            <button
              onClick={() => setActivePage('contact')}
              className="w-full sm:w-auto px-8 py-3.5 border border-[#c5a880]/50 text-[#FAF8F5] text-xs uppercase tracking-[0.22em] font-medium hover:bg-[#FAF8F5]/10 hover:border-[#c5a880] transition-colors"
            >
              Begin Private Enquiry
            </button>
          </div>

          {/* Quick Subtitle Anchor */}
          <div className="pt-8 text-xs text-[#a8a396] font-mono tracking-wider flex items-center justify-center gap-4">
            <span>Exclusive Concessions</span>
            <span>·</span>
            <span>Direct Bush Charters</span>
            <span>·</span>
            <span>Gold-Certified Guides</span>
          </div>
        </div>
      </section>

      {/* BRAND ETHOS & CARD SEAL SHOWCASE */}
      <section className="bg-[#141311] py-24 border-y border-[#211f1a]">
        <div className="max-w-6xl mx-auto px-6 md:px-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* The Brand Seal (Inspired directly by client identity image) */}
            <div className="lg:col-span-5 flex justify-center">
              <div className="bg-[#f5f2eb] text-[#0e0d0b] p-10 md:p-14 text-center shadow-2xl border border-[#ded7c8] max-w-sm w-full relative">
                <div className="font-serif tracking-[0.38em] text-sm font-medium text-[#3c3933] uppercase">
                  S A F A R I
                </div>
                <div className="w-28 h-[1px] bg-[#3c3933]/30 mx-auto my-4" />
                <div className="font-serif tracking-[0.16em] text-5xl font-normal text-[#0e0d0b] my-3">
                  L A X
                </div>
                <div className="font-sans tracking-[0.26em] text-[10px] uppercase text-[#736f67] mt-4 font-medium">
                  Private Africa, Unhurried.
                </div>
                <div className="mt-6 pt-4 border-t border-[#ded7c8] text-[9px] uppercase tracking-[0.2em] text-[#8e8a80]">
                  Kenya · Continent-Wide Access
                </div>
              </div>
            </div>

            {/* Editorial Manifesto */}
            <div className="lg:col-span-7 space-y-6">
              <div className="text-xs uppercase tracking-[0.25em] text-[#c5a880] font-medium">
                Our Guiding Philosophy
              </div>

              <h2 className="font-serif text-3xl sm:text-4xl text-[#FAF8F5] leading-snug">
                The Luxury of Stillness in an Overstimulated World
              </h2>

              <p className="text-sm text-[#ded7c8] leading-relaxed">
                Safari LAX was founded on an uncompromising principle: that Africa cannot be felt in a rush. True immersion requires remaining seated with a pride of lions for three quiet hours as the light shifts, rather than racing between radio calls alongside twenty other vehicles.
              </p>

              <p className="text-sm text-[#a8a396] leading-relaxed">
                We design bespoke, unhurried journeys anchored in private conservancies and pristine wilderness concessions. With your own dedicated naturalist guide, private 4x4 cruiser, and direct bush charter flights, you experience Africa at its most intimate, sovereign, and serene.
              </p>

              <div className="pt-2">
                <button
                  onClick={() => setActivePage('about')}
                  className="text-xs uppercase tracking-[0.2em] text-[#c5a880] hover:text-[#FAF8F5] flex items-center gap-2 group transition-colors"
                >
                  <span>Discover the Safari LAX Narrative</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* FOUR PILLARS */}
      <section className="bg-[#0e0d0b] py-24">
        <div className="max-w-7xl mx-auto px-6 md:px-10">
          <div className="max-w-2xl mb-16 space-y-3">
            <div className="text-xs uppercase tracking-[0.25em] text-[#c5a880] font-medium">
              The Unhurried Standard
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl text-[#FAF8F5]">
              How We Distinguish Every Safari
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {BRAND_VALUES.map((val) => (
              <div
                key={val.number}
                className="bg-[#141311] border border-[#211f1a] p-8 space-y-4 hover:border-[#c5a880]/50 transition-colors"
              >
                <div className="font-serif text-3xl text-[#c5a880] font-light">
                  {val.number}
                </div>
                <h3 className="font-serif text-xl text-[#FAF8F5]">
                  {val.title}
                </h3>
                <p className="text-xs text-[#8e8a80] leading-relaxed">
                  {val.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FEATURED CURATED JOURNEYS */}
      <section className="bg-[#12110f] py-24 border-t border-[#211f1a]">
        <div className="max-w-7xl mx-auto px-6 md:px-10">
          
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
            <div className="space-y-3">
              <div className="text-xs uppercase tracking-[0.25em] text-[#c5a880] font-medium">
                Tailor-Made Expeditions
              </div>
              <h2 className="font-serif text-3xl sm:text-4xl text-[#FAF8F5]">
                Curated Private Journeys
              </h2>
              <p className="text-xs text-[#8e8a80] max-w-xl">
                Every itinerary serves as a bespoke canvas. Each journey is entirely customized around your dates, pace, and preferred ecosystems.
              </p>
            </div>

            <button
              onClick={() => setActivePage('journeys')}
              className="text-xs uppercase tracking-[0.2em] text-[#c5a880] hover:text-[#FAF8F5] flex items-center gap-2 group transition-colors self-start md:self-end"
            >
              <span>View All 5 Journeys & Builder</span>
              <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>

          {/* Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {JOURNEYS.slice(0, 3).map((j) => (
              <div
                key={j.id}
                className="group bg-[#161411] border border-[#24221d] overflow-hidden flex flex-col hover:border-[#c5a880]/60 transition-all duration-300"
              >
                {/* Image */}
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={j.heroImage}
                    alt={j.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#161411] via-transparent to-transparent" />
                  
                  <div className="absolute top-4 left-4 bg-[#0e0d0b]/80 backdrop-blur-sm px-3 py-1 border border-[#2e2a22] text-[10px] uppercase tracking-wider text-[#c5a880]">
                    {j.country} · {j.duration}
                  </div>
                </div>

                {/* Details */}
                <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                  <div>
                    <h3 className="font-serif text-xl text-[#FAF8F5] group-hover:text-[#c5a880] transition-colors">
                      {j.title}
                    </h3>
                    <p className="text-xs text-[#ded7c8]/80 line-clamp-2 mt-2 leading-relaxed font-light">
                      {j.overview}
                    </p>
                  </div>

                  <div className="pt-4 border-t border-[#22201b] space-y-3">
                    <div className="flex items-center justify-between text-xs">
                      <span className="text-[#8e8a80]">Pacing:</span>
                      <span className="text-[#FAF8F5]">{j.pacing}</span>
                    </div>

                    <div className="flex items-center justify-between text-xs">
                      <span className="text-[#8e8a80]">Indicative rate:</span>
                      <span className="font-mono text-[#c5a880]">{j.indicativePrice.split(' ')[1] || j.indicativePrice}</span>
                    </div>

                    <button
                      onClick={() => onOpenJourney(j)}
                      className="w-full py-2.5 px-4 bg-[#201e19] group-hover:bg-[#c5a880] text-[#FAF8F5] group-hover:text-[#0e0d0b] text-xs uppercase tracking-[0.16em] transition-colors flex items-center justify-center gap-2 mt-2"
                    >
                      <span>Explore Itinerary Dossier</span>
                      <ArrowUpRight className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* THE UNHURRIED SAFARI DAY: INTERACTIVE RHYTHM */}
      <section className="bg-[#0e0d0b] py-24">
        <div className="max-w-6xl mx-auto px-6 md:px-10">
          
          <div className="text-center max-w-2xl mx-auto mb-16 space-y-3">
            <div className="text-xs uppercase tracking-[0.25em] text-[#c5a880] font-medium">
              The Rhythm of the Savannah
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl text-[#FAF8F5]">
              A Day in Private Africa
            </h2>
            <p className="text-xs text-[#8e8a80]">
              Free from artificial timetables and crowded park gates, your days ebb and flow with the natural pulse of wild Kenya.
            </p>
          </div>

          {/* Segmented Time Controls */}
          <div className="flex justify-center mb-10 overflow-x-auto pb-2">
            <div className="p-1 bg-[#161411] border border-[#24221d] inline-flex gap-1 text-xs">
              {(['dawn', 'midday', 'sundowner', 'night'] as const).map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveCycleTab(tab)}
                  className={`px-4 py-2 font-medium tracking-wider uppercase transition-colors whitespace-nowrap ${
                    activeCycleTab === tab
                      ? 'bg-[#c5a880] text-[#0e0d0b]'
                      : 'text-[#8e8a80] hover:text-[#FAF8F5]'
                  }`}
                >
                  {tab === 'dawn' && '01. Dawn Safari'}
                  {tab === 'midday' && '02. Midday Repose'}
                  {tab === 'sundowner' && '03. Golden Sundowner'}
                  {tab === 'night' && '04. Starlit Boma'}
                </button>
              ))}
            </div>
          </div>

          {/* Interactive Card */}
          <div className="bg-[#141311] border border-[#24221d] overflow-hidden">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-0">
              
              <div className="lg:col-span-7 p-8 md:p-12 flex flex-col justify-between space-y-6">
                <div className="space-y-3">
                  <div className="text-xs font-mono text-[#c5a880]">
                    {cycleDetails[activeCycleTab].time}
                  </div>
                  <h3 className="font-serif text-2xl sm:text-3xl text-[#FAF8F5]">
                    {cycleDetails[activeCycleTab].title}
                  </h3>
                  <p className="text-sm text-[#ded7c8] leading-relaxed">
                    {cycleDetails[activeCycleTab].desc}
                  </p>
                </div>

                <div className="p-4 bg-[#1c1a16] border border-[#2a2720] flex items-start gap-3">
                  <Sparkles className="w-4 h-4 text-[#c5a880] shrink-0 mt-0.5" />
                  <div className="text-xs text-[#a8a396]">
                    <span className="text-[#FAF8F5] font-medium block">The Safari LAX Touch:</span>
                    {cycleDetails[activeCycleTab].highlight}
                  </div>
                </div>
              </div>

              <div className="lg:col-span-5 h-72 lg:h-auto min-h-[300px] relative">
                <img
                  src={cycleDetails[activeCycleTab].image}
                  alt={cycleDetails[activeCycleTab].title}
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-[#141311]/80 via-transparent to-transparent hidden lg:block" />
              </div>

            </div>
          </div>

        </div>
      </section>

      {/* TESTIMONIALS & PRESS EVIDENCE */}
      <section className="bg-[#141311] py-24 border-t border-[#211f1a]">
        <div className="max-w-6xl mx-auto px-6 md:px-10">
          
          <div className="text-center max-w-xl mx-auto mb-16 space-y-3">
            <div className="text-xs uppercase tracking-[0.25em] text-[#c5a880] font-medium">
              Guest Reflections
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl text-[#FAF8F5]">
              Attributable Words of Appreciation
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {TESTIMONIALS.map((t) => (
              <div
                key={t.id}
                className="bg-[#181613] border border-[#262420] p-8 flex flex-col justify-between space-y-6"
              >
                <p className="font-serif italic text-sm text-[#ded7c8] leading-relaxed">
                  “{t.quote}”
                </p>

                <div className="pt-4 border-t border-[#262420] space-y-1">
                  <div className="font-serif text-base text-[#FAF8F5]">{t.guestName}</div>
                  <div className="text-[11px] text-[#c5a880]">{t.guestLocation}</div>
                  <div className="text-[10px] text-[#8e8a80]">{t.journeyTaken} · {t.year}</div>
                </div>
              </div>
            ))}
          </div>

          {/* Press Mentions */}
          <div className="border-t border-[#24221d] pt-12">
            <div className="text-center text-[10px] uppercase tracking-[0.25em] text-[#8e8a80] mb-8 font-medium">
              Noted in Fine Travel Literature
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
              {PRESS_ACCOLADES.map((p, idx) => (
                <div key={idx} className="space-y-1">
                  <div className="font-serif text-lg text-[#FAF8F5]">{p.publication}</div>
                  <div className="text-xs text-[#a8a396] italic">“{p.accolade}”</div>
                </div>
              ))}
            </div>
          </div>

        </div>
      </section>

      {/* FINAL INVITATION CTA */}
      <section className="bg-[#0e0d0b] py-24 border-t border-[#1f1d19]">
        <div className="max-w-4xl mx-auto px-6 text-center space-y-6">
          <div className="text-xs uppercase tracking-[0.25em] text-[#c5a880] font-medium">
            Begin Your Tailored Journey
          </div>
          <h2 className="font-serif text-3xl sm:text-5xl text-[#FAF8F5] font-light">
            Your Private Africa Awaits
          </h2>
          <p className="text-sm sm:text-base text-[#a8a396] max-w-xl mx-auto leading-relaxed">
            Allow us to design an unhurried, private itinerary crafted solely for you, your family, or your companions. Contact our Nairobi private safari desk.
          </p>

          <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
            <button
              onClick={() => setActivePage('contact')}
              className="w-full sm:w-auto px-8 py-3.5 bg-[#c5a880] text-[#0e0d0b] text-xs uppercase tracking-[0.22em] font-medium hover:bg-[#d4b896] transition-colors"
            >
              Submit Private Enquiry
            </button>
            <button
              onClick={openProposal}
              className="w-full sm:w-auto px-8 py-3.5 border border-[#2e2a22] text-[#ded7c8] text-xs uppercase tracking-[0.22em] hover:text-[#FAF8F5] hover:border-[#c5a880] transition-colors"
            >
              Review Handover & DNS Guide
            </button>
          </div>
        </div>
      </section>

    </div>
  );
};
