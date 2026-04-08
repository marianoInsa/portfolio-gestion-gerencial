"use client";

import { useMemo, useState } from "react";
import { BookOpenText, FolderOpenDot, Hammer, Wrench } from "lucide-react";
import type { Challenge } from "@/types";
import { Badge } from "@/components/ui";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";
import { ResizableHandle, ResizablePanel, ResizablePanelGroup } from "@/components/ui/resizable";
import { ScrollArea } from "@/components/ui/scroll-area";
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarInset,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarProvider,
  SidebarTrigger,
} from "@/components/ui/sidebar";

interface ChallengesWorkbenchProps {
  challenges: Challenge[];
}

type ScopeMode = "all" | "recent" | "older";

const scopeLabels: Record<ScopeMode, string> = {
  all: "Todos",
  recent: "Recientes",
  older: "Iniciales",
};

export default function ChallengesWorkbench({ challenges }: ChallengesWorkbenchProps) {
  const [scope, setScope] = useState<ScopeMode>("all");
  const [activeId, setActiveId] = useState<string>(challenges[0]?.id ?? "");

  const scopedChallenges = useMemo(() => {
    const ordered = [...challenges].sort((a, b) => a.number - b.number);

    if (scope === "recent") {
      return ordered.filter((challenge) => challenge.number >= 2);
    }

    if (scope === "older") {
      return ordered.filter((challenge) => challenge.number <= 2);
    }

    return ordered;
  }, [challenges, scope]);

  const selectedId = scopedChallenges.some((challenge) => challenge.id === activeId)
    ? activeId
    : (scopedChallenges[0]?.id ?? "");

  const activeChallenge = scopedChallenges.find((challenge) => challenge.id === selectedId) ?? scopedChallenges[0];

  if (!activeChallenge) {
    return null;
  }

  return (
    <section className="rounded-2xl border border-nebula bg-deep-space/70 p-4 md:p-5">
      <div className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
        <div>
          <h2 className="font-exo2 text-2xl font-semibold text-white-photon">Vista Operativa de Desafios</h2>
          <p className="mt-1 text-sm text-star-light">
            Patron tipo documentacion para escalar navegacion y seguimiento cuando crezca el volumen de entregables.
          </p>
        </div>

        <NavigationMenu>
          <NavigationMenuList>
            {Object.entries(scopeLabels).map(([key, label]) => {
              const scopeKey = key as ScopeMode;
              const isActive = scopeKey === scope;

              return (
                <NavigationMenuItem key={scopeKey}>
                  <NavigationMenuLink
                    render={<button type="button" />}
                    onClick={() => setScope(scopeKey)}
                    className={isActive ? "bg-dark-matter/80 text-cyber-cyan" : "text-star-light"}
                  >
                    {label}
                  </NavigationMenuLink>
                </NavigationMenuItem>
              );
            })}
          </NavigationMenuList>
        </NavigationMenu>
      </div>

      <SidebarProvider defaultOpen>
        <div className="mt-4 flex min-h-[480px] w-full overflow-hidden rounded-xl border border-nebula/70">
          <Sidebar collapsible="icon" variant="inset">
            <SidebarContent>
              <SidebarGroup>
                <SidebarGroupLabel>Desafios ({scopedChallenges.length})</SidebarGroupLabel>
                <SidebarGroupContent>
                  <SidebarMenu>
                    {scopedChallenges.map((challenge) => (
                      <SidebarMenuItem key={challenge.id}>
                        <SidebarMenuButton
                          isActive={challenge.id === activeChallenge.id}
                          onClick={() => setActiveId(challenge.id)}
                          tooltip={challenge.title}
                        >
                          <span className="font-mono text-xs text-neon-green">#{String(challenge.number).padStart(2, "0")}</span>
                          <span>{challenge.title}</span>
                        </SidebarMenuButton>
                      </SidebarMenuItem>
                    ))}
                  </SidebarMenu>
                </SidebarGroupContent>
              </SidebarGroup>
            </SidebarContent>
          </Sidebar>

          <SidebarInset className="bg-transparent">
            <div className="flex items-center gap-2 border-b border-nebula/70 px-3 py-2">
              <SidebarTrigger className="text-star-light hover:text-cyber-cyan" />
              <p className="font-exo2 text-sm font-semibold uppercase tracking-wide text-star-light">
                {scopeLabels[scope]} · #{String(activeChallenge.number).padStart(2, "0")}
              </p>
            </div>

            <div className="hidden h-[432px] md:block">
              <ResizablePanelGroup orientation="horizontal">
                <ResizablePanel defaultSize={44} minSize={32}>
                  <ScrollArea className="h-full">
                    <div className="space-y-4 p-4">
                      <h3 className="font-exo2 text-2xl font-semibold text-white-photon">{activeChallenge.title}</h3>
                      <p className="text-sm text-star-light">{activeChallenge.period}</p>

                      <div>
                        <p className="mb-1 flex items-center gap-2 text-sm font-semibold text-cyber-cyan">
                          <BookOpenText className="size-4" />
                          Contexto
                        </p>
                        <p className="text-sm leading-relaxed text-star-light">{activeChallenge.problem}</p>
                      </div>

                      <div>
                        <p className="mb-1 flex items-center gap-2 text-sm font-semibold text-electric-purple">
                          <Hammer className="size-4" />
                          Solucion
                        </p>
                        <p className="text-sm leading-relaxed text-star-light">{activeChallenge.solution}</p>
                      </div>

                      <div className="flex flex-wrap gap-2">
                        {activeChallenge.tags.map((tag) => (
                          <Badge key={tag} color="purple" className="normal-case tracking-normal">
                            {tag}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  </ScrollArea>
                </ResizablePanel>

                <ResizableHandle withHandle />

                <ResizablePanel defaultSize={56} minSize={30}>
                  <ScrollArea className="h-full">
                    <div className="space-y-4 p-4">
                      <p className="mb-1 flex items-center gap-2 text-sm font-semibold text-neon-green">
                        <Wrench className="size-4" />
                        Herramientas y evidencias
                      </p>

                      <ul className="space-y-2 rounded-lg border border-nebula/70 bg-dark-matter/45 p-3">
                        {activeChallenge.tools.map((tool) => (
                          <li key={tool} className="text-sm text-star-light">
                            • {tool}
                          </li>
                        ))}
                      </ul>

                      <ul className="space-y-3">
                        {activeChallenge.evidences.map((evidence) => (
                          <li key={evidence.label} className="rounded-lg border border-nebula/70 bg-dark-matter/45 p-3">
                            <p className="text-sm font-semibold text-white-photon">{evidence.label}</p>
                            <p className="mt-1 text-xs uppercase tracking-wide text-star-light">{evidence.type}</p>
                          </li>
                        ))}
                      </ul>

                      <div className="rounded-lg border border-nebula/70 bg-dark-matter/45 p-3">
                        <p className="flex items-center gap-2 text-sm font-semibold text-hot-pink">
                          <FolderOpenDot className="size-4" />
                          Reflexión operativa
                        </p>
                        <p className="mt-2 text-sm leading-relaxed text-star-light">{activeChallenge.teamReflection}</p>
                      </div>
                    </div>
                  </ScrollArea>
                </ResizablePanel>
              </ResizablePanelGroup>
            </div>

            <div className="space-y-4 p-4 md:hidden">
              <h3 className="font-exo2 text-xl font-semibold text-white-photon">{activeChallenge.title}</h3>
              <p className="text-xs uppercase tracking-wide text-neon-green">{activeChallenge.period}</p>
              <p className="text-sm text-star-light">{activeChallenge.problem}</p>
              <p className="text-sm text-star-light">{activeChallenge.solution}</p>

              <div className="flex flex-wrap gap-2">
                {activeChallenge.tags.map((tag) => (
                  <Badge key={tag} color="purple" className="normal-case tracking-normal">
                    {tag}
                  </Badge>
                ))}
              </div>

              <div className="rounded-lg border border-nebula/70 bg-dark-matter/45 p-3">
                <p className="mb-2 flex items-center gap-2 text-sm font-semibold text-neon-green">
                  <Wrench className="size-4" />
                  Herramientas
                </p>
                <ul className="space-y-1">
                  {activeChallenge.tools.slice(0, 6).map((tool) => (
                    <li key={tool} className="text-sm text-star-light">
                      • {tool}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="rounded-lg border border-nebula/70 bg-dark-matter/45 p-3">
                <p className="mb-2 flex items-center gap-2 text-sm font-semibold text-cyber-cyan">
                  <BookOpenText className="size-4" />
                  Evidencias ({activeChallenge.evidences.length})
                </p>
                <ul className="space-y-2">
                  {activeChallenge.evidences.slice(0, 4).map((evidence) => (
                    <li key={evidence.label} className="text-sm text-star-light">
                      • {evidence.label}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="rounded-lg border border-nebula/70 bg-dark-matter/45 p-3">
                <p className="mb-2 flex items-center gap-2 text-sm font-semibold text-hot-pink">
                  <FolderOpenDot className="size-4" />
                  Reflexión
                </p>
                <p className="text-sm leading-relaxed text-star-light">{activeChallenge.teamReflection}</p>
              </div>
            </div>
          </SidebarInset>
        </div>
      </SidebarProvider>
    </section>
  );
}
