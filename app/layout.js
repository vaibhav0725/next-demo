import Link from 'next/link';
import './globals.css';

export const metadata = {
  title: 'next-demo',
  description: 'A small Next.js site deployed to my own AWS account',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <header>
          <nav>
            <Link className="brand" href="/">next-demo</Link>
            <Link href="/about">About</Link>
            <Link href="/blog">Blog</Link>
          </nav>
        </header>
        <main>{children}</main>
        <footer>Built with Next.js, served from S3 and CloudFront in your own AWS account.</footer>
      </body>
    </html>
  );
}
