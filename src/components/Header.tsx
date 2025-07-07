import Link from "next/link";

export default function Header() {
  return (
    <header className="bg-white shadow p-4 sticky top-0 z-50">
      <div className="max-w-6xl mx-auto flex justify-between items-center">
        <Link href="/" className="text-xl font-bold">Dr. Serena Blake</Link>
        <nav className="space-x-4">
          <Link href="/about">About</Link>
          <Link href="/services">Services</Link>
          <Link href="/faq">FAQ</Link>
          <Link href="/contact">Contact</Link>
        </nav>
      </div>
    </header>
  );
}
