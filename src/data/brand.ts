export const BRAND = {
  name: "SAFARI LAX",
  tagline: "Private Africa, Unhurried.",
  establishedLocation: "Nairobi, Kenya",
  domain: "safarilax.world",
  bookingEmail: "bookings@safarilax.world",
  infoEmail: "info@safarilax.world",
  supportEmail: "travel@safilax.world",
  phone: "+254 (0) 700 892 400",
  whatsapp: "+254 (0) 712 345 678",
  officeAddress: "Karen Sanctuary Lane, Nairobi, Kenya",
  hours: "Monday – Saturday: 08:00 – 19:00 EAT (24/7 Guest Safari Concierge)",
  multilingualSignoffs: [
    "Kind regards,",
    "Bien cordialement,",
    "Cordiali saluti,",
    "Com os melhores cumprimentos,"
  ],
  teamTitle: "Safari LAX Kenya Team",
  customerServiceNote: "CUSTOMER SERVICE & PRIVATE CONCIERGE",
  designer: "Kiprop Yego",
  designYear: "2026",
  designerCredit: "Designed by Kiprop Yego, 2026"
};

export const BRAND_VALUES = [
  {
    number: "01",
    title: "Genuine Exclusivity",
    description: "We bypass crowded public national parks in favour of strictly private conservancies and exclusive concessions where wildlife viewing is intimate, undisturbed, and unhurried."
  },
  {
    number: "02",
    title: "Unhurried Cadence",
    description: "Rather than frantic one-night stops, our itineraries allocate minimum 3 to 4 nights per ecosystem. You absorb the true pulse of the African wild, from dawn mist to starlit boma."
  },
  {
    number: "03",
    title: "Bespoke Aviation",
    description: "Fly directly by private charter or helicopter into bush airstrips, eliminating grueling road transfers and maximizing every precious hour on safari."
  },
  {
    number: "04",
    title: "Dedicated Guides",
    description: "Your journey is escorted by Kenya's most revered Gold & Silver-level naturalist guides, whose indigenous wisdom transforms sightings into masterclasses in ecology."
  }
];

export const TECHNICAL_PROPOSAL = {
  title: "Website Architecture, Namecheap DNS & WordPress Handover Proposal",
  client: "Safari LAX (safarilax.world)",
  preparedFor: "Leadership Team & Customer Service",
  scopeSummary: "Bespoke high-end digital presence with seamless Namecheap domain integration, active email preservation (info@ & bookings@), and self-service content management.",
  dnsGuide: {
    registrar: "Namecheap",
    targetDomain: "safarilax.world",
    criticalNote: "Existing email service (info@safarilax.world and bookings@safarilax.world) MUST be preserved with zero downtime by leaving MX and TXT (SPF/DKIM) records strictly untouched.",
    steps: [
      {
        step: 1,
        title: "Log into Namecheap Account",
        action: "Navigate to Domain List -> Select safarilax.world -> Click 'Manage' -> Select the 'Advanced DNS' tab."
      },
      {
        step: 2,
        title: "Preserve Email Routing (DO NOT ALTER)",
        action: "Verify that Mail Settings remain set to 'Private Email' or 'Custom MX'. Keep all existing MX records pointing to your email provider (e.g., mail.privateemail.com or Google Workspace) and existing TXT SPF/DKIM records completely intact."
      },
      {
        step: 3,
        title: "Point Website Records Only",
        action: "Add or update ONLY Host Records:\n• Type: A Record | Host: @ | Value: [Cloud Host IP / Cluster IP] | TTL: Automatic\n• Type: CNAME Record | Host: www | Value: safarilax.world | TTL: Automatic"
      },
      {
        step: 4,
        title: "SSL / TLS Handshake",
        action: "Automatic Let's Encrypt / Cloudflare SSL certificate provisions within 15–30 minutes of DNS propagation."
      }
    ]
  },
  timelinePhases: [
    {
      phase: "Phase 1: Brand Alignment & Architectural Foundation",
      duration: "Week 1",
      deliverables: "High-fidelity component library, bespoke typography (Cormorant Garamond & Plus Jakarta Sans), palette calibration, content mapping."
    },
    {
      phase: "Phase 2: Bespoke Development & Visual Curation",
      duration: "Week 2–3",
      deliverables: "Curated Journeys engine, custom private enquiry routing to bookings@safarilax.world, high-res photography gallery, responsive mobile optimization."
    },
    {
      phase: "Phase 3: CMS & WordPress Handover Setup",
      duration: "Week 4",
      deliverables: "Implementation of straightforward content editing capability for itineraries, gallery, and rates; admin access credentials; live testing."
    },
    {
      phase: "Phase 4: Launch, Namecheap DNS & Email Verification",
      duration: "Week 4–5",
      deliverables: "Assisted DNS switchover preserving Namecheap emails, SSL deployment, staff handover walkthrough, 30-day post-launch warranty."
    }
  ],
  feeStructure: [
    {
      item: "Bespoke Design, Development & Content Engineering",
      investment: "Turnkey Project Fee",
      notes: "Includes all 6 core pages (Home, About, Journeys, Services, Gallery, Contact), private enquiry engine, mobile responsive UI, and custom branding."
    },
    {
      item: "WordPress / Headless CMS Integration & Handover",
      investment: "Included in Scope",
      notes: "Allows non-technical team members to add new itineraries, swap gallery photos, update prices, and view inquiries."
    },
    {
      item: "Annual Hosting & Edge Infrastructure",
      investment: "Estimate $180 – $360 / year",
      notes: "High-speed NVMe hosting with global CDN (Cloudflare/Vercel/WP Engine) for ultra-fast media loading across US, UK, and African markets."
    },
    {
      item: "Domain & Email Licencing",
      investment: "Zero change to current Namecheap renewals",
      notes: "Your existing Namecheap domain registration and email hosting fees remain as currently billed by Namecheap."
    }
  ]
};
