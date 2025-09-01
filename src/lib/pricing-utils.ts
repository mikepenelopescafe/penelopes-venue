import { 
  pricingTiers, 
  addOnPricing, 
  getPricingTierById, 
  calculateTotalPrice,
  type PricingTier 
} from '@/data/pricing';

/**
 * Format price for display with currency and unit
 */
export function formatPrice(price: number, unit: string = 'per event'): string {
  const formatted = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
  }).format(price);

  return `Starting at ${formatted} ${unit}`;
}

/**
 * Format price range for display
 */
export function formatPriceRange(minPrice: number, maxPrice: number): string {
  const min = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
  }).format(minPrice);
  
  const max = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
  }).format(maxPrice);

  return `${min} - ${max}`;
}

/**
 * Get pricing tier information
 */
export function getServicePricing(service: any): {
  price: number;
  formatted: string;
  tier?: PricingTier;
} {
  // Get pricing from tier ID (primary method)
  if (service.data.pricingTierId) {
    const tier = getPricingTierById(service.data.pricingTierId);
    if (tier) {
      return {
        price: tier.basePrice,
        formatted: formatPrice(tier.basePrice),
        tier
      };
    } else {
      console.warn(`Pricing tier not found: ${service.data.pricingTierId}`);
    }
  }

  // Fallback to legacy price object (deprecated)
  if (service.data.price?.starting) {
    const unitMapping: Record<string, string> = {
      'per-event': 'per event',
      'per-hour': 'per hour', 
      'per-guest': 'per guest',
    };
    const unitText = unitMapping[service.data.price.unit] || 'per event';

    return {
      price: service.data.price.starting,
      formatted: formatPrice(service.data.price.starting, unitText),
    };
  }

  // Default fallback
  console.warn(`No pricing information found for service: ${service.slug}`);
  return {
    price: 0,
    formatted: 'Contact for pricing'
  };
}

/**
 * Calculate estimated total for a service with guest count and add-ons
 */
export function calculateServiceTotal(
  serviceId: string | undefined,
  guestCount: number,
  selectedAddOns: string[] = []
): {
  basePrice: number;
  addOnPrice: number;
  total: number;
  breakdown: Array<{name: string, price: number}>;
} {
  if (!serviceId) {
    return {
      basePrice: 0,
      addOnPrice: 0,
      total: 0,
      breakdown: []
    };
  }

  const tier = getPricingTierById(serviceId);
  if (!tier) {
    return {
      basePrice: 0,
      addOnPrice: 0,
      total: 0,
      breakdown: []
    };
  }

  const basePrice = tier.basePrice;
  const breakdown: Array<{name: string, price: number}> = [
    { name: tier.name, price: basePrice }
  ];

  let addOnPrice = 0;

  selectedAddOns.forEach(addOnId => {
    const addOn = addOnPricing[addOnId];
    if (!addOn) return;

    let itemPrice = 0;

    if (addOn.pricing.perGuest) {
      const minGuests = addOn.pricing.minimum || guestCount;
      itemPrice += addOn.pricing.perGuest * Math.max(guestCount, minGuests);
    }
    
    if (addOn.pricing.fixed) {
      itemPrice += addOn.pricing.fixed;
    }

    if (addOn.pricing.setup) {
      itemPrice += addOn.pricing.setup;
    }

    if (itemPrice > 0) {
      addOnPrice += itemPrice;
      breakdown.push({
        name: addOn.name,
        price: itemPrice
      });
    }
  });

  return {
    basePrice,
    addOnPrice,
    total: basePrice + addOnPrice,
    breakdown
  };
}

/**
 * Get services grouped by category
 */
export function getServicesByCategory() {
  return {
    weddings: Object.values(pricingTiers.weddings),
    social: Object.values(pricingTiers.social),
    corporate: Object.values(pricingTiers.corporate)
  };
}

/**
 * Get popular/featured services across all categories
 */
export function getFeaturedServices(): PricingTier[] {
  const allTiers: PricingTier[] = [];
  Object.values(pricingTiers).forEach(category => {
    Object.values(category).forEach(tier => {
      if (tier.featured || tier.popular) {
        allTiers.push(tier);
      }
    });
  });
  return allTiers;
}

/**
 * Get recommended add-ons for a service tier
 */
export function getRecommendedAddOns(tierId: string): Array<{
  id: string;
  name: string;
  description: string;
  price: string;
}> {
  const tier = getPricingTierById(tierId);
  if (!tier) return [];

  return tier.addOns.map(addOnId => {
    const addOn = addOnPricing[addOnId];
    if (!addOn) return null;

    let priceText = '';
    if (addOn.pricing.perGuest) {
      priceText = `$${addOn.pricing.perGuest}/guest`;
      if (addOn.pricing.minimum) {
        priceText += ` (${addOn.pricing.minimum} min)`;
      }
    } else if (addOn.pricing.fixed) {
      priceText = `$${addOn.pricing.fixed}`;
    }

    return {
      id: addOn.id,
      name: addOn.name,
      description: addOn.description,
      price: priceText
    };
  }).filter(Boolean) as Array<{
    id: string;
    name: string;
    description: string;
    price: string;
  }>;
}

/**
 * Validate guest count against tier capacity
 */
export function validateGuestCount(tierId: string, guestCount: number): {
  valid: boolean;
  message?: string;
} {
  const tier = getPricingTierById(tierId);
  if (!tier) return { valid: false, message: 'Service not found' };

  const [min, max] = tier.guestRange;
  
  if (guestCount < min) {
    return { 
      valid: false, 
      message: `Minimum ${min} guests required for this package` 
    };
  }
  
  if (guestCount > max) {
    return { 
      valid: false, 
      message: `Maximum ${max} guests allowed for this package. Contact us for larger events.` 
    };
  }

  return { valid: true };
}

/**
 * Get suggested services based on guest count
 */
export function getSuggestedServices(guestCount: number): PricingTier[] {
  const allTiers: PricingTier[] = [];
  Object.values(pricingTiers).forEach(category => {
    Object.values(category).forEach(tier => {
      const [min, max] = tier.guestRange;
      if (guestCount >= min && guestCount <= max) {
        allTiers.push(tier);
      }
    });
  });
  
  // Sort by relevance (closer to ideal guest count)
  return allTiers.sort((a, b) => {
    const aIdeal = Math.floor((a.guestRange[0] + a.guestRange[1]) / 2);
    const bIdeal = Math.floor((b.guestRange[0] + b.guestRange[1]) / 2);
    
    const aDiff = Math.abs(guestCount - aIdeal);
    const bDiff = Math.abs(guestCount - bIdeal);
    
    return aDiff - bDiff;
  });
}