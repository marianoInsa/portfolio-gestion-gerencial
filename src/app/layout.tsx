import type { Metadata } from 'next';
import { Archivo, Space_Grotesk } from 'next/font/google';
import './globals.css';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';

const archivo = Archivo({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-heading',
  display: 'swap',
});

const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-body',
  display: 'swap',
});

export const metadata: Metadata = {
  title: {
    default: 'Stakeholders — Gestión Gerencial',
    template: '%s | Stakeholders',
  },
  description:
    'Portfolio del equipo Stakeholders de la cátedra Gestión Gerencial — Ingeniería en Sistemas de Información.',
  authors: [{ name: 'Equipo Stakeholders' }],
  keywords: ['Gestión Gerencial', 'Ingeniería en Sistemas', 'Stakeholders', 'Portfolio'],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="es"
      className={`scroll-smooth ${archivo.variable} ${spaceGrotesk.variable}`}
    >
      <body
        className="flex flex-col min-h-screen"
        style={{ backgroundColor: 'var(--color-bg)', fontFamily: 'var(--font-body)' }}
      >
        <Header />
        <main id="main-content" className="flex-1" role="main" tabIndex={-1}>
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
