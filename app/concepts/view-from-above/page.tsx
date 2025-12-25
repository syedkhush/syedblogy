import { Button } from "@/components/ui/button"
import Link from "next/link"
import { ArrowLeft } from "lucide-react"

export default function ViewFromAbove() {
    return (
        <div className="container mx-auto px-4 py-12 max-w-3xl">
            <Link href="/concepts">
                <Button variant="ghost" className="mb-8 hover:bg-transparent hover:text-primary transition-colors pl-0">
                    <ArrowLeft className="mr-2 h-4 w-4" /> Back to Concepts
                </Button>
            </Link>

            <article className="prose prose-stone dark:prose-invert lg:prose-xl max-w-none">
                <h1 className="font-serif text-4xl md:text-5xl mb-6 text-primary">The View From Above</h1>

                <p className="lead text-xl text-muted-foreground mb-8">
                    "Think of the whole universe of matter and how small your share. Think of the whole expanse of time and how brief—almost momentary—the part assigned to you. Think of the workings of fate and how infinitesimal your role."
                    <br /><span className="text-sm italic block mt-2">— Marcus Aurelius, Meditations</span>
                </p>

                <p>
                    <strong>The View From Above</strong> is a spiritual exercise designed to put our lives in perspective. By imagining ourselves looking down on the world from a great height, our personal worries and anxieties shrink to their proper size.
                </p>

                <h2 className="text-2xl font-serif mt-12 mb-6">Gaining Perspective</h2>
                <p>
                    From high above, borders disappear. Armies look like ants fighting over a crumb. The span of a human life feels like a blink of an eye. This isn't meant to make us feel insignificant in a depressing way, but to free us from the "trivial" troubles that consume our daily thoughts.
                </p>

                <h2 className="text-2xl font-serif mt-12 mb-6">Objectivity</h2>
                <p>
                    This exercise helps us see things as they really are, stripped of our emotional judgments. It restores our sense of inner peace and reminds us of our connection to the whole.
                </p>
            </article>
        </div>
    )
}
