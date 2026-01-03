import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { BookOpen, Mountain, Sun, Wind, Scale, Globe, Cloud } from "lucide-react"

export default function ConceptsPage() {
  const concepts = [
    {
      title: "The Dichotomy of Control",
      description: "Distinguishing between what is up to us and what is not",
      longDescription:
        "The fundamental Stoic distinction. We have complete control over our own judgments and actions, but none over external events. Mastering this distinction leads to invulnerability and peace of mind.",
      icon: Scale,
      href: "/concepts/dichotomy-of-control",
      bgHover: "hover:bg-slate-50",
      keyPrinciples: ["Internal vs External", "Freedom", "Acceptance"],
    },
    {
      title: "Sympatheia",
      description: "The mutual interdependence of all things",
      longDescription:
        "Recognition that all things in the universe are mutually interwoven. We are parts of a single organism, and what is bad for the hive is bad for the bee. This fosters a sense of cosmopolitanism and connection to nature.",
      icon: Globe,
      href: "/concepts/sympatheia",
      bgHover: "hover:bg-slate-50",
      keyPrinciples: ["Interconnectedness", "Cosmopolitanism", "Nature"],
    },
    {
      title: "The View From Above",
      description: "Gaining an objective perspective on life",
      longDescription:
        "A mental exercise of envisioning the world from a cosmic viewpoint. This objective perspective reduces our trivial worries and reminds us of the vastness of the whole.",
      icon: Cloud,
      href: "/concepts/view-from-above",
      bgHover: "hover:bg-slate-50",
      keyPrinciples: ["Objectivity", "Perspective", "Humility"],
    },
    {
      title: "Premeditatio Malorum",
      description: "The practice of imagining loss to cultivate gratitude and resilience",
      longDescription:
        "A powerful Stoic exercise that involves deliberately contemplating potential setbacks, losses, or difficulties. This practice helps build emotional resilience, increases gratitude for what we have, and prepares us mentally for life's inevitable challenges.",
      icon: Mountain,
      href: "/concepts/premeditatio-malorum",
      bgHover: "hover:bg-slate-50",
      keyPrinciples: ["Mental preparation", "Gratitude cultivation", "Emotional resilience"],
    },
    {
      title: "Amor Fati",
      description: "Love of fate - embracing everything that happens as necessary",
      longDescription:
        "The practice of not just accepting but actually loving whatever happens to us, including difficulties and setbacks. This concept goes beyond mere acceptance to find meaning and even gratitude in all of life's experiences.",
      icon: Sun,
      href: "/concepts/amor-fati",
      bgHover: "hover:bg-slate-50",
      keyPrinciples: ["Radical acceptance", "Finding meaning in adversity", "Inner freedom"],
    },
    {
      title: "Memento Mori",
      description: "Remember death - a reminder of life's impermanence",
      longDescription:
        "The practice of remembering our mortality to inspire authentic living. Rather than being morbid, this meditation on death helps us prioritize what truly matters and live with greater intention and appreciation.",
      icon: Wind,
      href: "/concepts/memento-mori",
      bgHover: "hover:bg-slate-50",
      keyPrinciples: ["Present moment awareness", "Priority clarity", "Gratitude for life"],
    },
  ]

  return (
    <div className="space-y-12">
      <header className="space-y-6">
        <div className="flex items-center gap-4">
          <div className="p-3 rounded-xl bg-[#0055AA]/5">
            <BookOpen className="w-8 h-8 text-[#0055AA]" />
          </div>
          <h1 className="text-4xl font-serif font-bold text-[#0055AA]">
            Stoic Concepts
          </h1>
        </div>
        <p className="text-xl text-slate-600 font-serif leading-relaxed max-w-2xl">
          Fundamental principles for practical wisdom. These concepts have guided philosophers and practitioners for over two millennia.
        </p>
      </header>

      <div className="grid gap-8">
        {concepts.map((concept, index) => {
          const IconComponent = concept.icon
          return (
            <Card
              key={index}
              className={`bg-white border-slate-100 shadow-sm hover:shadow-md transition-all duration-300 group ${concept.bgHover}`}
            >
              <CardHeader className="pb-4">
                <div className="flex items-start gap-6">
                  <div className="p-4 rounded-lg bg-slate-50 group-hover:bg-white transition-colors flex-shrink-0">
                    <IconComponent className="w-8 h-8 text-[#0055AA]" />
                  </div>
                  <div className="flex-1">
                    <CardTitle className="text-2xl font-serif text-slate-800 group-hover:text-[#0055AA] transition-colors mb-2">
                      <Link href={concept.href}>{concept.title}</Link>
                    </CardTitle>
                    <CardDescription className="text-slate-500 text-base mb-4">
                      {concept.description}
                    </CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-slate-700 leading-relaxed mb-6 font-serif text-lg">{concept.longDescription}</p>

                <div className="mb-6">
                  <h4 className="text-sm font-bold text-slate-400 uppercase tracking-widest mb-3">Key Principles:</h4>
                  <div className="flex flex-wrap gap-2">
                    {concept.keyPrinciples.map((principle, principleIndex) => (
                      <span
                        key={principleIndex}
                        className="px-3 py-1 bg-slate-50 rounded-full text-sm text-slate-600 font-medium"
                      >
                        {principle}
                      </span>
                    ))}
                  </div>
                </div>

                <Link href={concept.href}>
                  <Button
                    variant="link"
                    className="p-0 h-auto text-[#0055AA] font-bold hover:no-underline hover:text-[#004488]"
                  >
                    Explore This Concept →
                  </Button>
                </Link>
              </CardContent>
            </Card>
          )
        })}
      </div>

      <section className="bg-slate-50 border border-slate-100 rounded-2xl p-10 mt-16 text-center">
        <h2 className="text-3xl font-serif font-bold text-[#0055AA] mb-4">Deepen Your Practice</h2>
        <p className="text-slate-600 mb-8 max-w-xl mx-auto">
          Stoicism is a practice of continuous self-examination. These concepts are designed to be lived, not just studied.
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <Link href="/archive">
            <Button className="bg-[#0055AA] hover:bg-[#004488] px-8 rounded-full">
              Read Practical Applications
            </Button>
          </Link>
          <Link href="/meditations">
            <Button variant="outline" className="border-slate-300 rounded-full px-8">
              Study the Meditations
            </Button>
          </Link>
        </div>
      </section>
    </div>
  )
}
