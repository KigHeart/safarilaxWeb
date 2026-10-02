import React from 'react';
import { PageId } from '../types';
import { BRAND } from '../data/brand';
import { ShieldCheck, Heart, Users, Compass, ArrowRight, Award } from 'lucide-react';

import { heroImg, campImg, leopardImg } from '../data/images';

interface AboutViewProps {
  setActivePage: (page: PageId) => void;
}

export const AboutView: React.FC<AboutViewProps> = ({ setActivePage }) => {
  return (
    <div className="pt-24 pb-20 space-y-24">
      
      {/* HEADER BANNER */}
      <section className="max-w-5xl mx-auto px-6 text-center space-y-6">
        <div className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.3em] text-[#c5a880] font-medium">
          <span>The Safari LAX Story</span>
          <span>·</span>
          <span>Nairobi Heritage</span>
        </div>

        <h1 className="font-serif text-4xl sm:text-6xl text-[#FAF8F5] font-normal leading-tight text-balance">
          Rooted in the Soil, <br />
          <span className="italic text-[#c5a880] font-light">Committed to Stillness</span>
        </h1>

        <p className="max-w-2xl mx-auto text-sm sm:text-base text-[#ded7c8] font-light leading-relaxed">
          Founded in Nairobi by veteran African naturalists and conservationists, Safari LAX was born as an antidote to mass tourism. We believe the profound majesty of Africa is revealed only when one slows down.
        </p>
      </section>

      {/* CORE NARRATIVE SPLIT */}
      <section className="max-w-7xl mx-auto px-6 md:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          <div className="lg:col-span-6 relative h-[450px] lg:h-[550px] overflow-hidden border border-[#262420]">
            <img
              src={campImg}
              alt="Unhurried luxury safari camp in Kenya"
              className="w-full h-full object-cover"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0e0d0b]/80 via-transparent to-transparent" />
            <div className="absolute bottom-6 left-6 right-6 p-4 bg-[#141311]/90 backdrop-blur-md border border-[#2e2a22]">
              <div className="text-[10px] uppercase tracking-wider text-[#c5a880]">Our Guiding Mandate</div>
              <div className="font-serif italic text-base text-[#FAF8F5] mt-1">
                “Private Africa, Unhurried.”
              </div>
            </div>
          </div>

          <div className="lg:col-span-6 space-y-6">
            <div className="text-xs uppercase tracking-[0.25em] text-[#c5a880] font-medium">
              The Genesis
            </div>
            
            <h2 className="font-serif text-3xl sm:text-4xl text-[#FAF8F5]">
              Why We Rebel Against the One-Night Safari
            </h2>

            <p className="text-sm text-[#ded7c8] leading-relaxed">
              In recent decades, commercial travel itineraries compressed East Africa into a frenetic tick-box exercise: one night in Amboseli, one night in Lake Nakuru, two nights in the Mara, punctuated by hours stuck in diesel fumes and minivan traffic.
            </p>

            <p className="text-sm text-[#a8a396] leading-relaxed">
              We chose an entirely different path. By maintaining minimum three-to-four night stays within private conservancies, our guests experience the subtle dramas of nature: watching a mother cheetah teach her cubs to hunt over successive dawns, deciphering the alarm barks of baboons at dusk, and forming genuine friendships with local hosts.
            </p>

            <div className="pt-2 grid grid-cols-2 gap-4 border-t border-[#24221d]">
              <div className="space-y-1">
                <div className="font-serif text-2xl text-[#c5a880]">3+ Nights</div>
                <div className="text-xs text-[#8e8a80]">Minimum allocation per wilderness ecosystem</div>
              </div>
              <div className="space-y-1">
                <div className="font-serif text-2xl text-[#c5a880]">100% Private</div>
                <div className="text-xs text-[#8e8a80]">Dedicated vehicles & professional guides</div>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* CONSERVATION & LAND REVENUE ETHOS */}
      <section className="bg-[#141311] py-20 border-y border-[#211f1a]">
        <div className="max-w-6xl mx-auto px-6 md:px-10 space-y-12">
          
          <div className="max-w-2xl space-y-3">
            <div className="text-xs uppercase tracking-[0.25em] text-[#c5a880] font-medium">
              Conservation Stewardship
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl text-[#FAF8F5]">
              Private Conservancies: The Gold Standard
            </h2>
            <p className="text-sm text-[#8e8a80]">
              How our guests directly empower indigenous landholders and endangered species protection.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-[#181613] border border-[#262420] p-6 space-y-4">
              <ShieldCheck className="w-6 h-6 text-[#c5a880]" />
              <h3 className="font-serif text-lg text-[#FAF8F5]">
                Direct Land Leases
              </h3>
              <p className="text-xs text-[#a8a396] leading-relaxed">
                By booking in private conservancies such as Mara North and Namunyak, your bed-night fees directly provide guaranteed monthly lease income to hundreds of Maasai and Samburu families, incentivizing habitat preservation over agriculture.
              </p>
            </div>

            <div className="bg-[#181613] border border-[#262420] p-6 space-y-4">
              <Award className="w-6 h-6 text-[#c5a880]" />
              <h3 className="font-serif text-lg text-[#FAF8F5]">
                Anti-Poaching Canine Units
              </h3>
              <p className="text-xs text-[#a8a396] leading-relaxed">
                A percentage of every Safari LAX itinerary supports dedicated ranger tracker dogs at Lewa and Ol Pejeta, protecting critically endangered black and northern white rhinos around the clock.
              </p>
            </div>

            <div className="bg-[#181613] border border-[#262420] p-6 space-y-4">
              <Users className="w-6 h-6 text-[#c5a880]" />
              <h3 className="font-serif text-lg text-[#FAF8F5]">
                Indigenous Knowledge
              </h3>
              <p className="text-xs text-[#a8a396] leading-relaxed">
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
            <div className="text-xs uppercase tracking-[0.25em] text-[#c5a880] font-medium">
              The Guiding Guild
            </div>

            <h2 className="font-serif text-3xl sm:text-4xl text-[#FAF8F5]">
              Kenya's Most Revered Naturalists
            </h2>

            <p className="text-sm text-[#ded7c8] leading-relaxed">
              Anyone can drive a vehicle across a savannah. What makes a Safari LAX journey transformative is having a guide who knows individual leopards by name, who reads the wind to position your vehicle where the light illuminates a cheetah's eyes, and who explains the symbiotic relationships between acacia ants and whistling thorns.
            </p>

            <div className="space-y-3 pt-2">
              <div className="flex items-start gap-3">
                <Compass className="w-4 h-4 text-[#c5a880] shrink-0 mt-1" />
                <div className="text-xs text-[#a8a396]">
                  <strong className="text-[#FAF8F5]">KPSGA Gold & Silver Certified:</strong> Less than 2% of guides in East Africa achieve this level of rigorous examination.
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Compass className="w-4 h-4 text-[#c5a880] shrink-0 mt-1" />
                <div className="text-xs text-[#a8a396]">
                  <strong className="text-[#FAF8F5]">Continuous Accompaniment:</strong> Your private guide stays with you from the moment you land on the bush airstrip until your return to Nairobi.
                </div>
              </div>
            </div>

            <div className="pt-4">
              <button
                onClick={() => setActivePage('journeys')}
                className="px-6 py-3 bg-[#c5a880] text-[#0e0d0b] text-xs uppercase tracking-[0.2em] font-medium hover:bg-[#d4b896] transition-colors"
              >
                Explore Curated Journeys
              </button>
            </div>
          </div>

          <div className="lg:col-span-6 relative h-[420px] lg:h-[500px] overflow-hidden border border-[#262420]">
            <img
              src={leopardImg}
              alt="Wildlife encounter in private Kenya concession"
              className="w-full h-full object-cover"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0e0d0b]/80 via-transparent to-transparent" />
            <div className="absolute bottom-6 left-6 right-6 p-4 bg-[#141311]/90 border border-[#2e2a22]">
              <div className="text-xs text-[#ded7c8] font-serif italic">
                “When you sit quietly without urgency, the wild forgets you are there. That is when the miracle occurs.”
              </div>
              <div className="text-[10px] text-[#c5a880] mt-1 font-mono uppercase">
                — Senior Naturalist, Safari LAX Kenya Team
              </div>
            </div>
          </div>

        </div>
      </section>

    </div>
  );
};
