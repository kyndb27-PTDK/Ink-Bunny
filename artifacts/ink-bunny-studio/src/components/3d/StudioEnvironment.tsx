import { Environment } from '@react-three/drei';

export function StudioEnvironment() {
  return (
    <>
      <ambientLight intensity={0.16} />
      <Environment preset="night" background={false} />
    </>
  );
}