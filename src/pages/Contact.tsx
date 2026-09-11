import { useState } from 'react';

type Page = 'home' | 'about' | 'umrah' | 'iran' | 'iraq' | 'visa' | 'contact';

interface ContactProps {
  onNavigate: (page: Page) => void;
}

const contactCards = [
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
        <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/>
      </svg>
    ),
    title: 'Primary Phone',
    lines: ['03362321117', '03362321117'],
    href: 'tel:03362321117',
  },
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
        <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/>
      </svg>
    ),
    title: 'Alternate Phone',
    lines: ['03219262931', '03352533127'],
    href: 'tel:03219262931',
  },
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/>
      </svg>
    ),
    title: 'Email Now',
    lines: ['info@baghdaditravels.com', 'baghdaditravels@gmail.com'],
    href: 'mailto:info@baghdaditravels.com',
  },
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z"/><circle cx="12" cy="10" r="3"/>
      </svg>
    ),
    title: 'Location',
    lines: ['Suite #2, Al Haram Tower No.1', 'Near Bahra-E-Shariat Masjid, Bahadurabad'],
    href: '#',
  },
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/>
      </svg>
    ),
    title: 'Opening Hours',
    lines: ['8:00 AM – 10:00 PM', 'Friday: Closed'],
    href: '#',
  },
];

export default function Contact({ onNavigate }: ContactProps) {
  const [form, setForm] = useState({ name: '', phone: '', email: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = () => {
    if (form.name && form.phone && form.email && form.message) {
      setSubmitted(true);
    }
  };

  return (
    <div style={{ paddingTop: '72px' }}>
      {/* Announcement Bar */}
      <div
        className="announcement-bar py-2 px-4 text-center text-xs"
        style={{ color: 'rgba(var(--text-main-rgb), 0.75)' }}
      >
        <span style={{ color: '#D4AF37' }}>Email: info@Baghdaditravels.com</span>
        {' | '}
        <span className="font-semibold">50% Off Your Next Trip. Hurry Up For your new Tour!</span>
      </div>

      {/* Hero */}
      <div className="relative py-16 overflow-hidden" style={{ background: 'var(--bg-mid)' }}>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-2 text-xs mb-4" style={{ color: 'rgba(var(--text-main-rgb), 0.5)' }}>
            <button onClick={() => onNavigate('home')} className="hover:text-yellow-400 transition-colors">Home</button>
            <span>›</span>
            <span style={{ color: '#D4AF37' }}>Contact</span>
          </div>
          <h1 className="text-3xl sm:text-5xl font-black" style={{ fontFamily: 'Outfit, sans-serif', color: 'var(--text-main)' }}>
            Contact <span className="gold-text">Us</span>
          </h1>
          <p className="mt-3 text-sm" style={{ color: 'rgba(var(--text-main-rgb), 0.65)', maxWidth: '500px' }}>
            Get in touch with our team for inquiries, bookings, or any assistance you need for your journey.
          </p>
        </div>
      </div>

      {/* Contact Cards */}
      <section style={{ background: 'var(--bg-deep)' }} className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-5 mb-16">
            {contactCards.map((card, i) => (
              <a
                key={card.title}
                href={card.href}
                className="card-hover gold-border-hover rounded-xl p-6 text-center block no-underline fade-up"
                style={{ background: 'var(--bg-mid)', animationDelay: `${i * 0.1}s` }}
              >
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center mx-auto mb-4"
                  style={{ background: 'rgba(212,175,55,0.1)', color: '#D4AF37' }}
                >
                  {card.icon}
                </div>
                <h4 className="text-sm font-bold mb-2" style={{ fontFamily: 'Outfit, sans-serif', color: 'var(--text-main)' }}>{card.title}</h4>
                {card.lines.map((line, j) => (
                  <p key={j} className="text-xs leading-relaxed" style={{ color: 'rgba(var(--text-main-rgb), 0.6)' }}>{line}</p>
                ))}
              </a>
            ))}
          </div>

          {/* Contact Form */}
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            {/* Form */}
            <div
              className="p-8 rounded-2xl"
              style={{ background: 'var(--bg-mid)', border: '1px solid rgba(212,175,55,0.2)' }}
            >
              <h3 className="text-2xl font-bold mb-2" style={{ fontFamily: 'Outfit, sans-serif', color: 'var(--text-main)' }}>
                Reach Us Anytime
              </h3>
              <p className="text-sm mb-6" style={{ color: 'rgba(var(--text-main-rgb), 0.55)' }}>
                Fill out the form below and our team will get back to you within 24 hours.
              </p>

              {submitted ? (
                <div
                  className="text-center py-12"
                  style={{ background: 'rgba(212,175,55,0.06)', border: '1px solid rgba(212,175,55,0.2)', borderRadius: '12px' }}
                >
                  <svg width="48" height="48" viewBox="0 0 24 24" fill="currentColor" className="mx-auto mb-4" style={{ color: '#D4AF37' }}>
                    <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/>
                  </svg>
                  <h4 className="text-xl font-bold mb-2" style={{ fontFamily: 'Outfit, sans-serif', color: 'var(--text-main)' }}>Message Sent!</h4>
                  <p className="text-sm" style={{ color: 'rgba(var(--text-main-rgb), 0.6)' }}>Thank you for reaching out. We will contact you shortly.</p>
                </div>
              ) : (
                <div className="space-y-4">
                  <input
                    type="text"
                    placeholder="Name*"
                    value={form.name}
                    onChange={e => setForm(p => ({ ...p, name: e.target.value }))}
                    className="luxury-input w-full px-4 py-3 rounded-md text-sm"
                  />
                  <input
                    type="tel"
                    placeholder="Phone*"
                    value={form.phone}
                    onChange={e => setForm(p => ({ ...p, phone: e.target.value }))}
                    className="luxury-input w-full px-4 py-3 rounded-md text-sm"
                  />
                  <input
                    type="email"
                    placeholder="Email*"
                    value={form.email}
                    onChange={e => setForm(p => ({ ...p, email: e.target.value }))}
                    className="luxury-input w-full px-4 py-3 rounded-md text-sm"
                  />
                  <textarea
                    rows={5}
                    placeholder="Write Your Message*"
                    value={form.message}
                    onChange={e => setForm(p => ({ ...p, message: e.target.value }))}
                    className="luxury-input w-full px-4 py-3 rounded-md text-sm resize-none"
                  />
                  <button
                    onClick={handleSubmit}
                    className="btn-gold w-full py-3.5 rounded-md text-sm font-bold"
                  >
                    Submit Now
                  </button>
                </div>
              )}
            </div>

            {/* Info side */}
            <div>
              <h3 className="text-2xl font-bold mb-6" style={{ fontFamily: 'Outfit, sans-serif', color: 'var(--text-main)' }}>
                Visit Our Office
              </h3>
              <div
                className="p-6 rounded-xl mb-6"
                style={{ background: 'var(--bg-mid)', border: '1px solid rgba(212,175,55,0.15)' }}
              >
                <p className="text-sm leading-relaxed mb-4" style={{ color: 'rgba(var(--text-main-rgb), 0.7)' }}>
                  Suite #2, Al Haram Tower No.1,<br />
                  Near Bahra-E-Shariat Masjid,<br />
                  Bahadurabad, Karachi, Pakistan
                </p>
                <div className="gold-divider mb-4" />
                <div className="space-y-2">
                  <p className="text-xs" style={{ color: 'rgba(var(--text-main-rgb), 0.55)' }}>
                    <span className="font-semibold" style={{ color: '#D4AF37' }}>Hours:</span> Mon–Thu, Sat–Sun: 8:00 AM – 10:00 PM
                  </p>
                  <p className="text-xs" style={{ color: 'rgba(var(--text-main-rgb), 0.55)' }}>
                    <span className="font-semibold" style={{ color: '#D4AF37' }}>Friday:</span> Closed
                  </p>
                </div>
              </div>

              {/* Quick Contact Buttons */}
              <div className="space-y-3">
                <a
                  href="tel:03362321117"
                  className="flex items-center gap-3 p-4 rounded-xl transition-all duration-200 hover:opacity-90"
                  style={{ background: 'linear-gradient(135deg, #D4AF37, #E5C158)' }}
                >
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="#081C15">
                    <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/>
                  </svg>
                  <div>
                    <p className="text-xs font-semibold" style={{ color: 'var(--bg-deep)', opacity: 0.7 }}>Call Us</p>
                    <p className="text-sm font-bold" style={{ color: 'var(--bg-deep)', fontFamily: 'Outfit, sans-serif' }}>03362321117</p>
                  </div>
                </a>
                <a
                  href="https://wa.me/923362321117"
                  className="flex items-center gap-3 p-4 rounded-xl transition-all duration-200"
                  style={{ background: 'var(--bg-mid)', border: '1.5px solid rgba(212,175,55,0.3)' }}
                >
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="#D4AF37">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                  </svg>
                  <div>
                    <p className="text-xs font-semibold" style={{ color: 'rgba(var(--text-main-rgb), 0.5)' }}>WhatsApp</p>
                    <p className="text-sm font-bold" style={{ color: '#D4AF37', fontFamily: 'Outfit, sans-serif' }}>Chat With Us</p>
                  </div>
                </a>
                <a
                  href="mailto:info@baghdaditravels.com"
                  className="flex items-center gap-3 p-4 rounded-xl transition-all duration-200"
                  style={{ background: 'var(--bg-mid)', border: '1.5px solid rgba(212,175,55,0.3)' }}
                >
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#D4AF37" strokeWidth="2">
                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/>
                  </svg>
                  <div>
                    <p className="text-xs font-semibold" style={{ color: 'rgba(var(--text-main-rgb), 0.5)' }}>Email Us</p>
                    <p className="text-sm font-bold" style={{ color: '#D4AF37', fontFamily: 'Outfit, sans-serif' }}>info@baghdaditravels.com</p>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
