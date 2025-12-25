import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ArrowLeft, Calendar, Clock } from "lucide-react"
import { Navigation } from "@/components/navigation"
import { blogPosts } from "@/lib/blog-data"

export default function BlogPage() {
  const posts = blogPosts

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-stone-50">
      {/* Navigation */}
      <Navigation />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <Link href="/" className="inline-flex items-center text-slate-600 hover:text-slate-900 mb-8">
          <ArrowLeft className="w-4 h-4 mr-2" />
          Back to Digital Garden
        </Link>

        <div className="mb-12">
          <h1 className="text-4xl md:text-5xl font-serif font-light text-slate-800 mb-4">Philosophical Writings</h1>
          <p className="text-lg text-slate-600 max-w-2xl">
            Reflections on Stoic philosophy, practical wisdom, and the art of living well. Each post explores how
            ancient teachings can guide us through modern challenges.
          </p>
        </div>

        <div className="grid gap-8">
          {posts.map((post, index) => (
            <Card key={index} className="bg-white border-0 shadow-sm hover:shadow-md transition-all duration-300 group">
              <CardHeader className="pb-4">
                <div className="flex flex-wrap gap-2 mb-3">
                  {post.tags.map((tag, tagIndex) => (
                    <Badge key={tagIndex} variant="secondary" className="text-xs bg-slate-100 text-slate-600">
                      {tag}
                    </Badge>
                  ))}
                </div>
                <CardTitle className="text-2xl font-serif text-slate-800 group-hover:text-slate-900 mb-2">
                  <Link href={`/blog/${post.slug}`}>{post.title}</Link>
                </CardTitle>
                <div className="flex items-center gap-4 text-sm text-slate-500">
                  <div className="flex items-center gap-1">
                    <Calendar className="w-4 h-4" />
                    <span>{post.date}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Clock className="w-4 h-4" />
                    <span>{post.readTime}</span>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-slate-600 text-base leading-relaxed mb-4">
                  {post.excerpt}
                </CardDescription>
                <Link href={`/blog/${post.slug}`}>
                  <Button
                    variant="outline"
                    className="border-slate-300 text-slate-700 hover:bg-slate-50 bg-transparent"
                  >
                    Read More
                  </Button>
                </Link>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Newsletter Signup */}
        <div className="mt-16 bg-slate-50 rounded-lg p-8 text-center">
          <h2 className="text-2xl font-serif font-medium text-slate-800 mb-4">Stay Connected to the Garden</h2>
          <p className="text-slate-600 mb-6 max-w-2xl mx-auto">
            Receive weekly reflections on Stoic philosophy and practical wisdom. No spam, just thoughtful insights
            delivered to your inbox.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-2 border border-slate-300 rounded-md focus:outline-none focus:ring-2 focus:ring-slate-500"
            />
            <Button className="bg-slate-800 hover:bg-slate-700 text-white px-6">Subscribe</Button>
          </div>
        </div>
      </div>
    </div>
  )
}
