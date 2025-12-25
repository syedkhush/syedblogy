import { Button } from "@/components/ui/button"
import Link from "next/link"
import { ArrowLeft } from "lucide-react"

export default function Sympatheia() {
    return (
        <div className="container mx-auto px-4 py-12 max-w-3xl">
            <Link href="/concepts">
                <Button variant="ghost" className="mb-8 hover:bg-transparent hover:text-primary transition-colors pl-0">
                    <ArrowLeft className="mr-2 h-4 w-4" /> Back to Concepts
                </Button>
            </Link>

            <article className="prose prose-stone dark:prose-invert lg:prose-xl max-w-none">
                <h1 className="font-serif text-4xl md:text-5xl mb-6 text-primary">Sympatheia</h1>

                <p className="lead text-xl text-muted-foreground mb-8">
                    "Meditate often on the interconnectedness and mutual interdependence of all things in the universe."
                    <br /><span className="text-sm italic block mt-2">— Marcus Aurelius, Meditations</span>
                </p>

                <p>
                    <strong>Sympatheia</strong> is the Stoic concept of the mutual interdependence of all things. It is the belief that the universe is a single living organism, and everything within it is connected.
                </p>

                <h2 className="text-2xl font-serif mt-12 mb-6">We Are All Connected</h2>
                <p>
                    Just as my hand and foot work together for the good of my body, so too do individual humans exist for the sake of one another. To harm another is to harm oneself, for we are all part of the same whole.
                </p>

                <h2 className="text-2xl font-serif mt-12 mb-6">Cosmopolitanism</h2>
                <p>
                    This leads to the Stoic idea of cosmopolitanism—that we are all citizens of the world. Our primary loyalty is not to our city or nation, but to the community of reason that includes all human beings.
                </p>

                <p className="mt-8">
                    When you feel alone or alienated, remember Sympatheia. Look at the stars and realize you are part of a vast, orderly, and beautiful cosmos.
                </p>
            </article>
        </div>
    )
}
