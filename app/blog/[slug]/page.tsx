import { blogPosts } from "@/lib/blog-data"
import { Navigation } from "@/components/navigation"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Calendar, Clock, ArrowLeft } from "lucide-react"
import Link from "next/link"
import { notFound } from "next/navigation"

export function generateStaticParams() {
    return blogPosts.map((post) => ({
        slug: post.slug,
    }))
}

export default function BlogPost({ params }: { params: { slug: string } }) {
    const post = blogPosts.find((p) => p.slug === params.slug)

    if (!post) {
        notFound()
    }

    return (
        <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-stone-50 text-slate-800">
            <Navigation />

            <article className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                <Link href="/blog" className="inline-flex items-center text-slate-600 hover:text-slate-900 mb-8 transition-colors">
                    <ArrowLeft className="w-4 h-4 mr-2" />
                    Back to Writings
                </Link>

                <header className="mb-10">
                    <div className="flex flex-wrap gap-2 mb-4">
                        {post.tags.map((tag) => (
                            <Badge key={tag} variant="secondary" className="bg-slate-100 text-slate-600">
                                {tag}
                            </Badge>
                        ))}
                    </div>

                    <h1 className="text-3xl md:text-5xl font-serif font-light text-slate-900 mb-6 leading-tight">
                        {post.title}
                    </h1>

                    <div className="flex items-center gap-6 text-slate-500 text-sm">
                        <div className="flex items-center gap-1">
                            <Calendar className="w-4 h-4" />
                            <span>{post.date}</span>
                        </div>
                        <div className="flex items-center gap-1">
                            <Clock className="w-4 h-4" />
                            <span>{post.readTime}</span>
                        </div>
                    </div>
                </header>

                <div
                    className="prose prose-slate prose-lg md:prose-xl max-w-none prose-headings:font-serif prose-headings:font-light"
                    dangerouslySetInnerHTML={{ __html: post.content || "" }}
                />

                <div className="mt-12 pt-8 border-t border-slate-200">
                    <h3 className="text-xl font-serif mb-4">Continue Reading</h3>
                    <div className="flex gap-4">
                        <Link href="/blog">
                            <Button variant="outline">Browse All Posts</Button>
                        </Link>
                    </div>
                </div>
            </article>
        </div>
    )
}
