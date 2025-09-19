'use client';

import { useMemo, useRef } from 'react';
import { Canvas, useFrame, useLoader } from '@react-three/fiber';
import { EffectComposer, Bloom, Vignette } from '@react-three/postprocessing';
import { TextureLoader, type Mesh } from 'three';

type EyeballProps = {
  textureUrl: string;
  speed: number;
  parallax?: number;
  segments?: number;
};

function Eyeball({ textureUrl, speed, parallax = 0.25, segments = 64 }: EyeballProps) {
  const mesh = useRef<Mesh>(null!);
  const map = useLoader(TextureLoader, textureUrl);
  const SCALE = 0.92;

  useFrame((state, delta) => {
    if (!mesh.current) return;
    mesh.current.rotation.y += delta * speed;

    const x = (state.mouse.x * parallax) / 2;
    const y = (-state.mouse.y * parallax) / 2;

    mesh.current.rotation.x = y;
    mesh.current.rotation.y += x;
  });

  return (
    <mesh ref={mesh} scale={SCALE}>
      <sphereGeometry args={[1, segments, segments]} />
      <meshPhysicalMaterial
        map={map}
        roughness={0.18}
        metalness={0.0}
        clearcoat={0.7}
        clearcoatRoughness={0.22}
        reflectivity={0.3}
      />
    </mesh>
  );
}

type Eye3DProps = {
  textureUrl: string;
  size?: number;
  speed?: number;
  parallax?: number;
};

export default function Eye3D({
  textureUrl,
  size = 360,
  speed = 0.1,
  parallax = 0.25,
}: Eye3DProps) {
  const isMobile = typeof window !== 'undefined' && window.innerWidth < 768;
  const reduce =
    typeof window !== 'undefined' &&
    window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  const segments = isMobile ? 40 : 64;

  const PostFX = useMemo(() => {
    if (reduce || isMobile) return null;
    return (
      <EffectComposer disableNormalPass>
        <Bloom intensity={0.28} luminanceThreshold={0.25} luminanceSmoothing={0.35} />
        <Vignette eskil={false} offset={0.28} darkness={0.5} />
      </EffectComposer>
    );
  }, [reduce, isMobile]);

  return (
    <div
      style={{
        width: size,
        height: size,
        WebkitMaskImage: 'radial-gradient(circle, #000 99%, transparent 100%)',
        maskImage: 'radial-gradient(circle, #000 99%, transparent 100%)',
      }}
      className="relative rounded-full overflow-hidden will-change-transform shadow-xl-soft"
    >
      <div className="absolute inset-0 [clip-path:circle(50%_at_50%_50%)]">
        <Canvas
          gl={{ antialias: true, alpha: true }}
          camera={{ position: [0, 0, 2.2], fov: 42 }}
          onCreated={({ gl }) => gl.setClearColor(0x000000, 0)}
        >
          <ambientLight intensity={0.5} />
          <directionalLight position={[5, 5, 5]} intensity={1} />
          <Eyeball
            textureUrl={textureUrl}
            speed={speed}
            parallax={parallax}
            segments={segments}
          />
          {PostFX}
        </Canvas>
      </div>
    </div>
  );
}
