import Link from 'next/link';
import type { Challenge } from '@/types';
import Badge from './Badge';
import CyberCard from './CyberCard';

interface ChallengePreviewCardProps {
  challenge: Challenge;
}

export default function ChallengePreviewCard({ challenge }: ChallengePreviewCardProps) {
  return (
    <CyberCard title={challenge.title} description={challenge.period} className="h-full" glowColor="magenta">
      <p className="mt-4 text-sm leading-relaxed text-star-light">
        {challenge.problem.length > 150 ? `${challenge.problem.slice(0, 150)}...` : challenge.problem}
      </p>

      <div className="mt-4 flex flex-wrap gap-2">
        {challenge.tags.map((tag) => (
          <Badge key={tag} color="cyan" className="normal-case tracking-normal">
            {tag}
          </Badge>
        ))}
      </div>

      <div className="mt-6 flex items-center justify-between">
        <span className="font-mono text-sm text-neon-green">#{String(challenge.number).padStart(2, '0')}</span>
        <Link
          href={`/desafios/${challenge.id}`}
          className="inline-flex min-h-11 items-center rounded-md px-2 text-sm font-semibold text-cyber-cyan transition-colors hover:text-white-photon"
        >
          Ver detalle
        </Link>
      </div>
    </CyberCard>
  );
}
