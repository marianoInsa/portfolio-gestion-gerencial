import type { ReactNode } from 'react';
import CyberCard from './CyberCard';

interface EmptyStateProps {
  title: string;
  message: string;
  icon?: ReactNode;
}

export default function EmptyState({ title, message, icon }: EmptyStateProps) {
  return (
    <CyberCard glowColor="purple" className="border-dashed text-center">
      <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full border border-electric-purple/50 bg-electric-purple/10">
        {icon ?? <span className="font-mono text-lg text-electric-purple">001</span>}
      </div>
      <h3 className="font-exo2 text-2xl font-semibold text-white-photon">{title}</h3>
      <p className="mx-auto mt-2 max-w-2xl text-star-light">{message}</p>
      <p className="mt-5 text-xs uppercase tracking-[0.16em] text-star-light/80">Proximamente</p>
    </CyberCard>
  );
}
