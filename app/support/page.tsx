"use client"

import { Button } from "@/components/ui/button"
import { Heart } from "lucide-react"

export default function SupportPage() {
    return (
        <div className="max-w-2xl mx-auto space-y-12 text-center py-12">
            <h1 className="text-4xl font-serif font-bold text-[#0055AA] mb-6">
                Support the Page
            </h1>

            <div className="flex justify-center">
                <div className="p-6 bg-red-50 rounded-full">
                    <Heart className="w-16 h-16 text-[#FF4D4F]" fill="#FF4D4F" />
                </div>
            </div>

            <p className="text-xl text-slate-700 leading-relaxed">
                If you enjoy these writings and want to help me keep this garden growing,
                consider becoming a supporter. Your support helps cover hosting costs
                and allows me to spend more time writing.
            </p>

            <div className="space-y-4">
                <Button size="lg" className="text-lg px-12 py-6 bg-[#0055AA] hover:bg-[#004488] rounded-full">
                    Become a Patron
                </Button>
                <p className="text-slate-500 text-sm">
                    or simply share a post with a friend. That helps too.
                </p>
            </div>

            <div className="pt-12 border-t border-slate-100 mt-12">
                <h3 className="text-lg font-serif font-bold text-slate-800 mb-4">
                    Other ways to help
                </h3>
                <ul className="text-slate-600 space-y-2">
                    <li>• Subscribe to the newsletter</li>
                    <li>• Follow on social media</li>
                    <li>• Apply the philosophy in your own life</li>
                </ul>
            </div>
        </div>
    )
}
