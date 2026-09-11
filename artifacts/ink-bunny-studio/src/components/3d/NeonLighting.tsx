export function NeonLighting() {
  return (
    <>
      <pointLight color="#ff1689" intensity={3.2} distance={7} position={[2.5, 0.5, 2]} />
      <pointLight color="#65dfff" intensity={1.7} distance={5} position={[-2, 1.2, 1]} />
    </>
  );
}