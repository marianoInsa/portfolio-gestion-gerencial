import { rpaEntries } from '@/data/rpa';
import { GlitchTitle, SectionWrapper } from '@/components/ui';
import IndividualConceptMapsCrudSection from '@/components/sections/individual-concept-maps-crud-section';

export default function RPASection() {
  return (
    <SectionWrapper id="rpa">
      <div className="mb-8">
        <GlitchTitle text="Rutas Personales de Aprendizaje" className="text-3xl md:text-5xl" />
        <p className="mt-3 text-star-light">Gestion simple de carga, edicion y eliminacion de mapas conceptuales individuales.</p>
      </div>

      <IndividualConceptMapsCrudSection initialItems={rpaEntries} />
    </SectionWrapper>
  );
}
