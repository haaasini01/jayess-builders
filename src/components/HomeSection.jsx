import { Link } from 'react-router-dom';
import heroImage from '../images/house-7124141_1920.jpg';
import projectOne from '../images/a1.jpg';
import projectTwo from '../images/a2.jpg';
import projectThree from '../images/a3.jpg';

const projects = [
  { name: 'Shoba Villa', location: 'Hyderabad', image: projectOne },
  { name: 'Sri Ramlu Nilayam', location: 'Manikonda, Hyderabad', image: projectTwo },
  { name: 'Renuka Nilayam', location: 'Hyderabad', image: projectThree },
];

function HomeSection() {
  return (
    <>
      <section className="hero" data-reveal>
        <div className="hero-copy">
          <p className="eyebrow"><span className="eyebrow-mark" /> Thoughtfully built. Made to last.</p>
          <h1>Spaces that feel like <span>home.</span></h1>
          <p className="hero-description">
            For more than 15 years, Jayess Builders has been creating homes and communities
            across Hyderabad with care, craftsmanship, and a commitment to doing things right.
          </p>
          <div className="hero-actions">
            <Link to="/about" className="button button-dark">Explore our work <span aria-hidden="true">↗</span></Link>
            <Link to="/contact" className="text-link">Talk to our team <span aria-hidden="true">→</span></Link>
          </div>
          <div className="hero-proof">
            <div className="proof-avatars" aria-hidden="true">
              <span>J</span><span>B</span><span>15</span>
            </div>
            <p><strong>Built on trust</strong><br />Made for the way you live.</p>
          </div>
        </div>
        <div className="hero-visual">
          <img src={heroImage} alt="Contemporary apartment building with modern balconies" />
          <div className="hero-image-note">
            <span className="note-line" />
            <span>Considered design. Lasting value.</span>
          </div>
          <div className="hero-image-index">01 <span>/</span> 03</div>
        </div>
      </section>

      <section className="metrics-strip" aria-label="Jayess Builders at a glance" data-reveal>
        <div className="metric-item"><strong>15<span>+</span></strong><span>Years of experience</span></div>
        <div className="metric-item"><strong>09<span>+</span></strong><span>Projects completed</span></div>
        <div className="metric-item"><strong>100<span>%</span></strong><span>Commitment to quality</span></div>
        <div className="metrics-note">Building a better<br />everyday in Hyderabad.</div>
      </section>

      <section className="intro-section" data-reveal>
        <div className="section-heading">
          <p className="eyebrow">A better way to build</p>
          <h2>More than walls.<br /><span>A place to belong.</span></h2>
        </div>
        <div className="intro-copy">
          <p>
            A home is one of life’s biggest decisions. We bring experience, thoughtful planning,
            and dependable execution to every project—so the place you choose feels right long
            after the keys are yours.
          </p>
          <Link to="/about" className="text-link">Get to know us <span aria-hidden="true">→</span></Link>
        </div>
      </section>

      <section className="work-section" data-reveal>
        <div className="section-topline">
          <div>
            <p className="eyebrow">A few places we’ve shaped</p>
            <h2>Built with care.<br /><span>Lived in with joy.</span></h2>
          </div>
          <Link to="/about" className="text-link">See our achievements <span aria-hidden="true">→</span></Link>
        </div>
        <div className="project-preview-grid">
          {projects.map((project, index) => (
            <article className={`project-preview project-preview-${index + 1}`} key={project.name} data-reveal>
              <div className="project-preview-image">
                <img src={project.image} alt={`${project.name} project`} loading="lazy" />
                <span className="project-number">0{index + 1}</span>
              </div>
              <div className="project-preview-caption">
                <h3>{project.name}</h3>
                <span>{project.location}</span>
              </div>
            </article>
          ))}
        </div>
      </section>
    </>
  );
}

export default HomeSection;
