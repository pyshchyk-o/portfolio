import * as React from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Plane, PerspectiveCamera, OrbitControls } from '@react-three/drei';
import styles from './animatedBackground.module.css';

const Particles = ({ count = 1000 }) => {
  const ref = React.useRef();
  const particles = React.useMemo(() => {
    const temp = [];
    for (let i = 0; i < count; i++) {
      temp.push({
        position: [
          Math.random() * 100 - 50,
          Math.random() * 100 - 50,
          Math.random() * 100 - 50,
        ],
        scale: Math.random() * 0.5,
      });
    }
    return temp;
  }, [count]);

  useFrame(() => {
    ref.current.rotation.x += 0.001;
    ref.current.rotation.y += 0.001;
    ref.current.rotation.z += 0.001;
  });

  return (
    <group ref={ref}>
      {particles.map((particle, i) => (
        <Plane key={i} position={particle.position} scale={particle.scale}>
          <meshBasicMaterial color="#808080" />
        </Plane>
      ))}
    </group>
  );
};

const AnimatedBackground = () => {
  return (
    <Canvas className={styles.canvasContainer}>
      <PerspectiveCamera position={[0, 0, 50]} />
      <Particles count={3000} />
      <OrbitControls
        minDistance={25} // minimum distance the user can zoom in
        maxDistance={75} // maximum distance the user can zoom out
        enableRotate={false} // disable rotation
        enableDamping
      />
    </Canvas>
  );
};

export default AnimatedBackground;
