"use client"

import { useState, useEffect, useRef } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { X, Volume2, VolumeX } from "lucide-react"
import { Button } from "@/components/ui/button"
import { stoicQuotes } from "@/lib/quotes"

interface ImmersiveOverlayProps {
    onExit: () => void
}

export default function ImmersiveOverlay({ onExit }: ImmersiveOverlayProps) {
    const [quoteIndex, setQuoteIndex] = useState(0)
    const [isAudioEnabled, setIsAudioEnabled] = useState(true)
    const audioCtx = useRef<AudioContext | null>(null)
    const oscillators = useRef<OscillatorNode[]>([])
    const gainNode = useRef<GainNode | null>(null)

    // Quote cycling
    useEffect(() => {
        const interval = setInterval(() => {
            setQuoteIndex((prev) => (prev + 1) % stoicQuotes.length)
        }, 12000)
        return () => clearInterval(interval)
    }, [])

    // Audio setup: Procedural cosmic drone
    useEffect(() => {
        if (!audioCtx.current) {
            audioCtx.current = new (window.AudioContext || (window as any).webkitAudioContext)()

            // Root gain for the whole drone
            gainNode.current = audioCtx.current.createGain()
            gainNode.current.gain.setValueAtTime(0, audioCtx.current.currentTime)

            // Lowpass filter to dampen the sound
            const filter = audioCtx.current.createBiquadFilter()
            filter.type = 'lowpass'
            filter.frequency.setValueAtTime(400, audioCtx.current.currentTime)

            filter.connect(audioCtx.current.destination)
            gainNode.current.connect(filter)

            // Create a few low oscillators for a drone
            const frequencies = [60, 90, 120]
            frequencies.forEach(freq => {
                const osc = audioCtx.current!.createOscillator()
                const oscGain = audioCtx.current!.createGain()

                osc.type = 'sine'
                osc.frequency.setValueAtTime(freq, audioCtx.current!.currentTime)

                // Add sub-oscillations (LFO) for breathing effect
                const lfo = audioCtx.current!.createOscillator()
                lfo.type = 'sine'
                lfo.frequency.setValueAtTime(0.1, audioCtx.current!.currentTime)
                const lfoGain = audioCtx.current!.createGain()
                lfoGain.gain.setValueAtTime(0.02, audioCtx.current!.currentTime)

                lfo.connect(lfoGain)
                lfoGain.connect(oscGain.gain)
                lfo.start()

                oscGain.gain.setValueAtTime(0.05, audioCtx.current!.currentTime)

                osc.connect(oscGain)
                oscGain.connect(gainNode.current!)
                osc.start()
                oscillators.current.push(osc)
            })

            // Add white noise for "cosmic wind"
            const bufferSize = 2 * audioCtx.current.sampleRate
            const noiseBuffer = audioCtx.current.createBuffer(1, bufferSize, audioCtx.current.sampleRate)
            const output = noiseBuffer.getChannelData(0)
            for (let i = 0; i < bufferSize; i++) {
                output[i] = Math.random() * 2 - 1
            }

            const noise = audioCtx.current.createBufferSource()
            noise.buffer = noiseBuffer
            noise.loop = true

            const noiseFilter = audioCtx.current.createBiquadFilter()
            noiseFilter.type = 'bandpass'
            noiseFilter.frequency.setValueAtTime(1200, audioCtx.current.currentTime)
            noiseFilter.Q.setValueAtTime(1, audioCtx.current.currentTime)

            const noiseGain = audioCtx.current.createGain()
            noiseGain.gain.setValueAtTime(0.01, audioCtx.current.currentTime)

            noise.connect(noiseFilter)
            noiseFilter.connect(noiseGain)
            noiseGain.connect(gainNode.current!)
            noise.start()
        }

        if (isAudioEnabled) {
            gainNode.current?.gain.setTargetAtTime(0.4, audioCtx.current.currentTime, 2)
        } else {
            gainNode.current?.gain.setTargetAtTime(0, audioCtx.current.currentTime, 0.5)
        }

        return () => {
            if (audioCtx.current && audioCtx.current.state !== 'closed') {
                gainNode.current?.gain.setTargetAtTime(0, audioCtx.current.currentTime, 1)
            }
        }
    }, [isAudioEnabled])

    const toggleAudio = () => setIsAudioEnabled(!isAudioEnabled)

    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-black/40 backdrop-blur-[2px] overflow-hidden"
        >
            {/* Controls */}
            <div className="absolute top-8 right-8 flex gap-4">
                <Button
                    variant="ghost"
                    size="icon"
                    onClick={toggleAudio}
                    className="text-white/50 hover:text-white hover:bg-white/10"
                >
                    {isAudioEnabled ? <Volume2 className="w-6 h-6" /> : <VolumeX className="w-6 h-6" />}
                </Button>
                <Button
                    variant="ghost"
                    size="icon"
                    onClick={onExit}
                    className="text-white/50 hover:text-white hover:bg-white/10"
                >
                    <X className="w-6 h-6" />
                </Button>
            </div>

            {/* Quote Display */}
            <div className="max-w-2xl px-8 text-center">
                <AnimatePresence mode="wait">
                    <motion.div
                        key={quoteIndex}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        transition={{ duration: 3, ease: "easeInOut" }}
                        className="space-y-6"
                    >
                        <p className="text-2xl md:text-3xl font-serif font-light text-white leading-relaxed italic drop-shadow-[0_0_15px_rgba(255,255,255,0.3)]">
                            "{stoicQuotes[quoteIndex].text}"
                        </p>
                        <div className="flex flex-col items-center gap-1">
                            <span className="text-white/60 font-medium tracking-widest uppercase text-sm">
                                — {stoicQuotes[quoteIndex].author}
                            </span>
                            {stoicQuotes[quoteIndex].source && (
                                <span className="text-white/40 italic text-xs">
                                    {stoicQuotes[quoteIndex].source}
                                </span>
                            )}
                        </div>
                    </motion.div>
                </AnimatePresence>
            </div>

            <div className="absolute bottom-12 text-white/20 text-xs tracking-widest uppercase">
                View From Above
            </div>
        </motion.div>
    )
}
