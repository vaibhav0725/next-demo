import Link from 'next/link';
import { posts } from '../../data/posts';

export const metadata = { title: 'Blog | next-demo' };

export default function Blog() {
  return (
    <>
      <h1>Blog</h1>
      <p className="lead">Each post below is its own page, generated at build time.</p>
      {posts.map((post) => (
        <div className="card" key={post.slug}>
          <h2><Link href={`/blog/${post.slug}`}>{post.title}</Link></h2>
          <p className="muted">{post.date}</p>
        </div>
      ))}
    </>
  );
}
