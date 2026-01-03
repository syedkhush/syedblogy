"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { motion } from "framer-motion"
import { ArrowLeft, Book, Calendar, Quote as QuoteIcon } from "lucide-react"
import { Navigation } from "@/components/navigation"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { stoicQuotes } from "@/lib/quotes"

type ReflectionEntry = {
    quoteId: number
    reflection: string
    date: string
}

export default function JournalPage() {
    const [entries, setEntries] = useState<ReflectionEntry[]>([])

    useEffect(() => {
        const allEntries: ReflectionEntry[] = []
        // We look for keys starting with 'daily-reflection-'
        for (let i = 0; i < localStorage.length; i++) {
            const key = localStorage.key(i)
            if (key && key.startsWith("daily-reflection-")) {
                const quoteId = parseInt(key.replace("daily-reflection-", ""))
                const reflection = localStorage.getItem(key)
                if (reflection) {
                    allEntries.push({
                        quoteId,
                        reflection,
                        // Not stored, so we'll just mock it or skip for now
                        // Original code didn't store date, but we can assume today if it's the current one
                        date: "Past Reflection"
                    })
                }
            }
        }
        setEntries(allEntries.sort((a, b) => b.quoteId - a.quoteId))
    }, [])

    return (
        <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-stone-50 dark:from-slate-950 dark:via-slate-900 dark:to-slate-950">
            <Navigation />

            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                <Link href="/home" className="inline-flex items-center text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-slate-200 mb-8">
                    <ArrowLeft className="w-4 h-4 mr-2" />
                    Back to Digital Garden
                </Link>

                <div className="mb-12">
                    <h1 className="text-4xl md:text-5xl font-serif font-light text-slate-800 dark:text-slate-100 mb-4 flex items-center gap-4">
                        <Book className="w-10 h-10 text-primary" />
                        Your Stoic Journal
                    </h1>
                    <p className="text-lg text-slate-600 dark:text-slate-400 max-w-2xl">
                        A history of your reflections on ancient wisdom. Look back to see how your thoughts have evolved.
                    </p>
                </div>

                {entries.length === 0 ? (
                    <div className="text-center py-20 bg-white/50 dark:bg-slate-900/50 rounded-3xl border border-dashed border-slate-300 dark:border-slate-700">
                        <QuoteIcon className="w-12 h-12 text-slate-300 dark:text-slate-700 mx-auto mb-4" />
                        <h2 className="text-xl font-medium text-slate-500 dark:text-slate-400">No reflections yet</h2>
                        <p className="text-slate-400 dark:text-slate-500 mt-2">
                            Start your journey on the <Link href="/home" className="text-primary hover:underline">Home page</Link>.
                        </p>
                    </div>
                ) : (
                    <div className="space-y-8">
                        {entries.map((entry, index) => {
                            const quote = stoicQuotes[entry.quoteId]
                            return (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: index * 0.1 }}
                                >
                                    <Card className="bg-white dark:bg-slate-950/50 backdrop-blur-sm border-slate-200 dark:border-slate-800 overflow-hidden">
                                        <CardHeader className="bg-slate-50/50 dark:bg-slate-900/50 border-b border-slate-100 dark:border-slate-800">
                                            <div className="flex justify-between items-start gap-4">
                                                <div className="italic text-slate-600 dark:text-slate-400 font-serif text-lg">
                                                    "{quote?.text || "Unknown quote"}"
                                                </div>
                                            </div>
                                            <div className="mt-2 text-sm text-primary font-medium">
                                                — {quote?.author || "Stoic Philosopher"}
                                            </div>
                                        </CardHeader>
                                        <CardContent className="pt-6">
                                            <div className="flex gap-4">
                                                <div className="flex-shrink-0 mt-1">
                                                    <Calendar className="w-4 h-4 text-slate-400" />
                                                </div>
                                                <div className="flex-1">
                                                    <div className="text-xs text-slate-400 uppercase tracking-widest mb-1 font-semibold">
                                                        Reflection
                                                    </div>
                                                    <p className="text-slate-700 dark:text-slate-300 leading-relaxed italic">
                                                        {entry.reflection}
                                                    </p>
                                                </div>
                                            </div>
                                        </CardContent>
                                    </Card>
                                </motion.div>
                            )
                        })}
                    </div>
                )}
            </div>
        </div>
    )
}
