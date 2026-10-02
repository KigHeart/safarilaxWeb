import { GalleryImage } from '../types';
import { heroImg, campImg, leopardImg, heliImg, diningImg } from './images';

export const GALLERY_ITEMS: GalleryImage[] = [
  {
    id: "g1",
    title: "Golden Hour in Mara North",
    caption: "An unhurried silence descends across the open savannah as the sun dips below the horizon, casting amber light across ancient acacia trees.",
    category: "landscapes",
    location: "Mara North Conservancy, Kenya",
    image: heroImg,
    aspect: "16:9"
  },
  {
    id: "g2",
    title: "The Solitary Leopard",
    caption: "A magnificent leopard resting calmly on an acacia branch in Samburu, observed in stillness without another safari vehicle in sight.",
    category: "wildlife",
    location: "Kalama Community Wildlife Conservancy, Kenya",
    image: leopardImg,
    aspect: "4:3"
  },
  {
    id: "g3",
    title: "Sanctuary under Canvas",
    caption: "The quiet luxury of a private tented veranda perched above the Mara River, where the murmur of water accompanies afternoon rest.",
    category: "camps",
    location: "Masai Mara Concession, Kenya",
    image: campImg,
    aspect: "4:3"
  },
  {
    id: "g4",
    title: "Aerial Majesty over the Great Rift",
    caption: "Soaring low in a private Airbus H125 helicopter over geological faults, soda lakes, and ribbons of migratory pink flamingos.",
    category: "aerial",
    location: "Great Rift Valley & Lake Bogoria, Kenya",
    image: heliImg,
    aspect: "4:3"
  },
  {
    id: "g5",
    title: "Breakfast in the Savannah",
    caption: "Crisp white linen, steaming Kenyan coffee, and silver teapots laid out under the morning sky as giraffes pass quietly in the distance.",
    category: "unhurried",
    location: "Lewa Wildlife Conservancy, Kenya",
    image: diningImg,
    aspect: "4:3"
  },
  {
    id: "g6",
    title: "Twilight Reflections",
    caption: "Warm lantern light illuminating the natural wood and handcrafted safari campaign furniture as dusk settles over the bush.",
    category: "camps",
    location: "Chyulu Hills, Kenya",
    image: campImg,
    aspect: "4:3"
  },
  {
    id: "g7",
    title: "The Watchful Gaze",
    caption: "A private photographic encounter where patient guides allow subjects to reveal their natural demeanor without disruption.",
    category: "wildlife",
    location: "Laikipia Plateau, Kenya",
    image: leopardImg,
    aspect: "4:3"
  },
  {
    id: "g8",
    title: "Vast Horizons",
    caption: "Endless plains stretching toward purple volcanic escarpments under the immense African sky, untouched and tranquil.",
    category: "landscapes",
    location: "Amboseli Ecosystem, Kenya",
    image: heroImg,
    aspect: "16:9"
  }
];
