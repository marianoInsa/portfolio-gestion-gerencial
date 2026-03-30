import { SectionWrapper } from '@/components/ui';
import { Skeleton } from '@/components/ui/skeleton';

export default function LoadingDesafioDetallePage() {
  return (
    <main>
      <SectionWrapper className="pt-14">
        <Skeleton className="h-4 w-56 bg-nebula/35" />
        <div className="mt-6 rounded-2xl border border-nebula bg-deep-space/70 p-6 md:p-8">
          <Skeleton className="h-4 w-24 bg-nebula/35" />
          <Skeleton className="mt-3 h-10 w-3/4 bg-nebula/45" />
          <Skeleton className="mt-4 h-5 w-40 bg-nebula/35" />
        </div>
      </SectionWrapper>

      <SectionWrapper>
        <div className="rounded-2xl border border-nebula bg-deep-space/70 p-6 md:p-8">
          <Skeleton className="h-8 w-72 bg-nebula/40" />
          <Skeleton className="mt-4 h-24 w-full bg-nebula/25" />
          <Skeleton className="mt-3 h-24 w-full bg-nebula/25" />
        </div>
      </SectionWrapper>
    </main>
  );
}
