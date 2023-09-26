import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Hangman App',
  description: 'Play the hangman game',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="box-border rounded-xl max-w-7xl h-[32rem] border-yellow-50/80 border-2 m-auto mt-48 bg-yellow-50/80">
          {children}
        </div>
      </body>
    </html>
  );
}
