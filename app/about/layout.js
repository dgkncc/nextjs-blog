import { getPosts } from "@/lib/posts"
import Link from "next/link"

export default async function AboutLayout({ children }) {
    const { posts } = await getPosts({
        newest: true, limit: 3
    })

    return (
        <div>
            <div>{children}</div>
            <div className="mt-8">
                <h2 className="mb-4 text-xl">You might also like</h2>
                <ul className="font-mono">
                    {posts.map(post =>
                        <li key={post.slug}>
                            <span className="text-gray-400">
                                {post.frontmatter.date}&nbsp;</span>
                            <Link href={`/blog/${post.slug}`} className="underline">
                                {post.frontmatter.title}
                            </Link>

                        </li>)}
                </ul>
            </div>
        </div>
    )
}