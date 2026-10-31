import nana2 from '../images/nana2.png';


function OwnerDetails() {
  return (
    <>
    
      <section className="founder-section" data-reveal>
        <div className="founder-photo-wrap">
          <img src={nana2} alt="Mr. R. Surya Prakash, founder of Jayess Builders" className="founder-photo" loading="lazy" />
          <span className="founder-photo-caption">The person behind the promise</span>
        </div>
        <div className="founder-copy">
          <p className="eyebrow">A personal commitment</p>
          <h2>Built on trust.<br /><span>Led with care.</span></h2>
          <p>With more than 15 years in construction, Mr. R. Surya Prakash leads Jayess Builders with a hands-on approach and a belief that every home should be made with care.</p>
          <div className="founder-contact">
            <div><span>Speak with our founder</span><a href="tel:+919515496226">+91 95154 96226</a></div>
            <a className="founder-email" href="mailto:jayessbuilders1@gmail.com" aria-label="Email Jayess Builders">↗</a>
          </div>
        </div>
      </section>
    </>
  );
}

export default OwnerDetails; 