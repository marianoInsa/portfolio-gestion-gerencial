import { rpaEntries } from '@/data/rpa';
import { members } from '@/data/team';
import { EmptyState, GlitchTitle, SectionWrapper } from '@/components/ui';
import RPAStackedCarousel from './RPAStackedCarousel';

export default function RPASection() {
  const enrichedEntries = rpaEntries
    .map((entry) => {
      const member = members.find((m) => m.id === entry.memberId);
      if (!member) return null;
      return {
        memberId: entry.memberId,
        fullName: member.fullName,
        firstName: member.firstName,
        avatarPath: member.avatarPath,
        infographicPath: entry.infographicPath,
      };
    })
    .filter((e): e is NonNullable<typeof e> => e !== null);

  return (
    <SectionWrapper id="rpa">
      <div className="mb-10">
        <GlitchTitle text="Rutas Personales de Aprendizaje" className="text-3xl md:text-5xl" />
        <p className="mt-3 max-w-2xl text-star-light">
          Recorrido personal de aprendizaje y autoevaluación de competencias ingenieriles de cada
          integrante del equipo.
        </p>
      </div>

      {enrichedEntries.length === 0 ? (
        <EmptyState
          title="Rutas en progreso"
          message="Las rutas personales se publicarán próximamente."
        />
      ) : (
        <RPAStackedCarousel entries={enrichedEntries} />
      )}
    </SectionWrapper>
  );
}
