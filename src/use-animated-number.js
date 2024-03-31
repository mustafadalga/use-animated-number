import { useEffect, useState, useRef } from "react";
export default function useAnimatedNumber(targetNumber, duration = 500) {
    const [displayNumber, setDisplayNumber] = useState(0);
    const requestRef = useRef();
    const startNumberRef = useRef(displayNumber);
    useEffect(() => {
        const frameDuration = 1000 / 60; // Approximate duration of a frame at 60fps
        const totalFrames = Math.round(duration / frameDuration);
        let currentFrame = 0;
        const animate = () => {
            currentFrame++;
            const progress = currentFrame / totalFrames;
            const currentNumber = startNumberRef.current + (targetNumber - startNumberRef.current) * progress;
            setDisplayNumber(currentNumber);
            if (currentFrame < totalFrames) {
                requestRef.current = requestAnimationFrame(animate);
            }
            else {
                setDisplayNumber(targetNumber);
            }
        };
        startNumberRef.current = displayNumber;
        requestRef.current = requestAnimationFrame(animate);
        return () => {
            if (requestRef.current) {
                cancelAnimationFrame(requestRef.current);
            }
        };
    }, [targetNumber, duration]);
    return displayNumber.toFixed(0);
}
