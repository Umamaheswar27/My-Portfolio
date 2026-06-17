import React from 'react';
import { useFadeIn } from '../../hooks/useFadeIn';

const Section = ({ id, children, style }) => {
  const [ref, vis] = useFadeIn();
  return (
    <section
      id={id}
      ref={ref}
      style={{
        padding: '88px 0',
        opacity: vis ? 1 : 0,
        transform: vis ? 'translateY(0)' : 'translateY(28px)',
        transition: 'opacity 0.65s ease, transform 0.65s ease',
        ...style,
      }}
    >
      {children}
    </section>
  );
};

export default Section;
