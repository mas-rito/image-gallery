import type { Metadata } from "next"
import { Poppins } from "next/font/google"

import "./globals.css"

import { Suspense } from "react"

import {
  ModalDetailGallery,
  ModalLoading,
} from "@/components/molecules/modalDetailGallery"
import { Navbar } from "@/components/molecules/navbar"

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800"],
})

export const metadata: Metadata = {
  title: "Galeri Foto",
  description: "Temukan koleksi foto favoritmu disini!",
  openGraph: {
    title: "Galeri Foto",
    description: "Temukan koleksi foto favoritmu disini!",
    url: "https://galery.ritoramadhan.my.id",
    images: [
      {
        url: `https://galery.ritoramadhan.my.id/thumbnail.jpg`,
        width: 1920,
        height: 1080,
      },
    ],
    type: "website",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={poppins.className}>
        <Suspense fallback={<ModalLoading />}>
          <ModalDetailGallery />
        </Suspense>
        <Navbar />
        {children}
      </body>
    </html>
  )
}
