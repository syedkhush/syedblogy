import { Mail } from "lucide-react"

export default function ContactPage() {
    return (
        <div className="space-y-12">
            <header className="space-y-6">
                <div className="flex items-center gap-4">
                    <div className="p-3 rounded-xl bg-slate-50">
                        <Mail className="w-8 h-8 text-[#0055AA]" />
                    </div>
                    <h1 className="text-4xl font-serif font-bold text-[#0055AA]">
                        Contact
                    </h1>
                </div>
                <p className="text-xl text-slate-600 font-serif leading-relaxed max-w-2xl">
                    Have a question about Stoicism or just want to say hello? I'd love to hear from you.
                </p>
            </header>

            <div className="flex items-center gap-6 group py-8 border-y border-slate-50">
                <div className="p-6 rounded-full bg-slate-50 text-[#0055AA] group-hover:bg-[#0055AA] group-hover:text-white transition-all duration-300">
                    <Mail className="w-8 h-8" />
                </div>
                <div>
                    <p className="text-sm font-bold text-slate-400 uppercase tracking-widest mb-1">Send an email</p>
                    <a
                        href="mailto:hello@syedkhush.com"
                        className="text-2xl md:text-3xl font-serif text-slate-800 hover:text-[#0055AA] transition-colors underline decoration-slate-200 underline-offset-8"
                    >
                        hello@syedkhush.com
                    </a>
                </div>
            </div>

            <p className="text-slate-500 font-serif italic text-lg">
                I try to respond to every thoughtful message, though it may take a few days.
            </p>
        </div>
    )
}
