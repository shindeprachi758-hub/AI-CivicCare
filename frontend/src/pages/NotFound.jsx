import { Link } from 'react-router-dom';
import { SearchX } from 'lucide-react';

export default function NotFound() {
  return (
    <section className="section">
      <div className="container state-panel">
        <div className="icon-box"><SearchX size={30} /></div>
        <span className="eyebrow">404 — PAGE NOT FOUND</span>
        <h1>This page couldn't be found.</h1>
        <p className="muted">
          The page may have moved or the address may be incorrect.
        </p>
        <Link className="btn btn-primary" to="/">Return Home</Link>
      </div>
    </section>
  );
}