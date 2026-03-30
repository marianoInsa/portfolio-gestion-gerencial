"use client";

import { useState } from "react";
import { Check, Link2 } from "lucide-react";
import { toast } from "sonner";
import { Tooltip, TooltipContent, TooltipTrigger } from "@/components/ui/tooltip";

interface CopyChallengeLinkButtonProps {
  slug: string;
}

export default function CopyChallengeLinkButton({ slug }: CopyChallengeLinkButtonProps) {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      const url = `${window.location.origin}/desafios/${slug}`;
      await navigator.clipboard.writeText(url);
      setCopied(true);
      toast.success("Enlace del desafio copiado");
      setTimeout(() => setCopied(false), 1800);
    } catch {
      toast.error("No se pudo copiar el enlace");
    }
  };

  return (
    <Tooltip>
      <TooltipTrigger
        className="inline-flex items-center gap-2 rounded-lg border border-nebula bg-dark-matter/50 px-3 py-2 text-sm font-medium text-star-light hover:bg-nebula/40 hover:text-cyber-cyan"
        onClick={handleCopy}
      >
          {copied ? <Check /> : <Link2 />}
          {copied ? "Copiado" : "Copiar enlace"}
      </TooltipTrigger>
      <TooltipContent className="border border-nebula bg-deep-space text-white-photon">
        Compartir este desafio
      </TooltipContent>
    </Tooltip>
  );
}
