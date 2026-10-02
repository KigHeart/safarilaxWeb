import { Journey } from '../types';
import { heroImg, campImg, leopardImg, heliImg, diningImg } from './images';

export const JOURNEYS: Journey[] = [
  {
    id: "mara-migration-unhurried",
    title: "The Great Migration & Mara North Concession",
    subtitle: "Private conservancy exclusivity amidst the planet's greatest wildlife spectacle",
    duration: "8 Days / 7 Nights",
    region: "Masai Mara Concessions",
    country: "Kenya",
    style: "classic",
    styleLabel: "Wildlife & Private Concessions",
    pacing: "Unhurried & Immersive",
    indicativePrice: "From $14,200 per person sharing",
    bestMonths: ["July", "August", "September", "October", "December", "January", "February"],
    heroImage: heroImg,
    overview: "Experience the legendary Masai Mara without the crowds. By basing our guests exclusively in private concessions adjoining the national reserve, you enjoy off-road tracking privileges, night game drives under star-strewn skies, and quiet river crossing viewpoints far from commercial tourist vehicles.",
    highlights: [
      "Exclusive access to 74,000-acre Mara North Conservancy with strict vehicle-to-land ratios",
      "Night game drives seeking leopards, aardvarks, and hunting lion prides",
      "Off-road driving permissions for unparalleled wildlife photography angles",
      "Scenic private bush flight from Nairobi Wilson direct into Mara bush airstrip",
      "Sunset champagne sundowners atop the Siria Escarpment overlooking the savannah"
    ],
    inclusions: [
      "All private charter or scheduled internal bush flights",
      "Luxury tented accommodation with private ensuite veranda",
      "Dedicated professional Silver/Gold KPSGA naturalist guide and private 4x4 cruiser",
      "All conservancy fees and conservation levies",
      "Full board fine dining, premium wines, spirits, and tailored bush picnics"
    ],
    accommodations: [
      "Mara Plains Camp / Serian The Original",
      "Angama Mara (Siria Escarpment extension)",
      "Naboisho Exclusive Tented Suite"
    ],
    days: [
      {
        day: 1,
        title: "Arrival in Nairobi & VIP Tarmac Transfer",
        location: "Nairobi",
        description: "Arrive at Jomo Kenyatta International Airport where you are welcomed right at the aircraft steps by our VIP tarmac concierge. Seamless fast-track immigration and private luxury transfer to your boutique manor house in leafy Karen.",
        stay: "Hemingways Nairobi or House of Waine",
        activityHighlight: "Private garden welcome dinner and safari orientation briefing"
      },
      {
        day: 2,
        title: "Aviation into the Wild & First Twilight Drive",
        location: "Mara North Conservancy",
        description: "Board our private morning bush aircraft from Wilson Airport, soaring over the Great Rift Valley before touching down on the red-earth airstrip of Mara North. Settle into your canvas sanctuary before embarking on an unhurried afternoon drive.",
        stay: "Exclusive Conservancy Luxury Tented Camp",
        activityHighlight: "Tracking the resident River Pride of lions as golden hour falls"
      },
      {
        day: 3,
        title: "The Art of the Slow Game Drive",
        location: "Mara North Conservancy",
        description: "Depart at first dawn with hot French press coffee and fresh pastries packed into your custom Land Cruiser. Spend four undisturbed hours following cheetah coalitions across open plains without another vehicle in sight.",
        stay: "Exclusive Conservancy Luxury Tented Camp",
        activityHighlight: "Private silver-service bush lunch under a canopy of shade trees"
      },
      {
        day: 4,
        title: "Migration River Crossings & The Mara River",
        location: "Mara River Border",
        description: "Travel down towards the Mara River where thousands of wildebeest and zebras gather. With our private guide's deep understanding of herd behavior, find an elevated vantage point to witness the pulse-pounding drama of the crossing.",
        stay: "Exclusive Conservancy Luxury Tented Camp",
        activityHighlight: "Watching immense wildebeest columns navigate Nile crocodiles"
      },
      {
        day: 5,
        title: "Walking Safari with Maasai Naturalists",
        location: "Mara North Conservancy",
        description: "Step out of the vehicle and feel Africa beneath your feet. Guided by a senior Maasai naturalist and armed ranger, learn the subtle art of tracking prints, indigenous medicinal plants, and birdcalls.",
        stay: "Exclusive Conservancy Luxury Tented Camp",
        activityHighlight: "Intimate foot safari through wild acacia woodlands"
      },
      {
        day: 6,
        title: "Nocturnal Predators & Night Astronomy",
        location: "Mara North Conservancy",
        description: "After a leisurely afternoon reading on your private wooden veranda, set out after dusk equipped with high-powered infrared red filters to observe the secret nocturnal lives of leopards, hyenas, and servals.",
        stay: "Exclusive Conservancy Luxury Tented Camp",
        activityHighlight: "Infrared night game drive and fireside stargazing with the camp astronomer"
      },
      {
        day: 7,
        title: "Hot Air Balloon Flight & Escarpment Farewell",
        location: "Siria Escarpment",
        description: "Drift silently at sunrise over the sprawling plains as morning mists rise from the meandering river. Touch down to a crystal flute champagne breakfast prepared in the open bush.",
        stay: "Exclusive Conservancy Luxury Tented Camp",
        activityHighlight: "Dawn balloon safari followed by a lantern-lit celebratory boma banquet"
      },
      {
        day: 8,
        title: "Final Dawn Safari & Private Return Flight",
        location: "Nairobi Departure",
        description: "A gentle final morning safari to bid farewell to the Mara wilderness. Board your return flight to Nairobi, where a dayroom awaits in Karen prior to your evening international flight home.",
        stay: "Dayroom at Hemingways Nairobi",
        activityHighlight: "Farewell gifts and VIP airport concierge transfer"
      }
    ]
  },
  {
    id: "laikipia-samburu-frontiers",
    title: "Laikipia & Samburu: The Northern Frontiers",
    subtitle: "Rugged wilderness, endangered black rhinos, and private conservation ranches",
    duration: "7 Days / 6 Nights",
    region: "Northern Kenya & Mount Kenya Foothills",
    country: "Kenya",
    style: "photographic",
    styleLabel: "Conservation & Rare Species",
    pacing: "Unhurried & Immersive",
    indicativePrice: "From $12,800 per person sharing",
    bestMonths: ["All Year Round", "January", "February", "June", "July", "August", "September", "October"],
    heroImage: leopardImg,
    overview: "Journey north of the equator to a land of dramatic red soils, doum palms, and rocky inselbergs. Here in Laikipia and Samburu, encounter the 'Samburu Special Five' (grevy's zebra, reticulated giraffe, gerenuk, Somali ostrich, and beisa oryx) alongside the highest concentration of black rhinos in East Africa.",
    highlights: [
      "Private tracking with Ol Pejeta / Lewa anti-poaching canine rangers",
      "Behind-the-scenes visit to Reteti Elephant Sanctuary run by the local Samburu community",
      "Spotting the legendary 'Samburu Special Five' species found nowhere else",
      "Private camel-back treks and fly camping under the northern skies",
      "Stunning views of Mount Kenya's jagged glacial peaks at sunrise"
    ],
    inclusions: [
      "Charter flights between Nairobi, Lewa, and Samburu airstrips",
      "Private open-sided safari vehicle with specialized photographic mounts",
      "Private conservancy fees benefiting local anti-poaching initiatives",
      "Premium bush meals, sundowner setups, and vintage wine cellar selections"
    ],
    accommodations: [
      "Sirikoi Lodge (Lewa Wildlife Conservancy)",
      "Sasaab (Samburu National Reserve Border)",
      "Ol Jogi Home (Exclusive use on request)"
    ],
    days: [
      {
        day: 1,
        title: "Fly to Lewa Wildlife Conservancy",
        location: "Lewa Downs",
        description: "Fly north from Nairobi across the equator to Lewa, an internationally recognized pioneer in black rhino conservation and UNESCO World Heritage Site.",
        stay: "Sirikoi Lodge",
        activityHighlight: "Encountering white and black rhinos grazing on the marshlands"
      },
      {
        day: 2,
        title: "Canine Unit & Private Rhino Tracking",
        location: "Lewa Downs",
        description: "Join the dedicated Lewa anti-poaching dog tracking squad for a demonstration of scent tracking, followed by an afternoon tracking elusive leopards along the acacia-lined riverbanks.",
        stay: "Sirikoi Lodge",
        activityHighlight: "Private briefing with Lewa's Head of Anti-Poaching Operations"
      },
      {
        day: 3,
        title: "Into the Red Lands of Samburu",
        location: "Samburu Kalama Conservancy",
        description: "A short scenic flight deposits you in the starkly beautiful, arid savannah of Samburu. Check into your cliffside Moroccan-Swahili safari villa overlooking the Ewaso Nyiro River.",
        stay: "Sasaab",
        activityHighlight: "Sundowners from the high rocky kopje overlooking Samburu"
      },
      {
        day: 4,
        title: "Reteti Elephant Orphanage & Community Stewardship",
        location: "Namunyak Wildlife Conservancy",
        description: "Travel by private vehicle or helicopter to Reteti, Africa's first community-owned elephant rescue sanctuary. Meet the Samburu keepers nursing orphaned calves back to health.",
        stay: "Sasaab",
        activityHighlight: "Feeding time and intimate interaction with baby elephants"
      },
      {
        day: 5,
        title: "Photographing the Samburu Special Five",
        location: "Kalama Conservancy",
        description: "Spend full unhurried hours photographing Grevy's zebras with their narrow pinstripes, reticulated giraffes with geometric mosaics, and gerenuk antelopes standing tall on their hind legs.",
        stay: "Sasaab",
        activityHighlight: "Sunset camel trek followed by riverside torchlit dining"
      },
      {
        day: 6,
        title: "Ewaso Nyiro River & Bush Relaxation",
        location: "Samburu",
        description: "Take an unhurried morning relaxing in your private plunge pool watching herds of elephants drink from the river below. Afternoon game drive targeting pride movements.",
        stay: "Sasaab",
        activityHighlight: "Traditional Samburu singing wells visit in the dry riverbed"
      },
      {
        day: 7,
        title: "Return Flight to Nairobi",
        location: "Nairobi",
        description: "Enjoy a final dawn game drive before boarding your private aircraft back to Nairobi. Dayroom access and private dinner transfer provided.",
        stay: "Dayroom Nairobi",
        activityHighlight: "Panoramic aerial flyover of Mount Kenya's peaks"
      }
    ]
  },
  {
    id: "rift-valley-heli-safari",
    title: "Rift Valley & Northern Wilderness: The Aerial Heli-Safari",
    subtitle: "The ultimate unhurried perspective: private helicopter expeditions across secret Africa",
    duration: "6 Days / 5 Nights",
    region: "Great Rift Valley, Lake Turkana & Suguta",
    country: "Kenya",
    style: "aerial",
    styleLabel: "Private Aviation & Aerial Explorer",
    pacing: "Bespoke Air Safari",
    indicativePrice: "From $24,500 per person sharing (Private Eurocopter B3/H125)",
    bestMonths: ["January", "February", "March", "June", "July", "August", "September", "October", "November", "December"],
    heroImage: heliImg,
    overview: "For those who demand supreme exclusivity, this helicopter safari unlocks Kenya's most inaccessible and dramatic frontiers. Land on mountain peaks for morning coffee, hover above flamingo-draped alkaline lakes, and touch down inside dormant volcanic craters where no vehicle has ever traveled.",
    highlights: [
      "Dedicated Airbus H125 (Eurocopter B3) helicopter and senior bush pilot at your disposal throughout",
      "Landing on Mount Kenya's Lake Alice at 11,500ft for trout fishing and champagne",
      "Low-level flight through the painted dunes and rock hoodoos of the Suguta Valley",
      "Hovering over hundreds of thousands of crimson flamingos on Lake Logipi",
      "Total freedom of routing, adjusting flight paths spontaneously to follow wildlife"
    ],
    inclusions: [
      "All flight hours in a dedicated private turbine helicopter",
      "Bespoke landing permits in pristine conservation reserves",
      "Ultra-exclusive private lodge buyouts and luxury mobile camps",
      "Master sommelier curated pairings and private chef"
    ],
    accommodations: [
      "Rutundu Log Cabins (Mount Kenya Slopes)",
      "Desert Rose Lodge (Lake Turkana)",
      "Loisaba Lodo Springs (Laikipia)"
    ],
    days: [
      {
        day: 1,
        title: "Lift-off from Nairobi to Mount Kenya Peaks",
        location: "Mount Kenya",
        description: "Board your sleek helicopter from Nairobi. Bank across the agricultural highlands and climb rapidly up the jagged jagged spires of Mount Kenya, landing beside the crystal waters of Lake Alice.",
        stay: "Rutundu Mountain Haven",
        activityHighlight: "High-altitude fly fishing and roaring cedar wood fires"
      },
      {
        day: 2,
        title: "Rift Valley Escarpments & Lake Bogoria",
        location: "Great Rift Valley",
        description: "Descend into the Great Rift Valley, banking low over dramatic geysers and bubbling thermal springs at Lake Bogoria, surrounded by millions of feeding flamingos.",
        stay: "Loisaba Lodo Springs",
        activityHighlight: "Low-level photography of mineral ribbons and wildlife trails"
      },
      {
        day: 3,
        title: "The Suguta Valley: Africa's Grand Canyon",
        location: "Suguta Desert",
        description: "Fly north into the remote Suguta Valley, one of the hottest and most surreal landscapes on earth. Touch down amidst ancient volcanic cones and shifting golden dunes.",
        stay: "Desert Rose Lodge",
        activityHighlight: "Breakfast atop an isolated volcanic crater rim"
      },
      {
        day: 4,
        title: "The Jade Sea: Lake Turkana",
        location: "Lake Turkana",
        description: "Sweep over the emerald-green waters of Lake Turkana, the world's largest permanent desert lake. Visit prehistoric fossil beds where human origins were discovered.",
        stay: "Desert Rose Lodge",
        activityHighlight: "Private meeting with Turkana pastoralist community elders"
      },
      {
        day: 5,
        title: "Laikipia Plateau Big Game Flight",
        location: "Laikipia",
        description: "Fly back south to Loisaba Plateau. Transition from the air to an unhurried sunset open-vehicle safari searching for wild dogs and lions.",
        stay: "Loisaba Lodo Springs",
        activityHighlight: "Sleeping in an iconic Loisaba Star Bed under the open African cosmos"
      },
      {
        day: 6,
        title: "Scenic Skyline Return to Nairobi",
        location: "Nairobi",
        description: "A final sweeping flight tracking the Aberdare Mountain waterfalls before landing in Nairobi for your connecting international journey.",
        stay: "Departure",
        activityHighlight: "Aerial perspective of Nairobi National Park and city skyline"
      }
    ]
  },
  {
    id: "amboseli-chyulu-kilimanjaro",
    title: "Amboseli to Chyulu Hills: In the Shadow of Kilimanjaro",
    subtitle: "Tusker elephants, Hemingway's Green Hills of Africa, and private cloud forests",
    duration: "6 Days / 5 Nights",
    region: "Southern Kenya",
    country: "Kenya",
    style: "romance",
    styleLabel: "Romance, Scenery & Big Tuskers",
    pacing: "Unhurried & Immersive",
    indicativePrice: "From $11,900 per person sharing",
    bestMonths: ["January", "February", "June", "July", "August", "September", "October", "November", "December"],
    heroImage: campImg,
    overview: "Set in Hemingway's beloved 'Green Hills of Africa', this journey pairs the dramatic volcanic landscapes of the Chyulu Hills with the vast fever-tree marshes of private Amboseli concessions, where Africa's largest surviving 'super tusker' elephants roam against the snow-capped backdrop of Mount Kilimanjaro.",
    highlights: [
      "Exclusive access to 275,000-acre Mbirikani Maasai community conservancy",
      "Photographing legendary Big Tusker elephants with tusks reaching the grass",
      "Private horseback safaris through acacia meadows with plains game",
      "Stunning unhindered vistas of Mount Kilimanjaro from your private terrace",
      "Underground photographic hides positioned at active waterholes"
    ],
    inclusions: [
      "All internal charter flights from Nairobi Wilson to Chyulu airstrip",
      "Luxury lodge suite with plunge pool facing Kilimanjaro",
      "All meals, private sundowner excursions, and premium bar",
      "Horse riding, mountain biking, and night game drives included"
    ],
    accommodations: [
      "Ol Donyo Lodge (Chyulu Hills)",
      "Tortilis Camp Private House (Amboseli)"
    ],
    days: [
      {
        day: 1,
        title: "Flight to Chyulu Hills & Kilimanjaro Welcome",
        location: "Chyulu Hills",
        description: "Touch down on the private airstrip and transfer up into the verdant slopes of Ol Donyo Lodge. The snow dome of Mount Kilimanjaro rises majestically before your open living deck.",
        stay: "Ol Donyo Lodge",
        activityHighlight: "First sundowner overlooking the elephant-frequented waterhole"
      },
      {
        day: 2,
        title: "The Super Tuskers & Sunken Hide",
        location: "Mbirikani Conservancy",
        description: "Spend an unhurried morning seated at eye level in the lodge's underground hide as family herds of elephants and massive bulls drink mere feet from your camera lens.",
        stay: "Ol Donyo Lodge",
        activityHighlight: "Eye-level photographic session with Africa's largest tuskers"
      },
      {
        day: 3,
        title: "Horseback Canter & Cloud Forest Walk",
        location: "Chyulu Hills",
        description: "For riders of all skill levels, ride out alongside giraffes and zebras. In the afternoon, take a guided walk through ancient cloud forests teeming with rare butterflies and orchids.",
        stay: "Ol Donyo Lodge",
        activityHighlight: "Horseback game safari and bush breakfast in the wild"
      },
      {
        day: 4,
        title: "Amboseli Basin & Marshland Wildlife",
        location: "Amboseli Ecosystem",
        description: "Descend into the Amboseli basin where freshwater springs feed lush marshes. Watch hundreds of pelicans, hippos, and elephants bathing together in the crystal waters.",
        stay: "Tortilis Camp Private House",
        activityHighlight: "Tracking lion prides resting on the salt-white lake flats"
      },
      {
        day: 5,
        title: "Maasai Wisdom & Starlit Roof Bed",
        location: "Chyulu Hills",
        description: "Visit a traditional Maasai manyatta hosted by our resident guides. Tonight, have your bed rolled out onto the private rooftop terrace to sleep under the Milky Way.",
        stay: "Ol Donyo Lodge Star Bed",
        activityHighlight: "Sleeping under the Southern Cross with Kilimanjaro silhouetted in moonlight"
      },
      {
        day: 6,
        title: "Morning Sunburst & Flight to Nairobi",
        location: "Nairobi",
        description: "Watch the morning sun set Kilimanjaro ablaze with pink light before your short return flight to Nairobi for international departures.",
        stay: "Departure",
        activityHighlight: "Sunrise tea overlooking the great savannah plains"
      }
    ]
  },
  {
    id: "bush-to-beach-safari",
    title: "Mara Plains to Lamu Archipelago: Bush to Barefoot Ocean",
    subtitle: "From adrenaline-charged predator tracking to historic Swahili dhow sailing",
    duration: "10 Days / 9 Nights",
    region: "Masai Mara & Swahili Coast",
    country: "Kenya",
    style: "romance",
    styleLabel: "Bush & Beach Sanctuary",
    pacing: "Unhurried & Immersive",
    indicativePrice: "From $16,800 per person sharing",
    bestMonths: ["August", "September", "October", "December", "January", "February", "March"],
    heroImage: diningImg,
    overview: "The quintessential African grand tour. Begin with an intense, unhurried wildlife safari in Kenya's premier private concessions, then board a direct private charter to the timeless, vehicle-free island of Lamu or the pristine sands of Diani, staying in a fully staffed private oceanfront villa.",
    highlights: [
      "5 nights in a premier Masai Mara private concession camp",
      "Direct private charter flight from Masai Mara bush airstrip directly to the coast",
      "4 nights in a private, fully staffed beachfront villa or Swahili palace",
      "Private sunset dhow cruise through mangrove channels with fresh grilled lobster",
      "Snorkeling and diving pristine coral reefs with dolphins and sea turtles"
    ],
    inclusions: [
      "All internal charter and scheduled flights connecting bush and ocean",
      "All meals, private guide in the Mara, and private villa staff and chef on the coast",
      "Private dhow charter and water sports equipment"
    ],
    accommodations: [
      "Mara Plains Camp (Masai Mara)",
      "Alfajiri Villas (Diani Beach) or The Majlis (Lamu Archipelago)"
    ],
    days: [
      {
        day: 1,
        title: "Arrival in Nairobi & Fly to Masai Mara",
        location: "Masai Mara",
        description: "Fly straight from Nairobi into the beating heart of the Mara, settling into your canvas luxury suite before an afternoon game drive.",
        stay: "Mara Plains Camp",
        activityHighlight: "Golden hour lion tracking"
      },
      {
        day: 2,
        title: "Private Concession Immersion",
        location: "Masai Mara",
        description: "Full day following cheetahs across savannah grasslands and dining alfresco under the wild acacia trees.",
        stay: "Mara Plains Camp",
        activityHighlight: "Private bush luncheon and wildlife photography"
      },
      {
        day: 3,
        title: "River Crossings & Predator Valley",
        location: "Masai Mara",
        description: "Explore the remote corners of the concession, watching leopards stalk impalas through riparian river forests.",
        stay: "Mara Plains Camp",
        activityHighlight: "Night drive observing hyena packs and bat-eared foxes"
      },
      {
        day: 4,
        title: "Sunrise Balloon & Maasai Escort",
        location: "Masai Mara",
        description: "Hot air balloon flight followed by champagne breakfast and a quiet afternoon resting by the camp plunge pool.",
        stay: "Mara Plains Camp",
        activityHighlight: "Hot air balloon flight over the river bends"
      },
      {
        day: 5,
        title: "Direct Flight from Savannah to the Swahili Coast",
        location: "Lamu / Diani Coast",
        description: "Board your private charter aircraft directly from the red dirt airstrip of the Mara, watching the savannah give way to the turquoise expanse of the Indian Ocean. Step off into warm sea breezes.",
        stay: "Private Beachfront Villa",
        activityHighlight: "Sunset barefoot walk on powdery white coral sand"
      },
      {
        day: 6,
        title: "Private Dhow Sailing & Mangrove Feasts",
        location: "Lamu Archipelago",
        description: "Board an antique handcrafted Swahili dhow under billowing white sails. Cruise secret mangrove channels to an uninhabited sandbank for a freshly grilled seafood lunch.",
        stay: "Private Beachfront Villa",
        activityHighlight: "Swahili dhow cruise with fresh mangrove crab and chilled crisp wine"
      },
      {
        day: 7,
        title: "Historic UNESCO Lamu Old Town Exploration",
        location: "Lamu Town",
        description: "Wander the narrow coral-stone alleyways of Lamu, where donkeys remain the only transport. Admire intricately carved Swahili wooden doors and peaceful courtyard gardens.",
        stay: "Private Beachfront Villa",
        activityHighlight: "Private architectural tour with Lamu cultural historian"
      },
      {
        day: 8,
        title: "Dolphin Safari & Coral Reef Snorkeling",
        location: "Kisite-Mpunguti or Kiunga Marine Reserve",
        description: "Take a private speedboat out to offshore coral reefs teeming with sea turtles, rays, and pods of playful spinner dolphins.",
        stay: "Private Beachfront Villa",
        activityHighlight: "Snorkeling crystalline waters with resident green turtles"
      },
      {
        day: 9,
        title: "Unhurried Oceanfront Serenity",
        location: "Coast",
        description: "A day with zero agenda. Enjoy in-villa massages, watch traditional fishermen sail past, and savor a five-course farewell dinner under beach lanterns.",
        stay: "Private Beachfront Villa",
        activityHighlight: "Private beach bonfire with live acoustic coastal musicians"
      },
      {
        day: 10,
        title: "Coastal Flight to Nairobi & International Homeward Flight",
        location: "Nairobi",
        description: "Private flight back to Nairobi Wilson Airport, VIP transfer to Jomo Kenyatta Airport, and departure.",
        stay: "Departure",
        activityHighlight: "VIP lounge access before international flight"
      }
    ]
  }
];
