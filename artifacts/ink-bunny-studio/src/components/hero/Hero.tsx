import { lazy, Suspense, useEffect, useRef } from 'react';
import { ArrowDownRight, ArrowRight, CalendarDays } from 'lucide-react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

const BunnyScene = lazy(() =>
  import('@/components/3d/BunnyScene').then(({ BunnyScene: Scene }) => ({
    default: Scene,
  })),
);

type HeroProps = {
  onBook: () => void;
};

export function Hero({ onBook }: HeroProps) {
  const heroRef = useRef<HTMLElement>(null);
  const artRef = useRef<HTMLImageElement>(null);

  useEffect(() => {
    if (!heroRef.current || !artRef.current || window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      return;
    }

    gsap.registerPlugin(ScrollTrigger);
    const context = gsap.context(() => {
      gsap.to(artRef.current, {
        yPercent: 4,
        scale: 1.04,
        ease: 'none',
        scrollTrigger: {
          trigger: heroRef.current,
          start: 'top top',
          end: 'bottom top',
          scrub: 0.8,
        },
      });
    }, heroRef);

    return () => context.revert();
  }, []);

  return (
    <section ref={heroRef} className="hero" id="top" aria-labelledby="hero-title">
      <picture>
        <source media="(max-width: 600px)" srcSet="/ink-bunny-mobile-hero.png" />
        <img
          ref={artRef}
          className="hero-art"
          src="/ink-bunny-reference.png"
          alt="Ink Bunny tattoo studio artwork: a tattoo artist working beneath the Ink Bunny neon sign"
        />
      </picture>
      <div className="hero-scrim" aria-hidden="true" />
      <Suspense fallback={null}>
        <BunnyScene modelSrc="/models/bunny.glb" />
      </Suspense>
      <h1 id="hero-title" className="sr-only">
        Get Inked or Die Naked.
      </h1>
      <div className="hero-hotspots" aria-label="Hero actions">
        <button className="hero-hotspot hero-hotspot-book" type="button" onClick={onBook} data-testid="button-hero-book">
          Book a consultation
        </button>
        <a className="hero-hotspot hero-hotspot-work" href="#work" data-testid="link-hero-work">
          View our work
        </a>
      </div>
      <div className="hero-content reveal">
        <div className="hero-accessory">Private studio · Bradford, UK</div>
        <h2 className="display">
          Get Inked or
          <span>
            <span className="hero-white-word">Die </span>
            Naked.
          </span>
        </h2>
        <p className="hero-summary">
          Bespoke tattoo work for people who would rather wear a story than
          explain one. Considered design, steady hands, no shortcuts.
        </p>
        <div className="hero-actions">
          <button className="button-primary" type="button" onClick={onBook} data-testid="button-hero-book-mobile">
            <CalendarDays size={15} />
            Book a consultation
          </button>
          <a className="button-ghost" href="#work" data-testid="link-hero-work-mobile">
            View our work <ArrowRight size={15} />
          </a>
        </div>
      </div>
      <a className="scroll-cue" href="#about" data-testid="link-scroll-about">
        Enter the studio <ArrowDownRight size={13} />
      </a>
    </section>
  );
}