import type { Metadata } from 'next';
import { Exo_2, Inter, JetBrains_Mono, Orbitron, Geist } from 'next/font/google';
import CommandPalette from '@/components/layout/CommandPalette';
import Footer from '@/components/layout/Footer';
import NavBar from '@/components/layout/NavBar';
import CyberneticGridShader from '@/components/ui/CyberneticGridShader';
import { Toaster } from '@/components/ui/sonner';
import { TooltipProvider } from '@/components/ui/tooltip';
import './globals.css';
import { cn } from "@/lib/utils";

const geist = Geist({subsets:['latin'],variable:'--font-sans'});

export const metadata: Metadata = {
  title: {
    default: 'Stakeholders - Portfolio',
    template: '%s | Stakeholders',
  },
  description: 'Portfolio academico del equipo Stakeholders - Ingenieria en Sistemas de Informacion.',
  openGraph: {
    title: 'Stakeholders - Portfolio',
    description: 'Micrositio academico del equipo Stakeholders.',
    type: 'website',
  },
};

const orbitron = Orbitron({
  subsets: ['latin'],
  weight: ['700', '900'],
  variable: '--font-orbitron',
});

const exo2 = Exo_2({
  subsets: ['latin'],
  weight: ['500', '600', '700'],
  variable: '--font-exo2',
});

const inter = Inter({
  subsets: ['latin'],
  weight: ['400', '500'],
  variable: '--font-inter',
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  weight: ['400', '500'],
  variable: '--font-jetbrains',
});

type RootLayoutProps = {
  children: React.ReactNode;
};

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html
      lang="es"
      data-scroll-behavior="smooth"
      className={cn('dark font-sans', geist.variable)}
    >
      <body
        className={`${orbitron.variable} ${exo2.variable} ${inter.variable} ${jetbrainsMono.variable} bg-void-black text-white-photon antialiased`}
      >
        <CyberneticGridShader />
        <div className="relative z-10">
          <TooltipProvider delay={150}>
            <a
              href="#main-content"
              className="sr-only focus:not-sr-only focus:fixed focus:left-3 focus:top-3 focus:z-[100] focus:rounded-md focus:bg-cyber-cyan focus:px-3 focus:py-2 focus:text-void-black"
            >
              Saltar al contenido principal
            </a>
            <NavBar />
            <main id="main-content">{children}</main>
            <Footer />
            <CommandPalette />
            <Toaster position="top-right" richColors />
          </TooltipProvider>
        </div>
      </body>
    </html>
  );
}
