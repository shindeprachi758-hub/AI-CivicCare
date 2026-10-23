import { Link } from 'react-router-dom';
import { ShieldCheck, Mail, MapPin } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="container footer-grid">
        <div>
          <Link to="/" className="brand footer-brand">
            <span className="brand-icon"><ShieldCheck size={25} /></span>
            <span>
              <strong>AI CivicCare</strong>
              <small>Citizen Services Portal</small>
            </span>
          </Link>
          <p className="footer-description">
            Making civic issue reporting and municipal response
            more accessible, transparent and accountable.
          </p>
        </div>

        <div>
          <h3>Explore</h3>
          <Link to="/about">About Us</Link>
          <Link to="/services">Our Services</Link>
          <Link to="/how-it-works">How It Works</Link>
        </div>

        <div>
          <h3>Support</h3>
          <Link to="/help">Help Center</Link>
          <Link to="/contact">Contact Us</Link>
          <a href="mailto:support@example.com">
            <Mail size={15} /> Email support
          </a>
          <span className="footer-note">
            <MapPin size={15} /> Municipal service portal concept
          </span>
        </div>
      </div>

      <div className="container footer-bottom">
        <span>© {new Date().getFullYear()} AI CivicCare</span>
        <span>Designed for accessible civic services.</span>
      </div>
    </footer>
  );
}