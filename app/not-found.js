import Link from 'next/link';

export default function NotFound() {
  return (
    <>
      <h1>404: nothing here</h1>
      <p className="lead">This is the project's own not-found page.</p>
      <p><Link href="/">Go home</Link></p>
    </>
  );
}
