import type React from "react"
import type { Metadata } from "next"
import { Inter, Crimson_Text } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import { ThemeToggle } from "@/components/theme-toggle"

import ClickSoundProvider from "@/components/click-sound-provider"
import PageTransition from "@/components/page-transition"

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" })
const crimsonText = Crimson_Text({
  subsets: ["latin"],
  weight: ["400", "600"],
  variable: "--font-crimson",
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
      <body className={`${inter.variable} ${crimsonText.variable} font-sans antialiased text-foreground check-bg`}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange={false}>
          <ClickSoundProvider>
            <ThemeToggle />
            <PageTransition>{children}</PageTransition>
          </ClickSoundProvider>
        </ThemeProvider>
      </body>
    </html>
  )
}
