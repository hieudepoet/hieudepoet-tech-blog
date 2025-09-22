import { getPostBySlug } from "@/lib/posts"
import ReactMarkdown from "react-markdown"

interface PostPageProps {
  params: Promise<{ slug: string }>
}

// app/posts/[slug]/page.jsx
export async function generateStaticParams() {
  // Giả sử bạn lấy danh sách slug từ một nguồn dữ liệu (API, CMS, file, v.v.)
  const posts = [
    { slug: 'aws-cloud-day-2025' },
  ]; // Thay bằng logic thực tế, ví dụ: gọi API hoặc đọc từ database

  return posts.map((post) => ({
    slug: post.slug,
  }));
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
