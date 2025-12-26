"use client"

import { useState, useEffect } from "react"
import { stoicQuotes } from "@/lib/quotes"
import { motion, AnimatePresence } from "framer-motion"
import { Sparkles, PenLine, Save, Moon } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent } from "@/components/ui/card"
import { cn } from "@/lib/utils"

export default function DailyPractice() {
    const [quoteIndex, setQuoteIndex] = useState<number>(0)
    const [reflection, setReflection] = useState("")
    const [isSaved, setIsSaved] = useState(false)
    const [isVisible, setIsVisible] = useState(false)

    // Calculate day of year to show same quote to everyone on same day
    useEffect(() => {
        const now = new Date()
        const start = new Date(now.getFullYear(), 0, 0)
        const diff = now.getTime() - start.getTime()
        const oneDay = 1000 * 60 * 60 * 24
        const dayOfYear = Math.floor(diff / oneDay)

        setQuoteIndex(dayOfYear % stoicQuotes.length)
        setIsVisible(true)

        // Load saved reflection for this specific quote if it exists
        const saved = localStorage.getItem(`daily-reflection-${dayOfYear % stoicQuotes.length}`)
        if (saved) {
            setReflection(saved)
        }
    }, [])

    const handleSave = () => {
        localStorage.setItem(`daily-reflection-${quoteIndex}`, reflection)
        setIsSaved(true)
        setTimeout(() => setIsSaved(false), 2000)
    }

    const quote = stoicQuotes[quoteIndex]

    if (!quote) return null

    return (
        <section className="py-16 md:py-24 relative overflow-hidden">
            {/* Background decorations */}
            <div className="absolute top-0 left-1/4 w-64 h-64 bg-primary/5 rounded-full blur-[100px] -z-10" />
            <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-blue-500/5 rounded-full blur-[100px] -z-10" />

            <div className="container mx-auto px-4 max-w-4xl">
                <div className="flex items-center gap-2 mb-8 justify-center">
                    <Sparkles className="w-5 h-5 text-amber-500" />
                    <h2 className="text-sm font-semibold tracking-widest uppercase text-muted-foreground">Daily Practice</h2>
                </div>

                <AnimatePresence mode="wait">
                    {isVisible && (
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, ease: "easeOut" }}
                        >
                            <Card className="border-none shadow-2xl bg-gradient-to-br from-background/80 to-muted/30 backdrop-blur-md overflow-hidden relative group">
                                {/* Subtle sheen effect */}
                                <div className="absolute inset-0 bg-gradient-to-tr from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />

                                <CardContent className="p-8 md:p-12 text-center flex flex-col items-center">
                                    <Moon className="w-8 h-8 text-primary/20 mb-6" />

                                    <motion.div
                                        initial={{ opacity: 0, scale: 0.95 }}
                                        animate={{ opacity: 1, scale: 1 }}
                                        transition={{ delay: 0.3, duration: 0.8 }}
                                    >
                                        <blockquote className="font-serif text-2xl md:text-4xl leading-tight mb-6 text-foreground italic">
                                            "{quote.text}"
                                        </blockquote>
                                        <cite className="not-italic text-muted-foreground font-medium block mb-12">
                                            — <span className="text-primary">{quote.author}</span>{quote.source && `, ${quote.source}`}
                                        </cite>
                                    </motion.div>

                                    <div className="w-full max-w-lg mx-auto relative mt-8 pt-8 border-t border-border/50">
                                        <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-background px-4 text-xs text-muted-foreground flex items-center gap-2">
                                            <PenLine className="w-3 h-3" /> Reflection
                                        </div>

                                        <Textarea
                                            placeholder="What does this mean for your life today?"
                                            className="bg-muted/30 border-none resize-none focus-visible:ring-1 focus-visible:ring-primary/50 text-center min-h-[100px] italic text-muted-foreground focus:text-foreground transition-colors"
                                            value={reflection}
                                            onChange={(e) => setReflection(e.target.value)}
                                        />

                                        <div className="mt-4 flex justify-center">
                                            <Button
                                                size="sm"
                                                variant="ghost"
                                                onClick={handleSave}
                                                className={cn("transition-all duration-500", isSaved ? "text-green-500" : "text-muted-foreground hover:text-foreground")}
                                            >
                                                <Save className="w-4 h-4 mr-2" />
                                                {isSaved ? "Saved to Memory" : "Save Reflection"}
                                            </Button>
                                        </div>
                                    </div>
                                </CardContent>
                            </Card>
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>
        </section>
    )
}
