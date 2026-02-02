import { useRef, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Float, MeshDistortMaterial, Sphere, Box, Torus, OrbitControls } from '@react-three/drei';
import * as THREE from 'three';

const FloatingGeometry = ({ position, geometry, color, speed = 1 }: { 
  position: [number, number, number]; 
  geometry: 'sphere' | 'box' | 'torus';
  color: string;
  speed?: number;
}) => {
  const meshRef = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x = state.clock.getElapsedTime() * 0.2 * speed;
      meshRef.current.rotation.y = state.clock.getElapsedTime() * 0.3 * speed;
    }
  });

  const GeometryComponent = () => {
    switch (geometry) {
      case 'sphere':
        return <Sphere args={[1, 32, 32]} />;
      case 'box':
        return <Box args={[1.5, 1.5, 1.5]} />;
      case 'torus':
        return <Torus args={[1, 0.4, 16, 32]} />;
      default:
        return <Sphere args={[1, 32, 32]} />;
    }
  };

  return (
    <Float speed={2} rotationIntensity={0.5} floatIntensity={1}>
      <mesh ref={meshRef} position={position}>
        <GeometryComponent />
        <MeshDistortMaterial
          color={color}
          attach="material"
          distort={0.3}
          speed={2}
          roughness={0.2}
          metalness={0.8}
        />
      </mesh>
    </Float>
  );
};

const ParticleField = () => {
  const particlesRef = useRef<THREE.Points>(null);
  
  const particlesCount = 200;
  const positions = useMemo(() => {
    const pos = new Float32Array(particlesCount * 3);
    for (let i = 0; i < particlesCount; i++) {
      pos[i * 3] = (Math.random() - 0.5) * 20;
      pos[i * 3 + 1] = (Math.random() - 0.5) * 20;
      pos[i * 3 + 2] = (Math.random() - 0.5) * 20;
    }
    return pos;
  }, []);

  useFrame((state) => {
    if (particlesRef.current) {
      particlesRef.current.rotation.y = state.clock.getElapsedTime() * 0.02;
      particlesRef.current.rotation.x = state.clock.getElapsedTime() * 0.01;
    }
  });

  return (
    <points ref={particlesRef}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={particlesCount}
          array={positions}
          itemSize={3}
        />
      </bufferGeometry>
      <pointsMaterial
        size={0.05}
        color="#2dd4bf"
        sizeAttenuation
        transparent
        opacity={0.6}
      />
    </points>
  );
};

const MainShape = () => {
  const meshRef = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x = Math.sin(state.clock.getElapsedTime() * 0.3) * 0.2;
      meshRef.current.rotation.y = state.clock.getElapsedTime() * 0.2;
    }
  });

  return (
    <Float speed={1.5} rotationIntensity={0.3} floatIntensity={0.5}>
      <mesh ref={meshRef} scale={2}>
        <icosahedronGeometry args={[1, 1]} />
        <MeshDistortMaterial
          color="#14b8a6"
          attach="material"
          distort={0.4}
          speed={1.5}
          roughness={0.1}
          metalness={0.9}
          wireframe
        />
      </mesh>
    </Float>
  );
};

const InteractiveScene = () => {
  return (
    <div className="w-full h-full min-h-[400px] md:min-h-[500px]">
      <Canvas
        camera={{ position: [0, 0, 8], fov: 45 }}
        style={{ background: 'transparent' }}
      >
        {/* Lighting */}
        <ambientLight intensity={0.3} />
        <directionalLight position={[10, 10, 5]} intensity={1} color="#ffffff" />
        <pointLight position={[-10, -10, -5]} intensity={0.5} color="#14b8a6" />
        <pointLight position={[10, -10, 5]} intensity={0.3} color="#0891b2" />

        {/* Main geometry */}
        <MainShape />

        {/* Floating geometries */}
        <FloatingGeometry position={[-3, 2, -2]} geometry="sphere" color="#0891b2" speed={0.5} />
        <FloatingGeometry position={[3, -1, -3]} geometry="box" color="#14b8a6" speed={0.7} />
        <FloatingGeometry position={[-2, -2, -1]} geometry="torus" color="#06b6d4" speed={0.6} />
        <FloatingGeometry position={[2.5, 1.5, -2]} geometry="sphere" color="#2dd4bf" speed={0.8} />

        {/* Particle field */}
        <ParticleField />

        {/* Controls for interaction */}
        <OrbitControls
          enableZoom={false}
          enablePan={false}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2.5}
        />
      </Canvas>
    </div>
  );
};

export default InteractiveScene;
