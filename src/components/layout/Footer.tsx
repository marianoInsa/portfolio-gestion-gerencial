import { members, SUBJECT_NAME, TEAM_NAME, UNIVERSITY, COURSE_YEAR } from '@/data/team';

export default function Footer() {
  return (
    <footer className="border-t border-nebula bg-deep-space/50">
      <div className="mx-auto grid w-full max-w-7xl gap-8 px-4 py-10 md:grid-cols-3 md:px-8">
        <div>
          <p className="font-orbitron text-xl font-bold text-cyber-cyan">{TEAM_NAME}</p>
          <p className="mt-2 text-sm text-star-light">Portfolio académico del equipo.</p>
          <a
            href="https://github.com/marianoInsa/portfolio-gestion-gerencial"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-4 inline-flex items-center gap-2 text-xs font-semibold text-cyber-cyan transition-all duration-300 hover:text-white-photon"
          >
            <svg className="size-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
              <path d="M9 18c-4.51 2-5-2-7-2" />
            </svg>
            Ver Código en GitHub
          </a>
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
          <p className="text-sm text-star-light">Gestión Gerencial {COURSE_YEAR}</p>
        </div>
      </div>
    </footer>
  );
}
