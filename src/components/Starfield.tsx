import { useMemo, useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Points, PointMaterial } from '@react-three/drei';
// @ts-ignore
import * as random from 'maath/random/dist/maath-random.esm';

const Stars = (props: any) => {
    const ref = useRef<any>(null);
    const materialRef = useRef<any>(null);

    // @ts-ignore
    const sphere = useMemo(() => {
        const p = new Float32Array(5000);
        // @ts-ignore
        return random.inSphere(p, { radius: 1.5 });
    }, []);

    useFrame((state, delta) => {
        if (ref.current) {
            ref.current.rotation.x -= delta / 15;
            ref.current.rotation.y -= delta / 20;
        }

        // Mouse reactive opacity
        if (materialRef.current) {
            const { mouse } = state;
            const dist = Math.sqrt(mouse.x * mouse.x + mouse.y * mouse.y);
            // Stars glow brighter as mouse moves further from center or moves fast
            const targetOpacity = 0.4 + dist * 0.6;
            materialRef.current.opacity += (targetOpacity - materialRef.current.opacity) * 0.1;
        }
    });

    return (
        <group rotation={[0, 0, Math.PI / 4]}>
            <Points ref={ref} positions={sphere as Float32Array} stride={3} frustumCulled {...props}>
                <PointMaterial
                    ref={materialRef}
                    transparent
                    color="#ffffff"
                    size={0.005}
                    sizeAttenuation={true}
                    depthWrite={false}
                    opacity={0.8}
                />
            </Points>
        </group>
    );
};

const Starfield = () => {
    return (
        <div className="fixed inset-0 z-[-1] pointer-events-none">
            <Canvas camera={{ position: [0, 0, 1] }}>
                <Stars />
            </Canvas>
        </div>
    );
};

export default Starfield;
