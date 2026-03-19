import { 
  Hotel, 
  Utensils, 
  Gamepad2, 
  Sparkles, 
  Map, 
  Info, 
  Newspaper,
  Compass,
  Clock,
  CloudRain,
  Car,
  Star
} from 'lucide-react';

export const CATEGORIES = [
  { id: 'stays', name: 'Premium Stays', icon: <Hotel className="w-5 h-5" />, path: '/stays' },
  { id: 'dining', name: 'Fine Dining', icon: <Utensils className="w-5 h-5" />, path: '/dining' },
  { id: 'entertainment', name: 'Evening Entertainment', icon: <Gamepad2 className="w-5 h-5" />, path: '/entertainment' },
  { id: 'wellness', name: 'Mountain Wellness', icon: <Sparkles className="w-5 h-5" />, path: '/wellness' },
  { id: 'guide', name: 'Genting Guide', icon: <Map className="w-5 h-5" />, path: '/guide' },
  { id: 'blog', name: 'Insider Blog', icon: <Newspaper className="w-5 h-5" />, path: '/blog' },
];

export const FEATURED_VENUES = [
  {
    id: 1,
    name: "Crockfords Hotel",
    category: "Premium Stays",
    description: "The only hotel in Malaysia to receive the Forbes Travel Guide Five-Star award for five consecutive years.",
    image: "https://picsum.photos/seed/crockfords/800/600",
    rating: 5.0,
  },
  {
    id: 2,
    name: "Burger & Lobster",
    category: "Fine Dining",
    description: "Wild-caught Atlantic lobsters and prime cut Nebraskan burgers served at 6,000ft above sea level.",
    image: "https://picsum.photos/seed/lobster/800/600",
    rating: 4.8,
  },
  {
    id: 3,
    name: "Platinum Casino",
    category: "Evening Entertainment",
    description: "An exclusive gaming environment for the most discerning players, featuring private salons and VIP service.",
    image: "https://picsum.photos/seed/casino/800/600",
    rating: 4.9,
  },
  {
    id: 4,
    name: "M Spa",
    category: "Wellness",
    description: "Rejuvenate your senses with signature treatments inspired by the cool mountain air.",
    image: "https://picsum.photos/seed/spa/800/600",
    rating: 4.7,
  }
];

export const INSIDER_TIPS = [
  {
    title: "The Golden Hour",
    content: "For the best mountain views, head to the SkyAvenue outdoor deck precisely 20 minutes before sunset."
  },
  {
    title: "Climate Control",
    content: "The temperature drops significantly at night. Always carry a light cashmere wrap or a tailored blazer."
  },
  {
    title: "VIP Access",
    content: "Many high-end lounges require a Genting Rewards Platinum card or above. Inquire about temporary guest passes at the concierge."
  }
];

export const GUIDE_SECTIONS = {
  gettingThere: {
    title: "Getting to Genting",
    content: "Located just 45 minutes from Kuala Lumpur, the journey to the peak is an experience in itself. Whether you choose a private limousine or the scenic Awana SkyWay, the ascent offers breathtaking views of the 130-million-year-old rainforest."
  },
  bestTime: {
    title: "Best Times to Visit",
    content: "While Genting is a year-round destination, the months of May to July offer the clearest skies. For those seeking the true 'above the clouds' experience, the monsoon season (November-February) brings dramatic mist and a cozy atmosphere."
  },
  packing: {
    title: "Weather & What to Pack",
    content: "Expect temperatures between 14°C and 25°C. Smart-casual is the standard for most premium venues. For evening entertainment, formal attire is often preferred."
  }
};

export const ENTERTAINMENT_CONTENT = {
  casinoGuide: {
    title: "Casino Guides & Tips",
    description: "Navigate the world-class gaming floors with confidence. From traditional table games to the latest electronic slots, we provide the insights you need."
  },
  vipLounge: {
    title: "VIP Lounge Access",
    description: "Discover the hidden sanctuaries where privacy meets luxury. Exclusive refreshments, private hosts, and serene environments await."
  },
  partnerSpotlight: {
    name: "Platinum Casino",
    tagline: "The Peak Lounge Partner Spotlight",
    description: "Platinum Casino represents the pinnacle of gaming in Genting Highlands. With its sophisticated atmosphere and unparalleled service, it is the preferred choice for our members."
  }
};
