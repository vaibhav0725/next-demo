import Link from 'next/link';
import { notFound } from 'next/navigation';
import { posts } from '../../../data/posts';

// A static export must list every page of a dynamic route up front.
export function generateStaticParams() {
  return posts.map((post) => ({ slug: post.slug }));
}

export const dynamicParams = false;

export default async function Post({ params }) {
  const { slug } = await params;
  const post = posts.find((p) => p.slug === slug);
  if (!post) notFound();
  return (
    <>
      <h1>{post.title}</h1>
      <p className="lead">{post.date}</p>
      <div className="card"><p>{post.body}</p></div>
      <p><Link href="/blog">Back to the blog</Link></p>
    </>
  );
}
