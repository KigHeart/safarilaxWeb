import React from 'react';
import { PageId } from '../types';
import { ShieldCheck, Users, Compass, ArrowRight, Award } from 'lucide-react';
import { campImg, leopardImg } from '../data/images';

interface AboutViewProps {
  setActivePage: (page: PageId) => void;
}

export const AboutView: React.FC<AboutViewProps> = ({ setActivePage }) => {
  return (
    <div className="pt-28 pb-24 space-y-24 bg-[#faf8f5] text-[#1c1a17]">
      
      {/* HEADER BANNER */}
      <section className="max-w-4xl mx-auto px-6 text-center space-y-5">
        <div className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.3em] text-[#997449] font-semibold">
          <span>The Safari LAX Story</span>
          <span>·</span>
          <span>Nairobi Heritage</span>
        </div>

        <h1 className="font-serif text-4xl sm:text-6xl text-[#1c1a17] font-normal leading-tight text-balance">
          Rooted in the Soil, <br />
          <span className="italic text-[#997449] font-light">Committed to Stillness</span>
        </h1>

        <p className="max-w-2xl mx-auto text-base text-[#5c564c] font-light leading-relaxed">
          Founded in Nairobi by veteran African naturalists and conservationists, Safari LAX was born as an antidote to mass tourism. We believe the profound majesty of Africa is revealed only when one slows down.
        </p>
      </section>

      {/* CORE NARRATIVE SPLIT */}
      <section className="max-w-7xl mx-auto px-6 md:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          <div className="lg:col-span-6 relative h-[450px] lg:h-[550px] overflow-hidden border border-[#e8e2d5] shadow-lg">
            <img
              src={campImg}
              alt="Unhurried luxury safari camp in Kenya"
              className="w-full h-full object-cover"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-transparent to-transparent" />
            <div className="absolute bottom-6 left-6 right-6 p-5 bg-[#faf8f5]/95 backdrop-blur-md border border-[#e8e2d5]">
              <div className="text-[10px] uppercase tracking-wider text-[#997449] font-semibold">Our Guiding Mandate</div>
              <div className="font-serif italic text-lg text-[#1c1a17] mt-1">
                “Private Africa, Unhurried.”
              </div>
            </div>
          </div>

          <div className="lg:col-span-6 space-y-6">
            <div className="text-xs uppercase tracking-[0.25em] text-[#997449] font-semibold">
              The Genesis
            </div>
            
            <h2 className="font-serif text-3xl sm:text-4xl text-[#1c1a17]">
              Why We Rebel Against the One-Night Safari
            </h2>

            <p className="text-sm text-[#4a453d] leading-relaxed">
              In recent decades, commercial travel itineraries compressed East Africa into a frenetic tick-box exercise: one night in Amboseli, one night in Lake Nakuru, two nights in the Mara, punctuated by hours stuck in diesel fumes and minivan traffic.
            </p>

            <p className="text-sm text-[#5c564c] leading-relaxed">
              We chose an entirely different path. By maintaining minimum three-to-four night stays within private conservancies, our guests experience the subtle dramas of nature: watching a mother cheetah teach her cubs to hunt over successive dawns, deciphering the alarm barks of baboons at dusk, and forming genuine friendships with local hosts.
            </p>

            <div className="pt-2 grid grid-cols-2 gap-6 border-t border-[#e8e2d5]">
              <div className="space-y-1">
                <div className="font-serif text-3xl text-[#997449]">3+ Nights</div>
                <div className="text-xs text-[#736f67]">Minimum allocation per wilderness ecosystem</div>
              </div>
              <div className="space-y-1">
                <div className="font-serif text-3xl text-[#997449]">100% Private</div>
                <div className="text-xs text-[#736f67]">Dedicated vehicles & professional guides</div>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* CONSERVATION & LAND REVENUE ETHOS */}
      <section className="bg-[#f5f0e6]/70 py-24 border-y border-[#e8e2d5]">
        <div className="max-w-6xl mx-auto px-6 md:px-10 space-y-12">
          
          <div className="max-w-2xl space-y-3">
            <div className="text-xs uppercase tracking-[0.25em] text-[#997449] font-semibold">
              Conservation Stewardship
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl text-[#1c1a17]">
              Private Conservancies: The Gold Standard
            </h2>
            <p className="text-sm text-[#5c564c]">
              How our guests directly empower indigenous landholders and endangered species protection.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-[#faf8f5] border border-[#e8e2d5] p-8 space-y-4">
              <ShieldCheck className="w-6 h-6 text-[#997449]" />
              <h3 className="font-serif text-xl text-[#1c1a17]">
                Direct Land Leases
              </h3>
              <p className="text-xs text-[#5c564c] leading-relaxed">
                By booking in private conservancies such as Mara North and Namunyak, your bed-night fees directly provide guaranteed monthly lease income to hundreds of Maasai and Samburu families, incentivizing habitat preservation over agriculture.
              </p>
            </div>

            <div className="bg-[#faf8f5] border border-[#e8e2d5] p-8 space-y-4">
              <Award className="w-6 h-6 text-[#997449]" />
              <h3 className="font-serif text-xl text-[#1c1a17]">
                Anti-Poaching Units
              </h3>
              <p className="text-xs text-[#5c564c] leading-relaxed">
                A percentage of every Safari LAX itinerary supports dedicated ranger tracker dogs at Lewa and Ol Pejeta, protecting critically endangered black and northern white rhinos around the clock.
              </p>
            </div>

            <div className="bg-[#faf8f5] border border-[#e8e2d5] p-8 space-y-4">
              <Users className="w-6 h-6 text-[#997449]" />
              <h3 className="font-serif text-xl text-[#1c1a17]">
                Indigenous Knowledge
              </h3>
              <p className="text-xs text-[#5c564c] leading-relaxed">
                We believe cultural encounters must be authentic, dignifying, and mutually respectful. We reject staged tourist performances in favor of quiet fireside dialogues and joint conservation patrols with local elders.
              </p>
            </div>
          </div>

        </div>
      </section>

      {/* THE GUIDE GUILD */}
      <section className="max-w-7xl mx-auto px-6 md:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          <div className="lg:col-span-6 space-y-6">
            <div className="text-xs uppercase tracking-[0.25em] text-[#997449] font-semibold">
              The Guiding Guild
            </div>

            <h2 className="font-serif text-3xl sm:text-4xl text-[#1c1a17]">
              Kenya's Most Revered Naturalists
            </h2>

            <p className="text-sm text-[#4a453d] leading-relaxed">
              Anyone can drive a vehicle across a savannah. What makes a Safari LAX journey transformative is having a guide who knows individual leopards by name, who reads the wind to position your vehicle where the light illuminates a cheetah's eyes, and who explains the symbiotic relationships between acacia ants and whistling thorns.
            </p>

            <div className="space-y-3 pt-2">
              <div className="flex items-start gap-3">
                <Compass className="w-4 h-4 text-[#997449] shrink-0 mt-0.5" />
                <div className="text-xs text-[#5c564c]">
                  <strong className="text-[#1c1a17]">KPSGA Gold & Silver Certified:</strong> Less than 2% of guides in East Africa achieve this level of rigorous examination.
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Compass className="w-4 h-4 text-[#997449] shrink-0 mt-0.5" />
                <div className="text-xs text-[#5c564c]">
                  <strong className="text-[#1c1a17]">Continuous Accompaniment:</strong> Your private guide stays with you from the moment you land on the bush airstrip until your return to Nairobi.
                </div>
              </div>
            </div>

            <div className="pt-4">
              <button
                onClick={() => setActivePage('journeys')}
                className="px-8 py-3.5 bg-[#1c1a17] text-[#faf8f5] text-xs uppercase tracking-[0.22em] font-medium hover:bg-[#997449] transition-colors cursor-pointer"
              >
                Explore Curated Journeys
              </button>
            </div>
          </div>

          <div className="lg:col-span-6 relative h-[420px] lg:h-[500px] overflow-hidden border border-[#e8e2d5] shadow-lg">
            <img
              src={leopardImg}
              alt="Wildlife encounter in private Kenya concession"
              className="w-full h-full object-cover"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-transparent to-transparent" />
            <div className="absolute bottom-6 left-6 right-6 p-5 bg-[#faf8f5]/95 border border-[#e8e2d5]">
              <div className="text-xs text-[#2e2b26] font-serif italic">
                “When you sit quietly without urgency, the wild forgets you are there. That is when the miracle occurs.”
              </div>
              <div className="text-[10px] text-[#997449] mt-1 uppercase font-semibold">
                — Senior Naturalist, Safari LAX Kenya Team
              </div>
            </div>
          </div>

        </div>
      </section>

    </div>
  );
};
