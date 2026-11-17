import { Link, useRouterState } from '@tanstack/react-router';
import { useEffect, useState, useRef, type ReactNode } from 'react';
import { ArrowRight, ArrowUpRight, Menu, X, Phone, MapPin, MessageCircle, Mountain, Wifi, Car, Flame, UtensilsCrossed, PawPrint, Sparkles, Sun, Heart, Coffee, Zap, Compass, Trees, Check, ChevronLeft, ChevronRight, Plus, Snowflake, Leaf, CloudSun, Play, Pause, Volume2, VolumeX, Star, Quote } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useScrollReveal, useParallax, useCountUp } from '@/hooks/use-scroll-reveal';
import bannerVideo from '@/assets/Banner-video.mp4';
import loobyImg from '@/assets/looby.png';
import fernitureImg from '@/assets/ferniture.png';
import looby2Img from '@/assets/looby2.png';
import propertyDaylight from '@/assets/property-daylight.webp';
import propertyGarden from '@/assets/property-garden.webp';
import propertyNight from '@/assets/property-night.webp';
import mountainGateway from '@/assets/mountain-gateway.webp';
import terraceEvening from '@/assets/terrace-evening.webp';
import deluxeRoom from '@/assets/deluxeroomsACwith-terrace.png';
import deluxeRoom2 from '@/assets/deluxeroomsACwith-terrace2.png';
import deluxeBathroom from '@/assets/deluxerooms-bathroom.png';
import standardRoomImg from '@/assets/Standardrooms.png';
import standardRoom2Img from '@/assets/Standardrooms2.png';
import standardRoomLobbyImg from '@/assets/Standardrooms-lobby.png';
const standardRoom = standardRoomImg; // Authentic homestay bedroom interior photo
import superiorDeluxeBalcony from '@/assets/superior-deluxe-balcony.png';
import superiorDeluxeBalconyView from '@/assets/superior-deluxe-balcony-view.png';
import superiorDeluxeRoom2 from '@/assets/superior-deluxe-room2.png';
const balconyRoom = superiorDeluxeBalconyView; // Authentic Superior Deluxe balcony view photo
import gardenEvening from '@/assets/garden-evening.webp';

export const whatsapp = 'https://wa.me/918219967293?text=Hello%20Ecstasy%20Farms%20Dalhousie%2C%20I%20would%20like%20to%20enquire%20about%20room%20availability%20and%20booking.';
export const directions = 'https://www.google.com/maps/dir/?api=1&destination=Ecstasy+Farms+Dalhousie+Village+Manola';
const links = [
  { label: 'Home', to: '/' }, { label: 'Rooms', to: '/rooms' }, { label: 'About', to: '/about' },
  { label: 'Amenities', to: '/amenities' }, { label: 'Dining', to: '/dining' }, { label: 'Experiences', to: '/experiences' },
  { label: 'Gallery', to: '/gallery' }, { label: 'Location', to: '/location' }, { label: 'Contact', to: '/contact' },
] as const;

const heroSlides = [
  { src: propertyDaylight, alt: 'Ecstasy Farms Dalhousie homestay with red roof and pine trees' },
  { src: mountainGateway, alt: 'Mountain view beyond the entrance to Ecstasy Farms' },
  { src: propertyNight, alt: 'Ecstasy Farms Dalhousie at night under the stars' },
  { src: terraceEvening, alt: 'Evening setup on the terrace at Ecstasy Farms' },
];



function Reveal({
  children,
  delay = 0,
  y = 32,
  animation = 'fade-up',
  className = '',
}: {
  children: ReactNode;
  delay?: number;
  y?: number;
  animation?: 'fade-up' | 'fade-down' | 'fade-left' | 'fade-right' | 'zoom-in' | 'blur-in';
  className?: string;
}) {
  const [ref, visible] = useScrollReveal<HTMLDivElement>();
  return (
    <div
      ref={ref}
      className={`reveal reveal-${animation} ${visible ? 'reveal-in' : ''} ${className}`}
      style={{ '--reveal-delay': `${delay}ms`, '--reveal-y': `${y}px` } as React.CSSProperties}
    >
      {children}
    </div>
  );
}

function AnimatedStat({
  value,
  decimals = 0,
  startFrom = 0,
  prefix = null,
  suffix = null,
  label,
  sub,
  icon = null,
  delay = 0,
}: {
  value: number;
  decimals?: number;
  startFrom?: number;
  prefix?: ReactNode;
  suffix?: ReactNode;
  label: string;
  sub: string;
  icon?: ReactNode;
  delay?: number;
}) {
  const [ref, visible] = useScrollReveal<HTMLDivElement>();
  const count = useCountUp(value, 1500, visible, decimals, startFrom);

  return (
    <div
      ref={ref}
      className={`reveal reveal-zoom-in ${visible ? 'reveal-in' : ''}`}
      style={{ '--reveal-delay': `${delay}ms` } as React.CSSProperties}
    >
      <div className="stat-item">
        <div className="stat-number">
          {prefix}
          {count}
          {suffix}
          {icon}
        </div>
        <div className="stat-label">{label}</div>
        <div className="stat-sub">{sub}</div>
      </div>
    </div>
  );
}

function HeroVideoBanner() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(true);
  const [isMuted, setIsMuted] = useState(true);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    video.muted = true;
    const playPromise = video.play();
    if (playPromise !== undefined) {
      playPromise
        .then(() => setIsPlaying(true))
        .catch(() => {
          setIsPlaying(false);
        });
    }
  }, []);

  const togglePlay = () => {
    const video = videoRef.current;
    if (!video) return;
    if (video.paused) {
      video.play().then(() => setIsPlaying(true)).catch(() => { });
    } else {
      video.pause();
      setIsPlaying(false);
    }
  };

  const toggleMute = () => {
    const video = videoRef.current;
    if (!video) return;
    video.muted = !video.muted;
    setIsMuted(video.muted);
  };

  return (
    <div className="hero-video-container" aria-label="Ecstasy Farms Dalhousie Video Banner">
      <video
        ref={videoRef}
        className="hero-video-element"
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
        poster={propertyNight}
        aria-hidden="true"
      >
        <source src={bannerVideo} type="video/mp4" />
      </video>

      <div className="hero-video-controls" aria-label="Banner video controls">
        <button
          type="button"
          onClick={togglePlay}
          className="hero-video-ctrl-btn"
          aria-label={isPlaying ? 'Pause banner video' : 'Play banner video'}
          title={isPlaying ? 'Pause video' : 'Play video'}
        >
          {isPlaying ? <Pause size={14} /> : <Play size={14} />}
          <span>{isPlaying ? 'Pause' : 'Play'}</span>
        </button>
        <button
          type="button"
          onClick={toggleMute}
          className="hero-video-ctrl-btn"
          aria-label={isMuted ? 'Unmute video sound' : 'Mute video sound'}
          title={isMuted ? 'Unmute video sound' : 'Mute video sound'}
        >
          {isMuted ? <VolumeX size={14} /> : <Volume2 size={14} />}
          <span>{isMuted ? 'Muted' : 'Sound'}</span>
        </button>
      </div>
    </div>
  );
}

function HeroCarousel() {
  const [current, setCurrent] = useState(0);
  useEffect(() => {
    const timer = setInterval(() => setCurrent((c) => (c + 1) % heroSlides.length), 5000);
    return () => clearInterval(timer);
  }, []);
  return (
    <div className="hero-carousel" aria-label="Property highlights slideshow">
      {heroSlides.map((slide, i) => (
        <img
          key={slide.src}
          src={slide.src}
          alt={slide.alt}
          className={`hero-slide ${i === current ? 'active' : ''}`}
          fetchPriority={i === 0 ? 'high' : 'low'}
          loading={i === 0 ? 'eager' : 'lazy'}
        />
      ))}
      <div className="hero-carousel-dots">
        {heroSlides.map((_, i) => (
          <button
            key={i}
            className={`hero-dot ${i === current ? 'active' : ''}`}
            onClick={() => setCurrent(i)}
            aria-label={`Show slide ${i + 1}`}
          />
        ))}
      </div>
    </div>
  );
}

function FaqItem({ question, answer }: { question: string; answer: string }) {
  const [open, setOpen] = useState(false);
  return (
    <div className={`faq-item ${open ? 'open' : ''}`}>
      <div className="faq-summary" onClick={() => setOpen(!open)} role="button" tabIndex={0} onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); setOpen(!open); } }}>
        <h3>{question}</h3>
        <span className="faq-toggle"><Plus size={18} /></span>
      </div>
      <div className="faq-answer"><p>{answer}</p></div>
    </div>
  );
}

function WelcomeOverlay() {
  const [show, setShow] = useState(true);
  const [exiting, setExiting] = useState(false);

  useEffect(() => {
    try {
      const shown = sessionStorage.getItem('ef_welcome_shown');
      if (shown) {
        setShow(false);
        return;
      }
      sessionStorage.setItem('ef_welcome_shown', 'true');

      // Exactly 3.0 seconds total: stay full for ~2.55s, fade-out to unmount at 3.0s
      const exitTimer = setTimeout(() => {
        setExiting(true);
      }, 2550);

      const removeTimer = setTimeout(() => {
        setShow(false);
      }, 3000);

      return () => {
        clearTimeout(exitTimer);
        clearTimeout(removeTimer);
      };
    } catch {
      setShow(false);
    }
  }, []);

  useEffect(() => {
    if (show && !exiting) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [show, exiting]);

  if (!show) return null;

  const handleDismiss = () => {
    setExiting(true);
    setTimeout(() => setShow(false), 250);
  };

  return (
    <div
      className={`welcome-overlay ${exiting ? 'welcome-exiting' : ''}`}
      onClick={handleDismiss}
      role="dialog"
      aria-modal="true"
      aria-label="Welcome to Ecstasy Farms Dalhousie"
      style={{
        position: 'fixed',
        inset: 0,
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        width: '100%',
        height: '100%',
        maxWidth: '100%',
        zIndex: 999999,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        background: 'radial-gradient(circle at center, #142e21 0%, #0c1a13 70%, #050d09 100%)',
        color: '#ffffff',
        cursor: 'pointer',
        overflow: 'hidden',
        opacity: exiting ? 0 : 1,
        transform: exiting ? 'scale(1.04)' : 'scale(1)',
        pointerEvents: exiting ? 'none' : 'auto',
        transition: 'opacity 0.5s cubic-bezier(0.4, 0, 0.2, 1), transform 0.5s cubic-bezier(0.4, 0, 0.2, 1)',
      }}
    >
      <div className="welcome-backdrop-glow" aria-hidden="true" />
      <div
        className="welcome-card"
        style={{
          position: 'relative',
          zIndex: 2,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          textAlign: 'center',
          maxWidth: '520px',
          width: '90%',
          padding: '24px 20px',
        }}
      >
        <div
          className="welcome-logo-wrap"
          style={{
            position: 'relative',
            width: '108px',
            height: '108px',
            maxWidth: '108px',
            maxHeight: '108px',
            borderRadius: '50%',
            padding: '4px',
            background: 'linear-gradient(135deg, #c4833c, #f4d090, #2d5a3d)',
            boxShadow: '0 0 35px rgba(196, 131, 60, 0.45), 0 10px 25px rgba(0, 0, 0, 0.5)',
            marginBottom: '20px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <div
            className="welcome-logo-inner"
            style={{
              width: '100%',
              height: '100%',
              borderRadius: '50%',
              background: '#ffffff',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              overflow: 'hidden',
            }}
          >
            <img
              src="/favicon.png"
              alt="Ecstasy Farms Dalhousie Logo"
              className="welcome-logo-img"
              style={{
                width: '78px',
                height: '78px',
                maxWidth: '78px',
                maxHeight: '78px',
                objectFit: 'contain',
                display: 'block',
              }}
            />
          </div>
        </div>

        <span
          className="welcome-eyebrow"
          style={{
            fontFamily: 'var(--font-sans)',
            fontSize: '11px',
            fontWeight: 600,
            letterSpacing: '0.3em',
            textTransform: 'uppercase',
            color: '#e2b078',
            marginBottom: '10px',
          }}
        >
          WELCOME TO
        </span>
        <h1
          className="welcome-title"
          style={{
            fontFamily: 'var(--font-display)',
            fontSize: 'clamp(2.6rem, 6.5vw, 4.2rem)',
            fontWeight: 500,
            letterSpacing: '0.03em',
            color: '#ffffff',
            margin: '0 0 10px 0',
            lineHeight: 1.1,
          }}
        >
          Ecstasy <em style={{ fontStyle: 'italic', color: '#f6d8a8' }}>Farms</em>
        </h1>

        <div
          className="welcome-divider"
          aria-hidden="true"
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '12px',
            margin: '10px 0 14px 0',
            width: '100%',
          }}
        >
          <span
            className="welcome-line"
            style={{
              height: '1px',
              width: '55px',
              background: 'linear-gradient(90deg, transparent, rgba(226, 176, 120, 0.6), transparent)',
            }}
          />
          <span className="welcome-star" style={{ color: '#e2b078', fontSize: '11px' }}>
            ✦
          </span>
          <span
            className="welcome-line"
            style={{
              height: '1px',
              width: '55px',
              background: 'linear-gradient(90deg, transparent, rgba(226, 176, 120, 0.6), transparent)',
            }}
          />
        </div>

        <div
          className="welcome-location-pill"
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '6px',
            padding: '6px 14px',
            borderRadius: '999px',
            background: 'rgba(255, 255, 255, 0.08)',
            border: '1px solid rgba(255, 255, 255, 0.15)',
            fontSize: '11px',
            letterSpacing: '0.12em',
            textTransform: 'uppercase',
            color: 'rgba(255, 255, 255, 0.9)',
            marginBottom: '14px',
          }}
        >
          <MapPin size={12} style={{ color: '#e2b078' }} />
          <span>Village Manola · Dalhousie</span>
        </div>

        <p
          className="welcome-tagline"
          style={{
            fontFamily: 'var(--font-sans)',
            fontSize: '14px',
            color: 'rgba(255, 255, 255, 0.8)',
            margin: '0 0 20px 0',
            letterSpacing: '0.02em',
          }}
        >
          A slower rhythm, a little closer to nature.
        </p>

        <div
          className="welcome-progress-wrap"
          aria-hidden="true"
          style={{
            width: '180px',
            height: '4px',
            borderRadius: '999px',
            background: 'rgba(255, 255, 255, 0.15)',
            overflow: 'hidden',
            position: 'relative',
            marginTop: '6px',
            boxShadow: 'inset 0 1px 2px rgba(0, 0, 0, 0.4)',
          }}
        >
          <div className="welcome-progress-bar" />
        </div>

        <div
          className="welcome-status-pill"
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '7px',
            marginTop: '12px',
            fontSize: '11px',
            letterSpacing: '0.14em',
            textTransform: 'uppercase',
            color: '#f4d090',
            opacity: 0.9,
          }}
        >
          <span className="welcome-status-dot" />
          <span>Entering sanctuary...</span>
        </div>
      </div>
    </div>
  );
}

export function SiteLayout({ children }: { children: ReactNode }) {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = useRouterState({ select: (s) => s.location.pathname });
  useEffect(() => { setOpen(false); }, [pathname]);
  useEffect(() => { const onScroll = () => setScrolled(window.scrollY > 24); onScroll(); window.addEventListener('scroll', onScroll, { passive: true }); return () => window.removeEventListener('scroll', onScroll); }, []);
  return <div className="site-shell">
    <WelcomeOverlay />
    <header className={`site-header ${scrolled ? 'is-scrolled' : ''}`}>
      <div className="header-inner">
        <Link to="/" className="brand" aria-label="Ecstasy Farms Dalhousie home">
          <span className="brand-mark">
            <img src="/favicon.png" alt="Ecstasy Farms Dalhousie Logo" className="brand-logo-img" />
          </span>
          <span className="brand-type"><strong>ECSTASY FARMS</strong><small>DALHOUSIE · HIMACHAL</small></span>
        </Link>
        <nav className="desktop-nav" aria-label="Main navigation">{links.map((link) => <Link key={link.to} to={link.to} className={pathname === link.to ? 'nav-active' : ''}>{link.label}</Link>)}</nav>
        <div className="header-actions"><Button asChild variant="booking" size="sm" className="header-book text-white"><a href={whatsapp} target="_blank" rel="noopener noreferrer" className="text-white"><MessageCircle size={16} /> Book Now</a></Button><Button variant="ghost" size="icon" className="menu-button" onClick={() => setOpen(!open)} aria-label={open ? 'Close menu' : 'Open menu'} aria-expanded={open}>{open ? <X /> : <Menu />}</Button></div>
      </div>
      {open && <nav className="mobile-nav" aria-label="Mobile navigation">{links.map((link) => <Link key={link.to} to={link.to} className={pathname === link.to ? 'nav-active' : ''}>{link.label}<ArrowUpRight size={16} /></Link>)}<a href={whatsapp} target="_blank" rel="noopener noreferrer">Book on WhatsApp <ArrowUpRight size={16} /></a></nav>}
    </header>
    <main>{children}</main>
    <div className="floating-actions">
      <a href="tel:+918219967293" className="floating-btn floating-call" aria-label="Call Ecstasy Farms" title="Call Now"><Phone size={26} /></a>
      <a href={whatsapp} target="_blank" rel="noopener noreferrer" className="floating-btn floating-whatsapp" aria-label="Chat on WhatsApp" title="Book on WhatsApp">
        <svg width="28" height="28" viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.149-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51l-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" /></svg>
        <span className="floating-label">Book Now</span>
      </a>
    </div>
    <footer className="footer"><div className="container footer-top"><div className="footer-brand"><div className="footer-logo-row"><img src="/favicon.png" alt="Ecstasy Farms Dalhousie Logo" className="footer-logo-img" /><span className="eyebrow light">A LITTLE CLOSER TO NATURE</span></div><h2>Find your quiet<br /><em>in the hills.</em></h2><Button asChild variant="light" size="lg" className="footer-enquire-btn"><a href={whatsapp} target="_blank" rel="noopener noreferrer" className="footer-enquire-link text-primary font-semibold">Enquire on WhatsApp <ArrowUpRight /></a></Button></div><div className="footer-columns"><div><h3>Explore</h3><Link to="/rooms">Rooms</Link><Link to="/about">Our story</Link><Link to="/dining">Dining</Link><Link to="/gallery">Gallery</Link><Link to="/experiences">Experiences</Link></div><div><h3>Plan your stay</h3><Link to="/amenities">Amenities</Link><Link to="/location">Location</Link><Link to="/contact">Contact</Link><a href={directions} target="_blank" rel="noopener noreferrer">Directions</a></div><div><h3>Say hello</h3><a href="tel:+918219967293">+91 82199 67293</a><a href={whatsapp} target="_blank" rel="noopener noreferrer">WhatsApp: +91 82199 67293</a><p>Village Manola, Dalhousie–Chamba Road<br />Himachal Pradesh 176306</p></div></div></div><div className="container footer-bottom"><span>© {new Date().getFullYear()} Ecstasy Farms Dalhousie. All rights reserved.</span><span>Made for the slower moments.</span><a href="https://www.techhim.online/" target="_blank" rel="noopener noreferrer" className="powered-by-link">Powered by <strong>TechHim Solutions</strong></a></div></footer>
  </div>;
}
export function SectionLabel({ children }: { children: ReactNode }) { return <span className="eyebrow"><span className="eyebrow-line" />{children}</span>; }
export function BookingButton({ children = 'Book on WhatsApp', className = '', message }: { children?: ReactNode; className?: string; message?: string }) {
  const url = message ? `https://wa.me/918219967293?text=${encodeURIComponent(message)}` : whatsapp;
  return <Button asChild variant="booking" size="lg" className={`text-white ${className}`}><a href={url} target="_blank" rel="noopener noreferrer" className="text-white"><MessageCircle size={17} />{children}<ArrowUpRight size={17} /></a></Button>;
}
export function TextLink({ to, children }: { to: '/' | '/rooms' | '/about' | '/amenities' | '/dining' | '/experiences' | '/gallery' | '/location' | '/contact'; children: ReactNode }) { return <Link to={to} className="text-link">{children}<ArrowUpRight size={18} /></Link>; }
export function PageHero({ label, title, description, image, alt }: { label: string; title: string; description: string; image: string; alt: string }) {
  const parallaxRef = useParallax<HTMLDivElement>(0.15);
  return <section className="page-hero"><div ref={parallaxRef} className="page-hero-bg" style={{ '--parallax-img': `url(${image})` } as React.CSSProperties} /><div className="hero-shade" /><div className="container page-hero-content"><span className="eyebrow light"><span className="eyebrow-line" />{label}</span><h1 className="page-hero-title">{title}</h1><p className="page-hero-desc">{description}</p></div></section>;
}
export function ClosingCTA({ title = 'Your mountain escape is waiting.', description = 'Come for the views. Stay for the feeling of being right where you belong.' }: { title?: string; description?: string }) {
  const parallaxRef = useParallax<HTMLElement>(0.2);
  return <section ref={parallaxRef} className="closing-cta"><img src={terraceEvening} alt="Evening setup on the terrace at Ecstasy Farms" loading="lazy" /><div className="hero-shade" /><div className="container closing-content"><SectionLabel>MAKE ROOM FOR STILLNESS</SectionLabel><h2>{title}</h2><p>{description}</p><BookingButton>Enquire about your stay</BookingButton></div></section>;
}
export function RoomCards() {
  const rooms = [
    {
      kicker: '01 / HOMESTAY COMFORTS',
      title: 'Standard Room',
      tag: 'Cosy Homestay',
      price: 'From ₹1,206 / night',
      image: standardRoom,
      alt: 'Standard Room with double bed at Ecstasy Farms Dalhousie',
      desc: 'A comfortable, peaceful place to unwind after exploring Dalhousie, featuring genuine homestay warmth and mountain air.',
      amenities: ['Mountain Air', 'Free Wi-Fi', 'Attached Bath', 'Homely Meals'],
      message: 'Hello Ecstasy Farms Dalhousie, I would like to enquire about availability and booking for the Standard Room.'
    },
    {
      kicker: '02 / POPULAR FOR COUPLES',
      title: 'Deluxe AC Room with Terrace',
      tag: 'Private Terrace & AC',
      price: 'Popular Choice',
      image: deluxeRoom,
      alt: 'Deluxe AC Room with Terrace interior at Ecstasy Farms',
      desc: 'Air-conditioned comfort paired with an expansive open terrace to enjoy tea, peaceful sunsets and starry Himalayan skies.',
      amenities: ['Air Conditioning', 'Open Terrace', 'Scenic Outlook', 'Free Wi-Fi'],
      message: 'Hello Ecstasy Farms Dalhousie, I would like to enquire about availability and booking for the Deluxe AC Room with Terrace.'
    },
    {
      kicker: '03 / BEST MOUNTAIN VIEW',
      title: 'Superior Deluxe Room with Balcony',
      tag: 'Panoramic Balcony',
      price: 'Top Choice for Families',
      image: balconyRoom,
      alt: 'Superior Deluxe Room with Balcony and valley outlook at Ecstasy Farms',
      desc: 'Wake up to the hills at your own pace, step onto your private balcony, and absorb breathtaking valley views right from bed.',
      amenities: ['Private Balcony', 'Himalayan Valley View', 'Spacious Seating', 'Free Wi-Fi'],
      message: 'Hello Ecstasy Farms Dalhousie, I would like to enquire about availability and booking for the Superior Deluxe Room with Balcony.'
    }
  ];

  return (
    <div className="room-grid">
      {rooms.map((room, idx) => (
        <Reveal key={room.title} delay={idx * 120}>
          <article className="room-card">
            <div className="room-photo-wrap">
              <Link to="/rooms" className="room-photo">
                <img src={room.image} alt={room.alt} loading="lazy" />
                <span className="room-tag-badge">{room.tag}</span>
                <span className="room-price-badge">{room.price}</span>
                <span className="photo-arrow"><ArrowUpRight size={18} /></span>
              </Link>
            </div>
            <div className="room-copy">
              <span className="card-kicker">{room.kicker}</span>
              <h3>{room.title}</h3>
              <p>{room.desc}</p>
              <div className="room-card-amenities">
                {room.amenities.map(item => (
                  <span key={item} className="room-amenity-chip"><Check size={12} strokeWidth={2.4} /> {item}</span>
                ))}
              </div>
              <div className="room-card-actions">
                <BookingButton message={room.message} className="room-card-book-btn">
                  Enquire on WhatsApp
                </BookingButton>
                <Link to="/rooms" className="room-card-link">
                  Details <ArrowUpRight size={14} />
                </Link>
              </div>
            </div>
          </article>
        </Reveal>
      ))}
    </div>
  );
}

function GoogleIcon({ size = 20 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" aria-hidden="true">
      <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" />
      <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
      <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.63z" />
      <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z" />
    </svg>
  );
}

const googleReviewCategories = [
  { id: 'all', label: 'All Reviews', count: 231 },
  { id: 'staff', label: 'Cooperative Staff', count: 19 },
  { id: 'rooms', label: 'Clean Rooms', count: 21 },
  { id: 'food', label: 'Homely Food', count: 10 },
  { id: 'bbq', label: 'Barbecue & Bonfire', count: 17 },
  { id: 'valley', label: 'Valley View', count: 6 },
  { id: 'dogs', label: 'Pet Friendly & Dogs', count: 9 },
  { id: 'hilltop', label: 'Hilltop Peace', count: 2 },
];

const googleReviewsData = [
  {
    id: '1',
    name: 'Arpita Mondal',
    badge: 'Local Guide · 81 reviews',
    rating: 5,
    timeAgo: '2 weeks ago',
    tripType: 'Vacation · Friends',
    text: "Really ecstatic stay at ecstasy farm stay. We had a great holiday. Far away from the crowd, location of the property is the main USP. Its open terrace, spacious rooms make it worth. Service is also very good. Food quality is very good and tasty. Sunny is very polite and cordial. He helped the guests in every possible way. Toilets are neat, clean and spacious. Highly recommend stay in Dalhousie area.",
    tags: ['valley', 'rooms', 'staff', 'food'],
    ratings: { rooms: 4, service: 5, location: 5 },
    ownerResponse: 'Thank you so much for your kind words of appreciation. We value your precious review.'
  },
  {
    id: '2',
    name: 'Sudarshan Kumar',
    badge: 'Local Guide · 257 reviews',
    rating: 5,
    timeAgo: '3 months ago',
    tripType: '2 Couples Getaway',
    text: "We recently had a wonderful stay at ECSTASY FARMS Homestay, and it truly exceeded our expectations. The location is beautiful, away from crowded hill stations, offering stunning views. The rooms were spacious, clean, comfortable, and well-maintained. Freshly prepared breakfast and homely meals were yummy and served hot on a well decorated table in the garden area. A special thanks to Lal Bahadur ji, Sunny & his wife for their outstanding service. They have 2 cute, lovely & friendly dogs Bruno and Bagheera!",
    tags: ['food', 'staff', 'rooms', 'dogs', 'valley'],
    ratings: { rooms: 5, service: 5, location: 5 },
    ownerResponse: 'It was an absolute pleasure to host you. We will wait for your next visit.'
  },
  {
    id: '3',
    name: 'Imran Shaikh',
    badge: 'Local Guide · 12 reviews',
    rating: 5,
    timeAgo: '5 months ago',
    tripType: 'Family Vacation',
    text: "I stayed at Ecstasy Farms for just one day, but the exceptional hospitality and warmth extended by Mr. Sunny made us change our plans and extend our stay for 4 more days! Every corner reflects cleanliness, care, and attention to detail. Our unlimited breakfast and dinner package was recommended by Mr. Navdeep Bhandari, the owner. He personally ensures that every guest enjoys a wonderful experience. Highly recommended for families, couples, and anyone seeking a peaceful getaway.",
    tags: ['staff', 'food', 'rooms'],
    ratings: { rooms: 5, service: 5, location: 5 },
    ownerResponse: 'Your words of appreciation are like oxygen for our efforts. Waiting for you again at Ecstasy Farms.'
  },
  {
    id: '4',
    name: 'Sagar Agarwal',
    badge: '6 reviews',
    rating: 5,
    timeAgo: '5 months ago',
    tripType: 'Vacation with Friends',
    text: "Best Stay Near Dalhousie & Khajjiar — Highly Recommended! If you’re planning a trip to Dalhousie or Khajjiar, look no further than Ecstasy Farm — just book it! The rooms are immaculately clean with a lovely view. The food is home-style cooking that is hygienic, flavourful, and soul-satisfying. 4-star quality service at unmatched prices. Special appreciation for Mr. Navdeep (Owner) and Mr. Sunny. And to top it all off, the music night was an absolute boom!",
    tags: ['bbq', 'food', 'staff', 'rooms', 'valley'],
    ratings: { rooms: 5, service: 5, location: 5 },
    ownerResponse: 'Thank you so much for your lovely words. We were indeed delighted to serve you.'
  },
  {
    id: '5',
    name: 'Prithvinka Rao',
    badge: '6 reviews',
    rating: 5,
    timeAgo: '4 weeks ago',
    tripType: 'Family of 11',
    text: "I travelled with my family of 11 people here. Had a wonderful experience. The hygiene, hospitality, response from the owner and caretaker’s side everything was impressive and warm. The house is filled with greenery all around, maintained extremely clean and hygienic. Has all required amenities. The caretaker made us feel extremely comfortable and at home. The food was well prepared and delicious. Will recommend it to anybody.",
    tags: ['rooms', 'staff', 'food'],
    ratings: { rooms: 5, service: 5, location: 4 },
    ownerResponse: 'Thank you so much for your kind words. Your recommendations mean the world to us.'
  },
  {
    id: '6',
    name: 'Editions Phloème',
    badge: 'International Guest · 20 photos',
    rating: 5,
    timeAgo: '10 months ago',
    tripType: 'Couple Vacation',
    text: "Ecstasy Farms is a little paradise in Nature with the mountains. The chef is a Master, here you can eat the best food of India, all is fresh and delicious. In the evening, you can eat under the stars by the fireplace. The scenic beautiful room is very clean. In this peaceful place, Sunny will do everything to make your stay magical. An exceptional place to stay!",
    tags: ['food', 'bbq', 'valley', 'rooms'],
    ratings: { rooms: 5, service: 5, location: 5 },
    ownerResponse: 'Thank you so much for your lovely words. It motivates us all the more.'
  },
  {
    id: '7',
    name: 'Ashok Kumar',
    badge: 'Verified Guest',
    rating: 5,
    timeAgo: '2 months ago',
    tripType: 'Family Vacation',
    text: "A Wonderful and Peaceful Stay at Ecstasy Farms, Dalhousie. Truly beautiful place with a very peaceful location and a warm, homely atmosphere. Surroundings are serene, views are breathtaking, and delicious home-cooked food makes the stay even more special. The lovely and welcoming hosts make you feel completely at home. Highly recommended for families visiting Dalhousie!",
    tags: ['valley', 'food', 'hilltop'],
    ratings: { rooms: 5, service: 5, location: 5 },
    ownerResponse: 'Thank you so much for your kind words of appreciation.'
  },
  {
    id: '8',
    name: 'Shalviya Upadhyay',
    badge: 'Verified Guest',
    rating: 5,
    timeAgo: '4 weeks ago',
    tripType: 'Family Vacation',
    text: "Wonderful stay surrounded by nature. Great hospitality, very hygienic rooms. The food was delicious, served with positivity. The staff was very welcoming and generous. We enjoyed a lot staying there for 2 days. Would definitely recommend everyone to come and enjoy here with family or friends.",
    tags: ['rooms', 'staff', 'food'],
    ratings: { rooms: 5, service: 5, location: 5 },
    ownerResponse: 'Thank you so much for your kind words of appreciation.'
  },
  {
    id: '9',
    name: 'Aditi Sharma',
    badge: 'Local Guide · 24 reviews',
    rating: 5,
    timeAgo: 'Verified Stay',
    tripType: 'Family & Pet Lovers',
    text: "The property is secluded and a paradise for dog lovers. They have adorable dogs that are super friendly. The staff pampers you, and takes really good care of you. The meals are served basis the time mentioned by you and are delicious (ask for their paneer bhurji) and just like home-cooked food. The rooms on the ground floor are exceptionally huge with an uninterrupted view of the valley.",
    tags: ['dogs', 'food', 'staff', 'valley'],
    ratings: { rooms: 5, service: 5, location: 5 },
    ownerResponse: 'Thank you so much for your kind words. We value your support and look forward to seeing you again.'
  },
  {
    id: '10',
    name: 'Suresh Kapur',
    badge: 'Local Guide · 110 reviews',
    rating: 5,
    timeAgo: 'Repeat Guest',
    tripType: 'Group of 9',
    text: "This is our second stay here — it is only getting better. The host Mr. Navdeep Bhandari is a super host: polite and attentive, he showers his hospitality on his guests. The cook prepares food of different cuisines at short notice. The Chambyali Dham he prepared was out of this world and served in traditional Himachal style. The property atop the hill gives plenty of cool mountain breeze.",
    tags: ['food', 'staff', 'hilltop'],
    ratings: { rooms: 5, service: 5, location: 5 },
    ownerResponse: 'Respected Sir, thank you for trusting in me and choosing to stay with us. Such appreciation is overwhelming.'
  },
  {
    id: '11',
    name: 'Rishabh Mittal',
    badge: '7 reviews',
    rating: 5,
    timeAgo: '3 months ago',
    tripType: 'Repeat Guest',
    text: "If you want a peaceful stay away from city's hustle and bustle, comfortable stay, delicious home cooked food, excellent service, I would recommend Ecstasy Farms. I have been there many times — for me no trip to Dalhousie is complete without this homestay. Caretaker Sunny and chef are helpful, and the owner Mr. Bhandari always responds to every single message.",
    tags: ['valley', 'food', 'staff'],
    ratings: { rooms: 5, service: 5, location: 5 },
    ownerResponse: 'Thank you so much for your lovely words and long association with us.'
  },
  {
    id: '12',
    name: 'Archana Rohela',
    badge: 'Local Guide · 18 reviews',
    rating: 5,
    timeAgo: 'Verified Stay',
    tripType: 'Women Friends',
    text: "Amazing place with absolutely serene and picturesque surroundings topped with excellent staff with courteous approach. Since we were only two ladies, felt completely safe at this place due to cordial staff and decent families staying there. The personal touch given by host Mr Bhandari who served us with his special homegrown lemongrass tea was unforgettable.",
    tags: ['staff', 'valley'],
    ratings: { rooms: 5, service: 5, location: 5 },
    ownerResponse: 'Thank you so much. It was indeed a pleasure to host you. Such down-to-earth guests are a blessing.'
  },
  {
    id: '13',
    name: 'Dhruv Gupta',
    badge: 'Local Guide · 18 reviews',
    rating: 5,
    timeAgo: 'Verified Stay',
    tripType: 'Pet-Friendly Stay',
    text: "An amazing homestay with gorgeous valley views, the upper floor rooms have plenty of sunlight and mountain views in the morning. The owner is very helpful, generous and kind. The homestay is pet-friendly and our dog enjoyed roaming around and they helped us out with food for her as well. Highly recommend!",
    tags: ['dogs', 'valley', 'staff'],
    ratings: { rooms: 5, service: 5, location: 5 },
    ownerResponse: 'Thank you so much for your kind words of appreciation.'
  },
  {
    id: '14',
    name: 'Surbhi Sur',
    badge: '10 reviews',
    rating: 5,
    timeAgo: 'Verified Stay',
    tripType: 'Family Vacation',
    text: "The property is built on a beautiful location, with a view of mountains from each room. Rooms are well maintained, clean and felt like living in our own home. We had a barbecue night with bonfire and music which was beyond our expectations. In short it is the best place to stay while in Dalhousie, and very budget friendly.",
    tags: ['bbq', 'rooms', 'valley'],
    ratings: { rooms: 5, service: 5, location: 5 },
    ownerResponse: 'Thank you so much for your kind words. Would love to have you again and again.'
  }
];

export function ReviewsSection() {
  const [selectedTag, setSelectedTag] = useState<string>('all');
  const [showAll, setShowAll] = useState(false);

  const filteredReviews = selectedTag === 'all'
    ? googleReviewsData
    : googleReviewsData.filter(r => r.tags.includes(selectedTag));

  const visibleReviews = showAll ? filteredReviews : filteredReviews.slice(0, 6);

  return (
    <section className="reviews-section section-space">
      <div className="container">
        <Reveal>
          <div className="section-heading centered">
            <SectionLabel>GUEST EXPERIENCES</SectionLabel>
            <h2>Words from <em>our guests.</em></h2>
            <p>Real stories and impressions from travellers who found their quiet in our corner of Dalhousie.</p>
          </div>
        </Reveal>

        {/* Google Trust Bar */}
        <Reveal delay={100}>
          <div className="reviews-summary">
            <div className="reviews-summary-left">
              <div className="reviews-score-box">
                <span className="reviews-score-big">4.8</span>
                <span className="reviews-score-max">/ 5.0</span>
              </div>
              <div className="reviews-stars-wrap">
                <div className="reviews-stars">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={17} fill="#eab308" />
                  ))}
                </div>
                <div className="reviews-meta-count">231+ Google Reviews</div>
                <div className="reviews-meta-sub">Verified Guest Ratings · Village Manola, Dalhousie</div>
              </div>
              <div className="google-brand-tag">
                <GoogleIcon size={16} />
                <span>Google Verified</span>
              </div>
            </div>
            <a
              href="https://www.google.com/maps/place/Ecstasy+Farms+Dalhousie/@32.5720038,75.9889842,17z"
              target="_blank"
              rel="noopener noreferrer"
              className="reviews-write-btn"
            >
              Write a Review <ArrowUpRight size={15} />
            </a>
          </div>
        </Reveal>

        {/* Category Filter Chips */}
        <Reveal delay={150}>
          <div className="reviews-filter-bar" role="tablist" aria-label="Filter reviews by category">
            {googleReviewCategories.map(cat => (
              <button
                key={cat.id}
                type="button"
                className={`reviews-filter-chip ${selectedTag === cat.id ? 'active' : ''}`}
                onClick={() => {
                  setSelectedTag(cat.id);
                  setShowAll(false);
                }}
              >
                <span>{cat.label}</span>
                <span className="chip-count">{cat.count}</span>
              </button>
            ))}
          </div>
        </Reveal>

        {/* Reviews Grid */}
        <div className="reviews-grid">
          {visibleReviews.map((rev, idx) => (
            <Reveal key={rev.id} delay={(idx % 3) * 80}>
              <article className="review-card">
                <div>
                  <div className="review-card-top">
                    <div className="review-author-wrap">
                      <div className="review-avatar">
                        {rev.name.charAt(0)}
                      </div>
                      <div className="review-author-info">
                        <div className="review-author-name">{rev.name}</div>
                        {rev.badge && <div className="review-badge">{rev.badge}</div>}
                      </div>
                    </div>
                    <GoogleIcon size={18} />
                  </div>

                  <div className="review-stars">
                    {[...Array(rev.rating)].map((_, i) => (
                      <Star key={i} size={14} fill="#eab308" />
                    ))}
                  </div>

                  <div className="review-trip-tag">
                    {rev.tripType || 'Homestay Stay'} · {rev.timeAgo}
                  </div>

                  <p className="review-text">"{rev.text}"</p>
                </div>

                <div>
                  {rev.ratings && (
                    <div className="review-subratings">
                      {rev.ratings.rooms && <span>Rooms: <strong>{rev.ratings.rooms}/5</strong></span>}
                      {rev.ratings.service && <span>Service: <strong>{rev.ratings.service}/5</strong></span>}
                      {rev.ratings.location && <span>Location: <strong>{rev.ratings.location}/5</strong></span>}
                    </div>
                  )}

                  {rev.ownerResponse && (
                    <div className="review-response">
                      <div className="review-response-author">Response from Navdeep (Host)</div>
                      <p className="m-0 text-xs text-muted-foreground">{rev.ownerResponse}</p>
                    </div>
                  )}
                </div>
              </article>
            </Reveal>
          ))}
        </div>

        {/* Expand / View All Actions */}
        <div className="reviews-bottom-actions">
          {filteredReviews.length > 6 && (
            <Button
              variant="outline"
              size="lg"
              onClick={() => setShowAll(!showAll)}
            >
              {showAll ? 'Show Fewer Reviews' : `Show All ${filteredReviews.length} Reviews`}
            </Button>
          )}
          <Button asChild variant="booking" size="lg" className="text-white">
            <a
              href="https://www.google.com/maps/place/Ecstasy+Farms+Dalhousie/@32.5720038,75.9889842,17z"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white"
            >
              Read All 231 Reviews on Google <ArrowUpRight size={17} />
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
}

export function HomePage() {
  const heroParallaxRef = useParallax<HTMLDivElement>(0.12);
  const introParallaxRef = useParallax<HTMLDivElement>(0.1);
  const locationParallaxRef = useParallax<HTMLDivElement>(0.15);
  return <>
    <section className="home-hero">
      <div ref={heroParallaxRef} className="home-hero-bg">
        <HeroVideoBanner />
      </div>
      <div className="hero-shade" />
      <div className="container home-hero-content">
        <div className="hero-eyebrow-container">
          <span className="eyebrow light hero-eyebrow"><span className="eyebrow-line" />ECSTASY FARMS · DALHOUSIE</span>
          <span className="hero-rating-pill"><Star size={13} className="star-gold fill-current" /> 4.8 Rating · 231+ Google Reviews</span>
        </div>
        <h1 className="home-hero-title">Escape to the<br /><em>Quiet Side</em><br />of Dalhousie</h1>
        <p className="home-hero-sub">A serene Himalayan homestay nestled in Village Manola — surrounded by pine hills, panoramic valley outlooks, home-cooked meals and heartfelt warmth.</p>
        <div className="hero-actions">
          <BookingButton>Book Your Stay</BookingButton>
          <Button asChild variant="heroOutline" size="lg">
            <a href="tel:+918219967293"><Phone size={17} /> Call: 082199 67293</a>
          </Button>
        </div>
        <div className="hero-features-bar">
          <div className="hero-feat-item"><Mountain size={14} /> <span>Valley &amp; Pine Views</span></div>
          <span className="feat-sep">·</span>
          <div className="hero-feat-item"><PawPrint size={14} /> <span>Pet-Friendly Stay</span></div>
          <span className="feat-sep">·</span>
          <div className="hero-feat-item"><UtensilsCrossed size={14} /> <span>Homely Food</span></div>
          <span className="feat-sep">·</span>
          <div className="hero-feat-item"><Flame size={14} /> <span>Bonfire &amp; BBQ</span></div>
        </div>
      </div>
      <div className="hero-bottom"><span>32°34' N &nbsp; 75°59' E</span><span>VILLAGE MANOLA · HIMACHAL PRADESH</span><span className="scroll-hint">SCROLL TO EXPLORE <span className="scroll-arrow" /></span></div>
    </section>

    {/* Stats band with animated count up */}
    <section className="stats-band">
      <div className="container">
        <div className="stats-grid">
          <AnimatedStat
            value={4.8}
            decimals={1}
            label="Google Rating"
            sub="From 231+ verified guest reviews"
            icon={<Star size={24} className="stat-star inline" />}
            delay={0}
          />
          <AnimatedStat
            value={231}
            suffix="+"
            label="Verified Reviews"
            sub="Top-rated homestay experience"
            delay={100}
          />
          <AnimatedStat
            value={2018}
            startFrom={1995}
            label="Hosting Since"
            sub="Years of genuine family care"
            delay={200}
          />
          <AnimatedStat
            value={1206}
            prefix={<span className="stat-currency">₹</span>}
            label="Starting / Night"
            sub="Affordable Himalayan getaway"
            delay={300}
          />
        </div>
      </div>
    </section>

    <section className="intro-section section-space"><div className="container intro-grid">
      <Reveal animation="fade-right" delay={0}><div className="intro-image-wrap" ref={introParallaxRef}><img src={mountainGateway} alt="Mountain view beyond the entrance to Ecstasy Farms" loading="lazy" /><div className="image-caption">THE WAY TO SLOWER DAYS · MANOLA</div></div></Reveal>
      <Reveal animation="fade-left" delay={150}><div className="intro-copy"><SectionLabel>WELCOME TO ECSTASY FARMS</SectionLabel><h2>A slower rhythm,<br /><em>a little closer</em><br />to nature.</h2><p>Set in Village Manola along the Dalhousie–Chamba Road, Ecstasy Farms is a quiet place to pause. Far from the rush of town, the days unfold with mountain air, open views and the easy comfort of being looked after.</p><p>Whether you're travelling together, taking a breather as a couple or bringing your furry friend along, there's room here to simply be.</p><p>Tucked away from the crowded town centre, the property sits among trees and open sky — a gentle reminder that some of the best moments happen when you're not in a hurry to go anywhere.</p><TextLink to="/about">Our story</TextLink></div></Reveal>
    </div></section>

    <section className="why-section section-space"><div className="container">
      <Reveal animation="zoom-in"><div className="section-heading centered"><SectionLabel>THE BEAUTY OF BEING HERE</SectionLabel><h2>Little things. <em>Lasting memories.</em></h2><p>A stay shaped by the genuine warmth and simple pleasures of the hills.</p></div></Reveal>
      <div className="why-grid">
        <Reveal animation="zoom-in" delay={0}><div className="why-item"><div className="why-icon-wrap"><Mountain size={28} /></div><h3>Room to breathe</h3><p>Mountain and valley views, fresh pine air and a peaceful rhythm far away from crowded town centres.</p></div></Reveal>
        <Reveal animation="zoom-in" delay={100}><div className="why-item"><div className="why-icon-wrap"><UtensilsCrossed size={28} /></div><h3>Food that feels like home</h3><p>Fresh, hygienic home-cooked meals prepared with care, with menus customizable to your preferences.</p></div></Reveal>
        <Reveal animation="zoom-in" delay={200}><div className="why-item"><div className="why-icon-wrap"><PawPrint size={28} /></div><h3>Everyone is welcome</h3><p>Family-friendly spaces where children, couples and your four-legged pets (meet Bruno &amp; Bagheera!) feel at home.</p></div></Reveal>
        <Reveal animation="zoom-in" delay={300}><div className="why-item"><div className="why-icon-wrap"><Flame size={28} /></div><h3>Evenings worth keeping</h3><p>Gather under the starry Himalayan sky around warm bonfire and BBQ arrangements on request.</p></div></Reveal>
      </div>
    </div></section>

    <section className="rooms-section section-space"><div className="container">
      <Reveal><div className="section-heading split-heading"><div><SectionLabel>REST COMES NATURALLY</SectionLabel><h2>Find your kind<br />of <em>comfort.</em></h2></div><div><p>Thoughtful places to come back to, each with the quiet character of a stay in the hills. Three room types — from a cosy standard to a superior deluxe with private balcony — each suited for couples, families and groups.</p><TextLink to="/rooms">Explore all rooms</TextLink></div></div></Reveal>
      <RoomCards />
      <Reveal delay={200}><div className="price-note">Rooms from ₹1,206/night* <span>· Rates may vary. Please enquire for current availability and pricing.</span></div></Reveal>
    </div></section>

    <section className="editorial-band">
      <Reveal animation="fade-right"><div className="editorial-image"><img src={terraceEvening} alt="Terrace table prepared for a relaxed evening at Ecstasy Farms" loading="lazy" /></div></Reveal>
      <Reveal animation="fade-left" delay={150}><div className="editorial-copy"><SectionLabel>THE GOOD PART OF STAYING IN</SectionLabel><h2>Gather around.<br /><em>Stay a while.</em></h2><p>Here, the best moments aren't scheduled. They happen over home-cooked food, unhurried conversation and evenings spent together on the terrace. Bonfire and BBQ can be arranged on request.</p><TextLink to="/dining">Discover dining</TextLink></div></Reveal>
    </section>

    {/* Host section */}
    <section className="host-section section-space"><div className="container host-grid">
      <Reveal animation="fade-right" delay={0}><div className="host-image-wrap"><img src={propertyDaylight} alt="Ecstasy Farms homestay property" loading="lazy" /><div className="host-since"><small>HOSTING SINCE</small><span>2018</span></div></div></Reveal>
      <Reveal animation="fade-left" delay={150}><div className="host-copy"><SectionLabel>YOUR HOSTS</SectionLabel><h2>Looked after by<br />people who <em>care.</em></h2><p>Ecstasy Farms has been hosted by Navdeep since 2018, with caretaking support from Sunny, Sunil and their family. Their warmth and attention are what make a stay here feel less like a booking and more like being welcomed into a home.</p><p>From arranging meals to helping plan your day, the team is always nearby — never in the way, always at hand when you need them.</p><div className="host-name">Navdeep</div><div className="host-role">Host · Since 2018</div></div></Reveal>
    </div></section>

    <section className="nature-section section-space"><div className="container nature-grid">
      <Reveal animation="fade-right" delay={0}><div className="nature-copy"><SectionLabel>FOR EVERY MEMBER OF THE FAMILY</SectionLabel><h2>Good company<br />has <em>four paws.</em></h2><p>Bring your furry companions along. With outdoor spaces and a welcoming, pet-friendly atmosphere, your time away can include the whole family.</p><TextLink to="/experiences">Explore experiences</TextLink></div></Reveal>
      <Reveal animation="fade-left" delay={150}><div className="nature-image"><img src={gardenEvening} alt="Green outdoor garden and seating area at Ecstasy Farms" loading="lazy" /></div></Reveal>
    </div></section>

    {/* Seasons section */}
    <section className="section-space"><div className="container">
      <Reveal animation="zoom-in"><div className="section-heading centered"><SectionLabel>WHEN TO VISIT</SectionLabel><h2>Every season<br />has its own <em>magic.</em></h2><p>The hills change through the year — here's what to expect in each season.</p></div></Reveal>
      <div className="seasons-grid">
        <Reveal animation="zoom-in" delay={0}><div className="season-card"><div className="season-icon"><Snowflake /></div><h3>Winter</h3><div className="season-months">DEC — FEB</div><p>Crisp mountain air and the possibility of snow. Cosy up indoors with warm meals and quiet evenings by the fire.</p></div></Reveal>
        <Reveal animation="zoom-in" delay={100}><div className="season-card"><div className="season-icon"><Leaf /></div><h3>Spring</h3><div className="season-months">MAR — APR</div><p>The hills come alive with greenery and flowers. Pleasant days and cool nights make it perfect for nature walks.</p></div></Reveal>
        <Reveal animation="zoom-in" delay={200}><div className="season-card"><div className="season-icon"><Sun /></div><h3>Summer</h3><div className="season-months">MAY — JUN</div><p>The busiest time for good reason — clear views, comfortable weather and the ideal escape from the plains.</p></div></Reveal>
        <Reveal animation="zoom-in" delay={300}><div className="season-card"><div className="season-icon"><CloudSun /></div><h3>Monsoon</h3><div className="season-months">JUL — SEP</div><p>Misty valleys, lush green surroundings and the sound of rain on the roof. A deeply peaceful time to disconnect.</p></div></Reveal>
      </div>
    </div></section>

    <section className="location-teaser" ref={locationParallaxRef}><img src={propertyGarden} alt="Ecstasy Farms among trees and garden greenery" loading="lazy" /><div className="hero-shade" /><div className="container location-teaser-content"><Reveal animation="zoom-in"><SectionLabel>THE ROAD LESS HURRIED</SectionLabel><h2>A little away.<br /><em>Right where you need to be.</em></h2><p>Village Manola · Approximately 7 km from Banikhet and 15 km from Dalhousie town.</p><TextLink to="/location">Find your way here</TextLink></Reveal></div></section>

    {/* Guest Reviews Section */}
    <ReviewsSection />

    {/* FAQ section */}
    <section className="faq-section section-space"><div className="container">
      <Reveal><div className="section-heading centered"><SectionLabel>GOOD TO KNOW</SectionLabel><h2>Questions, <em>answered.</em></h2></div></Reveal>
      <div className="faq-list">
        <Reveal delay={0}><FaqItem question="Is Ecstasy Farms pet-friendly?" answer="Yes. Pets are welcome at Ecstasy Farms. There is outdoor space for them to enjoy, and you may even meet the resident dogs, Bruno and Bagheera." /></Reveal>
        <Reveal delay={60}><FaqItem question="How far is the property from Dalhousie town?" answer="Ecstasy Farms is located in Village Manola on the Dalhousie–Chamba Road, approximately 7 km from Banikhet and 15 km from Dalhousie town — away from the crowded centre, but easy to reach." /></Reveal>
        <Reveal delay={120}><FaqItem question="What type of food is available?" answer="Fresh, hygienic home-cooked meals are prepared with care. Menus can be customized to your preferences, and bonfire and BBQ arrangements are available on request." /></Reveal>
        <Reveal delay={180}><FaqItem question="Can I book directly or do I need to enquire first?" answer="Booking is by enquiry. You can reach out via WhatsApp or phone to check availability and current rates. This helps us give you the most accurate information for your dates." /></Reveal>
        <Reveal delay={240}><FaqItem question="What amenities are available at the property?" answer="Free Wi-Fi, power backup, parking, mountain and valley views, customizable meals, vehicle rental assistance, and bonfire and BBQ on request." /></Reveal>
        <Reveal delay={300}><FaqItem question="Which room types are available?" answer="Three room types: Standard Room, Deluxe AC Room with Terrace, and Superior Deluxe Room with Balcony. Starting from ₹1,206/night. Rates vary by room and season." /></Reveal>
      </div>
    </div></section>

    <ClosingCTA />
  </>;
}

export function RoomsPage() { return <><PageHero label="THE ROOMS" title="Stay a little longer." description="Unwind in rooms made for peaceful days and restful nights in the hills." image={balconyRoom} alt="Superior Deluxe room opening toward a mountain-view balcony" /><section className="section-space"><div className="container"><Reveal><div className="section-heading centered"><SectionLabel>YOUR PLACE IN THE HILLS</SectionLabel><h2>Rest comes <em>naturally.</em></h2><p>Choose the space that feels like yours. Suitable for couples, families and groups.</p></div></Reveal><div className="room-detail-list"><Reveal delay={0}><RoomDetail number="01" title="Standard Room" image={standardRoom} images={[{ src: standardRoomImg, alt: 'Standard Room comfortable homestay bedroom at Ecstasy Farms Dalhousie', label: 'Bedroom' }, { src: standardRoom2Img, alt: 'Standard Room cosy double bed and mountain window at Ecstasy Farms Dalhousie', label: 'Angle 2' }, { src: standardRoomLobbyImg, alt: 'Standard Room lobby sitting area at Ecstasy Farms Dalhousie', label: 'Lobby' }]} alt="Standard Room interior with double bed" description="Settle into the uncomplicated comfort of a homestay room, with a peaceful atmosphere to return to after exploring the hills." features={['Comfortable interiors', 'Peaceful homestay setting', 'Homestay sitting lounge']} /></Reveal><Reveal delay={0}><RoomDetail number="02" title="Deluxe AC Room with Terrace" image={deluxeRoom} images={[{ src: deluxeRoom, alt: 'Deluxe AC Room with Terrace bedroom interior at Ecstasy Farms Dalhousie', label: 'Bedroom' }, { src: deluxeRoom2, alt: 'Deluxe AC Room with Terrace scenic outlook at Ecstasy Farms Dalhousie', label: 'Terrace View' }, { src: deluxeBathroom, alt: 'Deluxe AC Room clean modern attached bathroom at Ecstasy Farms Dalhousie', label: 'Bathroom' }]} alt="Deluxe AC Room with seating and double bed" description="A comfortable room with air conditioning and a terrace, giving you a little more space to slow down and enjoy the mountain air." features={['Air conditioning', 'Terrace with mountain views', 'Attached modern bathroom', 'Comfortable double bed']} reverse /></Reveal><Reveal delay={0}><RoomDetail number="03" title="Superior Deluxe Room with Balcony" image={superiorDeluxeBalconyView} images={[{ src: superiorDeluxeBalconyView, alt: 'Panoramic Himalayan valley view from Superior Deluxe balcony at Ecstasy Farms Dalhousie', label: 'Balcony View' }, { src: superiorDeluxeRoom2, alt: 'Superior Deluxe Room bedroom interior with mountain outlook at Ecstasy Farms Dalhousie', label: 'Bedroom' }, { src: superiorDeluxeBalcony, alt: 'Superior Deluxe Room private wooden balcony at Ecstasy Farms Dalhousie', label: 'Balcony' }]} alt="Superior Deluxe room with balcony access and mountain-facing windows" description="Wake up at your own pace, then step out onto your balcony and take in the mountain and valley atmosphere." features={['Private balcony', 'Mountain and valley outlook', 'Comfortable interiors']} /></Reveal></div><Reveal><p className="room-disclaimer">Starting from ₹1,206/night* across the property. Room-specific rates and availability are shared on enquiry.</p></Reveal></div></section><ClosingCTA title="A good night's rest starts here." /></>; }
function RoomDetail({ number, title, image, images, alt, description, features, reverse = false }: { number: string; title: string; image?: string; images?: { src: string; alt: string; label?: string }[]; alt: string; description: string; features: string[]; reverse?: boolean }) { const [selectedImg, setSelectedImg] = useState<number>(0); const photoList = images && images.length > 0 ? images : [{ src: image || '', alt, label: 'Main' }]; const currentPhoto = photoList[selectedImg] || photoList[0]; return <article className={`room-detail ${reverse ? 'reverse' : ''}`}><div className="room-detail-image-box"><div className="room-detail-image"><img src={currentPhoto.src} alt={currentPhoto.alt} loading="lazy" />{photoList.length > 1 && <span className="room-photo-counter">{selectedImg + 1} / {photoList.length}</span>}</div>{photoList.length > 1 && <div className="room-thumbnails" role="tablist" aria-label={`${title} photos`}>{photoList.map((p, idx) => <button key={p.src} type="button" className={`room-thumb-btn ${idx === selectedImg ? 'is-active' : ''}`} onClick={() => setSelectedImg(idx)} aria-label={`View ${p.label || `Photo ${idx + 1}`}`}><img src={p.src} alt={p.alt} loading="lazy" />{p.label && <span className="room-thumb-label">{p.label}</span>}</button>)}</div>}</div><div className="room-detail-copy"><span className="eyebrow">THE ROOMS / {number}</span><h2>{title}</h2><p>{description}</p><ul>{features.map(f => <li key={f}><Check size={16} />{f}</li>)}</ul><BookingButton message={`Hello Ecstasy Farms Dalhousie, I would like to enquire about room availability and booking for the ${title}.`}>Enquire about this room</BookingButton></div></article>; }
export function AboutPage() { return <><PageHero label="OUR STORY" title="A place to feel at home." description="A little off the beaten path. A lot closer to what matters." image={propertyGarden} alt="Ecstasy Farms exterior surrounded by greenery" /><section className="section-space"><div className="container intro-grid"><Reveal><div className="intro-image-wrap landscape"><img src={propertyDaylight} alt="Ecstasy Farms homestay under clear Himalayan skies" loading="lazy" /></div></Reveal><Reveal delay={150}><div className="intro-copy"><SectionLabel>WELCOME TO MANOLA</SectionLabel><h2>Beyond the bustle,<br /><em>the hills feel different.</em></h2><p>Ecstasy Farms is a peaceful homestay in Village Manola on the Dalhousie–Chamba Road. Away from the crowded town centre, it's a place to enjoy quiet Himalayan surroundings, nature and mountain views.</p><p>Hosted by Navdeep since 2018, with caretaking support from Sunny/Sunil and family, the stay is rooted in warm local hospitality and the ease of feeling welcome.</p></div></Reveal></div></section><section className="why-section section-space"><div className="container"><Reveal><div className="section-heading centered"><SectionLabel>OUR WAY OF WELCOMING YOU</SectionLabel><h2>Come as you are. <em>Stay as you like.</em></h2></div></Reveal><div className="why-grid"><Reveal delay={0}><div className="why-item"><div className="why-icon-wrap"><Trees size={28} /></div><h3>Close to nature</h3><p>Open views, green surroundings and moments to savour the mountain air.</p></div></Reveal><Reveal delay={100}><div className="why-item"><div className="why-icon-wrap"><Heart size={28} /></div><h3>Better together</h3><p>A welcoming place for families, couples, friends and groups.</p></div></Reveal><Reveal delay={200}><div className="why-item"><div className="why-icon-wrap"><PawPrint size={28} /></div><h3>Pets welcome</h3><p>Your furry companion can be part of the getaway too.</p></div></Reveal><Reveal delay={300}><div className="why-item"><div className="why-icon-wrap"><Sun size={28} /></div><h3>Local warmth</h3><p>The familiar kindness of a family-supported Himalayan homestay.</p></div></Reveal></div></div></section><ClosingCTA /></>; }
export function AmenitiesPage() { return <><PageHero label="THOUGHTFUL COMFORTS" title="Everything you need. Nothing you don't." description="The little conveniences that make it easier to settle in and stay a while." image={gardenEvening} alt="Garden and seating area at Ecstasy Farms" /><section className="section-space"><div className="container"><Reveal><div className="section-heading centered"><SectionLabel>MAKE YOURSELF AT HOME</SectionLabel><h2>Comfort in <em>every detail.</em></h2></div></Reveal><div className="amenity-grid"><Reveal delay={0}><Amenity icon={<Wifi />} title="Free Wi-Fi" text="Stay connected whenever you need to." /></Reveal><Reveal delay={60}><Amenity icon={<Zap />} title="Power Backup" text="A little extra peace of mind during your stay." /></Reveal><Reveal delay={120}><Amenity icon={<Car />} title="Parking" text="Parking available at the property." /></Reveal><Reveal delay={180}><Amenity icon={<UtensilsCrossed />} title="Home-Cooked Food" text="Fresh meals prepared with care." /></Reveal><Reveal delay={240}><Amenity icon={<Coffee />} title="Customizable Meals" text="Ask about menu options that suit your preferences." /></Reveal><Reveal delay={300}><Amenity icon={<Flame />} title="Bonfire on Request" text="Make the most of your evenings outdoors." /></Reveal><Reveal delay={360}><Amenity icon={<Sparkles />} title="BBQ on Request" text="Gather for a BBQ evening by arrangement." /></Reveal><Reveal delay={420}><Amenity icon={<Compass />} title="Vehicle Rental Assistance" text="Ask for help planning how to get around." /></Reveal><Reveal delay={480}><Amenity icon={<PawPrint />} title="Pet Friendly" text="Bring your furry companions along." /></Reveal><Reveal delay={540}><Amenity icon={<Mountain />} title="Mountain & Valley Views" text="Take in the Himalayan surroundings." /></Reveal></div></div></section><ClosingCTA /></>; }
function Amenity({ icon, title, text }: { icon: ReactNode; title: string; text: string }) { return <div className="amenity"><span className="amenity-icon">{icon}</span><h3>{title}</h3><p>{text}</p></div>; }
export function DiningPage() { return <><PageHero label="AT THE TABLE" title="A taste of feeling at home." description="Fresh, hygienic and home-cooked meals prepared with care." image={terraceEvening} alt="Table set for a relaxed evening meal on the terrace" /><section className="section-space"><div className="container intro-grid"><Reveal><div className="intro-image-wrap landscape"><img src={terraceEvening} alt="Outdoor dining setting on the Ecstasy Farms terrace" loading="lazy" /></div></Reveal><Reveal delay={150}><div className="intro-copy"><SectionLabel>MADE WITH CARE</SectionLabel><h2>The best meals<br />make you <em>stay longer.</em></h2><p>Food tastes different when you're in the hills, especially when it's made with the warmth of home. Enjoy fresh, hygienic home-cooked meals and the easy comfort of family-style hospitality.</p><p>Menus can be customized to your preferences. For a memorable evening together, ask about bonfire and BBQ arrangements.</p><BookingButton>Ask about dining</BookingButton></div></Reveal></div></section><section className="why-section section-space"><div className="container"><Reveal><div className="section-heading centered"><SectionLabel>GOOD FOOD, GOOD COMPANY</SectionLabel><h2>Made for <em>gathering.</em></h2></div></Reveal><div className="why-grid three"><Reveal delay={0}><div className="why-item"><div className="why-icon-wrap"><UtensilsCrossed size={28} /></div><h3>Home-cooked goodness</h3><p>Meals prepared with a homely touch and attention to freshness and hygiene.</p></div></Reveal><Reveal delay={120}><div className="why-item"><div className="why-icon-wrap"><Coffee size={28} /></div><h3>Make it yours</h3><p>Customizable menu options for the people around your table.</p></div></Reveal><Reveal delay={240}><div className="why-item"><div className="why-icon-wrap"><Flame size={28} /></div><h3>Into the evening</h3><p>Bonfire and BBQ arrangements are available on request.</p></div></Reveal></div></div></section><ClosingCTA title="Pull up a chair. Stay for the stories." /></>; }
export function ExperiencesPage() { return <><PageHero label="THE EXPERIENCE" title="The best days are unhurried." description="Simple pleasures, good company and plenty of room to breathe." image={mountainGateway} alt="Mountain view from the entrance of Ecstasy Farms" /><section className="section-space"><div className="container"><Reveal><div className="section-heading centered"><SectionLabel>HOW THE DAYS UNFOLD</SectionLabel><h2>Do a little. <em>Feel a lot.</em></h2></div></Reveal><div className="experience-grid"><Reveal delay={0}><Experience image={mountainGateway} title="Mountain Views" text="Pause and take in the hills and valley around you." /></Reveal><Reveal delay={80}><Experience image={propertyGarden} title="Peaceful Nature Walks" text="Step outside and enjoy the calm of the natural surroundings." /></Reveal><Reveal delay={160}><Experience image={terraceEvening} title="Bonfire Evenings" text="Gather around a bonfire, arranged on request." /></Reveal><Reveal delay={240}><Experience image={terraceEvening} title="BBQ Evenings" text="Make an evening of it with a BBQ by arrangement." /></Reveal><Reveal delay={320}><Experience image={gardenEvening} title="Family Time" text="Make space for moments together, indoors and out." /></Reveal><Reveal delay={400}><Experience image={gardenEvening} title="Pet-Friendly Stay" text="Bring your furry companions along for the getaway." /></Reveal><Reveal delay={480}><Experience image={propertyDaylight} title="Local Himalayan Experience" text="Enjoy the atmosphere of a local homestay in the hills." /></Reveal><Reveal delay={560}><Experience image={propertyNight} title="Vehicle Rental Assistance" text="Ask the team for help arranging local transport." /></Reveal></div></div></section><section className="pet-band"><div className="container pet-grid"><Reveal><div><SectionLabel>FURRY FRIENDS WELCOME</SectionLabel><h2>Bring your furry<br /><em>companions along.</em></h2><p>Holidays feel better together. Ecstasy Farms welcomes pets, with outdoor space to enjoy as a family. You may even meet the resident dogs, Bruno and Bagheera.</p><BookingButton>Plan a pet-friendly stay</BookingButton></div></Reveal><Reveal delay={150}><img src={gardenEvening} alt="Garden space at the pet-friendly Ecstasy Farms homestay" loading="lazy" /></Reveal></div></section><ClosingCTA /></>; }
function Experience({ image, title, text }: { image: string; title: string; text: string }) { return <article className="experience-card"><div><img src={image} alt={`${title} at Ecstasy Farms Dalhousie`} loading="lazy" /></div><h3>{title}</h3><p>{text}</p></article>; }
const galleryPhotos = [
  { src: propertyDaylight, alt: 'Ecstasy Farms property in daylight with red roof and pine trees', category: 'PROPERTY' },
  { src: superiorDeluxeBalconyView, alt: 'Superior Deluxe Room balcony valley view', category: 'ROOMS' },
  { src: superiorDeluxeRoom2, alt: 'Superior Deluxe Room bedroom interior with mountain outlook', category: 'ROOMS' },
  { src: superiorDeluxeBalcony, alt: 'Superior Deluxe Room private wooden balcony', category: 'ROOMS' },
  { src: standardRoomImg, alt: 'Standard Room bedroom interior with double bed', category: 'ROOMS' },
  { src: standardRoom2Img, alt: 'Standard Room cozy bed and window setting', category: 'ROOMS' },
  { src: standardRoomLobbyImg, alt: 'Standard Room sitting lounge and lobby', category: 'LOUNGE' },
  { src: loobyImg, alt: 'Warm indoor sitting lounge and lobby with mountain window view', category: 'LOUNGE' },
  { src: mountainGateway, alt: 'Himalayan valley view from the property gateway', category: 'VIEWS' },
  { src: terraceEvening, alt: 'Evening dining arrangement on the terrace', category: 'DINING & OUTDOORS' },
  { src: looby2Img, alt: 'Deluxe room with rich wood finishes, bolster cushion and scenic outlook', category: 'ROOMS' },
  { src: deluxeRoom, alt: 'Deluxe AC Room with Terrace bedroom interior', category: 'ROOMS' },
  { src: deluxeRoom2, alt: 'Deluxe AC Room with Terrace scenic outlook', category: 'ROOMS' },
  { src: deluxeBathroom, alt: 'Deluxe AC Room clean modern attached bathroom', category: 'ROOMS' },
  { src: propertyGarden, alt: 'Property surrounded by garden and trees', category: 'NATURE' },
  { src: gardenEvening, alt: 'Garden with outdoor seating at night', category: 'OUTDOORS' },
  { src: propertyNight, alt: 'Ecstasy Farms exterior at night', category: 'PROPERTY' },
];
export function GalleryPage() { const [active, setActive] = useState<number | null>(null); useEffect(() => { if (active === null) return; const handle = (e: KeyboardEvent) => { if (e.key === 'Escape') setActive(null); if (e.key === 'ArrowRight') setActive((active + 1) % galleryPhotos.length); if (e.key === 'ArrowLeft') setActive((active - 1 + galleryPhotos.length) % galleryPhotos.length); }; window.addEventListener('keydown', handle); return () => window.removeEventListener('keydown', handle); }, [active]); return <><PageHero label="THE GALLERY" title="A glimpse of the good life." description="Little moments from our corner of the Himalayas." image={propertyDaylight} alt="Ecstasy Farms Dalhousie property exterior" /><section className="section-space"><div className="container"><Reveal><div className="section-heading centered"><SectionLabel>TAKE A LOOK AROUND</SectionLabel><h2>See yourself <em>here.</em></h2></div></Reveal><div className="gallery-grid">{galleryPhotos.map((photo, i) => <Reveal key={photo.src} delay={(i % 3) * 80}><Button variant="gallery" className={`gallery-item gallery-item-${i}`} onClick={() => setActive(i)} aria-label={`View photo: ${photo.alt}`}><img src={photo.src} alt={photo.alt} loading="lazy" /><span>{photo.category}<ArrowUpRight size={18} /></span></Button></Reveal>)}</div><p className="gallery-note">The gallery features actual photographs of Ecstasy Farms. Food and pet photographs have not been provided.</p></div></section>{active !== null && <div className="lightbox" role="dialog" aria-modal="true" aria-label="Photo viewer" onClick={() => setActive(null)}><Button variant="lightbox" size="icon" className="lightbox-close" onClick={() => setActive(null)} aria-label="Close viewer"><X /></Button><Button variant="lightbox" size="icon" className="lightbox-prev" onClick={(e) => { e.stopPropagation(); setActive((active - 1 + galleryPhotos.length) % galleryPhotos.length) }} aria-label="Previous photo"><ChevronLeft /></Button><img src={galleryPhotos[active].src} alt={galleryPhotos[active].alt} onClick={e => e.stopPropagation()} /><Button variant="lightbox" size="icon" className="lightbox-next" onClick={(e) => { e.stopPropagation(); setActive((active + 1) % galleryPhotos.length) }} aria-label="Next photo"><ChevronRight /></Button><span className="lightbox-count">{active + 1} / {galleryPhotos.length}</span></div>}<ClosingCTA /></>; }
export function LocationPage() { return <><PageHero label="FIND YOUR WAY" title="Away from it all. Close to the hills." description="Village Manola, on the Dalhousie–Chamba Road." image={mountainGateway} alt="Entrance to Ecstasy Farms with a view of the Himalayan hills" /><section className="section-space"><div className="container location-grid"><Reveal><div className="location-info"><SectionLabel>WHERE TO FIND US</SectionLabel><h2>The journey is<br /><em>part of the escape.</em></h2><address>Ecstasy Farms Dalhousie<br />Village Manola, Dalhousie–Chamba Road,<br />Himachal Pradesh 176306</address><div className="distance-list"><div><span>01</span><p>Approx. 7 km from Banikhet</p></div><div><span>02</span><p>Approx. 15 km from Dalhousie town</p></div></div><Button asChild variant="booking" size="lg"><a href={directions} target="_blank" rel="noopener noreferrer"><MapPin size={17} /> Get Directions <ArrowUpRight size={17} /></a></Button></div></Reveal><Reveal delay={150}><div className="map-wrap"><iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3362.281956254705!2d75.98898421127333!3d32.57200377364096!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x391c930eff916de3%3A0xe0341988f3a9b80f!2sEcstasy%20Farms%20Dalhousie!5e0!3m2!1sen!2sin!4v1794895808049!5m2!1sen!2sin" width="600" height="450" style={{ border: 0 }} allowFullScreen loading="lazy" referrerPolicy="strict-origin-when-cross-origin" title="Ecstasy Farms Dalhousie location on Google Maps" /></div></Reveal></div></section><ClosingCTA /></>; }
export function ContactPage() { const [name, setName] = useState(''); const [phone, setPhone] = useState(''); const [dates, setDates] = useState(''); const [guests, setGuests] = useState(''); const [note, setNote] = useState(''); const submit = (e: React.FormEvent<HTMLFormElement>) => { e.preventDefault(); const message = `Hello Ecstasy Farms Dalhousie, I would like to enquire about room availability and booking.\nName: ${name}\nPhone: ${phone}${dates ? `\nTravel dates: ${dates}` : ''}${guests ? `\nGuests: ${guests}` : ''}${note ? `\nMessage: ${note}` : ''}`; window.open(`https://wa.me/918219967293?text=${encodeURIComponent(message)}`, '_blank', 'noopener,noreferrer'); }; return <><PageHero label="LET'S TALK ABOUT YOUR STAY" title="Your escape starts here." description="Have a question or a date in mind? We'd love to hear from you." image={terraceEvening} alt="Warm evening on the terrace at Ecstasy Farms" /><section className="section-space"><div className="container contact-grid"><Reveal><div className="contact-details"><SectionLabel>GET IN TOUCH</SectionLabel><h2>We're just a<br /><em>message away.</em></h2><p>Every good trip starts with a conversation. Reach out to ask about rooms, current rates and availability.</p><div className="contact-method"><span><Phone size={21} /></span><div><small>CALL US DIRECTLY</small><a href="tel:+918219967293">+91 82199 67293</a></div></div><div className="contact-method"><span><MessageCircle size={21} /></span><div><small>WHATSAPP BOOKING &amp; ENQUIRY</small><a href={whatsapp} target="_blank" rel="noopener noreferrer">+91 82199 67293 <ArrowUpRight size={16} /></a></div></div><div className="contact-method"><span><MapPin size={21} /></span><div><small>FIND US</small><p>Village Manola, Dalhousie–Chamba Road,<br />Himachal Pradesh 176306</p><a href={directions} target="_blank" rel="noopener noreferrer">Get Directions <ArrowUpRight size={16} /></a></div></div></div></Reveal><Reveal delay={150}><div className="enquiry-panel"><span className="eyebrow">BOOKING ENQUIRY</span><h3>Let's plan your stay.</h3><p>Share a few details and your enquiry will open in WhatsApp, ready to send.</p><form onSubmit={submit}><div className="form-row"><label>Your name <input required value={name} onChange={e => setName(e.target.value)} placeholder="Your name" /></label><label>Phone number <input required type="tel" value={phone} onChange={e => setPhone(e.target.value)} placeholder="Your phone number" /></label></div><div className="form-row"><label>Travel dates <input value={dates} onChange={e => setDates(e.target.value)} placeholder="Your preferred dates" /></label><label>Number of guests <input value={guests} onChange={e => setGuests(e.target.value)} placeholder="Adults and children" /></label></div><label>Anything else? <textarea value={note} onChange={e => setNote(e.target.value)} placeholder="Room preference, pets or any questions" rows={4} /></label><Button type="submit" variant="booking" size="lg">Send enquiry on WhatsApp <ArrowUpRight size={17} /></Button><small>This sends an enquiry, not an instant booking confirmation.</small></form></div></Reveal></div></section><section className="contact-map-section" style={{ paddingBottom: '100px' }}><div className="container"><Reveal><div className="section-heading centered"><SectionLabel>FIND US ON THE MAP</SectionLabel><h2>Location &amp; <em>Directions</em></h2><p>Village Manola, Dalhousie–Chamba Road, Himachal Pradesh 176306</p></div></Reveal><Reveal delay={120}><div className="map-wrap"><iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3362.281956254705!2d75.98898421127333!3d32.57200377364096!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x391c930eff916de3%3A0xe0341988f3a9b80f!2sEcstasy%20Farms%20Dalhousie!5e0!3m2!1sen!2sin!4v1794895808049!5m2!1sen!2sin" width="600" height="450" style={{ border: 0 }} allowFullScreen loading="lazy" referrerPolicy="strict-origin-when-cross-origin" title="Ecstasy Farms Dalhousie location on Google Maps" /></div></Reveal></div></section><ClosingCTA title="Come for a little while. Leave with a lot." /></>; }
