import PageHero from '../components/PageHero';
import { ShieldCheck, Users, Target } from 'lucide-react';

const values = [
  {
    icon: Target,
    title: 'Purposeful reporting',
    text: 'Make it easier to communicate civic problems with clear descriptions and location details.',
  },
  {
    icon: ShieldCheck,
    title: 'Responsible AI',
    text: 'Use AI as a decision-support tool, with appropriate human review and correction.',
  },
  {
    icon: Users,
    title: 'Citizen-focused design',
    text: 'Prioritize accessibility, understandable status updates and straightforward workflows.',
  },
];

export default function About() {
  return (
    <>
      <PageHero
        eyebrow="ABOUT AI CIVICCARE"
        title="Technology with a civic purpose."
        description="AI CivicCare is a project concept for improving how civic complaints are submitted, reviewed, assigned and tracked."
      />

      <section className="section section-white">
        <div className="container split-layout">
          <div>
            <span className="eyebrow">OUR MISSION</span>
            <h2>Connect citizen concerns with clearer response workflows.</h2>
          </div>
          <div>
            <p className="muted">
              Civic issues can be difficult to track when reporting, department
              assignment and follow-up happen through disconnected processes.
              AI CivicCare is designed to bring these steps together in one portal.
            </p>
            <p className="muted">
              The planned platform combines complaint management with AI-assisted
              categorization, priority recommendations and administrative analytics.
              Municipal staff remain responsible for reviewing and acting on reports.
            </p>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="section-heading">
            <span className="eyebrow">OUR PRINCIPLES</span>
            <h2>Built around public service</h2>
          </div>
          <div className="grid grid-3">
            {values.map(({ icon: Icon, title, text }) => (
              <article className="card" key={title}>
                <div className="icon-box"><Icon /></div>
                <h3>{title}</h3>
                <p className="muted">{text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}