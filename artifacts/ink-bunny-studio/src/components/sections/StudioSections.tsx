import { ArrowRight, Instagram, MoveDown, Send } from 'lucide-react';

type StudioSectionsProps = {
  onBook: () => void;
};

const services = [
  ['Custom designs', '01'],
  ['Blackwork', '02'],
  ['Realism & portraiture', '03'],
  ['Neo-traditional', '04'],
  ['Fine line / detail', '05'],
  ['Cover ups', '06'],
  ['Large scale pieces', '07'],
  ['Private consultations', '08'],
];

const work = [
  ['Archive / I', 'Blackwork'],
  ['Archive / II', 'Fine line'],
  ['Archive / III', 'Neo-traditional'],
  ['Archive / IV', 'Large scale'],
];

const filters = ['All work', 'Blackwork', 'Fine line', 'Large scale'];

export function StudioSections({ onBook }: StudioSectionsProps) {
  return (
    <>
      <section className="statement" id="about" aria-labelledby="about-title">
        <div className="section-shell statement-layout">
          <div>
            <span className="eyebrow">01 / The studio</span>
            <h2 id="about-title" className="display statement-title">
              Not decoration.
              <span>Declaration.</span>
            </h2>
          </div>
          <div>
            <p className="statement-copy">
              Ink Bunny is a private Bradford studio for bold, intentional,
              bespoke work. We build tattoos with the same care as any lasting
              object: slowly, honestly, and with an eye for the years ahead.
            </p>
            <div className="statement-note">
              Established for the permanently curious
            </div>
          </div>
        </div>
      </section>

      <section className="credibility" aria-labelledby="credibility-title">
        <div className="section-shell">
          <div className="credibility-head">
            <div>
              <span className="eyebrow">02 / A standard</span>
              <h2 id="credibility-title" className="display">Award-winning<br />tattoo artistry.</h2>
            </div>
            <p className="credibility-caption">
              Recognition slots reserved for the work, people and independent
              press that make this studio worth the visit.
            </p>
          </div>
          <div className="recognition-list">
            <article className="recognition-item" data-testid="recognition-slot-01">
              <strong>Recognition / 01</strong>
              <h3>Experienced artists</h3>
              <p>Portfolios built on years, not trends.</p>
            </article>
            <article className="recognition-item" data-testid="recognition-slot-02">
              <strong>Recognition / 02</strong>
              <h3>Independent features</h3>
              <p>Reserved space for future press and editorial notes.</p>
            </article>
            <article className="recognition-item" data-testid="recognition-slot-03">
              <strong>Recognition / 03</strong>
              <h3>Hygiene first</h3>
              <p>Sterile, considered and professional at every stage.</p>
            </article>
          </div>
        </div>
      </section>

      <section className="services" id="services" aria-labelledby="services-title">
        <div className="section-shell">
          <div className="services-head">
            <div>
              <span className="eyebrow">03 / The language</span>
              <h2 id="services-title" className="display">Make it yours.</h2>
            </div>
            <p className="services-intro">
              Start with a reference, a feeling or a blank page. The first
              conversation is where the shape appears.
            </p>
          </div>
          <div className="service-list">
            {services.map(([name, index]) => (
              <button className="service-row" type="button" key={name} onClick={onBook} data-testid={`button-service-${index}`}>
                <span>{name}</span>
                <span>{index}</span>
              </button>
            ))}
          </div>
        </div>
      </section>

      <section className="portfolio" id="work" aria-labelledby="work-title">
        <div className="section-shell">
          <div className="portfolio-head">
            <div>
              <span className="eyebrow">04 / The archive</span>
              <h2 id="work-title" className="display">Featured work.</h2>
            </div>
            <p className="portfolio-subtitle">
              Real work arrives here.<br />A living archive, never a catalogue.
            </p>
          </div>
          <div className="filter-bar" aria-label="Portfolio filters">
            {filters.map((filter, index) => (
              <button
                className={`filter-button${index === 0 ? ' is-active' : ''}`}
                type="button"
                key={filter}
                onClick={(event) => {
                  const buttons = event.currentTarget.parentElement?.querySelectorAll('button');
                  buttons?.forEach((button) => button.classList.remove('is-active'));
                  event.currentTarget.classList.add('is-active');
                }}
                data-testid={`button-filter-${filter.toLowerCase().replaceAll(' ', '-')}`}
              >
                {filter}
              </button>
            ))}
          </div>
          <div className="work-grid">
            {work.map(([title, category], index) => (
              <article className="work-tile" key={title} data-testid={`portfolio-placeholder-${index + 1}`}>
                <div className="work-meta">
                  <strong>{title}</strong>
                  <span>{category} · image slot</span>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="artists" id="artists" aria-labelledby="artists-title">
        <div className="section-shell">
          <div className="artists-head">
            <div>
              <span className="eyebrow">05 / The hands</span>
              <h2 id="artists-title" className="display">The artists.</h2>
            </div>
            <p>One studio. Distinct points of view. The right artist changes everything.</p>
          </div>
          <article className="artist-layout">
            <div className="artist-portrait" role="img" aria-label="Artist portrait image slot">
              <span className="artist-index">ARTIST / 01</span>
            </div>
            <div className="artist-detail">
              <div>
                <span className="eyebrow">Resident artist · Bradford</span>
                <h3>Artist<br /><span>profile.</span></h3>
                <p>
                  A future portrait, biography and speciality live here.
                  Every artist at Ink Bunny brings their own visual language
                  to the table — never a house style forced over a person.
                </p>
              </div>
              <a href="mailto:hello@inkbunnytattoo.co.uk" data-testid="link-artist-contact">
                Introduce yourself <Send size={14} />
              </a>
            </div>
          </article>
        </div>
      </section>

      <section className="experience" id="experience" aria-labelledby="experience-title">
        <div className="section-shell">
          <div className="experience-copy">
            <span className="eyebrow">06 / The experience</span>
            <h2 id="experience-title" className="display">
              Come for the <span>ink.</span><br />Stay for the ritual.
            </h2>
            <p>
              A calm room behind a considered door. We talk through the
              reference, place the stencil, check the line, and give the work
              the time it deserves. No conveyor belt. No audience.
            </p>
            <div className="experience-points">
              <span>Private by default</span>
              <span>Sterile environment</span>
              <span>Bradford / UK</span>
            </div>
          </div>
        </div>
      </section>

      <section className="private" aria-labelledby="private-title">
        <div className="section-shell private-layout">
          <div>
            <span className="eyebrow">07 / The promise</span>
            <h2 id="private-title" className="display">
              Your story stays <span>yours.</span>
            </h2>
          </div>
          <div>
            <p className="private-copy">
              Our private, appointment-only studio keeps the room focused on
              you and the work. Your ideas are handled with discretion,
              professionalism and a real respect for the permanence of what
              we make together.
            </p>
            <div className="private-aside">
              <strong>Private & secure</strong>
              <p>Consultations happen one-to-one, with no pressure to book before you are ready.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="cta" aria-labelledby="cta-title">
        <div className="section-shell cta-inner">
          <span className="eyebrow">08 / The next mark</span>
          <h2 id="cta-title" className="display">Ready to get <span>inked?</span></h2>
          <p>
            Get inked or die naked. Send the idea, find the artist, and make
            the appointment that turns it permanent.
          </p>
          <button className="button-primary" type="button" onClick={onBook} data-testid="button-final-book">
            Book your session <ArrowRight size={15} />
          </button>
        </div>
      </section>
    </>
  );
}

export function SiteFooter({ onBook }: StudioSectionsProps) {
  return (
    <footer className="site-footer" id="contact">
      <div className="section-shell">
        <div className="footer-top">
          <div className="footer-brand">
            <a className="wordmark" href="#top" data-testid="link-footer-home">
              <span className="wordmark-mark" aria-hidden="true">IB</span>
              <span>
                <span className="wordmark-text">Ink Bunny</span>
                <span className="wordmark-subtitle">Tattoo Studio · Bradford</span>
              </span>
            </a>
            <p>Bold designs. Darker beauty. Custom tattoos in a private, sterile and creative environment.</p>
          </div>
          <div className="footer-column">
            <strong>Navigate</strong>
            <a href="#about" data-testid="link-footer-about">About</a>
            <a href="#work" data-testid="link-footer-gallery">Gallery</a>
            <a href="#artists" data-testid="link-footer-artists">Artists</a>
            <a href="#experience" data-testid="link-footer-studio">Studio</a>
          </div>
          <div className="footer-column">
            <strong>Find us</strong>
            <span>City Centre, Bradford</span>
            <span>West Yorkshire, UK</span>
            <a href="mailto:hello@inkbunnytattoo.co.uk" data-testid="link-footer-email">hello@inkbunnytattoo.co.uk</a>
            <a href="tel:+441274123456" data-testid="link-footer-phone">01274 123 456</a>
          </div>
          <div className="footer-column">
            <strong>Follow / Hours</strong>
            <a href="https://www.instagram.com" target="_blank" rel="noreferrer" data-testid="link-footer-instagram">
              <Instagram size={14} /> Instagram
            </a>
            <span>Mon – Sat · 11am — 7pm</span>
            <span>Sunday · Closed</span>
            <button className="button-ghost" type="button" onClick={onBook} data-testid="button-footer-book">Book now <MoveDown size={14} /></button>
          </div>
        </div>
        <div className="footer-bottom">
          <span>© 2024 Ink Bunny Tattoo Studio</span>
          <span>Make it meaningful. Make it last.</span>
        </div>
      </div>
    </footer>
  );
}