"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { motion } from "framer-motion"
import { Book, Calendar, Quote as QuoteIcon } from "lucide-react"
import { Card, CardContent, CardHeader } from "@/components/ui/card"
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
        for (let i = 0; i < localStorage.length; i++) {
            const key = localStorage.key(i)
            if (key && key.startsWith("daily-reflection-")) {
                const quoteId = parseInt(key.replace("daily-reflection-", ""))
                const reflection = localStorage.getItem(key)
                if (reflection) {
                    allEntries.push({
                        quoteId,
                        reflection,
                        date: "Past Reflection"
                    })
                }
            }
        }
        setEntries(allEntries.sort((a, b) => b.quoteId - a.quoteId))
    }, [])

    return (
        <div className="space-y-12">
            <header className="space-y-6">
                <div className="flex items-center gap-4">
                    <div className="p-3 rounded-xl bg-slate-50">
                        <Book className="w-8 h-8 text-[#0055AA]" />
                    </div>
                    <h1 className="text-4xl font-serif font-bold text-[#0055AA]">
                        Your Stoic Journal
                    </h1>
                </div>
                <p className="text-xl text-slate-600 font-serif leading-relaxed max-w-2xl">
                    A history of your reflections on ancient wisdom. Look back to see how your thoughts have evolved.
                </p>
            </header>

            {entries.length === 0 ? (
                <div className="text-center py-20 bg-slate-50 rounded-2xl border-2 border-dashed border-slate-200">
                    <QuoteIcon className="w-12 h-12 text-slate-300 mx-auto mb-4" />
                    <h2 className="text-xl font-serif font-bold text-slate-500">No reflections yet</h2>
                    <p className="text-slate-400 mt-2">
                        Start your journey on the <Link href="/" className="text-[#0055AA] hover:underline">Home page</Link>.
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
                                <Card className="bg-white border-slate-100 overflow-hidden shadow-sm hover:shadow-md transition-shadow">
                                    <CardHeader className="bg-slate-50/50 border-b border-slate-50 p-6">
                                        <div className="italic text-slate-700 font-serif text-lg leading-relaxed">
                                            "{quote?.text || "Unknown quote"}"
                                        </div>
                                        <div className="mt-4 text-sm text-[#0055AA] font-bold uppercase tracking-widest">
                                            — {quote?.author || "Stoic Philosopher"}
                                        </div>
                                    </CardHeader>
                                    <CardContent className="p-6">
                                        <div className="flex gap-4">
                                            <div className="flex-1 space-y-2">
                                                <div className="flex items-center gap-2 text-xs text-slate-400 font-bold uppercase tracking-widest">
                                                    <Calendar className="w-3 h-3" />
                                                    <span>Reflection</span>
                                                </div>
                                                <p className="text-slate-700 font-serif text-lg leading-relaxed">
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
    )
}
