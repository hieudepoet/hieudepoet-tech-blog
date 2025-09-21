import { getPostBySlug } from "@/lib/posts"
import ReactMarkdown from "react-markdown"

interface PostPageProps {
  params: { slug: string }
}

export default function PostPage({ params }: PostPageProps) {
  const post = getPostBySlug(`${params.slug}.md`)

  return (
    <article className="prose prose-lg mx-auto p-6">
      <h1 className="text-3xl font-bold mb-4">{post.frontMatter.title}</h1>
      <div className="prose max-w-none">
        <ReactMarkdown>{post.content}</ReactMarkdown>
      </div>
    </article>
  )
}
