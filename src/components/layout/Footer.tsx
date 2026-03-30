import { members, SUBJECT_NAME, TEAM_NAME, UNIVERSITY, COURSE_YEAR } from '@/data/team';

export default function Footer() {
  return (
    <footer className="border-t border-nebula bg-deep-space/50">
      <div className="mx-auto grid w-full max-w-7xl gap-8 px-4 py-10 md:grid-cols-3 md:px-8">
        <div>
          <p className="font-orbitron text-xl font-bold text-cyber-cyan">{TEAM_NAME}</p>
          <p className="mt-2 text-sm text-star-light">Portfolio academico del equipo.</p>
        </div>

        <div>
          <h3 className="font-exo2 text-lg font-semibold text-white-photon">Integrantes</h3>
          <ul className="mt-2 space-y-1 text-sm text-star-light">
            {members.map((member) => (
              <li key={member.id}>{member.fullName}</li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="font-exo2 text-lg font-semibold text-white-photon">Contexto</h3>
          <p className="mt-2 text-sm text-star-light">{SUBJECT_NAME}</p>
          <p className="text-sm text-star-light">{UNIVERSITY}</p>
          <p className="text-sm text-star-light">Cursada {COURSE_YEAR}</p>
        </div>
      </div>
    </footer>
  );
}
