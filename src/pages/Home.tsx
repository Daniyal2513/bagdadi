import { useState } from 'react';

type Page = 'home' | 'about' | 'umrah' | 'iran' | 'iraq' | 'visa' | 'contact';

interface HomeProps {
  onNavigate: (page: Page) => void;
}

const packages = [
  {
    id: 1,
    title: 'Gulfood Dubai 2026',
    location: 'Dubai',
    price: 'Contact Us For Price',
    priceNote: 'TAXES INCL/PERS',
    img: 'https://images.unsplash.com/photo-1512453979798-5ea266f8880c?w=600&h=400&fit=crop&auto=format',
    tag: 'Event',
    page: 'visa' as Page,
  },
  {
    id: 2,
    title: 'Baku + Shahdag',
    location: 'Azerbaijan',
    price: '₨265,000',
    priceNote: 'TAXES INCL/PERS',
    img: 'https://images.unsplash.com/photo-1616701639706-a89d1a609eda?w=600&h=400&fit=crop&auto=format',
    tag: 'International',
    page: 'about' as Page,
  },
  {
    id: 3,
    title: 'Baghdad Tour 2026 Package 1',
    location: 'Baghdad',
    price: '₨245,000',
    priceNote: 'TAXES INCL/PERS',
    img: 'https://images.unsplash.com/photo-1564547889663-dbebc1c00849?w=600&h=400&fit=crop&auto=format',
    tag: 'Ziyarat',
    page: 'iraq' as Page,
  },
  {
    id: 4,
    title: 'Ramzan Umrah Package 2',
    location: 'Makkah, Madina',
    price: '₨370,000',
    priceNote: 'TAXES INCL/PERS',
    img: 'https://images.unsplash.com/photo-1592326871020-04f58c1a52f3?w=600&h=400&fit=crop&auto=format',
    tag: 'Umrah',
    page: 'umrah' as Page,
  },
  {
    id: 5,
    title: 'Ramzan Umrah Package 1',
    location: 'Makkah, Madina',
    price: '₨320,000',
    priceNote: 'TAXES INCL/PERS',
    img: 'https://images.unsplash.com/photo-1513072064285-240f87fa81e8?w=600&h=400&fit=crop&auto=format',
    tag: 'Umrah',
    page: 'umrah' as Page,
  },
  {
    id: 6,
    title: "Rajab Sha'ban Umrah Package 1",
    location: 'Makkah, Madina',
    price: '₨300,000',
    priceNote: 'TAXES INCL/PERS',
    img: 'https://images.unsplash.com/photo-1720549973451-018d3623b55a?w=600&h=400&fit=crop&auto=format',
    tag: 'Umrah',
    page: 'umrah' as Page,
  },
  {
    id: 7,
    title: "Winter's In Iran",
    location: 'Iran',
    price: '₨225,000',
    priceNote: 'TAXES INCL/PERS',
    img: 'https://images.unsplash.com/photo-1638902061166-72cc9d6b1f98?w=600&h=400&fit=crop&auto=format',
    tag: 'Ziyarat',
    page: 'iran' as Page,
  },
];

const features = [
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
        <path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2"/><circle cx="9" cy="7" r="4"/>
        <path d="M23 21v-2a4 4 0 00-3-3.87"/><path d="M16 3.13a4 4 0 010 7.75"/>
      </svg>
    ),
    title: 'Expert Travel Guidance',
    desc: 'Our experienced team provides professional guidance to ensure a smooth and stress-free journey from start to finish.',
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
        <line x1="12" y1="1" x2="12" y2="23"/><path d="M17 5H9.5a3.5 3.5 0 000 7h5a3.5 3.5 0 010 7H6"/>
      </svg>
    ),
    title: 'Competitive Pricing',
    desc: 'We offer the best value packages in the market without compromising on quality, comfort, or service excellence.',
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
        <circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/>
      </svg>
    ),
    title: 'Fast Booking',
    desc: 'Streamlined booking process that gets you confirmed in minimal time with all documentation handled efficiently.',
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
        <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013 5.18 2 2 0 014.97 3h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L9.09 10a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 16.92z"/>
      </svg>
    ),
    title: 'Best Support 24/7',
    desc: 'Round-the-clock dedicated support team ready to assist you at every stage of your spiritual and travel journey.',
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
        <polyline points="23 6 13.5 15.5 8.5 10.5 1 18"/><polyline points="17 6 23 6 23 12"/>
      </svg>
    ),
    title: 'Ultimate Flexibility',
    desc: 'Customizable packages designed to fit your schedule, budget, and preferences with full itinerary flexibility.',
  },
];

const testimonials = [
  {
    name: 'Ahmed Khan',
    date: 'May 9, 2023 | 10:30 PM',
    text: 'Baghdadi Travel made my Umrah journey completely stress-free. Everything from flights to hotels was perfectly organized.',
    initials: 'AK',
  },
  {
    name: 'Sara Malik',
    date: 'July 16, 2023 | 10:30 PM',
    text: 'The Ziyarat tour was incredible. Comfortable transport and knowledgeable guides made the experience truly memorable.',
    initials: 'SM',
  },
  {
    name: 'Hassan Raza',
    date: 'Feb 7, 2024 | 10:30 PM',
    text: 'I highly recommend Baghdadi Travel. Their Hajj package was well-planned and their team was always helpful and supportive.',
    initials: 'HR',
  },
];

const searchCategories = ['Tour', 'Hotel', 'Visa', 'Activities', 'Transport', 'Destination'];

export default function Home({ onNavigate }: HomeProps) {
  const [activeCategory, setActiveCategory] = useState('Tour');
  const [aboutTab, setAboutTab] = useState<'mission' | 'vision'>('mission');

  return (
    <div>
      {/* Hero Section */}
      <section
        className="relative min-h-screen flex items-center overflow-hidden"
        style={{ paddingTop: '80px' }}
      >
        {/* Background */}
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1592326871020-04f58c1a52f3?w=1600&h=900&fit=crop&auto=format"
            alt="Kaaba Mecca pilgrimage"
            className="w-full h-full object-cover"
          />
          <div
            className="absolute inset-0"
            style={{
              background: 'linear-gradient(105deg, rgba(var(--bg-deep-rgb), 0.97) 45%, rgba(var(--bg-deep-rgb), 0.7) 75%, rgba(var(--bg-deep-rgb), 0.3) 100%)',
            }}
          />
          <div
            className="absolute inset-0"
            style={{ background: 'linear-gradient(to top, rgba(var(--bg-deep-rgb), 1) 0%, transparent 40%)' }}
          />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-28">
          <div className="max-w-2xl fade-up text-left">
            <div
              className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-semibold mb-6"
              style={{
                background: 'rgba(212,175,55,0.12)',
                border: '1px solid rgba(212,175,55,0.35)',
                color: '#D4AF37',
                fontFamily: 'Outfit, sans-serif',
                letterSpacing: '0.1em',
              }}
            >
              <span className="w-1.5 h-1.5 rounded-full bg-yellow-400 animate-pulse" />
              TRUSTED SINCE 2019
            </div>
            <h1
              className="text-4xl sm:text-5xl lg:text-6xl font-black mb-6 leading-tight"
              style={{ fontFamily: 'Outfit, sans-serif', color: 'var(--text-main)' }}
            >
              Perform Umrah with{' '}
              <span className="gold-text">Peace, Comfort</span>{' '}
              & Complete Guidance
            </h1>
            <p className="text-base lg:text-lg mb-8 leading-relaxed" style={{ color: 'rgba(var(--text-main-rgb), 0.75)' }}>
              We provide complete Umrah solutions including flights, hotels, visa assistance, and transportation — all managed by an experienced and reliable team.
            </p>
            <div className="flex flex-wrap items-center gap-4">
              <button
                onClick={() => onNavigate('umrah')}
                className="btn-gold px-8 py-3.5 rounded-md text-sm font-bold tracking-wide"
              >
                Book A Trip
              </button>
              <div className="flex items-center gap-2">
                <div className="flex">
                  {[1,2,3,4,5].map(i => (
                    <svg key={i} width="14" height="14" viewBox="0 0 24 24" fill="#D4AF37">
                      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                    </svg>
                  ))}
                </div>
                <span className="text-sm" style={{ color: 'rgba(var(--text-main-rgb), 0.6)' }}>0.0/5.0 Rating</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Search & Filter */}
      <section style={{ background: 'var(--bg-mid)' }} className="py-10">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Category Tabs */}
          <div className="flex flex-wrap gap-2 justify-center mb-6">
            {searchCategories.map(cat => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className="px-5 py-2 rounded-full text-sm font-semibold transition-all duration-200"
                style={{
                  fontFamily: 'Outfit, sans-serif',
                  background: activeCategory === cat ? 'linear-gradient(135deg, #D4AF37, #E5C158)' : 'rgba(var(--overlay-rgb), 0.04)',
                  color: activeCategory === cat ? 'var(--bg-deep)' : 'rgba(var(--text-main-rgb), 0.7)',
                  border: activeCategory === cat ? 'none' : '1px solid rgba(212,175,55,0.2)',
                }}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Filter Row */}
          <div
            className="flex flex-col sm:flex-row gap-3 p-4 rounded-xl"
            style={{ background: 'rgba(var(--overlay-rgb), 0.04)', border: '1px solid rgba(212,175,55,0.15)' }}
          >
            <select className="luxury-input flex-1 px-4 py-3 rounded-md text-sm bg-transparent">
              <option style={{ background: 'var(--bg-mid)' }}>Tour Type</option>
              <option style={{ background: 'var(--bg-mid)' }}>Umrah</option>
              <option style={{ background: 'var(--bg-mid)' }}>Ziyarat</option>
              <option style={{ background: 'var(--bg-mid)' }}>International</option>
            </select>
            <select className="luxury-input flex-1 px-4 py-3 rounded-md text-sm bg-transparent">
              <option style={{ background: 'var(--bg-mid)' }}>When</option>
              <option style={{ background: 'var(--bg-mid)' }}>January 2026</option>
              <option style={{ background: 'var(--bg-mid)' }}>February 2026</option>
              <option style={{ background: 'var(--bg-mid)' }}>March 2026</option>
              <option style={{ background: 'var(--bg-mid)' }}>Ramzan 2026</option>
            </select>
            <select className="luxury-input flex-1 px-4 py-3 rounded-md text-sm bg-transparent">
              <option style={{ background: 'var(--bg-mid)' }}>Tour Duration</option>
              <option style={{ background: 'var(--bg-mid)' }}>7 Days</option>
              <option style={{ background: 'var(--bg-mid)' }}>10 Days</option>
              <option style={{ background: 'var(--bg-mid)' }}>14 Days</option>
              <option style={{ background: 'var(--bg-mid)' }}>21 Days</option>
            </select>
            <button className="btn-gold px-8 py-3 rounded-md text-sm font-bold shrink-0">
              Search
            </button>
          </div>
        </div>
      </section>

      {/* Featured Packages */}
      <section className="py-20" style={{ background: 'var(--bg-deep)' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <p className="text-xs font-bold tracking-widest mb-3" style={{ color: '#D4AF37', letterSpacing: '0.2em' }}>CURATED EXPERIENCES</p>
            <h2
              className="text-3xl sm:text-4xl font-black section-heading-line center"
              style={{ fontFamily: 'Outfit, sans-serif', color: 'var(--text-main)' }}
            >
              Featured Tour Packages
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {packages.map((pkg, i) => (
              <div
                key={pkg.id}
                className="card-hover gold-border-hover rounded-xl overflow-hidden cursor-pointer fade-up"
                style={{
                  background: 'var(--bg-mid)',
                  animationDelay: `${i * 0.08}s`,
                }}
                onClick={() => onNavigate(pkg.page)}
              >
                {/* Image */}
                <div className="relative h-44 overflow-hidden bg-green-950">
                  <img
                    src={pkg.img}
                    alt={pkg.title}
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                  />
                  <div
                    className="absolute inset-0"
                    style={{ background: 'linear-gradient(to top, rgba(var(--bg-mid-rgb), 0.8) 0%, transparent 60%)' }}
                  />
                  <span
                    className="absolute top-3 left-3 px-2.5 py-1 rounded-full text-xs font-bold"
                    style={{
                      background: 'rgba(212,175,55,0.15)',
                      border: '1px solid rgba(212,175,55,0.4)',
                      color: '#D4AF37',
                      fontFamily: 'Outfit, sans-serif',
                    }}
                  >
                    {pkg.tag}
                  </span>
                </div>

                {/* Content */}
                <div className="p-5">
                  <div className="flex items-start gap-1 mb-1">
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#D4AF37" strokeWidth="2" className="mt-0.5 shrink-0">
                      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z"/><circle cx="12" cy="10" r="3"/>
                    </svg>
                    <span className="text-xs" style={{ color: 'rgba(212,175,55,0.8)' }}>{pkg.location}</span>
                  </div>
                  <h3
                    className="text-base font-bold mb-3 leading-snug"
                    style={{ fontFamily: 'Outfit, sans-serif', color: 'var(--text-main)' }}
                  >
                    {pkg.title}
                  </h3>
                  <div className="gold-divider mb-3" />
                  <div className="flex items-end justify-between">
                    <div>
                      <p className="text-xs mb-0.5" style={{ color: 'rgba(var(--text-main-rgb), 0.45)' }}>Starting From</p>
                      <p
                        className="text-lg font-black"
                        style={{
                          fontFamily: 'Outfit, sans-serif',
                          background: 'linear-gradient(135deg, #D4AF37, #E5C158)',
                          WebkitBackgroundClip: 'text',
                          WebkitTextFillColor: 'transparent',
                          backgroundClip: 'text',
                        }}
                      >
                        {pkg.price}
                      </p>
                      <p className="text-xs" style={{ color: 'rgba(var(--text-main-rgb), 0.4)' }}>{pkg.priceNote}</p>
                    </div>
                    <button
                      className="btn-gold px-4 py-2 rounded-md text-xs font-bold"
                      onClick={(e) => { e.stopPropagation(); onNavigate(pkg.page); }}
                    >
                      Book A Trip
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Snapshot */}
      <section style={{ background: 'var(--bg-mid)' }} className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Image side */}
            <div className="relative">
              <div
                className="absolute -inset-4 rounded-2xl"
                style={{ background: 'linear-gradient(135deg, rgba(212,175,55,0.15), transparent)', zIndex: 0 }}
              />
              <img
                src="https://images.unsplash.com/photo-1564287535259-91d01d9a634b?w=800&h=600&fit=crop&auto=format"
                alt="Sacred shrine Ziyarat"
                className="relative z-10 w-full rounded-xl object-cover"
                style={{ height: '420px', border: '1px solid rgba(212,175,55,0.2)' }}
              />
              {/* Counter Badge */}
              <div
                className="absolute bottom-6 right-6 z-20 px-6 py-4 rounded-xl text-center"
                style={{
                  background: 'rgba(var(--bg-deep-rgb), 0.95)',
                  border: '1px solid rgba(212,175,55,0.35)',
                  backdropFilter: 'blur(10px)',
                }}
              >
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
                  600+
                </p>
                <p className="text-xs font-semibold mt-1" style={{ color: 'rgba(var(--text-main-rgb), 0.7)', fontFamily: 'Outfit, sans-serif' }}>
                  Happy Customers
                </p>
              </div>
            </div>

            {/* Text side */}
            <div>
              <p className="text-xs font-bold tracking-widest mb-3" style={{ color: '#D4AF37', letterSpacing: '0.2em' }}>ABOUT US</p>
              <h2
                className="text-3xl sm:text-4xl font-black mb-6 leading-tight section-heading-line"
                style={{ fontFamily: 'Outfit, sans-serif', color: 'var(--text-main)' }}
              >
                Your Trusted Partner in Spiritual & International Journeys
              </h2>

              {/* Tabs */}
              <div className="flex gap-1 mb-5 p-1 rounded-lg" style={{ background: 'rgba(var(--overlay-rgb), 0.04)', width: 'fit-content' }}>
                {(['mission', 'vision'] as const).map(tab => (
                  <button
                    key={tab}
                    onClick={() => setAboutTab(tab)}
                    className="px-5 py-2 rounded-md text-sm font-semibold capitalize transition-all duration-200"
                    style={{
                      fontFamily: 'Outfit, sans-serif',
                      background: aboutTab === tab ? 'linear-gradient(135deg, #D4AF37, #E5C158)' : 'transparent',
                      color: aboutTab === tab ? 'var(--bg-deep)' : 'rgba(var(--text-main-rgb), 0.6)',
                    }}
                  >
                    {tab === 'mission' ? 'Our Mission' : 'Our Vision'}
                  </button>
                ))}
              </div>

              <p className="text-sm leading-relaxed mb-8" style={{ color: 'rgba(var(--text-main-rgb), 0.7)' }}>
                {aboutTab === 'mission'
                  ? 'To make every pilgrimage and travel experience seamless, spiritually fulfilling, and unforgettable, while prioritizing comfort and customer satisfaction at every step of the journey.'
                  : 'To become the leading spiritual and international travel company in Pakistan, known for trust, excellence, and creating life-changing journeys for every traveler we serve.'}
              </p>

              {/* Feature Badges */}
              <div className="flex flex-wrap gap-3 mb-8">
                {['Fast Booking', 'Support 24/7', '5 Years Experience', 'Verified Agency'].map(badge => (
                  <div
                    key={badge}
                    className="flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-semibold"
                    style={{
                      background: 'rgba(212,175,55,0.08)',
                      border: '1px solid rgba(212,175,55,0.25)',
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

              <button
                onClick={() => onNavigate('about')}
                className="btn-outline-gold px-8 py-3 rounded-md text-sm"
              >
                More About Us
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section style={{ background: 'var(--bg-deep)' }} className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <p className="text-xs font-bold tracking-widest mb-3" style={{ color: '#D4AF37', letterSpacing: '0.2em' }}>WHY US</p>
            <h2
              className="text-3xl sm:text-4xl font-black section-heading-line center"
              style={{ fontFamily: 'Outfit, sans-serif', color: 'var(--text-main)' }}
            >
              Why Choose Baghdadi Travel & Tourism
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feat, i) => (
              <div
                key={feat.title}
                className="gold-border-hover rounded-xl p-7 transition-all duration-300 fade-up"
                style={{ background: 'var(--bg-mid)', animationDelay: `${i * 0.1}s` }}
              >
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center mb-5"
                  style={{ background: 'rgba(212,175,55,0.1)', color: '#D4AF37' }}
                >
                  {feat.icon}
                </div>
                <h3
                  className="text-lg font-bold mb-3"
                  style={{ fontFamily: 'Outfit, sans-serif', color: 'var(--text-main)' }}
                >
                  {feat.title}
                </h3>
                <p className="text-sm leading-relaxed" style={{ color: 'rgba(var(--text-main-rgb), 0.6)' }}>
                  {feat.desc}
                </p>
              </div>
            ))}
            {/* Stats card */}
            <div
              className="rounded-xl p-7 flex flex-col justify-center items-center text-center"
              style={{
                background: 'linear-gradient(135deg, rgba(212,175,55,0.12), rgba(212,175,55,0.04))',
                border: '1px solid rgba(212,175,55,0.3)',
              }}
            >
              <p
                className="text-5xl font-black mb-2"
                style={{
                  fontFamily: 'Outfit, sans-serif',
                  background: 'linear-gradient(135deg, #D4AF37, #E5C158)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text',
                }}
              >
                5+
              </p>
              <p className="text-sm font-semibold" style={{ color: 'var(--text-main)', fontFamily: 'Outfit, sans-serif' }}>Years of Excellence</p>
              <p className="text-xs mt-2" style={{ color: 'rgba(var(--text-main-rgb), 0.5)' }}>Serving pilgrims & travelers with dedication</p>
            </div>
          </div>
        </div>
      </section>

      {/* Ziyarat Feature */}
      <section
        className="relative py-24 overflow-hidden"
        style={{ background: 'var(--bg-mid)' }}
      >
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `url(https://images.unsplash.com/photo-1564287535259-91d01d9a634b?w=1400&h=600&fit=crop&auto=format)`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            opacity: 0.12,
          }}
        />
        <div className="relative z-10 max-w-3xl mx-auto px-4 text-center">
          <p className="text-xs font-bold tracking-widest mb-3" style={{ color: '#D4AF37', letterSpacing: '0.2em' }}>SACRED JOURNEYS</p>
          <h2
            className="text-3xl sm:text-4xl font-black mb-6 leading-tight"
            style={{ fontFamily: 'Outfit, sans-serif', color: 'var(--text-main)' }}
          >
            Visit the Sacred Sites with{' '}
            <span className="gold-text">Peace of Mind</span>{' '}
            & Complete Guidance
          </h2>
          <p className="text-base mb-8" style={{ color: 'rgba(var(--text-main-rgb), 0.7)' }}>
            Experience meaningful Ziyarat tours to Makkah, Madinah, and other sacred locations with comfortable transport and knowledgeable guides.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <button onClick={() => onNavigate('iraq')} className="btn-gold px-8 py-3 rounded-md text-sm font-bold">
              Book A Trip
            </button>
            <div className="flex items-center gap-2">
              <div className="flex">
                {[1,2,3,4,5].map(i => (
                  <svg key={i} width="14" height="14" viewBox="0 0 24 24" fill="#D4AF37">
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                  </svg>
                ))}
              </div>
              <span className="text-sm" style={{ color: 'rgba(var(--text-main-rgb), 0.6)' }}>0.0/5.0 Rating</span>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section style={{ background: 'var(--bg-deep)' }} className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <p className="text-xs font-bold tracking-widest mb-3" style={{ color: '#D4AF37', letterSpacing: '0.2em' }}>TESTIMONIALS</p>
            <h2
              className="text-3xl sm:text-4xl font-black section-heading-line center"
              style={{ fontFamily: 'Outfit, sans-serif', color: 'var(--text-main)' }}
            >
              Regards From Our Travelers
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {testimonials.map((t, i) => (
              <div
                key={t.name}
                className="gold-border-hover rounded-xl p-6 fade-up"
                style={{ background: 'var(--bg-mid)', animationDelay: `${i * 0.12}s` }}
              >
                {/* Stars */}
                <div className="flex gap-0.5 mb-4">
                  {[1,2,3,4,5].map(s => (
                    <svg key={s} width="14" height="14" viewBox="0 0 24 24" fill="#D4AF37">
                      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                    </svg>
                  ))}
                </div>
                {/* Quote */}
                <svg width="28" height="20" viewBox="0 0 32 24" fill="none" className="mb-3" style={{ opacity: 0.3 }}>
                  <path d="M0 24V14.4C0 10.56 1.2 7.2 3.6 4.32 6 1.44 9.12 0 13.2 0v4.8C10.88 4.8 9.12 5.6 8 7.2c-1.04 1.6-1.52 3.52-1.44 5.76H12V24H0zm20 0V14.4C20 10.56 21.2 7.2 23.6 4.32 26 1.44 29.12 0 33.2 0v4.8c-2.32 0-4.08.8-5.2 2.4-1.04 1.6-1.52 3.52-1.44 5.76H32V24H20z" fill="#D4AF37"/>
                </svg>
                <p className="text-sm leading-relaxed mb-5" style={{ color: 'rgba(var(--text-main-rgb), 0.75)' }}>
                  "{t.text}"
                </p>
                <div className="gold-divider mb-4" />
                <div className="flex items-center gap-3">
                  <div
                    className="w-9 h-9 rounded-full flex items-center justify-center text-xs font-bold"
                    style={{
                      background: 'linear-gradient(135deg, #D4AF37, #E5C158)',
                      color: 'var(--bg-deep)',
                      fontFamily: 'Outfit, sans-serif',
                    }}
                  >
                    {t.initials}
                  </div>
                  <div>
                    <p className="text-sm font-semibold" style={{ fontFamily: 'Outfit, sans-serif', color: 'var(--text-main)' }}>{t.name}</p>
                    <p className="text-xs" style={{ color: 'rgba(var(--text-main-rgb), 0.45)' }}>{t.date}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
