import "./About.css";

function About() {
  return (
    <section className="about" id="about">

      {/* Partie gauche : titre et présentation */}
      <div className="about-content">
        <p className="about-label">À PROPOS DE MOI</p>
        <h2>
          Je suis un étudiant passionné par l'informatique.
        </h2>
        <p>
          Je suis actuellement étudiant en informatique,
          avec un intérêt particulier pour le développement
          logiciel et les technologies web.
        </p>
        <p>
          J'aime apprendre de nouvelles technologies et
          transformer mes idées en projets concrets.
        </p>

      </div>

      {/* Partie droite : informations rapides */}
      <div className="about-info">
        {/* Une information */}
        <div className="info-item">
          <h3>Études</h3>
          <p>Informatique</p>
        </div>
        {/* Une information */}
        <div className="info-item">
          <h3>Domaine</h3>
          <p>Développement logiciel</p>
        </div>

        {/* Une information */}
        <div className="info-item">
          <h3>Objectif</h3>
          <p>Devenir développeur</p>
        </div>

      </div>

    </section>
  );
}

export default About;