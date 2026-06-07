export interface IndustryData {
  slug: string;
  title: string;
  icon: string;
  headline: string;
  desc: string;
  apps: string[];
  features: { title: string; desc: string }[];
  stats: { label: string; value: string }[];
  image: string;
  color: string;
}

const INDUSTRIES: IndustryData[] = [
  {
    slug: 'healthcare',
    title: 'Healthcare',
    icon: '🏥',
    headline: 'Healthcare App Development',
    desc: 'Telemedicine platforms, EMR systems, patient management apps, doctor-on-demand, mental health, and hospital management solutions.',
    apps: ['Doctor Appointment', 'Telemedicine', 'EMR Software', 'Mental Health App', 'Medical Delivery', 'Hospital Management'],
    features: [
      { title: 'Telemedicine Platforms', desc: 'HIPAA-compliant video consultation apps with e-prescriptions and scheduling.' },
      { title: 'EMR / EHR Systems', desc: 'Electronic medical records with HL7 FHIR integration and clinical decision support.' },
      { title: 'Patient Management', desc: 'End-to-end patient journey management from admission to discharge.' },
      { title: 'Mental Health Apps', desc: 'Therapy session platforms, mood tracking, and CBT exercise apps.' },
    ],
    stats: [{ label: 'Apps Delivered', value: '240+' }, { label: 'HIPAA Projects', value: '80+' }, { label: 'Countries', value: '15+' }],
    image: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=1200&h=400&q=80',
    color: 'from-red-500 to-pink-500',
  },
  {
    slug: 'ecommerce',
    title: 'Ecommerce',
    icon: '🛒',
    headline: 'Ecommerce App Development',
    desc: 'B2C stores, B2B portals, multi-vendor marketplaces, headless commerce, and mobile shopping experiences.',
    apps: ['Marketplace App', 'B2B Portal', 'Fashion Store', 'Grocery Delivery', 'Wholesale Platform', 'Subscription Commerce'],
    features: [
      { title: 'Multi-Vendor Marketplaces', desc: 'Amazon-like platforms with seller dashboards, inventory, and payouts.' },
      { title: 'Headless Commerce', desc: 'API-first commerce backends powering any frontend framework.' },
      { title: 'Payment Integration', desc: 'Razorpay, Stripe, PayPal, and 15+ payment gateways supported.' },
      { title: 'Personalisation', desc: 'AI-powered recommendations and personalised shopping feeds.' },
    ],
    stats: [{ label: 'Apps Delivered', value: '310+' }, { label: 'GMV Processed', value: '$500M+' }, { label: 'Payment Gateways', value: '15+' }],
    image: 'https://images.unsplash.com/photo-1563013544-824ae1b704d3?auto=format&fit=crop&w=1200&h=400&q=80',
    color: 'from-orange-500 to-amber-500',
  },
  {
    slug: 'elearning',
    title: 'E-learning',
    icon: '📚',
    headline: 'E-learning App Development',
    desc: 'LMS platforms, virtual classrooms, EdTech mobile apps, video learning, and gamified education systems.',
    apps: ['LMS Platform', 'Virtual Classroom', 'Tutor Booking', 'Yoga App', 'Education App', 'Gamified Learning'],
    features: [
      { title: 'LMS Platforms', desc: 'SCORM-compliant learning management systems with progress tracking.' },
      { title: 'Live Virtual Classrooms', desc: 'Zoom-like live sessions with whiteboards, polls, and breakout rooms.' },
      { title: 'Video Learning', desc: 'Adaptive video players with offline downloads and speed controls.' },
      { title: 'Gamification', desc: 'Points, badges, leaderboards, and streaks to boost engagement.' },
    ],
    stats: [{ label: 'Apps Delivered', value: '185+' }, { label: 'Learners Reached', value: '5M+' }, { label: 'Countries', value: '20+' }],
    image: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=1200&h=400&q=80',
    color: 'from-blue-500 to-indigo-500',
  },
  {
    slug: 'fintech',
    title: 'Fintech',
    icon: '💳',
    headline: 'Fintech App Development',
    desc: 'Digital banking, payment gateways, investment platforms, trading apps, eWallets, and insurance tech.',
    apps: ['eWallet App', 'Trading Platform', 'Insurance App', 'Payment Gateway', 'Banking App', 'Crypto Exchange'],
    features: [
      { title: 'Digital Banking', desc: 'Neobank platforms with KYC, onboarding, and transaction management.' },
      { title: 'Investment Platforms', desc: 'Stock trading, mutual funds, and SIP management applications.' },
      { title: 'eWallet Solutions', desc: 'UPI, card, and crypto wallet apps with split-bill and P2P transfers.' },
      { title: 'Insurance Tech', desc: 'Policy management, claims processing, and premium calculation engines.' },
    ],
    stats: [{ label: 'Apps Delivered', value: '195+' }, { label: 'Transactions/Day', value: '10M+' }, { label: 'RBI Compliant', value: '100%' }],
    image: 'https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&w=1200&h=400&q=80',
    color: 'from-green-500 to-emerald-500',
  },
  {
    slug: 'food',
    title: 'Food Industry',
    icon: '🍕',
    headline: 'Food & Delivery App Development',
    desc: 'Food delivery platforms, restaurant management, cloud kitchen, grocery delivery, and meal planning apps.',
    apps: ['Food Delivery', 'Restaurant App', 'Cloud Kitchen', 'Grocery App', 'Milk Delivery', 'Meal Planning'],
    features: [
      { title: 'Food Delivery Platforms', desc: 'Swiggy/Zomato-like platforms with live tracking and driver apps.' },
      { title: 'Restaurant Management', desc: 'Table booking, POS integration, menu management, and analytics.' },
      { title: 'Cloud Kitchen Solutions', desc: 'Multi-brand kitchen management with order routing and capacity planning.' },
      { title: 'Grocery Delivery', desc: 'Dark-store operations, inventory management, and 10-minute delivery.' },
    ],
    stats: [{ label: 'Apps Delivered', value: '220+' }, { label: 'Orders/Day', value: '2M+' }, { label: 'Restaurant Clients', value: '500+' }],
    image: 'https://images.unsplash.com/photo-1565299507177-b0ac66763828?auto=format&fit=crop&w=1200&h=400&q=80',
    color: 'from-yellow-500 to-orange-500',
  },
  {
    slug: 'travel',
    title: 'Travel & Tourism',
    icon: '✈️',
    headline: 'Travel App Development',
    desc: 'Booking engines, hotel management, OTA platforms, travel planning, and fleet management solutions.',
    apps: ['Hotel Booking', 'Flight Booking', 'Travel Planner', 'Car Rental', 'Tour Guide App', 'OTA Platform'],
    features: [
      { title: 'OTA Booking Engines', desc: 'Flight, hotel, and activity booking with GDS and channel manager integration.' },
      { title: 'Hotel Management', desc: 'Property management systems with dynamic pricing and OTA sync.' },
      { title: 'Travel Planning', desc: 'AI itinerary builders, offline maps, and real-time travel alerts.' },
      { title: 'Fleet Management', desc: 'Car rental, cab booking, and fleet tracking solutions.' },
    ],
    stats: [{ label: 'Apps Delivered', value: '140+' }, { label: 'Bookings Processed', value: '$200M+' }, { label: 'GDS Integrations', value: '10+' }],
    image: 'https://images.unsplash.com/photo-1488646953014-85cb44e25828?auto=format&fit=crop&w=1200&h=400&q=80',
    color: 'from-sky-500 to-blue-600',
  },
  {
    slug: 'sports',
    title: 'Sports',
    icon: '⚽',
    headline: 'Sports App Development',
    desc: 'Fantasy sports platforms, live score apps, fan engagement, fitness tracking, and sports betting solutions.',
    apps: ['Fantasy Sports', 'Live Scores', 'Fitness Tracker', 'Sports Betting', 'Gym Management', 'Coach Platform'],
    features: [
      { title: 'Fantasy Sports Platforms', desc: 'Dream11-like fantasy cricket, football, and kabaddi with real-time scoring.' },
      { title: 'Live Score & Statistics', desc: 'Real-time match updates, player stats, and push notifications.' },
      { title: 'Fitness & Wellness', desc: 'Workout tracking, nutrition logging, and personal trainer platforms.' },
      { title: 'Stadium Experience', desc: 'Fan engagement apps with seat booking and in-stadium ordering.' },
    ],
    stats: [{ label: 'Apps Delivered', value: '130+' }, { label: 'Active Users', value: '10M+' }, { label: 'Sports Covered', value: '20+' }],
    image: 'https://images.unsplash.com/photo-1540747913346-19212a4b423b?auto=format&fit=crop&w=1200&h=400&q=80',
    color: 'from-lime-500 to-green-600',
  },
  {
    slug: 'entertainment',
    title: 'Entertainment',
    icon: '🎬',
    headline: 'Entertainment App Development',
    desc: 'OTT streaming platforms, music apps, gaming, social content creation, and live streaming solutions.',
    apps: ['Video Streaming', 'Music App', 'Podcast App', 'Live Streaming', 'Gaming Platform', 'Social Content'],
    features: [
      { title: 'OTT Streaming Platforms', desc: 'Netflix-like platforms with DRM, adaptive bitrate, and offline downloads.' },
      { title: 'Music & Podcast Apps', desc: 'Audio streaming with offline sync, playlist curation, and lyrics.' },
      { title: 'Live Streaming', desc: 'Low-latency live broadcasting with gifts, polls, and monetisation.' },
      { title: 'Casual Gaming', desc: 'Hyper-casual and mid-core mobile games with multiplayer and leaderboards.' },
    ],
    stats: [{ label: 'Apps Delivered', value: '175+' }, { label: 'Content Hours Served', value: '1B+' }, { label: 'Streaming CDNs', value: '8+' }],
    image: 'https://images.unsplash.com/photo-1516802273409-68526ee1bdd6?auto=format&fit=crop&w=1200&h=400&q=80',
    color: 'from-purple-500 to-violet-600',
  },
  {
    slug: 'on-demand',
    title: 'On-Demand Services',
    icon: '🛵',
    headline: 'On-Demand App Development',
    desc: 'Uber-like platforms, home services, courier delivery, handyman, and multi-service on-demand solutions.',
    apps: ['Home Services', 'Courier Delivery', 'Car Wash', 'Laundry App', 'Handyman App', 'Beauty Services'],
    features: [
      { title: 'Multi-Service Platforms', desc: 'UrbanClap-like platforms with category management and provider apps.' },
      { title: 'Real-Time Tracking', desc: 'GPS-powered live tracking for drivers, delivery agents, and service providers.' },
      { title: 'Dynamic Pricing', desc: 'Surge pricing, demand forecasting, and promotional pricing engines.' },
      { title: 'Rating & Trust', desc: 'Two-way ratings, background verification, and dispute resolution flows.' },
    ],
    stats: [{ label: 'Apps Delivered', value: '290+' }, { label: 'Bookings/Day', value: '500K+' }, { label: 'Service Categories', value: '50+' }],
    image: 'https://images.unsplash.com/photo-1601972599720-36938d4ecd31?auto=format&fit=crop&w=1200&h=400&q=80',
    color: 'from-teal-500 to-cyan-600',
  },
  {
    slug: 'social',
    title: 'Social Networking',
    icon: '🤝',
    headline: 'Social Networking App Development',
    desc: 'Social platforms, dating apps, community forums, messaging apps, and influencer platforms.',
    apps: ['Dating App', 'Community App', 'Messaging App', 'Influencer Platform', 'Matrimonial App', 'Professional Network'],
    features: [
      { title: 'Social Feed & Discovery', desc: 'Algorithm-driven content feeds with hashtags, explore, and trending.' },
      { title: 'Real-Time Messaging', desc: 'WebSocket-powered chat with read receipts, media sharing, and encryption.' },
      { title: 'Live Streaming', desc: 'Social live broadcasting with comments, reactions, and monetisation.' },
      { title: 'Content Moderation', desc: 'AI-powered moderation tools and community reporting systems.' },
    ],
    stats: [{ label: 'Apps Delivered', value: '165+' }, { label: 'Users Served', value: '50M+' }, { label: 'Messages/Day', value: '100M+' }],
    image: 'https://images.unsplash.com/photo-1611162617474-5b21e879e113?auto=format&fit=crop&w=1200&h=400&q=80',
    color: 'from-pink-500 to-rose-600',
  },
  {
    slug: 'escooter',
    title: 'E-Scooter',
    icon: '🛴',
    headline: 'E-Scooter & EV App Development',
    desc: 'Electric vehicle fleet management, ride-sharing, IoT integration, and EV charging station apps.',
    apps: ['EV Fleet App', 'Scooter Sharing', 'EV Charging', 'Bike Rental', 'Fleet Management', 'IoT Dashboard'],
    features: [
      { title: 'Fleet Management', desc: 'Real-time EV fleet tracking, battery monitoring, and maintenance alerts.' },
      { title: 'Ride Sharing', desc: 'QR-code unlock, trip management, and multi-payment checkout.' },
      { title: 'IoT Integration', desc: 'GPS, BMS, and telematics integration for connected EV fleets.' },
      { title: 'EV Charging', desc: 'Charging station locator, slot booking, and billing integration.' },
    ],
    stats: [{ label: 'Apps Delivered', value: '75+' }, { label: 'Vehicles Managed', value: '100K+' }, { label: 'Cities Deployed', value: '30+' }],
    image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?auto=format&fit=crop&w=1200&h=400&q=80',
    color: 'from-cyan-500 to-teal-600',
  },
  {
    slug: 'drone',
    title: 'Drone Technology',
    icon: '🚁',
    headline: 'Drone App Development',
    desc: 'Drone delivery systems, agricultural drone apps, UAV control dashboards, and surveillance platforms.',
    apps: ['Drone Delivery', 'AgTech Drone', 'UAV Control', 'Aerial Survey', 'Security Drone', 'Flight Planning'],
    features: [
      { title: 'Flight Control Apps', desc: 'Custom GCS (ground control station) apps with mission planning and telemetry.' },
      { title: 'Drone Delivery', desc: 'Last-mile delivery orchestration with airspace management and tracking.' },
      { title: 'Agricultural Drones', desc: 'Crop health monitoring, spray mission planning, and NDVI mapping.' },
      { title: 'Surveillance Systems', desc: 'AI-powered object detection and automated patrol route planning.' },
    ],
    stats: [{ label: 'Apps Delivered', value: '60+' }, { label: 'Drones Connected', value: '10K+' }, { label: 'Sectors Served', value: '8+' }],
    image: 'https://images.unsplash.com/photo-1473968512647-3e447244af8f?auto=format&fit=crop&w=1200&h=400&q=80',
    color: 'from-slate-500 to-gray-700',
  },
];

export default INDUSTRIES;

export function getIndustryBySlug(slug: string): IndustryData | undefined {
  return INDUSTRIES.find((i) => i.slug === slug);
}
