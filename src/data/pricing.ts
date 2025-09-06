// Pricing configuration types
export interface PricingTier {
  id: string;
  name: string;
  description: string;
  guestRange: [number, number];
  basePrice?: number; // For fixed price tiers
  pricing?: {
    offPeak?: number;
    peak?: number;
    premium?: number;
  };
  duration: number;
  includes: string[];
  addOns: string[];
  featured?: boolean;
  popular?: boolean;
}

export interface AddOnPricing {
  id: string;
  name: string;
  description: string;
  pricing: {
    perGuest?: number;
    fixed?: number;
    minimum?: number;
    duration?: number;
    setup?: number;
  };
}

// Venue base pricing by day type
export const venuePricing = {
  offPeak: {
    days: "Sun–Thu",
    hourlyRate: 250,
    minimumHours: 3,
    blocks: {
      twoHour: { price: 750, rate: 250 },
      fourHour: { price: 900, rate: 225 },
      eightHour: { price: 2000, rate: 200 }
    }
  },
  peak: {
    days: "Fri–Sat & holiday Sun",
    hourlyRate: 400,
    minimumHours: 4,
    blocks: {
      fourHour: { price: 1600, rate: 400 },
      eightHour: { price: 2400, rate: 300 }
    }
  },
  premium: {
    days: "NYE, Halloween",
    hourlyRate: 550,
    minimumHours: 4,
    blocks: {
      fourHour: { price: 2200, rate: 550 },
      eightHour: { price: 4000, rate: 500 }
    }
  }
} as const;

// Event-type focused pricing tiers
export const pricingTiers = {
  weddings: {
    micro: {
      id: 'wedding-micro',
      name: 'Micro Wedding',
      description: 'Intimate, modern ceremony and reception for your closest people.',
      guestRange: [20, 50] as [number, number],
      basePrice: 2000,
      duration: 4,
      includes: [
        'Venue rental for 4 hours',
        'Ceremony and reception spaces',
        'Setup and breakdown included',
        'Reception area with tables and chairs',
        'Venue Management',
        'Sound system',
        'Ambient lighting',
        'Non-Alcoholic Beverage Station',
        'Cake Cutting Service',
        'Champagne Pour Service'
      ],
      addOns: ['catering', 'bar', 'flowers', 'photo booth', 'upgraded-linens', 'dance-floor','extended-hours'],
      featured: true
    },
    full: {
      id: 'wedding-full',
      name: 'Full Wedding Celebration',
      description: 'A complete wedding experience with a clean, moody feel.',
      guestRange: [50, 100] as [number, number],
      basePrice: 4000,
      duration: 8,
      includes: [
        'Venue rental for 8 hours',
        'Ceremony and reception spaces',
        'Setup and breakdown included',
        'Reception area with tables and chairs',
        'Venue Management',
        'Sound System',
        'Ambient Lighting',
        'Bar Setup',
        'Cake Cutting Service',
        'Champagne Pour Service'
      ],
      addOns: ['catering', 'flowers', 'photo booth', 'extended-hours', 'upgraded-linens', 'dance-floor']
    },
  },
  social: {
    shower: {
      id: 'social-shower',
      name: 'Shower Celebration',
      description: 'For bridal or baby showers—simple, chic, effortless.',
      guestRange: [15, 100] as [number, number],
      pricing: {
        offPeak: 900, // 3 hours at $300/hour
        peak: 1350, // 3 hours at $450/hour
        premium: 1650 // 3 hours at $550/hour
      },
      duration: 3,
      includes: [
        'Venue rental for 3 hours',
        'Setup and cleanup',
        'Tables and chair setup',
        'Basic linens and place settings',
        'Venue Management',
        'Sound System',
        'Ambient Lighting',
        'Non-Alcoholic Beverage Station'
      ],
      addOns: ['catering', 'bar', 'flowers', 'extended-hours', 'upgraded-linens']
    },
    birthday: {
      id: 'social-birthday',
      name: 'Birthday Party',
      description: 'Celebrate your way—minimal fuss, maximum vibe.',
      guestRange: [20, 100] as [number, number],
      pricing: {
        offPeak: 1200, // 4 hours at $300/hour
        peak: 1800, // 4 hours at $450/hour
        premium: 2000 // 4 hours at $550/hour
      },
      duration: 4,
      includes: [
        'Venue rental for 4 hours',
        'Setup and cleanup',
        'Tables and chair setup',
        'Basic linens and place settings',
        'Venue Management',
        'Sound System',
        'Ambient Lighting',
        'Non-Alcoholic Beverage Station'
      ],
      addOns: ['catering', 'bar', 'dance-floor', 'upgraded-linens','photo booth','extended-hours']
    },
    anniversary: {
      id: 'social-anniversary',
      name: 'Anniversary Celebration',
      description: 'Mark the moment with understated style.',
      guestRange: [25, 100] as [number, number],
      pricing: {
        offPeak: 1500, // 5 hours at $300/hour
        peak: 2250, // 5 hours at $450/hour
        premium: 2750 // 5 hours at $550/hour
      },
      duration: 5,
      includes: [
        'Venue rental for 5 hours',
        'Setup and cleanup',
        'Tables and chair setup',
        'Basic linens and place settings',
        'Venue Management',
        'Sound System',
        'Ambient Lighting',
        'Non-Alcoholic Beverage Station'
      ],
      addOns: ['catering', 'bar', 'flowers', 'photo booth', 'upgraded-linens', 'extended-hours','dance-floor']
    }
  },
  corporate: {
    meeting: {
      id: 'corporate-meeting',
      name: 'Corporate Meeting',
      description: 'Modern space for focused meetings and presentations.',
      guestRange: [10, 30] as [number, number],
      basePrice: 750,
      duration: 4,
      includes: [
        'Venue rental for 4 hours',
        'Setup and cleanup',
        'Conference-style seating',
        'Professional coordination',
        'Presentation screen and projector',
        'Sound system for presentations',
        'Wi-Fi access',
        'Basic refreshment area'
      ],
      addOns: ['catering', 'av-upgrade', 'extended-hours']
    },
    party: {
      id: 'corporate-party',
      name: 'Company Celebration',
      description: 'A clean, moody backdrop for team celebrations.',
      guestRange: [30, 100] as [number, number],
      basePrice: 2000,
      duration: 5,
      includes: [
        'Venue rental for 5 hours',
        'Setup and cleanup',
        'Tables and chair setup',
        'Basic linens and place settings',
        'Reception-style setup',
        'Professional Coordination',
        'Sound system for presentations',
        'Enhanced lighting',
        'Wi-Fi access',
        'Bar area setup'
      ],
      addOns: ['catering', 'bar', 'av-upgrade', 'extended-hours','flowers','upgraded-linens','dance-floor','photo booth']
    },
    
    
  }
} as const;

// Add-on pricing structure
export const addOnPricing: Record<string, AddOnPricing> = {
  catering: {
    id: 'catering',
    name: 'Catering Service',
    description: 'American or Latin fusion menus, handled end‑to‑end.',
    pricing: {
      perGuest: 30, // Starting price, varies by menu and style
      minimum: 18
    }
  },
  bar: {
    id: 'bar',
    name: 'Bar Service',
    description: 'Professional bartender, beer, wine, and cocktails.',
    pricing: {
      perGuest: 18, // 2-hour package
      setup: 300,
      minimum: 20,
      duration: 2
    }
  },
  photoBooth: {
    id: 'photoBooth',
    name: 'Photo Booth',
    description: 'Clean, modern photo booth setup.',
    pricing: {
      fixed: 400 // 4-hour package
    }
  },
  flowers: {
    id: 'flowers',
    name: 'Floral Arrangements',
    description: 'Timeless centerpieces and ceremony florals (starting price).',
    pricing: {
      fixed: 500 // Basic package
    }
  },
  'extended-hours': {
    id: 'extended-hours',
    name: 'Extended Hours',
    description: 'Add extra time to your event.',
    pricing: {
      fixed: 250 // Per hour
    }
  },
  'upgraded-linens': {
    id: 'upgraded-linens',
    name: 'Premium Linens',
    description: 'Premium table linens and napkins (starting price).',
    pricing: {
      fixed: 200
    }
  },
  'dance-floor': {
    id: 'dance-floor',
    name: 'Dance Floor',
    description: 'Professional dance floor setup.',
    pricing: {
      fixed: 500
    }
  },
  decorations: {
    id: 'decorations',
    name: 'Event Decorations',
    description: 'Curated decor for your theme (starting price).',
    pricing: {
      fixed: 300
    }
  },
  'av-upgrade': {
    id: 'av-upgrade',
    name: 'AV Equipment Upgrade',
    description: 'Enhanced sound and presentation gear.',
    pricing: {
      fixed: 200
    }
  }
};

// Detailed catering pricing (for pricing page)
export const cateringPackages = {
  american: {
    name: "All-American",
    description: "Comfort classics, done right.",
    priceRange: "$18-33/guest",
    serviceStyles: {
      plated: "Formal, seated service (+$1-3/guest)",
      buffet: "Casual, self-serve (+$0/guest)",
      passed: "Staff-circulated for mingling (+$1-2/guest)"
    },
    packages: [
      { 
        name: "Bar Bites Package", 
        buffet: 18, 
        passed: 20, 
        description: "3 Small Plates + Side. Great for laid‑back gatherings." 
      },
      { 
        name: "All-American Feast", 
        plated: 33, 
        buffet: 30, 
        description: "Small Plate + Main + Dessert. Ideal for a fuller experience." 
      }
    ]
  },
  latinFusion: {
    name: "Latin Fusion",
    description: "Vibrant flavors from Mexico, Peru, and beyond.",
    priceRange: "$18-33/guest",
    serviceStyles: {
      plated: "Formal, seated service (+$1-3/guest)",
      buffet: "Casual, self-serve (+$0/guest)",
      passed: "Staff-circulated for mingling (+$1-2/guest)"
    },
    packages: [
      { 
        name: "Tasting Plate", 
        buffet: 18, 
        passed: 20, 
        description: "3 Small Plates + Dessert. Great for bar‑forward events." 
      },
      { 
        name: "Full Latin Feast", 
        plated: 33, 
        buffet: 30, 
        description: "Small Plate + Main + Dessert. Ideal for moody gatherings." 
      }
    ]
  }
} as const;

// Bar service pricing (for pricing page)
export const barPackages = [
  { 
    name: "Open Bar (2 hours)", 
    beerWine: 18, 
    fullBar: 28, 
    description: "Prepaid for 2 hours — beer/wine or full bar. Meets $300 minimum via sales." 
  },
  { 
    name: "Cash Bar", 
    description: "Guests pay per drink. Meets $300 minimum via sales." 
  }
] as const;

// Helper function to get all pricing tiers as flat array
export function getAllPricingTiers(): PricingTier[] {
  const allTiers: PricingTier[] = [];
  Object.values(pricingTiers).forEach(category => {
    Object.values(category).forEach(tier => {
      allTiers.push(tier);
    });
  });
  return allTiers;
}

// Helper function to get pricing tier by ID
export function getPricingTierById(id: string): PricingTier | undefined {
  return getAllPricingTiers().find(tier => tier.id === id);
}

// Helper function to get base price for a tier and pricing type
export function getTierBasePrice(
  tierId: string,
  pricingType: 'offPeak' | 'peak' | 'premium' = 'offPeak'
): number {
  const tier = getPricingTierById(tierId);
  if (!tier) return 0;

  if (tier.pricing) {
    return tier.pricing[pricingType] || tier.pricing.offPeak || 0;
  } else if (tier.basePrice) {
    return tier.basePrice;
  }

  return 0;
}

// Helper function to get pricing range for a tier (min-max across pricing types)
export function getTierPriceRange(tierId: string): { min: number; max: number } {
  const tier = getPricingTierById(tierId);
  if (!tier) return { min: 0, max: 0 };

  if (tier.pricing) {
    const prices = Object.values(tier.pricing).filter(price => price !== undefined) as number[];
    return {
      min: Math.min(...prices),
      max: Math.max(...prices)
    };
  } else if (tier.basePrice) {
    return { min: tier.basePrice, max: tier.basePrice };
  }

  return { min: 0, max: 0 };
}

// Helper function to calculate total price with add-ons
export function calculateTotalPrice(
  tierId: string,
  guestCount: number,
  selectedAddOns: string[] = [],
  pricingType: 'offPeak' | 'peak' | 'premium' = 'offPeak'
): number {
  const tier = getPricingTierById(tierId);
  if (!tier) return 0;

  let total = 0;

  // Get base price from either new pricing structure or legacy basePrice
  if (tier.pricing) {
    total = tier.pricing[pricingType] || tier.pricing.offPeak || 0;
  } else if (tier.basePrice) {
    total = tier.basePrice;
  }

  selectedAddOns.forEach(addOnId => {
    const addOn = addOnPricing[addOnId];
    if (!addOn) return;

    if (addOn.pricing.perGuest) {
      const minGuests = addOn.pricing.minimum || guestCount;
      total += addOn.pricing.perGuest * Math.max(guestCount, minGuests);
    }

    if (addOn.pricing.fixed) {
      total += addOn.pricing.fixed;
    }

    if (addOn.pricing.setup) {
      total += addOn.pricing.setup;
    }
  });

  return total;
}

// Export pricing tier categories for easy access
export const PRICING_CATEGORIES = {
  WEDDINGS: 'weddings',
  SOCIAL: 'social', 
  CORPORATE: 'corporate'
} as const;