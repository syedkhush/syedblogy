import { blogPosts } from "@/lib/blog-data"
import { Badge } from "@/components/ui/badge"
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
        <article>
            <header className="mb-10 text-center">
                <div className="flex items-center justify-center gap-2 mb-6">
                    {post.tags.map((tag) => (
                        <Badge key={tag} variant="secondary" className="bg-slate-100 text-slate-600 rounded-full px-3">
                            {tag}
                        </Badge>
                    ))}
                </div>

                <h1 className="text-3xl md:text-5xl font-serif font-bold text-slate-800 mb-6 leading-tight">
                    {post.title}
                </h1>

                <div className="flex items-center justify-center gap-6 text-slate-400 text-sm font-medium uppercase tracking-widest">
                    <span>{post.date}</span>
                    <span>•</span>
                    <span>{post.readTime}</span>
                </div>
            </header>

            <div className="h-px w-24 bg-[#0055AA] mx-auto mb-12" />

            <div
                className="prose prose-xl prose-slate max-w-none prose-headings:text-[#0055AA] prose-headings:font-serif prose-p:text-slate-700 prose-p:leading-loose prose-a:text-[#0055AA] prose-a:no-underline hover:prose-a:underline font-serif"
                dangerouslySetInnerHTML={{ __html: post.content || "" }}
            />
        </article>
    )
}
