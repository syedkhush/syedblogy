"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { Globe } from "lucide-react"

export function Navigation() {
  const pathname = usePathname()

  const isActive = (path: string) => {
    if (path === "/" && pathname === "/") return true
    if (path !== "/" && pathname.startsWith(path)) return true
    return false
  }

  return (
    <nav className="border-b border-slate-200/50 dark:border-slate-700/50 bg-white/80 dark:bg-slate-900/80 backdrop-blur-sm sticky top-0 z-40">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link href="/home" className="flex items-center gap-2 text-xl font-serif font-semibold text-slate-800 dark:text-slate-200">
            <Globe className="w-6 h-6" />
            syedkhush.com
          </Link>
          <div className="flex space-x-6">
            <Link
              href="/blog"
              className={`transition-colors ${isActive("/blog")
                ? "text-slate-900 dark:text-slate-100 font-medium"
                : "text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-slate-100"
                }`}
            >
              Blog
            </Link>
            <Link
              href="/concepts"
              className={`transition-colors ${isActive("/concepts")
                ? "text-slate-900 dark:text-slate-100 font-medium"
                : "text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-slate-100"
                }`}
            >
              Concepts
            </Link>
            <Link
              href="/meditations"
              className={`transition-colors ${isActive("/meditations")
                ? "text-slate-900 dark:text-slate-100 font-medium"
                : "text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-slate-100"
                }`}
            >
              Meditations
            </Link>
            <Link
              href="/about"
              className={`transition-colors ${isActive("/about")
                ? "text-slate-900 dark:text-slate-100 font-medium"
                : "text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-slate-100"
                }`}
            >
              About
            </Link>
          </div>
        </div>
      </div>
    </nav>
  )
}
