import { useRef } from '@types/react';
import { useFrame } from '@react-three/fiber';

const Cube = () => {
  const ref = useRef();

  useFrame(() => {
    ref.current.rotation.x += 0.01;
    ref.current.rotation.y += 0.01;
  });

  return (
    <mesh ref={ref}>
      <boxGeometry />
      <meshStandardMaterial color={'#2e2e2e'} />
    </mesh>
  );
};

export default Cube;
