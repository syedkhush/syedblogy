import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Github, Twitter, Youtube, Heart, Instagram } from "lucide-react"
import Link from "next/link"

export function Sidebar() {
    return (
        <aside className="w-full space-y-8">
            {/* Doodle for warmth */}
            <div className="flex justify-center pt-4">
                <img
                    src="/doodle.png"
                    alt="Reflective doodle"
                    className="w-32 h-auto opacity-80 grayscale"
                />
            </div>

            {/* Email Subscription Box */}
            <div className="p-6 bg-[#0055AA]/5 border border-[#0055AA]/20 rounded-lg">
                <h3 className="text-lg font-bold text-[#0055AA] uppercase tracking-wide mb-4">
                    Subscribe
                </h3>
                <p className="text-slate-600 mb-4 text-sm leading-relaxed">
                    Join the newsletter to get new posts straight to your inbox. No spam, ever.
                </p>
                <div className="space-y-3">
                    <Input
                        type="email"
                        placeholder="email address"
                        className="bg-white border-slate-300 focus-visible:ring-[#0055AA]"
                    />
                    <Button className="w-full bg-[#FA8C16] hover:bg-[#D46B08] text-white font-bold tracking-wide">
                        SEND ME NEW POSTS
                    </Button>
                </div>
                <p className="text-xs text-slate-400 mt-3 text-center">
                    15,000+ readers engaged
                </p>
            </div>

            {/* Social Links */}
            <div className="sidebar-box">
                <h3 className="sidebar-title">Connect</h3>
                <div className="flex flex-col space-y-3">
                    <a
                        href="https://instagram.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-3 text-slate-600 hover:text-[#E1306C] transition-colors group"
                    >
                        <div className="p-2 bg-slate-100 rounded-full group-hover:bg-[#E1306C]/10 transition-colors">
                            <Instagram className="w-5 h-5" />
                        </div>
                        <span className="font-medium">Instagram</span>
                    </a>
                    <a
                        href="https://twitter.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-3 text-slate-600 hover:text-[#1DA1F2] transition-colors group"
                    >
                        <div className="p-2 bg-slate-100 rounded-full group-hover:bg-[#1DA1F2]/10 transition-colors">
                            <Twitter className="w-5 h-5" />
                        </div>
                        <span className="font-medium">Twitter</span>
                    </a>
                    <a
                        href="https://youtube.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-3 text-slate-600 hover:text-[#FF0000] transition-colors group"
                    >
                        <div className="p-2 bg-slate-100 rounded-full group-hover:bg-[#FF0000]/10 transition-colors">
                            <Youtube className="w-5 h-5" />
                        </div>
                        <span className="font-medium">YouTube</span>
                    </a>
                </div>
            </div>



            {/* Recommended Posts */}
            <div className="sidebar-box">
                <h3 className="sidebar-title">Popular</h3>
                <div className="space-y-4">
                    <Link href="/blog/when-night-was-loud" className="block group">
                        <h4 className="font-bold text-slate-700 group-hover:text-[#0055AA] transition-colors leading-tight mb-1">
                            When the Night Was Loud, I Practiced Silence
                        </h4>
                        <span className="text-xs text-slate-400">Dec 31, 2025</span>
                    </Link>
                    <div className="border-t border-slate-100" />
                    <Link href="/concepts/dichotomy-of-control" className="block group">
                        <h4 className="font-bold text-slate-700 group-hover:text-[#0055AA] transition-colors leading-tight mb-1">
                            The Dichotomy of Control
                        </h4>
                        <span className="text-xs text-slate-400">Concept</span>
                    </Link>
                    <div className="border-t border-slate-100" />
                    <Link href="/concepts/amor-fati" className="block group">
                        <h4 className="font-bold text-slate-700 group-hover:text-[#0055AA] transition-colors leading-tight mb-1">
                            Amor Fati: Love Your Fate
                        </h4>
                        <span className="text-xs text-slate-400">Concept</span>
                    </Link>
                </div>
            </div>
        </aside>
    )
}
