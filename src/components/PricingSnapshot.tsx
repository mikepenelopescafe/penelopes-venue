import React from 'react';
import { venuePackages, barPackages, cateringPackages } from '@/data/pricing';

function formatUsd(amount: number): string {
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    maximumFractionDigits: 0,
  }).format(amount);
}

export interface PricingSnapshotProps {
  showEightHour?: boolean;
  className?: string;
}

export default function PricingSnapshot({ showEightHour = true, className }: PricingSnapshotProps) {
  const p = venuePackages;
  const openBar2Hr = barPackages.find((b) => 'beerWine' in b) as unknown as { beerWine?: number; fullBar?: number } | undefined;

  return (
    <section className={className ? className : 'not-prose my-4'}>
      <h3 className="text-lg font-semibold tracking-tight">Pricing Snapshot</h3>
      <ul className="mt-2 list-disc pl-5 text-sm leading-6">
        <li>
          Venue (4 hours): Mon–Thu {formatUsd(p.monThu.price4Hours)} · Fri {formatUsd(p.friday.price4Hours)} · Sat {formatUsd(p.saturday.price4Hours)} · Sun {formatUsd(p.sunday.price4Hours)}
        </li>
        {showEightHour && (
          <li>
            Venue (8 hours): Mon–Thu {formatUsd(p.monThu.price8Hours)} · Fri {formatUsd(p.friday.price8Hours)} · Sat {formatUsd(p.saturday.price8Hours)} · Sun {formatUsd(p.sunday.price8Hours)}
          </li>
        )}
        <li>Catering: {cateringPackages.latinFusion.priceRange}/guest</li>
        {openBar2Hr && (
          <li>
            Bar: Open Bar (2 hrs) Beer/Wine {formatUsd(openBar2Hr.beerWine ?? 0)} · Full {formatUsd(openBar2Hr.fullBar ?? 0)} — or Cash Bar (meets $300 minimum via sales)
          </li>
        )}
        <li>Seasonal: Off‑peak savings available; holiday surcharge on select dates</li>
      </ul>
    </section>
  );
}


