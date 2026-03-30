"use client";

import { useState } from "react";
import { Pencil, Plus, Trash2 } from "lucide-react";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

type TeamConceptMapItem = {
  id: string;
  title: string;
  resourceUrl: string;
  description?: string;
};

interface Props {
  initialItems: TeamConceptMapItem[];
}

interface FormState {
  title: string;
  resourceUrl: string;
  description: string;
}

const EMPTY_FORM: FormState = {
  title: "",
  resourceUrl: "",
  description: "",
};

export default function TeamConceptMapCrudSection({ initialItems }: Props) {
  const [items, setItems] = useState<TeamConceptMapItem[]>(initialItems);
  const [form, setForm] = useState<FormState>(EMPTY_FORM);
  const [editingId, setEditingId] = useState<string | null>(null);

  const resetForm = () => {
    setForm(EMPTY_FORM);
    setEditingId(null);
  };

  const startEdit = (item: TeamConceptMapItem) => {
    setEditingId(item.id);
    setForm({
      title: item.title,
      resourceUrl: item.resourceUrl,
      description: item.description ?? "",
    });
  };

  const saveItem = () => {
    if (!form.title.trim() || !form.resourceUrl.trim()) {
      toast.error("Completa titulo y URL del mapa de equipo.");
      return;
    }

    if (editingId) {
      setItems((prev) =>
        prev.map((item) =>
          item.id === editingId
            ? {
                ...item,
                title: form.title.trim(),
                resourceUrl: form.resourceUrl.trim(),
                description: form.description.trim(),
              }
            : item
        )
      );
      toast.success("Mapa de equipo actualizado");
      resetForm();
      return;
    }

    const newItem: TeamConceptMapItem = {
      id: `mapa-equipo-${Date.now()}`,
      title: form.title.trim(),
      resourceUrl: form.resourceUrl.trim(),
      description: form.description.trim(),
    };

    setItems((prev) => [...prev, newItem]);
    toast.success("Mapa de equipo agregado");
    resetForm();
  };

  const removeItem = (id: string) => {
    const confirmed = window.confirm("Eliminar este mapa conceptual de equipo?");
    if (!confirmed) return;

    setItems((prev) => prev.filter((item) => item.id !== id));
    if (editingId === id) resetForm();
    toast.success("Mapa de equipo eliminado");
  };

  return (
    <div className="space-y-6">
      <article className="rounded-2xl border border-nebula bg-deep-space/70 p-5 md:p-6">
        <div className="mb-4 flex items-center justify-between gap-3">
          <h2 className="font-exo2 text-2xl font-semibold text-white-photon">
            {editingId ? "Editar mapa de equipo" : "Nuevo mapa de equipo"}
          </h2>
          {editingId ? (
            <Button variant="outline" className="border-nebula text-star-light" onClick={resetForm}>
              Cancelar
            </Button>
          ) : null}
        </div>

        <div className="grid grid-cols-1 gap-3 md:grid-cols-2">
          <Input
            placeholder="Titulo"
            value={form.title}
            onChange={(event) => setForm((prev) => ({ ...prev, title: event.target.value }))}
            className="border-nebula bg-dark-matter/50 text-white-photon"
          />
          <Input
            placeholder="URL del recurso"
            value={form.resourceUrl}
            onChange={(event) => setForm((prev) => ({ ...prev, resourceUrl: event.target.value }))}
            className="border-nebula bg-dark-matter/50 text-white-photon"
          />
        </div>

        <Input
          placeholder="Descripcion breve (opcional)"
          value={form.description}
          onChange={(event) => setForm((prev) => ({ ...prev, description: event.target.value }))}
          className="mt-3 border-nebula bg-dark-matter/50 text-white-photon"
        />

        <Button className="mt-4 bg-cyber-cyan text-void-black hover:bg-cyber-cyan/80" onClick={saveItem}>
          <Plus />
          {editingId ? "Guardar cambios" : "Agregar mapa"}
        </Button>
      </article>

      <div className="grid grid-cols-1 gap-4">
        {items.length === 0 ? (
          <p className="rounded-lg border border-nebula bg-dark-matter/45 p-4 text-star-light">No hay mapas de equipo cargados.</p>
        ) : (
          items.map((item) => (
            <article key={item.id} className="rounded-xl border border-nebula bg-dark-matter/45 p-4">
              <div className="flex items-start justify-between gap-3">
                <div>
                  <h3 className="font-exo2 text-lg font-semibold text-white-photon">{item.title}</h3>
                  <p className="mt-1 text-sm text-star-light">{item.description || "Mapa conceptual del equipo"}</p>
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
              <a href={item.resourceUrl} target="_blank" rel="noreferrer" className="mt-3 inline-flex text-sm font-semibold text-cyber-cyan">
                Ver mapa
              </a>
            </article>
          ))
        )}
      </div>
    </div>
  );
}
