import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { BookOpen, Crown, Scroll, Star } from "lucide-react"

export default function MeditationsPage() {
  const meditations = [
    {
      book: "Book I",
      title: "Gratitude and Influences",
      excerpt: "From my grandfather Verus I learned good morals and the government of my temper...",
      theme: "Gratitude",
      reflection:
        "Marcus begins by acknowledging those who shaped his character, teaching us the importance of recognizing our influences.",
      quote: "From my grandfather Verus I learned good morals and the government of my temper.",
    },
    {
      book: "Book II",
      title: "Morning Reflections",
      excerpt:
        "When you wake up in the morning, tell yourself: The people I deal with today will be meddling, ungrateful, arrogant, dishonest, jealous, and surly...",
      theme: "Preparation",
      reflection:
        "The famous morning meditation that prepares us for the day's challenges with realistic expectations and compassion.",
      quote:
        "When you wake up in the morning, tell yourself: The people I deal with today will be meddling, ungrateful, arrogant, dishonest, jealous, and surly.",
    },
    {
      book: "Book III",
      title: "The Inner Citadel",
      excerpt:
        "In the morning when thou risest unwillingly, let this thought be present - I am rising to the work of a human being...",
      theme: "Purpose",
      reflection: "Finding meaning in our daily work and responsibilities, no matter how mundane they may seem.",
      quote:
        "In the morning when thou risest unwillingly, let this thought be present - I am rising to the work of a human being.",
    },
    {
      book: "Book IV",
      title: "The View from Above",
      excerpt: "Constantly regard the universe as one living being, having one substance and one soul...",
      theme: "Perspective",
      reflection: "The cosmic perspective that helps us see our problems in the context of the vast universe.",
      quote: "Constantly regard the universe as one living being, having one substance and one soul.",
    },
    {
      book: "Book V",
      title: "On Obstacles",
      excerpt: "The impediment to action advances action. What stands in the way becomes the way.",
      theme: "Resilience",
      reflection: "Perhaps the most famous Stoic principle - how obstacles become opportunities for growth and wisdom.",
      quote: "The impediment to action advances action. What stands in the way becomes the way.",
    },
    {
      book: "Book VI",
      title: "Inner Peace",
      excerpt: "You have power over your mind - not outside events. Realize this, and you will find strength.",
      theme: "Control",
      reflection: "The fundamental Stoic teaching about the dichotomy of control and where true power lies.",
      quote: "You have power over your mind - not outside events. Realize this, and you will find strength.",
    },
  ]

  return (
    <div className="space-y-12">
      <header className="space-y-6">
        <div className="flex items-center gap-4">
          <div className="p-3 rounded-xl bg-emerald-50">
            <Crown className="w-8 h-8 text-emerald-600" />
          </div>
          <h1 className="text-4xl font-serif font-bold text-[#0055AA]">
            Meditations
          </h1>
        </div>
        <p className="text-xl text-slate-600 font-serif leading-relaxed max-w-2xl">
          The private journal of Marcus Aurelius. Written as reminders to himself on how to live with virtue, clarity, and purpose.
        </p>
      </header>

      <div className="grid gap-8">
        {meditations.map((meditation, index) => (
          <Card
            key={index}
            className="bg-white border-slate-100 shadow-sm hover:shadow-md transition-all duration-300"
          >
            <CardHeader className="pb-4">
              <div className="flex items-center justify-between mb-3">
                <Badge
                  variant="secondary"
                  className="bg-emerald-50 text-emerald-700 font-bold px-3 py-1"
                >
                  {meditation.book}
                </Badge>
                <Badge
                  variant="outline"
                  className="border-slate-200 text-slate-400 font-medium tracking-widest uppercase text-[10px]"
                >
                  {meditation.theme}
                </Badge>
              </div>
              <CardTitle className="text-2xl font-serif text-slate-800 mb-2">
                {meditation.title}
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <blockquote className="border-l-4 border-emerald-500 pl-6 italic text-slate-700 text-lg font-serif leading-relaxed">
                "{meditation.quote}"
              </blockquote>
              <p className="text-slate-600 leading-relaxed font-serif">
                {meditation.reflection}
              </p>
            </CardContent>
          </Card>
        ))}
      </div>

      <section className="bg-slate-50 border border-slate-100 rounded-2xl p-10 mt-16">
        <h2 className="text-3xl font-serif font-bold text-[#0055AA] mb-8 text-center">
          Key Themes
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            {
              icon: Star,
              title: "The Dichotomy of Control",
              description: "Distinguishing between what we can and cannot control.",
            },
            {
              icon: Scroll,
              title: "Virtue as the Highest Good",
              description: "Living according to wisdom, justice, courage, and temperance.",
            },
            {
              icon: Crown,
              title: "Duty and Service",
              description: "Fulfilling our roles with excellence and for the common good.",
            },
            {
              icon: BookOpen,
              title: "Impermanence",
              description: "Accepting the temporary nature of all things.",
            },
            {
              icon: Star,
              title: "Rational Thinking",
              description: "Using reason to examine our thoughts and responding rather than reacting.",
            },
            {
              icon: Crown,
              title: "Universal Connection",
              description: "Recognizing our interconnectedness with all of humanity.",
            },
          ].map((theme, index) => {
            const IconComponent = theme.icon
            return (
              <div key={index} className="space-y-3 p-4">
                <IconComponent className="w-8 h-8 text-emerald-600 mb-2" />
                <h3 className="text-lg font-serif font-bold text-slate-800">{theme.title}</h3>
                <p className="text-slate-600 text-sm leading-relaxed">{theme.description}</p>
              </div>
            )
          })}
        </div>
      </section>

      <section className="text-center space-y-8 py-12">
        <h2 className="text-3xl font-serif font-bold text-[#0055AA]">
          Begin Your Own Practice
        </h2>
        <p className="text-lg text-slate-600 max-w-2xl mx-auto font-serif italic">
          Marcus wrote these reminders to himself. Perhaps you should too.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link href="/archive">
            <Button className="bg-[#0055AA] hover:bg-[#004488] px-12 rounded-full">
              Read My Reflections
            </Button>
          </Link>
          <Link href="/concepts">
            <Button
              variant="outline"
              className="border-slate-300 px-12 rounded-full"
            >
              Explore Concepts
            </Button>
          </Link>
        </div>
      </section>
    </div>
  )
}
