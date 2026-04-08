import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import CopyChallengeLinkButton from '@/components/challenges/CopyChallengeLinkButton';
import { challenges } from '@/data/challenges';
import { Badge, SectionWrapper } from '@/components/ui';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from '@/components/ui/breadcrumb';
import { Button } from '@/components/ui/button';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from '@/components/ui/pagination';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Tooltip, TooltipContent, TooltipTrigger } from '@/components/ui/tooltip';

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
  const challengeNumber = String(challenge.number).padStart(2, '0');

  return (
    <main>
      <SectionWrapper className="pt-14">
        <Breadcrumb>
          <BreadcrumbList className="text-star-light">
            <BreadcrumbItem>
              <BreadcrumbLink render={<Link href="/" />}>Inicio</BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbLink render={<Link href="/desafios" />}>Desafios</BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbPage className="text-white-photon">{challenge.title}</BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>

        <header className="mt-6 rounded-2xl border border-nebula bg-deep-space/70 p-6 md:p-8">
          <p className="font-mono text-sm text-neon-green">DESAFIO #{challengeNumber}</p>
          <h1 className="mt-2 font-orbitron text-3xl font-black uppercase text-white-photon md:text-5xl">
            {challenge.title}
          </h1>
          <div className="mt-4 flex flex-wrap items-center gap-3">
            <p className="text-star-light">{challenge.period}</p>
            <CopyChallengeLinkButton slug={challenge.id} />
          </div>
          <Alert className="mt-5 border-nebula bg-dark-matter/45 text-white-photon">
            <AlertTitle>Estado del desafio</AlertTitle>
            <AlertDescription>
              Evidencias y reflexiones disponibles para revision academica y trazabilidad del aprendizaje.
            </AlertDescription>
          </Alert>
        </header>
      </SectionWrapper>

      <SectionWrapper>
        <article className="rounded-2xl border border-nebula bg-deep-space/70 p-6 md:p-8">
          <Tabs defaultValue="contexto" className="w-full">
            <TabsList className="mb-6 w-full max-w-full justify-start gap-1 overflow-x-auto bg-dark-matter/80 p-1 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
              <TabsTrigger value="contexto" className="shrink-0 px-3 text-star-light data-active:text-cyber-cyan">
                Contexto
              </TabsTrigger>
              <TabsTrigger value="evidencias" className="shrink-0 px-3 text-star-light data-active:text-cyber-cyan">
                Evidencias
              </TabsTrigger>
              <TabsTrigger value="reflexion" className="shrink-0 px-3 text-star-light data-active:text-cyber-cyan">
                Reflexión
              </TabsTrigger>
            </TabsList>

            <TabsContent value="contexto" className="space-y-8">
              <section>
                <h2 className="font-exo2 text-2xl font-semibold text-cyber-cyan">Problema Abordado</h2>
                <p className="mt-3 leading-relaxed text-star-light">{challenge.problem}</p>
              </section>

              <section>
                <h2 className="font-exo2 text-2xl font-semibold text-electric-purple">Solucion Propuesta</h2>
                <p className="mt-3 leading-relaxed text-star-light">{challenge.solution}</p>
              </section>
            </TabsContent>

            <TabsContent value="evidencias" className="space-y-6">
              <Accordion defaultValue={["item-0"]} className="w-full">
                {challenge.evidences.map((evidence, index) => (
                  <AccordionItem key={evidence.label} value={`item-${index}`} className="border-nebula">
                    <AccordionTrigger className="text-white-photon">
                      <span className="flex items-center gap-2">
                        {evidence.label}
                        <Badge color="cyan" className="normal-case tracking-normal">
                          {evidence.type}
                        </Badge>
                      </span>
                    </AccordionTrigger>
                    <AccordionContent className="space-y-4 text-star-light">
                      {evidence.type === 'video' && isVideoUrl(evidence.url) ? (
                        <div className="overflow-hidden rounded-lg border border-nebula">
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
                        <p>Esta evidencia se abre en una pestana externa.</p>
                      )}

                      <div className="flex flex-wrap gap-3">
                        <Button
                          variant="outline"
                          nativeButton={false}
                          className="border-nebula bg-dark-matter/50 text-star-light hover:text-cyber-cyan"
                          render={<a href={evidence.url} target="_blank" rel="noreferrer" />}
                        >
                          Abrir evidencia
                        </Button>

                        <Dialog>
                          <DialogTrigger className="inline-flex min-h-11 items-center rounded-lg bg-electric-purple/80 px-3 text-sm font-medium text-white-photon hover:bg-electric-purple">
                            Vista rapida
                          </DialogTrigger>
                          <DialogContent className="max-w-2xl border border-nebula bg-deep-space text-white-photon">
                            <DialogHeader>
                              <DialogTitle>{evidence.label}</DialogTitle>
                              <DialogDescription className="text-star-light">
                                Previsualizacion de evidencia del desafio #{challengeNumber}.
                              </DialogDescription>
                            </DialogHeader>
                            {evidence.type === 'video' && isVideoUrl(evidence.url) ? (
                              <div className="overflow-hidden rounded-lg border border-nebula">
                                <iframe
                                  src={evidence.url}
                                  title={`${evidence.label}-modal`}
                                  className="h-80 w-full"
                                  loading="lazy"
                                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                  allowFullScreen
                                />
                              </div>
                            ) : (
                              <p className="text-star-light">
                                Esta evidencia no tiene embed directo disponible. Usa el boton &quot;Abrir evidencia&quot; para verla completa.
                              </p>
                            )}
                          </DialogContent>
                        </Dialog>
                      </div>
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </TabsContent>

            <TabsContent value="reflexion" className="space-y-8">
              <section>
                <h2 className="font-exo2 text-2xl font-semibold text-neon-green">Herramientas Utilizadas</h2>
                <div className="mt-4 flex flex-wrap gap-2">
                  {challenge.tools.map((tool) => (
                    <Tooltip key={tool}>
                      <TooltipTrigger className="inline-flex rounded-md">
                        <Badge color="green" className="normal-case tracking-normal">
                          {tool}
                        </Badge>
                      </TooltipTrigger>
                      <TooltipContent className="border border-nebula bg-deep-space text-white-photon">
                        Herramienta utilizada por el equipo
                      </TooltipContent>
                    </Tooltip>
                  ))}
                </div>
              </section>

              <section>
                <h2 className="font-exo2 text-2xl font-semibold text-hot-pink">Reflexión del Equipo</h2>
                <p className="mt-3 leading-relaxed text-star-light">{challenge.teamReflection}</p>
              </section>
            </TabsContent>
          </Tabs>
        </article>
      </SectionWrapper>

      <SectionWrapper>
        <Pagination>
          <PaginationContent>
            {previous ? (
              <PaginationItem>
                <PaginationPrevious href={`/desafios/${previous.id}`} text="Desafio anterior" />
              </PaginationItem>
            ) : null}

            <PaginationItem>
              <PaginationLink href="/desafios">Volver al listado</PaginationLink>
            </PaginationItem>

            {next ? (
              <PaginationItem>
                <PaginationNext href={`/desafios/${next.id}`} text="Desafio siguiente" />
              </PaginationItem>
            ) : null}
          </PaginationContent>
        </Pagination>
      </SectionWrapper>
    </main>
  );
}
