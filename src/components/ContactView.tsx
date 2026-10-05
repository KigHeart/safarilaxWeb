import React, { useState } from 'react';
import { EnquiryData } from '../types';
import { BRAND } from '../data/brand';
import { Mail, Phone, MapPin, Globe, Clock, CheckCircle2, Send, ShieldCheck } from 'lucide-react';

interface ContactViewProps {
  initialJourneyTitle?: string;
}

export const ContactView: React.FC<ContactViewProps> = ({
  initialJourneyTitle
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

    const ref = `SLX-${new Date().getFullYear()}-${Math.floor(1000 + Math.random() * 9000)}`;
    setReferenceCode(ref);

    setTimeout(() => {
      setSubmitting(false);
      setSubmitted(true);
      window.scrollTo({ top: 150, behavior: 'smooth' });
    }, 600);
  };

  const mailtoSubject = encodeURIComponent(`Private Safari Enquiry [${referenceCode || 'New'}] - ${formData.fullName}`);
  const mailtoBody = encodeURIComponent(
    `Dear Safari LAX Private Safari Desk,\n\n` +
    `I would like to consult on a private tailor-made safari in Kenya.\n\n` +
    `Reference: ${referenceCode}\n` +
    `Name: ${formData.fullName}\n` +
    `Email: ${formData.email}\n` +
    `Phone: ${formData.phone}\n` +
    `Country of Residence: ${formData.countryOfResidence}\n` +
    `Estimated Travel Window: ${formData.travelDates}\n` +
    `Duration: ${formData.durationDays}\n` +
    `Party Size: ${formData.adultsCount} Adults, ${formData.childrenCount} Children\n` +
    `Budget Guidance: ${formData.budgetPerPerson}\n` +
    `Selected Concessions:\n${formData.destinations.map(d => ` - ${d}`).join('\n')}\n\n` +
    `Notes & Bespoke Wishes:\n${formData.specialRequests}\n\n` +
    `Kind regards,\n${formData.fullName}`
  );

  return (
    <div className="pt-28 pb-24 space-y-20 bg-[#faf8f5] text-[#1c1a17]">
      
      {/* HEADER SECTION */}
      <section className="max-w-4xl mx-auto px-6 text-center space-y-5">
        <div className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.3em] text-[#997449] font-semibold">
          <span>Private Concierge Desk</span>
          <span>·</span>
          <span>Nairobi, Kenya</span>
        </div>

        <h1 className="font-serif text-4xl sm:text-6xl text-[#1c1a17] font-normal leading-tight text-balance">
          Commence Your <br />
          <span className="italic text-[#997449] font-light">Private Expedition</span>
        </h1>

        <p className="max-w-2xl mx-auto text-base text-[#5c564c] font-light leading-relaxed">
          Tell us about your travelers, ideal dates, and wildlife aspirations. A dedicated Safari LAX naturalist will respond personally within 24 hours.
        </p>
      </section>

      {/* FORM AND DIRECT DETAILS */}
      <section className="max-w-7xl mx-auto px-6 md:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          
          {/* Main Form Column */}
          <div className="lg:col-span-8 bg-white border border-[#e8e2d5] p-8 md:p-12 shadow-sm">
            {submitted ? (
              <div className="text-center py-12 space-y-6">
                <div className="w-16 h-16 bg-[#f5f0e6] border border-[#ded7c8] rounded-full flex items-center justify-center mx-auto text-[#997449]">
                  <CheckCircle2 className="w-8 h-8" />
                </div>

                <div className="space-y-2">
                  <div className="text-xs uppercase tracking-[0.25em] text-[#997449] font-semibold">
                    Enquiry Logged Under Protocol {referenceCode}
                  </div>
                  <h3 className="font-serif text-3xl sm:text-4xl text-[#1c1a17]">
                    Asante Sana, {formData.fullName.split(' ')[0]}
                  </h3>
                  <p className="text-sm text-[#5c564c] max-w-md mx-auto leading-relaxed">
                    Your bespoke journey request has been routed to our senior safari desk at Karen Sanctuary Lane in Nairobi.
                  </p>
                </div>

                <div className="bg-[#faf8f5] border border-[#e8e2d5] p-6 max-w-lg mx-auto text-left text-xs space-y-2.5">
                  <div className="flex justify-between items-center text-[#736f67]">
                    <span>Reference Code:</span>
                    <span className="text-[#1c1a17] font-mono font-semibold">{referenceCode}</span>
                  </div>
                  <div className="flex justify-between items-center text-[#736f67]">
                    <span>Target Inbox:</span>
                    <span className="text-[#1c1a17] font-mono">{BRAND.bookingEmail}</span>
                  </div>
                  <div className="flex justify-between items-center text-[#736f67]">
                    <span>Party:</span>
                    <span className="text-[#1c1a17]">{formData.adultsCount} Adults, {formData.childrenCount} Children</span>
                  </div>
                  <div className="flex justify-between items-center text-[#736f67]">
                    <span>Estimated Length:</span>
                    <span className="text-[#1c1a17]">{formData.durationDays}</span>
                  </div>
                </div>

                {/* Post Submit Actions */}
                <div className="flex items-center justify-center pt-4">
                  <a
                    href={`mailto:${BRAND.bookingEmail}?subject=${mailtoSubject}&body=${mailtoBody}`}
                    className="px-8 py-3.5 bg-[#1c1a17] text-[#faf8f5] text-xs uppercase tracking-[0.2em] font-medium hover:bg-[#997449] transition-colors flex items-center justify-center gap-2"
                  >
                    <Mail className="w-3.5 h-3.5 text-[#dfc8a2]" />
                    <span>Open in Email Client</span>
                  </a>
                </div>

                <div className="pt-6">
                  <button
                    onClick={() => setSubmitted(false)}
                    className="text-xs text-[#736f67] hover:text-[#1c1a17] underline underline-offset-4 cursor-pointer"
                  >
                    Submit an additional journey request
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-8">
                
                {/* Section 1: Guest Information */}
                <div className="space-y-4">
                  <div className="text-xs uppercase tracking-[0.2em] text-[#997449] font-semibold border-b border-[#f0eae0] pb-2">
                    01. Principal Traveler Information
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-1.5">
                      <label className="block text-xs text-[#5c564c] font-medium">Full Name *</label>
                      <input
                        type="text"
                        required
                        value={formData.fullName}
                        onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                        placeholder="e.g. Lady Eleanor Vance"
                        className="w-full p-3 bg-[#faf8f5] border border-[#ded7c8] text-xs text-[#1c1a17] focus:outline-none focus:border-[#997449]"
                      />
                    </div>

                    <div className="space-y-1.5">
                      <label className="block text-xs text-[#5c564c] font-medium">Direct Email *</label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="e.g. eleanor@vance-holdings.com"
                        className="w-full p-3 bg-[#faf8f5] border border-[#ded7c8] text-xs text-[#1c1a17] focus:outline-none focus:border-[#997449]"
                      />
                    </div>

                    <div className="space-y-1.5">
                      <label className="block text-xs text-[#5c564c] font-medium">Phone Number / WhatsApp *</label>
                      <input
                        type="tel"
                        required
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        placeholder="+44 7700 900077"
                        className="w-full p-3 bg-[#faf8f5] border border-[#ded7c8] text-xs text-[#1c1a17] focus:outline-none focus:border-[#997449]"
                      />
                    </div>

                    <div className="space-y-1.5">
                      <label className="block text-xs text-[#5c564c] font-medium">Country of Residence</label>
                      <input
                        type="text"
                        value={formData.countryOfResidence}
                        onChange={(e) => setFormData({ ...formData, countryOfResidence: e.target.value })}
                        placeholder="United Kingdom / United States"
                        className="w-full p-3 bg-[#faf8f5] border border-[#ded7c8] text-xs text-[#1c1a17] focus:outline-none focus:border-[#997449]"
                      />
                    </div>
                  </div>
                </div>

                {/* Section 2: Journey Logistics */}
                <div className="space-y-4">
                  <div className="text-xs uppercase tracking-[0.2em] text-[#997449] font-semibold border-b border-[#f0eae0] pb-2">
                    02. Journey Parameters & Timing
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                    <div className="space-y-1.5">
                      <label className="block text-xs text-[#5c564c] font-medium">Target Travel Dates</label>
                      <input
                        type="text"
                        value={formData.travelDates}
                        onChange={(e) => setFormData({ ...formData, travelDates: e.target.value })}
                        placeholder="e.g. August 2026 or Flexible"
                        className="w-full p-3 bg-[#faf8f5] border border-[#ded7c8] text-xs text-[#1c1a17] focus:outline-none focus:border-[#997449]"
                      />
                    </div>

                    <div className="space-y-1.5">
                      <label className="block text-xs text-[#5c564c] font-medium">Estimated Duration</label>
                      <select
                        value={formData.durationDays}
                        onChange={(e) => setFormData({ ...formData, durationDays: e.target.value })}
                        className="w-full p-3 bg-[#faf8f5] border border-[#ded7c8] text-xs text-[#1c1a17] focus:outline-none focus:border-[#997449]"
                      >
                        <option>6-7 Days (Focused)</option>
                        <option>8-10 Days (Unhurried Recommended)</option>
                        <option>11-14 Days (Grand Multi-Region)</option>
                        <option>15+ Days (East Africa Traverse)</option>
                      </select>
                    </div>

                    <div className="space-y-1.5">
                      <label className="block text-xs text-[#5c564c] font-medium">Travel Party</label>
                      <div className="flex gap-2">
                        <select
                          value={formData.adultsCount}
                          onChange={(e) => setFormData({ ...formData, adultsCount: Number(e.target.value) })}
                          className="w-1/2 p-3 bg-[#faf8f5] border border-[#ded7c8] text-xs text-[#1c1a17] focus:outline-none focus:border-[#997449]"
                        >
                          {[1,2,3,4,5,6,7,8,9,10].map(n => (
                            <option key={n} value={n}>{n} Adults</option>
                          ))}
                        </select>
                        <select
                          value={formData.childrenCount}
                          onChange={(e) => setFormData({ ...formData, childrenCount: Number(e.target.value) })}
                          className="w-1/2 p-3 bg-[#faf8f5] border border-[#ded7c8] text-xs text-[#1c1a17] focus:outline-none focus:border-[#997449]"
                        >
                          {[0,1,2,3,4,5].map(n => (
                            <option key={n} value={n}>{n} Kids</option>
                          ))}
                        </select>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Section 3: Desired Sanctuaries */}
                <div className="space-y-4">
                  <div className="text-xs uppercase tracking-[0.2em] text-[#997449] font-semibold border-b border-[#f0eae0] pb-2">
                    03. Concessions & Ecosystems of Interest
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                    {destinationsOptions.map((dest) => {
                      const isSelected = formData.destinations.includes(dest);
                      return (
                        <button
                          type="button"
                          key={dest}
                          onClick={() => handleDestinationToggle(dest)}
                          className={`p-3 text-left text-xs transition-all flex items-center justify-between border cursor-pointer ${
                            isSelected
                              ? 'bg-[#f5f0e6] border-[#997449] text-[#1c1a17] font-medium'
                              : 'bg-[#faf8f5] border-[#ded7c8] text-[#5c564c] hover:border-[#b08f65]'
                          }`}
                        >
                          <span className="truncate pr-2">{dest}</span>
                          <span className={`w-3.5 h-3.5 rounded-full border flex items-center justify-center shrink-0 ${
                            isSelected ? 'bg-[#997449] border-[#997449]' : 'border-[#b5ad9e]'
                          }`}>
                            {isSelected && <span className="w-1.5 h-1.5 bg-white rounded-full" />}
                          </span>
                        </button>
                      );
                    })}
                  </div>
                </div>

                {/* Section 4: Special Wishes */}
                <div className="space-y-4">
                  <div className="text-xs uppercase tracking-[0.2em] text-[#997449] font-semibold border-b border-[#f0eae0] pb-2">
                    04. Bespoke Wishes & Aviation Preferences
                  </div>

                  <div className="space-y-1.5">
                    <label className="block text-xs text-[#5c564c] font-medium">Notes, Dietary Needs, Aviation or Photographic Requests</label>
                    <textarea
                      rows={4}
                      value={formData.specialRequests}
                      onChange={(e) => setFormData({ ...formData, specialRequests: e.target.value })}
                      placeholder="Please note any private charter requests, anniversary celebrations, mobility needs, or preferences for specific camps..."
                      className="w-full p-3 bg-[#faf8f5] border border-[#ded7c8] text-xs text-[#1c1a17] focus:outline-none focus:border-[#997449]"
                    />
                  </div>
                </div>

                <div className="pt-4">
                  <button
                    type="submit"
                    disabled={submitting}
                    className="w-full py-4 bg-[#1c1a17] text-[#faf8f5] hover:bg-[#997449] text-xs uppercase tracking-[0.22em] font-medium transition-colors flex items-center justify-center gap-2 cursor-pointer shadow-md disabled:opacity-50"
                  >
                    {submitting ? (
                      <span>Submitting Protocol...</span>
                    ) : (
                      <>
                        <Send className="w-3.5 h-3.5 text-[#dfc8a2]" />
                        <span>Submit Private Journey Consultation</span>
                      </>
                    )}
                  </button>
                  <p className="text-[11px] text-[#736f67] text-center mt-2.5">
                    Your details are held under strict non-disclosure. We never share traveler information with third parties.
                  </p>
                </div>

              </form>
            )}
          </div>

          {/* Sidebar Column: Direct Lines and Accreditations */}
          <div className="lg:col-span-4 space-y-6">
            
            <div className="bg-[#f5f0e6] border border-[#ded7c8] p-8 space-y-6">
              <div className="space-y-2 border-b border-[#ded7c8] pb-4">
                <div className="text-[10px] uppercase tracking-widest text-[#997449] font-semibold">
                  Direct Inquiries
                </div>
                <h3 className="font-serif text-2xl text-[#1c1a17]">
                  The Safari Desk
                </h3>
              </div>

              <div className="space-y-4 text-xs text-[#4a453d]">
                <div className="flex items-start gap-3">
                  <Mail className="w-4 h-4 text-[#997449] shrink-0 mt-0.5" />
                  <div>
                    <strong className="block text-[#1c1a17]">Journey Reservations:</strong>
                    <a href={`mailto:${BRAND.bookingEmail}`} className="hover:text-[#997449] transition-colors font-mono">
                      {BRAND.bookingEmail}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Mail className="w-4 h-4 text-[#997449] shrink-0 mt-0.5" />
                  <div>
                    <strong className="block text-[#1c1a17]">General Information:</strong>
                    <a href={`mailto:${BRAND.infoEmail}`} className="hover:text-[#997449] transition-colors font-mono">
                      {BRAND.infoEmail}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Phone className="w-4 h-4 text-[#997449] shrink-0 mt-0.5" />
                  <div>
                    <strong className="block text-[#1c1a17]">Direct Concierge Phone:</strong>
                    <a href={`tel:${BRAND.phone.replace(/[^0-9+]/g, '')}`} className="hover:text-[#997449] transition-colors font-mono">
                      {BRAND.phone}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <MapPin className="w-4 h-4 text-[#997449] shrink-0 mt-0.5" />
                  <div>
                    <strong className="block text-[#1c1a17]">Nairobi Headquarters:</strong>
                    <span>{BRAND.officeAddress}</span>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Clock className="w-4 h-4 text-[#997449] shrink-0 mt-0.5" />
                  <div>
                    <strong className="block text-[#1c1a17]">Operating Hours:</strong>
                    <span>{BRAND.hours}</span>
                  </div>
                </div>
              </div>

              <div className="p-4 bg-white border border-[#ded7c8] space-y-2">
                <div className="text-[11px] uppercase tracking-wider text-[#997449] font-semibold flex items-center gap-1.5">
                  <ShieldCheck className="w-3.5 h-3.5" />
                  <span>Discreet Confidentiality</span>
                </div>
                <p className="text-xs text-[#5c564c] leading-relaxed">
                  We frequently accommodate high-profile and discreet guests. Private charter flight plans and guest passenger manifests are handled under strict non-disclosure protocols.
                </p>
              </div>
            </div>

          </div>

        </div>
      </section>

    </div>
  );
};
