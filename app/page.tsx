import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { BookOpen, Leaf, Mountain, Sun, Wind } from "lucide-react"
import { Navigation } from "@/components/navigation"
import { BuyMeCoffee } from "@/components/buy-me-coffee"

export default function HomePage() {
  const philosophicalConcepts = [
    {
      title: "Premeditatio Malorum",
      description: "The practice of imagining loss to cultivate gratitude and resilience",
      icon: Mountain,
      href: "/concepts/premeditatio-malorum",
      color: "bg-slate-100 hover:bg-slate-200 dark:bg-slate-800 dark:hover:bg-slate-700",
    },
    {
      title: "Amor Fati",
      description: "Love of fate - embracing everything that happens as necessary",
      icon: Sun,
      href: "/concepts/amor-fati",
      color: "bg-amber-50 hover:bg-amber-100 dark:bg-amber-900/20 dark:hover:bg-amber-900/30",
    },
    {
      title: "Memento Mori",
      description: "Remember death - a reminder of life's impermanence",
      icon: Wind,
      href: "/concepts/memento-mori",
      color: "bg-gray-50 hover:bg-gray-100 dark:bg-gray-800 dark:hover:bg-gray-700",
    },
    {
      title: "Meditations",
      description: "Personal reflections and philosophical insights from Marcus Aurelius",
      icon: BookOpen,
      href: "/meditations",
      color: "bg-emerald-50 hover:bg-emerald-100 dark:bg-emerald-900/20 dark:hover:bg-emerald-900/30",
    },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-stone-50 dark:from-slate-900 dark:via-slate-800 dark:to-slate-900">
      <Navigation />

      {/* Hero Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <div className="flex justify-center mb-8">
            <div className="p-4 rounded-full bg-emerald-100/50 dark:bg-emerald-900/30 backdrop-blur-sm">
              <Leaf className="w-12 h-12 text-emerald-600 dark:text-emerald-400" />
            </div>
          </div>

          <h1 className="text-5xl md:text-6xl font-serif font-light text-slate-800 dark:text-slate-200 mb-6 leading-tight">
            Welcome to my
            <span className="block text-emerald-700 dark:text-emerald-400 font-medium">Digital Garden</span>
          </h1>

          <p className="text-xl text-slate-600 dark:text-slate-400 mb-8 max-w-2xl mx-auto leading-relaxed">
            A space for cultivating wisdom through Stoic philosophy, where ancient teachings meet modern reflection.
            Explore the timeless insights of Marcus Aurelius and discover practical wisdom for daily life.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              className="bg-slate-800 hover:bg-slate-700 dark:bg-slate-200 dark:hover:bg-slate-300 dark:text-slate-900 text-white px-8"
            >
              <Link href="/blog">Explore Writings</Link>
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="border-slate-300 dark:border-slate-600 text-slate-700 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-800 px-8 bg-transparent"
            >
              <Link href="/meditations">Read Meditations</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Featured Quote */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white/50 dark:bg-slate-800/50 backdrop-blur-sm">
        <div className="max-w-4xl mx-auto">
          <blockquote className="text-center">
            <p className="text-2xl md:text-3xl font-serif text-slate-700 dark:text-slate-300 italic leading-relaxed mb-6">
              "You have power over your mind—not outside events. Realize this, and you will find strength."
            </p>
            <footer className="text-slate-500 dark:text-slate-400">
              <cite className="font-medium">Marcus Aurelius</cite>
              <span className="mx-2">•</span>
              <span>Meditations</span>
            </footer>
          </blockquote>
        </div>
      </section>

      {/* Philosophical Concepts Grid */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-serif font-light text-slate-800 dark:text-slate-200 mb-4">
              Core Stoic Concepts
            </h2>
            <p className="text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
              Explore fundamental Stoic principles that have guided philosophers and practitioners for over two
              millennia.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {philosophicalConcepts.map((concept, index) => {
              const IconComponent = concept.icon
              return (
                <Link key={index} href={concept.href}>
                  <Card
                    className={`${concept.color} border-0 shadow-sm hover:shadow-md transition-all duration-300 h-full group`}
                  >
                    <CardHeader className="pb-4">
                      <div className="flex items-center gap-4">
                        <div className="p-3 rounded-lg bg-white/80 dark:bg-slate-900/80 group-hover:bg-white dark:group-hover:bg-slate-900 transition-colors">
                          <IconComponent className="w-6 h-6 text-slate-700 dark:text-slate-300" />
                        </div>
                        <div>
                          <CardTitle className="text-xl font-serif text-slate-800 dark:text-slate-200 group-hover:text-slate-900 dark:group-hover:text-slate-100">
                            {concept.title}
                          </CardTitle>
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <CardDescription className="text-slate-600 dark:text-slate-400 text-base leading-relaxed">
                        {concept.description}
                      </CardDescription>
                    </CardContent>
                  </Card>
                </Link>
              )
            })}
          </div>
        </div>
      </section>

      {/* Recent Writings Preview */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-50/50 dark:bg-slate-800/50">
        <div className="max-w-6xl mx-auto">
          <div className="flex justify-between items-center mb-12">
            <h2 className="text-3xl md:text-4xl font-serif font-light text-slate-800 dark:text-slate-200">
              Recent Reflections
            </h2>
            <Link href="/blog">
              <Button
                variant="outline"
                className="border-slate-300 dark:border-slate-600 text-slate-700 dark:text-slate-300 hover:bg-white dark:hover:bg-slate-800 bg-transparent"
              >
                View All Posts
              </Button>
            </Link>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "On the Discipline of Desire",
                excerpt: "How Marcus Aurelius taught us to want what we have, rather than have what we want...",
                date: "December 15, 2024",
                readTime: "5 min read",
                tags: ["Philosophy", "Desire"],
              },
              {
                title: "Morning Reflections: A Daily Practice",
                excerpt: "Starting each day with Stoic meditation and the practice of negative visualization...",
                date: "December 10, 2024",
                readTime: "3 min read",
                tags: ["Practice", "Morning"],
              },
              {
                title: "The View from Above",
                excerpt: "Marcus Aurelius' cosmic perspective and how it transforms our daily struggles...",
                date: "December 5, 2024",
                readTime: "7 min read",
                tags: ["Perspective", "Cosmos"],
              },
            ].map((post, index) => (
              <Card
                key={index}
                className="bg-white dark:bg-slate-800 border-0 shadow-sm hover:shadow-md transition-all duration-300 group"
              >
                <CardHeader>
                  <div className="flex flex-wrap gap-2 mb-3">
                    {post.tags.map((tag, tagIndex) => (
                      <Badge
                        key={tagIndex}
                        variant="secondary"
                        className="text-xs bg-slate-100 dark:bg-slate-700 text-slate-600 dark:text-slate-300"
                      >
                        {tag}
                      </Badge>
                    ))}
                  </div>
                  <CardTitle className="text-lg font-serif text-slate-800 dark:text-slate-200 group-hover:text-slate-900 dark:group-hover:text-slate-100 line-clamp-2">
                    {post.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-slate-600 dark:text-slate-400 mb-4 line-clamp-3">
                    {post.excerpt}
                  </CardDescription>
                  <div className="flex justify-between items-center text-sm text-slate-500 dark:text-slate-400">
                    <span>{post.date}</span>
                    <span>{post.readTime}</span>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Buy Me Coffee Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-amber-50 to-orange-50 dark:from-amber-900/10 dark:to-orange-900/10">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-2xl md:text-3xl font-serif font-light text-slate-800 dark:text-slate-200 mb-4">
            Support This Digital Garden
          </h2>
          <p className="text-lg text-slate-600 dark:text-slate-400 mb-8 max-w-2xl mx-auto">
            If these philosophical reflections have brought value to your life, consider supporting the continued
            cultivation of this digital garden. Every contribution helps keep this space growing.
          </p>
          <BuyMeCoffee />
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-slate-200 dark:border-slate-700 bg-white/80 dark:bg-slate-900/80 backdrop-blur-sm py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto text-center">
          <p className="text-slate-600 dark:text-slate-400 mb-4">"The best revenge is not to be like your enemy."</p>
          <p className="text-sm text-slate-500 dark:text-slate-400">
            © 2024 syedkhush.com • A digital garden of Stoic wisdom
          </p>
        </div>
      </footer>
    </div>
  )
}
