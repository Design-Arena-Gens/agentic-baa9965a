"use client";

import { Canvas } from '@react-three/fiber';
import { Float, OrbitControls, Environment, MeshTransmissionMaterial } from '@react-three/drei';
import { Suspense, useMemo } from 'react';

function GlassKnot() {
  return (
    <Float speed={1.2} rotationIntensity={0.6} floatIntensity={1.2}>
      <mesh castShadow scale={1.2} rotation={[0.3, 0.2, 0]}>
        {/* @ts-expect-error primitive types ok */}
        <torusKnotGeometry args={[1, 0.28, 220, 32]} />
        <MeshTransmissionMaterial
          thickness={1.2}
          roughness={0.2}
          transmission={1}
          ior={1.3}
          chromaticAberration={0.06}
          anisotropicBlur={0.06}
          distortion={0.15}
          distortionScale={0.3}
          temporalDistortion={0.05}
          attenuationColor="#8ef6d1"
          attenuationDistance={0.7}
          color="#7aa2ff"
        />
      </mesh>
    </Float>
  );
}

function Orbs() {
  const positions = useMemo(() => new Array(24).fill(0).map((_, i) => {
    const r = 3.5 + Math.random() * 2;
    const a = (i / 24) * Math.PI * 2;
    return [Math.cos(a) * r, (Math.random() - 0.5) * 2.2, Math.sin(a) * r] as [number, number, number];
  }), []);
  return (
    <group>
      {positions.map((p, i) => (
        <Float key={i} speed={1 + (i % 5) * 0.2} rotationIntensity={0.2} floatIntensity={0.6}>
          <mesh position={p}>
            {/* @ts-expect-error primitive types ok */}
            <icosahedronGeometry args={[0.18 + ((i % 5) * 0.04), 1]} />
            <meshStandardMaterial color={i % 2 ? '#9fb6ff' : '#8ef6d1'} metalness={0.2} roughness={0.2} emissiveIntensity={0.2} />
          </mesh>
        </Float>
      ))}
    </group>
  );
}

export default function Hero3D() {
  return (
    <div style={{ height: 520, background: 'radial-gradient(600px 320px at 70% 10%, rgba(122,162,255,0.08), transparent)', borderRadius: 16 }}>
      <Canvas shadows camera={{ position: [3.5, 2.4, 4.2], fov: 42 }}>
        <color attach="background" args={["#0b0d12"]} />
        <ambientLight intensity={0.5} />
        <directionalLight position={[5, 5, 5]} intensity={1.2} castShadow />
        <Suspense fallback={null}>
          <GlassKnot />
          <Orbs />
          <Environment preset="city" />
        </Suspense>
        <OrbitControls enableZoom={false} enablePan={false} minPolarAngle={Math.PI / 3.2} maxPolarAngle={Math.PI / 1.8} />
      </Canvas>
    </div>
  );
}
