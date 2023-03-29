import React, { useMemo, useRef } from 'react';
import glsl from 'glslify';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';
import { extend, useFrame, useThree } from '@react-three/fiber';
import { Canvas } from '@react-three/fiber';
import { useWindowSize } from '@react-hook/window-size';

extend({ OrbitControls });

const vertexShader = glsl`
  varying vec2 vUv;
  void main() {
    vUv = uv;
    gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
  }
`;

const bright = glsl`
  uniform float time;
  varying vec2 vUv;

  void main() {
    vec2 position = - 1.0 + 2.0 * vUv;
    float red = abs( sin( position.x * position.y + time / 5.0 ) );
    float green = abs( sin( position.x * position.y + time / 4.0 ) );
    float blue = abs( sin( position.x * position.y + time / 3.0 ) );
    gl_FragColor = vec4( red, green, blue, 1.0 );
  }
`;

const pastel = glsl`
  uniform float time;
  varying vec2 vUv;

  vec3 pastelGradient(float t) {
    vec3 color1 = vec3(0.6, 0.8, 1.0);
    vec3 color2 = vec3(1.0, 0.8, 1.0);
    vec3 color3 = vec3(0.8, 1.0, 0.8);

    return mix(
      mix(color1, color2, t),
      color3,
      t
    );
  }

  void main() {
    vec2 position = - 1.0 + 2.0 * vUv;
    float t = abs(sin(position.x * position.y + time / 5.0));
    vec3 color = pastelGradient(t);
    gl_FragColor = vec4(color, 1.0);
  }
`;

const dark = glsl`
  uniform float time;
  varying vec2 vUv;

  vec3 darkGradient(float t) {
    vec3 color1 = vec3(0.1, 0.2, 0.4);
    vec3 color2 = vec3(0.3, 0.1, 0.4);
    vec3 color3 = vec3(0.1, 0.3, 0.2);

    return mix(
      mix(color1, color2, t),
      color3,
      t
    );
  }

  void main() {
    vec2 position = - 1.0 + 2.0 * vUv;
    float t = abs(sin(position.x * position.y + time / 5.0));
    vec3 color = darkGradient(t);
    gl_FragColor = vec4(color, 1.0);
  }
`;

const ukraine = glsl`
  uniform float time;
  varying vec2 vUv;

  vec3 ukraineGradient(float t) {
    vec3 color1 = vec3(0.0, 0.4, 0.8); // Blue
    vec3 color2 = vec3(1.0, 0.9, 0.0); // Yellow

    return mix(color1, color2, t);
  }

  void main() {
    vec2 position = - 1.0 + 2.0 * vUv;
    float t = abs(sin(position.x * position.y + time / 5.0));
    vec3 color = ukraineGradient(t);
    gl_FragColor = vec4(color, 1.0);
  }
`;

const gradients = {
  dark: dark,
  pastel: pastel,
  bright: bright,
  ukraine: ukraine,
}

const ParallaxBackground = ({ fragmentShader }) => {
  const { camera, gl } = useThree();
  const orbitControlsRef = useRef();

  useFrame((state, delta) => {
    if (orbitControlsRef.current) {
      orbitControlsRef.current.update();
    }
  });

  const uniforms = useMemo(() => {
    return {
      time: { value: 1.0 },
    };
  }, []);

  useFrame((state, delta) => {
    uniforms.time.value += delta;
  });

  return (
    <>
      <orbitControls
        ref={orbitControlsRef}
        args={[camera, gl.domElement]}
        enableZoom={false}
        enablePan={false}
        enableDamping
        dampingFactor={0.1}
        rotateSpeed={0.5}
        minZoom={1.5}
      />
      <mesh>
        <planeGeometry args={[6, 5]} />
        <shaderMaterial
          attach="material"
          args={[
            {
              uniforms,
              vertexShader,
              fragmentShader,
            },
          ]}
        />
      </mesh>
    </>
  );
};

const GradientBackground = ({ gradient, animationEnabled }) => {
  const [windowWidth, windowHeight] = useWindowSize();
  const fragmentShader = gradients[gradient];
  return (
    <div
      style={{
        width: '100%',
        height: '100vh',
        overflow: 'hidden',
        position: 'fixed',
        opacity: animationEnabled ? 1 : 0,
        transition: 'opacity 0.3s ease-in-out',
      }}
    >
      <Canvas
        style={{ width: '100%', height: '100%' }}
        camera={{ position: [0, 0, 2], fov: 75, aspect: windowWidth / windowHeight }}
        onCreated={({ gl }) => {
          gl.setSize(windowWidth, windowHeight);
        }}
      >
        <ParallaxBackground fragmentShader={fragmentShader}/>
      </Canvas>
    </div>
  );
}

export default GradientBackground;

