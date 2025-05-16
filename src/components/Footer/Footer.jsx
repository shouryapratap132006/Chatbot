import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn, FaEnvelope } from "react-icons/fa";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        {/* Brand */}
        <div className="footer-column">
          <h2 className="footer-logo">E.D.I.T.H</h2>
          <p>AI-powered chatbot creation made effortless.</p>
          <div className="social-icons">
            <a href="#"><FaFacebookF /></a>
            <a href="#"><FaTwitter /></a>
            <a href="#"><FaInstagram /></a>
            <a href="#"><FaLinkedinIn /></a>
            <a href="mailto:support@chatgenie.com"><FaEnvelope /></a>
          </div>
        </div>

        {/* Quick Links */}
        <div className="footer-column">
          <h3>Quick Links</h3>
          <ul>
            <li><a href="#features">Features</a></li>
            <li><a href="#pricing">Pricing</a></li>
            <li><a href="#faqs">FAQs</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </div>

        {/* Product */}
        <div className="footer-column">
          <h3>Product</h3>
          <ul>
            <li><a href="#">Templates</a></li>
            <li><a href="#">Dashboard</a></li>
            <li><a href="#">Integrations</a></li>
            <li><a href="#">Updates</a></li>
          </ul>
        </div>

        {/* Contact */}
        <div className="footer-column">
          <h3>Contact</h3>
          <ul>
            <li>Email: support@chatgenie.com</li>
            <li>Phone: +1 (234) 567-890</li>
            <li>Address: 123 AI Lane, Silicon Valley, CA</li>
          </ul>
        </div>
      </div>

      <div className="footer-bottom">
        <p>&copy; 2025 ChatGenie. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
