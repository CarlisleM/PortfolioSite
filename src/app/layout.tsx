import "./globals.css"
import type { Metadata } from "next"
import { Inter } from "next/font/google"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
    title: "Carlisle Miller",
    description: "Carlisle Miller Portfolio",
}

export default function RootLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <html className="!scroll-smooth" lang="en">
            <body className={inter.className}>{children}</body>
        </html>
    )
}
