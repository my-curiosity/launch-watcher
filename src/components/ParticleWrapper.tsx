import Particles from 'react-particles';
import { TSPARTICLES_CONFIG } from '@/lib/Constants';
import { useCallback } from 'react';
import { loadSlim } from 'tsparticles-slim';
import type { Engine } from 'tsparticles-engine';
import { useTheme } from 'next-themes';

function ParticleWrapper() {
  const { theme } = useTheme();

  const particlesInit = useCallback(async (engine: Engine): Promise<void> => {
    await loadSlim(engine);
  }, []);

  const particlesLoaded = useCallback(async (): Promise<void> => {}, []);

  return TSPARTICLES_CONFIG.particles?.links !== undefined ? (
    <Particles
      id="tsparticles"
      init={particlesInit}
      loaded={particlesLoaded}
      options={
        theme === 'dark'
          ? TSPARTICLES_CONFIG
          : {
              ...TSPARTICLES_CONFIG,
              particles: {
                ...TSPARTICLES_CONFIG.particles,
                color: {
                  value: '#000000',
                },
                links: {
                  ...TSPARTICLES_CONFIG.particles.links,
                  color: '#000000',
                },
              },
            }
      }
    />
  ) : null;
}

export default ParticleWrapper;
