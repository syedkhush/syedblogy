import { Navigation } from "@/components/navigation"

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
        <div className="min-h-screen bg-slate-50 dark:bg-slate-950 transition-colors duration-500">
            <Navigation />
            <main className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
                <header className="mb-16">
                    <h1 className="text-4xl md:text-5xl font-serif font-bold text-slate-900 dark:text-slate-100 mb-6">
                        Reading List
                    </h1>
                    <p className="text-xl text-slate-600 dark:text-slate-400 font-serif italic">
                        "A room without books is like a body without a soul." — Cicero
                    </p>
                </header>

                <div className="space-y-12">
                    {books.map((book, index) => (
                        <div key={index} className="group">
                            <a href={book.link} target="_blank" rel="noopener noreferrer" className="block">
                                <h2 className="text-2xl font-serif font-semibold text-slate-800 dark:text-slate-200 group-hover:text-amber-700 dark:group-hover:text-amber-500 transition-colors">
                                    {book.title}
                                </h2>
                                <p className="text-slate-500 dark:text-slate-500 mb-2 font-medium tracking-wide text-sm uppercase">
                                    {book.author}
                                </p>
                                <p className="text-slate-700 dark:text-slate-300 leading-relaxed max-w-2xl">
                                    {book.description}
                                </p>
                            </a>
                        </div>
                    ))}
                </div>
            </main>
        </div>
    )
}
