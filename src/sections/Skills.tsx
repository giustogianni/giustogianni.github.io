import SectionWrapper from '../components/SectionWrapper';
import data from '../data/skills.yml';
import css from './Skills.module.css';

type SkillsData = Record<string, { item: string }[]>;

const skills = data as unknown as SkillsData;

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
  category: {
    display: 'flex',
    flexDirection: 'column',
    gap: 'var(--space-3)',
  },
  categoryLabel: {
    fontSize: 'var(--text-xs)',
    fontWeight: 'bold',
    color: 'var(--color-text-muted)',
    letterSpacing: '0.1em',
    textTransform: 'uppercase',
  },
  itemList: {
    listStyle: 'none',
    display: 'flex',
    flexDirection: 'column',
    gap: 'var(--space-2)',
    paddingLeft: 'var(--space-3)',
  },
  item: {
    fontSize: 'var(--text-sm)',
    color: 'var(--color-text-secondary)',
  },
};

export default function Skills() {
  return (
    <SectionWrapper id="skills">
      <span style={styles.label}>Skills</span>
      <div className={css.grid}>
        {Object.entries(skills).map(([category, items]) => (
          <div key={category} style={styles.category}>
            <span style={styles.categoryLabel}>{category}</span>
            <ul style={styles.itemList}>
              {items.map(({ item }) => (
                <li key={item} style={styles.item}>{item}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </SectionWrapper>
  );
}
