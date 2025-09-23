import type { Metadata } from "next";
import "./globals.css";
import LetterGlitch from "@/components/Background";

export const metadata: Metadata = {
  title: "HieuDePoet Tech Blog",
  description: "My personal blog about Cloud, AI, Web3, and more.",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="bg-gray-50 text-gray-900">
        <div className="background">
          <LetterGlitch
            glitchSpeed={50}
            centerVignette={true}
            outerVignette={false}
            smooth={true}
          />
        </div>
        <main className="max-w-3xl mx-auto p-6 relative z-10">{children}</main>
      </body>
    </html>
  )
}
