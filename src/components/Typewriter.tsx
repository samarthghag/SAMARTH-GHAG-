import { useEffect, useRef, useState } from 'react';

interface TypewriterProps {
  strings: string[];
  typeSpeed?: number;
  deleteSpeed?: number;
  pauseMs?: number;
}

const Typewriter = ({
  strings,
  typeSpeed = 65,
  deleteSpeed = 35,
  pauseMs = 1350,
}: TypewriterProps) => {
  const [text, setText] = useState('');
  const indexRef = useRef(0);
  const charRef = useRef(0);
  const deletingRef = useRef(false);

  useEffect(() => {
    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (reduceMotion) {
      setText(strings[0] ?? '');
      return;
    }

    let timeoutId: number;

    const step = () => {
      const current = strings[indexRef.current % strings.length];

      if (!deletingRef.current) {
        charRef.current += 1;
        setText(current.slice(0, charRef.current));

        if (charRef.current >= current.length) {
          deletingRef.current = true;
          timeoutId = window.setTimeout(step, pauseMs);
          return;
        }
        timeoutId = window.setTimeout(step, typeSpeed);
      } else {
        charRef.current -= 1;
        setText(current.slice(0, charRef.current));

        if (charRef.current <= 0) {
          deletingRef.current = false;
          indexRef.current += 1;
          timeoutId = window.setTimeout(step, typeSpeed);
          return;
        }
        timeoutId = window.setTimeout(step, deleteSpeed);
      }
    };

    timeoutId = window.setTimeout(step, typeSpeed);
    return () => window.clearTimeout(timeoutId);
  }, [strings, typeSpeed, deleteSpeed, pauseMs]);

  return (
    <span className="typewriter-line">
      {text}
      <span className="boot-cursor" aria-hidden="true" />
    </span>
  );
};

export default Typewriter;
