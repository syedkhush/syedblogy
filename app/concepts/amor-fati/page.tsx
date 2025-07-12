import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { ArrowLeft, Sun, Heart, Mountain, Compass } from "lucide-react"
import { Navigation } from "@/components/navigation"

export default function AmorFatiPage() {
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
            <div className="p-4 rounded-full bg-amber-100 dark:bg-amber-900/30">
              <Sun className="w-8 h-8 text-amber-600 dark:text-amber-400" />
            </div>
            <div>
              <h1 className="text-4xl md:text-5xl font-serif font-light text-slate-800 dark:text-slate-200">
                Amor Fati
              </h1>
              <p className="text-lg text-slate-600 dark:text-slate-400 mt-2">Love of Fate</p>
            </div>
          </div>
        </div>

        <div className="prose prose-lg max-w-none">
          <blockquote className="border-l-4 border-amber-300 dark:border-amber-600 pl-6 italic text-xl text-slate-700 dark:text-slate-300 mb-8">
            "My formula for greatness in a human being is amor fati: that one wants nothing to be different, not
            forward, not backward, not in all eternity."
            <footer className="text-base text-slate-500 dark:text-slate-400 mt-2">— Friedrich Nietzsche</footer>
          </blockquote>

          <p className="text-lg leading-relaxed mb-6 text-slate-700 dark:text-slate-300">
            Amor fati, Latin for "love of fate," represents one of the most profound and transformative concepts in
            Stoic philosophy. While popularized by Nietzsche, this principle finds its roots in the teachings of Marcus
            Aurelius and other Stoic philosophers. It asks us to do more than merely accept what happens to us—it
            challenges us to embrace and even love our fate, including its difficulties and setbacks.
          </p>

          <h2 className="text-2xl font-serif font-medium text-slate-800 dark:text-slate-200 mt-12 mb-6">
            Beyond Acceptance: Embracing What Is
          </h2>

          <p className="mb-6 text-slate-700 dark:text-slate-300">
            Marcus Aurelius wrote extensively about accepting the natural order of things, but amor fati goes deeper.
            It's not passive resignation but active embrace. When we practice amor fati, we don't just tolerate our
            circumstances—we find reasons to be grateful for them, recognizing that every experience, pleasant or
            painful, contributes to our growth and understanding.
          </p>

          <div className="grid md:grid-cols-3 gap-6 my-12">
            <Card className="bg-white dark:bg-slate-800 border-0 shadow-sm">
              <CardHeader>
                <Heart className="w-8 h-8 text-amber-600 dark:text-amber-400 mb-2" />
                <CardTitle className="text-lg font-serif">Radical Acceptance</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-slate-600 dark:text-slate-400">
                  Moving beyond mere tolerance to genuine appreciation for all of life's experiences, both joyful and
                  challenging.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-white dark:bg-slate-800 border-0 shadow-sm">
              <CardHeader>
                <Mountain className="w-8 h-8 text-amber-600 dark:text-amber-400 mb-2" />
                <CardTitle className="text-lg font-serif">Inner Freedom</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-slate-600 dark:text-slate-400">
                  Liberation from the exhausting cycle of wishing things were different, finding peace in what actually
                  is.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-white dark:bg-slate-800 border-0 shadow-sm">
              <CardHeader>
                <Compass className="w-8 h-8 text-amber-600 dark:text-amber-400 mb-2" />
                <CardTitle className="text-lg font-serif">Purposeful Living</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-slate-600 dark:text-slate-400">
                  Discovering meaning and purpose in every circumstance, transforming obstacles into opportunities for
                  growth.
                </p>
              </CardContent>
            </Card>
          </div>

          <h2 className="text-2xl font-serif font-medium text-slate-800 dark:text-slate-200 mt-12 mb-6">
            Marcus Aurelius on Fate and Acceptance
          </h2>

          <blockquote className="border-l-4 border-slate-300 dark:border-slate-600 pl-6 italic text-lg text-slate-700 dark:text-slate-300 mb-8">
            "Accept the things to which fate binds you, and love the people with whom fate associates you."
            <footer className="text-base text-slate-500 dark:text-slate-400 mt-2">
              — Marcus Aurelius, Meditations
            </footer>
          </blockquote>

          <p className="mb-6 text-slate-700 dark:text-slate-300">
            The Roman Emperor understood that our happiness depends not on controlling external events, but on our
            response to them. In his personal writings, he repeatedly returns to the theme of working with fate rather
            than against it, finding harmony with the natural order of the universe.
          </p>

          <h2 className="text-2xl font-serif font-medium text-slate-800 dark:text-slate-200 mt-12 mb-6">
            Practical Applications of Amor Fati
          </h2>

          <div className="bg-slate-50 dark:bg-slate-800 rounded-lg p-6 mb-8">
            <h3 className="text-lg font-medium text-slate-800 dark:text-slate-200 mb-4">Daily Practice Guidelines:</h3>
            <ul className="list-disc list-inside space-y-3 text-slate-700 dark:text-slate-300">
              <li>
                <strong>Morning Intention:</strong> Begin each day by accepting whatever it may bring
              </li>
              <li>
                <strong>Reframe Challenges:</strong> Ask "How is this serving my growth?" when facing difficulties
              </li>
              <li>
                <strong>Evening Reflection:</strong> Find something to appreciate about the day's events, even setbacks
              </li>
              <li>
                <strong>Release Control:</strong> Practice letting go of outcomes you cannot influence
              </li>
              <li>
                <strong>Find the Gift:</strong> Look for lessons and opportunities hidden within problems
              </li>
              <li>
                <strong>Embrace Impermanence:</strong> Remember that both joy and sorrow are temporary
              </li>
            </ul>
          </div>

          <p className="mb-8 text-slate-700 dark:text-slate-300">
            When we truly embrace amor fati, we discover an unexpected freedom: the freedom from the tyranny of our own
            expectations. We can work toward our goals while remaining unattached to specific outcomes, finding joy in
            the process rather than banking our happiness on results we cannot guarantee.
          </p>
        </div>

        <div className="mt-12 pt-8 border-t border-slate-200 dark:border-slate-700">
          <div className="flex justify-between items-center">
            <Link href="/concepts/memento-mori">
              <Button
                variant="outline"
                className="border-slate-300 dark:border-slate-600 text-slate-700 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-800 bg-transparent"
              >
                Next: Memento Mori →
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
