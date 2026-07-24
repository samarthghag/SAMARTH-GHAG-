import { useEffect, useRef, useState } from 'react';

const navItems = [
  { num: '01', name: 'Work', href: '#work' },
  { num: '02', name: 'Experience', href: '#experience' },
  { num: '03', name: 'Skills', href: '#skills' },
  { num: '04', name: 'Toolkit', href: '#toolkit' },
  { num: '05', name: 'Contact', href: '#contact' },
];

const clockFmt = new Intl.DateTimeFormat('en-GB', {
  hour: '2-digit', minute: '2-digit', second: '2-digit', hour12: false, timeZone: 'Asia/Kolkata',
});

const Navigation = () => {
  const [scrollPct, setScrollPct] = useState(0);
  const [clock, setClock] = useState('--:--:--');
  const [isDark, setIsDark] = useState(false);
  const rafRef = useRef<number | null>(null);

  useEffect(() => {
    const stored = localStorage.getItem('sg-theme') === 'dark';
    document.documentElement.dataset.theme = stored ? 'dark' : 'light';
    setIsDark(stored);
  }, []);

  useEffect(() => {
    const onScroll = () => {
      if (rafRef.current !== null) return;
      rafRef.current = requestAnimationFrame(() => {
        const doc = document.documentElement;
        const max = doc.scrollHeight - doc.clientHeight;
        setScrollPct(max > 0 ? (window.scrollY / max) * 100 : 0);
        rafRef.current = null;
      });
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
    return () => {
      window.removeEventListener('scroll', onScroll);
      if (rafRef.current !== null) cancelAnimationFrame(rafRef.current);
    };
  }, []);

  useEffect(() => {
    const tick = () => setClock(clockFmt.format(new Date()) + ' IST');
    tick();
    const id = window.setInterval(tick, 1000);
    return () => window.clearInterval(id);
  }, []);

  const toggleTheme = () => {
    const next = !isDark;
    setIsDark(next);
    document.documentElement.dataset.theme = next ? 'dark' : 'light';
    localStorage.setItem('sg-theme', next ? 'dark' : 'light');
  };

  return (
    <header className="site-nav">
      <div className="site-container" style={{ padding: '14px 0', display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 16 }}>
        <a href="#home" style={{ display: 'flex', alignItems: 'center', gap: 10, textDecoration: 'none', color: 'var(--color-text)' }}>
          <img src="/pic/sg-logo.png" alt="SG" style={{ width: 30, height: 30, display: 'block' }} />
          <span style={{ fontFamily: 'var(--font-heading)', fontWeight: 600, fontSize: 17, letterSpacing: '-0.01em' }}>Samarth Ghag</span>
        </a>

        <nav className="nav-links-desktop" style={{ display: 'flex', alignItems: 'center', gap: 22 }}>
          {navItems.map((item) => (
            <a key={item.name} href={item.href} className="nav-link">{item.num} / {item.name}</a>
          ))}
        </nav>

        <div style={{ display: 'flex', alignItems: 'center', gap: 14 }}>
          <span className="clock-desktop" style={{ fontFamily: 'var(--font-mono)', fontSize: 11, color: 'var(--color-text)', opacity: 0.5 }}>{clock}</span>
          <button type="button" className="theme-toggle" aria-label="Toggle dark mode" onClick={toggleTheme}>
            {isDark ? (
              <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <path d="M21 12.8A9 9 0 1 1 11.2 3a7 7 0 0 0 9.8 9.8Z" />
              </svg>
            ) : (
              <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <circle cx="12" cy="12" r="4" />
                <path d="M12 2v2M12 20v2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M2 12h2M20 12h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4" />
              </svg>
            )}
          </button>
          <a href="#contact" className="btn btn-primary" style={{ fontSize: 13, padding: '9px 16px' }}>Get in touch</a>
        </div>
      </div>
      <div className="scroll-bar" style={{ width: `${scrollPct}%` }} />
    </header>
  );
};

export default Navigation;
