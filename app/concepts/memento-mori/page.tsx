import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { ArrowLeft, Wind, Clock, Leaf, Hourglass } from "lucide-react"
import { Navigation } from "@/components/navigation"

export default function MementoMoriPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-stone-50 dark:from-slate-900 dark:via-slate-800 dark:to-slate-900">
      <Navigation />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <Link
          href="/"
          className="inline-flex items-center text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-slate-100 mb-8"
        >
          <ArrowLeft className="w-4 h-4 mr-2" />
          Back to Digital Garden
        </Link>

        <div className="mb-12">
          <div className="flex items-center gap-4 mb-6">
            <div className="p-4 rounded-full bg-gray-100 dark:bg-gray-800">
              <Wind className="w-8 h-8 text-gray-600 dark:text-gray-400" />
            </div>
            <div>
              <h1 className="text-4xl md:text-5xl font-serif font-light text-slate-800 dark:text-slate-200">
                Memento Mori
              </h1>
              <p className="text-lg text-slate-600 dark:text-slate-400 mt-2">Remember You Must Die</p>
            </div>
          </div>
        </div>

        <div className="prose prose-lg max-w-none">
          <blockquote className="border-l-4 border-gray-300 dark:border-gray-600 pl-6 italic text-xl text-slate-700 dark:text-slate-300 mb-8">
            "It is not death that a man should fear, but never beginning to live."
            <footer className="text-base text-slate-500 dark:text-slate-400 mt-2">— Marcus Aurelius</footer>
          </blockquote>

          <p className="text-lg leading-relaxed mb-6 text-slate-700 dark:text-slate-300">
            Memento mori—"remember you must die"—is perhaps the most sobering yet liberating practice in Stoic
            philosophy. Far from being morbid, this ancient meditation on mortality serves as a powerful reminder to
            live fully, love deeply, and focus on what truly matters. Marcus Aurelius frequently contemplated death not
            to cultivate fear, but to inspire authentic living.
          </p>

          <h2 className="text-2xl font-serif font-medium text-slate-800 dark:text-slate-200 mt-12 mb-6">
            The Philosophy of Impermanence
          </h2>

          <p className="mb-6 text-slate-700 dark:text-slate-300">
            In his <em>Meditations</em>, Marcus Aurelius returns again and again to the theme of life's brevity. He
            understood that acknowledging our mortality isn't about dwelling on death, but about awakening to life. When
            we truly grasp that our time is limited, we naturally begin to prioritize what matters most and let go of
            petty concerns that drain our energy.
          </p>

          <div className="grid md:grid-cols-3 gap-6 my-12">
            <Card className="bg-white dark:bg-slate-800 border-0 shadow-sm">
              <CardHeader>
                <Clock className="w-8 h-8 text-gray-600 dark:text-gray-400 mb-2" />
                <CardTitle className="text-lg font-serif">Present Moment Awareness</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-slate-600 dark:text-slate-400">
                  Understanding life's brevity helps us focus on the present moment rather than getting lost in past
                  regrets or future anxieties.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-white dark:bg-slate-800 border-0 shadow-sm">
              <CardHeader>
                <Leaf className="w-8 h-8 text-gray-600 dark:text-gray-400 mb-2" />
                <CardTitle className="text-lg font-serif">Priority Clarity</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-slate-600 dark:text-slate-400">
                  Mortality reminds us to distinguish between what's truly important and what's merely urgent or
                  trivial.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-white dark:bg-slate-800 border-0 shadow-sm">
              <CardHeader>
                <Hourglass className="w-8 h-8 text-gray-600 dark:text-gray-400 mb-2" />
                <CardTitle className="text-lg font-serif">Gratitude for Life</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-slate-600 dark:text-slate-400">
                  Recognizing life's temporary nature increases our appreciation for each day, each breath, each moment
                  of consciousness.
                </p>
              </CardContent>
            </Card>
          </div>

          <h2 className="text-2xl font-serif font-medium text-slate-800 dark:text-slate-200 mt-12 mb-6">
            Practical Applications of Memento Mori
          </h2>

          <div className="bg-slate-50 dark:bg-slate-800 rounded-lg p-6 mb-8">
            <h3 className="text-lg font-medium text-slate-800 dark:text-slate-200 mb-4">
              Daily Contemplation Practices:
            </h3>
            <ul className="list-disc list-inside space-y-3 text-slate-700 dark:text-slate-300">
              <li>
                <strong>Morning Reflection:</strong> Begin each day remembering it could be your last
              </li>
              <li>
                <strong>Evening Review:</strong> Ask yourself if you lived fully and authentically today
              </li>
              <li>
                <strong>Relationship Priority:</strong> Consider how mortality affects your interactions with loved ones
              </li>
              <li>
                <strong>Legacy Thinking:</strong> Reflect on what you want to be remembered for
              </li>
              <li>
                <strong>Time Consciousness:</strong> Notice how you spend your precious hours
              </li>
              <li>
                <strong>Gratitude Practice:</strong> Appreciate the gift of another day of consciousness
              </li>
            </ul>
          </div>

          <p className="mb-8 text-slate-700 dark:text-slate-300">
            Memento mori ultimately teaches us that death gives life its preciousness. Like a beautiful sunset that
            moves us precisely because it's fleeting, our mortality makes each moment, each relationship, each
            experience infinitely valuable. In remembering that we must die, we learn how to truly live.
          </p>
        </div>

        <div className="mt-12 pt-8 border-t border-slate-200 dark:border-slate-700">
          <div className="flex justify-between items-center">
            <Link href="/concepts/premeditatio-malorum">
              <Button
                variant="outline"
                className="border-slate-300 dark:border-slate-600 text-slate-700 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-800 bg-transparent"
              >
                ← Previous: Premeditatio Malorum
              </Button>
            </Link>
            <Link href="/concepts">
              <Button className="bg-slate-800 hover:bg-slate-700 dark:bg-slate-200 dark:hover:bg-slate-300 dark:text-slate-900 text-white">
                All Concepts
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
