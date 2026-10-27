import { useState } from 'react';

const links = [
  { label: 'Trabajos', href: '#trabajos' },
  { label: 'Servicios', href: '#servicios' },
  { label: 'Estudio', href: '#estudio' },
  { label: 'Hablemos ↗', href: '#contacto', outlined: true },
];

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => setMenuOpen(false);

  return (
    <header className="site-header">
      <a className="logo" href="#inicio" aria-label="NOMA inicio" onClick={closeMenu}>
        NOMA<span className="logo-dot">.</span>
      </a>

      <nav id="main-navigation" className={`nav${menuOpen ? ' active' : ''}`} aria-label="Navegación principal">
        {links.map(({ label, href, outlined }) => (
          <a
            key={href}
            className={outlined ? 'outline' : undefined}
            href={href}
            onClick={closeMenu}
          >
            {label}
          </a>
        ))}
      </nav>

      <button
        className="mobile-menu"
        type="button"
        onClick={() => setMenuOpen((open) => !open)}
        aria-controls="main-navigation"
        aria-expanded={menuOpen}
        aria-label={menuOpen ? 'Cerrar menú' : 'Abrir menú'}
      >
        {menuOpen ? '✕' : '☰'}
      </button>
    </header>
  );
}
