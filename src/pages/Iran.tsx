type Page = 'home' | 'about' | 'umrah' | 'iran' | 'iraq' | 'visa' | 'contact';

interface IranProps {
  onNavigate: (page: Page) => void;
}

export default function Iran({ onNavigate }: IranProps) {
  return (
    <div style={{ paddingTop: '72px' }}>
      {/* Hero */}
      <div className="relative py-20 overflow-hidden" style={{ background: 'var(--bg-mid)' }}>
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: 'url(https://images.unsplash.com/photo-1638902061166-72cc9d6b1f98?w=1400&h=500&fit=crop&auto=format)',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            opacity: 0.15,
          }}
        />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-2 text-xs mb-4" style={{ color: 'rgba(var(--text-main-rgb), 0.5)' }}>
            <button onClick={() => onNavigate('home')} className="hover:text-yellow-400 transition-colors">Home</button>
            <span>›</span><span>Tours</span><span>›</span>
            <span style={{ color: '#D4AF37' }}>Zyarat</span>
          </div>
          <div
            className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-semibold mb-4"
            style={{ background: 'rgba(212,175,55,0.12)', border: '1px solid rgba(212,175,55,0.3)', color: '#D4AF37', fontFamily: 'Outfit, sans-serif' }}
          >
            Tour Type: Zyarat
          </div>
          <h1 className="text-3xl sm:text-5xl font-black" style={{ fontFamily: 'Outfit, sans-serif', color: 'var(--text-main)' }}>
            Iran <span className="gold-text">Tours</span>
          </h1>
          <p className="mt-3 text-sm" style={{ color: 'rgba(var(--text-main-rgb), 0.65)', maxWidth: '500px' }}>
            Discover the sacred shrines and breathtaking landscapes of Iran with our curated Ziyarat tour packages.
          </p>
        </div>
      </div>

      {/* Package */}
      <section style={{ background: 'var(--bg-deep)' }} className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            {/* Package Card */}
            <div
              className="card-hover gold-border-hover rounded-2xl overflow-hidden"
              style={{ background: 'var(--bg-mid)' }}
            >
              <div className="relative h-64 overflow-hidden bg-green-950">
                <img
                  src="https://images.unsplash.com/photo-1638902061166-72cc9d6b1f98?w=800&h=500&fit=crop&auto=format"
                  alt="Winter in Iran"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0" style={{ background: 'linear-gradient(to top, rgba(var(--bg-mid-rgb), 0.9) 0%, transparent 50%)' }} />
                <div className="absolute top-4 left-4">
                  <span
                    className="px-3 py-1 rounded-full text-xs font-bold"
                    style={{ background: 'rgba(212,175,55,0.15)', border: '1px solid rgba(212,175,55,0.4)', color: '#D4AF37', fontFamily: 'Outfit, sans-serif' }}
                  >
                    Ziyarat
                  </span>
                </div>
                <div className="absolute bottom-4 left-4">
                  <span
                    className="px-3 py-1 rounded-full text-xs font-bold"
                    style={{ background: 'linear-gradient(135deg, #D4AF37, #E5C158)', color: 'var(--bg-deep)', fontFamily: 'Outfit, sans-serif' }}
                  >
                    Winter Season
                  </span>
                </div>
              </div>

              <div className="p-7">
                <div className="flex items-center gap-1 mb-2">
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#D4AF37" strokeWidth="2">
                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z"/><circle cx="12" cy="10" r="3"/>
                  </svg>
                  <span className="text-xs" style={{ color: 'rgba(212,175,55,0.8)' }}>Iran</span>
                </div>
                <h2 className="text-2xl font-black mb-2" style={{ fontFamily: 'Outfit, sans-serif', color: 'var(--text-main)' }}>
                  Winter's In Iran
                </h2>

                {/* Includes */}
                <div className="grid grid-cols-2 gap-2 my-5">
                  {['Return Air Ticket', 'Visa Included', 'Hotel Accommodation', 'Ground Transport', '03 Meals Daily', 'Guide Services'].map(inc => (
                    <div key={inc} className="flex items-center gap-2">
                      <svg width="11" height="11" viewBox="0 0 24 24" fill="currentColor" style={{ color: '#D4AF37', flexShrink: 0 }}>
                        <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/>
                      </svg>
                      <span className="text-xs" style={{ color: 'rgba(var(--text-main-rgb), 0.65)' }}>{inc}</span>
                    </div>
                  ))}
                </div>

                <div className="gold-divider mb-5" />
                <div className="flex items-end justify-between">
                  <div>
                    <p className="text-xs mb-0.5" style={{ color: 'rgba(var(--text-main-rgb), 0.4)' }}>Starting From</p>
                    <p
                      className="text-3xl font-black"
                      style={{
                        fontFamily: 'Outfit, sans-serif',
                        background: 'linear-gradient(135deg, #D4AF37, #E5C158)',
                        WebkitBackgroundClip: 'text',
                        WebkitTextFillColor: 'transparent',
                        backgroundClip: 'text',
                      }}
                    >
                      ₨225,000
                    </p>
                    <p className="text-xs" style={{ color: 'rgba(var(--text-main-rgb), 0.4)' }}>TAXES INCL/PERS</p>
                  </div>
                  <button onClick={() => onNavigate('contact')} className="btn-gold px-6 py-2.5 rounded-md text-sm font-bold">
                    Book a Trip
                  </button>
                </div>
              </div>
            </div>

            {/* Info Panel */}
            <div>
              <h3 className="text-2xl font-bold mb-5" style={{ fontFamily: 'Outfit, sans-serif', color: 'var(--text-main)' }}>
                About This Tour
              </h3>
              <p className="text-sm leading-relaxed mb-6" style={{ color: 'rgba(var(--text-main-rgb), 0.65)' }}>
                Experience the spiritual serenity and cultural richness of Iran during the winter season. Visit the revered shrines, majestic mosques, and scenic mountain landscapes with our expertly guided Ziyarat tour.
              </p>

              <div className="space-y-4 mb-8">
                {[
                  { icon: '🕌', title: 'Sacred Shrines', desc: 'Visit the most revered Ziyarat sites across Iran' },
                  { icon: '🏔️', title: 'Winter Scenery', desc: 'Breathtaking snow-covered landscapes and mountain views' },
                  { icon: '🚌', title: 'Comfortable Transport', desc: 'Air-conditioned coaches for all transfers' },
                  { icon: '🏨', title: 'Quality Hotels', desc: 'Carefully selected accommodations throughout the tour' },
                ].map(item => (
                  <div
                    key={item.title}
                    className="flex items-start gap-4 p-4 rounded-xl"
                    style={{ background: 'var(--bg-mid)', border: '1px solid rgba(212,175,55,0.15)' }}
                  >
                    <span className="text-2xl">{item.icon}</span>
                    <div>
                      <h4 className="text-sm font-bold mb-1" style={{ fontFamily: 'Outfit, sans-serif', color: 'var(--text-main)' }}>{item.title}</h4>
                      <p className="text-xs" style={{ color: 'rgba(var(--text-main-rgb), 0.55)' }}>{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>

              <div
                className="p-5 rounded-xl"
                style={{ background: 'rgba(212,175,55,0.08)', border: '1px solid rgba(212,175,55,0.25)' }}
              >
                <p className="text-sm font-semibold mb-2" style={{ color: '#D4AF37', fontFamily: 'Outfit, sans-serif' }}>Need More Information?</p>
                <p className="text-xs mb-4" style={{ color: 'rgba(var(--text-main-rgb), 0.65)' }}>
                  Contact our team for detailed itinerary, departure dates, and customization options.
                </p>
                <a
                  href="tel:03362321117"
                  className="flex items-center gap-2 text-sm font-bold"
                  style={{ color: '#D4AF37', fontFamily: 'Outfit, sans-serif' }}
                >
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/>
                  </svg>
                  03362321117
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
