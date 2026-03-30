"use client";

import { useMemo, useState } from "react";
import { useRouter } from "next/navigation";
import { ArrowUpDown, ChevronsUpDown, CircleHelp, Filter } from "lucide-react";
import type { Challenge } from "@/types";
import ChallengePreviewCard from "@/components/ui/ChallengePreviewCard";
import EmptyState from "@/components/ui/EmptyState";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Button } from "@/components/ui/button";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Input } from "@/components/ui/input";
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group";
import { Popover, PopoverContent, PopoverHeader, PopoverTitle, PopoverTrigger } from "@/components/ui/popover";

interface ChallengesExplorerProps {
  challenges: Challenge[];
}

type SortMode = "number-asc" | "number-desc" | "title-asc";
type ScopeMode = "all" | "recent" | "older";

const isScopeMode = (value: string): value is ScopeMode => {
  return value === "all" || value === "recent" || value === "older";
};

const PAGE_SIZE = 3;

export default function ChallengesExplorer({ challenges }: ChallengesExplorerProps) {
  const router = useRouter();
  const [query, setQuery] = useState("");
  const [selectedTag, setSelectedTag] = useState("all");
  const [scope, setScope] = useState<ScopeMode[]>(["all"]);
  const [sortMode, setSortMode] = useState<SortMode>("number-asc");
  const [page, setPage] = useState(1);
  const [jumpOpen, setJumpOpen] = useState(false);
  const [jumpValue, setJumpValue] = useState("");

  const tagOptions = useMemo(() => {
    const uniqueTags = Array.from(new Set(challenges.flatMap((challenge) => challenge.tags)));
    return ["all", ...uniqueTags.sort((a, b) => a.localeCompare(b))];
  }, [challenges]);

  const jumpOptions = useMemo(() => {
    return [...challenges]
      .sort((a, b) => a.number - b.number)
      .map((challenge) => ({
        slug: challenge.id,
        label: `Desafio ${challenge.number}: ${challenge.title}`,
      }));
  }, [challenges]);

  const filteredChallenges = useMemo(() => {
    let result = [...challenges];
    const activeScope = scope[0] ?? "all";

    if (query.trim()) {
      const normalizedQuery = query.toLowerCase();
      result = result.filter((challenge) => {
        const plainText = [
          challenge.title,
          challenge.problem,
          challenge.solution,
          challenge.teamReflection,
          challenge.period,
          ...challenge.tags,
          ...challenge.tools,
        ]
          .join(" ")
          .toLowerCase();

        return plainText.includes(normalizedQuery);
      });
    }

    if (selectedTag !== "all") {
      result = result.filter((challenge) => challenge.tags.includes(selectedTag));
    }

    if (activeScope === "recent") {
      result = result.filter((challenge) => challenge.number >= 2);
    }

    if (activeScope === "older") {
      result = result.filter((challenge) => challenge.number <= 2);
    }

    result.sort((a, b) => {
      if (sortMode === "number-asc") return a.number - b.number;
      if (sortMode === "number-desc") return b.number - a.number;
      return a.title.localeCompare(b.title);
    });

    return result;
  }, [challenges, query, selectedTag, scope, sortMode]);

  const totalPages = Math.max(1, Math.ceil(filteredChallenges.length / PAGE_SIZE));
  const currentPage = Math.min(page, totalPages);
  const pageStart = (currentPage - 1) * PAGE_SIZE;
  const pagedChallenges = filteredChallenges.slice(pageStart, pageStart + PAGE_SIZE);

  if (challenges.length === 0) {
    return (
      <EmptyState
        title="Sin desafios publicados"
        message="Todavia no hay desafios cargados. Vuelve pronto para ver nuevos avances."
      />
    );
  }

  return (
    <div className="space-y-6">
      <div className="rounded-2xl border border-nebula bg-deep-space/70 p-4 md:p-5">
        <div className="grid grid-cols-1 gap-3 lg:grid-cols-[1fr_auto_auto_auto]">
          <Input
            value={query}
            onChange={(event) => {
              setQuery(event.target.value);
              setPage(1);
            }}
            placeholder="Buscar por titulo, problema, tags o herramientas"
            className="w-full border-nebula bg-dark-matter/50 text-white-photon placeholder:text-star-light"
          />

          <Select
            value={selectedTag}
            onValueChange={(value) => {
              setSelectedTag(value ?? "all");
              setPage(1);
            }}
          >
            <SelectTrigger className="w-full border-nebula bg-dark-matter/50 text-white-photon lg:w-[220px]">
              <SelectValue placeholder="Filtrar por tag" />
            </SelectTrigger>
            <SelectContent className="border-nebula bg-deep-space text-white-photon">
              {tagOptions.map((tag) => (
                <SelectItem key={tag} value={tag}>
                  {tag === "all" ? "Todas las etiquetas" : tag}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>

          <ToggleGroup
            value={scope}
            onValueChange={(value) => {
              const safeValue = (value ?? []).filter(isScopeMode);
              setScope(safeValue);
              setPage(1);
            }}
            className="w-full"
          >
            <ToggleGroupItem value="all" className="border-nebula bg-dark-matter/50 text-star-light data-pressed:text-cyber-cyan">
              Todos
            </ToggleGroupItem>
            <ToggleGroupItem value="recent" className="border-nebula bg-dark-matter/50 text-star-light data-pressed:text-cyber-cyan">
              Recientes
            </ToggleGroupItem>
            <ToggleGroupItem value="older" className="border-nebula bg-dark-matter/50 text-star-light data-pressed:text-cyber-cyan">
              Iniciales
            </ToggleGroupItem>
          </ToggleGroup>

          <DropdownMenu>
            <DropdownMenuTrigger className="inline-flex w-full items-center gap-2 rounded-lg border border-nebula bg-dark-matter/50 px-3 py-2 text-sm text-star-light hover:text-cyber-cyan lg:w-auto">
              <ArrowUpDown />
              Ordenar
            </DropdownMenuTrigger>
            <DropdownMenuContent className="border-nebula bg-deep-space text-white-photon" align="end">
              <DropdownMenuGroup>
                <DropdownMenuLabel>Orden</DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuItem
                  onClick={() => {
                    setSortMode("number-asc");
                    setPage(1);
                  }}
                >
                  Numero ascendente
                </DropdownMenuItem>
                <DropdownMenuItem
                  onClick={() => {
                    setSortMode("number-desc");
                    setPage(1);
                  }}
                >
                  Numero descendente
                </DropdownMenuItem>
                <DropdownMenuItem
                  onClick={() => {
                    setSortMode("title-asc");
                    setPage(1);
                  }}
                >
                  Titulo A-Z
                </DropdownMenuItem>
              </DropdownMenuGroup>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>

        <div className="mt-3 flex flex-col gap-3 border-t border-nebula/60 pt-3 sm:flex-row sm:items-center sm:justify-between">
          <div className="space-y-1">
            <p className="text-xs uppercase tracking-wider text-star-light">Exploracion avanzada</p>
            <Popover open={jumpOpen} onOpenChange={setJumpOpen}>
              <PopoverTrigger className="inline-flex w-full items-center justify-between gap-2 rounded-lg border border-nebula bg-dark-matter/50 px-3 py-2 text-left text-sm text-white-photon hover:text-cyber-cyan sm:w-[360px]">
                <span>
                  {jumpValue
                    ? (jumpOptions.find((option) => option.slug === jumpValue)?.label ?? "Ir a un desafio")
                    : "Ir a un desafio"}
                </span>
                <ChevronsUpDown className="size-4 opacity-70" />
              </PopoverTrigger>
              <PopoverContent className="w-[360px] border border-nebula bg-deep-space p-0 text-white-photon" align="start">
                <Command className="bg-transparent text-white-photon">
                  <CommandInput placeholder="Buscar desafio por numero o titulo" />
                  <CommandList>
                    <CommandEmpty>No hay resultados para ese desafio.</CommandEmpty>
                    <CommandGroup heading="Desafios disponibles">
                      {jumpOptions.map((option) => (
                        <CommandItem
                          key={option.slug}
                          value={`${option.label} ${option.slug}`}
                          onSelect={() => {
                            setJumpValue(option.slug);
                            setJumpOpen(false);
                            router.push(`/desafios/${option.slug}`);
                          }}
                        >
                          {option.label}
                        </CommandItem>
                      ))}
                    </CommandGroup>
                  </CommandList>
                </Command>
              </PopoverContent>
            </Popover>
          </div>

          <Popover>
            <PopoverTrigger render={<Button variant="outline" />} className="inline-flex items-center gap-2 border-nebula bg-dark-matter/50 text-star-light hover:text-cyber-cyan">
              <CircleHelp className="size-4" />
              Como usar filtros
            </PopoverTrigger>
            <PopoverContent className="border border-nebula bg-deep-space text-white-photon" align="end">
              <PopoverHeader>
                <PopoverTitle>Guia rapida</PopoverTitle>
              </PopoverHeader>
              <p className="text-sm text-star-light">
                Usa busqueda libre para contenido completo, filtra por etiqueta y periodo, ordena la lista y salta directo a un desafio con el selector.
              </p>
            </PopoverContent>
          </Popover>
        </div>
      </div>

      {filteredChallenges.length === 0 ? (
        <Alert className="border-hot-pink/60 bg-deep-space/70 text-white-photon">
          <Filter className="text-hot-pink" />
          <AlertTitle>Sin coincidencias</AlertTitle>
          <AlertDescription>
            No encontramos desafios con los filtros actuales. Prueba limpiar busqueda o cambiar la etiqueta.
          </AlertDescription>
        </Alert>
      ) : (
        <>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {pagedChallenges.map((challenge) => (
              <ChallengePreviewCard key={challenge.id} challenge={challenge} />
            ))}
          </div>

          {totalPages > 1 ? (
            <Pagination>
              <PaginationContent>
                <PaginationItem>
                  <PaginationPrevious
                    href="#"
                    text="Anterior"
                    onClick={(event) => {
                      event.preventDefault();
                      setPage((previous) => Math.max(1, previous - 1));
                    }}
                  />
                </PaginationItem>

                {Array.from({ length: totalPages }, (_, index) => index + 1).map((pageNumber) => (
                  <PaginationItem key={pageNumber}>
                    <PaginationLink
                      href="#"
                      isActive={pageNumber === currentPage}
                      onClick={(event) => {
                        event.preventDefault();
                        setPage(pageNumber);
                      }}
                    >
                      {pageNumber}
                    </PaginationLink>
                  </PaginationItem>
                ))}

                <PaginationItem>
                  <PaginationNext
                    href="#"
                    text="Siguiente"
                    onClick={(event) => {
                      event.preventDefault();
                      setPage((previous) => Math.min(totalPages, previous + 1));
                    }}
                  />
                </PaginationItem>
              </PaginationContent>
            </Pagination>
          ) : null}
        </>
      )}
    </div>
  );
}
