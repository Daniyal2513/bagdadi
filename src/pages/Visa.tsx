import { useState } from 'react';

type Page = 'home' | 'about' | 'umrah' | 'iran' | 'iraq' | 'visa' | 'contact';

interface VisaProps {
  onNavigate: (page: Page) => void;
}

export default function Visa({ onNavigate }: VisaProps) {
  const [commentName, setCommentName] = useState('');
  const [commentEmail, setCommentEmail] = useState('');
  const [commentMsg, setCommentMsg] = useState('');
  const [saveInfo, setSaveInfo] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [extras, setExtras] = useState<Record<string, boolean>>({
    'Airport Transfer': false,
    'Travel Insurance': false,
    'City Tour': false,
    'Exhibition Entry': false,
  });

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
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: 'url(https://images.unsplash.com/photo-1512453979798-5ea266f8880c?w=1400&h=400&fit=crop&auto=format)',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            opacity: 0.12,
          }}
        />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-2 text-xs mb-4" style={{ color: 'rgba(var(--text-main-rgb), 0.5)' }}>
            <button onClick={() => onNavigate('home')} className="hover:text-yellow-400 transition-colors">Home</button>
            <span>›</span>
            <span style={{ color: '#D4AF37' }}>Gulfood Dubai 2026</span>
          </div>
          <h1 className="text-3xl sm:text-5xl font-black" style={{ fontFamily: 'Outfit, sans-serif', color: 'var(--text-main)' }}>
            Gulfood Dubai <span className="gold-text">2026</span>
          </h1>
          <p className="mt-2 text-sm" style={{ color: 'rgba(var(--text-main-rgb), 0.65)' }}>Visa & Event Package — Dubai, UAE</p>
        </div>
      </div>

      <section style={{ background: 'var(--bg-deep)' }} className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-10">
            {/* Main Content */}
            <div className="lg:col-span-2 space-y-8">
              {/* Hero Image */}
              <div className="relative rounded-2xl overflow-hidden" style={{ height: '300px', background: 'var(--bg-mid)' }}>
                <img
                  src="https://images.unsplash.com/photo-1518684079-3c830dcef090?w=900&h=500&fit=crop&auto=format"
                  alt="Dubai Gulfood 2026"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0" style={{ background: 'linear-gradient(to top, rgba(var(--bg-deep-rgb), 0.6) 0%, transparent 50%)' }} />
                <div className="absolute top-4 left-4">
                  <span
                    className="px-3 py-1 rounded-full text-xs font-bold"
                    style={{ background: 'rgba(212,175,55,0.15)', border: '1px solid rgba(212,175,55,0.4)', color: '#D4AF37', fontFamily: 'Outfit, sans-serif' }}
                  >
                    Event Package
                  </span>
                </div>
              </div>

              {/* Overview */}
              <div className="p-6 rounded-xl" style={{ background: 'var(--bg-mid)', border: '1px solid rgba(212,175,55,0.15)' }}>
                <h3 className="text-xl font-bold mb-4" style={{ fontFamily: 'Outfit, sans-serif', color: 'var(--text-main)' }}>Package Overview</h3>
                <p className="text-sm leading-relaxed mb-4" style={{ color: 'rgba(var(--text-main-rgb), 0.7)' }}>
                  Join us for the prestigious Gulfood Dubai 2026 — the world's largest annual food and beverage trade exhibition held at the Dubai World Trade Centre. This exclusive package includes visa processing, hotel accommodation, and exhibition access for a seamless business travel experience.
                </p>
                <p className="text-sm leading-relaxed" style={{ color: 'rgba(var(--text-main-rgb), 0.7)' }}>
                  Gulfood 2026 brings together over 5,000 exhibitors from 120+ countries and attracts over 100,000 trade visitors. Our package ensures you experience Dubai's world-class hospitality alongside this premier industry event.
                </p>
              </div>

              {/* Key Details */}
              <div className="grid sm:grid-cols-3 gap-4">
                {[
                  { icon: '📅', label: 'Event Dates', value: 'February 2026' },
                  { icon: '📍', label: 'Venue', value: 'Dubai World Trade Centre' },
                  { icon: '💼', label: 'Type', value: 'Business Travel' },
                ].map(d => (
                  <div
                    key={d.label}
                    className="p-5 rounded-xl text-center"
                    style={{ background: 'var(--bg-mid)', border: '1px solid rgba(212,175,55,0.15)' }}
                  >
                    <div className="text-2xl mb-2">{d.icon}</div>
                    <p className="text-xs mb-1" style={{ color: 'rgba(var(--text-main-rgb), 0.5)' }}>{d.label}</p>
                    <p className="text-sm font-bold" style={{ fontFamily: 'Outfit, sans-serif', color: 'var(--text-main)' }}>{d.value}</p>
                  </div>
                ))}
              </div>

              {/* Included */}
              <div className="p-6 rounded-xl" style={{ background: 'var(--bg-mid)', border: '1px solid rgba(212,175,55,0.15)' }}>
                <h4 className="text-sm font-bold mb-4" style={{ color: '#D4AF37', fontFamily: 'Outfit, sans-serif' }}>What's Included</h4>
                <div className="grid sm:grid-cols-2 gap-2">
                  {['UAE Visa Processing', 'Return Air Ticket', 'Hotel Accommodation', 'Airport Transfers', 'Exhibition Pass', 'Tour Assistance'].map(item => (
                    <div key={item} className="flex items-center gap-2">
                      <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor" style={{ color: '#22c55e', flexShrink: 0 }}>
                        <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/>
                      </svg>
                      <span className="text-sm" style={{ color: 'rgba(var(--text-main-rgb), 0.75)' }}>{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Comments */}
              <div>
                <h3 className="text-xl font-bold mb-5" style={{ fontFamily: 'Outfit, sans-serif', color: 'var(--text-main)' }}>Leave a Comment</h3>
                <div className="p-6 rounded-xl" style={{ background: 'var(--bg-mid)', border: '1px solid rgba(212,175,55,0.15)' }}>
                  <p className="text-xs mb-4" style={{ color: 'rgba(var(--text-main-rgb), 0.45)' }}>Your email address will not be published.</p>
                  {submitted ? (
                    <p className="text-sm" style={{ color: '#D4AF37' }}>Thank you! We will contact you shortly.</p>
                  ) : (
                    <div className="space-y-3">
                      <input type="text" placeholder="Your Name*" value={commentName} onChange={e => setCommentName(e.target.value)} className="luxury-input w-full px-4 py-2.5 rounded-md text-sm" />
                      <input type="email" placeholder="Your Email*" value={commentEmail} onChange={e => setCommentEmail(e.target.value)} className="luxury-input w-full px-4 py-2.5 rounded-md text-sm" />
                      <label className="flex items-center gap-2 cursor-pointer">
                        <input type="checkbox" checked={saveInfo} onChange={e => setSaveInfo(e.target.checked)} className="accent-yellow-500" />
                        <span className="text-xs" style={{ color: 'rgba(var(--text-main-rgb), 0.55)' }}>Save my info for next time</span>
                      </label>
                      <textarea rows={4} placeholder="Your Message*" value={commentMsg} onChange={e => setCommentMsg(e.target.value)} className="luxury-input w-full px-4 py-2.5 rounded-md text-sm resize-none" />
                      <button onClick={() => { if (commentName && commentEmail && commentMsg) setSubmitted(true); }} className="btn-gold px-6 py-2.5 rounded-md text-sm font-bold">Submit</button>
                    </div>
                  )}
                </div>
              </div>
            </div>

            {/* Sidebar */}
            <div>
              <div
                className="sticky top-24 p-6 rounded-2xl"
                style={{ background: 'var(--bg-mid)', border: '1px solid rgba(212,175,55,0.25)' }}
              >
                <h3 className="text-lg font-bold mb-5" style={{ fontFamily: 'Outfit, sans-serif', color: 'var(--text-main)' }}>Inquiry & Booking</h3>

                <div className="space-y-3 mb-5">
                  <div>
                    <label className="text-xs font-semibold mb-1.5 block" style={{ color: 'rgba(var(--text-main-rgb), 0.6)', fontFamily: 'Outfit, sans-serif' }}>Select Date</label>
                    <input type="text" readOnly value="February 2026" className="luxury-input w-full px-4 py-2.5 rounded-md text-sm cursor-pointer" />
                  </div>
                </div>

                {/* Extra Services */}
                <div className="mb-5">
                  <label className="text-xs font-semibold mb-3 block" style={{ color: 'rgba(var(--text-main-rgb), 0.6)', fontFamily: 'Outfit, sans-serif' }}>Extra Services</label>
                  <div className="space-y-2">
                    {Object.keys(extras).map(service => (
                      <label key={service} className="flex items-center gap-2 cursor-pointer">
                        <input
                          type="checkbox"
                          checked={extras[service]}
                          onChange={e => setExtras(prev => ({ ...prev, [service]: e.target.checked }))}
                          className="accent-yellow-500"
                        />
                        <span className="text-sm" style={{ color: 'rgba(var(--text-main-rgb), 0.65)' }}>{service}</span>
                      </label>
                    ))}
                  </div>
                </div>

                {/* Total */}
                <div
                  className="flex items-center justify-between p-4 rounded-lg mb-5"
                  style={{ background: 'rgba(212,175,55,0.08)', border: '1px solid rgba(212,175,55,0.2)' }}
                >
                  <span className="text-sm font-semibold" style={{ fontFamily: 'Outfit, sans-serif', color: 'var(--text-main)' }}>Total Price</span>
                  <span
                    className="text-xl font-black"
                    style={{
                      fontFamily: 'Outfit, sans-serif',
                      background: 'linear-gradient(135deg, #D4AF37, #E5C158)',
                      WebkitBackgroundClip: 'text',
                      WebkitTextFillColor: 'transparent',
                      backgroundClip: 'text',
                    }}
                  >
                    Contact Us
                  </span>
                </div>

                <button onClick={() => onNavigate('contact')} className="btn-gold w-full py-3 rounded-md text-sm font-bold mb-3">
                  Book Now
                </button>
                <a href="tel:03362321117" className="btn-outline-gold w-full py-3 rounded-md text-sm text-center block">
                  To More Inquiry: 03362321117
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
