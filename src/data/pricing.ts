
// Venue day-based package pricing (8-hour packages)
export type VenuePackageId =
  | 'monThu'
  | 'friday'
  | 'saturday'
  | 'sunday'
  | 'memorialMonThu'
  | 'nonProfitMonThu';

export interface VenuePackage {
  id: VenuePackageId;
  label: string;       // e.g., "FRIDAY", "MON–THU"
  days: string;        // human-readable days
  price4Hours: number; // 4-hour package price
  price8Hours: number; // 8-hour package price
  type: 'standard' | 'memorial' | 'nonProfit';
  discountEligible: boolean; // seasonal discounts allowed
  notes?: string;      // short clarifier (e.g., not subject to discount)
}

export const venuePackages: Record<VenuePackageId, VenuePackage> = {
  friday: {
    id: 'friday',
    label: 'FRIDAY',
    days: 'Friday',
    price4Hours: 1920,
    price8Hours: 3200,
    type: 'standard',
    discountEligible: true
  },
  saturday: {
    id: 'saturday',
    label: 'SATURDAY',
    days: 'Saturday',
    price4Hours: 1920,
    price8Hours: 3200,
    type: 'standard',
    discountEligible: true
  },
  sunday: {
    id: 'sunday',
    label: 'SUNDAY',
    days: 'Sunday',
    price4Hours: 1440,
    price8Hours: 2400,
    type: 'standard',
    discountEligible: true
  },
  monThu: {
    id: 'monThu',
    label: 'MON–THURS',
    days: 'Monday–Thursday',
    price4Hours: 1440,
    price8Hours: 2400,
    type: 'standard',
    discountEligible: true
  },
  memorialMonThu: {
    id: 'memorialMonThu',
    label: 'MON–THURS MEMORIAL',
    days: 'Monday–Thursday',
    price4Hours: 1150,
    price8Hours: 0, // 8-hour not available for memorial
    type: 'memorial',
    discountEligible: false,
    notes: '4 hours only - Not subject to discount'
  },
  nonProfitMonThu: {
    id: 'nonProfitMonThu',
    label: 'MON–THURS NON‑PROFIT',
    days: 'Monday–Thursday',
    price4Hours: 1150,
    price8Hours: 2400,
    type: 'nonProfit',
    discountEligible: false,
    notes: 'Not subject to discount'
  }
} as const;

// Venue policies: off-peak and holiday surcharge
export const venueRules = {
  offPeak: {
    months: [9, 10, 11, 12, 1, 2, 3] as const, // Sep, Oct, Nov, Dec, Jan, Feb, Mar
    discounts: {
      sunday: 0.7,      // 20% off Sunday
      monThu: 0.7,      // 30% off Mon–Thu in off-peak months
      friday: 0.8,      // 20% off Friday
      saturday: 0.8     // 20% off Saturday
      // Sunday not discounted by spec
    } as Partial<Record<'monThu' | 'friday' | 'saturday' | 'sunday', number>>
  },
  holidaySurcharge: {
    type: 'percent' as const,
    value: 0.15, // 15% surcharge (can be adjusted)
    appliesTo: ['Labor Day Weekend', 'Memorial Day Weekend', 'NYE'] as const
  }
} as const;

type DateInput = Date | string | number | undefined;

function toDate(value: DateInput): Date | undefined {
  if (!value) return undefined;
  const d = value instanceof Date ? value : new Date(value);
  return isNaN(d.getTime()) ? undefined : d;
}

function isOffPeak(date?: Date): boolean {
  if (!date) return false;
  const month = date.getMonth() + 1; // 1-12
  return (venueRules.offPeak.months as readonly number[]).includes(month);
}

function isHolidayDate(_date?: Date): boolean {
  // Placeholder: callers can pass isHoliday true if they know a date falls on listed holidays/weekends.
  // This stub keeps the API convenient without hardcoding a calendar.
  return false;
}

export interface CalculateVenuePriceOptions {
  packageId: VenuePackageId;
  date?: DateInput;          // to auto-apply off-peak/holiday rules
  durationHours?: 4 | 8;     // default 8; 4-hour block available for all packages
  applyOffPeak?: boolean;    // default true
  isHoliday?: boolean;       // override holiday detection if needed
}

export function calculateVenuePackagePrice(options: CalculateVenuePriceOptions): number {
  const pkg = venuePackages[options.packageId];
  const date = toDate(options.date);
  const applyOffPeak = options.applyOffPeak !== false;
  const duration = options.durationHours ?? 8; // Default to 8 hours if not specified

  // Get base price from explicit pricing
  let base = 0;
  if (duration === 4) {
    base = pkg.price4Hours;
  } else if (duration === 8) {
    base = pkg.price8Hours;
  }

  // If the requested duration is not available (price is 0), return 0
  if (base === 0) {
    return 0;
  }

  let total = base;

  // Off‑peak discounts
  const holiday = options.isHoliday ?? isHolidayDate(date);
  if (applyOffPeak && pkg.discountEligible && date && isOffPeak(date)) {
    const map: Record<string, number | undefined> = venueRules.offPeak.discounts as any;
    const discountFactor = map[pkg.id] ?? map[(pkg.id as string)] ?? undefined;
    if (discountFactor) total = Math.round(total * discountFactor);
  }

  // Holiday surcharge
  if (holiday) {
    total = Math.round(total * (1 + venueRules.holidaySurcharge.value));
  }

  return total;
}



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
