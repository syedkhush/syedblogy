"use client"

import { useState, useEffect, useRef } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Wind, Play, Pause, RotateCcw } from "lucide-react"
import { Button } from "@/components/ui/button"

interface PneumaTimerProps {
    onPulse: (pulse: number) => void
}

type BreathingPhase = "In" | "Hold" | "Out" | "Rest"

export default function PneumaTimer({ onPulse }: PneumaTimerProps) {
    const [isActive, setIsActive] = useState(false)
    const [phase, setPhase] = useState<BreathingPhase>("In")
    const [timeLeft, setTimeLeft] = useState(4)
    const [progress, setProgress] = useState(0) // 0 to 1 for the current phase

    const timerRef = useRef<NodeJS.Timeout | null>(null)
    const startTimeRef = useRef<number>(0)
    const PHASE_DURATION = 4000 // 4 seconds in ms

    useEffect(() => {
        if (isActive) {
            startTimeRef.current = Date.now()

            const tick = () => {
                const now = Date.now()
                const elapsed = now - startTimeRef.current
                const currentProgress = (elapsed % PHASE_DURATION) / PHASE_DURATION
                const totalElapsed = elapsed % (PHASE_DURATION * 4)

                // Determine phase
                let currentPhase: BreathingPhase = "In"
                let pulseValue = 0

                if (totalElapsed < PHASE_DURATION) {
                    currentPhase = "In"
                    pulseValue = totalElapsed / PHASE_DURATION
                } else if (totalElapsed < PHASE_DURATION * 2) {
                    currentPhase = "Hold"
                    pulseValue = 1
                } else if (totalElapsed < PHASE_DURATION * 3) {
                    currentPhase = "Out"
                    pulseValue = 1 - (totalElapsed - PHASE_DURATION * 2) / PHASE_DURATION
                } else {
                    currentPhase = "Rest"
                    pulseValue = 0
                }

                setPhase(currentPhase)
                setProgress(pulseValue)
                onPulse(pulseValue)
                setTimeLeft(4 - Math.floor((totalElapsed % PHASE_DURATION) / 1000))

                timerRef.current = requestAnimationFrame(tick) as any
            }

            timerRef.current = requestAnimationFrame(tick) as any
        } else {
            if (timerRef.current) cancelAnimationFrame(timerRef.current as any)
            setPhase("In")
            setTimeLeft(4)
            setProgress(0)
            onPulse(0)
        }

        return () => {
            if (timerRef.current) cancelAnimationFrame(timerRef.current as any)
        }
    }, [isActive, onPulse])

    const toggleTimer = () => setIsActive(!isActive)
    const resetTimer = () => {
        setIsActive(false)
        setPhase("In")
        setTimeLeft(4)
        setProgress(0)
        onPulse(0)
    }

    return (
        <div className="flex flex-col items-center justify-center p-8 rounded-3xl bg-white/20 dark:bg-slate-900/90 backdrop-blur-xl border border-white/20 shadow-2xl space-y-8 w-full max-w-md mx-auto relative overflow-hidden group">
            {/* Decorative Background Element */}
            <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-transparent pointer-events-none" />

            <div className="flex items-center gap-2 mb-2 z-10">
                <Wind className="w-5 h-5 text-primary animate-pulse" />
                <h3 className="text-xl font-serif font-medium tracking-wide text-foreground">
                    Pneuma Practice
                </h3>
            </div>

            {/* The Breathing Circle */}
            <div className="relative w-48 h-48 flex items-center justify-center z-10">
                {/* Outer Ring */}
                <div className="absolute inset-0 rounded-full border-2 border-primary/20" />

                {/* Breathing Circle */}
                <motion.div
                    animate={{
                        scale: 0.6 + progress * 0.4,
                        opacity: 0.3 + progress * 0.7,
                    }}
                    transition={{ duration: 0.1 }}
                    className="absolute inset-0 rounded-full bg-primary/20 backdrop-blur-sm border-2 border-primary/40 shadow-[0_0_30px_rgba(var(--primary),0.3)]"
                />

                {/* Phase Text */}
                <div className="flex flex-col items-center">
                    <AnimatePresence mode="wait">
                        <motion.span
                            key={phase}
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={{ opacity: 1, scale: 1 }}
                            exit={{ opacity: 0, scale: 1.2 }}
                            className="text-3xl font-serif font-light text-foreground"
                        >
                            {phase}
                        </motion.span>
                    </AnimatePresence>
                    <span className="text-lg font-mono text-muted-foreground tabular-nums">
                        {timeLeft}s
                    </span>
                </div>
            </div>

            {/* Controls */}
            <div className="flex items-center gap-4 z-10">
                <Button
                    variant={isActive ? "outline" : "default"}
                    size="lg"
                    onClick={toggleTimer}
                    className="rounded-full px-8 gap-2 shadow-lg transition-all hover:scale-105"
                >
                    {isActive ? (
                        <>
                            <Pause className="w-4 h-4" /> Pause
                        </>
                    ) : (
                        <>
                            <Play className="w-4 h-4 ml-1" /> Start Practice
                        </>
                    )}
                </Button>
                <Button
                    variant="ghost"
                    size="icon"
                    onClick={resetTimer}
                    className="rounded-full hover:bg-white/10"
                >
                    <RotateCcw className="w-4 h-4 text-muted-foreground" />
                </Button>
            </div>

            <p className="text-xs text-muted-foreground/60 text-center max-w-[280px] z-10">
                Focus on the breath as the vital spirit within. Breathe in, hold, breathe out, and hold for 4 seconds each.
            </p>
        </div>
    )
}
