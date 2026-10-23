import { useState } from 'react';
import PageHero from '../components/PageHero';
import { ChevronDown } from 'lucide-react';

const faqs = [
  {
    question: 'What types of issues can be reported?',
    answer: 'The planned categories include sanitation, roads, water and drainage, street lighting and other civic infrastructure concerns.',
  },
  {
    question: 'What details should a complaint contain?',
    answer: 'Provide a clear title, a factual description, the affected location and a supporting image when useful.',
  },
  {
    question: 'How will I track a complaint?',
    answer: 'The planned platform will provide a complaint reference and status timeline once the backend workflow is implemented.',
  },
  {
    question: 'Does AI make the final decision?',
    answer: 'No. AI is intended to assist with classification and prioritization. Authorized personnel should review recommendations and make operational decisions.',
  },
  {
    question: 'Is complaint submission active now?',
    answer: 'This phase implements the public frontend. Real submissions, accounts and tracking will become available only after backend and authentication integration.',
  },
];

export default function Help() {
  const [opened, setOpened] = useState(0);

  return (
    <>
      <PageHero
        eyebrow="HELP CENTER"
        title="Answers to common questions."
        description="Learn about the planned reporting process and the intended features of AI CivicCare."
      />
      <section className="section">
        <div className="container help-container">
          {faqs.map((faq, index) => (
            <article className="faq-item" key={faq.question}>
              <button
                className="faq-question"
                aria-expanded={opened === index}
                onClick={() => setOpened(opened === index ? -1 : index)}
              >
                {faq.question}
                <ChevronDown
                  className={opened === index ? 'chevron-open' : ''}
                  size={20}
                />
              </button>
              {opened === index && (
                <div className="faq-answer">
                  <p>{faq.answer}</p>
                </div>
              )}
            </article>
          ))}
        </div>
      </section>
    </>
  );
}