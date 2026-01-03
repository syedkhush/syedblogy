"use client"

import type React from "react"
import Script from "next/script"
import { usePathname } from "next/navigation"

import { Inter, Crimson_Text, Montserrat, Roboto } from "next/font/google"
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
const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["300", "600", "900"],
  variable: "--font-montserrat",
  display: "swap",
})
const roboto = Roboto({
  subsets: ["latin"],
  weight: ["300", "400"],
  variable: "--font-roboto",
  display: "swap",
})

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const pathname = usePathname()
  const isHomePage = pathname === "/"

  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.variable} ${crimsonText.variable} ${montserrat.variable} ${roboto.variable} font-sans antialiased text-foreground bg-background`}>
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
          {!isHomePage && <Navigation />}

          <main className={isHomePage ? "" : "flex-1 max-w-[1100px] w-full mx-auto px-4 sm:px-6 lg:px-8 py-12"}>
            {isHomePage ? (
              <PageTransition>{children}</PageTransition>
            ) : (
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
            )}
          </main>

          {!isHomePage && (
            <footer className="border-t border-slate-100 py-12 mt-12 bg-slate-50">
              <div className="max-w-[1100px] mx-auto px-4 text-center text-slate-400 text-sm">
                <p>© {new Date().getFullYear()} Syed Khush. The subtle art of not thinking too much.</p>
              </div>
            </footer>
          )}
        </div>
      </body>
    </html>
  )
}
