import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import DesafioTemplate from '@/components/ui/DesafioTemplate';
import { desafios } from '@/lib/data';

type Params = Promise<{ slug: string }>;

export async function generateStaticParams() {
  return desafios.map((d) => ({ slug: d.slug }));
}

export async function generateMetadata({ params }: { params: Params }): Promise<Metadata> {
  const { slug } = await params;
  const desafio = desafios.find((d) => d.slug === slug);
  if (!desafio) return { title: 'Desafío no encontrado' };
  return {
    title: `${desafio.code} — ${desafio.title}`,
    description: desafio.problem.slice(0, 160),
  };
}

export default async function DesafioPage({ params }: { params: Params }) {
  const { slug } = await params;
  const desafio = desafios.find((d) => d.slug === slug);
  if (!desafio) notFound();

  return <DesafioTemplate desafio={desafio} />;
}
