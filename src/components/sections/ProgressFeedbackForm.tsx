"use client";

import { useMemo, useState } from "react";
import { UserRound, Wrench } from "lucide-react";
import { toast } from "sonner";
import { challenges } from "@/data/challenges";
import { Button } from "@/components/ui/button";
import { Field, FieldDescription, FieldError, FieldGroup, FieldLabel } from "@/components/ui/field";
import { InputGroup, InputGroupAddon, InputGroupInput } from "@/components/ui/input-group";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group";

type UpdateType = "avance" | "bloqueo" | "decision";
type Priority = "baja" | "media" | "alta";

interface FormState {
  owner: string;
  challengeId: string;
  summary: string;
}

interface FormErrors {
  owner?: string;
  challengeId?: string;
  summary?: string;
}

const UPDATE_OPTIONS: UpdateType[] = ["avance", "bloqueo", "decision"];
const PRIORITY_OPTIONS: Priority[] = ["baja", "media", "alta"];

const EMPTY_FORM: FormState = {
  owner: "",
  challengeId: "",
  summary: "",
};

export default function ProgressFeedbackForm() {
  const [form, setForm] = useState<FormState>(EMPTY_FORM);
  const [updateType, setUpdateType] = useState<UpdateType[]>(["avance"]);
  const [priority, setPriority] = useState<Priority[]>(["media"]);
  const [errors, setErrors] = useState<FormErrors>({});

  const selectedChallenge = useMemo(
    () => challenges.find((challenge) => challenge.id === form.challengeId),
    [form.challengeId]
  );

  const setField = <K extends keyof FormState>(key: K, value: FormState[K]) => {
    setForm((prev) => ({ ...prev, [key]: value }));
    setErrors((prev) => ({ ...prev, [key]: undefined }));
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const nextErrors: FormErrors = {};
    if (!form.owner.trim()) nextErrors.owner = "Indica responsable.";
    if (!form.challengeId) nextErrors.challengeId = "Selecciona un desafio.";
    if (form.summary.trim().length < 12) nextErrors.summary = "Describe el avance con al menos 12 caracteres.";

    if (Object.keys(nextErrors).length > 0) {
      setErrors(nextErrors);
      toast.error("Revisa los campos marcados antes de guardar.");
      return;
    }

    toast.success("Registro operativo guardado (modo local).");
    setForm(EMPTY_FORM);
    setUpdateType(["avance"]);
    setPriority(["media"]);
    setErrors({});
  };

  return (
    <section className="rounded-2xl border border-nebula bg-deep-space/70 p-5 md:p-6">
      <h2 className="font-exo2 text-2xl font-semibold text-white-photon">Registro Interno de Avances</h2>
      <p className="mt-2 text-sm text-star-light">
        Formulario reusable para capturar avances, bloqueos y decisiones del equipo en cada iteracion.
      </p>

      <form onSubmit={handleSubmit} className="mt-5">
        <FieldGroup>
          <Field>
            <FieldLabel htmlFor="owner">Responsable</FieldLabel>
            <InputGroup>
              <InputGroupInput
                id="owner"
                value={form.owner}
                onChange={(event) => setField("owner", event.target.value)}
                placeholder="Nombre del integrante"
                aria-invalid={Boolean(errors.owner)}
              />
              <InputGroupAddon align="inline-end">
                <UserRound className="size-4" />
              </InputGroupAddon>
            </InputGroup>
            <FieldDescription>Quien registra este update operativo.</FieldDescription>
            <FieldError>{errors.owner}</FieldError>
          </Field>

          <Field>
            <FieldLabel htmlFor="challenge">Desafio objetivo</FieldLabel>
            <Select value={form.challengeId} onValueChange={(value) => setField("challengeId", value ?? "")}>
              <SelectTrigger id="challenge" aria-invalid={Boolean(errors.challengeId)} className="w-full">
                <SelectValue placeholder="Seleccionar desafio" />
              </SelectTrigger>
              <SelectContent className="border-nebula bg-deep-space text-white-photon">
                {challenges.map((challenge) => (
                  <SelectItem key={challenge.id} value={challenge.id}>
                    #{String(challenge.number).padStart(2, "0")} · {challenge.title}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
            <FieldDescription>
              {selectedChallenge
                ? `Periodo activo: ${selectedChallenge.period}`
                : "Selecciona el desafio sobre el cual reportas."}
            </FieldDescription>
            <FieldError>{errors.challengeId}</FieldError>
          </Field>

          <Field>
            <FieldLabel>Tipo de update</FieldLabel>
            <ToggleGroup
              value={updateType}
              onValueChange={(value) => {
                const safe = (value ?? []).filter((item): item is UpdateType => UPDATE_OPTIONS.includes(item as UpdateType));
                setUpdateType(safe.length > 0 ? [safe[0]] : ["avance"]);
              }}
              className="w-full"
            >
              <ToggleGroupItem value="avance" className="flex-1 border-nebula bg-dark-matter/50 text-star-light data-pressed:text-cyber-cyan">
                Avance
              </ToggleGroupItem>
              <ToggleGroupItem value="bloqueo" className="flex-1 border-nebula bg-dark-matter/50 text-star-light data-pressed:text-cyber-cyan">
                Bloqueo
              </ToggleGroupItem>
              <ToggleGroupItem value="decision" className="flex-1 border-nebula bg-dark-matter/50 text-star-light data-pressed:text-cyber-cyan">
                Decision
              </ToggleGroupItem>
            </ToggleGroup>
          </Field>

          <Field>
            <FieldLabel>Prioridad</FieldLabel>
            <ToggleGroup
              value={priority}
              onValueChange={(value) => {
                const safe = (value ?? []).filter((item): item is Priority => PRIORITY_OPTIONS.includes(item as Priority));
                setPriority(safe.length > 0 ? [safe[0]] : ["media"]);
              }}
              className="w-full"
            >
              <ToggleGroupItem value="baja" className="flex-1 border-nebula bg-dark-matter/50 text-star-light data-pressed:text-cyber-cyan">
                Baja
              </ToggleGroupItem>
              <ToggleGroupItem value="media" className="flex-1 border-nebula bg-dark-matter/50 text-star-light data-pressed:text-cyber-cyan">
                Media
              </ToggleGroupItem>
              <ToggleGroupItem value="alta" className="flex-1 border-nebula bg-dark-matter/50 text-star-light data-pressed:text-cyber-cyan">
                Alta
              </ToggleGroupItem>
            </ToggleGroup>
          </Field>

          <Field>
            <FieldLabel htmlFor="summary">Resumen</FieldLabel>
            <InputGroup>
              <Textarea
                id="summary"
                value={form.summary}
                onChange={(event) => setField("summary", event.target.value)}
                placeholder="Describe el avance, bloqueo o decision y el siguiente paso"
                className="min-h-24"
                aria-invalid={Boolean(errors.summary)}
              />
              <InputGroupAddon align="block-end">
                <Wrench className="size-4" />
                <span className="text-xs text-star-light">{form.summary.length} caracteres</span>
              </InputGroupAddon>
            </InputGroup>
            <FieldError>{errors.summary}</FieldError>
          </Field>
        </FieldGroup>

        <div className="mt-5 flex flex-wrap gap-3">
          <Button type="submit" className="bg-cyber-cyan text-void-black hover:bg-cyber-cyan/80">
            Guardar registro
          </Button>
          <Button type="button" variant="outline" className="border-nebula text-star-light" onClick={() => setForm(EMPTY_FORM)}>
            Limpiar
          </Button>
        </div>
      </form>
    </section>
  );
}
