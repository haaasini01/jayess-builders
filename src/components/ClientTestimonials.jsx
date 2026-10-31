const testimonials = [
  {
    name: 'Sunil Kumar',
    project: 'Shoba Villa, Hyderabad',
    text: 'Choosing a home at Shoba Villa has been a great decision. The environment strikes the right balance between elegance and practicality. From premium fittings to easy access to shopping and schools, everything is within reach. The professionalism of the management team only adds to the satisfaction.',
  },
  {
    name: 'Anil Kumar',
    project: 'Sri Ramlu Nilayam, Hyderabad',
    text: 'Living at Sri Ramlu Nilayam in Manikonda has truly elevated our lifestyle. The location is central, making our daily commute and errands incredibly convenient. The apartment is spacious, well-ventilated, and thoughtfully crafted. For families like ours seeking both comfort and community, Sri Ramlu Nilayam is an excellent choice.',
  },
  {
    name: 'Shravan',
    project: 'Renuka Nilayam, Hyderabad',
    text: 'Renuka Nilayam has been the peaceful retreat I was hoping for. Nestled amidst greenery, it offers a calming atmosphere that’s perfect after a long day. The thoughtful layout and vibrant community make it more than just a house—it truly feels like home in the heart of Hyderabad.',
  },
];

function ClientTestimonials() {
  return (
    <section className="testimonials-page">
      <div className="testimonials-heading" data-reveal>
        <p className="eyebrow">Good homes. Good people.</p>
        <h1>Don’t just take<br /><span>our word for it.</span></h1>
        <p>The best measure of our work is how it feels to live there.</p>
      </div>
      <div className="testimonial-grid">
        {testimonials.map((testimonial, index) => (
          <article className={`testimonial-card testimonial-card-${index + 1}`} key={testimonial.name} data-reveal>
            <div className="quote-mark" aria-hidden="true">“</div>
            <div className="testimonial-stars" aria-label="5 out of 5 stars">★★★★★</div>
            <p className="testimonial-copy">{testimonial.text}</p>
            <div className="testimonial-person">
              <span className="testimonial-initial" aria-hidden="true">{testimonial.name.charAt(0)}</span>
              <div><h2>{testimonial.name}</h2><span>{testimonial.project}</span></div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

export default ClientTestimonials;
