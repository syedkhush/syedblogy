"use client"

import Link from "next/link"
import StarField from "@/components/star-field"
import { motion } from "framer-motion"

export default function EntryPage() {
  return (
    <main className="relative w-full h-screen flex items-center justify-center overflow-hidden bg-background">
      <StarField />

      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 2, ease: "easeOut" }}
        className="z-10"
      >
        <Link
          href="/home"
          className="group relative inline-flex items-center justify-center px-12 py-6 text-xl md:text-2xl tracking-[0.3em] text-foreground/70 hover:text-foreground transition-all duration-700 font-serif"
        >
          <span className="mx-4">ENTER</span>

          {/* Subtle decorative lines */}
          <span className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-foreground/10 to-transparent scale-x-0 group-hover:scale-x-100 transition-transform duration-700" />
          <span className="absolute bottom-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-foreground/10 to-transparent scale-x-0 group-hover:scale-x-100 transition-transform duration-700" />
        </Link>
      </motion.div>
    </main>
  )
}
