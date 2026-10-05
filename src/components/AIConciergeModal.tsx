import React, { useState } from 'react';
import { X, Sparkles, Send, Plane, Compass, ShieldCheck, Calendar, FileText, CheckCircle2 } from 'lucide-react';

interface AIConciergeModalProps {
  isOpen: boolean;
  onClose: () => void;
  onBookHold?: (itineraryTitle: string) => void;
}

interface Message {
  role: 'concierge' | 'guest';
  content: string;
  dossier?: {
    title: string;
    duration: string;
    routing: string[];
    pacing: string;
    highlights: string[];
    indicativePrice: string;
    days: { day: string; title: string; desc: string; stay: string }[];
  };
}

export const AIConciergeModal: React.FC<AIConciergeModalProps> = ({
  isOpen,
  onClose,
  onBookHold
}) => {
  const [input, setInput] = useState('');
  const [activeTab, setActiveTab] = useState<'dialogue' | 'onboarding'>('dialogue');
  
  // KYC / Onboarding form state
  const [kycCompleted, setKycCompleted] = useState(false);
  const [kycData, setKycData] = useState({
    guestName: '',
    passportNumber: '',
    nationality: '',
    dietaryAllergies: '',
    emergencyContact: ''
  });

  const [messages, setMessages] = useState<Message[]>([
    {
      role: 'concierge',
      content: `Welcome to the Safari LAX Private Atelier. I am your autonomous expedition concierge.\n\nWhether you wish to witness the Mara River crossing, track black rhinos in private northern conservancies, or orchestrate a seamless aviation circuit connecting the savannah to the Swahili coast, I am here to shape your journey.\n\nHow may I begin shaping your journey today?`
    }
  ]);

  const quickPrompts = [
    "Curate an unhurried 10-day circuit: The Wild, Highlands & Coast",
    "Private photographic expedition during the Great Migration",
    "Multigenerational family safari with private bush charter",
    "Explain luggage payload limits & Wilson Airport logistics"
  ];

  const handleSend = (textToSend?: string) => {
    const text = textToSend || input;
    if (!text.trim()) return;

    // Add guest message
    const newMessages: Message[] = [...messages, { role: 'guest', content: text }];
    setInput('');

    // Simulate Autonomous Naturalist Agent Reasoning
    setTimeout(() => {
      let reply: Message;

      const lower = text.toLowerCase();

      if (lower.includes('10-day') || lower.includes('circuit') || lower.includes('coast') || lower.includes('highlands')) {
        reply = {
          role: 'concierge',
          content: `I have synthesized an unhurried 10-night private circuit connecting Kenya's three distinct realms: The Wild, The Highlands, and The Coast. All inter-camp transfers are synchronized via private Cessna Grand Caravan bush flights to eliminate long road transfers.`,
          dossier: {
            title: "The Grand Kenyan Triptych: Wild, Highlands & Ocean",
            duration: "10 Days / 9 Nights",
            pacing: "Unhurried (3 Nights per Ecosystem)",
            routing: ["Nairobi Wilson (WIL)", "Mara North Conservancy", "Lewa Wildlife Conservancy", "Lamu Archipelago"],
            highlights: [
              "Exclusive access to Mara North away from park minibuses",
              "Helicopter excursion over Mount Kenya's jagged tarns",
              "Sunset private Swahili dhow cruise in the Indian Ocean",
              "Private guide & custom open-sided 4x4 cruiser throughout"
            ],
            indicativePrice: "$18,500 – $26,000 per guest (All-inclusive with private air transfers)",
            days: [
              {
                day: "Day 1 – 3",
                title: "The Wild · Mara North Conservancy",
                desc: "Morning private flight from Wilson directly into Mara North airstrip. Uncrowded game drives, lion pride tracking, and candlelit bush dinners under ancient acacias.",
                stay: "Exclusive Tented Camp Suite"
              },
              {
                day: "Day 4 – 6",
                title: "The Highlands · Lewa Wildlife Conservancy",
                desc: "Air transfer northeast to Mount Kenya's foothills. Dedicated rhino foot-tracking with rangers, cool highland ridge drives, and sundowners overlooking snow peaks.",
                stay: "Highland Valley Lodge"
              },
              {
                day: "Day 7 – 9",
                title: "The Coast · Lamu Archipelago",
                desc: "Private charter southeast to Manda Airstrip. Private boat transfer to a secluded Swahili coastal villa. Gentle ocean swims, fresh seafood, and time to follow a gentler rhythm.",
                stay: "Private Oceanfront Swahili Villa"
              },
              {
                day: "Day 10",
                title: "Homeward · Nairobi Departure",
                desc: "Afternoon flight back to Nairobi Wilson. VIP tarmac escort and executive transfer to Jomo Kenyatta International Airport for your onward international flight.",
                stay: "Dayroom at Hemingway's Karen"
              }
            ]
          }
        };
      } else if (lower.includes('migration') || lower.includes('photo')) {
        reply = {
          role: 'concierge',
          content: `For photographic focus and the Great Migration, timing and location are everything. We position you in private conservancies bordering the river corridors between July and October, utilizing custom open-sided vehicles with gimbal mounts and beanbags.`,
          dossier: {
            title: "The Great Migration Private Photographic Expedition",
            duration: "7 Days / 6 Nights",
            pacing: "Intensive Wildlife Observation · Unhurried Camp Comfort",
            routing: ["Nairobi (WIL)", "Mara Triangle", "Mara North Conservancy"],
            highlights: [
              "Off-road driving permits in private concessions",
              "Specialist Gold-level photographic naturalist guide",
              "Guaranteed private vehicle with low-angle camera mounts",
              "Dawn hot air balloon flight over crossing points"
            ],
            indicativePrice: "$14,200 – $19,800 per guest",
            days: [
              {
                day: "Day 1 – 3",
                title: "Mara Triangle · River Confluence",
                desc: "Positioned along strategic crossing bends. Patience is rewarded as thousands of wildebeest and zebra amass at the riverbanks.",
                stay: "Private Mobile Migration Camp"
              },
              {
                day: "Day 4 – 6",
                title: "Mara North Conservancy · Apex Predator Territory",
                desc: "Tracking resident leopard and lion prides. Off-road access allows unobtrusive close encounters without other tourist vehicles in sight.",
                stay: "Riverfront Canvas Suite"
              },
              {
                day: "Day 7",
                title: "Return to Nairobi",
                desc: "Final morning game drive, bush breakfast, and private return flight to Nairobi Wilson Airport.",
                stay: "VIP Airport Concierge"
              }
            ]
          }
        };
      } else if (lower.includes('luggage') || lower.includes('weight') || lower.includes('wilson') || lower.includes('flight')) {
        reply = {
          role: 'concierge',
          content: `Bush aviation in Kenya is held to strict safety standards:\n\n• **Luggage Weight:** Scheduled bush planes (e.g. Cessna 208 Grand Caravan) enforce a standard limit of 15 kg (33 lbs) per passenger, inclusive of camera gear and hand luggage.\n\n• **Luggage Type:** Bags must be 100% soft-sided duffels (no hard-shell suitcases or rigid internal frames) to fit into the aircraft's belly pods.\n\n• **Private Charters:** If you require additional equipment, heavy photographic lenses, or desire zero luggage restrictions, we arrange a private charter buyout with upgraded payload allowances.\n\n• **Storage:** Any excess luggage or city clothing is securely stored in our private lounge at Wilson Airport and returned to you prior to international departure.`
        };
      } else {
        reply = {
          role: 'concierge',
          content: `Thank you for sharing your thoughts. At Safari LAX, we consider the route, the pace, and the welcome as carefully as the places themselves.\n\nWould you like me to prepare an initial day-by-day expedition dossier, or would you prefer to explore specific travel dates and conservancy choices?`
        };
      }

      setMessages([...newMessages, reply]);
    }, 600);
  };

  const handleKycSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setKycCompleted(true);
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm p-4 sm:p-6 animate-fadeIn">
      <div className="relative w-full max-w-4xl h-[90vh] max-h-[850px] bg-[#0E0E0D] border border-[#B8B3AA]/30 text-[#F7F4EC] flex flex-col shadow-2xl overflow-hidden">
        
        {/* Modal Top Bar */}
        <div className="px-6 py-4 border-b border-white/10 flex items-center justify-between bg-[#0E0E0D]">
          <div className="flex items-center gap-3">
            <div className="w-2.5 h-2.5 rounded-full bg-[#E6E0D4] animate-pulse"></div>
            <div>
              <h2 className="font-serif text-lg tracking-[0.1em] text-[#F7F4EC]">
                SAFARI LAX · AUTONOMOUS ATELIER
              </h2>
              <p className="text-[10px] tracking-[0.2em] text-[#B8B3AA] uppercase">
                Bespoke Expedition Intelligence · 24/7
              </p>
            </div>
          </div>
          
          <div className="flex items-center gap-4">
            <div className="hidden sm:flex items-center gap-2 border border-[#B8B3AA]/30 p-1 text-[10px] uppercase tracking-[0.18em]">
              <button
                onClick={() => setActiveTab('dialogue')}
                className={`px-3 py-1 transition-colors ${
                  activeTab === 'dialogue' ? 'bg-[#F7F4EC] text-[#0E0E0D] font-medium' : 'text-[#B8B3AA] hover:text-[#F7F4EC]'
                }`}
              >
                Expedition Chat
              </button>
              <button
                onClick={() => setActiveTab('onboarding')}
                className={`px-3 py-1 transition-colors ${
                  activeTab === 'onboarding' ? 'bg-[#F7F4EC] text-[#0E0E0D] font-medium' : 'text-[#B8B3AA] hover:text-[#F7F4EC]'
                }`}
              >
                VIP Onboarding
              </button>
            </div>
            
            <button
              onClick={onClose}
              className="p-1.5 text-[#B8B3AA] hover:text-[#F7F4EC] transition-colors cursor-pointer"
              aria-label="Close atelier"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Content Area */}
        {activeTab === 'dialogue' ? (
          <div className="flex-1 flex flex-col overflow-hidden">
            
            {/* Messages Scroll Area */}
            <div className="flex-1 overflow-y-auto p-6 space-y-6">
              {messages.map((msg, index) => (
                <div
                  key={index}
                  className={`flex flex-col ${msg.role === 'guest' ? 'items-end' : 'items-start'}`}
                >
                  <div className="text-[9.5px] uppercase tracking-[0.2em] text-[#B8B3AA] mb-1.5 px-1">
                    {msg.role === 'guest' ? 'You' : 'Safari LAX Concierge'}
                  </div>

                  <div
                    className={`max-w-[85%] sm:max-w-[78%] px-5 py-4 text-sm leading-relaxed ${
                      msg.role === 'guest'
                        ? 'bg-[#E6E0D4] text-[#0E0E0D] font-normal'
                        : 'bg-[#1a1918] text-[#F7F4EC] border border-white/5 font-light'
                    }`}
                  >
                    <p className="whitespace-pre-line">{msg.content}</p>

                    {/* Synthesized Expedition Dossier Card */}
                    {msg.dossier && (
                      <div className="mt-5 pt-5 border-t border-white/10 space-y-4">
                        <div className="bg-[#0E0E0D] p-4 border border-[#B8B3AA]/30">
                          <span className="text-[9px] uppercase tracking-[0.25em] text-[#B8B3AA] block mb-1">
                            SYNTHESIZED BESPOKE DOSSIER
                          </span>
                          <h4 className="font-serif text-xl text-[#F7F4EC] mb-1">
                            {msg.dossier.title}
                          </h4>
                          <div className="flex flex-wrap gap-x-4 gap-y-1 text-xs text-[#B8B3AA] font-light">
                            <span>{msg.dossier.duration}</span>
                            <span>·</span>
                            <span>{msg.dossier.pacing}</span>
                          </div>
                        </div>

                        {/* Routing Vector */}
                        <div className="text-xs text-[#B8B3AA]">
                          <span className="text-[9px] uppercase tracking-[0.2em] text-[#E6E0D4] block mb-1.5 flex items-center gap-1.5">
                            <Plane className="w-3 h-3 text-[#E6E0D4]" /> FLIGHT LOGISTICS &amp; CONCESSIONS
                          </span>
                          <div className="flex flex-wrap items-center gap-2">
                            {msg.dossier.routing.map((stop, sIdx) => (
                              <React.Fragment key={sIdx}>
                                <span className="bg-[#242321] px-2 py-0.5 text-[11px] text-[#F7F4EC]">
                                  {stop}
                                </span>
                                {sIdx < msg.dossier.routing.length - 1 && (
                                  <span className="text-[#B8B3AA]">→</span>
                                )}
                              </React.Fragment>
                            ))}
                          </div>
                        </div>

                        {/* Day by Day */}
                        <div className="space-y-3 pt-2">
                          {msg.dossier.days.map((dayItem, dIdx) => (
                            <div key={dIdx} className="bg-[#0E0E0D]/60 p-3 border-l-2 border-[#E6E0D4]">
                              <div className="flex justify-between items-baseline mb-1">
                                <span className="font-serif text-sm text-[#F7F4EC]">
                                  {dayItem.title}
                                </span>
                                <span className="text-[10px] text-[#B8B3AA] uppercase tracking-wider">
                                  {dayItem.day}
                                </span>
                              </div>
                              <p className="text-xs text-[#B8B3AA] font-light leading-relaxed mb-2">
                                {dayItem.desc}
                              </p>
                              <span className="text-[9.5px] uppercase tracking-wider text-[#E6E0D4]/80">
                                Accommodation: {dayItem.stay}
                              </span>
                            </div>
                          ))}
                        </div>

                        {/* Pricing & 1-Click Action */}
                        <div className="pt-3 border-t border-white/10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
                          <div>
                            <span className="text-[9px] uppercase tracking-[0.2em] text-[#B8B3AA] block">
                              ESTIMATED EXPEDITION INVESTMENT
                            </span>
                            <span className="font-serif text-sm text-[#F7F4EC]">
                              {msg.dossier.indicativePrice}
                            </span>
                          </div>

                          <button
                            onClick={() => {
                              if (onBookHold) onBookHold(msg.dossier?.title || 'Safari LAX Journey');
                              setActiveTab('onboarding');
                            }}
                            className="text-[10.5px] uppercase tracking-[0.2em] px-4 py-2 border border-[#E6E0D4] bg-[#F7F4EC] text-[#0E0E0D] hover:bg-[#E6E0D4] transition-all cursor-pointer font-medium"
                          >
                            REQUEST PROVISIONAL 48-HR HOLD
                          </button>
                        </div>

                      </div>
                    )}

                  </div>
                </div>
              ))}
            </div>

            {/* Quick Prompts Bar */}
            <div className="px-6 py-2 border-t border-white/5 bg-[#0E0E0D] flex items-center gap-2 overflow-x-auto">
              <span className="text-[9px] uppercase tracking-[0.2em] text-[#B8B3AA] whitespace-nowrap hidden sm:inline">
                Suggested Prompts:
              </span>
              {quickPrompts.map((prompt, pIdx) => (
                <button
                  key={pIdx}
                  onClick={() => handleSend(prompt)}
                  className="text-[10px] whitespace-nowrap px-3 py-1 bg-[#1a1918] text-[#B8B3AA] hover:text-[#F7F4EC] hover:bg-[#262422] transition-colors border border-white/5 cursor-pointer"
                >
                  {prompt}
                </button>
              ))}
            </div>

            {/* Input Bar */}
            <div className="p-4 sm:p-6 border-t border-white/10 bg-[#0E0E0D]">
              <div className="flex items-center gap-3">
                <input
                  type="text"
                  placeholder="Ask about dates, private air charters, wildlife migrations, or tailored itineraries..."
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  onKeyDown={(e) => e.key === 'Enter' && handleSend()}
                  className="flex-1 bg-[#1a1918] border border-[#B8B3AA]/40 px-4 py-3 text-sm text-[#F7F4EC] placeholder-[#B8B3AA]/50 focus:outline-none focus:border-[#E6E0D4] transition-colors"
                />
                <button
                  onClick={() => handleSend()}
                  className="bg-[#F7F4EC] text-[#0E0E0D] px-5 py-3 hover:bg-[#E6E0D4] transition-colors cursor-pointer flex items-center gap-2 text-xs uppercase tracking-[0.18em] font-medium"
                >
                  <Send className="w-4 h-4" />
                  <span className="hidden sm:inline">Send</span>
                </button>
              </div>
            </div>

          </div>
        ) : (
          /* VIP Onboarding & KYC Simulator Tab */
          <div className="flex-1 overflow-y-auto p-6 sm:p-10 bg-[#0E0E0D]">
            <div className="max-w-2xl mx-auto space-y-8">
              <div>
                <span className="text-[9.5px] uppercase tracking-[0.25em] text-[#B8B3AA] block mb-2">
                  AUTONOMOUS GUEST ONBOARDING &amp; COMPLIANCE
                </span>
                <h3 className="font-serif text-3xl text-[#F7F4EC]">
                  Pre-Flight Manifest &amp; Health Clearance
                </h3>
                <p className="text-sm text-[#B8B3AA] font-light mt-2 leading-relaxed">
                  In accordance with Kenya Civil Aviation Authority (KCAA) bush airstrip manifests and private conservancy guest regulations, your details are encrypted and forwarded directly to flight dispatch and camp executive chefs.
                </p>
              </div>

              {kycCompleted ? (
                <div className="p-8 border border-[#E6E0D4] bg-[#1a1918] text-center space-y-4">
                  <CheckCircle2 className="w-10 h-10 text-[#E6E0D4] mx-auto" />
                  <h4 className="font-serif text-2xl text-[#F7F4EC]">
                    Guest Manifest Profile Verified
                  </h4>
                  <p className="text-sm text-[#B8B3AA] font-light max-w-md mx-auto">
                    Your details have been synchronized. The provisional 48-hour reservation hold has been placed on camp allocations and Wilson private flight slots.
                  </p>
                  <div className="pt-4">
                    <button
                      onClick={() => setActiveTab('dialogue')}
                      className="text-xs uppercase tracking-[0.2em] px-6 py-2.5 border border-[#B8B3AA] text-[#F7F4EC] hover:bg-[#F7F4EC] hover:text-[#0E0E0D] transition-all"
                    >
                      RETURN TO EXPEDITION CHAT
                    </button>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleKycSubmit} className="space-y-4">
                  <div>
                    <label className="text-[10px] uppercase tracking-[0.2em] text-[#B8B3AA] block mb-1.5">
                      Full Legal Name (as per Passport)
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Lord Alexander Sinclair"
                      value={kycData.guestName}
                      onChange={(e) => setKycData({ ...kycData, guestName: e.target.value })}
                      className="w-full bg-[#1a1918] border border-[#B8B3AA]/40 px-4 py-3 text-sm text-[#F7F4EC] placeholder-[#B8B3AA]/40 focus:outline-none focus:border-[#E6E0D4]"
                    />
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="text-[10px] uppercase tracking-[0.2em] text-[#B8B3AA] block mb-1.5">
                        Passport Number
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="e.g. P12345678"
                        value={kycData.passportNumber}
                        onChange={(e) => setKycData({ ...kycData, passportNumber: e.target.value })}
                        className="w-full bg-[#1a1918] border border-[#B8B3AA]/40 px-4 py-3 text-sm text-[#F7F4EC] placeholder-[#B8B3AA]/40 focus:outline-none focus:border-[#E6E0D4]"
                      />
                    </div>
                    <div>
                      <label className="text-[10px] uppercase tracking-[0.2em] text-[#B8B3AA] block mb-1.5">
                        Nationality
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="e.g. United Kingdom"
                        value={kycData.nationality}
                        onChange={(e) => setKycData({ ...kycData, nationality: e.target.value })}
                        className="w-full bg-[#1a1918] border border-[#B8B3AA]/40 px-4 py-3 text-sm text-[#F7F4EC] placeholder-[#B8B3AA]/40 focus:outline-none focus:border-[#E6E0D4]"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="text-[10px] uppercase tracking-[0.2em] text-[#B8B3AA] block mb-1.5">
                      Dietary Allergies &amp; Camp Chef Instructions
                    </label>
                    <input
                      type="text"
                      placeholder="e.g. Shellfish allergy, strict vegetarian, preference for vintage Bordeaux"
                      value={kycData.dietaryAllergies}
                      onChange={(e) => setKycData({ ...kycData, dietaryAllergies: e.target.value })}
                      className="w-full bg-[#1a1918] border border-[#B8B3AA]/40 px-4 py-3 text-sm text-[#F7F4EC] placeholder-[#B8B3AA]/40 focus:outline-none focus:border-[#E6E0D4]"
                    />
                  </div>

                  <div>
                    <label className="text-[10px] uppercase tracking-[0.2em] text-[#B8B3AA] block mb-1.5">
                      Emergency Contact (Name &amp; International Phone)
                    </label>
                    <input
                      type="text"
                      placeholder="e.g. Jane Sinclair (+44 20 7946 0991)"
                      value={kycData.emergencyContact}
                      onChange={(e) => setKycData({ ...kycData, emergencyContact: e.target.value })}
                      className="w-full bg-[#1a1918] border border-[#B8B3AA]/40 px-4 py-3 text-sm text-[#F7F4EC] placeholder-[#B8B3AA]/40 focus:outline-none focus:border-[#E6E0D4]"
                    />
                  </div>

                  <div className="pt-4">
                    <button
                      type="submit"
                      className="w-full bg-[#F7F4EC] text-[#0E0E0D] text-xs uppercase tracking-[0.24em] font-medium py-4 hover:bg-[#E6E0D4] transition-all cursor-pointer"
                    >
                      SUBMIT TO SAFARI DISPATCH &amp; HOLD INVENTORY
                    </button>
                  </div>
                </form>
              )}

            </div>
          </div>
        )}

      </div>
    </div>
  );
};
