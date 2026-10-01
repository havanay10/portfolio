import "./Contact.css";

function Contact() {
  return (
    <section className="contact" id="contact">
      <div className="contact-header">
        <p>CONTACT</p>
        <h2>Travaillons ensemble</h2>
        <p>Vous avez un projet ou souhaitez simplement échanger?</p>
        <p>N'hésitez pas à me contacter.</p>
      </div>
      <div className="contact-info">
        <div className="contact-item">
          <h3>Email</h3>
          <p>raharisonhavanay@gmail.com</p>
        </div>
        {/* GitHub */}
        <div className="contact-item">
          <h3>GitHub</h3>
          <p><a href="https://github.com/havanay10/portfolio" target="_blank" rel="noopener noreferrer">github.com/tonprofil</a></p>
        </div>
        {/* LinkedIn */}
        <div className="contact-item">
          <h3>LinkedIn</h3>
          <p>linkedin.com/in/Arnot</p>
        </div>
      </div>
    </section>
  );
}

export default Contact;