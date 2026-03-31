"use client";

import Link from "next/link";
import { Bar, BarChart, CartesianGrid, XAxis } from "recharts";
import { CircleHelp } from "lucide-react";
import { challenges } from "@/data/challenges";
import { GlitchTitle, SectionWrapper } from "@/components/ui";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  ChartContainer,
  ChartLegend,
  ChartLegendContent,
  ChartTooltip,
  ChartTooltipContent,
  type ChartConfig,
} from "@/components/ui/chart";
import {
  Progress,
  ProgressLabel,
  ProgressValue,
} from "@/components/ui/progress";
import {
  Popover,
  PopoverContent,
  PopoverHeader,
  PopoverTitle,
  PopoverDescription,
  PopoverTrigger,
} from "@/components/ui/popover";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

const CHALLENGE_TARGET = 8;
const TOOLS_TARGET = 12;

const chartConfig = {
  evidencias: {
    label: "Evidencias",
    color: "var(--color-cyber-cyan)",
  },
  herramientas: {
    label: "Herramientas",
    color: "var(--color-electric-purple)",
  },
} satisfies ChartConfig;

export default function InsightsSection() {
  const chartData = challenges.map((challenge) => ({
    desafio: `D${String(challenge.number).padStart(2, "0")}`,
    evidencias: challenge.evidences.length,
    herramientas: challenge.tools.length,
  }));

  const totalEvidences = challenges.reduce((acc, challenge) => acc + challenge.evidences.length, 0);
  const distinctTools = new Set(challenges.flatMap((challenge) => challenge.tools));

  const challengeProgress = Math.min((challenges.length / CHALLENGE_TARGET) * 100, 100);
  const evidenceProgress = Math.min((totalEvidences / Math.max(challenges.length * 3, 1)) * 100, 100);
  const toolProgress = Math.min((distinctTools.size / TOOLS_TARGET) * 100, 100);

  return (
    <SectionWrapper id="insights">
      <div className="mb-8 flex items-end justify-between gap-4">
        <div>
          <GlitchTitle text="Insights del Equipo" className="text-4xl md:text-5xl" />
          <p className="mt-3 max-w-3xl text-star-light">
            Visualizacion de avance, calidad de evidencia y madurez tecnica del portfolio durante la cursada.
          </p>
        </div>

        <Popover>
          <PopoverTrigger className="inline-flex size-10 items-center justify-center rounded-lg border border-nebula bg-dark-matter/50 text-star-light hover:border-cyber-cyan hover:text-cyber-cyan">
            <CircleHelp />
          </PopoverTrigger>
          <PopoverContent className="border border-nebula bg-deep-space text-white-photon">
            <PopoverHeader>
              <PopoverTitle>Como leer este panel</PopoverTitle>
              <PopoverDescription className="text-star-light">
                Los indicadores combinan progreso por entregables, densidad de evidencias y diversidad de herramientas.
              </PopoverDescription>
            </PopoverHeader>
          </PopoverContent>
        </Popover>
      </div>

      <div className="grid grid-cols-1 gap-6 xl:grid-cols-[1.2fr_0.8fr]">
        <Card className="border border-nebula bg-deep-space/75 text-white-photon ring-0">
          <CardHeader>
            <CardTitle>Desafios: Evidencias vs Herramientas</CardTitle>
            <CardDescription className="text-star-light">
              Relacion entre evidencia entregada y stack utilizado por desafio.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <ChartContainer config={chartConfig} className="min-h-[260px] w-full">
              <BarChart accessibilityLayer data={chartData}>
                <CartesianGrid vertical={false} />
                <XAxis dataKey="desafio" tickLine={false} axisLine={false} tickMargin={10} />
                <ChartTooltip content={<ChartTooltipContent />} />
                <ChartLegend content={<ChartLegendContent />} />
                <Bar dataKey="evidencias" fill="var(--color-evidencias)" radius={6} />
                <Bar dataKey="herramientas" fill="var(--color-herramientas)" radius={6} />
              </BarChart>
            </ChartContainer>
          </CardContent>
        </Card>

        <Card className="border border-nebula bg-deep-space/75 text-white-photon ring-0">
          <CardHeader>
            <CardTitle>Progreso de Cursada</CardTitle>
            <CardDescription className="text-star-light">Indicadores de avance del equipo.</CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <Progress value={challengeProgress}>
              <ProgressLabel className="text-white-photon">Desafios Publicados</ProgressLabel>
              <ProgressValue className="text-star-light">
                {() => `${challenges.length}/${CHALLENGE_TARGET}`}
              </ProgressValue>
            </Progress>

            <Progress value={evidenceProgress}>
              <ProgressLabel className="text-white-photon">Cobertura de Evidencias</ProgressLabel>
              <ProgressValue className="text-star-light">{() => `${totalEvidences} items`}</ProgressValue>
            </Progress>

            <Progress value={toolProgress}>
              <ProgressLabel className="text-white-photon">Diversidad de Herramientas</ProgressLabel>
              <ProgressValue className="text-star-light">{() => `${distinctTools.size}/${TOOLS_TARGET}`}</ProgressValue>
            </Progress>
          </CardContent>
        </Card>
      </div>

      <div className="mt-8 grid grid-cols-1 gap-6 xl:grid-cols-[1fr_1fr]">
        <Card className="border border-nebula bg-deep-space/75 text-white-photon ring-0">
          <CardHeader>
            <CardTitle>Linea de Entregables</CardTitle>
            <CardDescription className="text-star-light">Resumen operativo por desafio.</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-2">
              <p className="text-xs text-star-light md:hidden">Desliza horizontalmente para ver todas las columnas.</p>
              <div className="relative">
                <Table>
                  <TableHeader>
                    <TableRow className="border-nebula hover:bg-transparent">
                      <TableHead className="text-star-light">Desafio</TableHead>
                      <TableHead className="text-star-light">Periodo</TableHead>
                      <TableHead className="text-right text-star-light">Evidencias</TableHead>
                      <TableHead className="text-right text-star-light">Herramientas</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {challenges.map((challenge) => (
                      <TableRow key={challenge.id} className="border-nebula/70 hover:bg-dark-matter/50">
                        <TableCell className="font-semibold text-white-photon">#{String(challenge.number).padStart(2, "0")}</TableCell>
                        <TableCell className="text-star-light">{challenge.period}</TableCell>
                        <TableCell className="text-right text-star-light">{challenge.evidences.length}</TableCell>
                        <TableCell className="text-right text-star-light">{challenge.tools.length}</TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
                <div className="pointer-events-none absolute inset-y-0 right-0 w-10 bg-gradient-to-l from-deep-space/95 to-transparent md:hidden" />
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="border border-nebula bg-deep-space/75 text-white-photon ring-0">
          <CardHeader>
            <CardTitle>Highlights de Evidencias</CardTitle>
            <CardDescription className="text-star-light">
              Navegacion rapida por evidencias clave de cada desafio.
            </CardDescription>
          </CardHeader>
          <CardContent className="px-4 sm:px-10">
            <Carousel className="w-full">
              <CarouselContent>
                {challenges.map((challenge) => {
                  const firstEvidence = challenge.evidences[0];
                  return (
                    <CarouselItem key={challenge.id}>
                      <div className="rounded-xl border border-nebula bg-dark-matter/45 p-4">
                        <p className="font-mono text-xs text-neon-green">DESAFIO #{String(challenge.number).padStart(2, "0")}</p>
                        <h3 className="mt-2 font-exo2 text-xl font-semibold text-white-photon">{challenge.title}</h3>
                        <p className="mt-2 text-sm text-star-light">{firstEvidence?.label ?? "Sin evidencia destacada."}</p>
                        <Link
                          href={`/desafios/${challenge.id}`}
                          className="mt-4 inline-flex rounded-lg border border-nebula px-3 py-2 text-sm font-semibold text-cyber-cyan transition-colors hover:border-cyber-cyan hover:bg-cyber-cyan/10"
                        >
                          Ver detalle
                        </Link>
                      </div>
                    </CarouselItem>
                  );
                })}
              </CarouselContent>
              <CarouselPrevious className="border-nebula bg-dark-matter/70 text-star-light hover:text-cyber-cyan" />
              <CarouselNext className="border-nebula bg-dark-matter/70 text-star-light hover:text-cyber-cyan" />
            </Carousel>
          </CardContent>
        </Card>
      </div>
    </SectionWrapper>
  );
}
