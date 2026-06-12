// components/PageSkeleton.tsx
import { Skeleton } from "@/components/ui/skeleton";
import { Separator } from "@/components/ui/separator";

export function PageSkeleton() {
  return (
    <div className="min-h-screen bg-background text-foreground animate-in fade-in duration-300">
      {/* Navbar skeleton */}
      <div className="sticky top-0 z-50 border-b border-border/40 bg-background/80 backdrop-blur-sm">
        <div className="mx-auto max-w-5xl px-5 sm:px-8 h-14 flex items-center justify-between">
          <Skeleton className="h-5 w-32" />
          <div className="flex items-center gap-4">
            <Skeleton className="h-4 w-16 hidden sm:block" />
            <Skeleton className="h-4 w-16 hidden sm:block" />
            <Skeleton className="h-4 w-16 hidden sm:block" />
            <Skeleton className="h-8 w-8 rounded-full" />
          </div>
        </div>
      </div>

      <main className="mx-auto max-w-5xl px-5 sm:px-8 pb-10 space-y-20 pt-10">
        {/* Hero skeleton */}
        <section className="space-y-5 py-10">
          <Skeleton className="h-4 w-28" />
          <Skeleton className="h-12 w-3/4" />
          <Skeleton className="h-12 w-1/2" />
          <div className="space-y-2 pt-2">
            <Skeleton className="h-4 w-full max-w-lg" />
            <Skeleton className="h-4 w-full max-w-md" />
          </div>
          <div className="flex gap-3 pt-2">
            <Skeleton className="h-9 w-28 rounded-md" />
            <Skeleton className="h-9 w-28 rounded-md" />
          </div>
        </section>

        <Separator />

        {/* Skills skeleton */}
        <section className="space-y-6">
          <Skeleton className="h-6 w-24" />
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3">
            {Array.from({ length: 8 }).map((_, i) => (
              <Skeleton key={i} className="h-10 rounded-md" />
            ))}
          </div>
        </section>

        <Separator />

        {/* Projects skeleton */}
        <section className="space-y-6">
          <Skeleton className="h-6 w-24" />
          <div className="grid sm:grid-cols-2 gap-4">
            {Array.from({ length: 4 }).map((_, i) => (
              <div
                key={i}
                className="border border-border/50 rounded-lg p-4 space-y-3"
              >
                <Skeleton className="h-5 w-40" />
                <Skeleton className="h-4 w-full" />
                <Skeleton className="h-4 w-5/6" />
                <div className="flex gap-2 pt-1">
                  <Skeleton className="h-5 w-16 rounded-full" />
                  <Skeleton className="h-5 w-16 rounded-full" />
                  <Skeleton className="h-5 w-16 rounded-full" />
                </div>
              </div>
            ))}
          </div>
        </section>

        <Separator />

        {/* Experience skeleton */}
        <section className="space-y-6">
          <Skeleton className="h-6 w-28" />
          {Array.from({ length: 3 }).map((_, i) => (
            <div key={i} className="flex gap-4">
              <div className="flex flex-col items-center">
                <Skeleton className="h-3 w-3 rounded-full mt-1" />
                {i < 2 && <Skeleton className="w-px flex-1 mt-2" />}
              </div>
              <div className="space-y-2 pb-8 flex-1">
                <Skeleton className="h-5 w-48" />
                <Skeleton className="h-4 w-32" />
                <Skeleton className="h-3 w-24" />
                <Skeleton className="h-4 w-full max-w-sm" />
              </div>
            </div>
          ))}
        </section>

        <Separator />

        {/* Hobbies + Contact skeleton — compact rows */}
        <section className="space-y-4">
          <Skeleton className="h-6 w-20" />
          <div className="flex flex-wrap gap-2">
            {Array.from({ length: 5 }).map((_, i) => (
              <Skeleton key={i} className="h-8 w-24 rounded-full" />
            ))}
          </div>
        </section>

        <Separator />

        <section className="space-y-4">
          <Skeleton className="h-6 w-20" />
          <div className="space-y-3 max-w-sm">
            <Skeleton className="h-9 w-full rounded-md" />
            <Skeleton className="h-9 w-full rounded-md" />
            <Skeleton className="h-24 w-full rounded-md" />
            <Skeleton className="h-9 w-28 rounded-md" />
          </div>
        </section>
      </main>

      {/* Footer skeleton */}
      <div className="border-t border-border/40 mt-10">
        <div className="mx-auto max-w-5xl px-5 sm:px-8 h-14 flex items-center justify-between">
          <Skeleton className="h-4 w-40" />
          <div className="flex gap-3">
            <Skeleton className="h-4 w-4 rounded" />
            <Skeleton className="h-4 w-4 rounded" />
            <Skeleton className="h-4 w-4 rounded" />
          </div>
        </div>
      </div>
    </div>
  );
}
