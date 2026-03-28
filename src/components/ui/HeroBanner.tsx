'use client';

import { WebGLShader } from '@/components/ui/web-gl-shader';
import { LiquidButton } from '@/components/ui/liquid-glass-button';
import Link from 'next/link';

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
      <div className="relative z-[2] border border-[#27272a] p-2 w-full mx-auto max-w-3xl">
        <main className="relative border border-[#27272a] py-10 overflow-hidden">
          <h1
            className="mb-3 text-white text-center text-5xl md:text-7xl font-extrabold tracking-tighter md:text-[clamp(2rem,8vw,7rem)]"
            id="hero-heading"
            style={{ fontFamily: 'var(--font-heading)' }}
          >
            Equipo{' '}
            <span className="gradient-text">Stakeholders</span>
          </h1>

          <p className="text-white/60 px-6 text-center text-xs md:text-sm lg:text-lg">
            Ingeniería en Sistemas de Información ·{' '}
            <strong className="text-white/80">Gestión Gerencial</strong>
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
              <LiquidButton className="text-white border rounded-full" size="xl">
                Conocer al Equipo
              </LiquidButton>
            </a>
            <Link
              href="/desafios/d3"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-semibold border transition-all duration-200 cursor-pointer text-white/70 border-white/20 hover:text-white hover:border-white/40"
            >
              Ver Desafíos →
            </Link>
          </div>
        </main>
      </div>
    </section>
  );
}
