import { Hero } from './components/Hero';
import { Experience } from './components/sections/Experience';
import { Projects } from './components/sections/Projects';
import { Skills } from './components/sections/Skills';
import type { SectionComponent } from './types';

const sections: SectionComponent[] = [
  { id: 'experience', Component: Experience },
  { id: 'projects', Component: Projects },
  { id: 'skills', Component: Skills },
];

function App() {
  return (
    <div className='min-h-screen bg-bg-primary'>
      <Hero />
      
      {sections.map(({ id, Component }) => (
        <Component key={id} />
      ))}
    </div>
  );
}

export default App;
