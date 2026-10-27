export interface Hotel {
  id: string;
  name: string;
  category: string;
  location: string;
  tag: string;
  rating: number;
  reviewsCount: number;
  brokerRateAed: number;
  retailRateAed: number;
  image: string;
  description: string;
  amenities: string[];
  perks: string[];
  suiteType: string;
  squareMeters: number;
}

export interface Villa {
  id: string;
  name: string;
  location: string;
  tag: string;
  bedrooms: number;
  bathrooms: number;
  guests: number;
  brokerRateAed: number;
  retailRateAed: number;
  image: string;
  description: string;
  beachFront: string;
  staff: string;
  features: string[];
}

export interface Activity {
  id: string;
  title: string;
  category: string;
  duration: string;
  tag: string;
  brokerRateAed: number;
  retailRateAed: number;
  image: string;
  description: string;
  highlights: string[];
  capacity: string;
}

export interface Supercar {
  id: string;
  make: string;
  model: string;
  year: number;
  category: string;
  tag: string;
  horsepower: number;
  zeroToHundred: string;
  brokerRateDayAed: number;
  retailRateDayAed: number;
  image: string;
  description: string;
  transmission: string;
  topSpeed: string;
  perks: string[];
}

export const CURRENCIES = {
  AED: { symbol: 'AED', rate: 1, name: 'UAE Dirham' },
  USD: { symbol: '$', rate: 0.272, name: 'US Dollar' },
  EUR: { symbol: '€', rate: 0.252, name: 'Euro' },
  GBP: { symbol: '£', rate: 0.215, name: 'British Pound' },
  SAR: { symbol: 'SAR', rate: 1.02, name: 'Saudi Riyal' },
};

export const HOTELS_DATA: Hotel[] = [
  {
    id: 'atlantis-the-royal',
    name: 'Atlantis The Royal',
    category: 'Ultra-Luxury Resort',
    location: 'Crescent Rd, Palm Jumeirah',
    tag: '5-STAR ELITE',
    rating: 4.99,
    reviewsCount: 342,
    brokerRateAed: 12500,
    retailRateAed: 16800,
    image: 'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=1200&q=80',
    description: 'The world’s most iconic experiential resort featuring Michelin-starred culinary venues, 90-meter sky pool, and private infinity beach access.',
    amenities: ['Cloud 22 Rooftop Pool', 'Celebrity Chef Dining', 'Awaken Luxury Spa', 'Helipad Access'],
    perks: ['Complimentary VIP Suite Upgrade', 'Fast-Track Airport Concierge', 'Personal 24/7 Royal Butler', 'Zero Broker Surcharge'],
    suiteType: 'Royal Mansion Suite (2-Bed)',
    squareMeters: 450,
  },
  {
    id: 'burj-al-arab',
    name: 'Burj Al Arab Jumeirah',
    category: 'Iconic Ultra-Luxury Landmark',
    location: 'Umm Suqeim 3, Jumeirah Beach',
    tag: '7-STAR CLASSIFIED',
    rating: 4.98,
    reviewsCount: 520,
    brokerRateAed: 15200,
    retailRateAed: 21000,
    image: 'https://images.unsplash.com/photo-1512453979798-5ea266f8880c?auto=format&fit=crop&w=1200&q=80',
    description: 'The quintessential symbol of Arabian opulence. Duplex suites with 24-karat gold-leaf accents, Hermès amenities, and private Rolls-Royce airport transfers.',
    amenities: ['Private Beach & Cabanas', 'Talise Spa with Ocean Panorama', 'Submarine Aquarium Restaurant', 'Chauffeur Phantom Service'],
    perks: ['Complimentary Champagne & Caviar on Arrival', 'Private Yacht Berth Access', 'Hermès Full Fragrance Set', 'Direct Broker Privilege Desk'],
    suiteType: 'Deluxe Two-Bedroom Presidential Suite',
    squareMeters: 335,
  },
  {
    id: 'armani-hotel-dubai',
    name: 'Armani Hotel Dubai',
    category: 'Designer Haute Couture Hotel',
    location: 'Burj Khalifa, Downtown Dubai',
    tag: 'DOWNTOWN ICON',
    rating: 4.95,
    reviewsCount: 289,
    brokerRateAed: 9800,
    retailRateAed: 13400,
    image: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=1200&q=80',
    description: 'Envisioned by Giorgio Armani within the Burj Khalifa. Direct VIP access to The Dubai Mall and front-row vistas of the Dubai Fountain.',
    amenities: ['Direct Burj Khalifa Elevator', 'Armani/Ristorante Fine Dining', 'Private Lifestyle Manager', 'Armani/SPA hydrotherapy'],
    perks: ['Guaranteed High-Floor Fountain View', 'Complimentary In-Room Dining Credit', 'VIP Burj Khalifa Observation Lounge Pass'],
    suiteType: 'Armani Dubai Suite (Burj Khalifa Level 39)',
    squareMeters: 390,
  },
  {
    id: 'bulgari-resort-dubai',
    name: 'Bulgari Resort & Residences',
    category: 'Private Island Haven',
    location: 'Jumeira Bay Island',
    tag: 'PRIVATE ISLAND',
    rating: 4.97,
    reviewsCount: 198,
    brokerRateAed: 18500,
    retailRateAed: 24000,
    image: 'https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=1200&q=80',
    description: 'An exclusive Mediterranean jewel situated on seahorse-shaped Jumeira Bay Island. Features a 46-boat private yacht club and pristine secluded beaches.',
    amenities: ['Private Marina Yacht Club', 'Il Ristorante - Niko Romito', 'Private Beach Cabana Villas', 'Vitality Pool in Green Onyx'],
    perks: ['Exclusive Yacht Mooring Privilege', '24-Hour In-Villa Chef Service', 'Private Airport Limousine Transfer'],
    suiteType: 'The Bulgari 3-Bedroom Villa with Lap Pool',
    squareMeters: 540,
  },
  {
    id: 'one-and-only-zaabeel',
    name: 'One&Only One Za’abeel',
    category: 'Futuristic Luxury Resort',
    location: 'Za’abeel 1, Financial District',
    tag: 'THE LINK CANTILEVER',
    rating: 4.94,
    reviewsCount: 145,
    brokerRateAed: 8900,
    retailRateAed: 11800,
    image: 'https://images.unsplash.com/photo-1571896349842-33c89424de2d?auto=format&fit=crop&w=1200&q=80',
    description: 'Home to "The Link", the world’s longest cantilever suspended 100 meters above ground with Michelin-starred culinary concepts and an infinity sky pool.',
    amenities: ['World’s Longest Cantilever Sky Pool', 'Dua Lipa & Hollywood Favorite', 'Longevity Clinic by Clinique La Prairie'],
    perks: ['Reserved Cabana at Tapasake Sky Pool', 'Priority Michelin Restaurant Bookings', 'VIP Broker Check-in'],
    suiteType: 'Panoramic Sanctuary Suite',
    squareMeters: 280,
  },
];

export const VILLAS_DATA: Villa[] = [
  {
    id: 'palm-signature-villa',
    name: 'The Palm Royale Beachfront Palace',
    location: 'Frond N, Palm Jumeirah',
    tag: 'PRIVATE BEACHFRONT',
    bedrooms: 6,
    bathrooms: 8,
    guests: 12,
    brokerRateAed: 35000,
    retailRateAed: 48000,
    image: 'https://images.unsplash.com/photo-1613490493576-7fde63acd811?auto=format&fit=crop&w=1200&q=80',
    description: 'A 15,000 sq ft custom architectural masterpiece on the open sea of Palm Jumeirah. Private sandy beach, heated infinity pool with sunken fire pit.',
    beachFront: '95 meters private direct beach access',
    staff: 'Full live-in staff (Executive Chef, Butler, Housekeeper, Chauffeur)',
    features: ['Private Cinema (12 Seats)', 'Rooftop Lounge facing Atlantis', 'Smart Home Crestron System', 'Private Yacht Jet Ski Slipway'],
  },
  {
    id: 'emirates-hills-estate',
    name: 'Emirates Hills Royal Golf Mansion',
    location: 'Sector V, Emirates Hills',
    tag: 'ULTRA-SECURE ENCLAVE',
    bedrooms: 7,
    bathrooms: 9,
    guests: 14,
    brokerRateAed: 42000,
    retailRateAed: 58000,
    image: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=1200&q=80',
    description: 'Dubai’s "Beverly Hills". Overlooking the Montgomerie Championship Golf Course with subterranean 10-car showcase garage and gold mosaic spa.',
    beachFront: 'Expansive private golf course fairway panorama',
    staff: 'Dedicated Butler, Master Chef, 24/7 Security Escort',
    features: ['10-Car Air-Conditioned Showroom', 'Private Wellness Spa & Steam Room', 'Wine Tasting Cellar', 'Heated Olympic Lap Pool'],
  },
  {
    id: 'pearl-jumeirah-residence',
    name: 'Pearl Jumeirah Azure Waterfront Villa',
    location: 'Pearl Jumeirah Island',
    tag: 'SECLUDED ISLAND',
    bedrooms: 5,
    bathrooms: 6,
    guests: 10,
    brokerRateAed: 28000,
    retailRateAed: 37500,
    image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80',
    description: 'Contemporary European-styled sanctuary directly facing the Arabian Gulf skyline with floor-to-ceiling glass and private sunset deck.',
    beachFront: 'Private sea-fronting promenade access',
    staff: 'Butler and Daily Gourmet Breakfast Chef',
    features: ['Zero-Edge Glass Pool', 'Gym & Pilates Reformer Studio', 'Private Elevator', 'Sonos Architectural Sound Throughout'],
  },
];

export const ACTIVITIES_DATA: Activity[] = [
  {
    id: 'megayacht-charter',
    title: '140ft Benetti Luxury Superyacht Charter',
    category: 'Private Marine Charter',
    duration: '4 to 8 Hours',
    tag: 'VIP ACCESS',
    brokerRateAed: 18000,
    retailRateAed: 25000,
    image: 'https://images.unsplash.com/photo-1569263979104-865ab7cd8d17?auto=format&fit=crop&w=1200&q=80',
    description: 'Cruise the Dubai Marina, JBR, Bluewaters, and the Burj Al Arab aboard a multi-deck Italian superyacht with jacuzzi, jet skis, and onboard private chef.',
    highlights: ['Includes 2 Jet Skis & Seabob', 'Gourmet Mediterranean Canapés & BBQ', 'Professional Captain & 6 Crew', 'Burj Al Arab Anchor Stop'],
    capacity: 'Up to 35 VIP Guests',
  },
  {
    id: 'desert-royal-safari',
    title: 'Platinum Heritage Royal Desert Expedition',
    category: 'Desert Safari',
    duration: '6 Hours (Sunset & Evening)',
    tag: 'EXCLUSIVE RESERVE',
    brokerRateAed: 4500,
    retailRateAed: 6500,
    image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=1200&q=80',
    description: 'Travel through the Dubai Desert Conservation Reserve in a vintage 1950s Land Rover. Private royal cabana dining, live falconry demonstration, and stargazing.',
    highlights: ['Private Royal Oasis Setting', '6-Course Fine Dining Under the Stars', 'Private Falcon Show with Sheikh Falconers', 'Zero Commercial Crowds'],
    capacity: 'Private Group (2-6 Guests)',
  },
  {
    id: 'helicopter-aerial-tour',
    title: 'Private VIP Helicopter Skyline Tour',
    category: 'Aviation',
    duration: '25 or 45 Minutes',
    tag: 'AERIAL PANORAMA',
    brokerRateAed: 3800,
    retailRateAed: 5200,
    image: 'https://images.unsplash.com/photo-1508614589041-895b88991e3e?auto=format&fit=crop&w=1200&q=80',
    description: 'Private charter takeoff from Dubai Police Academy or Atlantis Helipad. Fly directly over The Palm, Burj Khalifa, World Islands, and Dubai Coastline.',
    highlights: ['Guaranteed Front Cockpit Seating', 'VIP Terminal Lounge & Champagne', 'In-Flight Audio Tour by Captain', 'Exclusive Takeoff Timing'],
    capacity: 'Private Flight (Up to 5 Guests)',
  },
  {
    id: 'vip-nightlife-table',
    title: 'Ultra-VIP Nightlife & Beach Club Allocation',
    category: 'Nightlife & Beach Clubs',
    duration: 'Full Day / Night Access',
    tag: 'GUARANTEED ALLOCATION',
    brokerRateAed: 6000,
    retailRateAed: 9000,
    image: 'https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?auto=format&fit=crop&w=1200&q=80',
    description: 'Direct prime table allocation at Surf Club Palm Jumeirah, Verde Beach Dubai, Ling Ling, or 1 OAK with priority security escort and 100% minimum spend credit.',
    highlights: ['Front-Row Ocean / DJ Booth Table', 'Direct Host Welcome & No Queuing', '100% Minimum Spend Credited to Premium Bottles', 'Personal Concierge on Call'],
    capacity: 'Up to 10 VIP Guests',
  },
];

export const SUPERCARS_DATA: Supercar[] = [
  {
    id: 'rolls-royce-cullinan',
    make: 'Rolls-Royce',
    model: 'Cullinan Black Badge',
    year: 2025,
    category: 'Ultra-Luxury SUV',
    tag: 'SUPERCAR FLEET',
    horsepower: 600,
    zeroToHundred: '4.9s',
    brokerRateDayAed: 4800,
    retailRateDayAed: 6500,
    image: 'https://images.unsplash.com/photo-1631295868223-63265b40d9e4?auto=format&fit=crop&w=1200&q=80',
    description: 'The pinnacle of luxury SUV engineering. Shooting star starlight headliner, bespoke mandarin leather interior, and whisper-quiet V12 twin-turbo power.',
    transmission: 'Automatic 8-Speed',
    topSpeed: '250 km/h (Governed)',
    perks: ['Free Airport Terminal Delivery', 'Zero Deposit with Broker Verification', 'Chauffeur Option Available', 'Unlimited Daily Salik Tolls'],
  },
  {
    id: 'lamborghini-revuelto',
    make: 'Lamborghini',
    model: 'Revuelto V12 Hybrid',
    year: 2025,
    category: 'V12 Hypercar',
    tag: 'HYBRID V12 BEAST',
    horsepower: 1015,
    zeroToHundred: '2.5s',
    brokerRateDayAed: 7800,
    retailRateDayAed: 11000,
    image: 'https://images.unsplash.com/photo-1544829099-b9a0c07fad1a?auto=format&fit=crop&w=1200&q=80',
    description: 'Lamborghini’s newest flagship electrified V12. Breathtaking carbon monocoque architecture, fighter-jet cockpit controls, and 1015 metric horsepower.',
    transmission: '8-Speed Dual-Clutch',
    topSpeed: '350 km/h',
    perks: ['Carbon Ceramic Brakes', 'Full Track Telemetry', 'VIP Handover Specialist at Hotel', 'Zero Broker Surcharge'],
  },
  {
    id: 'ferrari-purosangue',
    make: 'Ferrari',
    model: 'Purosangue V12',
    year: 2025,
    category: 'Super Sports Utility',
    tag: 'NATURALLY ASPIRATED V12',
    horsepower: 725,
    zeroToHundred: '3.3s',
    brokerRateDayAed: 6900,
    retailRateDayAed: 9500,
    image: 'https://images.unsplash.com/photo-1583121274602-3e2820c69888?auto=format&fit=crop&w=1200&q=80',
    description: 'Ferrari’s legendary 6.5-litre naturally aspirated V12 in a revolutionary four-door body with rear suicide doors and racing dynamics.',
    transmission: '8-Speed F1 Dual-Clutch',
    topSpeed: '310 km/h',
    perks: ['Sport Exhaust Package', 'Bespoke Carbon Trim', 'Complimentary Second Driver Inclusion', '24/7 Roadside VIP Concierge'],
  },
  {
    id: 'mercedes-maybach-s680',
    make: 'Mercedes-Maybach',
    model: 'S680 V12 Bi-Turbo',
    year: 2025,
    category: 'Executive Chauffeur Limousine',
    tag: 'CHAUFFEUR INCLUDED',
    horsepower: 621,
    zeroToHundred: '4.5s',
    brokerRateDayAed: 3900,
    retailRateDayAed: 5200,
    image: 'https://images.unsplash.com/photo-1617788138017-80ad40651399?auto=format&fit=crop&w=1200&q=80',
    description: 'The definitive limousine experience. Executive reclining airline seats with hot stone massage, Burmester 4D High-End 3D Sound, and silver-plated champagne flutes.',
    transmission: '9G-TRONIC Automatic',
    topSpeed: '250 km/h',
    perks: ['Includes Uniformed English/Arabic Chauffeur (10 Hours)', 'Chilled Evian & Champagne Fridge', 'DIFC & Downtown VIP Lane Access'],
  },
];
