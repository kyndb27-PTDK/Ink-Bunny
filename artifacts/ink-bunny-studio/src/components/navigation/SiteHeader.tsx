import { X } from 'lucide-react';
import { useState } from 'react';

type SiteHeaderProps = {
  onBook: () => void;
};

const links = [
  { href: '#about', label: 'About' },
  { href: '#artists', label: 'Artists' },
  { href: '#work', label: 'Gallery' },
  { href: '#experience', label: 'Studio' },
];

function RabbitSkullIcon() {
  return (
    <svg
      className="rabbit-skull-icon"
      viewBox="0 0 32 32"
      role="img"
      aria-label="Rabbit skull"
    >
      <path
        d="M11.5 11.6C9.3 9.2 6.3 6.2 6.7 2.7c.1-1.1 1.1-1.5 1.9-.6 2 2.2 3.3 4.8 4 7.3M20.5 11.6c2.2-2.4 5.2-5.4 4.8-8.9-.1-1.1-1.1-1.5-1.9-.6-2 2.2-3.3 4.8-4 7.3"
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.6"
      />
      <path
        d="M16 8.8c-4.2 0-7.1 2.8-7.1 6.6 0 2.1 1.1 3.3 1.7 4.7.5 1.1.5 3.1 1.3 4.5.9 1.5 2.4 2.3 4.1 2.3s3.2-.8 4.1-2.3c.8-1.4.8-3.4 1.3-4.5.6-1.4 1.7-2.6 1.7-4.7 0-3.8-2.9-6.6-7.1-6.6Z"
        fill="none"
        stroke="currentColor"
        strokeLinejoin="round"
        strokeWidth="1.6"
      />
      <path
        d="M11.5 15.4c.8-1.2 2.2-1.2 3 0-.3 1.6-2.7 1.6-3 0ZM20.5 15.4c-.8-1.2-2.2-1.2-3 0 .3 1.6 2.7 1.6 3 0Z"
        fill="#0b070d"
        stroke="currentColor"
        strokeWidth="1"
      />
      <path
        d="m16 17.8-1 1.5h2l-1-1.5ZM13.3 22.1h5.4M13.8 23.9v1.3M16 23.9v1.7M18.2 23.9v1.3"
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.2"
      />
    </svg>
  );
}

export function SiteHeader({ onBook }: SiteHeaderProps) {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => setMenuOpen(false);

  return (
    <header className="site-header">
      <div className="header-inner">
        <a
          className="wordmark"
          href="#top"
          onClick={closeMenu}
          data-testid="link-home"
          aria-label="Ink Bunny home"
        >
          <span className="wordmark-mark" aria-hidden="true">IB</span>
          <span>
            <span className="wordmark-text">Ink Bunny</span>
            <span className="wordmark-subtitle">Tattoo Studio · Bradford</span>
          </span>
        </a>

        <nav className={`header-nav${menuOpen ? ' is-open' : ''}`} aria-label="Primary navigation">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={closeMenu}
              data-testid={`link-nav-${link.label.toLowerCase()}`}
            >
              {link.label}
            </a>
          ))}
        </nav>

        <button
          className="button-primary header-book"
          type="button"
          onClick={onBook}
          data-testid="button-header-book"
        >
          Book now
        </button>

        <button
          className="mobile-menu"
          type="button"
          onClick={() => setMenuOpen((open) => !open)}
          aria-expanded={menuOpen}
          aria-label={menuOpen ? 'Close navigation' : 'Open navigation'}
          data-testid="button-mobile-menu"
        >
          {menuOpen ? <X size={17} /> : <RabbitSkullIcon />}
        </button>
      </div>
    </header>
  );
}