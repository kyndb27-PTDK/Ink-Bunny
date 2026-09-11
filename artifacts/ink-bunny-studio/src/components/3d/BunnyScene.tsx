import { useEffect, useState } from 'react';
import { BunnyModel } from './BunnyModel';
import { NeonLighting } from './NeonLighting';
import { StudioEnvironment } from './StudioEnvironment';
import { Canvas } from '@react-three/fiber';

type BunnySceneProps = {
  modelSrc?: string;
};

/**
 * Three-scene composition boundary.
 *
 * This keeps the future React Three Fiber scene isolated: BunnyModel can be
 * replaced with useGLTF/useAnimations without touching Hero or page layout.
 * The current scene is intentionally lightweight because no GLB was supplied.
 */
export function BunnyScene({ modelSrc }: BunnySceneProps) {
  const [webglAvailable, setWebglAvailable] = useState<boolean | null>(null);

  useEffect(() => {
    try {
      const canvas = document.createElement('canvas');
      const context =
        canvas.getContext('webgl') || canvas.getContext('experimental-webgl');
      setWebglAvailable(Boolean(context));
    } catch {
      setWebglAvailable(false);
    }
  }, []);

  if (webglAvailable === false) {
    return (
      <div className="bunny-fallback" aria-hidden="true">
        <div className="ambient-scene" />
        <div className="hero-glow" />
      </div>
    );
  }

  if (webglAvailable === null) {
    return null;
  }

  return (
    <div className="bunny-scene" aria-hidden="true">
      <Canvas
        className="bunny-canvas"
        dpr={[1, 1.5]}
        camera={{ position: [0, 0, 6], fov: 42 }}
        gl={{ alpha: true, antialias: false, powerPreference: 'low-power' }}
      >
        <StudioEnvironment />
        <NeonLighting />
        <BunnyModel modelSrc={modelSrc} />
      </Canvas>
    </div>
  );
}