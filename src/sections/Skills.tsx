// Importation du fichier CSS de la section Skills
import "./Skills.css";

// Définition du type d'une compétence
interface Skill {
  name: string;
  category: string;
}

// Tableau contenant nos compétences
const skills: Skill[] = [
  {
    name: "HTML",
    category: "Frontend",
  },
  {
    name: "CSS",
    category: "Frontend",
  },
  {
    name: "JavaScript",
    category: "Frontend",
  },
  {
    name: "React",
    category: "Frontend",
  },
  {
    name: "TypeScript",
    category: "Frontend",
  },
  {
    name: "PHP",
    category: "Backend",
  },
  {
    name: "Python",
    category: "Backend",
  },
  {
    name: "SQL",
    category: "Database",
  },
];

// Création du composant Skills
function Skills() {
  return (
    <section className="skills" id="skills">
      <div className="skills-header">
        <p>MES COMPÉTENCES</p>
        <h2>
          Les technologies que j'utilise
        </h2>
      </div>

      <div className="skills-list">

        {/* 
          .map() parcourt chaque élément du tableau skills
          et crée un bloc HTML pour chaque compétence.
        */}
        {skills.map((skill) => (
          <div className="skill-card" key={skill.name}>
            {/* Nom de la compétence */}
            <h3>{skill.name}</h3>
            {/* Catégorie de la compétence */}
            <p>{skill.category}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Skills;