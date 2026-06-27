import { Quote } from 'lucide-react';

interface TPIClosingQuoteProps {
  quote: string;
}

export default function TPIClosingQuote({ quote }: TPIClosingQuoteProps) {
  return (
    <div className="relative mx-auto max-w-3xl px-4 py-10 text-center">
      {/* Elemento de Fondo de Citas Decorativo */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-5">
        <Quote size={200} className="text-cyber-cyan" />
      </div>

      <div className="relative z-10">
        <Quote size={32} className="mx-auto text-cyber-cyan mb-4 animate-pulse" />
        <blockquote className="font-exo2 text-lg sm:text-xl md:text-2xl font-medium italic leading-relaxed text-gradient-cyber px-6">
          «{quote}»
        </blockquote>
        <div className="mt-4 flex items-center justify-center gap-2">
          <span className="h-px w-8 bg-nebula" />
          <span className="font-orbitron text-xs tracking-widest text-star-light uppercase">
            Compromiso Stakeholders
          </span>
          <span className="h-px w-8 bg-nebula" />
        </div>
      </div>
    </div>
  );
}
