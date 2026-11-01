export const metadata = { title: 'About | next-demo' };

export default function About() {
  return (
    <>
      <h1>About</h1>
      <p className="lead">A plain page, served from its own file (about.html).</p>
      <div className="card">
        <p>This site is a static export of a Next.js app. Every page is generated when you run <code>next build</code>,
        uploaded to S3, and delivered by CloudFront.</p>
      </div>
    </>
  );
}
