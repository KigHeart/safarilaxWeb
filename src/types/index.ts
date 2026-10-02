export type PageId = 'home' | 'about' | 'journeys' | 'services' | 'gallery' | 'contact';

export interface JourneyDay {
  day: number | string;
  title: string;
  location: string;
  description: string;
  stay: string;
  activityHighlight: string;
}

export interface Journey {
  id: string;
  title: string;
  subtitle: string;
  duration: string;
  region: string;
  country: string;
  style: 'classic' | 'photographic' | 'aerial' | 'romance' | 'family';
  styleLabel: string;
  pacing: string;
  indicativePrice: string;
  bestMonths: string[];
  heroImage: string;
  overview: string;
  highlights: string[];
  inclusions: string[];
  accommodations: string[];
  days: JourneyDay[];
}

export interface ServiceItem {
  id: string;
  number: string;
  title: string;
  shortDesc: string;
  fullDesc: string;
  features: string[];
  image?: string;
  iconName: string;
}

export interface GalleryImage {
  id: string;
  title: string;
  caption: string;
  category: 'wildlife' | 'camps' | 'landscapes' | 'aerial' | 'unhurried';
  location: string;
  image: string;
  aspect?: string;
}

export interface Testimonial {
  id: string;
  quote: string;
  guestName: string;
  guestLocation: string;
  journeyTaken: string;
  year: string;
}

export interface EnquiryData {
  fullName: string;
  email: string;
  phone: string;
  countryOfResidence: string;
  travelDates: string;
  durationDays: string;
  adultsCount: number;
  childrenCount: number;
  budgetPerPerson: string;
  destinations: string[];
  journeyStyle: string;
  specialRequests: string;
  hearAboutUs: string;
}
