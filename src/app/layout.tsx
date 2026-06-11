import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import Navbar from '@/components/common/Navbar';
import Footer from '@/components/common/Footer';

const inter = Inter({ subsets: ['latin'], variable: '--font-sans' });

export const metadata: Metadata = {
  metadataBase: new URL('https://www.tvamkeysoftware.com'),
  title: 'Tvam Key Software — Enterprise Digital Engineering & Software Systems',
  description:
    'Tvam Key Software engineers robust digital platforms, scalable cloud architectures, and intelligent software systems from our headquarters in Mumbai BKC.',
  keywords: 'enterprise software development, software engineering, cloud architecture, system integration, digital transformation, AI systems',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${inter.variable} h-full`}>
      <body className="min-h-full flex flex-col bg-white text-slate-900">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
