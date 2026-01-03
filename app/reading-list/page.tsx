import { BookOpen } from "lucide-react"

export default function ReadingListPage() {
    const books = [
        {
            title: "Meditations",
            author: "Marcus Aurelius",
            description: "The private notes of a Roman Emperor. Essential reading for anyone interested in Stoicism and resilience.",
            link: "https://en.wikipedia.org/wiki/Meditations"
        },
        {
            title: "Letters from a Stoic",
            author: "Seneca",
            description: "Timeless advice on friendship, death, and how to live a good life.",
            link: "https://en.wikipedia.org/wiki/Epistulae_Morales_ad_Lucilium"
        },
        {
            title: "Discourses and Selected Writings",
            author: "Epictetus",
            description: "Practical teachings from a former slave who became one of the most influential Stoic teachers.",
            link: "https://en.wikipedia.org/wiki/Discourses_of_Epictetus"
        },
        {
            title: "The Daily Stoic",
            author: "Ryan Holiday",
            description: "366 meditations on wisdom, perseverance, and the art of living.",
            link: "https://dailystoic.com/"
        }
    ]

    return (
        <div className="space-y-12">
            <header className="space-y-6">
                <div className="flex items-center gap-4">
                    <div className="p-3 rounded-xl bg-amber-50">
                        <BookOpen className="w-8 h-8 text-amber-600" />
                    </div>
                    <h1 className="text-4xl font-serif font-bold text-[#0055AA]">
                        Reading List
                    </h1>
                </div>
                <p className="text-xl text-slate-600 dark:text-slate-400 font-serif italic max-w-2xl">
                    "A room without books is like a body without a soul." — Cicero
                </p>
            </header>

            <div className="space-y-12">
                {books.map((book, index) => (
                    <div key={index} className="group border-b border-slate-50 pb-8 last:border-0">
                        <a href={book.link} target="_blank" rel="noopener noreferrer" className="block space-y-3">
                            <h2 className="text-2xl font-serif font-bold text-slate-800 group-hover:text-[#0055AA] transition-colors leading-tight">
                                {book.title}
                            </h2>
                            <p className="text-slate-400 font-bold uppercase tracking-widest text-xs">
                                {book.author}
                            </p>
                            <p className="text-lg text-slate-600 font-serif leading-relaxed max-w-2xl">
                                {book.description}
                            </p>
                        </a>
                    </div>
                ))}
            </div>
        </div>
    )
}
