import { Link } from 'react-router-dom';

function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-main">
        <div className="footer-brand">
          <Link to="/" className="footer-wordmark">JAYESS <span>BUILDERS</span></Link>
          <p>Thoughtful homes and communities,<br />built with care in Hyderabad.</p>
        </div>
        <div className="footer-contact">
          <span className="footer-label">Start a conversation</span>
          <a href="tel:+919515496226">+91 95154 96226</a>
          <a href="mailto:jayessbuilders1@gmail.com">jayessbuilders1@gmail.com</a>
        </div>
        <div className="footer-offices">
          <span className="footer-label">Visit us</span>
          <p><strong>Head office</strong><br />Plot no. 15-5, Puppalguda, Manikonda, Hyderabad, Telangana 500089</p>
          <p><strong>Branch office</strong><br />Plot no. 156 &amp; 157, Near Astalaxmi Temple, Kothapet, Hyderabad, Telangana 500060</p>
        </div>
      </div>
      <div className="footer-bottom">
        <span>© {new Date().getFullYear()} Jayess Builders. All rights reserved.</span>
        <span>Built on trust. Made to last.</span>
      </div>
    </footer>
  );
}

export default Footer; 