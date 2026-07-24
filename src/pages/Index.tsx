import { useEffect, useRef } from 'react';
import Navigation from '../components/Navigation';
import BootOverlay from '../components/BootOverlay';
import Typewriter from '../components/Typewriter';

/* ── Data ──────────────────────────────────────────────────────── */

const proofStats = [
  { metric: '1,500+', label: 'Students reached via Vault Vortex' },
  { metric: '200+', label: 'College Circle community members' },
  { metric: '15', label: 'Months across active ventures' },
];

const featuredStack = ['Python', 'Node.js', 'LLMs', 'Express', 'React'];

const standardProjects = [
  {
    title: 'Guide Hero', chip: 'startup', category: '🎯 Career Platform',
    problem: 'Students had no accessible, guided career exploration path.',
    role: 'I own product operations, hiring pipelines, and strategic execution as Chief of Staff.',
    solution: 'Career guidance platform connecting students with structured career pathways.',
    impact: '15 months of operational leadership',
    stack: ['Strategy', 'Operations', 'Product'],
  },
  {
    title: 'Vault Vortex', chip: 'college club', category: '💰 Fintech Education',
    problem: 'CS students had little financial literacy — coding without understanding the systems underneath.',
    role: 'Founded the club. Weekly sessions on fintech, banking APIs, payment systems, and investing basics.',
    solution: 'Community-driven fintech education club with 150+ members bridging code and real financial systems.',
    impact: '150+ members',
    stack: ['Community', 'Fintech Ed', 'Peer-Led'],
  },
];

const experience = [
  {
    title: 'Co-Founder & CTO', company: 'College Circle', period: '2025 – Present', badge: 'Founder',
    bullets: [
      'Coordinated a 10-member cross-functional team (frontend, backend, AI) to deliver a platform now serving 200+ active users, owning the technical roadmap and delivery priorities from concept to live launch.',
      'Managed stakeholder requirements and feature prioritization for AI-powered study-path capabilities, translating product goals into a phased roadmap.',
    ],
  },
  {
    title: 'Chief of Staff', company: 'Guide Hero', period: '15 months, ongoing', badge: 'Leadership',
    bullets: [
      'Own product operations, hiring pipelines, and strategic execution in a remote-first, fast-moving startup.',
      'Translate ambiguous product goals into structured, phased career-guidance pathways for students.',
    ],
  },
  {
    title: 'Founder', company: 'Vault Vortex — Fintech Club, CHRIST University', period: '2023 – Present', badge: 'Founder',
    bullets: [
      'Founded and grew a peer-led fintech education club to 150+ members through weekly sessions on banking APIs, payment systems, and investing basics.',
      'Planned and executed FinCode, a 50+ participant event, owning logistics and faculty stakeholder coordination.',
    ],
  },
  {
    title: 'AI Research & Outreach — Intern', company: 'The Builders Club · Bengaluru, Karnataka · Remote', period: 'Nov 2023 – Mar 2024 (5 months)', badge: 'Internship',
    bullets: [
      'Contributed to end-to-end development of web platforms across the full build lifecycle — planning, structuring, and deployment.',
      'Researched and extracted structured data on companies and professionals to support outreach and business initiatives.',
      'Worked in a remote, fast-paced startup environment, taking full ownership of tasks and shipping independently.',
    ],
  },
];

const competencies = [
  { num: '01', title: 'Project Leadership' },
  { num: '02', title: 'Backend Engineering' },
  { num: '03', title: 'Frontend Development' },
  { num: '04', title: 'ML & Agentic AI' },
  { num: '05', title: 'Search & SEO Systems' },
  { num: '06', title: 'Deployment & DevOps' },
  { num: '07', title: 'Security Fundamentals' },
];

const IconPaths: Record<string, string[]> = {
  'React': ['M12 15.5a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7Z'],
  'Node.js': ['M12 2 3 7v10l9 5 9-5V7z'],
  'Express': ['M4 12h16', 'M4 7h10', 'M4 17h10'],
  'Python': ['M9 3h4a2 2 0 0 1 2 2v3H8a3 3 0 0 0-3 3v2H4a2 2 0 0 1-2-2V7a4 4 0 0 1 4-4Z', 'M15 21h-4a2 2 0 0 1-2-2v-3h7a3 3 0 0 0 3-3v-2h1a2 2 0 0 1 2 2v3a4 4 0 0 1-4 4Z'],
  'HuggingFace': ['M12 21c4.5 0 8-3.5 8-8s-3.5-8-8-8-8 3.5-8 8 3.5 8 8 8Z', 'M9 11v.01', 'M15 11v.01', 'M9 15c1 1 5 1 6 0'],
  'LangChain': ['M9 15 15 9', 'M11 6l1.5-1.5a3.5 3.5 0 1 1 5 5L16 11', 'M13 18l-1.5 1.5a3.5 3.5 0 1 1-5-5L8 13'],
  'Search / GSC': ['M11 19a8 8 0 1 0 0-16 8 8 0 0 0 0 16Z', 'm21 21-4.35-4.35'],
  'Git': ['M6 3v12', 'M18 9a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z', 'M6 21a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z', 'M18 9a9 9 0 0 1-9 9'],
  'Vercel': ['M12 4 21 20H3Z'],
  'Figma': ['M12 2H8a3 3 0 0 0 0 6h4z', 'M12 2h4a3 3 0 0 1 0 6h-4z', 'M8 8h8', 'M8 8a3 3 0 0 0 0 6h4V8z', 'M12 14v3a3 3 0 1 1-3-3z'],
  'VS Code': ['m9 8-5 4 5 4', 'm15 8 5 4-5 4', 'm13 6-2 12'],
};

const toolkit = [
  { name: 'React', use: 'Frontend' },
  { name: 'TypeScript', use: 'Frontend' },
  { name: 'Node.js', use: 'Backend' },
  { name: 'Express', use: 'Backend' },
  { name: 'Python', use: 'AI / Data' },
  { name: 'HuggingFace', use: 'AI / Data' },
  { name: 'LangChain', use: 'Agents' },
  { name: 'Search / GSC', use: 'SEO' },
  { name: 'Git', use: 'Tooling' },
  { name: 'Vercel', use: 'DevOps' },
  { name: 'Figma', use: 'Design' },
  { name: 'VS Code', use: 'Tooling' },
];

const contactStrings = [
  'samarth.ghag.1504@gmail.com',
  'linkedin.com/in/samarth-ghag',
  'github.com/samarthghag',
];

const socials = [
  {
    label: 'LinkedIn', href: 'https://www.linkedin.com/in/samarth-ghag/',
    icon: <svg viewBox="0 0 24 24" fill="currentColor" width="16" height="16" aria-hidden="true"><path d="M4.98 3.5A2.49 2.49 0 0 0 2.5 6a2.49 2.49 0 0 0 2.48 2.5A2.49 2.49 0 0 0 7.46 6a2.49 2.49 0 0 0-2.48-2.5ZM3 10h4v11H3V10Zm7 0h3.8v1.5h.05c.53-1 1.82-2.05 3.75-2.05 4.01 0 4.75 2.64 4.75 6.07V21h-4v-5.5c0-1.31-.02-3-1.83-3-1.83 0-2.11 1.43-2.11 2.91V21H10V10Z" /></svg>,
  },
  {
    label: 'GitHub', href: 'https://github.com/samarthghag',
    icon: <svg viewBox="0 0 24 24" fill="currentColor" width="16" height="16" aria-hidden="true"><path d="M12 2C6.48 2 2 6.58 2 12.25c0 4.53 2.87 8.38 6.84 9.74.5.09.68-.22.68-.48 0-.24-.01-1.04-.02-1.89-2.78.62-3.37-1.22-3.37-1.22-.45-1.18-1.1-1.49-1.1-1.49-.9-.64.07-.63.07-.63 1 .07 1.53 1.04 1.53 1.04.88 1.53 2.31 1.09 2.87.84.09-.66.35-1.09.64-1.34-2.22-.26-4.56-1.14-4.56-5.08 0-1.12.38-2.03 1-2.75-.1-.27-.43-1.38.09-2.87 0 0 .82-.27 2.7 1.05a9.05 9.05 0 0 1 4.92 0c1.88-1.32 2.7-1.05 2.7-1.05.52 1.49.19 2.6.09 2.87.62.72 1 1.63 1 2.75 0 3.95-2.34 4.82-4.57 5.08.36.32.68.94.68 1.9 0 1.37-.01 2.47-.01 2.81 0 .27.18.58.69.48A10.07 10.07 0 0 0 22 12.25C22 6.58 17.52 2 12 2Z" /></svg>,
  },
  {
    label: 'Instagram', href: 'https://www.instagram.com/samarth.ghag.1504/',
    icon: <svg viewBox="0 0 24 24" fill="currentColor" width="16" height="16" aria-hidden="true"><path d="M7.8 2h8.4A5.8 5.8 0 0 1 22 7.8v8.4a5.8 5.8 0 0 1-5.8 5.8H7.8A5.8 5.8 0 0 1 2 16.2V7.8A5.8 5.8 0 0 1 7.8 2Zm-.2 2A3.6 3.6 0 0 0 4 7.6v8.8A3.6 3.6 0 0 0 7.6 20h8.8a3.6 3.6 0 0 0 3.6-3.6V7.6A3.6 3.6 0 0 0 16.4 4H7.6Zm9.65 1.5a1.25 1.25 0 1 1 0 2.5 1.25 1.25 0 0 1 0-2.5ZM12 7a5 5 0 1 1 0 10 5 5 0 0 1 0-10Zm0 2a3 3 0 1 0 0 6 3 3 0 0 0 0-6Z" /></svg>,
  },
  {
    label: 'Email', href: 'mailto:samarthghag9@gmail.com',
    icon: <svg viewBox="0 0 24 24" fill="currentColor" width="16" height="16" aria-hidden="true"><path d="M20 4H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2Zm0 2-8 5-8-5h16Zm0 12H4V8l8 5 8-5v10Z" /></svg>,
  },
];

const ToolIcon = ({ name }: { name: string }) => {
  if (name === 'TypeScript') {
    return (
      <span style={{ fontFamily: 'var(--font-mono)', fontWeight: 700, fontSize: 13, border: '1.5px solid currentColor', borderRadius: 4, padding: '1px 5px', lineHeight: '18px' }}>TS</span>
    );
  }
  const paths = IconPaths[name] ?? ['M12 2v20', 'M2 12h20'];
  return (
    <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      {paths.map((d, i) => <path key={i} d={d} />)}
    </svg>
  );
};

/* ── Component ─────────────────────────────────────────────────── */

const Index = () => {
  const mainRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const root = mainRef.current;
    if (!root) return;

    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (reduceMotion) return;

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
            io.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15, rootMargin: '0px 0px -8% 0px' }
    );
    root.querySelectorAll('[data-reveal]').forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);

  return (
    <div style={{ background: 'var(--color-bg)', color: 'var(--color-text)', minHeight: '100vh', overflowX: 'hidden' }}>
      <BootOverlay />
      <Navigation />

      <main ref={mainRef}>

        {/* ══ HERO ══ */}
        <section id="home" className="site-container" style={{ padding: '56px 0 40px' }}>
          <div className="hero-grid" style={{ display: 'grid', gridTemplateColumns: '1.1fr 0.9fr', gap: 56, alignItems: 'center' }}>
            <div>
              <p style={{ fontFamily: 'var(--font-body)', fontSize: 13, letterSpacing: '0.06em', textTransform: 'uppercase', color: 'var(--color-accent-700)', margin: '0 0 18px' }}>
                Bengaluru, India · Co-Founder &amp; CTO, College Circle Ai
              </p>
              <h1 style={{ fontFamily: 'var(--font-heading)', fontWeight: 400, fontSize: 'clamp(2.6rem,5.2vw,4.4rem)', lineHeight: 0.98, letterSpacing: '-0.01em', margin: '0 0 22px' }}>
                Samarth Ghag
              </h1>
              <p style={{ fontFamily: 'var(--font-body)', fontSize: '1.15rem', lineHeight: 1.7, color: 'var(--color-text)', opacity: 0.82, maxWidth: '46ch', margin: '0 0 30px' }}>
                Cross-functional project leader and technical builder — I coordinate multi-person engineering initiatives from scope through delivery, and I ship the code myself. Full-stack, backend, search &amp; SEO, and agentic AI systems.
              </p>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8, marginBottom: 26 }}>
                {['Full-Stack', 'Backend', 'AI Agents', 'SEO & Search'].map((t) => (
                  <span key={t} className="tag tag-outline">{t}</span>
                ))}
              </div>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: 14, alignItems: 'center' }}>
                <a href="#work" className="btn btn-primary">View work</a>
                <a href="mailto:samarthghag9@gmail.com" className="btn btn-secondary">Get in touch</a>
                <a href="https://drive.google.com/file/d/1j3Nkbw4RW9nciYpW3Gn1OLxDSJZ-b2Y9/view?usp=sharing" target="_blank" rel="noopener noreferrer" style={{ fontFamily: 'var(--font-body)', fontSize: 14, textDecoration: 'underline', textUnderlineOffset: 3 }}>
                  Download résumé ↓
                </a>
              </div>
            </div>

            <div>
              <div className="blueprint" style={{ aspectRatio: '3/4', maxWidth: 360, margin: '0 auto', overflow: 'hidden' }}>
                <i className="corner tl" /><i className="corner tr" /><i className="corner bl" /><i className="corner br" />
                <img src="/pic/pic2.png" alt="Samarth Ghag" style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'top', display: 'block' }} />
              </div>
            </div>
          </div>
        </section>

        {/* ══ PROOF ══ */}
        <section style={{ borderTop: '1px solid var(--color-divider)', borderBottom: '1px solid var(--color-divider)' }}>
          <div className="site-container proof-grid" style={{ padding: '44px 0', display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: 32 }}>
            {proofStats.map((stat) => (
              <div key={stat.label} data-reveal>
                <p style={{ fontFamily: 'var(--font-heading)', fontWeight: 400, fontSize: 'clamp(2.2rem,4vw,3.2rem)', color: 'var(--color-accent-700)', margin: 0, fontVariantNumeric: 'tabular-nums' }}>{stat.metric}</p>
                <p style={{ fontFamily: 'var(--font-body)', fontSize: 13, color: 'var(--color-text)', opacity: 0.7, margin: '6px 0 0' }}>{stat.label}</p>
              </div>
            ))}
          </div>
        </section>

        {/* ══ FEATURED WORK ══ */}
        <section id="work" className="site-container" style={{ padding: '72px 0 24px' }}>
          <p style={{ fontFamily: 'var(--font-body)', fontSize: 12, letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--color-accent-700)', margin: '0 0 10px' }}>/ 01 — Featured work</p>
          <h2 style={{ fontFamily: 'var(--font-heading)', fontWeight: 400, fontSize: 'clamp(1.8rem,3.4vw,2.6rem)', margin: '0 0 40px', maxWidth: '32ch' }}>
            College Circle leads the story — the ventures and club work below show how it translates into outcomes.
          </h2>

          <article data-reveal className="card elev-md" style={{ padding: 32, marginBottom: 24 }}>
            <div className="feature-grid" style={{ display: 'grid', gridTemplateColumns: '1.1fr 0.9fr', gap: 40 }}>
              <div>
                <div style={{ display: 'flex', gap: 10, alignItems: 'center', marginBottom: 16 }}>
                  <span className="tag tag-accent">current startup</span>
                  <span style={{ fontFamily: 'var(--font-mono)', fontSize: 11, opacity: 0.55 }}>🚀 Community Platform</span>
                </div>
                <h3 style={{ fontFamily: 'var(--font-heading)', fontWeight: 400, fontSize: 'clamp(1.8rem,3vw,2.6rem)', color: 'var(--color-accent-700)', margin: '0 0 18px' }}>College Circle</h3>
                <div style={{ fontFamily: 'var(--font-body)', fontSize: 15, lineHeight: 1.75, textAlign: 'justify' }}>
                  <p><strong>Problem:</strong> Students lacked a unified platform for real entrepreneurship and product-building community.</p>
                  <p><strong>Role:</strong> I co-founded and built the entire product as CTO — backend, frontend, and real-time features.</p>
                  <p><strong>Solution:</strong> Full-stack platform with real-time collaboration, an Express backend, and Python-powered AI pipelines for student engagement.</p>
                </div>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8, marginTop: 16 }}>
                  {featuredStack.map((tech) => <span key={tech} className="tag tag-outline">{tech}</span>)}
                </div>
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
                <div style={{ border: '1px solid var(--color-divider)', borderRadius: 'var(--radius-md)', padding: 18 }}>
                  <p style={{ fontFamily: 'var(--font-body)', fontSize: 11, letterSpacing: '0.08em', textTransform: 'uppercase', opacity: 0.55, margin: 0 }}>Impact</p>
                  <p style={{ fontFamily: 'var(--font-heading)', fontSize: '1.6rem', margin: '8px 0 0' }}>200+ users on live platform</p>
                </div>
                <div style={{ border: '1px solid var(--color-divider)', borderRadius: 'var(--radius-md)', padding: 18 }}>
                  <p style={{ fontFamily: 'var(--font-body)', fontSize: 11, letterSpacing: '0.08em', textTransform: 'uppercase', opacity: 0.55, margin: 0 }}>Constraint</p>
                  <p style={{ fontFamily: 'var(--font-body)', fontSize: '1rem', margin: '8px 0 0', opacity: 0.85 }}>2-person founding team, bootstrapped</p>
                </div>
              </div>
            </div>
          </article>

          <div className="standard-grid" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 20 }}>
            {standardProjects.map((project) => (
              <article key={project.title} data-reveal className="card" style={{ padding: 26 }}>
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 10 }}>
                  <span className="tag tag-neutral">{project.chip}</span>
                  <span style={{ fontFamily: 'var(--font-mono)', fontSize: 11, opacity: 0.5 }}>{project.category}</span>
                </div>
                <h3 style={{ fontFamily: 'var(--font-heading)', fontWeight: 400, fontSize: '1.7rem', margin: '16px 0 12px' }}>{project.title}</h3>
                <div style={{ fontFamily: 'var(--font-body)', fontSize: 14, lineHeight: 1.7, textAlign: 'justify' }}>
                  <p><strong>Problem:</strong> {project.problem}</p>
                  <p><strong>Role:</strong> {project.role}</p>
                  <p><strong>Solution:</strong> {project.solution}</p>
                </div>
                <p style={{ fontFamily: 'var(--font-mono)', fontSize: 11, opacity: 0.6, marginTop: 12 }}>Impact — {project.impact}</p>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: 6, marginTop: 12 }}>
                  {project.stack.map((tech) => <span key={tech} className="tag tag-outline" style={{ fontSize: 12 }}>{tech}</span>)}
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* ══ EXPERIENCE ══ */}
        <section id="experience" className="site-container" style={{ padding: '72px 0 24px' }}>
          <p style={{ fontFamily: 'var(--font-body)', fontSize: 12, letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--color-accent-700)', margin: '0 0 10px' }}>/ 02 — Experience</p>
          <h2 style={{ fontFamily: 'var(--font-heading)', fontWeight: 400, fontSize: 'clamp(1.8rem,3.4vw,2.6rem)', margin: '0 0 40px' }}>Where I've led, built, and shipped.</h2>

          <div style={{ borderLeft: '2px solid var(--color-accent)' }}>
            {experience.map((job) => (
              <div key={job.title} data-reveal style={{ padding: '0 0 32px 28px', marginBottom: 32, borderBottom: '1px solid var(--color-divider)' }}>
                <div style={{ display: 'flex', alignItems: 'baseline', gap: 12, flexWrap: 'wrap', marginBottom: 6 }}>
                  <h3 style={{ fontFamily: 'var(--font-heading)', fontWeight: 600, fontSize: '1.3rem', margin: 0 }}>{job.title}</h3>
                  <span className="tag tag-accent">{job.badge}</span>
                </div>
                <p style={{ fontFamily: 'var(--font-body)', fontSize: 14, opacity: 0.7, margin: '0 0 4px' }}>{job.company}</p>
                <p style={{ fontFamily: 'var(--font-mono)', fontSize: 12, opacity: 0.55, margin: '0 0 18px' }}>{job.period}</p>
                <ul style={{ fontFamily: 'var(--font-body)', fontSize: '14.5px', lineHeight: 1.8, paddingLeft: 20, margin: 0 }}>
                  {job.bullets.map((bullet) => <li key={bullet}>{bullet}</li>)}
                </ul>
              </div>
            ))}
          </div>
        </section>

        {/* ══ CORE COMPETENCIES ══ */}
        <section id="skills" style={{ background: 'var(--color-surface)', borderTop: '1px solid var(--color-divider)', borderBottom: '1px solid var(--color-divider)', marginTop: 64 }}>
          <div className="site-container" style={{ padding: '60px 0' }}>
            <p style={{ fontFamily: 'var(--font-body)', fontSize: 13, letterSpacing: '0.14em', textTransform: 'uppercase', color: 'var(--color-accent)', margin: '0 0 8px', fontWeight: 600 }}>/ 03 — Core competencies</p>
            <h2 style={{ fontFamily: 'var(--font-heading)', fontWeight: 400, fontSize: 'clamp(1.8rem,3.4vw,2.6rem)', margin: '0 0 32px' }}>Spec sheet — prioritised for leadership, delivery, and product taste.</h2>
            <div>
              {competencies.map((c) => (
                <div key={c.num} data-reveal className="competency-row">
                  <span style={{ fontFamily: 'var(--font-mono)', fontSize: 13, color: 'var(--color-accent)', opacity: 0.8, width: 28 }}>{c.num}</span>
                  <span style={{ fontFamily: 'var(--font-heading)', fontWeight: 600, fontSize: '1.5rem', flex: 1 }}>{c.title}</span>
                  <span className="competency-arrow" aria-hidden="true">→</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ══ TOOLKIT ══ */}
        <section id="toolkit" style={{ background: 'var(--color-surface)' }}>
          <div className="site-container" style={{ padding: '24px 0 60px' }}>
            <p style={{ fontFamily: 'var(--font-body)', fontSize: 13, letterSpacing: '0.14em', textTransform: 'uppercase', color: 'var(--color-accent)', margin: '0 0 8px', fontWeight: 600 }}>/ 03B — My toolkit</p>
            <h2 style={{ fontFamily: 'var(--font-heading)', fontWeight: 400, fontSize: 'clamp(1.6rem,3vw,2.2rem)', margin: '0 0 32px' }}>What I reach for, day to day.</h2>
            <div className="toolkit-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(6,1fr)', gap: 14 }}>
              {toolkit.map((tool) => (
                <div key={tool.name} data-reveal className="toolkit-cell">
                  <i aria-hidden="true" className="corner tl" style={{ position: 'absolute', top: -1, left: -1, width: 8, height: 8, borderTop: '1.5px solid var(--color-accent)', borderLeft: '1.5px solid var(--color-accent)' }} />
                  <i aria-hidden="true" style={{ position: 'absolute', top: -1, right: -1, width: 8, height: 8, borderTop: '1.5px solid var(--color-accent)', borderRight: '1.5px solid var(--color-accent)' }} />
                  <i aria-hidden="true" style={{ position: 'absolute', bottom: -1, left: -1, width: 8, height: 8, borderBottom: '1.5px solid var(--color-accent)', borderLeft: '1.5px solid var(--color-accent)' }} />
                  <i aria-hidden="true" style={{ position: 'absolute', bottom: -1, right: -1, width: 8, height: 8, borderBottom: '1.5px solid var(--color-accent)', borderRight: '1.5px solid var(--color-accent)' }} />
                  <div style={{ color: 'var(--color-accent)', marginBottom: 8, display: 'flex', justifyContent: 'center' }}>
                    <ToolIcon name={tool.name} />
                  </div>
                  <p style={{ fontFamily: 'var(--font-heading)', fontWeight: 600, fontSize: '1rem', margin: 0 }}>{tool.name}</p>
                  <p style={{ fontFamily: 'var(--font-mono)', fontSize: 10, letterSpacing: '0.06em', textTransform: 'uppercase', color: 'var(--color-accent)', margin: '4px 0 0' }}>{tool.use}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ══ AVAILABLE FOR ══ */}
        <section style={{ background: '#ec3013' }}>
          <div className="site-container" style={{ padding: '60px 0' }}>
            <p style={{ fontFamily: 'var(--font-body)', fontWeight: 700, fontSize: 13, letterSpacing: '0.1em', textTransform: 'uppercase', color: '#201e1d', margin: '0 0 10px' }}>/ 04 — What I'm looking for</p>
            <h2 style={{ fontFamily: 'var(--font-heading)', fontWeight: 600, fontSize: 'clamp(2rem,4.5vw,3.4rem)', color: '#f3f2f2', margin: '0 0 36px' }}>Available for the right opportunity.</h2>
            <div className="available-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: 0 }}>
              <div style={{ borderTop: '2px solid #201e1d', padding: '20px 20px 20px 0' }}>
                <p style={{ fontFamily: 'var(--font-body)', fontWeight: 700, fontSize: 13, textTransform: 'uppercase', letterSpacing: '0.06em', color: '#201e1d', margin: '0 0 12px' }}>Freelance</p>
                <p style={{ fontFamily: 'var(--font-body)', fontSize: 15, lineHeight: 1.6, color: '#f3f2f2', margin: 0 }}>AI &amp; agentic integrations, full-stack builds, SEO / search systems, startup MVPs.</p>
              </div>
              <div className="available-mid" style={{ borderTop: '2px solid #201e1d', padding: '20px 20px 20px 20px' }}>
                <p style={{ fontFamily: 'var(--font-body)', fontWeight: 700, fontSize: 13, textTransform: 'uppercase', letterSpacing: '0.06em', color: '#201e1d', margin: '0 0 12px' }}>Full-time</p>
                <p style={{ fontFamily: 'var(--font-body)', fontSize: 15, lineHeight: 1.6, color: '#f3f2f2', margin: 0 }}>Project Management Apprenticeships, founding-engineer / full-stack &amp; AI developer roles.</p>
              </div>
              <div style={{ borderTop: '2px solid #201e1d', padding: '20px 0 20px 20px', opacity: 0.6 }}>
                <p style={{ fontFamily: 'var(--font-body)', fontWeight: 700, fontSize: 13, textTransform: 'uppercase', letterSpacing: '0.06em', color: '#201e1d', margin: '0 0 12px' }}>Not looking for</p>
                <p style={{ fontFamily: 'var(--font-body)', fontSize: 15, lineHeight: 1.6, color: '#f3f2f2', margin: 0 }}>Design-only, marketing, non-technical roles.</p>
              </div>
            </div>
          </div>
        </section>

        {/* ══ CONTACT ══ */}
        <section id="contact" className="site-container" style={{ padding: '80px 0 40px' }}>
          <p style={{ fontFamily: 'var(--font-body)', fontSize: 12, letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--color-accent-700)', margin: '0 0 14px' }}>/ 05 — Call to action</p>
          <h2 style={{ fontFamily: 'var(--font-heading)', fontWeight: 400, fontSize: 'clamp(2.2rem,5.5vw,4rem)', lineHeight: 1, margin: '0 0 24px' }}>Let's build something great.</h2>
          <p style={{ fontFamily: 'var(--font-body)', fontSize: '1.05rem', lineHeight: 1.7, maxWidth: '52ch', margin: '0 0 28px' }}>
            Reach out at <a href="mailto:samarthghag9@gmail.com">samarthghag9@gmail.com</a> or connect on{' '}
            <a href="https://www.linkedin.com/in/samarth-ghag/" target="_blank" rel="noopener noreferrer">LinkedIn</a>. I'm always open to meaningful collaborations.
          </p>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 14, marginBottom: 32 }}>
            <a href="mailto:samarthghag9@gmail.com" className="btn btn-primary">Start a project</a>
            <a href="https://drive.google.com/file/d/1j3Nkbw4RW9nciYpW3Gn1OLxDSJZ-b2Y9/view?usp=sharing" target="_blank" rel="noopener noreferrer" className="btn btn-ghost">Download résumé</a>
          </div>
          <div style={{ borderTop: '1px solid var(--color-divider)', paddingTop: 20 }}>
            <p style={{ fontFamily: 'var(--font-mono)', fontSize: 15, margin: 0 }}>
              <Typewriter strings={contactStrings} />
            </p>
          </div>
        </section>

        <footer style={{ borderTop: '1px solid var(--color-divider)' }}>
          <div className="site-container" style={{ padding: 24, display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 16, flexWrap: 'wrap' }}>
            <p style={{ fontFamily: 'var(--font-mono)', fontSize: 12, opacity: 0.55, margin: 0 }}>© 2026 Samarth Ghag</p>
            <div style={{ display: 'flex', gap: 10 }}>
              {socials.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target={social.href.startsWith('mailto:') ? undefined : '_blank'}
                  rel={social.href.startsWith('mailto:') ? undefined : 'noopener noreferrer'}
                  aria-label={social.label}
                  className="social-icon"
                >
                  {social.icon}
                </a>
              ))}
            </div>
            <a href="#home" style={{ fontFamily: 'var(--font-body)', fontSize: 12 }}>Back to top ↑</a>
          </div>
        </footer>

      </main>
    </div>
  );
};

export default Index;
