"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { Folder, Home, Search, Sparkles } from "lucide-react";
import { toast } from "sonner";
import {
  Command,
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  CommandSeparator,
  CommandShortcut,
} from "@/components/ui/command";

const NAV_COMMANDS = [
  { label: "Ir a Inicio", href: "/", shortcut: "H", icon: Home },
  { label: "Ver Desafios", href: "/desafios", shortcut: "D", icon: Folder },
  { label: "Ver TPI", href: "/tpi", shortcut: "T", icon: Sparkles },
  { label: "Ir a Integrantes", href: "/#integrantes", shortcut: "I", icon: Search },
] as const;

export default function CommandPalette() {
  const router = useRouter();
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onKeydown = (event: KeyboardEvent) => {
      if (event.key.toLowerCase() === "k" && (event.metaKey || event.ctrlKey)) {
        event.preventDefault();
        setOpen((value) => !value);
      }
    };

    const onOpenRequest = () => setOpen(true);

    document.addEventListener("keydown", onKeydown);
    window.addEventListener("open-command-palette", onOpenRequest);

    return () => {
      document.removeEventListener("keydown", onKeydown);
      window.removeEventListener("open-command-palette", onOpenRequest);
    };
  }, []);

  const handleNavigate = (href: string) => {
    setOpen(false);
    router.push(href);
  };

  const handleCopyPath = async () => {
    try {
      await navigator.clipboard.writeText(window.location.href);
      toast.success("Enlace copiado");
      setOpen(false);
    } catch {
      toast.error("No se pudo copiar el enlace");
    }
  };

  return (
    <CommandDialog
      open={open}
      onOpenChange={setOpen}
      title="Comandos"
      description="Navega rapido por el portfolio"
      className="border border-nebula bg-deep-space text-white-photon"
    >
      <Command>
        <CommandInput placeholder="Buscar seccion o accion..." />
        <CommandList>
          <CommandEmpty>Sin resultados para esa busqueda.</CommandEmpty>

          <CommandGroup heading="Navegacion">
            {NAV_COMMANDS.map((command) => (
              <CommandItem key={command.href} onSelect={() => handleNavigate(command.href)}>
                <command.icon className="text-cyber-cyan" />
                <span>{command.label}</span>
                <CommandShortcut>{command.shortcut}</CommandShortcut>
              </CommandItem>
            ))}
          </CommandGroup>

          <CommandSeparator />

          <CommandGroup heading="Acciones">
            <CommandItem onSelect={handleCopyPath}>
              <Search className="text-cyber-cyan" />
              <span>Copiar enlace actual</span>
              <CommandShortcut>URL</CommandShortcut>
            </CommandItem>
          </CommandGroup>
        </CommandList>
      </Command>
    </CommandDialog>
  );
}
