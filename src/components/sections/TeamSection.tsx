import Image from 'next/image';
import { COURSE_YEAR, SUBJECT_NAME, TEAM_LOGO, TEAM_NAME, UNIVERSITY } from '@/data/team';
import { SectionWrapper } from '@/components/ui';

export default function TeamSection() {
  return (
    <SectionWrapper id="equipo">
      <div className="rounded-2xl border border-nebula bg-deep-space/70 p-6 md:p-10">
        <div className="flex flex-col items-center gap-5 text-center md:flex-row md:justify-between md:text-left">
          <div className="flex items-center gap-4">
            <Image
              src={TEAM_LOGO}
              alt="Logo del equipo Stakeholders"
              width={92}
              height={92}
              className="h-20 w-20 rounded-xl border border-cyber-cyan/40 object-cover"
            />
            <div>
              <p className="font-mono text-xs uppercase tracking-[0.18em] text-cyber-cyan">Equipo</p>
              <h2 className="font-orbitron text-3xl font-black uppercase text-white-photon md:text-4xl">
                {TEAM_NAME}
              </h2>
            </div>
          </div>

          <div className="space-y-1 text-sm text-star-light md:text-right">
            <p>{SUBJECT_NAME}</p>
            <p>{UNIVERSITY}</p>
            <p>Cursada {COURSE_YEAR}</p>
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
}
