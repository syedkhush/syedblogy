import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { ArrowLeft, BookOpen, Mountain, Sun, Wind } from "lucide-react"
import { Navigation } from "@/components/navigation"

export default function ConceptsPage() {
  const concepts = [
    {
      title: "Premeditatio Malorum",
      description: "The practice of imagining loss to cultivate gratitude and resilience",
      longDescription:
        "A powerful Stoic exercise that involves deliberately contemplating potential setbacks, losses, or difficulties. This practice helps build emotional resilience, increases gratitude for what we have, and prepares us mentally for life's inevitable challenges.",
      icon: Mountain,
      href: "/concepts/premeditatio-malorum",
      color: "bg-slate-100 hover:bg-slate-200 dark:bg-slate-800 dark:hover:bg-slate-700",
      keyPrinciples: ["Mental preparation", "Gratitude cultivation", "Emotional resilience"],
    },
    {
      title: "Amor Fati",
      description: "Love of fate - embracing everything that happens as necessary",
      longDescription:
        "The practice of not just accepting but actually loving whatever happens to us, including difficulties and setbacks. This concept goes beyond mere acceptance to find meaning and even gratitude in all of life's experiences.",
      icon: Sun,
      href: "/concepts/amor-fati",
      color: "bg-amber-50 hover:bg-amber-100 dark:bg-amber-900/20 dark:hover:bg-amber-900/30",
      keyPrinciples: ["Radical acceptance", "Finding meaning in adversity", "Inner freedom"],
    },
    {
      title: "Memento Mori",
      description: "Remember death - a reminder of life's impermanence",
      longDescription:
        "The practice of remembering our mortality to inspire authentic living. Rather than being morbid, this meditation on death helps us prioritize what truly matters and live with greater intention and appreciation.",
      icon: Wind,
      href: "/concepts/memento-mori",
      color: "bg-gray-50 hover:bg-gray-100 dark:bg-gray-800 dark:hover:bg-gray-700",
      keyPrinciples: ["Present moment awareness", "Priority clarity", "Gratitude for life"],
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
            <div className="p-4 rounded-full bg-slate-100 dark:bg-slate-800">
              <BookOpen className="w-8 h-8 text-slate-700 dark:text-slate-300" />
            </div>
            <div>
              <h1 className="text-4xl md:text-5xl font-serif font-light text-slate-800 dark:text-slate-200">
                Stoic Concepts
              </h1>
              <p className="text-lg text-slate-600 dark:text-slate-400 mt-2">
                Fundamental principles for practical wisdom
              </p>
            </div>
          </div>

          <p className="text-lg text-slate-600 dark:text-slate-400 max-w-3xl">
            These core Stoic concepts have guided philosophers and practitioners for over two millennia. Each principle
            offers practical tools for building resilience, finding peace, and living with greater wisdom and purpose.
          </p>
        </div>

        <div className="grid gap-8">
          {concepts.map((concept, index) => {
            const IconComponent = concept.icon
            return (
              <Card
                key={index}
                className={`${concept.color} border-0 shadow-sm hover:shadow-md transition-all duration-300 group`}
              >
                <CardHeader className="pb-4">
                  <div className="flex items-start gap-6">
                    <div className="p-4 rounded-lg bg-white/80 dark:bg-slate-900/80 group-hover:bg-white dark:group-hover:bg-slate-900 transition-colors flex-shrink-0">
                      <IconComponent className="w-8 h-8 text-slate-700 dark:text-slate-300" />
                    </div>
                    <div className="flex-1">
                      <CardTitle className="text-2xl font-serif text-slate-800 dark:text-slate-200 group-hover:text-slate-900 dark:group-hover:text-slate-100 mb-2">
                        {concept.title}
                      </CardTitle>
                      <CardDescription className="text-slate-600 dark:text-slate-400 text-base mb-4">
                        {concept.description}
                      </CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-slate-700 dark:text-slate-300 leading-relaxed mb-6">{concept.longDescription}</p>

                  <div className="mb-6">
                    <h4 className="text-sm font-medium text-slate-800 dark:text-slate-200 mb-3">Key Principles:</h4>
                    <div className="flex flex-wrap gap-2">
                      {concept.keyPrinciples.map((principle, principleIndex) => (
                        <span
                          key={principleIndex}
                          className="px-3 py-1 bg-white/60 dark:bg-slate-900/60 rounded-full text-sm text-slate-700 dark:text-slate-300"
                        >
                          {principle}
                        </span>
                      ))}
                    </div>
                  </div>

                  <Link href={concept.href}>
                    <Button
                      variant="outline"
                      className="border-slate-300 dark:border-slate-600 text-slate-700 dark:text-slate-300 hover:bg-white dark:hover:bg-slate-900 bg-transparent"
                    >
                      Explore This Concept →
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            )
          })}
        </div>

        {/* Additional Resources */}
        <div className="mt-16 bg-slate-50 dark:bg-slate-800 rounded-lg p-8">
          <h2 className="text-2xl font-serif font-medium text-slate-800 dark:text-slate-200 mb-6">
            Deepen Your Practice
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h3 className="text-lg font-medium text-slate-800 dark:text-slate-200 mb-3">Daily Application</h3>
              <p className="text-slate-600 dark:text-slate-400 mb-4">
                These concepts are most powerful when applied consistently in daily life. Start with one concept and
                practice it for a week before moving to the next.
              </p>
              <Link href="/blog">
                <Button
                  variant="outline"
                  className="border-slate-300 dark:border-slate-600 text-slate-700 dark:text-slate-300 hover:bg-white dark:hover:bg-slate-800 bg-transparent"
                >
                  Read Practical Applications
                </Button>
              </Link>
            </div>
            <div>
              <h3 className="text-lg font-medium text-slate-800 dark:text-slate-200 mb-3">Further Study</h3>
              <p className="text-slate-600 dark:text-slate-400 mb-4">
                Explore Marcus Aurelius' personal reflections and see how he applied these principles in his own life as
                both emperor and philosopher.
              </p>
              <Link href="/meditations">
                <Button
                  variant="outline"
                  className="border-slate-300 dark:border-slate-600 text-slate-700 dark:text-slate-300 hover:bg-white dark:hover:bg-slate-800 bg-transparent"
                >
                  Study the Meditations
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
