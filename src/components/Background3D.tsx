import { useRef, useEffect } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { useGLTF, Float, PerspectiveCamera, Environment } from '@react-three/drei';
import * as THREE from 'three';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const FloatingCube = ({ position, rotation, color, scale = 1 }) => {
  const meshRef = useRef();
  const initialPosition = position;

  useFrame((state) => {
    const time = state.clock.getElapsedTime();
    meshRef.current.rotation.x = rotation[0] + Math.sin(time * 0.5) * 0.2;
    meshRef.current.rotation.y = rotation[1] + Math.cos(time * 0.5) * 0.2;
    meshRef.current.position.y = initialPosition[1] + Math.sin(time * 0.5) * 0.2;
  });

  return (
    <mesh ref={meshRef} position={position} scale={scale}>
      <boxGeometry args={[1, 1, 1]} />
      <meshStandardMaterial
        color={color}
        metalness={0.8}
        roughness={0.2}
        envMapIntensity={1}
      />
    </mesh>
  );
};

const FloatingSphere = ({ position, color, scale = 1 }) => {
  const meshRef = useRef();
  const initialPosition = position;

  useFrame((state) => {
    const time = state.clock.getElapsedTime();
    meshRef.current.position.y = initialPosition[1] + Math.sin(time * 0.5) * 0.2;
    meshRef.current.rotation.y = time * 0.5;
  });

  return (
    <mesh ref={meshRef} position={position} scale={scale}>
      <sphereGeometry args={[1, 32, 32]} />
      <meshStandardMaterial
        color={color}
        metalness={0.8}
        roughness={0.2}
        envMapIntensity={1}
      />
    </mesh>
  );
};

const FloatingTorus = ({ position, color, scale = 1 }) => {
  const meshRef = useRef();
  const initialPosition = position;

  useFrame((state) => {
    const time = state.clock.getElapsedTime();
    meshRef.current.rotation.x = time * 0.5;
    meshRef.current.rotation.y = time * 0.2;
    meshRef.current.position.y = initialPosition[1] + Math.sin(time * 0.5) * 0.2;
  });

  return (
    <mesh ref={meshRef} position={position} scale={scale}>
      <torusGeometry args={[1, 0.3, 16, 32]} />
      <meshStandardMaterial
        color={color}
        metalness={0.8}
        roughness={0.2}
        envMapIntensity={1}
      />
    </mesh>
  );
};

const Scene = () => {
  const groupRef = useRef();

  useEffect(() => {
    gsap.to(groupRef.current.rotation, {
      y: Math.PI * 2,
      duration: 20,
      repeat: -1,
      ease: 'none',
    });

    // Scroll-based animations
    gsap.to(groupRef.current.position, {
      scrollTrigger: {
        trigger: 'body',
        start: 'top top',
        end: 'bottom bottom',
        scrub: 1,
      },
      y: -10,
    });
  }, []);

  return (
    <group ref={groupRef}>
      <ambientLight intensity={0.5} />
      <pointLight position={[10, 10, 10]} intensity={1} />
      <pointLight position={[-10, -10, -10]} intensity={0.5} />

      <FloatingCube
        position={[-5, 2, -5]}
        rotation={[0.5, 0.5, 0]}
        color="#6366f1"
        scale={1.5}
      />
      <FloatingSphere
        position={[5, -2, -3]}
        color="#8b5cf6"
        scale={1.2}
      />
      <FloatingTorus
        position={[0, 0, -7]}
        color="#ec4899"
        scale={1.8}
      />
      <FloatingCube
        position={[4, 3, -4]}
        rotation={[0.2, 0.8, 0]}
        color="#3b82f6"
        scale={1}
      />
      <FloatingSphere
        position={[-3, -3, -6]}
        color="#10b981"
        scale={1.3}
      />
    </group>
  );
};

const Background3D = () => {
  return (
    <div className="fixed inset-0 -z-10">
      <Canvas>
        <PerspectiveCamera makeDefault position={[0, 0, 10]} />
        <Environment preset="city" />
        <Scene />
      </Canvas>
    </div>
  );
};

export default Background3D; 