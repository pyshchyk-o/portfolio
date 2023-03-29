import React, { useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Plane, PerspectiveCamera, OrbitControls } from '@react-three/drei';

const Particles = ({ count = 1000 }) => {
  const particles = useMemo(() => {
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

  const ref = React.useRef();
  useFrame(() => {
    ref.current.rotation.x += 0.001;
    ref.current.rotation.y += 0.001;
    ref.current.rotation.z += 0.001;
  });

  return (
    <group ref={ref}>
      {particles.map((particle, i) => (
        <Plane key={i} position={particle.position} scale={particle.scale}>
          <meshBasicMaterial
            attach="material"
            color={
              i % 2 === 0 ? 'rgba(24, 77, 122, 0.6)' : 'rgba(48, 154, 245, 0.6)'
            }
          />
        </Plane>
      ))}
    </group>
  );
};

const Background = ({ animationEnabled }) => {
  return (
    <Canvas
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        zIndex: 1,
        opacity: animationEnabled ? 1 : 0,
        transition: 'opacity 0.3s ease-in-out',
      }}
      gl={{ clearColor: 'black' }}
    >
      <PerspectiveCamera position={[0, 0, 35]} />
      <Particles count={1000} />
      <OrbitControls
        minDistance={25}
        maxDistance={75}
        enableRotate={false}
      />
    </Canvas>
  );
};

export default Background;
