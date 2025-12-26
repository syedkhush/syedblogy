"use client";

import { useEffect, useRef } from "react";

export default function ClickSoundProvider({
    children,
}: {
    children: React.ReactNode;
}) {
    const audioRef = useRef<HTMLAudioElement | null>(null);

    useEffect(() => {
        // Initialize audio object
        audioRef.current = new Audio("/click.mp3");
        audioRef.current.volume = 0.3; // Low volume by default so it's not annoying

        const handleClick = (e: MouseEvent) => {
            // Check if the clicked element or its parents is an anchor or button
            const target = e.target as HTMLElement;
            const clickable = target.closest("a, button, [role='button']");

            if (clickable && audioRef.current) {
                // Reset time directly to allow rapid clicks
                audioRef.current.currentTime = 0;
                // Play the sound, catching any autoplay errors
                audioRef.current.play().catch((err) => {
                    // Silent fail is okay - browsers might block autoplay or file might be missing
                    console.error("Audio play failed", err);
                });
            }
        };

        // Use capture phase to detect clicks even if other components prevent bubbling
        window.addEventListener("click", handleClick, true);

        return () => {
            window.removeEventListener("click", handleClick, true);
        };
    }, []);

    return <>{children}</>;
}
