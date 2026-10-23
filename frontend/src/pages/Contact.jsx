import { useState } from 'react';
import PageHero from '../components/PageHero';
import { Mail, MessageSquare, CheckCircle2 } from 'lucide-react';

export default function Contact() {
  const [form, setForm] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);

  function handleChange(event) {
    setForm({ ...form, [event.target.name]: event.target.value });
    setSubmitted(false);
  }

  function handleSubmit(event) {
    event.preventDefault();
    setSubmitted(true);
  }

  return (
    <>
      <PageHero
        eyebrow="CONTACT"
        title="We welcome your feedback."
        description="Use this demonstration form to explore the contact experience for AI CivicCare."
      />

      <section className="section">
        <div className="container contact-grid">
          <div>
            <span className="eyebrow">GET IN TOUCH</span>
            <h2>Let's make civic services easier to use.</h2>
            <p className="muted">
              Questions, accessibility suggestions and project feedback are welcome.
              Official support channels will be configured before launch.
            </p>
            <div className="contact-detail">
              <span className="icon-box"><Mail /></span>
              <div>
                <strong>Email support</strong>
                <p className="muted">Official address to be configured</p>
              </div>
            </div>
            <div className="contact-detail">
              <span className="icon-box"><MessageSquare /></span>
              <div>
                <strong>Feedback</strong>
                <p className="muted">Share suggestions about the portal experience.</p>
              </div>
            </div>
          </div>

          <form className="card contact-form" onSubmit={handleSubmit}>
            <h2>Send a message</h2>

            <div className="form-group">
              <label htmlFor="name">Full name</label>
              <input id="name" name="name" value={form.name}
                onChange={handleChange} required maxLength={100} />
            </div>

            <div className="form-group">
              <label htmlFor="email">Email address</label>
              <input id="email" name="email" type="email"
                value={form.email} onChange={handleChange}
                required maxLength={254} />
            </div>

            <div className="form-group">
              <label htmlFor="subject">Subject</label>
              <input id="subject" name="subject" value={form.subject}
                onChange={handleChange} required maxLength={150} />
            </div>

            <div className="form-group">
              <label htmlFor="message">Message</label>
              <textarea id="message" name="message" value={form.message}
                onChange={handleChange} required maxLength={3000} />
            </div>

            <button className="btn btn-primary" type="submit">
              Preview Submission
            </button>

            {submitted && (
              <div className="form-notice" role="status">
                <CheckCircle2 size={20} />
                <span>
                  Form validation succeeded. This is a frontend demo;
                  your message has not been sent to a server.
                </span>
              </div>
            )}
          </form>
        </div>
      </section>
    </>
  );
}