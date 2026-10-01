import "./hero.css";

function Hero() {
  return (
    <section className="hero" id="hero">
      <div className="hero-content">
        <div className="hero-text">
          <p className="hero-intro">Bonjour, je suis</p>
          <h1 className="hero-title">ARNOT RAHARISON</h1>
          <h2 className="hero-subtitle">Étudiant en informatique & développeur</h2>
          <p className="hero-description">
            Je crée des applications et des interfaces web modernes avec les technologies que j'apprends.
          </p>
          <div className="hero-buttons">
            <a className="btn-primary" href="#projet">Voir mes projets</a>
            <a className="btn-secondary" href="#contact">Me contacter</a>
          </div>
        </div>
        <div className="hero-image">
          <img src="/images/moi.png" alt="Portrait d'Arnot Raharison" />
        </div>
      </div>
    </section>
  );
}

export default Hero;