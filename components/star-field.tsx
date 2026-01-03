"use client"

import { useEffect, useRef } from "react"

interface StarFieldProps {
    isImmersive?: boolean
    breathPulse?: number // 0 to 1
}

export default function StarField({ isImmersive = false, breathPulse = 0 }: StarFieldProps) {
    const canvasRef = useRef<HTMLCanvasElement>(null)
    const isImmersiveRef = useRef(isImmersive)
    const breathPulseRef = useRef(breathPulse)

    // Update refs when props change
    useEffect(() => {
        isImmersiveRef.current = isImmersive
        breathPulseRef.current = breathPulse
    }, [isImmersive, breathPulse])

    useEffect(() => {
        const canvas = canvasRef.current
        if (!canvas) return

        const ctx = canvas.getContext("2d")
        if (!ctx) return

        // Set canvas size
        const resizeCanvas = () => {
            canvas.width = window.innerWidth
            canvas.height = window.innerHeight
        }
        resizeCanvas()
        window.addEventListener("resize", resizeCanvas)

        // Star properties
        interface Star {
            x: number
            y: number
            z: number
            size: number
        }

        const stars: Star[] = []
        const numStars = 1000 // Reduced from 1500
        const baseSpeed = 1.2 // Slightly slower
        const immersiveSpeed = 10.0 // Slightly slower warp

        // Use a ref to track current speed for interpolation
        const currentMovingSpeed = { value: baseSpeed }

        // Mouse position for parallax
        let mouseX = 0
        let mouseY = 0

        // Initialize stars
        for (let i = 0; i < numStars; i++) {
            stars.push({
                x: Math.random() * canvas.width - canvas.width / 2,
                y: Math.random() * canvas.height - canvas.height / 2,
                z: Math.random() * canvas.width,
                size: Math.random() * 1.2, // Reduced from 1.5
            })
        }

        // Mouse move handler
        const handleMouseMove = (e: MouseEvent) => {
            mouseX = (e.clientX / window.innerWidth - 0.5) * 2
            mouseY = (e.clientY / window.innerHeight - 0.5) * 2
        }
        window.addEventListener("mousemove", handleMouseMove)

        // Animation loop
        const animate = () => {
            // Smoothly interpolate speed based on immersive state
            const targetSpeed = isImmersiveRef.current ? immersiveSpeed : baseSpeed
            currentMovingSpeed.value += (targetSpeed - currentMovingSpeed.value) * 0.05

            ctx.fillStyle = "rgba(0, 0, 0, 0.25)" // Increased from 0.1 for shorter trails
            ctx.fillRect(0, 0, canvas.width, canvas.height)

            const centerX = canvas.width / 2
            const centerY = canvas.height / 2

            stars.forEach((star) => {
                // Move star
                star.z -= currentMovingSpeed.value

                // Reset star if it goes past the screen
                if (star.z <= 0) {
                    star.z = canvas.width
                    star.x = Math.random() * canvas.width - canvas.width / 2
                    star.y = Math.random() * canvas.height - canvas.height / 2
                }

                // Calculate 2D position with parallax
                const k = 128 / star.z
                let x = star.x * k + centerX
                let y = star.y * k + centerY

                // Apply parallax based on mouse position
                x += mouseX * (1 - star.z / canvas.width) * 100
                y += mouseY * (1 - star.z / canvas.width) * 100

                // Calculate size and opacity based on depth and breathing pulse
                const pulseEffect = 1 + breathPulseRef.current * 0.5
                const size = (1 - star.z / canvas.width) * star.size * 3 * pulseEffect
                const opacity = Math.min(1, (1 - star.z / canvas.width) * 1.5 * pulseEffect)

                // Draw star
                if (x >= 0 && x <= canvas.width && y >= 0 && y <= canvas.height) {
                    ctx.fillStyle = `rgba(255, 255, 255, ${opacity})`
                    ctx.beginPath()
                    ctx.arc(x, y, size, 0, Math.PI * 2)
                    ctx.fill()
                }
            })

            requestAnimationFrame(animate)
        }

        animate()

        return () => {
            window.removeEventListener("resize", resizeCanvas)
            window.removeEventListener("mousemove", handleMouseMove)
        }
    }, [])

    return (
        <canvas
            ref={canvasRef}
            className="fixed inset-0 -z-10 pointer-events-none bg-black/5 dark:bg-black/20"
            style={{ mixBlendMode: "screen" }}
        />
    )
}
