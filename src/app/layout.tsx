import '@/app/globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import Header from '@/components/Header';
import ThemeSwitch from '@/components/ThemeSwitch';
import Providers from '@/app/providers';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Launch Watcher',
  description:
    'A simple webapp that displays rocket launch data, powered by Launch Library 2 public APIs',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth" suppressHydrationWarning>
      <body className={inter.className}>
        <Providers>
          <div className="bg-gradient-to-br from-blue-100 via-slate-200 to-sky-200 dark:bg-gradient-to-br dark:from-neutral-950 dark:to-slate-950 min-w-screen min-h-screen">
            <div className="container mx-auto py-12 px-4">
              <Header />
              <ThemeSwitch />
              {children}
            </div>
          </div>
        </Providers>
      </body>
    </html>
  );
}
