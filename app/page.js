import Counter from './components/Counter';

export default function Home() {
  // NEXT_PUBLIC_* values are read when the site is built and baked into the page.
  const greeting = process.env.NEXT_PUBLIC_GREETING ?? 'Hello (NEXT_PUBLIC_GREETING is not set)';
  return (
    <>
      <h1>{greeting}</h1>
      <p className="lead">This page was pre-rendered at build time and works without a server. (push-to-deploy test 1)</p>
      <div className="card">
        <h2>A client-side component</h2>
        <p className="muted">The page is static HTML, and this counter runs in your browser after it loads.</p>
        <Counter />
      </div>
      <div className="card">
        <h2>Built at</h2>
        <p className="muted">{new Date().toISOString()}</p>
      </div>
    </>
  );
}
