'use client';

import dynamic from 'next/dynamic';

const WorldClockSection = dynamic(
  () => import('./WorldClockSection').then((m) => ({ default: m.WorldClockSection })),
  { ssr: false, loading: () => <div className="h-40" /> }
);

export function WorldClockClient() {
  return <WorldClockSection />;
}
