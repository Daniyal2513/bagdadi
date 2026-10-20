type Page = 'home' | 'about' | 'umrah' | 'iran' | 'iraq' | 'visa' | 'contact';

interface AboutProps {
  onNavigate: (page: Page) => void;
}

const stats = [
  { value: '05', label: 'Years of Experience', sub: 'Trusted since 2019' },
  { value: '1.6k+', label: 'Happy Travelers', sub: 'Satisfied customers' },
  { value: '1.2k+', label: 'Tours Success', sub: 'Completed journeys' },
  { value: '98%', label: 'Positive Reviews', sub: 'Customer satisfaction' },
  { value: '25', label: 'Travel Guides', sub: 'Expert professionals' },
];

const features = [
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
        <path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2"/><circle cx="9" cy="7" r="4"/>
        <path d="M23 21v-2a4 4 0 00-3-3.87"/><path d="M16 3.13a4 4 0 010 7.75"/>
      </svg>
    ),
    title: 'Expert Travel Guidance',
    desc: 'Our experienced team provides professional guidance to ensure a smooth and stress-free journey.',
  },
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
        <line x1="12" y1="1" x2="12" y2="23"/><path d="M17 5H9.5a3.5 3.5 0 000 7h5a3.5 3.5 0 010 7H6"/>
      </svg>
    ),
    title: 'Competitive Pricing',
    desc: 'Best value packages without compromising on quality, comfort, or service excellence.',
  },
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
        <circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/>
      </svg>
    ),
    title: 'Fast Booking',
    desc: 'Streamlined booking process with all documentation handled efficiently and quickly.',
  },
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
        <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013 5.18 2 2 0 014.97 3h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L9.09 10a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 16.92z"/>
      </svg>
    ),
    title: 'Best Support 24/7',
    desc: 'Round-the-clock dedicated support team ready to assist you at every stage of your journey.',
  },
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
        <polyline points="23 6 13.5 15.5 8.5 10.5 1 18"/><polyline points="17 6 23 6 23 12"/>
      </svg>
    ),
    title: 'Ultimate Flexibility',
    desc: 'Customizable packages designed to fit your schedule, budget, and preferences.',
  },
];

export default function About({ onNavigate }: AboutProps) {
  return (
    <div style={{ paddingTop: '72px' }}>
      {/* Page Header */}
      <div
        className="relative py-16 overflow-hidden"
        style={{ background: 'var(--bg-mid)' }}
      >
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: 'url(https://images.unsplash.com/photo-1513072064285-240f87fa81e8?w=1400&h=400&fit=crop&auto=format)',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            opacity: 0.08,
          }}
        />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Breadcrumb */}
          <div className="flex items-center gap-2 text-xs mb-4" style={{ color: 'rgba(var(--text-main-rgb), 0.5)', fontFamily: 'Inter, sans-serif' }}>
            <button onClick={() => onNavigate('home')} className="hover:text-yellow-400 transition-colors">Home</button>
            <span>›</span>
            <span>About</span>
            <span>›</span>
            <span style={{ color: '#D4AF37' }}>About Us</span>
          </div>
          <h1
            className="text-3xl sm:text-4xl lg:text-5xl font-black"
            style={{ fontFamily: 'Outfit, sans-serif', color: 'var(--text-main)' }}
          >
            About <span className="gold-text">Us</span>
          </h1>
        </div>
      </div>

      {/* Main Intro */}
      <section style={{ background: 'var(--bg-deep)' }} className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <p className="text-xs font-bold tracking-widest mb-3" style={{ color: '#D4AF37', letterSpacing: '0.2em' }}>WHO WE ARE</p>
              <h2
                className="text-3xl sm:text-4xl font-black mb-6 leading-tight section-heading-line"
                style={{ fontFamily: 'Outfit, sans-serif', color: 'var(--text-main)' }}
              >
                Your Trusted Partner in Spiritual & International Journeys
              </h2>
              <p className="text-sm leading-relaxed mb-6" style={{ color: 'rgba(var(--text-main-rgb), 0.7)' }}>
                Baghdadi Travel & Tourism is committed to providing exceptional travel experiences for Umrah, Hajj, Ziyarat, and international destinations like Azerbaijan. With years of expertise, we ensure every journey is comfortable, safe, and memorable.
              </p>

              {/* Mission & Vision */}
              <div className="space-y-4 mb-8">
                <div
                  className="p-5 rounded-xl"
                  style={{ background: 'var(--bg-mid)', border: '1px solid rgba(212,175,55,0.2)' }}
                >
                  <h4 className="text-sm font-bold mb-2" style={{ color: '#D4AF37', fontFamily: 'Outfit, sans-serif' }}>Our Mission</h4>
                  <p className="text-sm leading-relaxed" style={{ color: 'rgba(var(--text-main-rgb), 0.65)' }}>
                    To make every pilgrimage and travel experience seamless, spiritually fulfilling, and unforgettable, while prioritizing comfort and customer satisfaction.
                  </p>
                </div>
                <div
                  className="p-5 rounded-xl"
                  style={{ background: 'var(--bg-mid)', border: '1px solid rgba(212,175,55,0.2)' }}
                >
                  <h4 className="text-sm font-bold mb-2" style={{ color: '#D4AF37', fontFamily: 'Outfit, sans-serif' }}>Our Vision</h4>
                  <p className="text-sm leading-relaxed" style={{ color: 'rgba(var(--text-main-rgb), 0.65)' }}>
                    To become the leading spiritual and international travel company in Pakistan, known for trust, excellence, and creating life-changing journeys for every traveler we serve.
                  </p>
                </div>
              </div>

              {/* Badges */}
              <div className="flex flex-wrap gap-3">
                {['Fast Booking', 'Support 24/7'].map(badge => (
                  <div
                    key={badge}
                    className="flex items-center gap-2 px-4 py-2 rounded-full text-xs font-bold"
                    style={{
                      background: 'rgba(212,175,55,0.1)',
                      border: '1px solid rgba(212,175,55,0.3)',
                      color: '#D4AF37',
                      fontFamily: 'Outfit, sans-serif',
                    }}
                  >
                    <svg width="10" height="10" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/>
                    </svg>
                    {badge}
                  </div>
                ))}
              </div>
            </div>

            {/* Image */}
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1564547889663-dbebc1c00849?w=700&h=500&fit=crop&auto=format"
                alt="Sacred Islamic shrine"
                className="w-full rounded-xl object-cover"
                style={{ height: '420px', border: '1px solid rgba(212,175,55,0.2)' }}
              />
              <div
                className="absolute -bottom-4 -left-4 w-24 h-24 rounded-xl flex flex-col items-center justify-center"
                style={{
                  background: 'linear-gradient(135deg, #D4AF37, #E5C158)',
                  boxShadow: '0 8px 30px rgba(212,175,55,0.4)',
                }}
              >
                <span className="text-2xl font-black" style={{ color: 'var(--bg-deep)', fontFamily: 'Outfit, sans-serif' }}>05</span>
                <span className="text-xs font-bold text-center leading-tight" style={{ color: 'var(--bg-deep)', fontFamily: 'Outfit, sans-serif' }}>Years Exp.</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Grid */}
      <section style={{ background: 'var(--bg-mid)' }} className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
            {stats.map((stat, i) => (
              <div
                key={stat.label}
                className="text-center p-6 rounded-xl gold-border-hover fade-up"
                style={{ background: 'var(--bg-deep)', animationDelay: `${i * 0.1}s` }}
              >
                <p
                  className="text-3xl font-black mb-1"
                  style={{
                    fontFamily: 'Outfit, sans-serif',
                    background: 'linear-gradient(135deg, #D4AF37, #E5C158)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    backgroundClip: 'text',
                  }}
                >
                  {stat.value}
                </p>
                <p className="text-sm font-semibold mb-1" style={{ fontFamily: 'Outfit, sans-serif', color: 'var(--text-main)' }}>{stat.label}</p>
                <p className="text-xs" style={{ color: 'rgba(var(--text-main-rgb), 0.45)' }}>{stat.sub}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section style={{ background: 'var(--bg-deep)' }} className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <p className="text-xs font-bold tracking-widest mb-3" style={{ color: '#D4AF37', letterSpacing: '0.2em' }}>OUR PILLARS</p>
            <h2
              className="text-3xl sm:text-4xl font-black section-heading-line center"
              style={{ fontFamily: 'Outfit, sans-serif', color: 'var(--text-main)' }}
            >
              Why Choose Baghdadi Travel
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feat, i) => (
              <div
                key={feat.title}
                className="gold-border-hover rounded-xl p-7 fade-up"
                style={{ background: 'var(--bg-mid)', animationDelay: `${i * 0.1}s` }}
              >
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center mb-5"
                  style={{ background: 'rgba(212,175,55,0.1)', color: '#D4AF37' }}
                >
                  {feat.icon}
                </div>
                <h3 className="text-base font-bold mb-2" style={{ fontFamily: 'Outfit, sans-serif', color: 'var(--text-main)' }}>{feat.title}</h3>
                <p className="text-sm leading-relaxed" style={{ color: 'rgba(var(--text-main-rgb), 0.6)' }}>{feat.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
