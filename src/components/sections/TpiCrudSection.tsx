"use client";

import { useMemo, useState } from "react";
import { Pencil, Plus, Trash2 } from "lucide-react";
import { toast } from "sonner";
import type { TPIProject } from "@/types";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

type TpiItem = TPIProject & { id: string };

interface TpiCrudSectionProps {
  initialItems: TpiItem[];
}

interface TpiFormState {
  title: string;
  period: string;
  description: string;
  reflections: string;
}

const EMPTY_FORM: TpiFormState = {
  title: "",
  period: "",
  description: "",
  reflections: "",
};

export default function TpiCrudSection({ initialItems }: TpiCrudSectionProps) {
  const [items, setItems] = useState<TpiItem[]>(initialItems);
  const [form, setForm] = useState<TpiFormState>(EMPTY_FORM);
  const [editingId, setEditingId] = useState<string | null>(null);

  const orderedItems = useMemo(() => [...items], [items]);

  const resetForm = () => {
    setForm(EMPTY_FORM);
    setEditingId(null);
  };

  const startEdit = (item: TpiItem) => {
    setEditingId(item.id);
    setForm({
      title: item.title,
      period: item.period,
      description: item.description,
      reflections: item.reflections,
    });
  };

  const removeItem = (id: string) => {
    const target = items.find((item) => item.id === id);
    if (!target) return;

    const confirmed = window.confirm(`Eliminar TPI '${target.title}'?`);
    if (!confirmed) return;

    setItems((prev) => prev.filter((item) => item.id !== id));
    if (editingId === id) {
      resetForm();
    }
    toast.success("TPI eliminado");
  };

  const saveItem = () => {
    if (!form.title.trim() || !form.period.trim() || !form.description.trim() || !form.reflections.trim()) {
      toast.error("Completa titulo, periodo, descripcion y reflexion.");
      return;
    }

    if (editingId) {
      setItems((prev) =>
        prev.map((item) =>
          item.id === editingId
            ? {
                ...item,
                title: form.title.trim(),
                period: form.period.trim(),
                description: form.description.trim(),
                reflections: form.reflections.trim(),
              }
            : item
        )
      );
      toast.success("TPI actualizado");
      resetForm();
      return;
    }

    const id = `tpi-${Date.now()}`;
    const newItem: TpiItem = {
      id,
      title: form.title.trim(),
      period: form.period.trim(),
      description: form.description.trim(),
      reflections: form.reflections.trim(),
      coverImage: undefined,
      evidences: [],
      isPublished: true,
    };

    setItems((prev) => [...prev, newItem]);
    toast.success("TPI creado");
    resetForm();
  };

  return (
    <div className="space-y-6">
      <article className="rounded-2xl border border-nebula bg-deep-space/70 p-5 md:p-6">
        <div className="mb-4 flex items-center justify-between gap-3">
          <h2 className="font-exo2 text-2xl font-semibold text-white-photon">
            {editingId ? "Editar TPI" : "Nuevo TPI"}
          </h2>
          {editingId ? (
            <Button variant="outline" className="border-nebula text-star-light" onClick={resetForm}>
              Cancelar
            </Button>
          ) : null}
        </div>

        <div className="grid grid-cols-1 gap-3 md:grid-cols-2">
          <Input
            placeholder="Titulo del TPI"
            value={form.title}
            onChange={(event) => setForm((prev) => ({ ...prev, title: event.target.value }))}
            className="border-nebula bg-dark-matter/50 text-white-photon"
          />
          <Input
            placeholder="Periodo"
            value={form.period}
            onChange={(event) => setForm((prev) => ({ ...prev, period: event.target.value }))}
            className="border-nebula bg-dark-matter/50 text-white-photon"
          />
        </div>

        <Textarea
          placeholder="Descripcion"
          value={form.description}
          onChange={(event) => setForm((prev) => ({ ...prev, description: event.target.value }))}
          className="mt-3 min-h-24 border-nebula bg-dark-matter/50 text-white-photon"
        />
        <Textarea
          placeholder="Reflexion final"
          value={form.reflections}
          onChange={(event) => setForm((prev) => ({ ...prev, reflections: event.target.value }))}
          className="mt-3 min-h-24 border-nebula bg-dark-matter/50 text-white-photon"
        />

        <Button className="mt-4 bg-cyber-cyan text-void-black hover:bg-cyber-cyan/80" onClick={saveItem}>
          <Plus />
          {editingId ? "Guardar cambios" : "Agregar TPI"}
        </Button>
      </article>

      <div className="grid grid-cols-1 gap-4">
        {orderedItems.length === 0 ? (
          <p className="rounded-lg border border-nebula bg-dark-matter/45 p-4 text-star-light">No hay registros TPI cargados.</p>
        ) : (
          orderedItems.map((item) => (
            <article key={item.id} className="rounded-xl border border-nebula bg-dark-matter/45 p-4">
              <div className="flex items-start justify-between gap-3">
                <div>
                  <h3 className="font-exo2 text-xl font-semibold text-white-photon">{item.title}</h3>
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

              <p className="mt-3 text-sm text-star-light">{item.description}</p>
              <p className="mt-3 text-sm text-star-light">{item.reflections}</p>
            </article>
          ))
        )}
      </div>
    </div>
  );
}
