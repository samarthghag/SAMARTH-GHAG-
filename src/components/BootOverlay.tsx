import { useEffect, useRef, useState } from 'react';

const SESSION_KEY = 'sg-boot-seen';
const LINES = [
  '> booting samarth.ghag.dev v2.0',
  '> establishing secure connection... OK',
  '> mounting modules: react · node · python · langchain',
  '> loading portfolio index... done',
  '> access granted.',
];

const BootOverlay = () => {
  const [show, setShow] = useState(false);
  const [hidden, setHidden] = useState(false);
  const [lines, setLines] = useState<string[]>([]);
  const [showPrompt, setShowPrompt] = useState(false);
  const [name, setName] = useState('');
  const inputRef = useRef<HTMLInputElement>(null);
  const doneRef = useRef(false);
  const timeoutRef = useRef<number>();

  useEffect(() => {
    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (sessionStorage.getItem(SESSION_KEY) || reduceMotion) return;
    sessionStorage.setItem(SESSION_KEY, '1');
    setShow(true);

    const finish = () => {
      if (doneRef.current) return;
      doneRef.current = true;
      setHidden(true);
    };

    const typeLine = (idx: number, cb: () => void) => {
      if (doneRef.current || idx >= LINES.length) return cb();
      const text = LINES[idx];
      let i = 0;
      const step = () => {
        if (doneRef.current) return;
        i += 1;
        setLines((prev) => {
          const next = prev.slice(0, idx);
          next[idx] = text.slice(0, i);
          return next;
        });
        if (i < text.length) {
          timeoutRef.current = window.setTimeout(step, 16 + Math.random() * 22);
        } else {
          timeoutRef.current = window.setTimeout(() => typeLine(idx + 1, cb), 220);
        }
      };
      step();
    };

    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') { finish(); return; }
      if (e.code === 'Space' && document.activeElement !== inputRef.current) finish();
    };
    window.addEventListener('keydown', onKey);

    timeoutRef.current = window.setTimeout(() => {
      typeLine(0, () => {
        setShowPrompt(true);
        inputRef.current?.focus();
      });
    }, 200);

    return () => {
      window.removeEventListener('keydown', onKey);
      window.clearTimeout(timeoutRef.current);
    };
  }, []);

  const onSubmit = () => {
    if (doneRef.current) return;
    const visitor = name.trim() || 'Guest';
    setShowPrompt(false);
    const welcomeIdx = LINES.length;
    const text = `> welcome, ${visitor}. initializing interface...`;
    let i = 0;
    const step = () => {
      if (doneRef.current) return;
      i += 1;
      setLines((prev) => {
        const next = prev.slice(0, welcomeIdx);
        next[welcomeIdx] = text.slice(0, i);
        return next;
      });
      if (i < text.length) {
        timeoutRef.current = window.setTimeout(step, 16 + Math.random() * 22);
      } else {
        timeoutRef.current = window.setTimeout(() => setHidden(true), 500);
        doneRef.current = true;
      }
    };
    step();
  };

  if (!show) return null;

  return (
    <div
      className={`boot-overlay${hidden ? ' is-hidden' : ''}`}
      aria-hidden={hidden}
      onClick={(e) => { if (e.target !== inputRef.current) setHidden(true); }}
    >
      <div style={{ width: 'min(560px, 92vw)' }}>
        <div className="boot-lines">{lines.join('\n')}</div>
        {showPrompt && (
          <div className="boot-prompt">
            <span>&gt;</span>
            <input
              ref={inputRef}
              type="text"
              autoComplete="off"
              spellCheck={false}
              placeholder="your name"
              value={name}
              onClick={(e) => e.stopPropagation()}
              onChange={(e) => setName(e.target.value)}
              onKeyDown={(e) => { e.stopPropagation(); if (e.key === 'Enter') onSubmit(); }}
            />
          </div>
        )}
      </div>
      <p className="boot-skip">PRESS SPACE OR ESC TO SKIP</p>
    </div>
  );
};

export default BootOverlay;
