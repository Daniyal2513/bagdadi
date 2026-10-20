import logo from '../assets/1280.png';

type Page = 'home' | 'about' | 'umrah' | 'iran' | 'iraq' | 'visa' | 'contact';

interface FooterProps {
  onNavigate: (page: Page) => void;
}

const quickLinks: { label: string; page: Page }[] = [
  { label: 'Home', page: 'home' },
  { label: 'About Us', page: 'about' },
  { label: 'Umrah', page: 'umrah' },
  { label: 'Iran', page: 'iran' },
  { label: 'Iraq', page: 'iraq' },
  { label: 'Visa', page: 'visa' },
  { label: 'Contact', page: 'contact' },
];

export default function Footer({ onNavigate }: FooterProps) {
  return (
    <footer style={{ background: 'var(--bg-darker)', borderTop: '1px solid rgba(212,175,55,0.2)' }}>
      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand Column */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-3 mb-5">
              <img
                src={logo}
                alt="Baghdadi Travel & Tourism Logo"
                className="h-16 w-auto object-contain"
              />
              <div>
                <div
                  className="font-bold text-xl"
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
                <div className="text-xs tracking-widest text-gray-400 uppercase" style={{ letterSpacing: '0.18em' }}>
                  Travel & Tourism
                </div>
              </div>
            </div>
            <p className="text-sm leading-relaxed mb-6" style={{ color: 'rgba(var(--text-main-rgb), 0.65)', maxWidth: '380px' }}>
              Baghdadi Travel & Tourism is committed to providing exceptional travel experiences for Umrah, Hajj, Ziyarat, and international destinations like Azerbaijan. With years of expertise, we ensure every journey is comfortable, safe, and memorable.
            </p>
            {/* Social Icons */}
            <div className="flex gap-3">
              <a
                href="#"
                className="w-10 h-10 rounded-full flex items-center justify-center transition-all duration-200 hover:scale-110"
                style={{ border: '1.5px solid rgba(212,175,55,0.4)', color: '#D4AF37' }}
                aria-label="Facebook"
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"/>
                </svg>
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full flex items-center justify-center transition-all duration-200 hover:scale-110"
                style={{ border: '1.5px solid rgba(212,175,55,0.4)', color: '#D4AF37' }}
                aria-label="Instagram"
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
                  <circle cx="12" cy="12" r="4"/>
                  <circle cx="17.5" cy="6.5" r="0.5" fill="currentColor" stroke="none"/>
                </svg>
              </a>
              <a
                href="https://wa.me/923362321117"
                className="w-10 h-10 rounded-full flex items-center justify-center transition-all duration-200 hover:scale-110"
                style={{ border: '1.5px solid rgba(212,175,55,0.4)', color: '#D4AF37' }}
                aria-label="WhatsApp"
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                </svg>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4
              className="text-base font-bold mb-5 pb-2"
              style={{
                fontFamily: 'Outfit, sans-serif',
                color: '#D4AF37',
                borderBottom: '1px solid rgba(212,175,55,0.2)',
              }}
            >
              Quick Links
            </h4>
            <ul className="space-y-3">
              {quickLinks.map(({ label, page }) => (
                <li key={page}>
                  <button
                    onClick={() => onNavigate(page)}
                    className="flex items-center gap-2 text-sm transition-colors duration-200 hover:text-yellow-400"
                    style={{ color: 'rgba(var(--text-main-rgb), 0.65)', fontFamily: 'Inter, sans-serif' }}
                  >
                    <svg width="10" height="10" viewBox="0 0 24 24" fill="currentColor" style={{ color: '#D4AF37' }}>
                      <path d="M5 12h14M12 5l7 7-7 7"/>
                    </svg>
                    {label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4
              className="text-base font-bold mb-5 pb-2"
              style={{
                fontFamily: 'Outfit, sans-serif',
                color: '#D4AF37',
                borderBottom: '1px solid rgba(212,175,55,0.2)',
              }}
            >
              Contact Info
            </h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <svg className="mt-0.5 shrink-0" width="15" height="15" viewBox="0 0 24 24" fill="currentColor" style={{ color: '#D4AF37' }}>
                  <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/>
                </svg>
                <div>
                  <a href="tel:03362321117" className="block text-sm hover:text-yellow-400 transition-colors" style={{ color: 'rgba(var(--text-main-rgb), 0.7)' }}>03362321117</a>
                  <a href="tel:03219262931" className="block text-sm hover:text-yellow-400 transition-colors" style={{ color: 'rgba(var(--text-main-rgb), 0.7)' }}>03219262931</a>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <svg className="mt-0.5 shrink-0" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" style={{ color: '#D4AF37' }}>
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/>
                </svg>
                <div>
                  <a href="mailto:info@baghdaditravels.com" className="block text-sm hover:text-yellow-400 transition-colors" style={{ color: 'rgba(var(--text-main-rgb), 0.7)' }}>info@baghdaditravels.com</a>
                  <a href="mailto:baghdaditravels@gmail.com" className="block text-sm hover:text-yellow-400 transition-colors" style={{ color: 'rgba(var(--text-main-rgb), 0.7)' }}>baghdaditravels@gmail.com</a>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <svg className="mt-0.5 shrink-0" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" style={{ color: '#D4AF37' }}>
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/>
                </svg>
                <p className="text-sm" style={{ color: 'rgba(var(--text-main-rgb), 0.7)' }}>
                  Suite #2, Al Haram Tower No.1, Near Bahra-E-Shariat Masjid, Bahadurabad
                </p>
              </li>
            </ul>
            <button
              onClick={() => onNavigate('contact')}
              className="mt-5 w-full py-2.5 rounded-md text-sm font-semibold btn-outline-gold"
              style={{ fontFamily: 'Outfit, sans-serif' }}
            >
              Get In Touch
            </button>
          </div>
        </div>
      </div>

      {/* Gold Divider */}
      <div className="gold-divider" />

      {/* Copyright Bar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5 flex flex-col sm:flex-row items-center justify-between gap-3">
        <p className="text-xs" style={{ color: 'rgba(var(--text-main-rgb), 0.4)', fontFamily: 'Inter, sans-serif' }}>
          Copyright © 2025 Baghdaditravels.com. All Rights Reserved.
        </p>
        <p className="text-xs" style={{ color: 'rgba(212,175,55,0.6)', fontFamily: 'Inter, sans-serif' }}>
          GL-3079 (Pvt.) Ltd.
        </p>
      </div>
    </footer>
  );
}
