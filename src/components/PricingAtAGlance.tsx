import React from 'react';
import {
  venuePackages,
  calculateVenuePackagePrice,
  barPackages,
  cateringPackages,
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
      }))
    : [];

  const eightHourRows = showEightHour
    ? packageIds.map((id) => ({
        id,
        label: venuePackages[id].label,
        eightHour: calculateVenuePackagePrice({ packageId: id, durationHours: 8, applyOffPeak: false }),
      }))
    : [];

  // Catering price range — consistent across packages collections
  const americanRange = cateringPackages.american.priceRange; // e.g., "$18-33/guest"
  const latinRange = cateringPackages.latinFusion.priceRange;  // identical today, but keep future-proof

  const openBar2Hr = barPackages.find((b) => b.name.toLowerCase().includes('open bar'));

  return (
    <section className="not-prose my-6 rounded-md border border-neutral-200 bg-white p-4 shadow-sm dark:border-neutral-800 dark:bg-neutral-950">
      <div className="mb-3">
        <h3 className="text-lg font-semibold tracking-tight">
          Pricing at a Glance{eventLabel ? ` — ${eventLabel}` : ''}
        </h3>
        <p className="mt-1 text-sm text-neutral-600 dark:text-neutral-400">
          Examples shown before off‑peak discounts or holiday surcharges. Taxes/fees may apply.
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
                <ul className="grid grid-cols-1 gap-1 sm:grid-cols-2">
                  {fourHourRows.map((row) => (
                    <li key={`4h-${row.id}`} className="flex items-center justify-between rounded border border-neutral-200 bg-white px-2 py-1 dark:border-neutral-800 dark:bg-neutral-950">
                      <span className="text-neutral-700 dark:text-neutral-300">{row.label}</span>
                      <span className="font-medium">{formatUsd(row.fourHour)}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}
            {showEightHour && (
              <div className="mt-3">
                <div className="mb-1 font-semibold">8‑Hour Block</div>
                <ul className="grid grid-cols-1 gap-1 sm:grid-cols-2">
                  {eightHourRows.map((row) => (
                    <li key={`8h-${row.id}`} className="flex items-center justify-between rounded border border-neutral-200 bg-white px-2 py-1 dark:border-neutral-800 dark:bg-neutral-950">
                      <span className="text-neutral-700 dark:text-neutral-300">{row.label}</span>
                      <span className="font-medium">{formatUsd(row.eightHour ?? 0)}</span>
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
            {openBar2Hr && (
              <li className="flex items-center justify-between rounded border border-neutral-200 bg-white px-2 py-1 dark:border-neutral-800 dark:bg-neutral-950">
                <span className="text-neutral-700 dark:text-neutral-300">Open Bar (2 hrs)</span>
                <span className="font-medium">Beer/Wine {formatUsd(openBar2Hr.beerWine)} · Full {formatUsd(openBar2Hr.fullBar)}</span>
              </li>
            )}
          </ul>
          <p className="mt-2 text-xs text-neutral-600 dark:text-neutral-400">
            Off‑peak discounts may apply. Ask about Sunday and weekday savings.
          </p>
        </div>
      </div>
    </section>
  );
}


