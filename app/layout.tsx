import type { Metadata } from 'next';
import './globals.css';
import { Inter } from 'next/font/google';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

const inter = Inter({ subsets: ['latin'], variable: '--font-sans' });

export const metadata: Metadata = {
  title: 'Portfolio ? Graphic Designer',
  description: 'Modern 3D portfolio showcasing graphic design work.',
  openGraph: {
    title: 'Portfolio ? Graphic Designer',
    description: 'Modern 3D portfolio showcasing graphic design work.',
    type: 'website'
  },
  metadataBase: new URL('https://agentic-baa9965a.vercel.app')
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={inter.variable}>
      <body>
        <nav className="nav">
          <div className="container nav-inner">
            <Navbar />
          </div>
        </nav>
        {children}
        <footer className="footer">
          <div className="container">
            <Footer />
          </div>
        </footer>
      </body>
    </html>
  );
}
