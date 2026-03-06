import { Suspense, useRef, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, PerspectiveCamera, PointMaterial } from '@react-three/drei';
import { Bloom, EffectComposer } from '@react-three/postprocessing';
import { motion } from 'framer-motion';
import * as THREE from 'three';

// Procedural Nebula/Fluid substitute since we don't have the GLB yet
const FluidMesh = () => {
    const meshRef = useRef<THREE.Points>(null!);

    // Create a procedural geometry that looks "fluid-like" or like an accretion disk
    const particlesCount = 2000;
    const positions = useMemo(() => {
        const pos = new Float32Array(particlesCount * 3);
        for (let i = 0; i < particlesCount; i++) {
            const angle = Math.random() * Math.PI * 2;
            const radius = 2 + Math.random() * 2;
            pos[i * 3] = Math.cos(angle) * radius;
            pos[i * 3 + 1] = (Math.random() - 0.5) * 0.5;
            pos[i * 3 + 2] = Math.sin(angle) * radius;
        }
        return pos;
    }, []);

    useFrame((state) => {
        const time = state.clock.getElapsedTime();
        if (meshRef.current) {
            meshRef.current.rotation.y = time * 0.2;
        }
    });

    return (
        <points ref={meshRef}>
            <bufferGeometry>
                <bufferAttribute
                    attach="attributes-position"
                    count={positions.length / 3}
                    array={positions}
                    itemSize={3}
                    args={[positions, 3]}
                />
            </bufferGeometry>
            <PointMaterial
                size={0.05}
                color="#ff8c00"
                transparent
                opacity={0.8}
                blending={THREE.AdditiveBlending}
                sizeAttenuation={true}
                depthWrite={false}
            />
        </points>
    );
};

const AnimatedContent = () => {
    const groupRef = useRef<THREE.Group>(null!);

    useFrame((_, delta) => {
        if (groupRef.current && groupRef.current.scale.x < 1) {
            const nextScale = Math.min(1, groupRef.current.scale.x + delta * 0.17);
            groupRef.current.scale.set(nextScale, nextScale, nextScale);
        }
    });

    return (
        <group ref={groupRef} scale={[0, 0, 0]}>
            <FluidMesh />

            {/* Central Glow / Singularity */}
            <mesh>
                <sphereGeometry args={[1.5, 64, 64]} />
                <meshStandardMaterial
                    emissive="#000"
                    color="#000"
                    roughness={0}
                />
            </mesh>

            {/* Event Horizon Glow */}
            <mesh scale={[1.1, 1.1, 1.1]}>
                <sphereGeometry args={[1.5, 64, 64]} />
                <meshBasicMaterial color="#ff8c00" transparent opacity={0.1} wireframe />
            </mesh>
        </group>
    );
};

const FluidSim = () => {
    return (
        <div className="h-screen w-full bg-black relative overflow-hidden">
            {/* HUD Overlay */}
            <div className="absolute inset-0 z-10 pointer-events-none p-12 flex flex-col justify-between">
                <motion.div
                    initial={{ x: -100, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    className="max-w-md"
                >
                    <div className="flex items-center gap-4 mb-4">
                        <div className="w-12 h-[1px] bg-cosmic-accent" />
                        <span className="text-cosmic-accent font-bold tracking-[0.5em] text-xs uppercase">Telemetry Active</span>
                    </div>
                    <h1 className="text-4xl font-black mb-4">ACCRETION DISK SIMULATION</h1>
                    <p className="text-gray-500 text-sm leading-relaxed border-l-2 border-white/10 pl-4">
                        Visualizing relativistic plasma flows near a supermassive black hole event horizon.
                        This model uses smoothed-particle hydrodynamics to map the high-energy photon emission
                        from the inner-most stable circular orbit (ISCO).
                    </p>
                </motion.div>

                <motion.div
                    initial={{ y: 100, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    className="flex justify-between items-end"
                >
                    <div className="text-[10px] text-gray-600 font-mono space-y-1">
                        <p>RAD: 4.2e6 KM</p>
                        <p>VEL: 0.92c</p>
                        <p>TMP: 1.4e7 K</p>
                    </div>
                    <div className="glassmorphism p-4 rounded-xl text-xs text-gray-400">
                        DRAG TO ROTATE • SCROLL TO ZOOM
                    </div>
                </motion.div>
            </div>

            <Canvas shadows>
                <PerspectiveCamera makeDefault position={[0, 5, 10]} />
                <OrbitControls enableDamping dampingFactor={0.05} />

                <ambientLight intensity={0.5} />
                <pointLight position={[10, 10, 10]} intensity={3} color="#ff8c00" />
                <pointLight position={[-10, -10, -10]} intensity={2} color="#ff4400" />

                <Suspense fallback={null}>
                    <AnimatedContent />
                </Suspense>

                {/* Postprocessing */}
                <EffectComposer>
                    <Bloom luminanceThreshold={0.2} luminanceSmoothing={0.9} height={300} intensity={2} />
                </EffectComposer>
            </Canvas>
        </div>
    );
};

export default FluidSim;
