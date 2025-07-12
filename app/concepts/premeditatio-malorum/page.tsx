import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { ArrowLeft, Mountain, Shield, Heart } from "lucide-react"
import { Navigation } from "@/components/navigation"

export default function PremeditatioMalorumPage() {
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
            <div className="p-4 rounded-full bg-slate-100 dark:bg-slate-800">
              <Mountain className="w-8 h-8 text-slate-700 dark:text-slate-300" />
            </div>
            <div>
              <h1 className="text-4xl md:text-5xl font-serif font-light text-slate-800 dark:text-slate-200">
                Premeditatio Malorum
              </h1>
              <p className="text-lg text-slate-600 dark:text-slate-400 mt-2">The Practice of Negative Visualization</p>
            </div>
          </div>
        </div>

        <div className="prose prose-lg max-w-none">
          <blockquote className="border-l-4 border-slate-300 dark:border-slate-600 pl-6 italic text-xl text-slate-700 dark:text-slate-300 mb-8">
            "What is grief but an opinion? You have the power to wipe it out."
            <footer className="text-base text-slate-500 dark:text-slate-400 mt-2">— Marcus Aurelius</footer>
          </blockquote>

          <p className="text-lg leading-relaxed mb-6 text-slate-700 dark:text-slate-300">
            Premeditatio malorum, or "premeditation of evils," is one of the most powerful and practical exercises in
            Stoic philosophy. This ancient practice involves deliberately imagining the loss of things we value—our
            health, loved ones, possessions, or circumstances—not to cultivate pessimism, but to develop gratitude,
            resilience, and emotional preparedness.
          </p>

          <h2 className="text-2xl font-serif font-medium text-slate-800 dark:text-slate-200 mt-12 mb-6">
            The Philosophy Behind the Practice
          </h2>

          <p className="mb-6 text-slate-700 dark:text-slate-300">
            Marcus Aurelius frequently employed this technique in his personal writings. By contemplating potential
            losses, we achieve several important outcomes: we reduce our attachment to external things, increase our
            appreciation for what we currently have, and build emotional resilience for when difficulties inevitably
            arise.
          </p>

          <div className="grid md:grid-cols-3 gap-6 my-12">
            <Card className="bg-white dark:bg-slate-800 border-0 shadow-sm">
              <CardHeader>
                <Shield className="w-8 h-8 text-slate-600 dark:text-slate-400 mb-2" />
                <CardTitle className="text-lg font-serif">Emotional Resilience</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-slate-600 dark:text-slate-400">
                  By mentally rehearsing difficulties, we become less shocked and more prepared when challenges actually
                  occur.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-white dark:bg-slate-800 border-0 shadow-sm">
              <CardHeader>
                <Heart className="w-8 h-8 text-slate-600 dark:text-slate-400 mb-2" />
                <CardTitle className="text-lg font-serif">Deeper Gratitude</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-slate-600 dark:text-slate-400">
                  Imagining loss helps us appreciate what we have right now, transforming ordinary moments into sources
                  of joy.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-white dark:bg-slate-800 border-0 shadow-sm">
              <CardHeader>
                <Mountain className="w-8 h-8 text-slate-600 dark:text-slate-400 mb-2" />
                <CardTitle className="text-lg font-serif">Reduced Attachment</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-slate-600 dark:text-slate-400">
                  Understanding the temporary nature of all things helps us hold them lightly, reducing anxiety and
                  suffering.
                </p>
              </CardContent>
            </Card>
          </div>

          <h2 className="text-2xl font-serif font-medium text-slate-800 dark:text-slate-200 mt-12 mb-6">
            How to Practice Premeditatio Malorum
          </h2>

          <div className="bg-slate-50 dark:bg-slate-800 rounded-lg p-6 mb-8">
            <h3 className="text-lg font-medium text-slate-800 dark:text-slate-200 mb-4">Daily Practice Steps:</h3>
            <ol className="list-decimal list-inside space-y-3 text-slate-700 dark:text-slate-300">
              <li>Set aside 5-10 minutes each morning or evening</li>
              <li>Choose one thing you value (health, relationship, possession)</li>
              <li>Imagine temporarily losing it—not permanently, but for a time</li>
              <li>Reflect on how you would cope and what you would learn</li>
              <li>Return to gratitude for having it in your life right now</li>
              <li>Carry this appreciation throughout your day</li>
            </ol>
          </div>

          <blockquote className="border-l-4 border-slate-300 dark:border-slate-600 pl-6 italic text-lg text-slate-700 dark:text-slate-300 mb-8">
            "Every new beginning comes from some other beginning's end."
            <footer className="text-base text-slate-500 dark:text-slate-400 mt-2">— Seneca</footer>
          </blockquote>

          <h2 className="text-2xl font-serif font-medium text-slate-800 dark:text-slate-200 mt-12 mb-6">
            Modern Applications
          </h2>

          <p className="mb-6 text-slate-700 dark:text-slate-300">
            In our modern world, premeditatio malorum can help us navigate career uncertainties, relationship
            challenges, health concerns, and the general anxiety that comes with living in uncertain times. It's not
            about becoming pessimistic, but about building the mental strength to handle whatever life brings our way.
          </p>

          <p className="mb-8 text-slate-700 dark:text-slate-300">
            Remember: the goal isn't to dwell on negative possibilities, but to use them as a tool for developing
            wisdom, gratitude, and inner strength. As Marcus Aurelius reminds us, we cannot control what happens to us,
            but we can always control how we respond.
          </p>
        </div>

        <div className="mt-12 pt-8 border-t border-slate-200 dark:border-slate-700">
          <div className="flex justify-between items-center">
            <Link href="/concepts/amor-fati">
              <Button
                variant="outline"
                className="border-slate-300 dark:border-slate-600 text-slate-700 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-800 bg-transparent"
              >
                Next: Amor Fati →
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
