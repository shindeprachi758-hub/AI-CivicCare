import PageHero from '../components/PageHero';
import { FileText, BrainCircuit, Building2, ClipboardCheck } from 'lucide-react';

const stages = [
  {
    icon: FileText,
    title: '1. Submit a complaint',
    text: 'Provide a clear title, description, category if known, and location or supporting images.',
  },
  {
    icon: BrainCircuit,
    title: '2. AI-assisted review',
    text: 'The planned AI engine suggests a category, urgency level and relevant department for review.',
  },
  {
    icon: Building2,
    title: '3. Department assignment',
    text: 'Authorized municipal staff review the report and assign it to the appropriate team.',
  },
  {
    icon: ClipboardCheck,
    title: '4. Track resolution',
    text: 'Follow status changes, review resolution notes and provide feedback when available.',
  },
];

export default function HowItWorks() {
  return (
    <>
      <PageHero
        eyebrow="HOW IT WORKS"
        title="A clear journey from report to response."
        description="Understand the intended complaint workflow and how AI assistance fits into municipal review."
      />
      <section className="section section-white">
        <div className="container timeline">
          {stages.map(({ icon: Icon, title, text }) => (
            <article className="timeline-item" key={title}>
              <div className="timeline-icon"><Icon size={23} /></div>
              <div>
                <h2>{title}</h2>
                <p className="muted">{text}</p>
              </div>
            </article>
          ))}
        </div>
      </section>
      <section className="section">
        <div className="container">
          <div className="notice-card">
            <h2>AI supports the process; people remain accountable.</h2>
            <p className="muted">
              AI recommendations should be reviewable and correctable. Municipal
              personnel remain responsible for official assignments and decisions.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}