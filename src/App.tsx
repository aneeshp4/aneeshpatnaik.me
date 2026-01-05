import { ScopeOverlay } from './components/ScopeOverlay';
import { ScopeIntro } from './components/ScopeIntro';
import { About } from './components/sections/About';
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
    <div className='relative min-h-screen bg-bg-primary'>
      {/* Layer 1 (z-0): All sections in normal flow - visible through scope cutout */}
      <div className='relative z-0'>
        <About />
        {sections.map(({ id, Component }) => (
          <Component key={id} />
        ))}
      </div>

      {/* Layer 2 (z-50): Black overlay with expanding circular cutout */}
      <ScopeOverlay />

      {/* Layer 3 (z-100): Centered name/tagline that fades out */}
      <ScopeIntro />
    </div>
  );
}

export default App;
