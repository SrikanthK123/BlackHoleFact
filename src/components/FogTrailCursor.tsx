import React, { useEffect, useRef } from 'react';

interface Point {
    x: number;
    y: number;
}

const FogTrailCursor: React.FC = () => {
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const trailRef = useRef<Point[]>([]);
    const MAX_POINTS = 60; // Increased for "long length"
    const mouseRef = useRef({ x: 0, y: 0 });

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;

        const ctx = canvas.getContext('2d');
        if (!ctx) return;

        const resizeCanvas = () => {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
        };

        window.addEventListener('resize', resizeCanvas);
        resizeCanvas();

        const handleMouseMove = (e: MouseEvent) => {
            mouseRef.current.x = e.clientX;
            mouseRef.current.y = e.clientY;
        };

        window.addEventListener('mousemove', handleMouseMove);

        const animate = () => {
            ctx.clearRect(0, 0, canvas.width, canvas.height);

            // Add current mouse position
            trailRef.current.unshift({ x: mouseRef.current.x, y: mouseRef.current.y });

            // Keep only MAX_POINTS
            if (trailRef.current.length > MAX_POINTS) {
                trailRef.current.pop();
            }

            if (trailRef.current.length < 2) {
                requestAnimationFrame(animate);
                return;
            }

            // Draw the "Fog Line"
            // Layer 1: Outer soft glow (Mist)
            ctx.beginPath();
            ctx.lineCap = 'round';
            ctx.lineJoin = 'round';
            ctx.shadowBlur = 30;
            ctx.shadowColor = 'rgba(255, 140, 0, 0.4)';

            for (let i = 0; i < trailRef.current.length - 1; i++) {
                const p1 = trailRef.current[i];
                const p2 = trailRef.current[i + 1];

                const opacity = 1 - (i / MAX_POINTS);
                const width = 20 * opacity; // Thick to thin

                ctx.strokeStyle = `rgba(255, 140, 0, ${opacity * 0.2})`;
                ctx.lineWidth = width;

                ctx.beginPath();
                ctx.moveTo(p1.x, p1.y);
                ctx.lineTo(p2.x, p2.y);
                ctx.stroke();
            }

            // Layer 2: Core "Hot" line
            ctx.shadowBlur = 10;
            ctx.shadowColor = 'rgba(255, 170, 0, 0.8)';
            for (let i = 0; i < trailRef.current.length - 1; i++) {
                const p1 = trailRef.current[i];
                const p2 = trailRef.current[i + 1];

                const opacity = 1 - (i / MAX_POINTS);
                const width = 6 * opacity;

                ctx.strokeStyle = `rgba(255, 255, 255, ${opacity * 0.6})`;
                ctx.lineWidth = width;

                ctx.beginPath();
                ctx.moveTo(p1.x, p1.y);
                ctx.lineTo(p2.x, p2.y);
                ctx.stroke();
            }

            requestAnimationFrame(animate);
        };

        animate();

        return () => {
            window.removeEventListener('resize', resizeCanvas);
            window.removeEventListener('mousemove', handleMouseMove);
        };
    }, []);

    return (
        <canvas
            ref={canvasRef}
            className="fixed inset-0 pointer-events-none z-[9999]"
            style={{ mixBlendMode: 'screen' }}
        />
    );
};

export default FogTrailCursor;
