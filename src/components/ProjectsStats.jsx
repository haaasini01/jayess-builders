import { useEffect, useRef, useState } from 'react';
import oneImg from '../images/a1.jpg';
import twoImg from '../images/a2.jpg';
import threeImg from '../images/a3.jpg';
import fourImg from '../images/a4.jpg';
import AboutUs from './AboutUs';

const projects = [
  { image: oneImg, name: 'Shoba Villa', location: 'Hyderabad' },
  { image: twoImg, name: 'Sri Ramlu Nilayam', location: 'Manikonda, Hyderabad' },
  { image: threeImg, name: 'Renuka Nilayam', location: 'Hyderabad' },
  { image: fourImg, name: 'Jayess Builders project', location: 'Hyderabad' },
];

function ProjectsStats() {
  const [current, setCurrent] = useState(0);
  const intervalRef = useRef(null);

  useEffect(() => {
    intervalRef.current = setInterval(() => {
      setCurrent((previous) => (previous + 1) % projects.length);
    }, 5000);
    return () => clearInterval(intervalRef.current);
  }, []);

  const goTo = (direction) => {
    setCurrent((previous) => (previous + direction + projects.length) % projects.length);
    clearInterval(intervalRef.current);
    intervalRef.current = setInterval(() => {
      setCurrent((previous) => (previous + 1) % projects.length);
    }, 5000);
  };

  const activeProject = projects[current];

  return (
    <>
      <AboutUs />
      <section className="about-principles" data-reveal>
        <div data-reveal>
          <span className="principle-number">01</span>
          <h2>Quality in every detail</h2>
          <p>Careful choices and considered craftsmanship are part of every step—not just the final finish.</p>
        </div>
        <div data-reveal>
          <span className="principle-number">02</span>
          <h2>People come first</h2>
          <p>We listen, communicate, and build around what matters to the people who will call it home.</p>
        </div>
        <div data-reveal>
          <span className="principle-number">03</span>
          <h2>Made for the long run</h2>
          <p>We aim to create dependable spaces that serve families and communities for years to come.</p>
        </div>
      </section>

      <section className="about-projects" data-reveal>
        <div className="about-projects-heading">
          <p className="eyebrow">Our work</p>
          <h2>Places with<br /><span>a purpose.</span></h2>
          <p>Every project is an opportunity to make everyday living a little better.</p>
          <div className="about-projects-count"><strong>09+</strong><span>projects completed<br />and counting</span></div>
        </div>
        <div className="project-showcase">
          <img src={activeProject.image} alt={`${activeProject.name} in ${activeProject.location}`} />
          <div className="showcase-caption">
            <div><span>FEATURED PROJECT</span><h3>{activeProject.name}</h3><p>{activeProject.location}</p></div>
            <div className="showcase-controls">
              <button type="button" onClick={() => goTo(-1)} aria-label="Previous project">←</button>
              <span>0{current + 1} <span className="control-divider">/</span> 0{projects.length}</span>
              <button type="button" onClick={() => goTo(1)} aria-label="Next project">→</button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default ProjectsStats;
