import { venuePackages, calculateVenuePackagePrice } from '@/data/pricing';

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
 * Get venue pricing information
 */
export function getVenuePricing(packageId: string): {
  price: number;
  formatted: string;
  package: any;
} {
  const pkg = venuePackages[packageId as keyof typeof venuePackages];
  if (!pkg) {
    return {
      price: 0,
      formatted: 'Contact for pricing',
      package: null
    };
  }

  // Use 8-hour price as default, fall back to 4-hour if 8-hour not available
  const price = pkg.price8Hours > 0 ? pkg.price8Hours : pkg.price4Hours;

  return {
    price: price,
    formatted: formatPrice(price),
    package: pkg
  };
}