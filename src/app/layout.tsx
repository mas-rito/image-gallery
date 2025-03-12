import type { Metadata } from "next"
import { Poppins } from "next/font/google"

import "./globals.css"

import { Suspense } from "react"

import { ProgressBar } from "@/components/atoms/progressBar"
import { Provider } from "@/components/atoms/Provider"
import { CategoryImage } from "@/components/molecules/categoryImage"
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
    url: "https://gallery.ritoramadhan.my.id",
    images: [
      {
        url: `https://gallery.ritoramadhan.my.id/thumbnail.png`,
        width: 920,
        height: 520,
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
        <ProgressBar />
        <Provider>
          <Suspense fallback={<ModalLoading />}>
            <ModalDetailGallery />
          </Suspense>
          <Navbar />
          <main className="mt-20 space-y-2 lg:space-y-4">
            <CategoryImage />
            {children}
          </main>
        </Provider>
      </body>
    </html>
  )
}
