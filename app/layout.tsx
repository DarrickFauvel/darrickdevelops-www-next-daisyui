import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import Header from "@/components/Header"
import Footer from "@/components/Footer"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Darrick Develops | Software Engineer",
  description:
    "Darrick Develops is your go-to source for professional software engineering solutions. Explore a portfolio showcasing innovative projects, programming expertise, and a passion for technology. Let’s bring your ideas to life!",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      className=" scroll-smooth"
      lang="en"
      data-theme="synthwave"
      suppressHydrationWarning>
      <body className={`${inter.className}`}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  )
}
