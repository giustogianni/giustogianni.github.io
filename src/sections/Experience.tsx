import SectionWrapper from '../components/SectionWrapper';
import data from '../data/experience.yml';
import css from './Experience.module.css';

interface Job {
  position: string;
  company: string;
  url: string;
  time: string;
  description: string;
  technologies: string[];
}

const jobs = data as unknown as Job[];

const styles: Record<string, React.CSSProperties> = {
  label: {
    display: 'block',
    fontSize: 'var(--text-sm)',
    fontWeight: 500,
    color: 'var(--color-accent)',
    letterSpacing: '0.08em',
    textTransform: 'uppercase',
    marginBottom: 'var(--space-8)',
  },
  list: {
    display: 'flex',
    flexDirection: 'column',
    gap: 'var(--space-12)',
  },
  time: {
    fontSize: 'var(--text-xs)',
    color: 'var(--color-text-muted)',
    letterSpacing: '0.02em',
    lineHeight: 1.5,
    fontFamily: 'var(--font-date)',
  },
  position: {
    fontSize: 'var(--text-base)',
    fontWeight: 500,
    color: 'var(--color-text-primary)',
  },
  company: {
    fontSize: 'var(--text-sm)',
    color: 'var(--color-text-muted)',
  },
  description: {
    fontSize: 'var(--text-sm)',
    color: 'var(--color-text-secondary)',
    lineHeight: 1.75,
    marginTop: 'var(--space-1)',
  },
  tagList: {
    display: 'flex',
    flexWrap: 'wrap' as const,
    gap: 'var(--space-2)',
    marginTop: 'var(--space-3)',
  },
  tag: {
    fontSize: 'var(--text-xs)',
    fontWeight: 500,
    color: 'var(--color-accent)',
    background: 'var(--color-accent-subtle)',
    borderRadius: '9999px',
    padding: 'var(--space-1) var(--space-3)',
  },
};

export default function Experience() {
  return (
    <SectionWrapper id="experience">
      <span style={styles.label}>Experience</span>
      <div style={styles.list}>
        {jobs.map((job) => (
          <a
            key={`${job.company}-${job.time}`}
            className={css.entry}
            href={job.url || '#'}
            target="_blank"
            rel="noopener noreferrer"
          >
            <span className={css.time} style={styles.time}>{job.time}</span>
            <div className={css.header}>
              <span className={css.positionRow} style={styles.position}>
                {job.position}
                <span className={css.entryArrow} aria-hidden="true">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <line x1="7" y1="17" x2="17" y2="7" />
                    <polyline points="7 7 17 7 17 17" />
                  </svg>
                </span>
              </span>
              <span style={styles.company}>{job.company}</span>
            </div>
            <div className={css.tasks}>
              <p style={styles.description}>{job.description.trim()}</p>
              <div style={styles.tagList}>
                {job.technologies.map((tech) => (
                  <span key={tech} style={styles.tag}>{tech}</span>
                ))}
              </div>
            </div>
          </a>
        ))}
      </div>
      <div className={css.resumeWrapper}>
        <a href="/resume.pdf" target="_blank" rel="noopener noreferrer" className={css.resumeLink}>
          View Full Resume
          <span className={css.resumeArrow}>
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <line x1="7" y1="17" x2="17" y2="7" />
              <polyline points="7 7 17 7 17 17" />
            </svg>
          </span>
        </a>
      </div>
    </SectionWrapper>
  );
}
