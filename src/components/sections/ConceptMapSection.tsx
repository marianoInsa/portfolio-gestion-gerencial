import { teamConceptMap } from '@/data/concept-map';
import { GlitchTitle, SectionWrapper } from '@/components/ui';
import TeamConceptMapCrudSection from '@/components/sections/team-concept-map-crud-section';

export default function ConceptMapSection() {
  return (
    <SectionWrapper id="mapa-conceptual">
      <div className="mb-8">
        <GlitchTitle text="Mapa Conceptual" className="text-4xl md:text-5xl" />
      </div>

      <TeamConceptMapCrudSection
        initialItems={
          teamConceptMap.isPublished
            ? [
                {
                  id: 'mapa-equipo-inicial',
                  title: teamConceptMap.title,
                  resourceUrl: teamConceptMap.resourceUrl,
                  description: 'Mapa conceptual de equipo',
                },
              ]
            : []
        }
      />
    </SectionWrapper>
  );
}
