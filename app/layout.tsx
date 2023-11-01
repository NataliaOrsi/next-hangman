import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import WorldContextProvider  from "./context/word-context";

import { config } from "@fortawesome/fontawesome-svg-core";
import "@fortawesome/fontawesome-svg-core/styles.css";
config.autoAddCss = false;

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
        <div className="box-border rounded-xl max-w-7xl h-[28rem] border-yellow-50/80 border-2 m-6 mt-48 bg-yellow-50/80 md:m-auto md:mt-48 md:h-[32rem]">
          <WorldContextProvider>{children}</WorldContextProvider>
        </div>
      </body>
    </html>
  );
}
