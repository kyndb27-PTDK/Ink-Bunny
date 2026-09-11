import { Float, Sparkles } from '@react-three/drei';

type BunnyModelProps = {
  modelSrc?: string;
};

/**
 * Future model boundary. The supplied hero artwork remains the source of truth
 * until public/models/bunny.glb is available; this slot deliberately renders
 * only ambient depth rather than a substitute character.
 */
export function BunnyModel({ modelSrc = '/models/bunny.glb' }: BunnyModelProps) {
  return (
    <group name="bunny-model-slot" userData={{ modelSrc }}>
      <Float
        speed={0.6}
        rotationIntensity={0.08}
        floatIntensity={0.22}
        floatingRange={[-0.08, 0.08]}
      >
        <mesh rotation={[0.3, 0.2, 0]}>
          <torusGeometry args={[1.3, 0.012, 12, 96]} />
          <meshBasicMaterial color="#ff1689" transparent opacity={0.18} />
        </mesh>
        <mesh rotation={[-0.2, 0.4, 0.6]} scale={0.64}>
          <torusGeometry args={[1.3, 0.01, 12, 96]} />
          <meshBasicMaterial color="#65dfff" transparent opacity={0.16} />
        </mesh>
      </Float>
      <Sparkles
        count={18}
        scale={[4.8, 3.2, 1.6]}
        size={1.2}
        speed={0.18}
        color="#ff1689"
        opacity={0.28}
      />
    </group>
  );
}