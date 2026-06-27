/* eslint-disable @next/next/no-img-element */
'use client';

import { useState } from 'react';
import { Maximize2, X, ZoomIn } from 'lucide-react';
import { teamConceptMap } from '@/data/concept-map';
import { EmptyState, GlitchTitle, SectionWrapper } from '@/components/ui';

export default function ConceptMapSection() {
  const [isOpen, setIsOpen] = useState(false);

  const handleOpen = () => {
    if (teamConceptMap.isPublished) {
      setIsOpen(true);
      document.body.style.overflow = 'hidden';
    }
  };

  const handleClose = () => {
    setIsOpen(false);
    document.body.style.overflow = '';
  };

  return (
    <SectionWrapper id="mapa-conceptual">
      <div className="mb-8">
        <GlitchTitle text="Mapa Conceptual" className="text-4xl md:text-5xl" />
        <p className="mt-3 text-star-light">
          Visualización integral de los contenidos de la materia y sus interrelaciones.
        </p>
      </div>

      {teamConceptMap.isPublished && teamConceptMap.imageUrl ? (
        <div className="w-full">
          {/* Header con botón fullscreen */}
          <div className="mb-4 flex items-center justify-between">
            <h3 className="font-orbitron text-lg font-bold uppercase tracking-wider text-cyber-cyan">
              {teamConceptMap.title}
            </h3>
            <button
              onClick={handleOpen}
              className="flex items-center gap-1.5 rounded-lg border border-cyber-cyan/30 bg-cyber-cyan/5 px-3 py-1.5 text-xs font-semibold text-cyber-cyan transition-all duration-300 hover:bg-cyber-cyan/15 hover:shadow-[0_0_12px_rgba(0,245,255,0.25)]"
            >
              <ZoomIn size={14} />
              Ver en Pantalla Completa
            </button>
          </div>

          {/* Contenedor de la imagen */}
          <div
            onClick={handleOpen}
            className="group relative cursor-pointer overflow-hidden rounded-2xl border border-nebula bg-dark-matter/30 p-2 backdrop-blur-sm transition-all duration-300 hover:border-cyber-cyan/70 hover:shadow-[0_0_25px_rgba(0,245,255,0.15)]"
          >
            <div className="relative w-full overflow-hidden rounded-xl bg-void-black">
              <img
                src={teamConceptMap.imageUrl}
                alt={teamConceptMap.title}
                className="h-auto w-full object-contain transition-transform duration-500 group-hover:scale-[1.015]"
                loading="lazy"
              />
              <div className="absolute inset-0 flex items-center justify-center bg-void-black/40 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                <div className="flex items-center gap-2 rounded-xl border border-cyber-cyan/50 bg-deep-space/90 px-4 py-2.5 text-sm font-semibold text-cyber-cyan shadow-[0_0_20px_rgba(0,245,255,0.3)]">
                  <Maximize2 size={16} />
                  Expandir Mapa
                </div>
              </div>
            </div>
          </div>

          <p className="mt-3 text-center text-xs text-star-light">
            Mapa conceptual integrador de las 7 unidades de Gestión Gerencial — haz clic para ampliar.
          </p>

          {/* Lightbox / Modal fullscreen */}
          {isOpen && (
            <div
              className="fixed inset-0 z-[100] flex items-center justify-center bg-void-black/95 p-4 backdrop-blur-md animate-fade-in"
              onClick={handleClose}
            >
              <div className="relative flex h-full w-full max-w-7xl flex-col items-center justify-center">
                <button
                  onClick={handleClose}
                  className="absolute -top-2 right-0 z-50 flex size-10 items-center justify-center rounded-full border border-nebula bg-deep-space/90 text-white-photon transition-colors hover:border-hot-pink hover:text-hot-pink focus:outline-none focus:ring-2 focus:ring-hot-pink/50 md:-top-4 md:right-4"
                  aria-label="Cerrar modal"
                >
                  <X size={20} />
                </button>

                <div
                  className="relative max-h-[85vh] w-full overflow-auto rounded-xl border border-cyber-cyan/30 bg-deep-space/50 p-1.5 shadow-[0_0_50px_rgba(0,245,255,0.15)]"
                  onClick={(e) => e.stopPropagation()}
                >
                  <img
                    src={teamConceptMap.imageUrl}
                    alt={teamConceptMap.title}
                    className="h-auto w-full max-w-none object-contain"
                  />
                </div>

                <div className="mt-4 text-center">
                  <p className="font-exo2 text-sm font-semibold text-white-photon">{teamConceptMap.title}</p>
                  <p className="text-xs text-star-light">Presiona en cualquier lugar fuera de la imagen o en la X para cerrar</p>
                </div>
              </div>
            </div>
          )}
        </div>
      ) : (
        <EmptyState
          title="Mapa de equipo en preparacion"
          message="El mapa conceptual de equipo se publicara cuando este finalizado en los archivos de datos."
        />
      )}
    </SectionWrapper>
  );
}
