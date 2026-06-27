import { cn } from '@/lib/utils';
import type { TPISection } from '@/types';
import { CheckCircle2, ChevronRight } from 'lucide-react';
import { CyberCard } from '@/components/ui';

interface TPISectionCardProps {
  section: TPISection;
  isLast?: boolean;
}

const colorMap = {
  1: {
    glow: 'cyan' as const,
    border: 'border-cyber-cyan/30 hover:border-cyber-cyan/80',
    number: 'text-cyber-cyan',
    bg: 'bg-cyber-cyan/5',
    line: 'bg-cyber-cyan/30',
  },
  2: {
    glow: 'magenta' as const,
    border: 'border-neon-magenta/30 hover:border-neon-magenta/80',
    number: 'text-neon-magenta',
    bg: 'bg-neon-magenta/5',
    line: 'bg-neon-magenta/30',
  },
  3: {
    glow: 'purple' as const,
    border: 'border-electric-purple/30 hover:border-electric-purple/80',
    number: 'text-electric-purple',
    bg: 'bg-electric-purple/5',
    line: 'bg-electric-purple/30',
  },
  4: {
    glow: 'cyan' as const,
    border: 'border-cyber-cyan/30 hover:border-cyber-cyan/80',
    number: 'text-cyber-cyan',
    bg: 'bg-cyber-cyan/5',
    line: 'bg-cyber-cyan/30',
  },
  5: {
    glow: 'purple' as const,
    border: 'border-electric-purple/30 hover:border-electric-purple/80',
    number: 'text-electric-purple',
    bg: 'bg-electric-purple/5',
    line: 'bg-electric-purple/30',
  },
};

export default function TPISectionCard({ section, isLast = false }: TPISectionCardProps) {
  const config = colorMap[section.number as keyof typeof colorMap] || colorMap[1];

  return (
    <div className="relative flex gap-6 md:gap-8">
      {/* Línea de tiempo vertical (Decorativa) */}
      <div className="flex flex-col items-center">
        {/* Nodo indicador con número */}
        <div
          className={cn(
            'flex size-10 shrink-0 items-center justify-center rounded-full border bg-void-black font-orbitron text-sm font-bold shadow-[0_0_15px_rgba(0,0,0,0.8)] transition-all duration-300',
            config.border,
            config.number
          )}
        >
          {section.number}
        </div>
        {/* Línea conectora */}
        {!isLast && (
          <div className={cn('w-0.5 grow rounded-full my-2', config.line)} />
        )}
      </div>

      {/* Contenido de la sección */}
      <div className="grow pb-12 md:pb-16">
        <CyberCard
          glowColor={config.glow}
          className={cn(
            'relative overflow-hidden border bg-deep-space/65 p-6 md:p-8 backdrop-blur-sm transition-all duration-300',
            config.border
          )}
        >
          {/* Accent bar en la izquierda */}
          <div className={cn('absolute left-0 top-0 h-full w-1', config.bg)} />

          {/* Encabezado */}
          <div className="mb-6">
            <span className="font-orbitron text-xs font-semibold tracking-wider text-star-light uppercase">
              Etapa {section.number}
            </span>
            <h2 className="font-exo2 text-2xl font-bold tracking-tight text-white-photon md:text-3xl mt-1">
              {section.title}
            </h2>
          </div>

          {/* Párrafos principales */}
          <div className="space-y-4 text-base leading-relaxed text-star-light">
            {section.content.map((p, idx) => (
              <p key={idx}>{p}</p>
            ))}
          </div>

          {/* Highlights / Pains */}
          {section.highlights && section.highlights.length > 0 && (
            <div className="mt-6 rounded-xl border border-nebula/40 bg-void-black/30 p-5">
              <h4 className="font-orbitron text-xs font-semibold tracking-wider text-white-photon uppercase mb-3 flex items-center gap-2">
                <span className={cn('size-1.5 rounded-full', config.bg.replace('/5', ''))} />
                Puntos Clave / Diagnóstico
              </h4>
              <ul className="grid grid-cols-1 gap-3 sm:grid-cols-2">
                {section.highlights.map((highlight, idx) => (
                  <li key={idx} className="flex items-start gap-2.5 text-sm text-star-light">
                    <CheckCircle2 size={16} className={cn('mt-0.5 shrink-0', config.number)} />
                    <span>{highlight}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Subsecciones */}
          {section.subsections && section.subsections.length > 0 && (
            <div className="mt-8 space-y-6">
              {section.subsections.map((sub, sIdx) => (
                <div key={sIdx} className="border-t border-nebula/30 pt-6">
                  <h3 className="font-exo2 text-lg font-bold text-white-photon mb-4">
                    {sub.title}
                  </h3>

                  {/* Listado de items con formato condicional */}
                  <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                    {sub.items.map((item, itemIdx) => {
                      if (typeof item === 'object' && item !== null) {
                        return (
                          <div
                            key={itemIdx}
                            className="rounded-lg border border-nebula/20 bg-dark-matter/20 p-4 transition-all hover:bg-dark-matter/40"
                          >
                            <span className={cn('font-orbitron text-xs font-bold uppercase tracking-wider', config.number)}>
                              {item.label}
                            </span>
                            <p className="mt-1 text-sm leading-relaxed text-star-light">
                              {item.text}
                            </p>
                          </div>
                        );
                      }

                      return (
                        <div key={itemIdx} className="flex items-start gap-3">
                          <ChevronRight size={18} className={cn('mt-0.5 shrink-0', config.number)} />
                          <span className="text-sm leading-relaxed text-star-light">
                            {item}
                          </span>
                        </div>
                      );
                    })}
                  </div>
                </div>
              ))}
            </div>
          )}
        </CyberCard>
      </div>
    </div>
  );
}
