import { Navigation } from "@/components/navigation"
import { Mail } from "lucide-react"

export default function ContactPage() {
    return (
        <div className="min-h-screen bg-slate-50 dark:bg-slate-950 transition-colors duration-500">
            <Navigation />
            <main className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
                <header className="mb-16">
                    <h1 className="text-4xl md:text-5xl font-serif font-bold text-slate-900 dark:text-slate-100 mb-6">
                        Contact
                    </h1>
                    <p className="text-xl text-slate-600 dark:text-slate-400 font-serif leading-relaxed">
                        Have a question about Stoicism or just want to say hello? I'd love to hear from you.
                    </p>
                </header>

                <div className="flex items-center gap-4 group">
                    <div className="p-4 rounded-full bg-slate-200 dark:bg-slate-800 text-slate-700 dark:text-slate-300 group-hover:bg-amber-100 dark:group-hover:bg-amber-900/30 group-hover:text-amber-700 dark:group-hover:text-amber-500 transition-colors duration-300">
                        <Mail className="w-6 h-6" />
                    </div>
                    <a
                        href="mailto:hello@syedkhush.com"
                        className="text-2xl font-serif text-slate-800 dark:text-slate-200 hover:text-amber-700 dark:hover:text-amber-500 transition-colors underline decoration-slate-300 dark:decoration-slate-700 underline-offset-4"
                    >
                        hello@syedkhush.com
                    </a>
                </div>
            </main>
        </div>
    )
}
