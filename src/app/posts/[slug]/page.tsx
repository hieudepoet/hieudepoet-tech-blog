import { getPostBySlug } from "@/lib/posts"
import ReactMarkdown from "react-markdown"

interface PostPageProps {
  params: Promise<{ slug: string }>
}

export default async function PostPage({ params }: PostPageProps) {
  const { slug } = await params
  const post = getPostBySlug(`${slug}.md`)

  return (
    <article className="prose prose-lg mx-auto p-6">
      <h1 className="text-3xl font-bold mb-4">{post.frontMatter.title}</h1>
      <div className="prose max-w-none">
        <ReactMarkdown>{post.content}</ReactMarkdown>
      </div>
    </article>
  )
}
