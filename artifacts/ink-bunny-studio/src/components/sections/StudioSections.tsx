import { useMemo, useState } from 'react';
import { ArrowRight, Instagram, MoveDown, Send } from 'lucide-react';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogTitle,
} from '@/components/ui/dialog';

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
  {
    title: 'Archive / I',
    category: 'Large scale',
    image: '/gallery/Snapchat-1575108497_1789650322708.jpg',
    alt: 'Full back tattoo with an illustrated masked figure and intricate blackwork',
  },
  {
    title: 'Archive / II',
    category: 'Large scale',
    image: '/gallery/Snapchat-147013358_1789650322737.jpg',
    alt: 'Black and red illustrative tattoo featuring a woman with cat ears',
  },
  {
    title: 'Archive / III',
    category: 'Blackwork',
    image: '/gallery/Snapchat-1892393626_1789650322763.jpg',
    alt: 'Black and red gothic lettering tattoo on an arm',
  },
  {
    title: 'Archive / IV',
    category: 'Fine line',
    image: '/gallery/Snapchat-442043306_1789650322784.jpg',
    alt: 'Fine line floral and butterfly tattoo running down an arm',
  },
  {
    title: 'Archive / V',
    category: 'Fine line',
    image: '/gallery/Snapchat-637607730_1789650322804.jpg',
    alt: 'Fine script tattoo reading Trauma is the teacher of wisdom',
  },
  {
    title: 'Archive / VI',
    category: 'Blackwork',
    image: '/gallery/Snapchat-1742372987_1789650322825.jpg',
    alt: 'Detailed blackwork tattoo in a dark illustrative style',
  },
  {
    title: 'Archive / VII',
    category: 'Large scale',
    image: '/gallery/Snapchat-122202254_1789650322850.jpg',
    alt: 'Large illustrative tattoo composition in black and red',
  },
  {
    title: 'Archive / VIII',
    category: 'Blackwork',
    image: '/gallery/Snapchat-998091221_1789650322870.jpg',
    alt: 'Blackwork tattoo with layered ornamental detail',
  },
  {
    title: 'Archive / IX',
    category: 'Fine line',
    image: '/gallery/Snapchat-637486922_1789650322891.jpg',
    alt: 'Fine line tattoo with delicate ornamental details',
  },
  {
    title: 'Archive / X',
    category: 'Blackwork',
    image: '/gallery/Snapchat-922066032_1789650322909.jpg',
    alt: 'Dark illustrative blackwork tattoo',
  },
  {
    title: 'Archive / XI',
    category: 'Large scale',
    image: '/gallery/Snapchat-84197571_1789650322928.jpg',
    alt: 'Large scale tattoo with bold illustrative shading',
  },
  {
    title: 'Archive / XII',
    category: 'Fine line',
    image: '/gallery/Snapchat-326719400_1789650322945.jpg',
    alt: 'Fine line tattoo with intricate black ink detail',
  },
  {
    title: 'Archive / XIII',
    category: 'Blackwork',
    image: '/gallery/Snapchat-1971898785_1789650322962.jpg',
    alt: 'Blackwork tattoo with graphic contrast and ornament',
  },
  {
    title: 'Archive / XIV',
    category: 'Large scale',
    image: '/gallery/Snapchat-172084735_1789650322979.jpg',
    alt: 'Large illustrative tattoo with dark shading',
  },
  {
    title: 'Archive / XV',
    category: 'Fine line',
    image: '/gallery/Snapchat-1685761832_1789650323001.jpg',
    alt: 'Fine line tattoo with delicate illustrative linework',
  },
  {
    title: 'Archive / XVI',
    category: 'Blackwork',
    image: '/gallery/Snapchat-1958953708_1789650323020.jpg',
    alt: 'Blackwork tattoo with gothic detail',
  },
  {
    title: 'Archive / XVII',
    category: 'Large scale',
    image: '/gallery/Snapchat-1193840962_1789650323037.jpg',
    alt: 'Large tattoo composition with layered black and red details',
  },
  {
    title: 'Archive / XVIII',
    category: 'Fine line',
    image: '/gallery/Snapchat-668687823_1789650323055.jpg',
    alt: 'Fine line tattoo with detailed ornamental work',
  },
  {
    title: 'Archive / XIX',
    category: 'Blackwork',
    image: '/gallery/Snapchat-428460072_1789650323074.jpg',
    alt: 'Blackwork tattoo with bold illustrated forms',
  },
  {
    title: 'Archive / XX',
    category: 'Large scale',
    image: '/gallery/Snapchat-2078514765_1789650323099.jpg',
    alt: 'Large scale illustrative tattoo in the Ink Bunny archive',
  },
  {
    title: 'Archive / XXI',
    category: 'Blackwork',
    image: '/gallery/Snapchat-1863099206_1789650666779.jpg',
    alt: 'Detailed grim reaper tattoo wrapping around an upper arm',
  },
  {
    title: 'Archive / XXII',
    category: 'Fine line',
    image: '/gallery/Snapchat-1857850028_1789650666876.jpg',
    alt: 'Detailed dragon and rune tattoo running down a forearm',
  },
  {
    title: 'Archive / XXIII',
    category: 'Fine line',
    image: '/gallery/Snapchat-217973865_1789650666906.jpg',
    alt: 'Blue butterfly tattoo across the hand and wrist',
  },
  {
    title: 'Archive / XXIV',
    category: 'Large scale',
    image: '/gallery/Snapchat-1526309120_1789650666938.jpg',
    alt: 'Large compass and map-inspired chest tattoo',
  },
  {
    title: 'Archive / XXV',
    category: 'Blackwork',
    image: '/gallery/Snapchat-1782478624_1789650666963.jpg',
    alt: 'Shaded rosary and cross tattoo across the back of a hand',
  },
  {
    title: 'Archive / XXVI',
    category: 'Large scale',
    image: '/gallery/Snapchat-1252865397_1789650666986.jpg',
    alt: 'Large illustrative tattoo with layered blackwork shading',
  },
  {
    title: 'Archive / XXVII',
    category: 'Fine line',
    image: '/gallery/Snapchat-154655302_1789650667012.jpg',
    alt: 'Fine line botanical tattoo with small ornamental details',
  },
  {
    title: 'Archive / XXVIII',
    category: 'Blackwork',
    image: '/gallery/Snapchat-923205011_1789650667038.jpg',
    alt: 'Blackwork tattoo with a dark illustrative composition',
  },
  {
    title: 'Archive / XXIX',
    category: 'Large scale',
    image: '/gallery/Snapchat-2055365135_1789650667066.jpg',
    alt: 'Large tattoo piece with graphic black ink detail',
  },
];

const filters = ['All work', 'Blackwork', 'Fine line', 'Large scale'];

export function StudioSections({ onBook }: StudioSectionsProps) {
  const [activeFilter, setActiveFilter] = useState('All work');
  const [selectedWork, setSelectedWork] = useState<(typeof work)[number] | null>(null);
  const visibleWork = useMemo(
    () =>
      activeFilter === 'All work'
        ? work
        : work.filter((piece) => piece.category === activeFilter),
    [activeFilter],
  );

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
              Tattooing and piercing are more than just a service. They're an
              experience built around creativity, individuality, and
              self-expression. The space is designed to feel welcoming,
              inclusive, and genuinely comfortable for everyone.
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
              Whether it's your first tattoo or your tenth, every client is
              treated with the same care, respect, and attention to detail. Our
              artists take pride in precision craftsmanship and bringing your
              ideas to life with purpose and passion.
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
                className={`filter-button${activeFilter === filter ? ' is-active' : ''}`}
                type="button"
                key={filter}
                onClick={() => setActiveFilter(filter)}
                data-testid={`button-filter-${filter.toLowerCase().replaceAll(' ', '-')}`}
              >
                {filter}
              </button>
            ))}
          </div>
          <div className="work-grid">
            {visibleWork.map((piece, index) => (
              <button
                className="work-tile"
                key={piece.image}
                type="button"
                onClick={() => setSelectedWork(piece)}
                aria-label={`Open ${piece.title}: ${piece.category}`}
                data-testid={`portfolio-image-${index + 1}`}
              >
                <img className="work-image" src={piece.image} alt={piece.alt} loading={index > 3 ? 'lazy' : 'eager'} />
                <div className="work-meta">
                  <strong>{piece.title}</strong>
                  <span>{piece.category}</span>
                </div>
              </button>
            ))}
          </div>
          <Dialog open={selectedWork !== null} onOpenChange={(open) => !open && setSelectedWork(null)}>
            <DialogContent className="gallery-lightbox">
              <DialogTitle className="sr-only">
                {selectedWork?.title ?? 'Gallery image'}
              </DialogTitle>
              <DialogDescription className="sr-only">
                Full-size tattoo gallery image. Close this viewer to return to the archive.
              </DialogDescription>
              {selectedWork && (
                <img
                  className="gallery-lightbox-image"
                  src={selectedWork.image}
                  alt={selectedWork.alt}
                />
              )}
            </DialogContent>
          </Dialog>
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
            <span>52 Godwin Street</span>
            <span>Bradford, BD1 2SD</span>
            <a href="mailto:hello@inkbunnytattoo.co.uk" data-testid="link-footer-email">hello@inkbunnytattoo.co.uk</a>
            <a href="tel:+447462243700" data-testid="link-footer-phone">07462243700</a>
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