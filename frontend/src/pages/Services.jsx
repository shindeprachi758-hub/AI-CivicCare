import PageHero from '../components/PageHero';
import {
  Trash2, Construction, Droplets, Lightbulb,
  BrainCircuit, MapPin
} from 'lucide-react';

const services = [
  { icon: Trash2, title: 'Waste and sanitation', text: 'Report overflowing bins, uncollected waste and public cleanliness issues.' },
  { icon: Construction, title: 'Roads and infrastructure', text: 'Document potholes, damaged roads and other public infrastructure concerns.' },
  { icon: Droplets, title: 'Water and drainage', text: 'Report water leakage, drainage blockages and related civic issues.' },
  { icon: Lightbulb, title: 'Street lighting', text: 'Identify broken streetlights and poorly illuminated public areas.' },
  { icon: BrainCircuit, title: 'AI-assisted categorization', text: 'Help staff review suggested categories and urgency based on complaint details.' },
  { icon: MapPin, title: 'Location and tracking', text: 'Attach a location and follow the complaint status as the workflow is implemented.' },
];

export default function Services() {
  return (
    <>
      <PageHero
        eyebrow="CIVIC SERVICES"
        title="One portal for everyday civic concerns."
        description="Explore the types of civic reports and platform capabilities planned for AI CivicCare."
      />
      <section className="section">
        <div className="container">
          <div className="grid grid-3">
            {services.map(({ icon: Icon, title, text }) => (
              <article className="card" key={title}>
                <div className="icon-box"><Icon /></div>
                <h3>{title}</h3>
                <p className="muted">{text}</p>
              </article>
            ))}
          </div>
          <p className="demo-notice">
            These are planned portal capabilities. Live complaint submission,
            municipal routing and AI analysis require backend integration.
          </p>
        </div>
      </section>
    </>
  );
}