import React from 'react';
import css from '../sections/Background.module.css';

const LINK_RE = /\[([^\]]+)\]\(([^)]+)\)/g;

/**
 * Parses `[text](url)` markdown links in a string and returns a React node
 * with inline `<a>` elements. All other text is returned as plain strings.
 * Only supports inline links — no other markdown syntax is processed.
 */
export function renderInlineMarkdown(text: string): React.ReactNode {
  const nodes: React.ReactNode[] = [];
  let lastIndex = 0;
  let match: RegExpExecArray | null;

  while ((match = LINK_RE.exec(text)) !== null) {
    if (match.index > lastIndex) {
      nodes.push(text.slice(lastIndex, match.index));
    }
    nodes.push(
      <a
        key={match.index}
        href={match[2]}
        target="_blank"
        rel="noopener noreferrer"
        className={css.keyword}
      >
        {match[1]}
      </a>
    );
    lastIndex = match.index + match[0].length;
  }

  if (lastIndex < text.length) {
    nodes.push(text.slice(lastIndex));
  }

  return nodes.length === 1 ? nodes[0] : nodes;
}
