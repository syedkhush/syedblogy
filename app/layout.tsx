import type React from "react"
import type { Metadata } from "next"
import Script from "next/script"

import { Inter, Crimson_Text } from "next/font/google"
import "./globals.css"
import { Navigation } from "@/components/navigation"
import { Sidebar } from "@/components/sidebar"
import PageTransition from "@/components/page-transition"

const inter = Inter({ subsets: ["latin"], variable: "--font-inter", display: "swap" })
const crimsonText = Crimson_Text({
  subsets: ["latin"],
  weight: ["400", "600"],
  variable: "--font-crimson",
  display: "swap",
})

export const metadata: Metadata = {
  title: "Syed Khush - Digital Garden of Stoic Philosophy",
  description:
    "A personal exploration of Stoic philosophy, Marcus Aurelius' Meditations, and practical wisdom for modern life. Discover concepts like Premeditatio Malorum, Amor Fati, and Memento Mori.",
  keywords: [
    "Stoicism",
    "Marcus Aurelius",
    "Philosophy",
    "Meditations",
    "Amor Fati",
    "Premeditatio Malorum",
    "Memento Mori",
  ],
  authors: [{ name: "Syed Khush" }],
  creator: "Syed Khush",
  openGraph: {
    title: "Syed Khush - Digital Garden of Stoic Philosophy",
    description: "A personal exploration of Stoic philosophy and practical wisdom for modern life.",
    url: "https://syedkhush.com",
    siteName: "Syed Khush Digital Garden",
    type: "website",
  },
  generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.variable} ${crimsonText.variable} font-sans antialiased text-foreground bg-background`}>
        <Script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-8RM3G2ZC9V"
        />
        <Script id="google-analytics">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());

            gtag('config', 'G-8RM3G2ZC9V');
          `}
        </Script>

        <div className="min-h-screen flex flex-col">
          <Navigation />

          <main className="flex-1 max-w-[1100px] w-full mx-auto px-4 sm:px-6 lg:px-8 py-12">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
              {/* Main Content Column */}
              <div className="lg:col-span-8">
                <PageTransition>{children}</PageTransition>
              </div>

              {/* Sidebar Column (Desktop Sticky) */}
              <div className="hidden lg:block lg:col-span-4">
                <div className="sticky top-24">
                  <Sidebar />
                </div>
              </div>

              {/* Sidebar Column (Mobile Bottom) */}
              <div className="lg:hidden space-y-12 mt-12 pt-12 border-t border-slate-100">
                <Sidebar />
              </div>
            </div>
          </main>

          <footer className="border-t border-slate-100 py-12 mt-12 bg-slate-50">
            <div className="max-w-[1100px] mx-auto px-4 text-center text-slate-400 text-sm">
              <p>© {new Date().getFullYear()} Syed Khush. The subtle art of not thinking too much.</p>
            </div>
          </footer>
        </div>
      </body>
    </html>
  )
}
