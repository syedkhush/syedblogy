import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { ArrowLeft, User, Code, BookOpen, Heart, Coffee, Github, Linkedin, Mail } from "lucide-react"
import { Navigation } from "@/components/navigation"

export default function AboutPage() {
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
            <div className="relative w-20 h-20 overflow-hidden rounded-full border-2 border-slate-200 dark:border-slate-700 shadow-sm">
              <Image
                src="/profile.png"
                alt="Syed Khush"
                fill
                className="object-cover"
                priority
              />
            </div>
            <div>
              <h1 className="text-4xl md:text-5xl font-serif font-light text-slate-800 dark:text-slate-200">
                About Syed Khush
              </h1>
              <p className="text-lg text-slate-600 dark:text-slate-400 mt-2">
                Developer, Philosopher, Digital Gardener
              </p>
            </div>
          </div>
        </div>

        <div className="prose prose-lg prose-slate dark:prose-slate max-w-none">
          <blockquote className="border-l-4 border-slate-300 dark:border-slate-600 pl-6 italic text-xl text-slate-700 dark:text-slate-300 mb-8">
            "The philosopher's school is a hospital."
            <footer className="text-base text-slate-500 dark:text-slate-400 mt-2">— Epictetus</footer>
          </blockquote>

          <p className="text-lg leading-relaxed mb-8">
            Hello, I'm Syed Khush—a software developer by profession and a student of Stoic philosophy by passion. This
            digital garden represents the intersection of my two greatest interests: building meaningful technology and
            cultivating practical wisdom for daily life.
          </p>

          <h2 className="text-2xl font-serif font-medium text-slate-800 dark:text-slate-200 mt-12 mb-6">
            My Journey with Stoicism
          </h2>

          <p className="mb-6">
            My introduction to Stoic philosophy came during a particularly challenging period in my life. Like many
            people, I was searching for practical wisdom that could help me navigate uncertainty, manage stress, and
            find meaning in daily struggles. When I first encountered Marcus Aurelius' <em>Meditations</em>, I was
            struck by how relevant these 2,000-year-old insights felt to modern challenges.
          </p>

          <p className="mb-8">
            What began as personal study evolved into a daily practice. I found myself returning again and again to
            concepts like <em>premeditatio malorum</em>, <em>amor fati</em>, and <em>memento mori</em>—not as abstract
            philosophical ideas, but as practical tools for living with greater resilience, gratitude, and purpose.
          </p>

          <div className="grid md:grid-cols-2 gap-6 my-12">
            <Card className="bg-white dark:bg-slate-800 border-0 shadow-sm">
              <CardHeader>
                <Code className="w-8 h-8 text-slate-600 dark:text-slate-400 mb-2" />
                <CardTitle className="text-lg font-serif">Technology & Philosophy</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-slate-600 dark:text-slate-400">
                  As a developer, I'm fascinated by how ancient wisdom can inform modern digital experiences and help us
                  build more thoughtful, human-centered technology.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-white dark:bg-slate-800 border-0 shadow-sm">
              <CardHeader>
                <BookOpen className="w-8 h-8 text-slate-600 dark:text-slate-400 mb-2" />
                <CardTitle className="text-lg font-serif">Continuous Learning</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-slate-600 dark:text-slate-400">
                  Philosophy, like programming, is a practice of continuous learning and refinement. Each day offers new
                  opportunities to apply Stoic principles and grow in wisdom.
                </p>
              </CardContent>
            </Card>
          </div>

          <h2 className="text-2xl font-serif font-medium text-slate-800 dark:text-slate-200 mt-12 mb-6">
            Why a Digital Garden?
          </h2>

          <p className="mb-6">
            Traditional blogs follow a chronological structure, but philosophy doesn't work that way. Ideas grow,
            evolve, and interconnect over time. A digital garden allows thoughts to develop organically—some posts are
            seedlings of new ideas, others are mature reflections that have been cultivated through years of practice.
          </p>

          <p className="mb-8">
            This approach mirrors the Stoic practice of continuous self-examination. Marcus Aurelius didn't write his{" "}
            <em>Meditations</em> as a linear argument but as ongoing personal reflections. Similarly, this garden grows
            through daily practice, seasonal insights, and the patient cultivation of wisdom.
          </p>

          <div className="bg-slate-50 dark:bg-slate-800 rounded-lg p-6 mb-8">
            <h3 className="text-lg font-medium text-slate-800 dark:text-slate-200 mb-4 flex items-center gap-2">
              <Heart className="w-5 h-5" />
              What Drives This Work:
            </h3>
            <ul className="space-y-2 text-slate-700 dark:text-slate-300">
              <li>
                • <strong>Practical Application:</strong> Making ancient wisdom accessible and applicable to modern life
              </li>
              <li>
                • <strong>Community Learning:</strong> Creating a space where others can explore Stoic principles
              </li>
              <li>
                • <strong>Personal Growth:</strong> Using writing as a tool for deeper understanding and reflection
              </li>
              <li>
                • <strong>Digital Mindfulness:</strong> Bringing contemplative practices into our digital spaces
              </li>
            </ul>
          </div>

          <h2 className="text-2xl font-serif font-medium text-slate-800 dark:text-slate-200 mt-12 mb-6">
            My Daily Practice
          </h2>

          <p className="mb-6">
            Stoicism isn't just an intellectual exercise—it's a way of life that requires daily practice. My routine
            includes morning reflections inspired by Marcus Aurelius, evening reviews of the day's events, and regular
            contemplation of core Stoic principles. I also maintain a personal journal where I work through challenges
            using Stoic frameworks.
          </p>

          <p className="mb-8">
            This website serves as both a public extension of that practice and a way to share insights that might be
            helpful to others on similar journeys. Every post here has been tested in the laboratory of daily life.
          </p>

          <h2 className="text-2xl font-serif font-medium text-slate-800 dark:text-slate-200 mt-12 mb-6">
            Beyond Philosophy
          </h2>

          <p className="mb-6">
            When I'm not writing about Stoicism or coding, you'll find me reading widely across philosophy, psychology,
            and literature. I'm particularly interested in how different wisdom traditions complement each other and how
            we can integrate multiple perspectives into a coherent approach to living well.
          </p>

          <div className="bg-slate-50 dark:bg-slate-800 rounded-lg p-6 mb-8">
            <h3 className="text-lg font-medium text-slate-800 dark:text-slate-200 mb-4 flex items-center gap-2">
              <Coffee className="w-5 h-5" />
              Current Interests:
            </h3>
            <ul className="grid md:grid-cols-2 gap-2 text-slate-700 dark:text-slate-300">
              <li>• Modern applications of ancient philosophy</li>
              <li>• Digital minimalism and mindful technology</li>
              <li>• The intersection of Eastern and Western wisdom</li>
              <li>• Building contemplative digital experiences</li>
              <li>• Sustainable software development practices</li>
              <li>• The philosophy of open source</li>
            </ul>
          </div>

          <h2 className="text-2xl font-serif font-medium text-slate-800 dark:text-slate-200 mt-12 mb-6">
            Connect & Collaborate
          </h2>

          <p className="mb-6">
            I believe that philosophy is best practiced in community. If you're interested in Stoicism, have questions
            about any of the concepts I've written about, or want to share your own insights, I'd love to hear from you.
            This digital garden grows through dialogue and shared exploration.
          </p>

          <div className="flex flex-wrap gap-4 mb-8">
            <a
              href="mailto:hello@syedkhush.com"
              className="inline-flex items-center gap-2 px-4 py-2 bg-slate-100 dark:bg-slate-800 rounded-lg text-slate-700 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors"
            >
              <Mail className="w-4 h-4" />
              Email
            </a>
            <a
              href="https://github.com/syedkhush"
              className="inline-flex items-center gap-2 px-4 py-2 bg-slate-100 dark:bg-slate-800 rounded-lg text-slate-700 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors"
            >
              <Github className="w-4 h-4" />
              GitHub
            </a>
            <a
              href="https://linkedin.com/in/syedkhush"
              className="inline-flex items-center gap-2 px-4 py-2 bg-slate-100 dark:bg-slate-800 rounded-lg text-slate-700 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors"
            >
              <Linkedin className="w-4 h-4" />
              LinkedIn
            </a>
          </div>

          <blockquote className="border-l-4 border-slate-300 dark:border-slate-600 pl-6 italic text-lg text-slate-700 dark:text-slate-300 mb-8">
            "The best revenge is not to be like your enemy."
            <footer className="text-base text-slate-500 dark:text-slate-400 mt-2">— Marcus Aurelius</footer>
          </blockquote>

          <p className="mb-8">
            Thank you for visiting this digital garden. Whether you're new to Stoicism or a longtime practitioner, I
            hope you find something here that resonates with your own journey toward wisdom, resilience, and authentic
            living. Remember: philosophy is not about perfection, but about progress—one day, one choice, one moment at
            a time.
          </p>
        </div>

        <div className="mt-12 pt-8 border-t border-slate-200 dark:border-slate-700 text-center">
          <p className="text-slate-600 dark:text-slate-400 mb-6">
            "You have power over your mind—not outside events. Realize this, and you will find strength."
          </p>
          <div className="flex justify-center gap-4">
            <Link href="/blog">
              <Button className="bg-slate-800 hover:bg-slate-700 dark:bg-slate-200 dark:hover:bg-slate-300 dark:text-slate-900 text-white">
                Read My Writings
              </Button>
            </Link>
            <Link href="/concepts">
              <Button
                variant="outline"
                className="border-slate-300 dark:border-slate-600 text-slate-700 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-800 bg-transparent"
              >
                Explore Concepts
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
