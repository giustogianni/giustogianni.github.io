import SectionWrapper from '../components/SectionWrapper';
import data from '../data/education.yml';
import css from './Education.module.css';

interface EducationEntry {
  position: string;
  company: string;
  url: string;
  time: string;
}

const entries = data as unknown as EducationEntry[];

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
  companyLink: {
    color: 'inherit',
    textDecoration: 'none',
  },
};

export default function Education() {
  return (
    <SectionWrapper id="education">
      <span style={styles.label}>Education</span>
      <div style={styles.list}>
        {entries.map((entry) => (
          <div key={`${entry.company}-${entry.time}`} className={css.entry}>
            <span className={css.time} style={styles.time}>{entry.time}</span>
            <div className={css.header}>
              <span style={styles.position}>{entry.position}</span>
              <span style={styles.company}>
                <a href={entry.url} target="_blank" rel="noopener noreferrer" style={styles.companyLink}>
                  {entry.company}
                </a>
              </span>
            </div>
          </div>
        ))}
      </div>
    </SectionWrapper>
  );
}
