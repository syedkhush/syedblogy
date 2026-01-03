"use client"

import Link from "next/link"
import { blogPosts } from "@/lib/blog-data"
import { motion } from "framer-motion"

export default function HomePage() {
  return (
    <div className="space-y-16">
      {/* Intro Section */}
      <section className="text-center space-y-6 max-w-2xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-4xl md:text-5xl font-serif font-bold text-[#0055AA] mb-4">
            Syed Khush
          </h1>
          <p className="text-xl text-slate-500 font-serif italic">
            "A digital garden of Stoic wisdom."
          </p>
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          className="text-lg text-slate-700 leading-relaxed"
        >
          Welcome. This is a place where I explore how ancient philosophy can help us navigate modern life.
          I write about resilience, clarity, and the art of living well. No guru talks, just practical
          reflections from a fellow student of the Stoics.
        </motion.p>
      </section>

      {/* Latest Posts */}
      <section className="space-y-12">
        <div className="flex items-center gap-4">
          <h2 className="text-2xl font-bold text-[#0055AA] uppercase tracking-wide">
            Latest Writings
          </h2>
          <div className="h-px bg-slate-200 flex-1" />
        </div>

        <div className="grid gap-10">
          {blogPosts.map((post, index) => (
            <motion.article
              key={post.slug}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group"
            >
              <Link href={`/blog/${post.slug}`} className="block space-y-3">
                <h3 className="text-2xl md:text-3xl font-serif font-bold text-slate-800 group-hover:text-[#0055AA] transition-colors">
                  {post.title}
                </h3>
                <div className="flex items-center gap-3 text-sm text-slate-400">
                  <span>{post.date}</span>
                  <span>•</span>
                  <span>{post.readTime}</span>
                </div>
                <p className="text-lg text-slate-600 leading-relaxed">
                  {post.excerpt}
                </p>
                <div className="pt-2">
                  <span className="text-[#0055AA] font-bold text-sm group-hover:underline">
                    Read Full Post →
                  </span>
                </div>
              </Link>
            </motion.article>
          ))}
        </div>

        <div className="text-center pt-8">
          <Link href="/archive">
            <button className="px-8 py-3 bg-slate-100 hover:bg-slate-200 text-slate-700 font-bold rounded-full transition-colors">
              View All Posts in Archive
            </button>
          </Link>
        </div>
      </section>
    </div>
  )
}
