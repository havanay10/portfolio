// Importation du fichier CSS de la section Projects
import "./Projects.css";

// Définition de la structure d'un projet
interface Project {
  title: string;
  repoUrl: string;
  description: string;
  technologies: string[];
}

// Tableau contenant nos projets
const projects: Project[] = [
  {
    title: "SmartHR",
    repoUrl: "https://github.com/havanay10/SmartHR",
    description:
      "Logiciel Desktop de gestion de Ressource Humaine",
    technologies: ["Python", "Postgres", "Docker","PyQt5"],
  },

  {
    title: "Simulation de chute libre",
    repoUrl: "https://github.com/tonprofil/fall-simulator",
    description:
      "Application permettant de simuler une chute libre en utilisant la méthode numérique d'Euler.",
    technologies: ["Python", "Euler", "Mathématiques"],
  },

  {
    title: "Application Taylor",
    repoUrl: "https://github.com/havanay10/ApproximationPoly",
    description:
      "Application d'approximation numérique basée sur les polynômes de Taylor.",
    technologies: ["Python", "Mathématiques", "Numérique"],
  },
];

// Création du composant Projects
function Projects() {
  return (
    <section className="projects" id="projet">
      <div className="projects-header">
        <p>MES PROJETS</p>
        <h2>Quelques projets que j'ai réalisés</h2>
      </div>
      <div className="projects-list">
        {projects.map((project) => (
          // Carte correspondant à un projet
          <article
            className="project-card"
            key={project.title}
          >
            {/* Nom du projet */}
            <h3>{project.title}</h3>
            {/* Description du projet */}
            <p>{project.description}</p>
            {/* Technologies utilisées */}
            <div className="technologies">
              {project.technologies.map((technology) => (
                <span key={technology}>
                  {technology}
                </span>
              ))}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

export default Projects;