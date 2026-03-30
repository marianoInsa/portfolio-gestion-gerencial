import type { Metadata } from 'next';
import { NeonButton, SectionWrapper } from '@/components/ui';

export const metadata: Metadata = {
  title: '404',
  description: 'Pagina no encontrada',
};

export default function NotFoundPage() {
  return (
    <main>
      <SectionWrapper className="flex min-h-[70vh] items-center justify-center">
        <div className="w-full max-w-2xl rounded-2xl border border-hot-pink/60 bg-deep-space/80 p-8 text-center">
          <p className="font-mono text-sm text-hot-pink">ERROR_404</p>
          <h1 className="mt-3 font-orbitron text-3xl font-black uppercase text-white-photon md:text-5xl">
            Pagina no encontrada en la matrix
          </h1>
          <p className="mx-auto mt-4 max-w-xl text-star-light">
            El recurso solicitado no existe o fue movido. Vuelve al inicio para continuar navegando.
          </p>
          <div className="mt-8">
            <NeonButton href="/">Volver al inicio</NeonButton>
          </div>
        </div>
      </SectionWrapper>
    </main>
  );
}
