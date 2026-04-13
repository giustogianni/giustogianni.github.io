import SectionWrapper from '../components/SectionWrapper';
import data from '../data/background.yml';
import { renderInlineMarkdown } from '../utils/renderInlineMarkdown';
import css from './Background.module.css';

interface BackgroundData {
  paragraphs: { text: string }[];
}

const { paragraphs } = data as unknown as BackgroundData;

const styles: Record<string, React.CSSProperties> = {
  body: {
    display: 'flex',
    flexDirection: 'column',
    gap: 'var(--space-6)',
  },
  paragraph: {
    fontSize: 'var(--text-base)',
    color: 'var(--color-text-secondary)',
    lineHeight: 1.75,
    fontWeight: 300,
  },
};

export default function Background() {
  return (
    <SectionWrapper id="background">
      <div style={styles.body} className={css.body}>
        {paragraphs.map((p, i) => (
          <p key={i} style={styles.paragraph}>
            {renderInlineMarkdown(p.text.trim())}
          </p>
        ))}
      </div>
    </SectionWrapper>
  );
}
