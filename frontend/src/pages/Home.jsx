import { Link } from 'react-router-dom';
import {
  ArrowRight, FileText, MapPin, BrainCircuit,
  ClipboardCheck, Clock3, ShieldCheck
} from 'lucide-react';

const services = [
  {
    icon: FileText,
    title: 'Report Civic Issues',
    text: 'Prepare a report for problems such as damaged roads, garbage, or water leakage.',
  },
  {
    icon: BrainCircuit,
    title: 'AI-Assisted Analysis',
    text: 'Help identify the issue category and recommend urgency for review.',
  },
  {
    icon: MapPin,
    title: 'Location-Based Reporting',
    text: 'Include a location to help the responsible team identify the affected area.',
  },
];

const steps = [
  ['01', 'Submit a report', 'Describe the issue and provide relevant details.'],
  ['02', 'Review and assignment', 'The complaint can be reviewed and routed to the relevant team.'],
  ['03', 'Track progress', 'Follow status updates and review the reported resolution.'],
];

export default function Home() {
  return (
    <>
      <section className="home-hero">
        <div className="container hero-grid">
          <div className="hero-copy">
            <span className="eyebrow">SMARTER CIVIC SERVICES</span>
            <h1>A better way to make your city <span>better.</span></h1>
            <p>
              Report civic issues, follow complaint progress and help
              municipal teams build cleaner, safer and more responsive communities.
            </p>
            <div className="hero-actions">
              <Link className="btn btn-primary" to="/contact">
                Explore the Portal <ArrowRight size={18} />
              </Link>
              <Link className="btn btn-secondary" to="/how-it-works">
                How It Works
              </Link>
            </div>
            <div className="hero-trust">
              <ShieldCheck size={19} />
              Designed for transparent and accountable civic services
            </div>
          </div>

          <div className="hero-visual" aria-label="Civic service illustration">
            <div className="city-sun" />
            <div className="city-building building-one" />
            <div className="city-building building-two" />
            <div className="city-building building-three" />
            <div className="city-ground" />
            <div className="hero-float-card">
              <span className="float-icon"><ClipboardCheck /></span>
              <div>
                <strong>Every report matters</strong>
                <small>From submission to resolution</small>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section section-white">
        <div className="container">
          <div className="section-heading">
            <span className="eyebrow">OUR SERVICES</span>
            <h2>Civic services, made simpler</h2>
            <p className="muted">
              One accessible place to report issues and follow the response process.
            </p>
          </div>

          <div className="grid grid-3">
            {services.map(({ icon: Icon, title, text }) => (
              <article className="card service-card" key={title}>
                <div className="icon-box"><Icon size={24} /></div>
                <h3>{title}</h3>
                <p className="muted">{text}</p>
                <Link className="text-link" to="/services">
                  Learn more <ArrowRight size={16} />
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="section-heading">
            <span className="eyebrow">THE PROCESS</span>
            <h2>From reporting to resolution</h2>
            <p className="muted">
              A clear process designed to make civic reporting easier to follow.
            </p>
          </div>

          <div className="grid grid-3">
            {steps.map(([number, title, text]) => (
              <article className="process-card" key={number}>
                <span className="step-number">{number}</span>
                <h3>{title}</h3>
                <p className="muted">{text}</p>
              </article>
            ))}
          </div>

          <div className="cta-panel">
            <div>
              <h2>Have a civic issue to report?</h2>
              <p>
                Explore the portal concept and learn how the reporting workflow is designed.
              </p>
            </div>
            <Link className="btn btn-primary" to="/contact">
              Get Started <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </section>

      <section className="section section-white">
        <div className="container feature-strip">
          <div className="icon-box"><Clock3 /></div>
          <div>
            <h2>Transparency at every step</h2>
            <p className="muted">
              The platform is designed around complaint tracking, clear status
              updates and accountable municipal workflows.
            </p>
          </div>
          <Link className="btn btn-secondary" to="/about">About the Project</Link>
        </div>
      </section>
    </>
  );
}