'use client';

import Image from 'next/image';
import { useState } from 'react';
import type { Member } from '@/types';
import Badge from './Badge';
import CyberCard from './CyberCard';

interface AvatarCardProps {
  member: Member;
}

function initials(fullName: string): string {
  const parts = fullName.split(',').map((part) => part.trim());
  if (parts.length >= 2) {
    return `${parts[0][0] ?? ''}${parts[1][0] ?? ''}`.toUpperCase();
  }
  return fullName
    .split(' ')
    .slice(0, 2)
    .map((part) => part[0] ?? '')
    .join('')
    .toUpperCase();
}

export default function AvatarCard({ member }: AvatarCardProps) {
  const [hasImageError, setHasImageError] = useState(false);
  const [hasCartoonError, setHasCartoonError] = useState(false);

  return (
    <CyberCard glowColor="cyan" className="group h-full">
      <div className="flex flex-col items-center gap-4 text-center">
        <div className="relative h-24 w-24 overflow-hidden rounded-full border-2 border-electric-purple transition-colors duration-300 group-hover:border-cyber-cyan">
          {hasImageError ? (
            <div className="absolute inset-0 flex items-center justify-center bg-dark-matter font-orbitron text-xl text-cyber-cyan">
              {initials(member.fullName)}
            </div>
          ) : (
            <Image
              src={member.avatarPath}
              alt={`Avatar de ${member.firstName}`}
              fill
              sizes="96px"
              loading="lazy"
              className="object-cover"
              onError={() => setHasImageError(true)}
            />
          )}
        </div>

        <h3 className="font-exo2 text-xl font-bold text-white-photon">{member.fullName}</h3>
        <p className="text-sm leading-relaxed text-star-light">{member.bio}</p>

        <div className="flex flex-wrap justify-center gap-2">
          {member.roles.map((role) => (
            <Badge key={role} color="purple">
              {role}
            </Badge>
          ))}
        </div>

        <div className="w-full space-y-3 text-left">
          <div>
            <p className="font-mono text-xs uppercase tracking-wide text-cyber-cyan">Fortalezas</p>
            <div className="mt-2 flex flex-wrap gap-2">
              {member.strengths.map((strength) => (
                <Badge key={strength} color="green" className="normal-case tracking-normal">
                  {strength}
                </Badge>
              ))}
            </div>
          </div>

          <div>
            <p className="font-mono text-xs uppercase tracking-wide text-neon-magenta">Intereses</p>
            <div className="mt-2 flex flex-wrap gap-2">
              {member.interests.map((interest) => (
                <Badge key={interest} color="magenta" className="normal-case tracking-normal">
                  {interest}
                </Badge>
              ))}
            </div>
          </div>

          <div data-testid={`leader-section-${member.id}`}>
            <p className="font-mono text-xs uppercase tracking-wide text-electric-purple">Como lider...</p>
            {/* <p className="mt-1 text-sm text-star-light">{member.leaderType}</p> */}

            <div className="relative mx-auto mt-3 aspect-square w-full max-w-[420px] overflow-hidden rounded-xl border border-electric-purple/40 bg-dark-matter/70">
              {hasCartoonError ? (
                <div className="absolute inset-0 flex items-center justify-center bg-dark-matter font-orbitron text-xl text-cyber-cyan">
                  {initials(member.fullName)}
                </div>
              ) : (
                <Image
                  src={member.cartoonPath}
                  alt={`Caricatura de ${member.firstName}`}
                  fill
                  sizes="(max-width: 768px) 70vw, 420px"
                  loading="lazy"
                  className="object-cover object-center"
                  onError={() => setHasCartoonError(true)}
                />
              )}
            </div>

            <div className="mt-3 flex flex-wrap gap-2">
              {member.leaderLabels.slice(0, 3).map((label) => (
                <Badge key={label} color="cyan" className="normal-case tracking-normal">
                  {label}
                </Badge>
              ))}
            </div>

            <p className="mt-3 text-sm leading-relaxed text-star-light">{member.leaderDescription}</p>
          </div>
        </div>
      </div>
    </CyberCard>
  );
}
