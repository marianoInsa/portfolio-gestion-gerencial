"use client";

import { useMemo, useState } from "react";
import { Pencil, Plus, Trash2 } from "lucide-react";
import { toast } from "sonner";
import type { RPAEntry } from "@/types";
import { members } from "@/data/team";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

type RpaCrudItem = RPAEntry & { id: string };

interface Props {
  initialItems: RPAEntry[];
}

interface FormState {
  memberId: string;
  conceptMapUrl: string;
  description: string;
}

const EMPTY_FORM: FormState = {
  memberId: "",
  conceptMapUrl: "",
  description: "",
};

export default function IndividualConceptMapsCrudSection({ initialItems }: Props) {
  const [items, setItems] = useState<RpaCrudItem[]>(
    initialItems.map((item, index) => ({ ...item, id: `${item.memberId}-${index}` }))
  );
  const [form, setForm] = useState<FormState>(EMPTY_FORM);
  const [editingId, setEditingId] = useState<string | null>(null);

  const enrichedItems = useMemo(
    () =>
      items.map((item) => ({
        ...item,
        memberName: members.find((member) => member.id === item.memberId)?.fullName ?? item.memberId,
      })),
    [items]
  );

  const resetForm = () => {
    setForm(EMPTY_FORM);
    setEditingId(null);
  };

  const startEdit = (item: RpaCrudItem) => {
    setEditingId(item.id);
    setForm({
      memberId: item.memberId,
      conceptMapUrl: item.conceptMapUrl,
      description: item.description ?? "",
    });
  };

  const saveItem = () => {
    if (!form.memberId || !form.conceptMapUrl.trim()) {
      toast.error("Selecciona integrante e ingresa URL del mapa.");
      return;
    }

    if (editingId) {
      setItems((prev) =>
        prev.map((item) =>
          item.id === editingId
            ? {
                ...item,
                memberId: form.memberId,
                conceptMapUrl: form.conceptMapUrl.trim(),
                description: form.description.trim(),
              }
            : item
        )
      );
      toast.success("Mapa individual actualizado");
      resetForm();
      return;
    }

    const newItem: RpaCrudItem = {
      id: `${form.memberId}-${Date.now()}`,
      memberId: form.memberId,
      conceptMapUrl: form.conceptMapUrl.trim(),
      description: form.description.trim(),
      uploadedAt: new Date().toISOString(),
    };

    setItems((prev) => [...prev, newItem]);
    toast.success("Mapa individual agregado");
    resetForm();
  };

  const removeItem = (id: string) => {
    const target = items.find((item) => item.id === id);
    if (!target) return;

    const confirmed = window.confirm("Eliminar este mapa conceptual individual?");
    if (!confirmed) return;

    setItems((prev) => prev.filter((item) => item.id !== id));
    if (editingId === id) resetForm();
    toast.success("Mapa individual eliminado");
  };

  return (
    <div className="space-y-6">
      <article className="rounded-2xl border border-nebula bg-deep-space/70 p-5 md:p-6">
        <div className="mb-4 flex items-center justify-between gap-3">
          <h2 className="font-exo2 text-2xl font-semibold text-white-photon">
            {editingId ? "Editar mapa individual" : "Nuevo mapa individual"}
          </h2>
          {editingId ? (
            <Button variant="outline" className="border-nebula text-star-light" onClick={resetForm}>
              Cancelar
            </Button>
          ) : null}
        </div>

        <div className="grid grid-cols-1 gap-3 md:grid-cols-2">
          <Select value={form.memberId} onValueChange={(value) => setForm((prev) => ({ ...prev, memberId: value ?? "" }))}>
            <SelectTrigger className="w-full border-nebula bg-dark-matter/50 text-white-photon">
              <SelectValue placeholder="Seleccionar integrante" />
            </SelectTrigger>
            <SelectContent className="border-nebula bg-deep-space text-white-photon">
              {members.map((member) => (
                <SelectItem key={member.id} value={member.id}>
                  {member.fullName}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>

          <Input
            placeholder="URL del mapa conceptual"
            value={form.conceptMapUrl}
            onChange={(event) => setForm((prev) => ({ ...prev, conceptMapUrl: event.target.value }))}
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

      <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
        {enrichedItems.length === 0 ? (
          <p className="rounded-lg border border-nebula bg-dark-matter/45 p-4 text-star-light">No hay mapas individuales cargados.</p>
        ) : (
          enrichedItems.map((item) => (
            <article key={item.id} className="rounded-xl border border-nebula bg-dark-matter/45 p-4">
              <div className="flex items-start justify-between gap-3">
                <div>
                  <h3 className="font-exo2 text-lg font-semibold text-white-photon">{item.memberName}</h3>
                  <p className="mt-1 text-sm text-star-light">{item.description || "Mapa conceptual individual"}</p>
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
              <a href={item.conceptMapUrl} target="_blank" rel="noreferrer" className="mt-3 inline-flex text-sm font-semibold text-cyber-cyan">
                Ver mapa
              </a>
            </article>
          ))
        )}
      </div>
    </div>
  );
}
