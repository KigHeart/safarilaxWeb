import React, { useState } from 'react';
import { EnquiryData } from '../types';
import { BRAND } from '../data/brand';
import { Mail, Phone, MapPin, Globe, Clock, CheckCircle2, Send, Download, ShieldCheck, ArrowRight } from 'lucide-react';

interface ContactViewProps {
  initialJourneyTitle?: string;
  openProposal: () => void;
}

export const ContactView: React.FC<ContactViewProps> = ({
  initialJourneyTitle,
  openProposal
}) => {
  const [formData, setFormData] = useState<EnquiryData>({
    fullName: '',
    email: '',
    phone: '',
    countryOfResidence: '',
    travelDates: '',
    durationDays: '8-10 Days',
    adultsCount: 2,
    childrenCount: 0,
    budgetPerPerson: '$1,800 – $2,800 per guest/night',
    destinations: initialJourneyTitle ? [initialJourneyTitle] : ['Masai Mara Private Concessions'],
    journeyStyle: 'Classic Wildlife & Private Concession',
    specialRequests: initialJourneyTitle ? `Interested in tailoring the "${initialJourneyTitle}" itinerary.` : '',
    hearAboutUs: 'Private Referral / Editorial Mention'
  });

  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [referenceCode, setReferenceCode] = useState('');

  const destinationsOptions = [
    'Masai Mara Private Concessions (Mara North / Naboisho)',
    'Laikipia Plateau & Lewa Rhino Sanctuary',
    'Samburu & Namunyak Elephant Sanctuary',
    'Amboseli & Chyulu Hills (Kilimanjaro)',
    'Great Rift Valley & Lake Turkana (Helicopter)',
    'Lamu Archipelago or Diani Private Ocean Villa',
    'Rwanda Mountain Gorilla Trekking Extension'
  ];

  const handleDestinationToggle = (dest: string) => {
    if (formData.destinations.includes(dest)) {
      setFormData({
        ...formData,
        destinations: formData.destinations.filter((d) => d !== dest)
      });
    } else {
      setFormData({
        ...formData,
        destinations: [...formData.destinations, dest]
      });
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);

    // Generate unique inquiry reference
    const ref = `SLX-${new Date().getFullYear()}-${Math.floor(1000 + Math.random() * 9000)}`;
    setReferenceCode(ref);

    // Simulate dispatch to bookings@safarilax.world
    setTimeout(() => {
      setSubmitting(false);
      setSubmitted(true);
      window.scrollTo({ top: 150, behavior: 'smooth' });
    }, 800);
  };

  // Generate mailto link for direct sending backup
  const mailtoSubject = encodeURIComponent(`Private Safari Enquiry [Ref: ${referenceCode || 'SLX-Direct'}] - ${formData.fullName}`);
  const mailtoBody = encodeURIComponent(
    `Dear Safari LAX Bookings Desk,\n\n` +
    `I am submitting an unhurried safari journey enquiry:\n\n` +
    `Full Name: ${formData.fullName}\n` +
    `Email: ${formData.email}\n` +
    `Phone: ${formData.phone}\n` +
    `Country of Residence: ${formData.countryOfResidence}\n` +
    `Target Travel Dates / Season: ${formData.travelDates}\n` +
    `Trip Length: ${formData.durationDays}\n` +
    `Party Size: ${formData.adultsCount} Adults, ${formData.childrenCount} Children\n` +
    `Indicative Nightly Budget: ${formData.budgetPerPerson}\n` +
    `Selected Concessions: ${formData.destinations.join(', ')}\n` +
    `Style: ${formData.journeyStyle}\n\n` +
    `Notes & Bespoke Wishes:\n${formData.specialRequests}\n\n` +
    `Kind regards,\n${formData.fullName}`
  );

  const downloadSummaryDossier = () => {
    const summary = 
`=========================================
SAFARI LAX — PRIVATE AFRICA, UNHURRIED
Private Journey Planning Dossier
=========================================
Reference Code: ${referenceCode}
Client Name: ${formData.fullName}
Email: ${formData.email}
Phone: ${formData.phone}
Country: ${formData.countryOfResidence}
Target Travel Window: ${formData.travelDates}
Duration: ${formData.durationDays}
Guests: ${formData.adultsCount} Adults, ${formData.childrenCount} Children
Budget Guidance: ${formData.budgetPerPerson}

Selected Concessions & Ecosystems:
${formData.destinations.map(d => ` - ${d}`).join('\n')}

Special Requests & Aviation Preferences:
${formData.specialRequests || 'Standard bespoke protocol'}

Routing Address: ${BRAND.bookingEmail}
Registered Domain: ${BRAND.domain}
Headquarters: Karen Sanctuary Lane, Nairobi, Kenya
=========================================`;

    const blob = new Blob([summary], { type: 'text/plain;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = `Safari_LAX_Enquiry_${referenceCode || 'Draft'}.txt`;
    link.click();
    URL.revokeObjectURL(url);
  };

  return (
    <div className="pt-24 pb-20 space-y-20">
      
      {/* HEADER SECTION */}
      <section className="max-w-4xl mx-auto px-6 text-center space-y-5">
        <div className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.3em] text-[#c5a880] font-medium">
          <span>Private Concierge Desk</span>
          <span>·</span>
          <span>Direct to Nairobi HQ</span>
        </div>

        <h1 className="font-serif text-4xl sm:text-6xl text-[#FAF8F5] font-normal leading-tight text-balance">
          Initiate Your <br />
          <span className="italic text-[#c5a880] font-light">Private Enquiry</span>
        </h1>

        <p className="text-sm sm:text-base text-[#ded7c8] font-light leading-relaxed max-w-2xl mx-auto">
          Every journey begins with a thoughtful dialogue. Please share your preliminary thoughts below. Our private safari planners in Nairobi will design a tailored day-by-day blueprint and quote.
        </p>

        <div className="pt-2 flex items-center justify-center gap-3 text-xs text-[#8e8a80]">
          <span className="flex items-center gap-1.5">
            <Mail className="w-3.5 h-3.5 text-[#c5a880]" />
            <span>Target Inbox: <strong className="text-[#ded7c8]">{BRAND.bookingEmail}</strong></span>
          </span>
          <span>·</span>
          <span>Guaranteed response within 24 hours</span>
        </div>
      </section>

      {/* FORM AND CONTACT INFORMATION GRID */}
      <section className="max-w-7xl mx-auto px-6 md:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* LEFT: PRIVATE ENQUIRY FORM */}
          <div className="lg:col-span-8 bg-[#141311] border border-[#24221d] p-6 sm:p-10 shadow-2xl relative">
            
            {submitted ? (
              <div className="py-12 px-4 text-center space-y-6 animate-in fade-in zoom-in-95 duration-300">
                <div className="w-16 h-16 bg-[#211f19] border border-[#c5a880] rounded-full mx-auto flex items-center justify-center text-[#c5a880]">
                  <CheckCircle2 className="w-8 h-8" />
                </div>

                <div className="space-y-2">
                  <div className="text-xs uppercase tracking-[0.25em] text-[#c5a880] font-medium">
                    Enquiry Successfully Routed
                  </div>
                  <h3 className="font-serif text-3xl text-[#FAF8F5]">
                    Asante Sana, {formData.fullName}
                  </h3>
                  <p className="text-sm text-[#ded7c8] max-w-lg mx-auto leading-relaxed">
                    Your bespoke travel dossier has been compiled and routed directly to our private booking desk at <strong className="text-[#c5a880]">{BRAND.bookingEmail}</strong>.
                  </p>
                </div>

                {/* Dossier Code Card */}
                <div className="bg-[#181613] border border-[#2a2822] p-5 max-w-md mx-auto text-left space-y-2 text-xs">
                  <div className="flex justify-between items-center text-[#8e8a80]">
                    <span>Reference Dossier:</span>
                    <span className="font-mono text-[#c5a880] font-medium text-sm">{referenceCode}</span>
                  </div>
                  <div className="flex justify-between items-center text-[#8e8a80]">
                    <span>Target Inbox:</span>
                    <span className="text-[#FAF8F5] font-mono">{BRAND.bookingEmail}</span>
                  </div>
                  <div className="flex justify-between items-center text-[#8e8a80]">
                    <span>Party:</span>
                    <span className="text-[#FAF8F5]">{formData.adultsCount} Adults, {formData.childrenCount} Children</span>
                  </div>
                  <div className="flex justify-between items-center text-[#8e8a80]">
                    <span>Estimated Length:</span>
                    <span className="text-[#FAF8F5]">{formData.durationDays}</span>
                  </div>
                </div>

                {/* Post Submit Actions */}
                <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
                  <a
                    href={`mailto:${BRAND.bookingEmail}?subject=${mailtoSubject}&body=${mailtoBody}`}
                    className="w-full sm:w-auto px-6 py-3 bg-[#c5a880] text-[#0e0d0b] text-xs uppercase tracking-[0.2em] font-medium hover:bg-[#d4b896] transition-colors flex items-center justify-center gap-2"
                  >
                    <Mail className="w-3.5 h-3.5" />
                    <span>Open in Email Client</span>
                  </a>

                  <button
                    onClick={downloadSummaryDossier}
                    className="w-full sm:w-auto px-6 py-3 border border-[#2e2a22] text-[#FAF8F5] text-xs uppercase tracking-[0.2em] hover:bg-[#201e19] transition-colors flex items-center justify-center gap-2"
                  >
                    <Download className="w-3.5 h-3.5 text-[#c5a880]" />
                    <span>Download Summary Dossier</span>
                  </button>
                </div>

                <div className="pt-6">
                  <button
                    onClick={() => setSubmitted(false)}
                    className="text-xs text-[#8e8a80] hover:text-[#FAF8F5] underline underline-offset-4"
                  >
                    Submit an additional journey request
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-8">
                
                {/* Section 1: Guest Information */}
                <div className="space-y-4">
                  <div className="text-xs uppercase tracking-[0.2em] text-[#c5a880] font-medium border-b border-[#24221d] pb-2">
                    01. Principal Traveler Information
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-1.5">
                      <label className="block text-xs text-[#a8a396]">Full Name *</label>
                      <input
                        type="text"
                        required
                        value={formData.fullName}
                        onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                        placeholder="e.g. Lady Eleanor Vance"
                        className="w-full bg-[#181613] border border-[#262420] text-sm text-[#FAF8F5] px-3.5 py-2.5 focus:outline-none focus:border-[#c5a880]"
                      />
                    </div>

                    <div className="space-y-1.5">
                      <label className="block text-xs text-[#a8a396]">Email Address *</label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="e.g. eleanor@vance-holdings.co.uk"
                        className="w-full bg-[#181613] border border-[#262420] text-sm text-[#FAF8F5] px-3.5 py-2.5 focus:outline-none focus:border-[#c5a880]"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-1.5">
                      <label className="block text-xs text-[#a8a396]">Phone / WhatsApp (with country code) *</label>
                      <input
                        type="tel"
                        required
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        placeholder="+44 7700 900123"
                        className="w-full bg-[#181613] border border-[#262420] text-sm text-[#FAF8F5] px-3.5 py-2.5 focus:outline-none focus:border-[#c5a880]"
                      />
                    </div>

                    <div className="space-y-1.5">
                      <label className="block text-xs text-[#a8a396]">Country of Residence</label>
                      <input
                        type="text"
                        value={formData.countryOfResidence}
                        onChange={(e) => setFormData({ ...formData, countryOfResidence: e.target.value })}
                        placeholder="e.g. United Kingdom / United States"
                        className="w-full bg-[#181613] border border-[#262420] text-sm text-[#FAF8F5] px-3.5 py-2.5 focus:outline-none focus:border-[#c5a880]"
                      />
                    </div>
                  </div>
                </div>

                {/* Section 2: Journey Parameters */}
                <div className="space-y-4">
                  <div className="text-xs uppercase tracking-[0.2em] text-[#c5a880] font-medium border-b border-[#24221d] pb-2">
                    02. Expedition Timing & Party Size
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-1.5">
                      <label className="block text-xs text-[#a8a396]">Target Travel Dates or Preferred Month</label>
                      <input
                        type="text"
                        value={formData.travelDates}
                        onChange={(e) => setFormData({ ...formData, travelDates: e.target.value })}
                        placeholder="e.g. August 2026 or Early Autumn"
                        className="w-full bg-[#181613] border border-[#262420] text-sm text-[#FAF8F5] px-3.5 py-2.5 focus:outline-none focus:border-[#c5a880]"
                      />
                    </div>

                    <div className="space-y-1.5">
                      <label className="block text-xs text-[#a8a396]">Estimated Duration</label>
                      <select
                        value={formData.durationDays}
                        onChange={(e) => setFormData({ ...formData, durationDays: e.target.value })}
                        className="w-full bg-[#181613] border border-[#262420] text-sm text-[#FAF8F5] px-3.5 py-2.5 focus:outline-none focus:border-[#c5a880]"
                      >
                        <option value="6-7 Days (Single Sanctuary)">6-7 Days (Single Sanctuary)</option>
                        <option value="8-10 Days (Quintessential Classic)">8-10 Days (Quintessential Classic)</option>
                        <option value="11-14 Days (Grand Unhurried Odyssey)">11-14 Days (Grand Unhurried Odyssey)</option>
                        <option value="15+ Days (East Africa & Coastal Archipelago)">15+ Days (East Africa & Coastal Archipelago)</option>
                      </select>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-1.5">
                      <label className="block text-xs text-[#a8a396]">Adult Travelers (Age 16+)</label>
                      <input
                        type="number"
                        min="1"
                        max="24"
                        value={formData.adultsCount}
                        onChange={(e) => setFormData({ ...formData, adultsCount: parseInt(e.target.value) || 1 })}
                        className="w-full bg-[#181613] border border-[#262420] text-sm text-[#FAF8F5] px-3.5 py-2.5 focus:outline-none focus:border-[#c5a880]"
                      />
                    </div>

                    <div className="space-y-1.5">
                      <label className="block text-xs text-[#a8a396]">Children (Under 16)</label>
                      <input
                        type="number"
                        min="0"
                        max="12"
                        value={formData.childrenCount}
                        onChange={(e) => setFormData({ ...formData, childrenCount: parseInt(e.target.value) || 0 })}
                        className="w-full bg-[#181613] border border-[#262420] text-sm text-[#FAF8F5] px-3.5 py-2.5 focus:outline-none focus:border-[#c5a880]"
                      />
                    </div>
                  </div>
                </div>

                {/* Section 3: Concessions & Preferences */}
                <div className="space-y-4">
                  <div className="text-xs uppercase tracking-[0.2em] text-[#c5a880] font-medium border-b border-[#24221d] pb-2">
                    03. Concessions & Indicative Tier
                  </div>

                  <div className="space-y-2">
                    <label className="block text-xs text-[#a8a396]">
                      Ecosystems of Interest (Select all that apply)
                    </label>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                      {destinationsOptions.map((opt) => {
                        const checked = formData.destinations.includes(opt);
                        return (
                          <button
                            key={opt}
                            type="button"
                            onClick={() => handleDestinationToggle(opt)}
                            className={`p-2.5 text-left text-xs border transition-colors flex items-start gap-2 ${
                              checked
                                ? 'bg-[#222019] border-[#c5a880] text-[#FAF8F5]'
                                : 'bg-[#181613] border-[#262420] text-[#8e8a80] hover:text-[#FAF8F5]'
                            }`}
                          >
                            <span className={`w-3.5 h-3.5 rounded-sm border flex items-center justify-center shrink-0 mt-0.5 ${checked ? 'bg-[#c5a880] border-[#c5a880] text-[#0e0d0b]' : 'border-[#3a372e]'}`}>
                              {checked && '✓'}
                            </span>
                            <span className="leading-snug">{opt}</span>
                          </button>
                        );
                      })}
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-1.5">
                      <label className="block text-xs text-[#a8a396]">Indicative Nightly Investment Level</label>
                      <select
                        value={formData.budgetPerPerson}
                        onChange={(e) => setFormData({ ...formData, budgetPerPerson: e.target.value })}
                        className="w-full bg-[#181613] border border-[#262420] text-sm text-[#FAF8F5] px-3.5 py-2.5 focus:outline-none focus:border-[#c5a880]"
                      >
                        <option value="$1,500 – $2,200 per guest/night (Private Concession Luxury)">$1,500 – $2,200 per guest/night (Private Concession Luxury)</option>
                        <option value="$2,200 – $3,500 per guest/night (Premier Tented Suites & Charters)">$2,200 – $3,500 per guest/night (Premier Tented Suites & Charters)</option>
                        <option value="$3,500+ per guest/night (Exclusive Bush Villa Buyout / Helicopter)">$3,500+ per guest/night (Exclusive Bush Villa Buyout / Helicopter)</option>
                      </select>
                    </div>

                    <div className="space-y-1.5">
                      <label className="block text-xs text-[#a8a396]">Primary Travel Theme</label>
                      <select
                        value={formData.journeyStyle}
                        onChange={(e) => setFormData({ ...formData, journeyStyle: e.target.value })}
                        className="w-full bg-[#181613] border border-[#262420] text-sm text-[#FAF8F5] px-3.5 py-2.5 focus:outline-none focus:border-[#c5a880]"
                      >
                        <option value="Classic Wildlife & Private Concession">Classic Wildlife & Private Concession</option>
                        <option value="Photographic Specialist & Wildlife Filming">Photographic Specialist & Wildlife Filming</option>
                        <option value="Helicopter Aerial Expedition">Helicopter Aerial Expedition</option>
                        <option value="Romantic Honeymoon & Anniversary">Romantic Honeymoon & Anniversary</option>
                        <option value="Family Exclusive Estate Buyout">Family Exclusive Estate Buyout</option>
                      </select>
                    </div>
                  </div>

                  <div className="space-y-1.5">
                    <label className="block text-xs text-[#a8a396]">
                      Special Wishes, Flight Logistics or Dietary Notes
                    </label>
                    <textarea
                      rows={3}
                      value={formData.specialRequests}
                      onChange={(e) => setFormData({ ...formData, specialRequests: e.target.value })}
                      placeholder="Please note any particular wildlife species (e.g. pangolin, aardvark, rhinos), private aviation requests, or special milestone celebrations."
                      className="w-full bg-[#181613] border border-[#262420] text-sm text-[#FAF8F5] p-3.5 focus:outline-none focus:border-[#c5a880]"
                    />
                  </div>
                </div>

                {/* Dispatch Button */}
                <div className="pt-4 border-t border-[#24221d] flex flex-col sm:flex-row items-center justify-between gap-4">
                  <div className="text-xs text-[#8e8a80]">
                    By submitting, your request routes directly to <span className="text-[#c5a880]">{BRAND.bookingEmail}</span>.
                  </div>

                  <button
                    type="submit"
                    disabled={submitting}
                    className="w-full sm:w-auto px-8 py-3.5 bg-[#c5a880] text-[#0e0d0b] text-xs uppercase tracking-[0.2em] font-medium hover:bg-[#d4b896] transition-colors flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50"
                  >
                    {submitting ? (
                      <span>Preparing Itinerary Dossier...</span>
                    ) : (
                      <>
                        <Send className="w-3.5 h-3.5" />
                        <span>Send Private Enquiry</span>
                      </>
                    )}
                  </button>
                </div>

              </form>
            )}

          </div>

          {/* RIGHT: NAIROBI HQ & CONCIERGE INFORMATION */}
          <div className="lg:col-span-4 space-y-6">
            
            {/* Headquarters Card */}
            <div className="bg-[#141311] border border-[#24221d] p-6 sm:p-8 space-y-6">
              <div>
                <div className="text-[10px] uppercase tracking-[0.25em] text-[#c5a880] font-medium">
                  {BRAND.teamTitle}
                </div>
                <h3 className="font-serif text-2xl text-[#FAF8F5] mt-1">
                  Nairobi Headquarters
                </h3>
              </div>

              <div className="space-y-4 text-xs text-[#ded7c8]">
                <div className="flex items-start gap-3">
                  <MapPin className="w-4 h-4 text-[#c5a880] shrink-0 mt-0.5" />
                  <div>
                    <strong className="block text-[#FAF8F5]">Physical Office:</strong>
                    <span>{BRAND.officeAddress}</span>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Mail className="w-4 h-4 text-[#c5a880] shrink-0 mt-0.5" />
                  <div>
                    <strong className="block text-[#FAF8F5]">Private Bookings:</strong>
                    <a href={`mailto:${BRAND.bookingEmail}`} className="hover:text-[#c5a880] font-mono text-[11px] underline">
                      {BRAND.bookingEmail}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Mail className="w-4 h-4 text-[#c5a880] shrink-0 mt-0.5" />
                  <div>
                    <strong className="block text-[#FAF8F5]">General Information:</strong>
                    <a href={`mailto:${BRAND.infoEmail}`} className="hover:text-[#c5a880] font-mono text-[11px] underline">
                      {BRAND.infoEmail}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Phone className="w-4 h-4 text-[#c5a880] shrink-0 mt-0.5" />
                  <div>
                    <strong className="block text-[#FAF8F5]">Direct Telephone:</strong>
                    <span>{BRAND.phone}</span>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Clock className="w-4 h-4 text-[#c5a880] shrink-0 mt-0.5" />
                  <div>
                    <strong className="block text-[#FAF8F5]">Operating Hours:</strong>
                    <span>{BRAND.hours}</span>
                  </div>
                </div>
              </div>

              <div className="p-4 bg-[#181613] border border-[#2a2720] space-y-2">
                <div className="text-[11px] uppercase tracking-wider text-[#c5a880] font-medium flex items-center gap-1.5">
                  <ShieldCheck className="w-3.5 h-3.5" />
                  <span>Discreet Confidentiality</span>
                </div>
                <p className="text-xs text-[#8e8a80] leading-relaxed">
                  We frequently accommodate high-profile and discreet guests. Private charter flight plans and guest names are handled under strict non-disclosure protocols.
                </p>
              </div>
            </div>

            {/* Quick Handover Link Box */}
            <div className="bg-[#181613] border border-[#2a2720] p-6 space-y-3">
              <div className="text-[10px] uppercase tracking-wider text-[#c5a880] font-medium">
                Technical Handover & Setup
              </div>
              <h4 className="font-serif text-lg text-[#FAF8F5]">
                Namecheap DNS & WordPress Setup
              </h4>
              <p className="text-xs text-[#8e8a80] leading-relaxed">
                Review the step-by-step instructions for pointing safarilax.world while preserving active info@ and bookings@ email inboxes.
              </p>
              <button
                onClick={openProposal}
                className="text-xs text-[#c5a880] hover:text-[#FAF8F5] underline underline-offset-4 flex items-center gap-1 pt-1"
              >
                <span>Open Setup Dossier</span>
                <ArrowRight className="w-3 h-3" />
              </button>
            </div>

          </div>

        </div>
      </section>

    </div>
  );
};
