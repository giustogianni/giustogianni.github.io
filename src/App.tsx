import './styles/globals.css';
import css from './App.module.css';

// Sections — comment out or reorder to change the page structure
import Intro from './sections/Intro';
import Background from './sections/Background';
import Skills from './sections/Skills';
import Experience from './sections/Experience';
import Education from './sections/Education';
import ThemeToggle from './components/ThemeToggle';

export default function App() {
  return (
    <>
      <ThemeToggle />
      <div className={css.layout}>
        <aside className={css.left}>
          <Intro />
        </aside>
        <main className={css.right}>
          <Background />
          <Experience />
          <Skills />
          <Education />
        </main>
      </div>
    </>
  );
}
