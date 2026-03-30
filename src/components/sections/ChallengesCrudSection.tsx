"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import { Pencil, Plus, Trash2 } from "lucide-react";
import type { Challenge } from "@/types";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

type ChallengeCrudItem = Challenge & {
  hasDetailPage: boolean;
};

interface ChallengeFormState {
  title: string;
  period: string;
  problem: string;
  solution: string;
  teamReflection: string;
  tags: string;
  tools: string;
}

interface ChallengesCrudSectionProps {
  initialChallenges: Challenge[];
}

const EMPTY_FORM: ChallengeFormState = {
  title: "",
  period: "",
  problem: "",
  solution: "",
  teamReflection: "",
  tags: "",
  tools: "",
};

function slugify(value: string): string {
  return value
    .toLowerCase()
    .replace(/[^a-z0-9\s-]/g, "")
    .trim()
    .replace(/\s+/g, "-")
    .replace(/-+/g, "-");
}

function splitCsv(value: string): string[] {
  return value
    .split(",")
    .map((item) => item.trim())
    .filter(Boolean);
}

export default function ChallengesCrudSection({ initialChallenges }: ChallengesCrudSectionProps) {
  const [items, setItems] = useState<ChallengeCrudItem[]>(
    initialChallenges.map((challenge) => ({ ...challenge, hasDetailPage: true }))
  );
  const [form, setForm] = useState<ChallengeFormState>(EMPTY_FORM);
  const [editingId, setEditingId] = useState<string | null>(null);

  const orderedItems = useMemo(() => [...items].sort((a, b) => a.number - b.number), [items]);

  const resetForm = () => {
    setForm(EMPTY_FORM);
    setEditingId(null);
  };

  const startEdit = (item: ChallengeCrudItem) => {
    setEditingId(item.id);
    setForm({
      title: item.title,
      period: item.period,
      problem: item.problem,
      solution: item.solution,
      teamReflection: item.teamReflection,
      tags: item.tags.join(", "),
      tools: item.tools.join(", "),
    });
  };

  const removeItem = (id: string) => {
    const target = items.find((item) => item.id === id);
    if (!target) return;

    const confirmed = window.confirm(`Eliminar desafio '${target.title}'?`);
    if (!confirmed) return;

    setItems((prev) => prev.filter((item) => item.id !== id));
    if (editingId === id) {
      resetForm();
    }
    toast.success("Desafio eliminado");
  };

  const saveItem = () => {
    if (!form.title.trim() || !form.period.trim() || !form.problem.trim() || !form.solution.trim()) {
      toast.error("Completa titulo, periodo, problema y solucion.");
      return;
    }

    const parsedTags = splitCsv(form.tags);
    const parsedTools = splitCsv(form.tools);

    if (editingId) {
      setItems((prev) =>
        prev.map((item) =>
          item.id === editingId
            ? {
                ...item,
                title: form.title.trim(),
                period: form.period.trim(),
                problem: form.problem.trim(),
                solution: form.solution.trim(),
                teamReflection: form.teamReflection.trim(),
                tags: parsedTags,
                tools: parsedTools,
              }
            : item
        )
      );
      toast.success("Desafio actualizado");
      resetForm();
      return;
    }

    const nextNumber = (items.reduce((max, item) => Math.max(max, item.number), 0) || 0) + 1;
    const slugBase = slugify(form.title) || `desafio-${nextNumber}`;
    const id = `desafio-${String(nextNumber).padStart(2, "0")}-${slugBase}`;

    const newItem: ChallengeCrudItem = {
      id,
      number: nextNumber,
      title: form.title.trim(),
      period: form.period.trim(),
      problem: form.problem.trim(),
      solution: form.solution.trim(),
      teamReflection: form.teamReflection.trim() || "",
      tags: parsedTags,
      tools: parsedTools,
      evidences: [],
      hasDetailPage: false,
    };

    setItems((prev) => [...prev, newItem]);
    toast.success("Desafio creado");
    resetForm();
  };

  return (
    <div className="space-y-6">
      <article className="rounded-2xl border border-nebula bg-deep-space/70 p-5 md:p-6">
        <div className="mb-4 flex items-center justify-between gap-3">
          <h2 className="font-exo2 text-2xl font-semibold text-white-photon">
            {editingId ? "Editar desafio" : "Nuevo desafio"}
          </h2>
          {editingId ? (
            <Button variant="outline" className="border-nebula text-star-light" onClick={resetForm}>
              Cancelar
            </Button>
          ) : null}
        </div>

        <div className="grid grid-cols-1 gap-3 md:grid-cols-2">
          <Input
            placeholder="Titulo del desafio"
            value={form.title}
            onChange={(event) => setForm((prev) => ({ ...prev, title: event.target.value }))}
            className="border-nebula bg-dark-matter/50 text-white-photon"
          />
          <Input
            placeholder="Periodo (ej: Junio 2026)"
            value={form.period}
            onChange={(event) => setForm((prev) => ({ ...prev, period: event.target.value }))}
            className="border-nebula bg-dark-matter/50 text-white-photon"
          />
          <Input
            placeholder="Tags separados por coma"
            value={form.tags}
            onChange={(event) => setForm((prev) => ({ ...prev, tags: event.target.value }))}
            className="border-nebula bg-dark-matter/50 text-white-photon"
          />
          <Input
            placeholder="Herramientas separadas por coma"
            value={form.tools}
            onChange={(event) => setForm((prev) => ({ ...prev, tools: event.target.value }))}
            className="border-nebula bg-dark-matter/50 text-white-photon"
          />
        </div>

        <Textarea
          placeholder="Problema abordado"
          value={form.problem}
          onChange={(event) => setForm((prev) => ({ ...prev, problem: event.target.value }))}
          className="mt-3 min-h-24 border-nebula bg-dark-matter/50 text-white-photon"
        />
        <Textarea
          placeholder="Solucion propuesta"
          value={form.solution}
          onChange={(event) => setForm((prev) => ({ ...prev, solution: event.target.value }))}
          className="mt-3 min-h-24 border-nebula bg-dark-matter/50 text-white-photon"
        />
        <Textarea
          placeholder="Reflexion del equipo (opcional)"
          value={form.teamReflection}
          onChange={(event) => setForm((prev) => ({ ...prev, teamReflection: event.target.value }))}
          className="mt-3 min-h-20 border-nebula bg-dark-matter/50 text-white-photon"
        />

        <Button className="mt-4 bg-cyber-cyan text-void-black hover:bg-cyber-cyan/80" onClick={saveItem}>
          <Plus />
          {editingId ? "Guardar cambios" : "Agregar desafio"}
        </Button>
      </article>

      <div className="grid grid-cols-1 gap-4 lg:grid-cols-2">
        {orderedItems.map((item) => (
          <article key={item.id} className="rounded-xl border border-nebula bg-dark-matter/45 p-4">
            <div className="flex items-start justify-between gap-3">
              <div>
                <p className="font-mono text-xs text-neon-green">DESAFIO #{String(item.number).padStart(2, "0")}</p>
                <h3 className="mt-1 font-exo2 text-xl font-semibold text-white-photon">{item.title}</h3>
                <p className="mt-1 text-sm text-star-light">{item.period}</p>
              </div>
              <div className="flex gap-2">
                <Button variant="outline" size="icon-sm" className="border-nebula" onClick={() => startEdit(item)}>
                  <Pencil />
                </Button>
                <Button variant="outline" size="icon-sm" className="border-hot-pink/60 text-hot-pink" onClick={() => removeItem(item.id)}>
                  <Trash2 />
                </Button>
              </div>
            </div>

            <p className="mt-3 text-sm text-star-light">{item.problem}</p>

            <div className="mt-3 flex flex-wrap gap-2">
              {item.tags.map((tag) => (
                <span key={tag} className="rounded-md border border-nebula px-2 py-1 text-xs text-star-light">
                  {tag}
                </span>
              ))}
            </div>

            {item.hasDetailPage ? (
              <Link href={`/desafios/${item.id}`} className="mt-3 inline-flex text-sm font-semibold text-cyber-cyan">
                Ver detalle
              </Link>
            ) : (
              <p className="mt-3 text-xs text-star-light">Desafio local (sin pagina de detalle estatica).</p>
            )}
          </article>
        ))}
      </div>
    </div>
  );
}
