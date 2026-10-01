import "./hero.css";

function Hero() {
  return (
    <section className="hero" id="hero">
      <p className="hero-intro">
        Bonjour, je suis
      </p>
      <h1 className="hero-title">ARNOT RAHARISON</h1>
      <h2 className="hero-subtitle">Étudiant en informatique & développeur</h2>
      <p className="hero-description">Je crée des applications et des interfaces web modernes avec les technologies que j'apprends.</p>
      <div className="hero-buttons">
        {/* Bouton vers les futurs projets */}
        <button className="btn-primary">Voir mes projets</button>

        {/* Bouton vers la future section contact */}
        <button className="btn-secondary">Me contacter</button>
      </div>
    </section>
  );
}

export default Hero;