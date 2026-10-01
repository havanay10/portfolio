// Importation du fichier CSS de la section Projects
import "./Projects.css";

// Définition de la structure d'un projet
interface Project {
  title: string;
  description: string;
  technologies: string[];
  image: string;
}

// Tableau contenant nos projets
const projects: Project[] = [
  {
    title: "SmartHR",
    description:
      "Logiciel Desktop de gestion de Ressource Humaine",
    technologies: ["Python", "Postgres", "Docker","PyQt5"],
    image: "/images/smartrh.jfif",
  },

  {
    title: "Simulation de chute libre",
    description:
      "Application permettant de simuler une chute libre en utilisant la méthode numérique d'Euler.",
    technologies: ["Python", "Euler", "Mathématiques"],
    image: "https://picsum.photos/seed/chute-libre-portfolio/900/520",
  },

  {
    title: "Application Taylor",
    description:
      "Application d'approximation numérique basée sur les polynômes de Taylor.",
    technologies: ["Python", "Mathématiques", "Numérique"],
    image: "/images/taylor.jfif",
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
            {/* Image provisoire à remplacer par une capture du projet */}
            <img
              className="project-image"
              src={project.image}
              alt={`Image illustrative du projet ${project.title}`}
              loading="lazy"
            />

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