import ChallengesSection from '@/components/sections/ChallengesSection';
import ConceptMapSection from '@/components/sections/ConceptMapSection';
import HeroSection from '@/components/sections/HeroSection';
import MembersSection from '@/components/sections/MembersSection';
import RPASection from '@/components/sections/RPASection';
import TeamSection from '@/components/sections/TeamSection';

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <TeamSection />
      <MembersSection />
      <ChallengesSection />
      <RPASection />
      <ConceptMapSection />
    </>
  );
}
