import { Button, Card, Section, SectionHeading } from '@/components/ui/primitives';

export default function UiAuditPage() {
  return (
    <Section tone="base">
      <SectionHeading
        label="Calidad Visual"
        title="UI Audit Sandbox"
        description="Referencia interna para validar consistencia de componentes base."
      />

      <div className="mt-6 flex flex-wrap gap-3">
        <Button variant="primary" size="md">Primary</Button>
        <Button variant="secondary" size="md">Secondary</Button>
        <Button variant="ghost" size="md">Ghost</Button>
        <Button variant="primary" size="lg" radius="pill">Hero CTA</Button>
      </div>

      <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-4">
        <Card variant="elevated">Card Elevated</Card>
        <Card variant="outline">Card Outline</Card>
        <Card variant="dashed">Card Dashed</Card>
      </div>
    </Section>
  );
}
