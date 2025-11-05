"use client";

import Link from 'next/link';
import { usePathname } from 'next/navigation';

const links = [
  { href: '/', label: 'Home' },
  { href: '/work', label: 'Work' },
  { href: '/about', label: 'About' },
  { href: '/contact', label: 'Contact' }
];

export default function Navbar() {
  const pathname = usePathname();
  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: 16, width: '100%' }}>
      <Link href="/" className="brand">DG</Link>
      <div style={{ flex: 1 }} />
      <div className="nav-links">
        {links.map((l) => (
          <Link key={l.href} href={l.href} className="nav-link" style={{
            opacity: pathname === l.href ? 1 : undefined,
            borderBottom: pathname === l.href ? '2px solid var(--accent)' : '2px solid transparent',
            paddingBottom: 6
          }}>{l.label}</Link>
        ))}
      </div>
    </div>
  );
}
