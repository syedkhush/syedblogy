"use client"

import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { BookOpen, Leaf, Mountain, Sun, Wind, Scale, Globe, Cloud } from "lucide-react"
import { Navigation } from "@/components/navigation"
import { BuyMeCoffee } from "@/components/buy-me-coffee"
import { motion, AnimatePresence } from "framer-motion"
import DailyPractice from "@/components/daily-practice"
import dynamic from "next/dynamic"
import { useState } from "react"
import { Telescope } from "lucide-react"
import ImmersiveOverlay from "@/components/immersive-overlay"
import PneumaTimer from "@/components/pneuma-timer"

const StarField = dynamic(() => import("@/components/star-field"), { ssr: false })

export default function HomePage() {
    const [isImmersive, setIsImmersive] = useState(false)
    const [breathPulse, setBreathPulse] = useState(0)
    const container = {
        hidden: { opacity: 0 },
        show: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1,
            },
        },
    }

    const item = {
        hidden: { opacity: 0, y: 20 },
        show: { opacity: 1, y: 0 },
    }

    const philosophicalConcepts = [
        {
            title: "The Dichotomy of Control",
            description: "Distinguishing between what is up to us and what is not",
            icon: Scale,
            href: "/concepts/dichotomy-of-control",
            color: "bg-stone-100 hover:bg-stone-200 dark:bg-stone-900/50 dark:hover:bg-stone-900",
        },
        {
            title: "Sympatheia",
            description: "The mutual interdependence of all things",
            icon: Globe,
            href: "/concepts/sympatheia",
            color: "bg-indigo-50 hover:bg-indigo-100 dark:bg-indigo-900/20 dark:hover:bg-indigo-900/30",
        },
        {
            title: "Amor Fati",
            description: "Love of fate - embracing everything that happens as necessary",
            icon: Sun,
            href: "/concepts/amor-fati",
            color: "bg-amber-50 hover:bg-amber-100 dark:bg-amber-900/20 dark:hover:bg-amber-900/30",
        },
        {
            title: "Apatheia",
            description: "Freedom from passions - achieving a state of inner tranquility",
            icon: Wind,
            href: "/concepts/apatheia",
            color: "bg-teal-50 hover:bg-teal-100 dark:bg-teal-900/20 dark:hover:bg-teal-900/30",
        },
        {
            title: "The View From Above",
            description: "Gaining an objective perspective on life",
            icon: Cloud,
            href: "/concepts/view-from-above",
            color: "bg-sky-50 hover:bg-sky-100 dark:bg-sky-900/20 dark:hover:bg-sky-900/30",
        },
    ]

    return (
        <div className="min-h-screen text-foreground relative overflow-x-hidden">
            <StarField isImmersive={isImmersive} breathPulse={breathPulse} />

            <AnimatePresence>
                {isImmersive && (
                    <ImmersiveOverlay onExit={() => setIsImmersive(false)} />
                )}
            </AnimatePresence>

            <motion.div
                animate={{
                    opacity: isImmersive ? 0 : 1,
                    scale: isImmersive ? 0.95 : 1,
                    filter: isImmersive ? "blur(10px)" : "blur(0px)"
                }}
                transition={{ duration: 1, ease: "easeInOut" }}
                className={isImmersive ? "pointer-events-none" : ""}
            >
                <Navigation />

                {/* Immersive Mode Toggle */}
                <div className="fixed bottom-8 left-8 z-40">
                    <Button
                        variant="secondary"
                        size="lg"
                        onClick={() => setIsImmersive(true)}
                        className="rounded-full gap-2 shadow-lg bg-white/80 dark:bg-slate-800/80 backdrop-blur hover:scale-105 transition-transform group"
                    >
                        <Telescope className="w-5 h-5 group-hover:rotate-12 transition-transform" />
                        <span className="hidden md:inline">View from Above</span>
                    </Button>
                </div>

                {/* Hero Section */}
                <section className="py-24 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
                    <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-primary/10 via-background to-background" />
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                        className="max-w-4xl mx-auto text-center relative z-10"
                    >
                        <div className="flex justify-center mb-8">
                            <motion.div
                                initial={{ scale: 0 }}
                                animate={{ scale: 1 }}
                                transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
                                className="p-4 rounded-full bg-primary/10 backdrop-blur-sm"
                            >
                                <Leaf className="w-12 h-12 text-primary" />
                            </motion.div>
                        </div>

                        <h1 className="text-5xl md:text-7xl font-serif font-light text-foreground mb-8 leading-tight">
                            Welcome to my
                            <span className="block text-primary font-medium mt-2">Digital Garden</span>
                        </h1>

                        <p className="text-xl md:text-2xl text-muted-foreground mb-10 max-w-2xl mx-auto leading-relaxed">
                            A sanctuary for Stoic wisdom. Cultivating ancient reflections for the modern soul.
                        </p>

                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <Button
                                size="lg"
                                className="bg-primary text-primary-foreground hover:bg-primary/90 px-8 text-lg h-12 rounded-full"
                            >
                                <Link href="/blog">Explore Writings</Link>
                            </Button>
                            <Button
                                variant="outline"
                                size="lg"
                                className="border-primary/20 text-foreground hover:bg-primary/5 px-8 text-lg h-12 rounded-full bg-transparent"
                            >
                                <Link href="/meditations">Read Meditations</Link>
                            </Button>
                        </div>

                        <motion.div
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ delay: 0.5, duration: 1 }}
                            className="mt-16 relative w-64 h-64 mx-auto md:w-80 md:h-80 rounded-full overflow-hidden shadow-2xl border-4 border-primary/20"
                        >
                            <Image
                                src="/marcus-aurelius.png"
                                alt="Marcus Aurelius Bust"
                                className="object-cover"
                                fill
                                priority
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-background/40 to-transparent" />
                        </motion.div>
                    </motion.div>
                </section>

                {/* Daily Practice & Quote */}
                <DailyPractice />

                {/* Spiritual Exercises */}
                <section className="py-24 px-4 sm:px-6 lg:px-8 bg-slate-50/50 dark:bg-slate-900/10">
                    <div className="max-w-7xl mx-auto">
                        <div className="text-center mb-16">
                            <h2 className="text-3xl md:text-5xl font-serif font-light text-foreground mb-6">
                                Spiritual Exercises
                            </h2>
                            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                                Ancient techniques to center the soul and master the breath.
                            </p>
                        </div>

                        <div className="flex justify-center">
                            <PneumaTimer onPulse={setBreathPulse} />
                        </div>
                    </div>
                </section>

                {/* Philosophical Concepts Grid */}
                <section className="py-24 px-4 sm:px-6 lg:px-8">
                    <div className="max-w-7xl mx-auto">
                        <div className="text-center mb-16">
                            <h2 className="text-3xl md:text-5xl font-serif font-light text-foreground mb-6">
                                Core Stoic Concepts
                            </h2>
                            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                                Timeless principles to guide your journey.
                            </p>
                        </div>

                        <motion.div
                            variants={container}
                            initial="hidden"
                            whileInView="show"
                            viewport={{ once: true, margin: "-100px" }}
                            className="grid md:grid-cols-2 lg:grid-cols-4 gap-6"
                        >
                            {philosophicalConcepts.map((concept, index) => {
                                const IconComponent = concept.icon
                                return (
                                    <motion.div variants={item} key={index}>
                                        <Link href={concept.href} className="h-full block">
                                            <Card
                                                className="bg-white/80 dark:bg-slate-900/80 backdrop-blur-md border-border/50 shadow-sm hover:shadow-xl transition-all duration-500 h-full group"
                                            >
                                                <CardHeader className="pb-4">
                                                    <div className="mb-4 p-3 w-fit rounded-lg bg-primary/10 group-hover:bg-primary/30 transition-colors">
                                                        <IconComponent className="w-6 h-6 text-primary" />
                                                    </div>
                                                    <CardTitle className="text-xl font-serif text-foreground group-hover:text-primary transition-colors">
                                                        {concept.title}
                                                    </CardTitle>
                                                </CardHeader>
                                                <CardContent>
                                                    <CardDescription className="text-muted-foreground text-base leading-relaxed">
                                                        {concept.description}
                                                    </CardDescription>
                                                </CardContent>
                                            </Card>
                                        </Link>
                                    </motion.div>
                                )
                            })}
                        </motion.div>
                    </div>
                </section>

                {/* Footer */}
                <footer className="border-t border-border bg-card/50 py-16 px-4 sm:px-6 lg:px-8">
                    <div className="max-w-6xl mx-auto text-center">
                        <p className="text-primary font-serif italic text-xl mb-6">"The best revenge is not to be like your enemy."</p>
                        <div className="flex justify-center gap-8 mb-8 text-sm text-muted-foreground">
                            <Link href="/concepts" className="hover:text-primary transition-colors">Concepts</Link>
                            <Link href="/meditations" className="hover:text-primary transition-colors">Meditations</Link>
                            <Link href="/blog" className="hover:text-primary transition-colors">Blog</Link>
                        </div>
                        <p className="text-sm text-muted-foreground/60">
                            © 2024 syedkhush.com • A digital garden of Stoic wisdom
                        </p>
                    </div>
                </footer>
            </motion.div>
        </div>
    )
}
