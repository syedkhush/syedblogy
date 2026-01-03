import { Button } from "@/components/ui/button"
import Link from "next/link"
import { ArrowLeft, Wind } from "lucide-react"
import { Navigation } from "@/components/navigation"

export default function Apatheia() {
    return (
        <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-stone-50 dark:from-slate-950 dark:via-slate-900 dark:to-slate-950">
            <Navigation />
            <div className="container mx-auto px-4 py-12 max-w-3xl">
                <Link href="/concepts">
                    <Button variant="ghost" className="mb-8 hover:bg-transparent hover:text-primary transition-colors pl-0 text-slate-600 dark:text-slate-400">
                        <ArrowLeft className="mr-2 h-4 w-4" /> Back to Concepts
                    </Button>
                </Link>

                <article className="prose prose-stone dark:prose-invert lg:prose-xl max-w-none">
                    <div className="flex items-center gap-4 mb-6">
                        <Wind className="w-12 h-12 text-primary" />
                        <h1 className="font-serif text-4xl md:text-5xl m-0 text-primary">Apatheia</h1>
                    </div>

                    <p className="lead text-xl text-muted-foreground mb-8">
                        "The mind that is free from passion is a very citadel, for man has no fortress more impregnable wherein to find refuge and be untroubled."
                        <br /><span className="text-sm italic block mt-2">— Marcus Aurelius, Meditations</span>
                    </p>

                    <p>
                        <strong>Apatheia</strong> (Greek: ἀπάθεια) in Stoicism is a state of mind in which one is not disturbed by the passions. It is often misunderstood as "apathy" or lack of feeling, but for the Stoics, it meant <em>freedom from suffering</em> caused by irrational emotions.
                    </p>

                    <h2 className="text-2xl font-serif mt-12 mb-6 text-slate-800 dark:text-slate-100">Beyond Apathy</h2>
                    <p>
                        Unlike modern apathy, which implies indifference or laziness, Apatheia is a state of extreme clarity and engagement. By removing the "passions" (irrational fears, excessive lusts, overwhelming grief), the Stoic is free to exercise reason and perform their duties to society more effectively.
                    </p>

                    <h2 className="text-2xl font-serif mt-12 mb-6 text-slate-800 dark:text-slate-100">The Four Passions</h2>
                    <p>
                        Stoics identified four primary categories of passion that cloud judgment:
                    </p>
                    <ul className="list-disc pl-6 space-y-2">
                        <li><strong>Distress</strong>: Present irrational pain.</li>
                        <li><strong>Fear</strong>: Expectation of irrational pain.</li>
                        <li><strong>Lust</strong>: Expectation of irrational pleasure.</li>
                        <li><strong>Delight</strong>: Present irrational pleasure.</li>
                    </ul>

                    <h2 className="text-2xl font-serif mt-12 mb-6 text-slate-800 dark:text-slate-100">Spiritual Exercise: The Inner Citadel</h2>
                    <p>
                        To cultivate Apatheia, Marcus Aurelius suggests withdrawing into the "Inner Citadel"—the space where your reason resides. When external events threaten to disturb you, pause and remember that the event itself is neutral; only your judgment of it can cause you pain.
                    </p>

                    <blockquote className="border-l-4 border-primary/20 pl-6 italic text-slate-600 dark:text-slate-400 my-10 font-serif">
                        "It is not the things themselves that disturb men, but their judgements about these things."
                        <footer className="text-sm font-sans mt-2">— Epictetus, Enchiridion</footer>
                    </blockquote>

                    <p className="mt-8 italic text-slate-500 dark:text-slate-500">
                        Practice today: Notice when a strong emotion rises in you. Name it. Ask: "Is this based on reason, or is it a passion?"
                    </p>
                </article>
            </div>
        </div>
    )
}
