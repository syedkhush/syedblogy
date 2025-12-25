import { Button } from "@/components/ui/button"
import Link from "next/link"
import { ArrowLeft } from "lucide-react"

export default function DichotomyOfControl() {
    return (
        <div className="container mx-auto px-4 py-12 max-w-3xl">
            <Link href="/concepts">
                <Button variant="ghost" className="mb-8 hover:bg-transparent hover:text-primary transition-colors pl-0">
                    <ArrowLeft className="mr-2 h-4 w-4" /> Back to Concepts
                </Button>
            </Link>

            <article className="prose prose-stone dark:prose-invert lg:prose-xl max-w-none">
                <h1 className="font-serif text-4xl md:text-5xl mb-6 text-primary">The Dichotomy of Control</h1>

                <p className="lead text-xl text-muted-foreground mb-8">
                    "Some things are in our control and others not. Things in our control are opinion, pursuit, desire, aversion, and, in a word, whatever are our own actions. Things not in our control are body, property, reputation, command, and, in one word, whatever are not our own actions."
                    <br /><span className="text-sm italic block mt-2">— Epictetus, Enchiridion</span>
                </p>

                <p>
                    The Dichotomy of Control is perhaps the most fundamental principle of Stoicism. It asks us to distinguish between what depends on us and what does not.
                </p>

                <h2 className="text-2xl font-serif mt-12 mb-6">What We Control</h2>
                <ul className="list-disc pl-6 mb-8 space-y-2">
                    <li><strong>Our Judgments:</strong> How we interpret events.</li>
                    <li><strong>Our Intentions:</strong> The goals we set for ourselves.</li>
                    <li><strong>Our Values:</strong> What we consider good or bad.</li>
                </ul>

                <h2 className="text-2xl font-serif mt-12 mb-6">What We Do Not Control</h2>
                <ul className="list-disc pl-6 mb-8 space-y-2">
                    <li><strong>External Outcomes:</strong> Whether we get the job, win the race, or are loved by others.</li>
                    <li><strong>The Past:</strong> What has already happened.</li>
                    <li><strong>Other People:</strong> Their thoughts, actions, and feelings.</li>
                </ul>

                <p>
                    By focusing our energy entirely on what we control, we become invincible. No external event can harm our character or force us to act against our nature. We find peace knowing we did our best, regardless of the outcome.
                </p>
            </article>
        </div>
    )
}
