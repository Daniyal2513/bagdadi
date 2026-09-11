import { useState } from 'react';

type Page = 'home' | 'about' | 'umrah' | 'iran' | 'iraq' | 'visa' | 'contact';

interface IraqProps {
  onNavigate: (page: Page) => void;
}

export default function Iraq({ onNavigate }: IraqProps) {
  const [selectedPackage, setSelectedPackage] = useState<'darbar' | 'hotel'>('darbar');
  const [checkIn] = useState('01 February, 2026');
  const [checkOut] = useState('10 February, 2026');
  const [commentName, setCommentName] = useState('');
  const [commentEmail, setCommentEmail] = useState('');
  const [commentMsg, setCommentMsg] = useState('');
  const [saveInfo, setSaveInfo] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const prices = { darbar: 245000, hotel: 285000 };
  const totalPrice = prices[selectedPackage];

  return (
    <div style={{ paddingTop: '72px' }}>
      {/* Announcement Bar */}
      <div
        className="announcement-bar py-2 px-4 text-center text-xs"
        style={{ color: 'rgba(var(--text-main-rgb), 0.75)', fontFamily: 'Inter, sans-serif' }}
      >
        <span style={{ color: '#D4AF37' }}>Email: info@Baghdaditravels.com</span>
        {' | '}
        <span className="font-semibold">50% Off Your Next Trip. Hurry Up For your new Tour!</span>
        {' | '}
        <a href="#" className="ml-2 hover:text-yellow-400 transition-colors">Facebook</a>
        {' · '}
        <a href="#" className="hover:text-yellow-400 transition-colors">Instagram</a>
      </div>

      {/* Hero */}
      <div className="relative py-16 overflow-hidden" style={{ background: 'var(--bg-mid)' }}>
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: 'url(https://images.unsplash.com/photo-1564547889663-dbebc1c00849?w=1400&h=400&fit=crop&auto=format)',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            opacity: 0.12,
          }}
        />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-2 text-xs mb-4" style={{ color: 'rgba(var(--text-main-rgb), 0.5)' }}>
            <button onClick={() => onNavigate('home')} className="hover:text-yellow-400 transition-colors">Home</button>
            <span>›</span>
            <span style={{ color: '#D4AF37' }}>Baghdad Tour 2026 Package 1</span>
          </div>
          <h1 className="text-3xl sm:text-5xl font-black" style={{ fontFamily: 'Outfit, sans-serif', color: 'var(--text-main)' }}>
            Baghdad Tour <span className="gold-text">2026</span>
          </h1>
          <p className="mt-2 text-sm" style={{ color: 'rgba(var(--text-main-rgb), 0.65)' }}>Package 1 — Sacred Ziyarat Tour</p>
        </div>
      </div>

      <section style={{ background: 'var(--bg-deep)' }} className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-10">
            {/* Main Content */}
            <div className="lg:col-span-2 space-y-8">
              {/* Hero Image */}
              <div className="relative rounded-2xl overflow-hidden" style={{ height: '320px', background: 'var(--bg-mid)' }}>
                <img
                  src="https://images.unsplash.com/photo-1564287535259-91d01d9a634b?w=900&h=500&fit=crop&auto=format"
                  alt="Baghdad Ziyarat"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0" style={{ background: 'linear-gradient(to top, rgba(var(--bg-deep-rgb), 0.7) 0%, transparent 60%)' }} />
              </div>

              {/* Pricing Banner */}
              <div
                className="flex flex-wrap items-center justify-between gap-4 p-5 rounded-xl"
                style={{ background: 'var(--bg-mid)', border: '1px solid rgba(212,175,55,0.25)' }}
              >
                <div>
                  <p className="text-xs mb-1" style={{ color: 'rgba(var(--text-main-rgb), 0.5)' }}>Starting From</p>
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
                    ₨245,000
                  </p>
                  <p className="text-xs" style={{ color: 'rgba(var(--text-main-rgb), 0.4)' }}>Per Person | TAXES INCL</p>
                </div>
                <div className="flex flex-wrap gap-4">
                  <div className="text-center">
                    <p className="text-xs mb-1" style={{ color: 'rgba(var(--text-main-rgb), 0.5)' }}>Max People</p>
                    <p className="text-lg font-bold" style={{ fontFamily: 'Outfit, sans-serif', color: 'var(--text-main)' }}>100,000</p>
                  </div>
                  <div className="text-center">
                    <p className="text-xs mb-1" style={{ color: 'rgba(var(--text-main-rgb), 0.5)' }}>Destination</p>
                    <p className="text-lg font-bold" style={{ fontFamily: 'Outfit, sans-serif', color: 'var(--text-main)' }}>Baghdad</p>
                  </div>
                </div>
              </div>

              {/* Included / Excluded */}
              <div className="grid sm:grid-cols-2 gap-6">
                <div className="p-5 rounded-xl" style={{ background: 'var(--bg-mid)', border: '1px solid rgba(212,175,55,0.15)' }}>
                  <h4 className="text-sm font-bold mb-4" style={{ color: '#D4AF37', fontFamily: 'Outfit, sans-serif' }}>✓ Included</h4>
                  <div className="space-y-2.5">
                    {['Return Air Ticket', 'Visa', 'Hotels', '03 Meals Daily', 'Ground Transport'].map(item => (
                      <div key={item} className="flex items-center gap-2">
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" style={{ color: '#22c55e', flexShrink: 0 }}>
                          <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/>
                        </svg>
                        <span className="text-sm" style={{ color: 'rgba(var(--text-main-rgb), 0.75)' }}>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="p-5 rounded-xl" style={{ background: 'var(--bg-mid)', border: '1px solid rgba(255,80,80,0.15)' }}>
                  <h4 className="text-sm font-bold mb-4" style={{ color: '#f87171', fontFamily: 'Outfit, sans-serif' }}>✗ Not Included</h4>
                  <div className="space-y-2.5">
                    {['Personal Expenses', 'Travel Insurance', 'Optional Tours', 'Gratuities'].map(item => (
                      <div key={item} className="flex items-center gap-2">
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" style={{ color: '#f87171', flexShrink: 0 }}>
                          <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"/>
                        </svg>
                        <span className="text-sm" style={{ color: 'rgba(var(--text-main-rgb), 0.65)' }}>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Tour Highlights */}
              <div className="p-6 rounded-xl" style={{ background: 'var(--bg-mid)', border: '1px solid rgba(212,175,55,0.15)' }}>
                <h3 className="text-lg font-bold mb-4" style={{ fontFamily: 'Outfit, sans-serif', color: 'var(--text-main)' }}>
                  Highlights of the Tour
                </h3>
                <div className="grid sm:grid-cols-3 gap-4">
                  {[
                    { nights: '06 Nights', place: 'Baghdad', icon: '🕌' },
                    { nights: '02 Nights', place: 'Karbala Maula', icon: '✨' },
                    { nights: '02 Nights', place: 'Najaf Ashraf', icon: '🌙' },
                  ].map(h => (
                    <div
                      key={h.place}
                      className="text-center p-4 rounded-lg"
                      style={{ background: 'rgba(212,175,55,0.06)', border: '1px solid rgba(212,175,55,0.15)' }}
                    >
                      <div className="text-3xl mb-2">{h.icon}</div>
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
                        {h.nights}
                      </p>
                      <p className="text-xs mt-1" style={{ color: 'rgba(var(--text-main-rgb), 0.65)' }}>in {h.place}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Comments */}
              <div>
                <h3 className="text-xl font-bold mb-5" style={{ fontFamily: 'Outfit, sans-serif', color: 'var(--text-main)' }}>
                  Customer Comments
                </h3>
                <div
                  className="p-5 rounded-xl mb-6"
                  style={{ background: 'var(--bg-mid)', border: '1px solid rgba(212,175,55,0.15)' }}
                >
                  <div className="flex items-start gap-3">
                    <div
                      className="w-9 h-9 rounded-full flex items-center justify-center text-sm font-bold shrink-0"
                      style={{ background: 'linear-gradient(135deg, #D4AF37, #E5C158)', color: 'var(--bg-deep)', fontFamily: 'Outfit, sans-serif' }}
                    >
                      A
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center justify-between mb-1">
                        <span className="text-sm font-semibold" style={{ fontFamily: 'Outfit, sans-serif', color: 'var(--text-main)' }}>Ali</span>
                        <span className="text-xs" style={{ color: 'rgba(var(--text-main-rgb), 0.45)' }}>03 March, 2026</span>
                      </div>
                      <p className="text-sm" style={{ color: 'rgba(var(--text-main-rgb), 0.7)' }}>
                        Looking for baghdad ziyarath packages. Sent me your whatsapp number. Thanks!
                      </p>
                      <button className="mt-2 text-xs font-semibold" style={{ color: '#D4AF37', fontFamily: 'Outfit, sans-serif' }}>Reply</button>
                    </div>
                  </div>
                </div>

                {/* Comment Form */}
                <div className="p-6 rounded-xl" style={{ background: 'var(--bg-mid)', border: '1px solid rgba(212,175,55,0.15)' }}>
                  <h4 className="text-base font-bold mb-1" style={{ fontFamily: 'Outfit, sans-serif', color: 'var(--text-main)' }}>Leave a Comment</h4>
                  <p className="text-xs mb-4" style={{ color: 'rgba(var(--text-main-rgb), 0.45)' }}>Your email address will not be published.</p>
                  {submitted ? (
                    <p className="text-sm" style={{ color: '#D4AF37' }}>Thank you for your comment! We will get back to you shortly.</p>
                  ) : (
                    <div className="space-y-3">
                      <input
                        type="text"
                        placeholder="Your Name*"
                        value={commentName}
                        onChange={e => setCommentName(e.target.value)}
                        className="luxury-input w-full px-4 py-2.5 rounded-md text-sm"
                      />
                      <input
                        type="email"
                        placeholder="Your Email*"
                        value={commentEmail}
                        onChange={e => setCommentEmail(e.target.value)}
                        className="luxury-input w-full px-4 py-2.5 rounded-md text-sm"
                      />
                      <label className="flex items-center gap-2 cursor-pointer">
                        <input type="checkbox" checked={saveInfo} onChange={e => setSaveInfo(e.target.checked)} className="accent-yellow-500" />
                        <span className="text-xs" style={{ color: 'rgba(var(--text-main-rgb), 0.55)' }}>Save my name and email for next time</span>
                      </label>
                      <textarea
                        rows={4}
                        placeholder="Your Message*"
                        value={commentMsg}
                        onChange={e => setCommentMsg(e.target.value)}
                        className="luxury-input w-full px-4 py-2.5 rounded-md text-sm resize-none"
                      />
                      <button
                        onClick={() => { if (commentName && commentEmail && commentMsg) setSubmitted(true); }}
                        className="btn-gold px-6 py-2.5 rounded-md text-sm font-bold"
                      >
                        Submit
                      </button>
                    </div>
                  )}
                </div>
              </div>
            </div>

            {/* Booking Sidebar */}
            <div className="space-y-5">
              <div
                className="sticky top-24 p-6 rounded-2xl"
                style={{ background: 'var(--bg-mid)', border: '1px solid rgba(212,175,55,0.25)' }}
              >
                <h3 className="text-lg font-bold mb-5" style={{ fontFamily: 'Outfit, sans-serif', color: 'var(--text-main)' }}>
                  Book This Package
                </h3>

                {/* Dates */}
                <div className="space-y-3 mb-5">
                  <div>
                    <label className="text-xs font-semibold mb-1.5 block" style={{ color: 'rgba(var(--text-main-rgb), 0.6)', fontFamily: 'Outfit, sans-serif' }}>Check In</label>
                    <input
                      type="text"
                      readOnly
                      value={checkIn}
                      className="luxury-input w-full px-4 py-2.5 rounded-md text-sm cursor-pointer"
                    />
                  </div>
                  <div>
                    <label className="text-xs font-semibold mb-1.5 block" style={{ color: 'rgba(var(--text-main-rgb), 0.6)', fontFamily: 'Outfit, sans-serif' }}>Check Out</label>
                    <input
                      type="text"
                      readOnly
                      value={checkOut}
                      className="luxury-input w-full px-4 py-2.5 rounded-md text-sm cursor-pointer"
                    />
                  </div>
                </div>

                {/* Package Options */}
                <div className="mb-5">
                  <label className="text-xs font-semibold mb-2 block" style={{ color: 'rgba(var(--text-main-rgb), 0.6)', fontFamily: 'Outfit, sans-serif' }}>Package Option</label>
                  <div className="space-y-2">
                    {[
                      { key: 'darbar' as const, label: 'Darbar Package', price: '₨245,000' },
                      { key: 'hotel' as const, label: 'Hotel Package', price: '₨285,000' },
                    ].map(opt => (
                      <button
                        key={opt.key}
                        onClick={() => setSelectedPackage(opt.key)}
                        className="w-full flex items-center justify-between px-4 py-3 rounded-lg transition-all duration-200"
                        style={{
                          background: selectedPackage === opt.key ? 'rgba(212,175,55,0.12)' : 'rgba(var(--overlay-rgb), 0.03)',
                          border: selectedPackage === opt.key ? '1.5px solid rgba(212,175,55,0.5)' : '1px solid rgba(var(--overlay-rgb), 0.08)',
                          color: selectedPackage === opt.key ? '#D4AF37' : 'rgba(var(--text-main-rgb), 0.65)',
                          fontFamily: 'Outfit, sans-serif',
                        }}
                      >
                        <span className="text-sm font-semibold">{opt.label}</span>
                        <span className="text-sm font-bold">{opt.price}</span>
                      </button>
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
                    ₨{totalPrice.toLocaleString()}
                  </span>
                </div>

                <button onClick={() => onNavigate('contact')} className="btn-gold w-full py-3 rounded-md text-sm font-bold mb-3">
                  Book Now
                </button>
                <a
                  href="tel:03362321117"
                  className="btn-outline-gold w-full py-3 rounded-md text-sm text-center block"
                >
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
