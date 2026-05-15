'use client';
import { useEffect, useState } from 'react';

const DEFAULT_WORDS = ['studio.', 'partner.', 'agency.', 'innovator.', 'team.'];

const SHOW_MS = 2600;
const FADE_MS = 500;

export default function TypingEffect({
  className = '',
  words = DEFAULT_WORDS,
  block = false,
}: {
  className?: string;
  words?: string[];
  block?: boolean;
}) {
  const [index,   setIndex]   = useState(0);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const showTimer = setTimeout(() => {
      setVisible(false);
      const switchTimer = setTimeout(() => {
        setIndex((i) => (i + 1) % words.length);
        setVisible(true);
      }, FADE_MS);
      return () => clearTimeout(switchTimer);
    }, SHOW_MS);
    return () => clearTimeout(showTimer);
  }, [index, words]);

  return (
    <span style={{ display: block ? 'block' : 'inline' }}>
      <span
        className={className}
        style={{
          display:        'inline-block',
          whiteSpace:     'nowrap',
          opacity:        visible ? 1 : 0,
          transform:      visible ? 'translateY(0)' : 'translateY(-6px)',
          transition:     `opacity ${FADE_MS}ms ease, transform ${FADE_MS}ms ease`,
        }}
      >
        {words[index]}
      </span>
    </span>
  );
}
