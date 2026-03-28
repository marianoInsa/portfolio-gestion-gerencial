'use client';

import Image from 'next/image';
import type { TeamMember } from '@/lib/types';

interface TeamCardProps {
  member: TeamMember;
}

export default function TeamCard({ member }: TeamCardProps) {
  return (
    <article
      className="group relative rounded-2xl border overflow-hidden cursor-default transition-all duration-300"
      style={{
        backgroundColor: 'var(--color-surface)',
        borderColor: 'var(--color-border)',
        boxShadow: '0 1px 3px rgba(0,0,0,0.06)',
      }}
      aria-label={`Perfil de ${member.fullName}`}
    >
      {/* Card inner */}
      <div className="p-6 flex flex-col gap-4">
        {/* Avatar + Name row */}
        <div className="flex items-center gap-4">
          <div
            className="relative w-16 h-16 rounded-xl overflow-hidden flex-shrink-0 transition-transform duration-300 group-hover:scale-105"
            style={{ backgroundColor: '#EEF2FF' }}
          >
            <Image
              src={member.avatarPath}
              alt={`Foto de perfil de ${member.fullName}`}
              fill
              sizes="64px"
              className="object-cover"
              onError={(e) => {
                const target = e.target as HTMLImageElement;
                target.style.display = 'none';
                const parent = target.parentElement;
                if (parent) {
                  parent.innerHTML = `<div style="width:100%;height:100%;display:flex;align-items:center;justify-content:center;background:linear-gradient(135deg,#EEF2FF,#C7D2FE);font-family:var(--font-heading);font-weight:700;font-size:1.5rem;color:#3730A3;">${member.firstName.charAt(0)}${member.lastName.charAt(0)}</div>`;
                }
              }}
            />
          </div>
          <div className="min-w-0">
            <h3
              className="text-base font-semibold leading-tight truncate"
              style={{ fontFamily: 'var(--font-heading)', color: 'var(--color-text)' }}
            >
              {member.fullName}
            </h3>
            <p
              className="text-xs font-medium mt-0.5 leading-tight"
              style={{ color: 'var(--color-cta)' }}
            >
              {member.role}
            </p>
          </div>
        </div>

        {/* Bio */}
        <p
          className="text-sm leading-relaxed"
          style={{ color: '#52525B' }}
        >
          {member.bio}
        </p>

        {/* Skills */}
        <div className="flex flex-wrap gap-1.5" aria-label="Competencias">
          {member.skills.map((skill) => (
            <span key={skill} className="badge">
              {skill}
            </span>
          ))}
        </div>
      </div>

      {/* Hover accent line */}
      <div
        className="absolute bottom-0 left-0 h-0.5 w-0 group-hover:w-full transition-all duration-500"
        style={{ backgroundColor: 'var(--color-cta)' }}
        aria-hidden="true"
      />
    </article>
  );
}
