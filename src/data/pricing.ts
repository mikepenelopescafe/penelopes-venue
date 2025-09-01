// Pricing configuration types
export interface PricingTier {
  id: string;
  name: string;
  description: string;
  guestRange: [number, number];
  basePrice: number;
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
    days: "Sundays & Weekdays (Monday-Thursday)",
    hourlyRate: 250,
    minimumHours: 3,
    blocks: {
      threeHour: { price: 750, rate: 250 },
      fourHour: { price: 1100, rate: 275 },
      eightHour: { price: 2000, rate: 250 }
    }
  },
  peak: {
    days: "Fridays, Saturdays & Holiday Sundays",
    hourlyRate: 400,
    minimumHours: 4,
    blocks: {
      fourHour: { price: 1800, rate: 450 },
      eightHour: { price: 3200, rate: 400 }
    }
  },
  premium: {
    days: "New Year's Eve, Christmas, Thanksgiving, 4th of July, Halloween",
    hourlyRate: 550,
    minimumHours: 4,
    blocks: {
      fourHour: { price: 2500, rate: 625 },
      eightHour: { price: 4500, rate: 562.50 }
    }
  }
} as const;

// Event-type focused pricing tiers
export const pricingTiers = {
  weddings: {
    micro: {
      id: 'wedding-micro',
      name: 'Micro Wedding',
      description: 'Intimate ceremony and reception for your closest family and friends',
      guestRange: [10, 30] as [number, number],
      basePrice: 2500,
      duration: 4,
      includes: [
        'Venue rental for 4 hours',
        'Ceremony space with arch setup', 
        'Reception area with tables and chairs',
        'Professional coordination',
        'Sound system for ceremony',
        'Ambient lighting',
        'Bridal suite access'
      ],
      addOns: ['catering', 'bar', 'flowers', 'photography', 'extended-hours'],
      featured: true
    },
    full: {
      id: 'wedding-full',
      name: 'Full Wedding Celebration',
      description: 'Complete wedding experience with all amenities included',
      guestRange: [75, 135] as [number, number],
      basePrice: 8500,
      duration: 8,
      includes: [
        'Venue rental for 8 hours',
        'Ceremony and reception spaces',
        'Premium coordination package',
        'Complete furniture setup',
        'Enhanced lighting and ambiance',
        'Bridal suite with amenities',
        'Groom preparation area',
        'Parking for 75+ vehicles',
        'Setup and breakdown included'
      ],
      addOns: ['catering', 'bar', 'flowers', 'photography', 'extended-hours', 'upgraded-linens', 'dance-floor']
    },
    elopement: {
      id: 'wedding-elopement',
      name: 'Elopement Package',
      description: 'Simple, elegant ceremony for just the two of you',
      guestRange: [2, 10] as [number, number],
      basePrice: 1500,
      duration: 2,
      includes: [
        'Venue rental for 2 hours',
        'Ceremony space setup',
        'Simple arch or backdrop',
        'Coordination assistance',
        'Bridal suite access'
      ],
      addOns: ['catering', 'photography', 'flowers']
    }
  },
  social: {
    shower: {
      id: 'social-shower',
      name: 'Shower Celebration',
      description: 'Perfect space for bridal or baby showers',
      guestRange: [15, 40] as [number, number],
      basePrice: 750,
      duration: 3,
      includes: [
        'Venue rental for 3 hours',
        'Tables and chair setup',
        'Basic linens and place settings',
        'Setup and cleanup',
        'Basic decorative lighting'
      ],
      addOns: ['catering', 'beverages', 'decorations']
    },
    birthday: {
      id: 'social-birthday',
      name: 'Birthday Party',
      description: 'Celebrate milestone birthdays in style',
      guestRange: [20, 75] as [number, number],
      basePrice: 1100,
      duration: 4,
      includes: [
        'Venue rental for 4 hours',
        'Complete table and chair setup',
        'Sound system for music',
        'Ambient lighting',
        'Setup and cleanup included'
      ],
      addOns: ['catering', 'bar', 'decorations', 'dance-floor']
    },
    anniversary: {
      id: 'social-anniversary',
      name: 'Anniversary Celebration',
      description: 'Honor your years together with family and friends',
      guestRange: [25, 100] as [number, number],
      basePrice: 1800,
      duration: 5,
      includes: [
        'Venue rental for 5 hours',
        'Elegant table settings',
        'Enhanced lighting package',
        'Sound system',
        'Professional setup',
        'Coordination assistance'
      ],
      addOns: ['catering', 'bar', 'flowers', 'photography', 'upgraded-linens']
    }
  },
  corporate: {
    meeting: {
      id: 'corporate-meeting',
      name: 'Corporate Meeting',
      description: 'Professional space for team meetings and presentations',
      guestRange: [10, 30] as [number, number],
      basePrice: 750,
      duration: 4,
      includes: [
        'Venue rental for 4 hours',
        'Conference-style seating',
        'Presentation screen and projector',
        'Sound system',
        'Wi-Fi access',
        'Basic refreshment area'
      ],
      addOns: ['catering', 'av-upgrade', 'extended-hours']
    },
    party: {
      id: 'corporate-party',
      name: 'Company Celebration',
      description: 'Celebrate achievements with your team',
      guestRange: [30, 75] as [number, number],
      basePrice: 2000,
      duration: 5,
      includes: [
        'Venue rental for 5 hours',
        'Reception-style setup',
        'Sound system for presentations',
        'Enhanced lighting',
        'Professional coordination',
        'Bar area setup'
      ],
      addOns: ['catering', 'bar', 'av-upgrade', 'extended-hours']
    },
    gala: {
      id: 'corporate-gala',
      name: 'Corporate Gala',
      description: 'Formal corporate events and fundraisers',
      guestRange: [75, 135] as [number, number],
      basePrice: 3500,
      duration: 6,
      includes: [
        'Venue rental for 6 hours',
        'Formal dining setup',
        'Stage area for presentations',
        'Premium lighting package',
        'Professional coordination',
        'VIP area setup',
        'Coat check area'
      ],
      addOns: ['catering', 'bar', 'av-upgrade', 'flowers', 'extended-hours', 'upgraded-linens']
    }
  }
} as const;

// Add-on pricing structure
export const addOnPricing: Record<string, AddOnPricing> = {
  catering: {
    id: 'catering',
    name: 'Catering Service',
    description: 'Professional catering with American or Latin fusion menus',
    pricing: {
      perGuest: 25, // Starting price, varies by menu and style
      minimum: 20
    }
  },
  bar: {
    id: 'bar',
    name: 'Bar Service',
    description: 'Professional bartender with beer, wine, and cocktails',
    pricing: {
      perGuest: 30, // 2-hour package
      setup: 300,
      minimum: 20,
      duration: 2
    }
  },
  photography: {
    id: 'photography',
    name: 'Event Photography',
    description: 'Professional photographer for your special day',
    pricing: {
      fixed: 800 // 4-hour package
    }
  },
  flowers: {
    id: 'flowers',
    name: 'Floral Arrangements',
    description: 'Beautiful centerpieces and ceremony flowers',
    pricing: {
      fixed: 500 // Basic package
    }
  },
  'extended-hours': {
    id: 'extended-hours',
    name: 'Extended Hours',
    description: 'Add extra time to your event',
    pricing: {
      fixed: 250 // Per hour
    }
  },
  'upgraded-linens': {
    id: 'upgraded-linens',
    name: 'Premium Linens',
    description: 'Upgraded table linens and napkins',
    pricing: {
      fixed: 200
    }
  },
  'dance-floor': {
    id: 'dance-floor',
    name: 'Dance Floor',
    description: 'Professional dance floor setup',
    pricing: {
      fixed: 400
    }
  },
  decorations: {
    id: 'decorations',
    name: 'Event Decorations',
    description: 'Custom decorations for your theme',
    pricing: {
      fixed: 300
    }
  },
  beverages: {
    id: 'beverages',
    name: 'Beverages Package',
    description: 'Non-alcoholic beverages and coffee service',
    pricing: {
      perGuest: 8,
      minimum: 15
    }
  },
  'av-upgrade': {
    id: 'av-upgrade',
    name: 'AV Equipment Upgrade',
    description: 'Enhanced sound system and presentation equipment',
    pricing: {
      fixed: 200
    }
  }
};

// Detailed catering pricing (for pricing page)
export const cateringPackages = {
  american: {
    name: "All-American",
    description: "Hearty, crowd-pleasing dishes with fresh, local ingredients",
    priceRange: "$18-45/guest",
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
        description: "3 Small Plates + Side. Ideal for casual mixers." 
      },
      { 
        name: "All-American Feast", 
        plated: 40, 
        buffet: 37, 
        description: "Small Plate + Main + Dessert. Perfect for heartier events." 
      }
    ]
  },
  latinFusion: {
    name: "Latin Fusion",
    description: "Vibrant flavors from Mexico, Peru and beyond",
    priceRange: "$18-48/guest",
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
        description: "3 Small Plates + Dessert. Great for casual bar events." 
      },
      { 
        name: "Full Latin Feast", 
        plated: 43, 
        buffet: 40, 
        description: "Small Plate + Main + Dessert. Ideal for upscale gatherings." 
      }
    ]
  }
} as const;

// Bar service pricing (for pricing page)
export const barPackages = [
  { 
    name: "Open Bar (2 hours)", 
    beerWine: 25, 
    fullBar: 35, 
    description: "Pre-paid drinks for 2 hours - beer/wine or full bar with cocktails" 
  },
  { 
    name: "Cash Bar", 
    description: "Guests pay per drink, meets $150 minimum via sales" 
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

// Helper function to calculate total price with add-ons
export function calculateTotalPrice(
  tierId: string, 
  guestCount: number, 
  selectedAddOns: string[] = []
): number {
  const tier = getPricingTierById(tierId);
  if (!tier) return 0;

  let total = tier.basePrice;

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