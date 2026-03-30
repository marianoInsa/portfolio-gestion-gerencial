import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { challenges } from '@/data/challenges';
import { Badge, NeonButton, SectionWrapper } from '@/components/ui';

interface ChallengeDetailPageProps {
  params: Promise<{ slug: string }>;
}

export function generateStaticParams() {
  return challenges.map((challenge) => ({ slug: challenge.id }));
}

export async function generateMetadata({ params }: ChallengeDetailPageProps): Promise<Metadata> {
  const { slug } = await params;
  const challenge = challenges.find((item) => item.id === slug);

  if (!challenge) {
    return {
      title: 'Desafio no encontrado',
      description: 'El desafio solicitado no existe.',
    };
  }

  return {
    title: challenge.title,
    description: challenge.problem.slice(0, 150),
  };
}

function isVideoUrl(url: string): boolean {
  return /youtube\.com|youtu\.be|vimeo\.com/i.test(url);
}

export default async function ChallengeDetailPage({ params }: ChallengeDetailPageProps) {
  const { slug } = await params;
  const orderedChallenges = [...challenges].sort((a, b) => a.number - b.number);
  const currentIndex = orderedChallenges.findIndex((item) => item.id === slug);

  if (currentIndex === -1) {
    notFound();
  }

  const challenge = orderedChallenges[currentIndex];
  const previous = orderedChallenges[currentIndex - 1];
  const next = orderedChallenges[currentIndex + 1];

  return (
    <main>
      <SectionWrapper className="pt-14">
        <nav aria-label="Breadcrumb" className="text-sm text-star-light">
          <ol className="flex flex-wrap gap-2">
            <li>
              <Link href="/" className="hover:text-cyber-cyan">
                Inicio
              </Link>
            </li>
            <li>/</li>
            <li>
              <Link href="/desafios" className="hover:text-cyber-cyan">
                Desafios
              </Link>
            </li>
            <li>/</li>
            <li className="text-white-photon">{challenge.title}</li>
          </ol>
        </nav>

        <header className="mt-6 rounded-2xl border border-nebula bg-deep-space/70 p-6 md:p-8">
          <p className="font-mono text-sm text-neon-green">DESAFIO #{String(challenge.number).padStart(2, '0')}</p>
          <h1 className="mt-2 font-orbitron text-3xl font-black uppercase text-white-photon md:text-5xl">
            {challenge.title}
          </h1>
          <p className="mt-2 text-star-light">{challenge.period}</p>
        </header>
      </SectionWrapper>

      <SectionWrapper>
        <article className="space-y-8 rounded-2xl border border-nebula bg-deep-space/70 p-6 md:p-8">
          <section>
            <h2 className="font-exo2 text-2xl font-semibold text-cyber-cyan">Problema Abordado</h2>
            <p className="mt-3 leading-relaxed text-star-light">{challenge.problem}</p>
          </section>

          <section>
            <h2 className="font-exo2 text-2xl font-semibold text-electric-purple">Solucion Propuesta</h2>
            <p className="mt-3 leading-relaxed text-star-light">{challenge.solution}</p>
          </section>

          <section>
            <h2 className="font-exo2 text-2xl font-semibold text-neon-magenta">Evidencias</h2>
            <div className="mt-4 space-y-4">
              {challenge.evidences.map((evidence) => (
                <article key={evidence.label} className="rounded-xl border border-nebula bg-dark-matter/50 p-4">
                  <p className="text-sm font-semibold text-white-photon">{evidence.label}</p>
                  {evidence.type === 'video' && isVideoUrl(evidence.url) ? (
                    <div className="mt-3 overflow-hidden rounded-lg border border-nebula">
                      <iframe
                        src={evidence.url}
                        title={evidence.label}
                        className="h-64 w-full"
                        loading="lazy"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                      />
                    </div>
                  ) : (
                    <a
                      href={evidence.url}
                      target="_blank"
                      rel="noreferrer"
                      className="mt-2 inline-block text-sm font-semibold text-cyber-cyan hover:text-white-photon"
                    >
                      Abrir evidencia
                    </a>
                  )}
                </article>
              ))}
            </div>
          </section>

          <section>
            <h2 className="font-exo2 text-2xl font-semibold text-neon-green">Herramientas Utilizadas</h2>
            <div className="mt-4 flex flex-wrap gap-2">
              {challenge.tools.map((tool) => (
                <Badge key={tool} color="green" className="normal-case tracking-normal">
                  {tool}
                </Badge>
              ))}
            </div>
          </section>

          <section>
            <h2 className="font-exo2 text-2xl font-semibold text-hot-pink">Reflexion del Equipo</h2>
            <p className="mt-3 leading-relaxed text-star-light">{challenge.teamReflection}</p>
          </section>
        </article>
      </SectionWrapper>

      <SectionWrapper>
        <div className="flex flex-wrap gap-3">
          {previous ? (
            <NeonButton href={`/desafios/${previous.id}`} variant="ghost">
              Desafio anterior
            </NeonButton>
          ) : null}
          {next ? (
            <NeonButton href={`/desafios/${next.id}`} variant="secondary">
              Desafio siguiente
            </NeonButton>
          ) : null}
        </div>
      </SectionWrapper>
    </main>
  );
}
