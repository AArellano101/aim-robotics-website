import SectionLabel from "../components/SectionLabel";
import { contact } from "../content/loader";
import "./Contact.css";

/** 06 / Contact — minimal, functional channels rather than a large form. */
function Contact() {
  return (
    <section id="contact" className="contact" aria-labelledby="contact-heading">
      <div className="container">
        <SectionLabel>{contact.sectionLabel}</SectionLabel>

        <div className="contact__top">
          <h2 id="contact-heading" className="contact__heading">
            {contact.heading}
          </h2>
          <p className="contact__intro">{contact.intro}</p>
        </div>

        <ul className="contact__channels">
          {contact.channels.map((channel) => (
            <li key={channel.id} className="contact__channel">
              <a href={channel.href} className="contact__channel-link">
                <span className="contact__channel-label">{channel.label}</span>
                <span className="contact__channel-value">{channel.value}</span>
              </a>
            </li>
          ))}
        </ul>

        <p className="contact__affiliation">{contact.affiliation}</p>
      </div>
    </section>
  );
}

export default Contact;
