'use client';

import { WebGLShader } from '@/components/ui/web-gl-shader';
import { LiquidButton } from '@/components/ui/liquid-glass-button';
import { Button } from '@/components/ui/primitives';

export default function HeroBanner() {
  return (
    <section
      className="relative flex w-full flex-col items-center justify-center overflow-hidden hero-full"
      aria-labelledby="hero-heading"
    >
      {/* WebGL Shader Background */}
      <WebGLShader />

      {/* Dark overlay for readability */}
      <div
        className="absolute inset-0 z-[1]"
        style={{ background: 'rgba(0, 0, 0, 0.35)' }}
        aria-hidden="true"
      />

      {/* Content */}
      <div className="relative z-[2] border border-white/10 p-3 w-full mx-auto max-w-3xl">
        <main className="relative border border-white/10 py-8 md:py-12 px-6 overflow-hidden rounded-xl">
          <h1
            className="mb-4 md:mb-6 text-white text-center text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight"
            id="hero-heading"
            style={{ fontFamily: 'var(--font-heading)' }}
          >
            Equipo{' '}
            <span className="gradient-text">Stakeholders</span>
          </h1>

          <p className="text-white/60 px-4 md:px-8 text-center text-sm md:text-base lg:text-lg mb-6 md:mb-8">
            Ingeniería en Sistemas de Información ·{' '}
            <strong className="text-white/80 font-medium">Gestión Gerencial</strong>
          </p>

          {/* Pulsing status indicator */}
          <div className="my-8 flex items-center justify-center gap-1">
            <span className="relative flex h-3 w-3 items-center justify-center">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-500 opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-green-500" />
            </span>
            <p className="text-xs text-green-500">Cursada Activa · 2025</p>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
            <a href="#equipo">
              <LiquidButton className="text-white border" size="xl">
                Conocer al Equipo
              </LiquidButton>
            </a>
            <Button
              href="/desafios/d3"
              variant="secondary"
              size="lg"
              className="border-white/30 bg-white/5 text-white/80 hover:border-white/50 hover:bg-white/10 hover:text-white"
            >
              Ver Desafios
            </Button>
          </div>
        </main>
      </div>
    </section>
  );
}
