"use client"

import { blogPosts } from "@/lib/blog-data"
import Link from "next/link"
import { motion } from "framer-motion"

export default function ArchivePage() {
    return (
        <div className="space-y-12">
            <h1 className="text-4xl font-serif font-bold text-[#0055AA] mb-8 border-b border-slate-200 pb-4">
                Archive
            </h1>

            <div className="space-y-6">
                {blogPosts.map((post, index) => (
                    <motion.div
                        key={post.slug}
                        initial={{ opacity: 0, x: -10 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.05 }}
                    >
                        <Link href={`/blog/${post.slug}`} className="flex flex-col sm:flex-row sm:items-baseline gap-2 sm:gap-6 group">
                            <span className="text-slate-400 font-mono text-sm min-w-[120px]">
                                {post.date}
                            </span>
                            <h2 className="text-lg font-serif font-semibold text-slate-700 group-hover:text-[#0055AA] transition-colors leading-tight">
                                {post.title}
                            </h2>
                        </Link>
                    </motion.div>
                ))}
            </div>
        </div>
    )
}
