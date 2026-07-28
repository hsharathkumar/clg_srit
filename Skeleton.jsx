import React from 'react';
import Sidebar from './Sidebar';

// Generic Skeleton Box Component
export function Skeleton({ width = 'w-full', height = 'h-4', rounded = 'rounded-xl', className = '' }) {
  return (
    <div
      className={`shimmer-effect ${width} ${height} ${rounded} ${className}`}
      aria-hidden="true"
    />
  );
}

// Text Line Skeleton (Supports count, width, height)
export function SkeletonText({ count = 3, width = 'w-full', height = 'h-3.5', space = 'space-y-2' }) {
  return (
    <div className={`${space}`} aria-hidden="true">
      {Array.from({ length: count }).map((_, index) => {
        // Vary widths for realistic paragraph shape
        const widthClass = index === count - 1 ? 'w-2/3' : index % 2 === 1 ? 'w-4/5' : width;
        return (
          <Skeleton key={index} width={widthClass} height={height} rounded="rounded-md" />
        );
      })}
    </div>
  );
}

// Avatar Skeleton
export function SkeletonAvatar({ size = 'w-12 h-12', rounded = 'rounded-full' }) {
  return <Skeleton width={size.split(' ')[0]} height={size.split(' ')[1] || size.split(' ')[0]} rounded={rounded} />;
}

// Card Skeleton
export function SkeletonCard({ count = 1 }) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full" aria-busy="true" aria-live="polite">
      {Array.from({ length: count }).map((_, i) => (
        <div key={i} className="bg-white rounded-3xl p-6 border border-slate-200/80 shadow-xs space-y-4">
          <Skeleton height="h-44" rounded="rounded-2xl" />
          <div className="space-y-2 pt-2">
            <Skeleton width="w-3/4" height="h-5" />
            <SkeletonText count={2} />
          </div>
          <Skeleton height="h-10" rounded="rounded-xl" className="mt-4" />
        </div>
      ))}
    </div>
  );
}

// Stats Grid Skeleton
export function SkeletonStatsGrid({ cols = 4 }) {
  return (
    <div className={`grid grid-cols-2 md:grid-cols-${cols} gap-4 w-full`} aria-busy="true" aria-live="polite">
      {Array.from({ length: cols }).map((_, i) => (
        <div key={i} className="bg-white p-5 rounded-3xl border border-slate-200/80 shadow-xs space-y-3">
          <Skeleton width="w-20" height="h-3" />
          <Skeleton width="w-16" height="h-8" rounded="rounded-lg" />
          <Skeleton width="w-28" height="h-3" />
        </div>
      ))}
    </div>
  );
}

// Full Page SRIT Skeleton Layout Matching Application Design
export function SkeletonPageLayout({ title = "Loading Department..." }) {
  return (
    <div className="max-w-[1440px] mx-auto flex flex-col lg:flex-row min-h-screen bg-[#f5f7fa]" aria-busy="true" aria-live="polite">
      {/* Left Sidebar */}
      <Sidebar />

      {/* Main Content Skeleton */}
      <main className="flex-1 p-4 sm:p-6 lg:p-8 space-y-8">
        {/* Screen Reader Loading Announcement */}
        <span className="sr-only">{title}</span>

        {/* Hero Section Skeleton */}
        <div className="bg-white rounded-3xl p-6 sm:p-10 border border-slate-200/80 shadow-xs flex flex-col lg:flex-row justify-between items-center gap-8">
          <div className="space-y-4 max-w-xl w-full">
            <Skeleton width="w-32" height="h-5" rounded="rounded-full" />
            <Skeleton width="w-3/4" height="h-9" rounded="rounded-xl" />
            <SkeletonText count={3} />
            <div className="flex gap-3 pt-2">
              <Skeleton width="w-32" height="h-10" rounded="rounded-xl" />
              <Skeleton width="w-28" height="h-10" rounded="rounded-xl" />
            </div>
          </div>
          <Skeleton width="w-full lg:w-[420px]" height="h-[240px]" rounded="rounded-2xl" />
        </div>

        {/* Stats Row Skeleton */}
        <SkeletonStatsGrid cols={4} />

        {/* Content Cards Skeleton */}
        <div className="space-y-4 pt-2">
          <Skeleton width="w-48" height="h-6" />
          <SkeletonCard count={3} />
        </div>
      </main>
    </div>
  );
}

export default Skeleton;
