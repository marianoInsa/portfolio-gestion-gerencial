import { members } from '@/data/team';
import { AvatarCard, GlitchTitle, SectionWrapper } from '@/components/ui';

export default function MembersSection() {
  return (
    <SectionWrapper id="integrantes">
      <div className="mb-8">
        <GlitchTitle text="Integrantes" className="text-4xl md:text-5xl" />
        <p className="mt-3 max-w-2xl text-star-light">
          Perfiles complementarios que integran análisis, diseño, desarrollo y validación para cada entrega.
        </p>
      </div>

      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
        {members.map((member) => (
          <AvatarCard key={member.id} member={member} />
        ))}
      </div>
    </SectionWrapper>
  );
}
