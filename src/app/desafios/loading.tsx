import { SectionWrapper } from '@/components/ui';
import { Skeleton } from '@/components/ui/skeleton';

export default function LoadingDesafiosPage() {
  return (
    <main>
      <SectionWrapper className="pt-16">
        <Skeleton className="h-12 w-64 bg-nebula/40" />
        <Skeleton className="mt-4 h-5 w-full max-w-2xl bg-nebula/30" />
      </SectionWrapper>

      <SectionWrapper>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {Array.from({ length: 6 }, (_, index) => (
            <div key={index} className="rounded-2xl border border-nebula bg-deep-space/60 p-5">
              <Skeleton className="h-4 w-24 bg-nebula/35" />
              <Skeleton className="mt-3 h-6 w-3/4 bg-nebula/40" />
              <Skeleton className="mt-3 h-16 w-full bg-nebula/25" />
              <div className="mt-4 flex gap-2">
                <Skeleton className="h-5 w-16 bg-nebula/35" />
                <Skeleton className="h-5 w-16 bg-nebula/35" />
              </div>
            </div>
          ))}
        </div>
      </SectionWrapper>
    </main>
  );
}
