import { ServiceItem } from '../types';
import { campImg, heliImg, leopardImg, diningImg } from './images';

export const SERVICES: ServiceItem[] = [
  {
    id: "private-guiding",
    number: "01",
    title: "Dedicated Gold & Silver Naturalist Guides",
    shortDesc: "Senior private naturalist guides assigned exclusively to your traveling party throughout your safari.",
    fullDesc: "A safari is only as profound as the person interpreting the wilderness for you. Safari LAX works exclusively with Kenya's highest-accredited Gold and Silver-level KPSGA naturalist guides. Many grew up within the conservancies they navigate, offering an intuitive reading of animal tracks, atmospheric shifts, and predator behavior that cannot be taught in classrooms.",
    features: [
      "100% private vehicle and guide throughout — never shared with strangers",
      "Profound mastery of animal psychology, tracking, and avian migrations",
      "Cultural liaison with authentic Maasai, Samburu, and Rendille elders",
      "Flexible game drive hours adjusted completely to your natural waking rhythm"
    ],
    image: leopardImg,
    iconName: "Compass"
  },
  {
    id: "private-aviation",
    number: "02",
    title: "Private Charter Aviation & Helicopter Excursions",
    shortDesc: "Point-to-point private Cessna Caravans, King Airs, and Eurocopter B3s direct to bush airstrips.",
    fullDesc: "Eliminate long, dusty commercial connections and chaotic airport terminals. Our private charter desk arranges dedicated twin-turboprops and turbine helicopters that depart according to your schedule directly from Nairobi Wilson or private regional airstrips, touching down gently beside your luxury safari camp.",
    features: [
      "Point-to-point bush flight transfers saving full days of road travel",
      "Luggage allowances tailored for professional camera gear and safari luggage",
      "Spectacular low-level flight corridors over Mount Kenya, Rift Valley lakes, and Suguta dunes",
      "Experienced high-altitude bush pilots with thousands of East African flying hours"
    ],
    image: heliImg,
    iconName: "Plane"
  },
  {
    id: "exclusive-camps",
    number: "03",
    title: "Exclusive-Use Bush Homes & Private Concessions",
    shortDesc: "Complete private buyouts of luxury safari camps and private wilderness ranches for families and small groups.",
    fullDesc: "For extended families or discerning travelers who value absolute privacy, we arrange exclusive-use buyouts of luxury bush homes, tented camps, and private conservancy villas. You enjoy the run of the estate with a dedicated private host, executive chef, butler, and field team catering solely to your wishes.",
    features: [
      "Complete buyout of premier 4-to-8 bedroom private wilderness estates",
      "Zero outside guests — the swimming pool, dining deck, and vehicles are exclusively yours",
      "Dedicated culinary team preparing customized menus, children's favorites, and vintage pairings",
      "Unrestricted game drive timings, night safaris, and wilderness dining locations"
    ],
    image: campImg,
    iconName: "Home"
  },
  {
    id: "bush-dining",
    number: "04",
    title: "Bespoke Bush Dining & Sundowner Rituals",
    shortDesc: "Linen-set breakfasts in the open savannah and silver-service candlelit boma dinners under the stars.",
    fullDesc: "Dining with Safari LAX is an unhurried, multisensory celebration. Whether it is hot flaky croissants and Kenyan highland coffee served from a mahogany table in the middle of a wildebeest migration corridor, or a seven-course banquet illuminated by 100 brass lanterns beside a roaring campfire, every meal is an unforgettable event.",
    features: [
      "Freshly prepared farm-to-table cuisine utilizing organic Kenyan produce",
      "Iconic African sundowners atop scenic escarpments with artisanal spirits and canapés",
      "Private candlelit dinners in dry riverbeds or secluded acacia groves",
      "Careful accommodation of any dietary requirement or bespoke culinary preference"
    ],
    image: diningImg,
    iconName: "Wine"
  },
  {
    id: "photographic-concierge",
    number: "05",
    title: "Photographic Safari Concierge",
    shortDesc: "Specialized vehicle modifications, beanbag mounts, gimbal heads, and onboard drone/camera charging.",
    fullDesc: "For wildlife photographers and filmmakers, we engineer the optimal shooting platform. Custom open-sided safari vehicles feature dropped sides for low-angle perspectives, heavy-duty swivel mounts, dustproof equipment storage, and 240V inverter charging ports to keep your batteries and card backups primed.",
    features: [
      "Specially modified 4x4 open Land Cruisers with 360-degree shooting angles",
      "Pre-arranged equipment rental (lenses, teleconverters, camera bodies) awaiting you in Nairobi",
      "Guides trained in light direction, animal positioning, and patience for the decisive moment",
      "Sunken ground-level photographic hides for dramatic eye-level wildlife portraits"
    ],
    image: leopardImg,
    iconName: "Camera"
  },
  {
    id: "vip-protocol",
    number: "06",
    title: "VIP Tarmac Protocol & Seamless Ground Handling",
    shortDesc: "Airside greeting directly at the aircraft steps in Nairobi, VIP lounge, and seamless transfers.",
    fullDesc: "From the second your international flight touches the tarmac at Nairobi Jomo Kenyatta (NBO), our VIP protocol officer meets you at the aircraft door. You are escorted through private express customs and diplomatic immigration lanes while your luggage is discreetly collected and loaded into your chauffeur-driven Mercedes or luxury cruiser.",
    features: [
      "Aircraft-door meet-and-greet bypassing all general public arrival queues",
      "Access to private airport VIP lounges with champagne and shower facilities",
      "Private chauffeured transfers between Jomo Kenyatta (NBO) and Wilson (WIL) airports",
      "Luggage storage, dry cleaning, and safari wardrobe preparation in Nairobi"
    ],
    image: campImg,
    iconName: "ShieldCheck"
  }
];
