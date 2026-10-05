import React, { useState } from 'react';
import { IMAGES } from '../data/images';
import { ArrowRight, CheckCircle2 } from 'lucide-react';

interface EditorialProps {
  onOpenEnquiry: () => void;
  onNavigate: (id: string) => void;
  onOpenConcierge?: () => void;
}

export const EditorialSections: React.FC<EditorialProps> = ({
  onOpenEnquiry,
  onNavigate,
  onOpenConcierge
}) => {
  // Enquiry form state
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    travelDates: '',
    journeyNotes: ''
  });

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormSubmitted(true);
  };

  return (
    <div className="bg-[#0E0E0D] text-[#F7F4EC]">
      
      {/* ========================================================
          PAGE 1: HERO & BORN IN KENYA
          ======================================================== */}
      <section id="hero" className="relative">
        {/* Full-width B&W Hero Image */}
        <div className="relative w-full h-[78vh] min-h-[580px] max-h-[920px] overflow-hidden">
          <img
            src={IMAGES.heroVeranda}
            alt="Safari LAX - Private tented veranda overlooking the vast African savannah"
            className="w-full h-full object-cover editorial-bw scale-[1.02]"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0E0E0D] via-black/25 to-black/30" />
          
          {/* Hero Typography Overlay */}
          <div className="absolute inset-0 flex flex-col justify-end max-w-7xl mx-auto px-6 md:px-12 pb-16 md:pb-24">
            <span className="text-[10px] md:text-xs tracking-[0.35em] text-[#E6E0D4] uppercase font-light mb-3">
              SAFARI LAX · KENYA &amp; BEYOND
            </span>
            <h1 className="font-serif text-4xl sm:text-6xl md:text-7xl lg:text-8xl tracking-tight text-[#F7F4EC] font-normal leading-[1.08] max-w-4xl">
              Private Africa, <span className="italic font-light">Unhurried.</span>
            </h1>
          </div>
        </div>

        {/* Page 1 Bottom: Born in Kenya Section (Near Black) */}
        <div className="bg-[#0E0E0D] border-t border-white/5 py-16 md:py-24">
          <div className="max-w-7xl mx-auto px-6 md:px-12 grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-16 items-start">
            <div className="md:col-span-7">
              <span className="text-[9.5px] tracking-[0.35em] text-[#B8B3AA] uppercase font-light block mb-3">
                BORN IN KENYA
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-[#F7F4EC] font-normal leading-[1.15]">
                A journey shaped around you.
              </h2>
            </div>
            <div className="md:col-span-5 flex flex-col justify-between pt-2">
              <p className="text-sm md:text-base text-[#B8B3AA] font-light leading-relaxed mb-6">
                Private journeys through Africa, beautifully considered from first departure to final return.
              </p>
              <div>
                <button
                  onClick={() => onNavigate('approach')}
                  className="group inline-flex items-center gap-2 text-xs uppercase tracking-[0.22em] text-[#F7F4EC] hover:text-[#E6E0D4] transition-colors cursor-pointer"
                >
                  DISCOVER OUR APPROACH
                  <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1 text-[#E6E0D4]" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================
          PAGE 2: THREE WAYS TO FEEL KENYA
          ======================================================== */}
      <section id="three-ways" className="bg-[#F7F4EC] text-[#0E0E0D] py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-[#0E0E0D] font-normal mb-12 md:mb-16">
            Three ways to feel Kenya.
          </h2>

          {/* 3 Column Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-10">
            {/* 1. The Wild */}
            <div
              onClick={() => onNavigate('wild')}
              className="group cursor-pointer flex flex-col"
            >
              <div className="aspect-[4/3] w-full overflow-hidden bg-[#E6E0D4] mb-5">
                <img
                  src={IMAGES.wildDeck}
                  alt="The Wild - Safari LAX"
                  className="w-full h-full object-cover editorial-bw transition-transform duration-700 group-hover:scale-105"
                />
              </div>
              <h3 className="font-serif text-2xl text-[#0E0E0D] font-normal group-hover:text-[#B8B3AA] transition-colors">
                The Wild
              </h3>
            </div>

            {/* 2. The Coast */}
            <div
              onClick={() => onNavigate('coast')}
              className="group cursor-pointer flex flex-col"
            >
              <div className="aspect-[4/3] w-full overflow-hidden bg-[#E6E0D4] mb-5">
                <img
                  src={IMAGES.coastalVilla}
                  alt="The Coast - Swahili architecture and ocean breeze"
                  className="w-full h-full object-cover editorial-bw transition-transform duration-700 group-hover:scale-105"
                />
              </div>
              <h3 className="font-serif text-2xl text-[#0E0E0D] font-normal group-hover:text-[#B8B3AA] transition-colors">
                The Coast
              </h3>
            </div>

            {/* 3. The Highlands */}
            <div
              onClick={() => onNavigate('highlands')}
              className="group cursor-pointer flex flex-col"
            >
              <div className="aspect-[4/3] w-full overflow-hidden bg-[#E6E0D4] mb-5">
                <img
                  src={IMAGES.highlandBalcony}
                  alt="The Highlands - Misty cedar valleys and cool mountain air"
                  className="w-full h-full object-cover editorial-bw transition-transform duration-700 group-hover:scale-105"
                />
              </div>
              <h3 className="font-serif text-2xl text-[#0E0E0D] font-normal group-hover:text-[#B8B3AA] transition-colors">
                The Highlands
              </h3>
            </div>
          </div>
        </div>
      </section>

      {/* Page 2 Bottom Banner: Your journey begins with a conversation */}
      <section className="bg-[#0E0E0D] text-[#F7F4EC] py-20 md:py-24 border-t border-b border-white/5 text-center">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-[#F7F4EC] font-normal mb-8">
            Your journey begins with a conversation.
          </h2>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <button
              onClick={onOpenEnquiry}
              className="text-xs uppercase tracking-[0.24em] font-normal px-8 py-3.5 border border-[#E6E0D4] text-[#F7F4EC] hover:bg-[#F7F4EC] hover:text-[#0E0E0D] transition-all duration-300 cursor-pointer"
            >
              MAKE A PRIVATE ENQUIRY
            </button>
            {onOpenConcierge && (
              <button
                onClick={onOpenConcierge}
                className="text-xs uppercase tracking-[0.24em] font-normal px-8 py-3.5 border border-[#B8B3AA]/50 text-[#B8B3AA] hover:text-[#F7F4EC] hover:border-[#F7F4EC] transition-all duration-300 cursor-pointer flex items-center gap-2"
              >
                <span className="w-1.5 h-1.5 rounded-full bg-[#E6E0D4]"></span>
                INSTANT AI ATELIER
              </button>
            )}
          </div>
        </div>
      </section>

      {/* ========================================================
          PAGE 3: JOURNEYS, MADE PERSONAL
          ======================================================== */}
      <section id="journeys" className="relative">
        {/* Full-width suite view */}
        <div className="relative w-full h-[65vh] min-h-[480px] max-h-[800px] overflow-hidden">
          <img
            src={IMAGES.suiteBedroom}
            alt="Journeys made personal - Luxury suite opening to open African plains"
            className="w-full h-full object-cover editorial-bw"
          />
          <div className="absolute inset-0 bg-black/20" />
        </div>

        {/* Dark Band Below Image */}
        <div className="bg-[#0E0E0D] py-16 md:py-20 border-t border-white/5">
          <div className="max-w-7xl mx-auto px-6 md:px-12 grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-16 items-center">
            <div className="md:col-span-6">
              <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-[#F7F4EC] font-normal leading-tight">
                Journeys, <span className="italic font-light">made personal.</span>
              </h2>
            </div>
            <div className="md:col-span-6">
              <p className="text-sm md:text-base text-[#B8B3AA] font-light leading-relaxed">
                Kenya, at your pace. Private journeys shaped around your interests, your time and the people travelling with you.
              </p>
            </div>
          </div>
        </div>

        {/* Page 3 Bottom: The Wild In-Depth */}
        <div id="wild" className="bg-[#F7F4EC] text-[#0E0E0D] py-20 md:py-28">
          <div className="max-w-7xl mx-auto px-6 md:px-12 grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-16 items-center">
            <div className="md:col-span-7">
              <div className="aspect-[16/10] w-full overflow-hidden bg-[#E6E0D4]">
                <img
                  src={IMAGES.wildDeck}
                  alt="The Wild"
                  className="w-full h-full object-cover editorial-bw"
                />
              </div>
            </div>
            <div className="md:col-span-5">
              <h3 className="font-serif text-3xl sm:text-4xl md:text-5xl text-[#0E0E0D] font-normal">
                The Wild
              </h3>
              <div className="h-[1px] w-14 bg-[#B8B3AA] my-5" />
              <p className="text-base text-[#0E0E0D]/80 font-light leading-relaxed">
                Private safari journeys, thoughtfully paced around landscape, season and discovery.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================
          PAGE 4: THE COAST & THE HIGHLANDS
          ======================================================== */}
      <section className="bg-[#F7F4EC] text-[#0E0E0D] pb-24">
        <div className="max-w-7xl mx-auto px-6 md:px-12 space-y-20 md:space-y-28">
          
          {/* The Coast */}
          <div id="coast" className="grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-16 items-center">
            <div className="md:col-span-5 order-2 md:order-1">
              <h3 className="font-serif text-3xl sm:text-4xl md:text-5xl text-[#0E0E0D] font-normal">
                The Coast
              </h3>
              <div className="h-[1px] w-14 bg-[#B8B3AA] my-5" />
              <p className="text-base text-[#0E0E0D]/80 font-light leading-relaxed">
                Indian Ocean stays, quiet mornings and time to follow a gentler rhythm.
              </p>
            </div>
            <div className="md:col-span-7 order-1 md:order-2">
              <div className="aspect-[16/10] w-full overflow-hidden bg-[#E6E0D4]">
                <img
                  src={IMAGES.coastalVilla}
                  alt="The Coast"
                  className="w-full h-full object-cover editorial-bw"
                />
              </div>
            </div>
          </div>

          {/* The Highlands */}
          <div id="highlands" className="grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-16 items-center">
            <div className="md:col-span-7">
              <div className="aspect-[16/10] w-full overflow-hidden bg-[#E6E0D4]">
                <img
                  src={IMAGES.highlandBalcony}
                  alt="The Highlands"
                  className="w-full h-full object-cover editorial-bw"
                />
              </div>
            </div>
            <div className="md:col-span-5">
              <h3 className="font-serif text-3xl sm:text-4xl md:text-5xl text-[#0E0E0D] font-normal">
                The Highlands
              </h3>
              <div className="h-[1px] w-14 bg-[#B8B3AA] my-5" />
              <p className="text-base text-[#0E0E0D]/80 font-light leading-relaxed">
                Cooler days, expansive views and a different perspective on Kenya.
              </p>
            </div>
          </div>

        </div>

        {/* Page 4 Bottom Banner: Let us shape your journey */}
        <div className="bg-[#0E0E0D] text-[#F7F4EC] py-20 mt-20 text-center">
          <div className="max-w-4xl mx-auto px-6">
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-[#F7F4EC] font-normal mb-8">
              Let us shape your journey.
            </h2>
            <button
              onClick={onOpenEnquiry}
              className="text-xs uppercase tracking-[0.24em] font-normal px-8 py-3.5 border border-[#E6E0D4] text-[#F7F4EC] hover:bg-[#F7F4EC] hover:text-[#0E0E0D] transition-all duration-300 cursor-pointer"
            >
              PRIVATE ENQUIRY
            </button>
          </div>
        </div>
      </section>

      {/* ========================================================
          PAGE 5: ONE JOURNEY. HELD FROM END TO END & KENYA IS HOME
          ======================================================== */}
      <section id="approach" className="bg-[#0E0E0D] text-[#F7F4EC] py-20 md:py-28 border-t border-white/5">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          
          <div className="max-w-3xl mb-12">
            <h2 className="font-serif text-3xl sm:text-5xl md:text-6xl text-[#F7F4EC] font-normal leading-[1.12] mb-5">
              One journey. Held from end to end.
            </h2>
            <p className="text-sm md:text-base text-[#B8B3AA] font-light leading-relaxed">
              Born in Kenya. Private travel through Africa, considered from first departure to final return.
            </p>
          </div>

          {/* Large Panoramic Infinity Pool Image */}
          <div className="aspect-[21/9] w-full overflow-hidden bg-[#1a1918] mb-20 md:mb-28">
            <img
              src={IMAGES.infinityPool}
              alt="One journey, held from end to end"
              className="w-full h-full object-cover editorial-bw"
            />
          </div>

        </div>

        {/* Kenya is home (Ivory Split Block) */}
        <div id="kenya" className="bg-[#F7F4EC] text-[#0E0E0D] py-20 md:py-28">
          <div className="max-w-7xl mx-auto px-6 md:px-12 grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-16 items-center">
            <div className="md:col-span-6">
              <h3 className="font-serif text-3xl sm:text-4xl md:text-5xl text-[#0E0E0D] font-normal">
                Kenya is home.
              </h3>
              <div className="h-[1px] w-14 bg-[#B8B3AA] my-5" />
              <p className="text-base text-[#0E0E0D]/80 font-light leading-relaxed">
                Our local perspective shapes the route, the pace and the welcome. We connect flights, stays and private movement with care, leaving room for discovery.
              </p>
            </div>
            <div className="md:col-span-6">
              <div className="aspect-[16/11] w-full overflow-hidden bg-[#E6E0D4]">
                <img
                  src={IMAGES.loungeDeck}
                  alt="Kenya is home - Safari lounge"
                  className="w-full h-full object-cover editorial-bw"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================
          PAGE 6: THE DETAIL IS OURS & BEGIN A CONVERSATION
          ======================================================== */}
      <section className="bg-[#0E0E0D] text-[#F7F4EC] py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          
          <div className="mb-14">
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-[#F7F4EC] font-normal">
              The detail is ours.
            </h2>
            <div className="h-[1px] w-14 bg-[#B8B3AA] my-5" />
          </div>

          {/* 3 Detail Columns with Imagery */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-10 mb-24 md:mb-32">
            
            {/* 1. Before you leave */}
            <div className="flex flex-col">
              <div className="aspect-[4/3] w-full overflow-hidden bg-[#1a1918] mb-5">
                <img
                  src={IMAGES.privateJet}
                  alt="Before you leave - Private jet charter"
                  className="w-full h-full object-cover editorial-bw"
                />
              </div>
              <h3 className="font-serif text-xl md:text-2xl text-[#F7F4EC] font-normal mb-2">
                Before you leave.
              </h3>
              <p className="text-sm text-[#B8B3AA] font-light leading-relaxed">
                Flights, routing and carefully chosen stays.
              </p>
            </div>

            {/* 2. While you travel */}
            <div className="flex flex-col">
              <div className="aspect-[4/3] w-full overflow-hidden bg-[#1a1918] mb-5">
                <img
                  src={IMAGES.safariCruiser}
                  alt="While you travel - Custom 4x4 Cruiser"
                  className="w-full h-full object-cover editorial-bw"
                />
              </div>
              <h3 className="font-serif text-xl md:text-2xl text-[#F7F4EC] font-normal mb-2">
                While you travel.
              </h3>
              <p className="text-sm text-[#B8B3AA] font-light leading-relaxed">
                Airport reception, private vehicles and local coordination.
              </p>
            </div>

            {/* 3. Beyond the meetings */}
            <div className="flex flex-col">
              <div className="aspect-[4/3] w-full overflow-hidden bg-[#1a1918] mb-5">
                <img
                  src={IMAGES.executiveVeranda}
                  alt="Beyond the meetings - Private extensions"
                  className="w-full h-full object-cover editorial-bw"
                />
              </div>
              <h3 className="font-serif text-xl md:text-2xl text-[#F7F4EC] font-normal mb-2">
                Beyond the meetings.
              </h3>
              <p className="text-sm text-[#B8B3AA] font-light leading-relaxed">
                Travel around executive and institutional visits, with private extensions when desired.
              </p>
            </div>

          </div>

        </div>

        {/* Begin a conversation (Ivory Split Form Block) */}
        <div id="enquiry" className="bg-[#F7F4EC] text-[#0E0E0D] py-20 md:py-28">
          <div className="max-w-7xl mx-auto px-6 md:px-12 grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-16 items-start">
            
            <div className="md:col-span-5">
              <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-[#0E0E0D] font-normal leading-tight mb-4">
                Begin a conversation.
              </h2>
              <p className="text-base text-[#0E0E0D]/75 font-light leading-relaxed mb-6">
                Tell us where your journey might take you.
              </p>
              <div className="text-xs text-[#B8B3AA] font-light space-y-1">
                <p>Private Atelier: Nairobi · Kenya</p>
                <p>Direct: bookings@safarilax.world</p>
              </div>
            </div>

            {/* Exact Minimalist Enquiry Form from PDF */}
            <div className="md:col-span-7 bg-[#F7F4EC]">
              {formSubmitted ? (
                <div className="p-8 border border-[#B8B3AA]/40 text-center space-y-4">
                  <CheckCircle2 className="w-8 h-8 text-[#0E0E0D] mx-auto" />
                  <h3 className="font-serif text-2xl text-[#0E0E0D]">Thank you for your enquiry.</h3>
                  <p className="text-sm text-[#0E0E0D]/80 font-light max-w-md mx-auto">
                    We have received your details. A Safari LAX private director will be in touch shortly to begin shaping your journey.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleFormSubmit} className="space-y-4">
                  <div>
                    <input
                      type="text"
                      required
                      placeholder="Name"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full bg-transparent border border-[#B8B3AA]/60 px-4 py-3 text-sm text-[#0E0E0D] placeholder-[#0E0E0D]/50 focus:outline-none focus:border-[#0E0E0D] transition-colors"
                    />
                  </div>
                  <div>
                    <input
                      type="email"
                      required
                      placeholder="Email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full bg-transparent border border-[#B8B3AA]/60 px-4 py-3 text-sm text-[#0E0E0D] placeholder-[#0E0E0D]/50 focus:outline-none focus:border-[#0E0E0D] transition-colors"
                    />
                  </div>
                  <div>
                    <input
                      type="text"
                      placeholder="Travel dates"
                      value={formData.travelDates}
                      onChange={(e) => setFormData({ ...formData, travelDates: e.target.value })}
                      className="w-full bg-transparent border border-[#B8B3AA]/60 px-4 py-3 text-sm text-[#0E0E0D] placeholder-[#0E0E0D]/50 focus:outline-none focus:border-[#0E0E0D] transition-colors"
                    />
                  </div>
                  <div>
                    <textarea
                      rows={4}
                      placeholder="Your journey"
                      value={formData.journeyNotes}
                      onChange={(e) => setFormData({ ...formData, journeyNotes: e.target.value })}
                      className="w-full bg-transparent border border-[#B8B3AA]/60 px-4 py-3 text-sm text-[#0E0E0D] placeholder-[#0E0E0D]/50 focus:outline-none focus:border-[#0E0E0D] transition-colors resize-none"
                    />
                  </div>
                  <div>
                    <button
                      type="submit"
                      className="w-full bg-[#0E0E0D] text-[#F7F4EC] text-xs uppercase tracking-[0.24em] font-normal py-4 hover:bg-[#0E0E0D]/90 transition-all cursor-pointer"
                    >
                      SEND ENQUIRY
                    </button>
                  </div>
                </form>
              )}
            </div>

          </div>
        </div>
      </section>

      {/* ========================================================
          PAGE 7: THE SAFARI LAX STORY (EDITORIAL READING)
          ======================================================== */}
      <section id="story" className="bg-[#F7F4EC] text-[#0E0E0D] py-24 md:py-36 border-t border-b border-[#E6E0D4]">
        <div className="max-w-3xl mx-auto px-6 md:px-12">
          
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-[#0E0E0D] font-normal mb-3">
            The Safari LAX story
          </h2>
          <p className="font-serif text-2xl md:text-3xl text-[#0E0E0D]/85 italic font-light mb-8">
            Private Africa, Unhurried.
          </p>

          <p className="font-serif text-xl md:text-2xl text-[#0E0E0D] italic mb-10 pb-6 border-b border-[#B8B3AA]/30">
            Some places are visited. Africa is carried with you.
          </p>

          <div className="space-y-6 text-base md:text-lg text-[#0E0E0D]/85 font-light leading-relaxed">
            <p>
              Safari LAX was established in Kenya in 2023 around a simple idea: the finest journeys are not remembered for the number of reservations made or places crossed. They are remembered for how they made us feel.
            </p>
            <p>
              We create private journeys through Kenya and across Africa, holding the detail from the first flight to the final transfer so that our guests can give their attention to what no booking platform can create: the first light over open land, the quiet before wildlife appears, an unexpected conversation, a road that changes the pace of a day, a place that stays in the mind long after departure.
            </p>
            <p>
              For us, flights, hotels, lodges, vehicles, safari, coast and private experiences are not separate transactions. They are chapters of one journey. Our work is to connect them with intelligence, care and discretion.
            </p>
            <p>
              That is Safari LAX: Kenyan knowledge, private service and quiet precision behind journeys designed to be lived fully — and remembered deeply.
            </p>
          </div>

          <p className="font-serif text-xl md:text-2xl text-[#0E0E0D] italic mt-12 pt-6 border-t border-[#B8B3AA]/30">
            The journey ends. What it leaves with you does not.
          </p>

        </div>
      </section>

      {/* ========================================================
          PAGE 8: WHY SAFARI LAX (ELEPHANTS CENTERPIECE)
          ======================================================== */}
      <section id="about" className="bg-[#0E0E0D] text-[#F7F4EC] pt-20 md:pt-28">
        <div className="max-w-7xl mx-auto px-6 md:px-12 mb-12 md:mb-16">
          <h2 className="font-serif text-4xl sm:text-5xl md:text-6xl text-[#F7F4EC] font-normal leading-tight">
            Why Safari LAX
          </h2>
          <p className="font-serif text-2xl sm:text-3xl text-[#E6E0D4] italic font-light mt-2">
            Kenyan knowledge. Journeys made personal.
          </p>
        </div>

        {/* Wide Centerpiece Elephant Family Image */}
        <div className="w-full aspect-[21/9] min-h-[380px] max-h-[750px] overflow-hidden bg-[#1a1918]">
          <img
            src={IMAGES.elephantsFamily}
            alt="Elephant family walking across the savannah in front of mountains"
            className="w-full h-full object-cover editorial-bw"
          />
        </div>

        {/* Page 8 Bottom: Kenya is our beginning (Ivory) */}
        <div className="bg-[#F7F4EC] text-[#0E0E0D] py-20 md:py-24">
          <div className="max-w-4xl mx-auto px-6 md:px-12">
            <h3 className="font-serif text-3xl sm:text-4xl text-[#0E0E0D] font-normal">
              Kenya is our beginning.
            </h3>
            <div className="h-[1px] w-14 bg-[#B8B3AA] my-5" />
            <p className="text-base md:text-lg text-[#0E0E0D]/80 font-light leading-relaxed">
              Established in Kenya in 2023, Safari LAX brings a local perspective to private journeys through Africa. We consider the route, the pace and the welcome, as carefully as the places themselves.
            </p>
          </div>
        </div>
      </section>

      {/* ========================================================
          PAGE 9: TIME TO BE PRESENT & FINAL BANNER
          ======================================================== */}
      <section className="bg-[#0E0E0D] text-[#F7F4EC]">
        
        {/* Lion & Time to be present */}
        <div className="max-w-7xl mx-auto px-6 md:px-12 py-20 md:py-28 grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-16 items-center">
          <div className="md:col-span-5">
            <div className="aspect-[4/3] w-full overflow-hidden bg-[#1a1918]">
              <img
                src={IMAGES.lionPortrait}
                alt="Majestic wild lion portrait"
                className="w-full h-full object-cover editorial-bw"
              />
            </div>
          </div>
          <div className="md:col-span-7">
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-[#F7F4EC] font-normal mb-2">
              Time to be present.
            </h2>
            <div className="h-[1px] w-14 bg-[#B8B3AA] my-5" />
            <p className="text-base md:text-lg text-[#B8B3AA] font-light leading-relaxed max-w-xl">
              A safari is more than a succession of sightings. We shape the days around your interests, leaving space to pause, observe and discover.
            </p>
          </div>
        </div>

        {/* One journey, thoughtfully connected (Ivory Block) */}
        <div className="bg-[#F7F4EC] text-[#0E0E0D] py-20 md:py-28">
          <div className="max-w-7xl mx-auto px-6 md:px-12 grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-16 items-center">
            <div className="md:col-span-6">
              <h3 className="font-serif text-3xl sm:text-4xl md:text-5xl text-[#0E0E0D] font-normal">
                One journey, thoughtfully connected.
              </h3>
              <div className="h-[1px] w-14 bg-[#B8B3AA] my-5" />
              <p className="text-base md:text-lg text-[#0E0E0D]/80 font-light leading-relaxed">
                Flights, stays and private movement are considered together. From the first arrival to the final transfer, we coordinate the detail so you can give your attention to the journey.
              </p>
            </div>
            <div className="md:col-span-6">
              <div className="aspect-[16/11] w-full overflow-hidden bg-[#E6E0D4]">
                <img
                  src={IMAGES.wildDeck}
                  alt="One journey, thoughtfully connected"
                  className="w-full h-full object-cover editorial-bw"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Page 9 Bottom Banner: Private Africa, Unhurried */}
        <div className="bg-[#0E0E0D] text-[#F7F4EC] py-24 md:py-32 text-center border-t border-white/5">
          <div className="max-w-4xl mx-auto px-6">
            <h2 className="font-serif text-4xl sm:text-5xl md:text-6xl text-[#F7F4EC] font-normal mb-8">
              Private Africa, <span className="italic font-light">Unhurried.</span>
            </h2>
            <button
              onClick={onOpenEnquiry}
              className="text-xs uppercase tracking-[0.24em] font-normal px-10 py-4 border border-[#E6E0D4] text-[#F7F4EC] hover:bg-[#F7F4EC] hover:text-[#0E0E0D] transition-all duration-300 cursor-pointer"
            >
              BEGIN YOUR JOURNEY
            </button>
          </div>
        </div>

      </section>

    </div>
  );
};
