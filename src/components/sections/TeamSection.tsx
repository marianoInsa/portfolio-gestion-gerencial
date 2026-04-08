import Image from 'next/image';
import { COURSE_YEAR, SUBJECT_NAME, TEAM_LOGO, TEAM_NAME, UNIVERSITY } from '@/data/team';
import { SectionWrapper } from '@/components/ui';

export default function TeamSection() {
  return (
    <SectionWrapper id="equipo">
      <div className="rounded-2xl border border-nebula bg-deep-space/70 p-4 sm:p-6 md:p-10">
        <div className="flex flex-col items-center gap-5 text-center md:flex-row md:justify-between md:text-left">
          <div className="flex w-full min-w-0 flex-col items-center gap-3 sm:w-auto sm:flex-row sm:gap-4">
            <Image
              src={TEAM_LOGO}
              alt="Logo del equipo Stakeholders"
              width={92}
              height={92}
              className="h-auto w-16 shrink-0 rounded-xl border border-cyber-cyan/40 object-contain sm:w-20"
              style={{ height: 'auto' }}
            />
            <div className="min-w-0">
              <p className="font-mono text-xs uppercase tracking-[0.18em] text-cyber-cyan">Equipo</p>
              <h2 className="font-orbitron text-2xl font-black uppercase leading-tight text-white-photon sm:text-3xl md:text-2xl [overflow-wrap:anywhere]">
                {TEAM_NAME}
              </h2>
            </div>
          </div>

          <div className="space-y-1 text-sm text-star-light md:text-right">
            <p>{SUBJECT_NAME}</p>
            <p>{UNIVERSITY}</p>
            <p>Gestión Gerencial {COURSE_YEAR}</p>
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
}
