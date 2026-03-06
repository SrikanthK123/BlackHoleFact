import { useRef, useMemo } from 'react';
import { useFrame } from '@react-three/fiber';
import { Float, Stars, Sphere, MeshDistortMaterial } from '@react-three/drei';
import * as THREE from 'three';

const AstroAvatar = () => {
    const groupRef = useRef<THREE.Group>(null!);
    const particlesRef = useRef<THREE.Points>(null!);

    // Create a localized particle field for "Space" around the person
    const particleCount = 1000;
    const positions = useMemo(() => {
        const pos = new Float32Array(particleCount * 3);
        for (let i = 0; i < particleCount; i++) {
            pos[i * 3] = (Math.random() - 0.5) * 10;
            pos[i * 3 + 1] = (Math.random() - 0.5) * 10;
            pos[i * 3 + 2] = (Math.random() - 0.5) * 10;
        }
        return pos;
    }, []);

    useFrame((state) => {
        const time = state.clock.getElapsedTime();
        if (groupRef.current) {
            groupRef.current.rotation.y = time * 0.1;
        }
        if (particlesRef.current) {
            particlesRef.current.rotation.y = time * 0.05;
        }
    });

    return (
        <group ref={groupRef}>
            {/* Ambient Space */}
            <Stars radius={50} depth={50} count={2000} factor={4} saturation={0} fade speed={1} />

            {/* The "Person" - Stylized as a floating energetic core / silhouette */}
            <Float speed={2} rotationIntensity={0.5} floatIntensity={1}>
                <Sphere args={[1.2, 64, 64]}>
                    <MeshDistortMaterial
                        color="#a2f0ff"
                        envMapIntensity={2}
                        clearcoat={1}
                        clearcoatRoughness={0}
                        metalness={0.4}
                        roughness={0.2}
                        distort={0.3}
                        speed={2}
                    />
                </Sphere>

                {/* Secondary "Energy" Ring */}
                <mesh rotation={[Math.PI / 2, 0, 0]}>
                    <torusGeometry args={[1.8, 0.02, 16, 100]} />
                    <meshBasicMaterial color="#a2f0ff" transparent opacity={0.3} />
                </mesh>
            </Float>

            {/* Localized "Cosmic Dust" */}
            <points ref={particlesRef}>
                <bufferGeometry>
                    <bufferAttribute
                        attach="attributes-position"
                        count={positions.length / 3}
                        array={positions}
                        itemSize={3}
                        args={[positions, 3]}
                    />
                </bufferGeometry>
                <pointsMaterial
                    size={0.02}
                    color="#a2f0ff"
                    transparent
                    opacity={0.6}
                    sizeAttenuation
                />
            </points>

            {/* Lights focused on the avatar */}
            <pointLight position={[5, 5, 5]} intensity={2} color="#a2f0ff" />
            <pointLight position={[-5, -5, -5]} intensity={1} color="#00ffff" />
            <ambientLight intensity={0.2} />
        </group>
    );
};

export default AstroAvatar;
