import React from 'react';
import SectionWrapper from '../components/SectionWrapper';
import { GithubIcon, LinkedinIcon, EmailIcon } from '../components/icons';
import css from './Intro.module.css';

const GITHUB_URL = 'https://github.com/giustogianni';
const LINKEDIN_URL = 'https://linkedin.com/in/gianni-giusto';
const EMAIL = 'mailto:gianni.giusto@gmail.com';

const styles: Record<string, React.CSSProperties> = {
  container: {
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-start',
    paddingTop: 'var(--space-24)',
    gap: 'var(--space-6)',
  },
  name: {
    fontSize: 'clamp(1.5rem, 8vw, var(--text-5xl))',
    fontWeight: 600,
    letterSpacing: '-0.03em',
    lineHeight: 1.1,
    color: 'var(--color-text-primary)',
  },
  title: {
    fontSize: 'var(--text-xl)',
    fontWeight: 400,
    color: 'var(--color-text-secondary)',
    fontFamily: 'var(--font-title)',
  },
  links: {
    display: 'flex',
    gap: 'var(--space-4)',
    marginTop: 'var(--space-4)',
    alignItems: 'center',
  },
  iconLink: {
    display: 'flex',
    alignItems: 'center',
    color: 'var(--color-text-muted)',
    transition: 'color 0.2s ease',
  },
};

export default function Intro() {
  return (
    <SectionWrapper id="intro">
      <div style={styles.container} className={css.container}>
        <h1 style={styles.name} className={css.name}>Gianni Giusto</h1>
        <p style={styles.title}>Data &amp; AI Engineer</p>
        <div style={styles.links}>
          <a href={GITHUB_URL} target="_blank" rel="noopener noreferrer" style={styles.iconLink} aria-label="GitHub">
            <GithubIcon />
          </a>
          <a href={LINKEDIN_URL} target="_blank" rel="noopener noreferrer" style={styles.iconLink} aria-label="LinkedIn">
            <LinkedinIcon />
          </a>
          <a href={EMAIL} style={styles.iconLink} aria-label="Email">
            <EmailIcon />
          </a>
        </div>
      </div>
    </SectionWrapper>
  );
}
