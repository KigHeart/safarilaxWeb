import React, { useState } from 'react';
import { PageId, Journey } from '../types';
import { BRAND, BRAND_VALUES } from '../data/brand';
import { JOURNEYS } from '../data/journeys';
import { TESTIMONIALS, PRESS_ACCOLADES } from '../data/testimonials';
import { ArrowRight, Compass, Clock, MapPin, Sparkles, Shield, Plane, ArrowUpRight, Calendar, Users, Eye, Check } from 'lucide-react';
import { heroImg, campImg, leopardImg, diningImg, planeImg } from '../data/images';

interface HomeViewProps {
  setActivePage: (page: PageId) => void;
  onOpenJourney: (journey: Journey) => void;
}

export const HomeView: React.FC<HomeViewProps> = ({
  setActivePage,
  onOpenJourney
}) => {
  const [activeCycleTab, setActiveCycleTab] = useState<'dawn' | 'midday' | 'sundowner' | 'night'>('dawn');
  const [activeSeason, setActiveSeason] = useState<'river' | 'calving' | 'green' | 'holiday'>('river');

  const cycleDetails = {
    dawn: {
      time: "06:00 — 10:30",
      title: "The First Light of the Savannah",
      desc: "Awaken to steaming Kenyan French press coffee delivered to your canvas veranda as dawn mist lifts off the river. Embark in your private open-sided Land Cruiser before other camps stir, encountering apex predators concluding their night patrols.",
      highlight: "Private silver-service bush breakfast laid beneath an ancient flat-top acacia",
      image: diningImg
    },
    midday: {
      time: "12:00 — 15:30",
      title: "The Unhurried Midday Repose",
      desc: "While the equatorial heat quietens the open plains, retreat to your secluded plunge pool or shaded canvas daybed. Delve into the camp's botanical library, observe family herds of elephants cooling in the river below, or indulge in an open-air aromatherapy massage.",
      highlight: "Chilled crisp estate wines, fresh organic garden lunch, and total silence",
      image: campImg
    },
    sundowner: {
      time: "17:30 — 19:30",
      title: "The Sacred African Sundowner",
      desc: "As the sun blazes molten amber along the Great Rift escarpment, your guide ascends to a private panoramic ridge. Camp staff reveal a mobile silver bar with artisanal botanicals, chilled champagne, and warm savannah canapés as the sky shifts to lilac.",
      highlight: "Unbroken 360-degree silence across seventy miles of pristine wilderness",
      image: heroImg
    },
    night: {
      time: "20:00 — Late",
      title: "Starlight & The Crackling Boma",
      desc: "Converse around the sunken boma campfire with your personal naturalist guide. Savor a four-course dinner beneath a canopy of southern hemisphere constellations, punctuated only by the distant, resonant call of territorial lions.",
      highlight: "Infrared night tracking seeking leopards, servals, and nocturnal bush babies",
      image: leopardImg
    }
  };

  const seasonData = {
    river: {
      months: "July — October",
      title: "The Great Mara River Crossings",
      status: "Peak Migration & Apex Predator Action",
      desc: "Over two million wildebeest and zebra converge in Mara North and the Greater Mara ecosystem. Dramatic river crossings, giant Nile crocodiles, and relentless lion and cheetah hunts across open plains.",
      weather: "Dry, clear golden light, cool mornings (12°C) and warm sunny afternoons (26°C)",
      lodges: "Mara Plains Camp, Serian The Original, Cottar's 1920s Safari Camp"
    },
    calving: {
      months: "January — March",
      title: "The Great Calving Season",
      status: "8,000 Newborns Daily & Fast Hunts",
      desc: "The southern Serengeti and Kenya-Tanzania borderlands burst into life as half a million calves are born within weeks. Unprecedented cheetah hunting chases and intimate nursery herds.",
      weather: "Warm, dry, lush grasses, brilliant visibility for wildlife photography",
      lodges: "Ndutu Safari Lodge, Angama Mara, Ol Seki Hemingways"
    },
    green: {
      months: "April — June",
      title: "The Emerald Savannah Solitude",
      status: "Exclusive Solitude & Emerald Landscapes",
      desc: "Known as the connoisseur's safari. The plains turn a vibrant, lush green under dramatic afternoon cloudscapes. Maximum privacy with near-zero other vehicles, vibrant migratory birds, and dramatic discounted rates.",
      weather: "Warm tropical showers usually in late afternoon, crisp fresh air",
      lodges: "Governors' Il Moran Camp, Lewa Wilderness, Mara Expedition Camp"
    },
    holiday: {
      months: "November — December",
      title: "The Short Rains & Golden Sun",
      status: "Migratory Birds & Baby Wildlife",
      desc: "Gentle afternoon showers settle the dust, leaving the air crystal clear. Resident prides roam thriving conservancies with newly born cubs, and northern migratory raptors arrive in thousands.",
      weather: "Warm, pleasant, stunning dramatic sunsets and verdant plains",
      lodges: "Segera Retreat, Sirikoi Lodge, Mara Bush Tops"
    }
  };

  return (
    <div className="bg-[#faf8f5] text-[#1c1a17]">
      
      {/* 1. CINEMATIC HERO SECTION */}
      <section className="relative min-h-[94vh] flex items-center justify-center overflow-hidden">
        {/* Full-Bleed Photography Asset */}
        <div className="absolute inset-0 z-0">
          <img
            src={heroImg}
            alt="Private luxury safari overlooking the vast Masai Mara savannah"
            className="w-full h-full object-cover object-center scale-102 transition-transform duration-1000 ease-out"
            referrerPolicy="no-referrer"
          />
          {/* Measured Contrast Scrims */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/40 to-black/50" />
        </div>

        {/* Hero Narrative Container */}
        <div className="relative z-10 max-w-5xl mx-auto px-6 py-28 text-center space-y-7">
          
          <div className="inline-flex items-center gap-2.5 text-xs uppercase tracking-[0.35em] text-[#dfc8a2] font-medium">
            <span>Kenya</span>
            <span aria-hidden="true">·</span>
            <span>East Africa</span>
            <span aria-hidden="true">·</span>
            <span>Private Concessions</span>
          </div>

          <h1 className="font-serif text-4xl sm:text-6xl md:text-7xl lg:text-8xl text-white font-normal tracking-tight leading-[1.08] text-balance">
            Private Africa, <br className="hidden sm:inline" />
            <span className="italic font-light text-[#dfc8a2]">Unhurried.</span>
          </h1>

          <p className="max-w-2xl mx-auto text-base sm:text-lg text-[#f3efe6] font-light leading-relaxed">
            Bespoke, sovereign safari expeditions across Kenya’s most secluded wilderness sanctuaries. Tailor-made with private charter bush aviation, dedicated Silver & Gold-rated naturalist guides, and intimate tented camps.
          </p>

          <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
            <button
              onClick={() => setActivePage('journeys')}
              className="w-full sm:w-auto px-9 py-4 bg-[#c5a880] text-[#0f0e0c] text-xs uppercase tracking-[0.24em] font-medium hover:bg-[#dfc8a2] transition-colors flex items-center justify-center gap-2.5 cursor-pointer shadow-lg"
            >
              <span>Explore Curated Journeys</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>

            <button
              onClick={() => setActivePage('contact')}
              className="w-full sm:w-auto px-9 py-4 border border-[#dfc8a2]/70 text-white text-xs uppercase tracking-[0.24em] font-medium hover:bg-white/10 hover:border-[#dfc8a2] transition-colors cursor-pointer"
            >
              Consult Safari Specialist
            </button>
          </div>

          {/* Quiet Trust Anchors */}
          <div className="pt-8 text-xs text-[#dfc8a2]/80 tracking-widest flex flex-wrap items-center justify-center gap-x-5 gap-y-2 uppercase">
            <span>Mara North Conservancy</span>
            <span>·</span>
            <span>Lewa Wildlife Sanctuary</span>
            <span>·</span>
            <span>Direct Bush Charters</span>
            <span>·</span>
            <span>Gold-Certified Guides</span>
          </div>
        </div>
      </section>

      {/* 2. THE BRAND SEAL & PHILOSOPHY */}
      <section className="py-24 md:py-32 bg-[#faf8f5] border-b border-[#e8e2d5]">
        <div className="max-w-6xl mx-auto px-6 md:px-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-14 items-center">
            
            {/* The Brand Card Seal */}
            <div className="lg:col-span-5 flex justify-center">
              <div className="bg-[#f5f0e6] text-[#1c1a17] p-10 md:p-14 text-center shadow-xl border border-[#ded7c8] max-w-sm w-full relative">
                <div className="font-serif tracking-[0.4em] text-xs font-semibold text-[#5c564c] uppercase">
                  S A F A R I
                </div>
                <div className="w-24 h-[1px] bg-[#997449]/40 mx-auto my-4" />
                <div className="font-serif tracking-[0.18em] text-5xl font-normal text-[#1c1a17] my-3">
                  L A X
                </div>
                <div className="font-sans tracking-[0.26em] text-[10px] uppercase text-[#736f67] mt-4 font-semibold">
                  Private Africa, Unhurried.
                </div>
                <div className="mt-8 pt-4 border-t border-[#ded7c8] text-[9px] uppercase tracking-[0.22em] text-[#8e8a80]">
                  Kenya · Continent-Wide Access
                </div>
              </div>
            </div>

            {/* Editorial Manifesto */}
            <div className="lg:col-span-7 space-y-6">
              <div className="text-xs uppercase tracking-[0.25em] text-[#997449] font-semibold">
                Our Guiding Philosophy
              </div>

              <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-[#1c1a17] leading-tight">
                The Luxury of Stillness in an Overstimulated World
              </h2>

              <p className="text-base text-[#4a453d] leading-relaxed">
                Safari LAX was established on a single uncompromising truth: Africa cannot be experienced in a rush. True immersion requires remaining seated with a pride of lions for three unhurried hours as the golden light softens across the plains, rather than racing between crackling radio calls alongside twenty other vehicles.
              </p>

              <p className="text-base text-[#5c564c] leading-relaxed">
                We craft bespoke private journeys anchored exclusively in community conservancies and secluded wildlife sanctuaries. With your own private Land Cruiser, dedicated master naturalist guide, and direct bush charter aircraft, you discover Africa at its most sovereign, sovereign, and serene.
              </p>

              {/* 3 Metric Highlights */}
              <div className="pt-4 grid grid-cols-3 gap-6 border-t border-[#e8e2d5]">
                <div>
                  <div className="font-serif text-3xl text-[#1c1a17]">100%</div>
                  <div className="text-xs text-[#736f67] uppercase tracking-wider mt-1">Private Vehicles</div>
                </div>
                <div>
                  <div className="font-serif text-3xl text-[#1c1a17]">74k+</div>
                  <div className="text-xs text-[#736f67] uppercase tracking-wider mt-1">Acres Seclusion</div>
                </div>
                <div>
                  <div className="font-serif text-3xl text-[#1c1a17]">Direct</div>
                  <div className="text-xs text-[#736f67] uppercase tracking-wider mt-1">Bush Aviation</div>
                </div>
              </div>

              <div className="pt-2">
                <button
                  onClick={() => setActivePage('about')}
                  className="text-xs uppercase tracking-[0.22em] text-[#997449] hover:text-[#1c1a17] font-semibold flex items-center gap-2 group transition-colors cursor-pointer"
                >
                  <span>Read The Full Safari LAX Story</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 3. FOUR PILLARS OF LUXURY SAFARI */}
      <section className="py-24 bg-[#f5f0e6]/60 border-b border-[#e8e2d5]">
        <div className="max-w-7xl mx-auto px-6 md:px-10">
          <div className="max-w-2xl mb-16 space-y-3">
            <div className="text-xs uppercase tracking-[0.25em] text-[#997449] font-semibold">
              The Unhurried Standard
            </div>
            <h3 className="font-serif text-3xl sm:text-4xl text-[#1c1a17]">
              Four Tenets That Distinguish Our Expeditions
            </h3>
            <p className="text-sm text-[#5c564c] leading-relaxed">
              Every detail is calibrated to remove friction, eliminate crowds, and return you to the natural cadence of the wild.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {BRAND_VALUES.map((pillar) => (
              <div
                key={pillar.id}
                className="bg-[#faf8f5] p-8 border border-[#e8e2d5] space-y-4 hover:border-[#c5a880] transition-colors"
              >
                <div className="w-10 h-10 bg-[#f5f0e6] flex items-center justify-center border border-[#e8e2d5]">
                  <Compass className="w-4 h-4 text-[#997449]" />
                </div>
                <h4 className="font-serif text-xl text-[#1c1a17]">
                  {pillar.title}
                </h4>
                <p className="text-xs text-[#5c564c] leading-relaxed">
                  {pillar.description}
                </p>
                <div className="pt-2 text-[11px] text-[#997449] font-serif italic border-t border-[#f0eae0]">
                  {pillar.highlight}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. CURATED JOURNEYS SHOWCASE */}
      <section className="py-24 md:py-32 bg-[#faf8f5] border-b border-[#e8e2d5]">
        <div className="max-w-7xl mx-auto px-6 md:px-10">
          
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
            <div className="space-y-3 max-w-2xl">
              <div className="text-xs uppercase tracking-[0.25em] text-[#997449] font-semibold">
                Private Itineraries
              </div>
              <h3 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-[#1c1a17]">
                Masterpiece Journeys Across Kenya
              </h3>
              <p className="text-sm text-[#5c564c] leading-relaxed">
                Each expedition is custom tailored to your exact dates, travel party, and aviation requirements. Here are four foundational routes.
              </p>
            </div>

            <button
              onClick={() => setActivePage('journeys')}
              className="text-xs uppercase tracking-[0.22em] text-[#997449] hover:text-[#1c1a17] font-semibold flex items-center gap-2 group transition-colors cursor-pointer self-start md:self-auto"
            >
              <span>View All 6 Journeys</span>
              <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
            {JOURNEYS.slice(0, 4).map((journey) => (
              <div
                key={journey.id}
                className="bg-[#f5f0e6]/40 border border-[#e8e2d5] overflow-hidden group hover:border-[#c5a880] transition-all flex flex-col"
              >
                {/* Visual Asset Container */}
                <div className="relative aspect-16/10 overflow-hidden bg-[#e8e2d5]">
                  <img
                    src={journey.heroImage}
                    alt={journey.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-transparent to-transparent" />
                  
                  {/* Overlay Metadata */}
                  <div className="absolute bottom-4 left-4 right-4 flex items-end justify-between text-white">
                    <div>
                      <div className="text-[10px] uppercase tracking-[0.25em] text-[#dfc8a2]">
                        {journey.region}
                      </div>
                      <div className="font-serif text-lg text-white">
                        {journey.duration}
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="text-[10px] uppercase tracking-wider text-white/80">Investment</div>
                      <div className="text-xs font-serif text-[#dfc8a2]">{journey.indicativePrice}</div>
                    </div>
                  </div>
                </div>

                {/* Card Content */}
                <div className="p-8 space-y-4 flex-1 flex flex-col justify-between">
                  <div className="space-y-3">
                    <h4 className="font-serif text-2xl text-[#1c1a17] leading-snug group-hover:text-[#997449] transition-colors">
                      {journey.title}
                    </h4>
                    <p className="text-xs text-[#5c564c] line-clamp-3 leading-relaxed">
                      {journey.overview}
                    </p>
                  </div>

                  <div className="pt-4 border-t border-[#e8e2d5] flex items-center justify-between">
                    <button
                      onClick={() => onOpenJourney(journey)}
                      className="text-xs uppercase tracking-[0.2em] text-[#997449] hover:text-[#1c1a17] font-semibold flex items-center gap-1.5 cursor-pointer"
                    >
                      <span>Explore Expedition</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </button>

                    <button
                      onClick={() => setActivePage('contact')}
                      className="text-xs uppercase tracking-[0.18em] py-2 px-4 bg-[#1c1a17] text-[#faf8f5] hover:bg-[#997449] transition-colors cursor-pointer"
                    >
                      Enquire
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* 5. INTERACTIVE WILDLIFE MIGRATION RADAR */}
      <section className="py-24 bg-[#1c1a17] text-[#faf8f5]">
        <div className="max-w-6xl mx-auto px-6 md:px-10">
          
          <div className="text-center max-w-2xl mx-auto mb-14 space-y-3">
            <div className="text-xs uppercase tracking-[0.3em] text-[#dfc8a2] font-semibold">
              Wildlife Intelligence
            </div>
            <h3 className="font-serif text-3xl sm:text-4xl text-white">
              The Seasonal Migration & Sighting Radar
            </h3>
            <p className="text-sm text-[#ded7c8] leading-relaxed">
              Wildlife movements across Kenya are governed by rains, river depths, and migratory instinct. Select a window to discover optimal safari timing.
            </p>
          </div>

          {/* Interactive Season Tabs */}
          <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
            {[
              { id: 'river', label: 'Jul – Oct: River Crossings' },
              { id: 'calving', label: 'Jan – Mar: Calving Season' },
              { id: 'green', label: 'Apr – Jun: Emerald Solitude' },
              { id: 'holiday', label: 'Nov – Dec: Short Rains & Cubs' },
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveSeason(tab.id as any)}
                className={`px-5 py-3 text-xs uppercase tracking-[0.18em] font-medium transition-all cursor-pointer ${
                  activeSeason === tab.id
                    ? 'bg-[#c5a880] text-[#0f0e0c]'
                    : 'bg-[#262420] text-[#ded7c8] hover:bg-[#33302b]'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>

          {/* Season Details Box */}
          <div className="bg-[#262420] border border-[#3c3933] p-8 md:p-12 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-7 space-y-4">
              <div className="inline-block px-3 py-1 bg-[#c5a880]/15 text-[#dfc8a2] text-xs uppercase tracking-wider font-semibold">
                {seasonData[activeSeason].status}
              </div>
              <h4 className="font-serif text-2xl sm:text-3xl text-white">
                {seasonData[activeSeason].title}
              </h4>
              <p className="text-sm text-[#ded7c8] leading-relaxed">
                {seasonData[activeSeason].desc}
              </p>
              
              <div className="pt-2 space-y-2 text-xs text-[#a8a396] border-t border-[#3c3933]">
                <div>
                  <strong className="text-[#dfc8a2]">Savannah Climate: </strong>
                  <span>{seasonData[activeSeason].weather}</span>
                </div>
                <div>
                  <strong className="text-[#dfc8a2]">Recommended Private Sanctuaries: </strong>
                  <span>{seasonData[activeSeason].lodges}</span>
                </div>
              </div>
            </div>

            <div className="lg:col-span-5 flex flex-col justify-center items-center p-6 bg-[#1c1a17] border border-[#3c3933] text-center space-y-4">
              <div className="w-12 h-12 bg-[#262420] flex items-center justify-center border border-[#3c3933]">
                <Calendar className="w-5 h-5 text-[#dfc8a2]" />
              </div>
              <div className="font-serif text-xl text-white">
                Targeting This Window?
              </div>
              <p className="text-xs text-[#ded7c8]">
                Exclusive tented suites fill 9 to 12 months in advance. Our Nairobi team holds priority access with master concessionaires.
              </p>
              <button
                onClick={() => setActivePage('contact')}
                className="w-full py-3 bg-[#c5a880] text-[#0f0e0c] text-xs uppercase tracking-[0.2em] font-medium hover:bg-[#dfc8a2] transition-colors cursor-pointer"
              >
                Inquire For {seasonData[activeSeason].months}
              </button>
            </div>
          </div>

        </div>
      </section>

      {/* 6. THE UNHURRIED DAY (4 RHYTHMS) */}
      <section className="py-24 md:py-32 bg-[#faf8f5] border-b border-[#e8e2d5]">
        <div className="max-w-6xl mx-auto px-6 md:px-10">
          
          <div className="text-center max-w-2xl mx-auto mb-14 space-y-3">
            <div className="text-xs uppercase tracking-[0.3em] text-[#997449] font-semibold">
              The Daily Cadence
            </div>
            <h3 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-[#1c1a17]">
              The Four Rhythms of Bush Life
            </h3>
            <p className="text-sm text-[#5c564c] leading-relaxed">
              When there are no schedules to keep, the rhythm of your day aligns with the movements of Africa’s wildlife.
            </p>
          </div>

          {/* Rhythms Tabs */}
          <div className="flex justify-center border-b border-[#e8e2d5] mb-12">
            {(['dawn', 'midday', 'sundowner', 'night'] as const).map((cycle) => (
              <button
                key={cycle}
                onClick={() => setActiveCycleTab(cycle)}
                className={`pb-4 px-4 sm:px-8 text-xs uppercase tracking-[0.2em] font-medium relative transition-colors cursor-pointer capitalize ${
                  activeCycleTab === cycle
                    ? 'text-[#997449] font-semibold'
                    : 'text-[#8e8a80] hover:text-[#1c1a17]'
                }`}
              >
                {cycle}
                {activeCycleTab === cycle && (
                  <span className="absolute bottom-0 left-0 w-full h-[2px] bg-[#997449]" />
                )}
              </button>
            ))}
          </div>

          {/* Cycle Content Showcase */}
          <div className="bg-[#f5f0e6]/40 border border-[#e8e2d5] p-8 md:p-12 grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            <div className="lg:col-span-6 space-y-5">
              <div className="text-xs uppercase tracking-[0.22em] text-[#997449] font-semibold">
                {cycleDetails[activeCycleTab].time}
              </div>
              <h4 className="font-serif text-3xl text-[#1c1a17]">
                {cycleDetails[activeCycleTab].title}
              </h4>
              <p className="text-sm text-[#4a453d] leading-relaxed">
                {cycleDetails[activeCycleTab].desc}
              </p>
              <div className="pt-2 border-t border-[#e8e2d5]">
                <div className="text-xs text-[#5c564c]">
                  <strong className="text-[#1c1a17]">Highlight: </strong>
                  {cycleDetails[activeCycleTab].highlight}
                </div>
              </div>
            </div>

            <div className="lg:col-span-6 aspect-4/3 overflow-hidden bg-[#e8e2d5] shadow-md">
              <img
                src={cycleDetails[activeCycleTab].image}
                alt={cycleDetails[activeCycleTab].title}
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
          </div>

        </div>
      </section>

      {/* 7. PRIVATE AVIATION & CONSERVANCY ADVANTAGE */}
      <section className="py-24 bg-[#f5f0e6]/80 border-b border-[#e8e2d5]">
        <div className="max-w-7xl mx-auto px-6 md:px-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            <div className="lg:col-span-6 space-y-6">
              <div className="text-xs uppercase tracking-[0.25em] text-[#997449] font-semibold">
                Direct Bush Aviation
              </div>
              <h3 className="font-serif text-3xl sm:text-4xl text-[#1c1a17] leading-tight">
                Touching Down on Private Dirt Strips Minutes from the Game
              </h3>
              <p className="text-sm text-[#4a453d] leading-relaxed">
                Commercial safari itineraries waste full days in minibus highway traffic. Safari LAX guests bypass every road queue. Board your private Cessna Grand Caravan or scenic Airbus H125 helicopter at Nairobi Wilson Airport and touch down directly in your private concession within 45 minutes.
              </p>

              <div className="space-y-3 pt-2">
                {[
                  "Private tarmac VIP escort and fast-track clearance in Nairobi",
                  "Direct airstrip arrival straight into waiting open-sided Land Cruisers",
                  "Helicopter access to Mount Kenya peaks and dramatic Great Rift soda lakes",
                  "Strict non-disclosure confidentiality for high-profile principals"
                ].map((item, idx) => (
                  <div key={idx} className="flex items-start gap-3 text-xs text-[#5c564c]">
                    <div className="w-4 h-4 bg-[#c5a880]/20 rounded-full flex items-center justify-center shrink-0 mt-0.5">
                      <Check className="w-2.5 h-2.5 text-[#997449]" />
                    </div>
                    <span>{item}</span>
                  </div>
                ))}
              </div>

              <div className="pt-4">
                <button
                  onClick={() => setActivePage('services')}
                  className="text-xs uppercase tracking-[0.22em] text-[#997449] hover:text-[#1c1a17] font-semibold flex items-center gap-2 group transition-colors cursor-pointer"
                >
                  <span>Explore Aviation & Expedition Concierge</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </div>

            <div className="lg:col-span-6 aspect-16/10 overflow-hidden bg-[#e8e2d5] shadow-xl">
              <img
                src={planeImg}
                alt="Private safari bush aircraft on Kenya savannah airstrip"
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </div>

          </div>
        </div>
      </section>

      {/* 8. TESTIMONIALS & PRESS ACCOLADES */}
      <section className="py-24 bg-[#faf8f5] border-b border-[#e8e2d5]">
        <div className="max-w-6xl mx-auto px-6 md:px-10">
          
          <div className="text-center max-w-2xl mx-auto mb-16 space-y-3">
            <div className="text-xs uppercase tracking-[0.3em] text-[#997449] font-semibold">
              Guest Reflections
            </div>
            <h3 className="font-serif text-3xl sm:text-4xl text-[#1c1a17]">
              Voices from the African Bush
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {TESTIMONIALS.map((t, idx) => (
              <div
                key={idx}
                className="bg-[#f5f0e6]/40 p-8 border border-[#e8e2d5] space-y-5 flex flex-col justify-between"
              >
                <p className="font-serif italic text-base text-[#2e2b26] leading-relaxed">
                  “{t.quote}”
                </p>
                <div className="border-t border-[#e8e2d5] pt-4">
                  <div className="text-xs font-semibold text-[#1c1a17]">{t.author}</div>
                  <div className="text-[11px] text-[#736f67]">{t.location} · {t.journey}</div>
                </div>
              </div>
            ))}
          </div>

          {/* Press Quotes */}
          <div className="border-t border-[#e8e2d5] pt-12 flex flex-wrap items-center justify-around gap-8 text-center text-xs text-[#736f67]">
            {PRESS_ACCOLADES.map((p, idx) => (
              <div key={idx} className="space-y-1">
                <div className="font-serif italic text-sm text-[#1c1a17]">“{p.quote}”</div>
                <div className="text-[10px] uppercase tracking-widest text-[#997449] font-semibold">{p.outlet}</div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* 9. FINAL CALL TO JOURNEY */}
      <section className="py-24 md:py-32 bg-[#1c1a17] text-[#faf8f5] text-center">
        <div className="max-w-3xl mx-auto px-6 space-y-6">
          <div className="text-xs uppercase tracking-[0.3em] text-[#dfc8a2] font-semibold">
            Your Private Expedition Awaits
          </div>
          <h3 className="font-serif text-4xl sm:text-5xl lg:text-6xl text-white font-normal leading-tight">
            Allow Africa to Reveal Herself to You
          </h3>
          <p className="text-base text-[#ded7c8] font-light leading-relaxed max-w-xl mx-auto">
            Contact our private safari desk in Karen, Nairobi. We will craft a bespoke, unhurried proposal tailored solely to your vision.
          </p>

          <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
            <button
              onClick={() => setActivePage('contact')}
              className="w-full sm:w-auto px-10 py-4 bg-[#c5a880] text-[#0f0e0c] text-xs uppercase tracking-[0.24em] font-medium hover:bg-[#dfc8a2] transition-colors cursor-pointer shadow-lg"
            >
              Begin Private Enquiry
            </button>
            <a
              href={`mailto:${BRAND.bookingEmail}`}
              className="w-full sm:w-auto px-10 py-4 border border-[#dfc8a2]/60 text-white text-xs uppercase tracking-[0.24em] font-medium hover:bg-white/10 transition-colors"
            >
              Email {BRAND.bookingEmail}
            </a>
          </div>
        </div>
      </section>

    </div>
  );
};
