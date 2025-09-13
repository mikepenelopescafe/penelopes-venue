import React from 'react';
import {
  venuePackages,
  calculateVenuePackagePrice,
  barPackages,
  cateringPackages,
  venueRules,
  type VenuePackageId,
} from '@/data/pricing';

export interface PricingAtAGlanceProps {
  /**
   * Event label to display in the header, e.g., "Engagement Party"
   */
  eventLabel?: string;
  /**
   * Show 4-hour examples (default true)
   */
  showFourHour?: boolean;
  /**
   * Show 8-hour examples (default false for planning pages)
   */
  showEightHour?: boolean;
  /**
   * Which venue packages to surface in the grid
   */
  packageIds?: VenuePackageId[];
}

const weekdayId: VenuePackageId = 'monThu';
const fridayId: VenuePackageId = 'friday';
const saturdayId: VenuePackageId = 'saturday';
const sundayId: VenuePackageId = 'sunday';

function formatUsd(amount: number): string {
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    maximumFractionDigits: 0,
  }).format(amount);
}

function getDiscountPercentage(packageId: VenuePackageId): number {
  const discountFactor = venueRules.offPeak.discounts[packageId as keyof typeof venueRules.offPeak.discounts];
  if (!discountFactor) return 0;
  return Math.round((1 - discountFactor) * 100);
}

function getOffPeakMonthsLabel(): string {
  const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
  return venueRules.offPeak.months.map(m => months[m - 1]).join(', ');
}

export default function PricingAtAGlance({
  eventLabel,
  showFourHour = true,
  showEightHour = false,
  packageIds = [weekdayId, fridayId, saturdayId, sundayId],
}: PricingAtAGlanceProps) {
  const fourHourRows = showFourHour
    ? packageIds.map((id) => ({
        id,
        label: venuePackages[id].label,
        fourHour: calculateVenuePackagePrice({ packageId: id, durationHours: 4, applyOffPeak: false }),
        fourHourOffPeak: calculateVenuePackagePrice({ packageId: id, durationHours: 4, applyOffPeak: true, date: new Date('2024-01-15') }), // Jan date for off-peak
        discountPercentage: getDiscountPercentage(id),
        discountEligible: venuePackages[id].discountEligible,
      }))
    : [];

  const eightHourRows = showEightHour
    ? packageIds.map((id) => ({
        id,
        label: venuePackages[id].label,
        eightHour: calculateVenuePackagePrice({ packageId: id, durationHours: 8, applyOffPeak: false }),
        eightHourOffPeak: calculateVenuePackagePrice({ packageId: id, durationHours: 8, applyOffPeak: true, date: new Date('2024-01-15') }), // Jan date for off-peak
        discountPercentage: getDiscountPercentage(id),
        discountEligible: venuePackages[id].discountEligible,
      }))
    : [];

  // Catering price range — consistent across packages collections
  const americanRange = cateringPackages.american.priceRange; // e.g., "$18-33/guest"
  const latinRange = cateringPackages.latinFusion.priceRange;  // identical today, but keep future-proof

  const openBar2Hr = barPackages.find((b) => b.name.toLowerCase().includes('open bar') && 'beerWine' in b);

  return (
    <section className="not-prose my-6 rounded-md border border-neutral-200 bg-white p-4 shadow-sm dark:border-neutral-800 dark:bg-neutral-950">
      <div className="mb-3">
        <h3 className="text-lg font-semibold tracking-tight">
          Pricing at a Glance{eventLabel ? ` — ${eventLabel}` : ''}
        </h3>
        <p className="mt-1 text-sm text-neutral-600 dark:text-neutral-400">
          Peak season pricing shown. Off‑peak discounts available during {getOffPeakMonthsLabel()}.
        </p>
      </div>

      {/* Venue examples */}
      <div className="grid gap-3 md:grid-cols-2">
        <div className="rounded-md bg-neutral-50 p-3 dark:bg-neutral-900">
          <div className="mb-2 text-sm font-medium text-neutral-800 dark:text-neutral-200">Venue Packages</div>
          <div className="space-y-2 text-sm">
            {showFourHour && (
              <div>
                <div className="mb-1 font-semibold">4‑Hour Block</div>
                <ul className="grid grid-cols-1 gap-1">
                  {fourHourRows.map((row) => (
                    <li key={`4h-${row.id}`} className="rounded border border-neutral-200 bg-white px-2 py-1.5 dark:border-neutral-800 dark:bg-neutral-950">
                      <div className="flex items-center justify-between">
                        <span className="text-neutral-700 dark:text-neutral-300">{row.label}</span>
                        <div className="flex items-center gap-2">
                          {row.discountEligible && row.discountPercentage > 0 && (
                            <span className="text-xs text-neutral-500 line-through dark:text-neutral-400">
                              {formatUsd(row.fourHour)}
                            </span>
                          )}
                          <span className="font-medium">
                            {row.discountEligible && row.discountPercentage > 0 
                              ? formatUsd(row.fourHourOffPeak) 
                              : formatUsd(row.fourHour)
                            }
                          </span>
                        </div>
                      </div>
                      {row.discountEligible && row.discountPercentage > 0 && (
                        <div className="mt-1 flex items-center justify-end">
                          <span className="inline-flex items-center rounded-full bg-green-100 px-2 py-0.5 text-xs font-medium text-green-800 dark:bg-green-900 dark:text-green-200">
                            Save {row.discountPercentage}% off-peak
                          </span>
                        </div>
                      )}
                    </li>
                  ))}
                </ul>
              </div>
            )}
            {showEightHour && (
              <div className="mt-3">
                <div className="mb-1 font-semibold">8‑Hour Block</div>
                <ul className="grid grid-cols-1 gap-1">
                  {eightHourRows.map((row) => (
                    <li key={`8h-${row.id}`} className="rounded border border-neutral-200 bg-white px-2 py-1.5 dark:border-neutral-800 dark:bg-neutral-950">
                      <div className="flex items-center justify-between">
                        <span className="text-neutral-700 dark:text-neutral-300">{row.label}</span>
                        <div className="flex items-center gap-2">
                          {row.discountEligible && row.discountPercentage > 0 && (
                            <span className="text-xs text-neutral-500 line-through dark:text-neutral-400">
                              {formatUsd(row.eightHour ?? 0)}
                            </span>
                          )}
                          <span className="font-medium">
                            {row.discountEligible && row.discountPercentage > 0 
                              ? formatUsd(row.eightHourOffPeak ?? 0) 
                              : formatUsd(row.eightHour ?? 0)
                            }
                          </span>
                        </div>
                      </div>
                      {row.discountEligible && row.discountPercentage > 0 && (
                        <div className="mt-1 flex items-center justify-end">
                          <span className="inline-flex items-center rounded-full bg-green-100 px-2 py-0.5 text-xs font-medium text-green-800 dark:bg-green-900 dark:text-green-200">
                            Save {row.discountPercentage}% off-peak
                          </span>
                        </div>
                      )}
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        </div>

        {/* Catering & Bar */}
        <div className="rounded-md bg-neutral-50 p-3 dark:bg-neutral-900">
          <div className="mb-2 text-sm font-medium text-neutral-800 dark:text-neutral-200">Catering & Bar</div>
          <ul className="space-y-1 text-sm">
            <li className="flex items-center justify-between rounded border border-neutral-200 bg-white px-2 py-1 dark:border-neutral-800 dark:bg-neutral-950">
              <span className="text-neutral-700 dark:text-neutral-300">Catering (Latin Fusion)</span>
              <span className="font-medium">{latinRange}</span>
            </li>
            <li className="flex items-center justify-between rounded border border-neutral-200 bg-white px-2 py-1 dark:border-neutral-800 dark:bg-neutral-950">
              <span className="text-neutral-700 dark:text-neutral-300">Catering (All‑American)</span>
              <span className="font-medium">{americanRange}</span>
            </li>
            {openBar2Hr && 'beerWine' in openBar2Hr && (
              <li className="flex items-center justify-between rounded border border-neutral-200 bg-white px-2 py-1 dark:border-neutral-800 dark:bg-neutral-950">
                <span className="text-neutral-700 dark:text-neutral-300">Open Bar (2 hrs)</span>
                <span className="font-medium">Beer/Wine {formatUsd(openBar2Hr.beerWine)} · Full {formatUsd(openBar2Hr.fullBar)}</span>
              </li>
            )}
          </ul>
          <div className="mt-2 space-y-1">
            <p className="text-xs text-neutral-600 dark:text-neutral-400">
              Off‑peak discounts may apply. Ask about Sunday and weekday savings.
            </p>
            <div className="inline-flex items-center rounded-full bg-blue-50 px-2 py-1 text-xs text-blue-700 dark:bg-blue-950 dark:text-blue-300">
              Book during {getOffPeakMonthsLabel()} for up to 30% off venue
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}


