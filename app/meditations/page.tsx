import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ArrowLeft, BookOpen, Crown, Scroll, Star } from "lucide-react"
import { Navigation } from "@/components/navigation"

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
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-stone-50 dark:from-slate-900 dark:via-slate-800 dark:to-slate-900">
      <Navigation />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <Link
          href="/"
          className="inline-flex items-center text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-slate-100 mb-8"
        >
          <ArrowLeft className="w-4 h-4 mr-2" />
          Back to Digital Garden
        </Link>

        <div className="mb-12">
          <div className="flex items-center gap-4 mb-6">
            <div className="p-4 rounded-full bg-emerald-100 dark:bg-emerald-900/30">
              <BookOpen className="w-8 h-8 text-emerald-600 dark:text-emerald-400" />
            </div>
            <div>
              <h1 className="text-4xl md:text-5xl font-serif font-light text-slate-800 dark:text-slate-200">
                Meditations
              </h1>
              <p className="text-lg text-slate-600 dark:text-slate-400 mt-2">Personal Reflections of Marcus Aurelius</p>
            </div>
          </div>

          <div className="bg-emerald-50 dark:bg-emerald-900/20 rounded-lg p-6 mb-8">
            <div className="flex items-start gap-4">
              <Crown className="w-6 h-6 text-emerald-600 dark:text-emerald-400 mt-1 flex-shrink-0" />
              <div>
                <h3 className="text-lg font-medium text-slate-800 dark:text-slate-200 mb-2">About the Meditations</h3>
                <p className="text-slate-700 dark:text-slate-300 leading-relaxed">
                  The <em>Meditations</em> of Marcus Aurelius were never intended for publication. They are the private
                  journal of a Roman Emperor, written to himself as reminders and reflections on how to live a good
                  life. These personal notes, written in Greek while on military campaigns, have become one of the most
                  influential works of philosophy ever written.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="grid gap-8 mb-12">
          {meditations.map((meditation, index) => (
            <Card
              key={index}
              className="bg-white dark:bg-slate-800 border-0 shadow-sm hover:shadow-md transition-all duration-300"
            >
              <CardHeader className="pb-4">
                <div className="flex items-center justify-between mb-3">
                  <Badge
                    variant="secondary"
                    className="bg-emerald-100 dark:bg-emerald-900/30 text-emerald-700 dark:text-emerald-400"
                  >
                    {meditation.book}
                  </Badge>
                  <Badge
                    variant="outline"
                    className="border-slate-300 dark:border-slate-600 text-slate-600 dark:text-slate-400"
                  >
                    {meditation.theme}
                  </Badge>
                </div>
                <CardTitle className="text-2xl font-serif text-slate-800 dark:text-slate-200 mb-2">
                  {meditation.title}
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <blockquote className="border-l-4 border-emerald-300 dark:border-emerald-600 pl-4 italic text-slate-700 dark:text-slate-300">
                  "{meditation.quote}"
                </blockquote>
                <CardDescription className="text-slate-600 dark:text-slate-400 leading-relaxed">
                  {meditation.reflection}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Key Themes Section */}
        <div className="mb-12">
          <h2 className="text-3xl font-serif font-light text-slate-800 dark:text-slate-200 mb-8">
            Key Themes in the Meditations
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                icon: Star,
                title: "The Dichotomy of Control",
                description:
                  "Distinguishing between what we can and cannot control, focusing our energy where it can make a difference.",
              },
              {
                icon: Scroll,
                title: "Virtue as the Highest Good",
                description:
                  "Living according to wisdom, justice, courage, and temperance regardless of external circumstances.",
              },
              {
                icon: Crown,
                title: "Duty and Service",
                description:
                  "Finding meaning through service to the common good and fulfilling our roles with excellence.",
              },
              {
                icon: BookOpen,
                title: "Impermanence",
                description:
                  "Accepting the temporary nature of all things and finding peace in life's constant change.",
              },
              {
                icon: Star,
                title: "Rational Thinking",
                description: "Using reason to examine our thoughts and emotions, responding rather than reacting.",
              },
              {
                icon: Crown,
                title: "Universal Connection",
                description: "Recognizing our interconnectedness with all of humanity and the cosmos.",
              },
            ].map((theme, index) => {
              const IconComponent = theme.icon
              return (
                <Card key={index} className="bg-white dark:bg-slate-800 border-0 shadow-sm">
                  <CardHeader>
                    <IconComponent className="w-8 h-8 text-emerald-600 dark:text-emerald-400 mb-2" />
                    <CardTitle className="text-lg font-serif">{theme.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed">{theme.description}</p>
                  </CardContent>
                </Card>
              )
            })}
          </div>
        </div>

        {/* Reading Guide */}
        <div className="bg-slate-50 dark:bg-slate-800 rounded-lg p-8 mb-12">
          <h2 className="text-2xl font-serif font-medium text-slate-800 dark:text-slate-200 mb-6">
            How to Read the Meditations
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h3 className="text-lg font-medium text-slate-800 dark:text-slate-200 mb-3">Approach</h3>
              <ul className="space-y-2 text-slate-700 dark:text-slate-300 text-sm">
                <li>• Read slowly and contemplatively</li>
                <li>• Don't worry about reading in order</li>
                <li>• Focus on passages that resonate with your current situation</li>
                <li>• Keep a journal of your own reflections</li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-medium text-slate-800 dark:text-slate-200 mb-3">Practice</h3>
              <ul className="space-y-2 text-slate-700 dark:text-slate-300 text-sm">
                <li>• Apply the principles to daily challenges</li>
                <li>• Use morning and evening reflections</li>
                <li>• Practice the exercises Marcus describes</li>
                <li>• Remember these are personal reminders, not abstract theory</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <h2 className="text-2xl font-serif font-medium text-slate-800 dark:text-slate-200 mb-4">
            Begin Your Own Practice
          </h2>
          <p className="text-slate-600 dark:text-slate-400 mb-6 max-w-2xl mx-auto">
            The <em>Meditations</em> are not meant to be read once but returned to again and again. Each reading reveals
            new insights as we grow and face different challenges in life.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/blog">
              <Button className="bg-slate-800 hover:bg-slate-700 dark:bg-slate-200 dark:hover:bg-slate-300 dark:text-slate-900 text-white">
                Read My Reflections
              </Button>
            </Link>
            <Link href="/concepts">
              <Button
                variant="outline"
                className="border-slate-300 dark:border-slate-600 text-slate-700 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-800 bg-transparent"
              >
                Explore Stoic Concepts
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
