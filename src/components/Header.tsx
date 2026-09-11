import { useState, useEffect } from 'react';
import logo from '../imports/1280.jpg';

type Page = 'home' | 'about' | 'umrah' | 'iran' | 'iraq' | 'visa' | 'contact';

interface HeaderProps {
  theme: 'dark' | 'light';
  toggleTheme: () => void;
  currentPage: Page;
  onNavigate: (page: Page) => void;
}

const navItems: { label: string; page: Page }[] = [
  { label: 'Home', page: 'home' },
  { label: 'About Us', page: 'about' },
  { label: 'Umrah', page: 'umrah' },
  { label: 'Iran', page: 'iran' },
  { label: 'Iraq', page: 'iraq' },
  { label: 'Visa', page: 'visa' },
  { label: 'Contact', page: 'contact' },
];

export default function Header({ currentPage, onNavigate, theme, toggleTheme }: HeaderProps) {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
      style={{
        background: scrolled
          ? 'rgba(var(--bg-deep-rgb), 0.95)'
          : 'rgba(var(--bg-deep-rgb), 0.80)',
        backdropFilter: 'blur(20px)',
        WebkitBackdropFilter: 'blur(20px)',
        borderBottom: '1px solid rgba(212,175,55,0.3)',
      }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-18 py-2">
          {/* Logo */}
          <button
            onClick={() => onNavigate('home')}
            className="flex items-center gap-3 group"
          >
            <img
              src={logo}
              alt="Baghdadi Travel & Tourism"
              className="h-14 w-auto object-contain drop-shadow-lg transition-transform duration-300 group-hover:scale-105"
            />
            <div className="hidden sm:block">
              <div
                className="font-bold text-lg leading-tight"
                style={{
                  fontFamily: 'Outfit, sans-serif',
                  background: 'linear-gradient(135deg, #D4AF37 0%, #F5E27A 50%, #D4AF37 100%)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text',
                }}
              >
                BAGHDADI
              </div>
              <div className="text-xs tracking-widest text-gray-300 uppercase" style={{ fontFamily: 'Inter, sans-serif', letterSpacing: '0.18em' }}>
                Travel & Tourism
              </div>
            </div>
          </button>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-1">
            {navItems.map(({ label, page }) => (
              <button
                key={page}
                onClick={() => onNavigate(page)}
                className="relative px-4 py-2 text-sm font-medium transition-all duration-200 rounded-sm"
                style={{
                  fontFamily: 'Outfit, sans-serif',
                  color: currentPage === page ? '#D4AF37' : 'rgba(var(--text-main-rgb), 0.85)',
                  fontWeight: currentPage === page ? 700 : 500,
                }}
              >
                {label}
                {currentPage === page && (
                  <span
                    className="absolute bottom-0 left-1/2 -translate-x-1/2 w-5 h-0.5 rounded-full"
                    style={{ background: 'linear-gradient(90deg, #D4AF37, #E5C158)' }}
                  />
                )}
              </button>
            ))}
          </nav>

          
          {/* Theme Toggle */}
          <button
            onClick={toggleTheme}
            className="flex items-center justify-center w-10 h-10 rounded-full transition-all duration-300 ml-2"
            style={{ 
              background: 'rgba(var(--overlay-rgb), 0.05)',
              border: '1px solid rgba(212,175,55,0.3)',
              color: '#D4AF37'
            }}
          >
            {theme === 'dark' ? (
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="5"/><line x1="12" y1="1" x2="12" y2="3"/><line x1="12" y1="21" x2="12" y2="23"/><line x1="4.22" y1="4.22" x2="5.64" y2="5.64"/><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"/><line x1="1" y1="12" x2="3" y2="12"/><line x1="21" y1="12" x2="23" y2="12"/><line x1="4.22" y1="19.78" x2="5.64" y2="18.36"/><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"/></svg>
            ) : (
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/></svg>
            )}
          </button>
          
          {/* Phone Badge */}
          <a
            href="tel:03362321117"
            className="hidden lg:flex items-center gap-2 px-4 py-2 rounded-full text-sm font-semibold transition-all duration-200 hover:scale-105"
            style={{
              background: 'linear-gradient(135deg, #D4AF37, #E5C158)',
              color: 'var(--bg-deep)',
              fontFamily: 'Outfit, sans-serif',
              boxShadow: '0 4px 15px rgba(212,175,55,0.3)',
            }}
          >
            <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
              <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/>
            </svg>
            <span className="hidden xl:inline">Inquiry: </span>03362321117
          </a>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="lg:hidden p-2 rounded-md"
            style={{ color: '#D4AF37' }}
          >
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
              {menuOpen
                ? <><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></>
                : <><line x1="3" y1="6" x2="21" y2="6"/><line x1="3" y1="12" x2="21" y2="12"/><line x1="3" y1="18" x2="21" y2="18"/></>
              }
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div
          className="lg:hidden px-4 pb-4 pt-2 space-y-1"
          style={{ background: 'rgba(var(--bg-deep-rgb), 0.97)', borderTop: '1px solid rgba(212,175,55,0.15)' }}
        >
          {navItems.map(({ label, page }) => (
            <button
              key={page}
              onClick={() => { onNavigate(page); setMenuOpen(false); }}
              className="w-full text-left px-4 py-3 rounded-md text-sm font-medium transition-colors duration-200"
              style={{
                fontFamily: 'Outfit, sans-serif',
                color: currentPage === page ? '#D4AF37' : 'rgba(var(--text-main-rgb), 0.85)',
                background: currentPage === page ? 'rgba(212,175,55,0.08)' : 'transparent',
              }}
            >
              {label}
            </button>
          ))}
          <a
            href="tel:03362321117"
            className="flex items-center gap-2 px-4 py-3 mt-2 rounded-md text-sm font-semibold"
            style={{ background: 'linear-gradient(135deg, #D4AF37, #E5C158)', color: 'var(--bg-deep)', fontFamily: 'Outfit, sans-serif' }}
          >
            <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
              <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/>
            </svg>
            Inquiry: 03362321117
          </a>
        </div>
      )}
    </header>
  );
}
