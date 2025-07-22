import type React from "react"
import type { Metadata } from "next"
import "./globals.css"

export const metadata: Metadata = {
  title: "PowerMaps - Tunisia's First EV Charging Reservation App",
  description: "PowerMaps helps you discover and reserve EV charging stations in real-time across Tunisia.",
  generator: "v0.dev",
  icons: {
    icon: "/powermaps-logo.png", // Updated favicon to the new logo
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
