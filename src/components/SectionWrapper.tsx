import React from 'react';

interface SectionWrapperProps {
  id: string;
  children: React.ReactNode;
  className?: string;
}

const styles: Record<string, React.CSSProperties> = {
  section: {
    width: '100%',
    maxWidth: 'var(--max-width)',
    margin: '0 auto',
    padding: `0 var(--space-6)`,
  },
};

export default function SectionWrapper({ id, children, className }: SectionWrapperProps) {
  return (
    <section id={id} style={styles.section} className={className}>
      {children}
    </section>
  );
}
