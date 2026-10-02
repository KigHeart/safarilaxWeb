import React, { useState } from 'react';
import { TECHNICAL_PROPOSAL, BRAND } from '../data/brand';
import { X, CheckCircle, Globe, Shield, Clock, DollarSign, Database, Server, ExternalLink, Copy, Check, Download } from 'lucide-react';

interface TechnicalProposalModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const TechnicalProposalModal: React.FC<TechnicalProposalModalProps> = ({
  isOpen,
  onClose
}) => {
  const [activeTab, setActiveTab] = useState<'proposal' | 'dns' | 'wordpress' | 'fees'>('proposal');
  const [copiedText, setCopiedText] = useState<string | null>(null);

  if (!isOpen) return null;

  const handleCopy = (text: string, id: string) => {
    navigator.clipboard.writeText(text);
    setCopiedText(id);
    setTimeout(() => setCopiedText(null), 2000);
  };

  const handleDownloadZip = async (e: React.MouseEvent) => {
    e.preventDefault();
    try {
      const res = await fetch('/safarilax-website.zip');
      const blob = await res.blob();
      const url = window.URL.createObjectURL(blob);
      const link = document.createElement('a');
      link.href = url;
      link.setAttribute('download', 'safarilax-website.zip');
      document.body.appendChild(link);
      link.click();
      setTimeout(() => {
        document.body.removeChild(link);
        window.URL.revokeObjectURL(url);
      }, 1500);
    } catch {
      window.location.href = '/safarilax-website.zip';
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/80 backdrop-blur-md animate-in fade-in duration-200">
      <div 
        className="bg-[#12110f] border border-[#2e2b24] text-[#FAF8F5] w-full max-w-4xl max-h-[90vh] flex flex-col shadow-2xl relative"
        role="dialog"
        aria-modal="true"
        aria-labelledby="handover-title"
      >
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-5 border-b border-[#24221d]">
          <div>
            <div className="text-[10px] uppercase tracking-[0.25em] text-[#c5a880] font-medium flex items-center gap-2">
              <span>Safari LAX Client Brief & Deliverable Dossier</span>
              <span>·</span>
              <span className="text-[#FAF8F5]">Designed by Kiprop Yego, 2026</span>
            </div>
            <h2 id="handover-title" className="font-serif text-xl sm:text-2xl text-[#FAF8F5] mt-0.5">
              Technical Handover, Namecheap DNS & Fee Proposal
            </h2>
          </div>
          <button
            onClick={onClose}
            className="p-2 text-[#8e8a80] hover:text-[#FAF8F5] hover:bg-[#1f1d19] transition-colors focus:outline-none"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Tab Controls */}
        <div className="flex border-b border-[#24221d] px-6 bg-[#0e0d0b] overflow-x-auto text-xs">
          <button
            onClick={() => setActiveTab('proposal')}
            className={`py-3 px-4 font-medium tracking-wider uppercase border-b-2 whitespace-nowrap transition-colors ${
              activeTab === 'proposal'
                ? 'border-[#c5a880] text-[#c5a880]'
                : 'border-transparent text-[#8e8a80] hover:text-[#FAF8F5]'
            }`}
          >
            Proposed Approach & Timeline
          </button>
          <button
            onClick={() => setActiveTab('dns')}
            className={`py-3 px-4 font-medium tracking-wider uppercase border-b-2 whitespace-nowrap transition-colors ${
              activeTab === 'dns'
                ? 'border-[#c5a880] text-[#c5a880]'
                : 'border-transparent text-[#8e8a80] hover:text-[#FAF8F5]'
            }`}
          >
            Namecheap DNS & Email Preservation
          </button>
          <button
            onClick={() => setActiveTab('wordpress')}
            className={`py-3 px-4 font-medium tracking-wider uppercase border-b-2 whitespace-nowrap transition-colors ${
              activeTab === 'wordpress'
                ? 'border-[#c5a880] text-[#c5a880]'
                : 'border-transparent text-[#8e8a80] hover:text-[#FAF8F5]'
            }`}
          >
            WordPress Setup & Handover
          </button>
          <button
            onClick={() => setActiveTab('fees')}
            className={`py-3 px-4 font-medium tracking-wider uppercase border-b-2 whitespace-nowrap transition-colors ${
              activeTab === 'fees'
                ? 'border-[#c5a880] text-[#c5a880]'
                : 'border-transparent text-[#8e8a80] hover:text-[#FAF8F5]'
            }`}
          >
            Fee Structure & Maintenance
          </button>
          <button
            onClick={() => setActiveTab('download' as any)}
            className={`py-3 px-4 font-medium tracking-wider uppercase border-b-2 whitespace-nowrap transition-colors flex items-center gap-1.5 ${
              (activeTab as any) === 'download'
                ? 'border-emerald-400 text-emerald-400 bg-emerald-950/20'
                : 'border-transparent text-emerald-400/80 hover:text-emerald-300'
            }`}
          >
            <Download className="w-3.5 h-3.5" />
            <span>Download ZIP & Local Run (E:\SafariLax)</span>
          </button>
        </div>

        {/* Content Body */}
        <div className="p-6 overflow-y-auto space-y-6 text-sm text-[#ded7c8]">
          
          {/* TAB 1: Proposed Approach & Timeline */}
          {activeTab === 'proposal' && (
            <div className="space-y-6">
              <div className="bg-[#181613] p-5 border border-[#2e2a22]">
                <h3 className="font-serif text-lg text-[#FAF8F5] mb-2">Our Proposed Bespoke Approach</h3>
                <p className="text-xs text-[#a8a396] leading-relaxed">
                  To honor the guiding line <span className="text-[#c5a880] italic">“Private Africa, Unhurried,”</span> we deliver a clean, editorial digital presence matching the stature of top-tier safari houses. Every visual, typographic spacing, and interaction conveys restraint, exclusivity, and care.
                </p>
              </div>

              <div>
                <h4 className="text-xs uppercase tracking-[0.2em] text-[#c5a880] font-medium mb-3">
                  Production Timeline & Milestones
                </h4>
                <div className="space-y-3">
                  {TECHNICAL_PROPOSAL.timelinePhases.map((phase, idx) => (
                    <div key={idx} className="bg-[#151411] border border-[#24221d] p-4 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                      <div className="space-y-1">
                        <div className="font-medium text-[#FAF8F5] text-sm">{phase.phase}</div>
                        <div className="text-xs text-[#8e8a80]">{phase.deliverables}</div>
                      </div>
                      <span className="text-xs font-mono px-3 py-1 bg-[#22201a] text-[#c5a880] self-start sm:self-center shrink-0">
                        {phase.duration}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-2">
                <div className="p-4 border border-[#24221d] bg-[#141311]">
                  <div className="text-xs font-medium text-[#FAF8F5] mb-1 flex items-center gap-1.5">
                    <CheckCircle className="w-3.5 h-3.5 text-[#c5a880]" />
                    <span>Scope Addressed in Current Build</span>
                  </div>
                  <ul className="text-xs text-[#8e8a80] space-y-1.5 pl-5 list-disc mt-2">
                    <li>Home, About, Journeys, Services, Gallery & Contact pages</li>
                    <li>Direct enquiry routing for bookings@safarilax.world</li>
                    <li>Full desktop & mobile responsive optimization</li>
                    <li>Curated day-by-day journey dossiers and interactive planner</li>
                  </ul>
                </div>

                <div className="p-4 border border-[#24221d] bg-[#141311]">
                  <div className="text-xs font-medium text-[#FAF8F5] mb-1 flex items-center gap-1.5">
                    <Shield className="w-3.5 h-3.5 text-[#c5a880]" />
                    <span>Quality & Security Commitments</span>
                  </div>
                  <ul className="text-xs text-[#8e8a80] space-y-1.5 pl-5 list-disc mt-2">
                    <li>30-day post-launch warranty and bug fixes included</li>
                    <li>Automatic SSL/TLS encryption for safarilax.world</li>
                    <li>Zero interference with operational Namecheap email accounts</li>
                    <li>Staff video walkthrough and concise editor manual</li>
                  </ul>
                </div>
              </div>
            </div>
          )}

          {/* TAB 2: Namecheap DNS & Email Preservation */}
          {activeTab === 'dns' && (
            <div className="space-y-6">
              <div className="p-4 bg-[#231a10] border border-[#7d4e1e] text-[#f7e0c4] text-xs leading-relaxed flex items-start gap-3">
                <Shield className="w-5 h-5 text-[#c5a880] shrink-0 mt-0.5" />
                <div>
                  <strong className="block text-sm text-[#c5a880] mb-1">
                    Email Preservation Protocol (100% Uptime Guarantee)
                  </strong>
                  Your domain <code className="bg-[#12110f] px-1 py-0.5">safarilax.world</code> currently runs operational email boxes for <span className="underline">info@safarilax.world</span> and <span className="underline">bookings@safarilax.world</span>. When updating Namecheap DNS to point to the new website, we <span className="font-semibold text-white">NEVER touch MX, TXT (SPF), or CNAME (DKIM) records</span>. Only the website Host A/CNAME records are modified.
                </div>
              </div>

              <div className="space-y-4">
                <h4 className="text-xs uppercase tracking-[0.2em] text-[#c5a880] font-medium">
                  Step-by-Step Namecheap Configuration
                </h4>

                {TECHNICAL_PROPOSAL.dnsGuide.steps.map((s) => (
                  <div key={s.step} className="bg-[#151411] border border-[#24221d] p-4 space-y-2">
                    <div className="flex items-center gap-2 text-xs font-medium text-[#FAF8F5]">
                      <span className="w-5 h-5 rounded-full bg-[#262420] text-[#c5a880] flex items-center justify-center font-mono text-[11px]">
                        {s.step}
                      </span>
                      <span>{s.title}</span>
                    </div>
                    <pre className="text-xs text-[#a8a396] whitespace-pre-wrap font-sans pl-7 leading-relaxed">
                      {s.action}
                    </pre>
                  </div>
                ))}
              </div>

              {/* Exact DNS Record Matrix Table */}
              <div className="border border-[#24221d] overflow-hidden">
                <div className="bg-[#1c1a16] px-4 py-2 text-xs font-medium text-[#FAF8F5] border-b border-[#24221d]">
                  Recommended Namecheap Advanced DNS Record Table
                </div>
                <div className="overflow-x-auto">
                  <table className="w-full text-left text-xs">
                    <thead className="bg-[#151411] text-[#8e8a80] border-b border-[#24221d]">
                      <tr>
                        <th className="p-3">Type</th>
                        <th className="p-3">Host</th>
                        <th className="p-3">Value / Target</th>
                        <th className="p-3">Purpose</th>
                        <th className="p-3">Action</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-[#1f1d19] text-[#ded7c8]">
                      <tr>
                        <td className="p-3 font-mono text-[#c5a880]">A Record</td>
                        <td className="p-3 font-mono">@</td>
                        <td className="p-3 font-mono">76.76.21.21 (or Server IP)</td>
                        <td className="p-3">Website Root</td>
                        <td className="p-3">
                          <button
                            onClick={() => handleCopy("76.76.21.21", "a-rec")}
                            className="flex items-center gap-1 text-[11px] text-[#8e8a80] hover:text-[#FAF8F5]"
                          >
                            {copiedText === 'a-rec' ? <Check className="w-3 h-3 text-emerald-400" /> : <Copy className="w-3 h-3" />}
                            <span>Copy</span>
                          </button>
                        </td>
                      </tr>
                      <tr>
                        <td className="p-3 font-mono text-[#c5a880]">CNAME</td>
                        <td className="p-3 font-mono">www</td>
                        <td className="p-3 font-mono">safarilax.world</td>
                        <td className="p-3">WWW Subdomain</td>
                        <td className="p-3">
                          <button
                            onClick={() => handleCopy("safarilax.world", "cname-rec")}
                            className="flex items-center gap-1 text-[11px] text-[#8e8a80] hover:text-[#FAF8F5]"
                          >
                            {copiedText === 'cname-rec' ? <Check className="w-3 h-3 text-emerald-400" /> : <Copy className="w-3 h-3" />}
                            <span>Copy</span>
                          </button>
                        </td>
                      </tr>
                      <tr className="bg-[#14120f]/60 text-[#8e8a80]">
                        <td className="p-3 font-mono">MX Records</td>
                        <td className="p-3 font-mono">@</td>
                        <td className="p-3 font-mono">mail.privateemail.com (Existing)</td>
                        <td className="p-3 text-emerald-400 font-medium">Keep Existing (DO NOT CHANGE)</td>
                        <td className="p-3 text-[11px] text-emerald-400">Preserved</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          )}

          {/* TAB 3: WordPress Setup & Handover */}
          {activeTab === 'wordpress' && (
            <div className="space-y-6">
              <div className="bg-[#181613] p-5 border border-[#2e2a22]">
                <h3 className="font-serif text-lg text-[#FAF8F5] mb-2">Straightforward Content Management & Handover</h3>
                <p className="text-xs text-[#a8a396] leading-relaxed">
                  Safari LAX team members need to update journey dates, prices, seasonal highlights, and photography without needing to write code or rely on developers for routine changes.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="bg-[#151411] border border-[#24221d] p-4 space-y-2">
                  <div className="w-8 h-8 bg-[#24221d] text-[#c5a880] flex items-center justify-center font-medium">
                    1
                  </div>
                  <h5 className="font-serif text-sm text-[#FAF8F5]">Custom Journey Manager</h5>
                  <p className="text-xs text-[#8e8a80]">
                    Clean custom fields (ACF) for Itinerary title, day-by-day stops, inclusions, and prices. No bloated visual page builders.
                  </p>
                </div>

                <div className="bg-[#151411] border border-[#24221d] p-4 space-y-2">
                  <div className="w-8 h-8 bg-[#24221d] text-[#c5a880] flex items-center justify-center font-medium">
                    2
                  </div>
                  <h5 className="font-serif text-sm text-[#FAF8F5]">Visual Media Library</h5>
                  <p className="text-xs text-[#8e8a80]">
                    Drag-and-drop editorial photo uploads with automatic compression, WebP conversion, and gallery categorization.
                  </p>
                </div>

                <div className="bg-[#151411] border border-[#24221d] p-4 space-y-2">
                  <div className="w-8 h-8 bg-[#24221d] text-[#c5a880] flex items-center justify-center font-medium">
                    3
                  </div>
                  <h5 className="font-serif text-sm text-[#FAF8F5]">Instant Enquiries Inbox</h5>
                  <p className="text-xs text-[#8e8a80]">
                    All submissions from the Private Enquiry form send an alert to <span className="text-[#c5a880]">bookings@safarilax.world</span> and log into your dashboard.
                  </p>
                </div>
              </div>

              <div className="p-4 border border-[#24221d] bg-[#141311] space-y-2">
                <h5 className="text-xs uppercase tracking-[0.2em] text-[#c5a880] font-medium">
                  Handover Deliverables Checklist
                </h5>
                <ul className="text-xs text-[#a8a396] space-y-1.5 pl-5 list-disc">
                  <li>30-minute interactive live video walkthrough with screen recording for future team reference</li>
                  <li>One-page printable "Safari LAX Editor Guide" (PDF) covering how to publish a new safari journey</li>
                  <li>Secure administrator account credentials and 2-factor authentication setup</li>
                  <li>Pre-configured backup routine (daily automated backups to private cloud)</li>
                </ul>
              </div>
            </div>
          )}

          {/* TAB 4: Fee Structure & Maintenance */}
          {activeTab === 'fees' && (
            <div className="space-y-6">
              <div className="bg-[#181613] p-5 border border-[#2e2a22]">
                <h3 className="font-serif text-lg text-[#FAF8F5] mb-2">Transparent Commercial Proposal & Maintenance</h3>
                <p className="text-xs text-[#a8a396] leading-relaxed">
                  In accordance with your request, here is the full breakdown of project delivery, ongoing hosting, domain licensing, and optional maintenance.
                </p>
              </div>

              <div className="space-y-3">
                {TECHNICAL_PROPOSAL.feeStructure.map((fee, idx) => (
                  <div key={idx} className="bg-[#151411] border border-[#24221d] p-4 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                    <div className="space-y-1">
                      <div className="font-medium text-[#FAF8F5] text-sm">{fee.item}</div>
                      <div className="text-xs text-[#8e8a80]">{fee.notes}</div>
                    </div>
                    <span className="text-xs font-mono font-medium px-3 py-1.5 bg-[#24221d] text-[#c5a880] whitespace-nowrap self-start sm:self-center">
                      {fee.investment}
                    </span>
                  </div>
                ))}
              </div>

              <div className="p-4 bg-[#141311] border border-[#24221d] space-y-3">
                <div className="flex items-center gap-2 text-xs font-medium text-[#FAF8F5]">
                  <DollarSign className="w-4 h-4 text-[#c5a880]" />
                  <span>Optional Safari Concierge Digital Retainer</span>
                </div>
                <p className="text-xs text-[#8e8a80] leading-relaxed">
                  For ongoing peace of mind, we offer a light monthly retainer ($150 – $250/mo) covering 24/7 security monitoring, monthly WordPress core/plugin updates, automated database backups, and up to 2 hours of bespoke itinerary updates per month.
                </p>
              </div>
            </div>
          )}

          {/* TAB 5: Download ZIP & Local Run (E:\SafariLax) */}
          {(activeTab as any) === 'download' && (
            <div className="space-y-6">
              <div className="bg-[#121c16] p-5 border border-[#1f4a31] text-emerald-200">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                  <div>
                    <h3 className="font-serif text-lg text-emerald-100 mb-1">
                      Download Full Web Project (.ZIP)
                    </h3>
                    <p className="text-xs text-emerald-300/90 leading-relaxed">
                      All source code, TypeScript components, high-resolution photography assets, Tailwind styling, and package configuration bundled into a single ZIP archive.
                    </p>
                  </div>

                  <button
                    onClick={handleDownloadZip}
                    className="px-6 py-3 bg-emerald-500 hover:bg-emerald-400 text-black font-semibold text-xs uppercase tracking-wider transition-colors shrink-0 flex items-center justify-center gap-2 shadow-lg cursor-pointer"
                  >
                    <Download className="w-4 h-4" />
                    <span>Download Project ZIP (Clean Codebase)</span>
                  </button>
                </div>
              </div>

              {/* Exact PowerShell Guide for E:\SafariLax */}
              <div className="space-y-4">
                <h4 className="text-xs uppercase tracking-[0.2em] text-[#c5a880] font-medium">
                  Step-by-Step for Your Machine (PowerShell E:\SafariLax)
                </h4>

                {/* Step 1 */}
                <div className="bg-[#151411] border border-[#24221d] p-4 space-y-2">
                  <div className="flex items-center justify-between">
                    <div className="text-xs font-medium text-[#FAF8F5]">
                      1. Extract ZIP into your repository folder
                    </div>
                    <span className="text-[11px] text-[#8e8a80] font-mono">E:\SafariLax\safarilaxWeb</span>
                  </div>
                  <p className="text-xs text-[#a8a396]">
                    Move the downloaded <code className="bg-[#201e19] px-1 py-0.5 text-emerald-400">safarilax-website.zip</code> into <code className="bg-[#201e19] px-1 py-0.5 text-[#ded7c8]">E:\SafariLax\safarilaxWeb</code> and extract all contents there (or extract and copy the files into that folder).
                  </p>
                </div>

                {/* Step 2 */}
                <div className="bg-[#151411] border border-[#24221d] p-4 space-y-2">
                  <div className="flex items-center justify-between">
                    <div className="text-xs font-medium text-[#FAF8F5]">
                      2. Install dependencies & run locally
                    </div>
                    <button
                      onClick={() => handleCopy("cd E:\\SafariLax\\safarilaxWeb\nnpm install\nnpm run dev", "ps-run")}
                      className="flex items-center gap-1 text-[11px] text-[#c5a880] hover:text-[#FAF8F5]"
                    >
                      {copiedText === 'ps-run' ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                      <span>Copy Commands</span>
                    </button>
                  </div>
                  <pre className="p-3 bg-[#0e0d0b] border border-[#262420] text-xs font-mono text-emerald-400 overflow-x-auto">
{`cd E:\\SafariLax\\safarilaxWeb
npm install
npm run dev`}
                  </pre>
                  <p className="text-[11px] text-[#8e8a80]">
                    Open <span className="text-[#FAF8F5] underline">http://localhost:5173</span> in your browser. You can test every page, modal, and enquiry form locally!
                  </p>
                </div>

                {/* Step 3 */}
                <div className="bg-[#151411] border border-[#24221d] p-4 space-y-2">
                  <div className="flex items-center justify-between">
                    <div className="text-xs font-medium text-[#FAF8F5]">
                      3. Push all files to your GitHub repository
                    </div>
                    <button
                      onClick={() => handleCopy("git add .\ngit commit -m \"feat: Safari LAX website designed by Kiprop Yego 2026\"\ngit branch -M main\ngit push -u origin main", "ps-git")}
                      className="flex items-center gap-1 text-[11px] text-[#c5a880] hover:text-[#FAF8F5]"
                    >
                      {copiedText === 'ps-git' ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                      <span>Copy Git Push</span>
                    </button>
                  </div>
                  <pre className="p-3 bg-[#0e0d0b] border border-[#262420] text-xs font-mono text-[#c5a880] overflow-x-auto">
{`git add .
git commit -m "feat: Safari LAX website designed by Kiprop Yego 2026"
git branch -M main
git push -u origin main`}
                  </pre>
                  <p className="text-[11px] text-[#8e8a80]">
                    Target Repo: <span className="text-white font-mono">https://github.com/KigHeart/safarilaxWeb</span>
                  </p>
                </div>

                {/* Step 4 */}
                <div className="bg-[#151411] border border-[#24221d] p-4 space-y-2">
                  <div className="text-xs font-medium text-[#FAF8F5]">
                    4. Sending the live preview link to your client
                  </div>
                  <p className="text-xs text-[#a8a396] leading-relaxed">
                    Once pushed to GitHub, you can connect your repo to <strong className="text-white">Vercel</strong>, <strong className="text-white">Netlify</strong>, or <strong className="text-white">Cloudflare Pages</strong> in 60 seconds (it detects Vite automatically). You'll receive a live HTTPS URL that you can immediately send to your client, or connect your client's registered domain <strong className="text-[#c5a880]">safarilax.world</strong>!
                  </p>
                </div>
              </div>
            </div>
          )}

        </div>

        {/* Modal Footer */}
        <div className="px-6 py-4 border-t border-[#24221d] bg-[#0e0d0b] flex flex-col sm:flex-row items-center justify-between gap-3 text-xs">
          <div className="text-[#8e8a80]">
            Domain: <span className="text-[#FAF8F5]">safarilax.world</span> · Direct Email: <span className="text-[#c5a880]">{BRAND.bookingEmail}</span>
          </div>
          <button
            onClick={onClose}
            className="w-full sm:w-auto px-5 py-2 bg-[#c5a880] text-[#0e0d0b] font-medium tracking-wider uppercase hover:bg-[#d4b896] transition-colors"
          >
            Close Dossier
          </button>
        </div>
      </div>
    </div>
  );
};
