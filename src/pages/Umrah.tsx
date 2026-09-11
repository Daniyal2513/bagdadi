type Page = 'home' | 'about' | 'umrah' | 'iran' | 'iraq' | 'visa' | 'contact';

interface UmrahProps {
  onNavigate: (page: Page) => void;
}

const packages = [
  {
    title: 'Ramzan Umrah Package 2',
    location: 'Makkah, Madina',
    price: '₨370,000',
    nights: '21 Nights',
    img: 'https://images.unsplash.com/photo-1592326871020-04f58c1a52f3?w=700&h=500&fit=crop&auto=format',
    includes: ['Return Air Ticket', 'Hotel Accommodation', 'Visa Assistance', 'Ground Transport', 'Guide Services'],
  },
  {
    title: 'Ramzan Umrah Package 1',
    location: 'Makkah, Madina',
    price: '₨320,000',
    nights: '14 Nights',
    img: 'https://images.unsplash.com/photo-1513072064285-240f87fa81e8?w=700&h=500&fit=crop&auto=format',
    includes: ['Return Air Ticket', 'Hotel Accommodation', 'Visa Assistance', 'Ground Transport'],
  },
  {
    title: "Rajab Sha'ban Umrah Package 1",
    location: 'Makkah, Madina',
    price: '₨300,000',
    nights: '10 Nights',
    img: 'https://images.unsplash.com/photo-1720549973451-018d3623b55a?w=700&h=500&fit=crop&auto=format',
    includes: ['Return Air Ticket', 'Hotel Accommodation', 'Visa Assistance', 'Ground Transport'],
  },
];

export default function Umrah({ onNavigate }: UmrahProps) {
  return (
    <div style={{ paddingTop: '72px' }}>
      {/* Hero */}
      <div className="relative py-20 overflow-hidden" style={{ background: 'var(--bg-mid)' }}>
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: 'url(https://images.unsplash.com/photo-1592326871020-04f58c1a52f3?w=1400&h=500&fit=crop&auto=format)',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            opacity: 0.1,
          }}
        />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-2 text-xs mb-4" style={{ color: 'rgba(var(--text-main-rgb), 0.5)' }}>
            <button onClick={() => onNavigate('home')} className="hover:text-yellow-400 transition-colors">Home</button>
            <span>›</span><span>Tours</span><span>›</span>
            <span style={{ color: '#D4AF37' }}>Umrah</span>
          </div>
          <div
            className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-semibold mb-4"
            style={{ background: 'rgba(212,175,55,0.12)', border: '1px solid rgba(212,175,55,0.3)', color: '#D4AF37', fontFamily: 'Outfit, sans-serif' }}
          >
            Tour Type: Umrah
          </div>
          <h1
            className="text-3xl sm:text-5xl font-black"
            style={{ fontFamily: 'Outfit, sans-serif', color: 'var(--text-main)' }}
          >
            Umrah <span className="gold-text">Packages</span>
          </h1>
          <p className="mt-3 text-sm" style={{ color: 'rgba(var(--text-main-rgb), 0.65)', maxWidth: '500px' }}>
            Embark on a spiritually enriching pilgrimage to the holy cities of Makkah and Madinah with our carefully curated Umrah packages.
          </p>
        </div>
      </div>

      {/* Packages Grid */}
      <section style={{ background: 'var(--bg-deep)' }} className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {packages.map((pkg, i) => (
              <div
                key={pkg.title}
                className="card-hover gold-border-hover rounded-2xl overflow-hidden fade-up"
                style={{ background: 'var(--bg-mid)', animationDelay: `${i * 0.12}s` }}
              >
                <div className="relative h-52 overflow-hidden bg-green-950">
                  <img src={pkg.img} alt={pkg.title} className="w-full h-full object-cover transition-transform duration-500 hover:scale-110" />
                  <div className="absolute inset-0" style={{ background: 'linear-gradient(to top, rgba(var(--bg-mid-rgb), 0.9) 0%, transparent 50%)' }} />
                  <div className="absolute bottom-4 left-4">
                    <span
                      className="px-3 py-1 rounded-full text-xs font-bold"
                      style={{ background: 'linear-gradient(135deg, #D4AF37, #E5C158)', color: 'var(--bg-deep)', fontFamily: 'Outfit, sans-serif' }}
                    >
                      {pkg.nights}
                    </span>
                  </div>
                </div>

                <div className="p-6">
                  <div className="flex items-center gap-1 mb-2">
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#D4AF37" strokeWidth="2">
                      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z"/><circle cx="12" cy="10" r="3"/>
                    </svg>
                    <span className="text-xs" style={{ color: 'rgba(212,175,55,0.8)' }}>{pkg.location}</span>
                  </div>
                  <h3
                    className="text-xl font-bold mb-4 leading-snug"
                    style={{ fontFamily: 'Outfit, sans-serif', color: 'var(--text-main)' }}
                  >
                    {pkg.title}
                  </h3>

                  {/* Includes */}
                  <div className="space-y-2 mb-5">
                    {pkg.includes.map(inc => (
                      <div key={inc} className="flex items-center gap-2">
                        <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor" style={{ color: '#D4AF37', shrink: 0 }}>
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
                        className="text-2xl font-black"
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
                      <p className="text-xs" style={{ color: 'rgba(var(--text-main-rgb), 0.4)' }}>TAXES INCL/PERS</p>
                    </div>
                    <button
                      onClick={() => onNavigate('contact')}
                      className="btn-gold px-5 py-2.5 rounded-md text-sm font-bold"
                    >
                      Book a Trip
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* CTA */}
          <div
            className="mt-14 p-10 rounded-2xl text-center"
            style={{
              background: 'linear-gradient(135deg, rgba(212,175,55,0.1), rgba(212,175,55,0.03))',
              border: '1px solid rgba(212,175,55,0.25)',
            }}
          >
            <h3 className="text-2xl font-bold mb-3" style={{ fontFamily: 'Outfit, sans-serif', color: 'var(--text-main)' }}>
              Need a Custom Umrah Package?
            </h3>
            <p className="text-sm mb-6" style={{ color: 'rgba(var(--text-main-rgb), 0.65)' }}>
              Contact us to design a personalized Umrah experience tailored to your schedule and budget.
            </p>
            <button onClick={() => onNavigate('contact')} className="btn-gold px-8 py-3 rounded-md text-sm font-bold">
              Contact Us Today
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
