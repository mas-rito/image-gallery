import React from "react"

import { IlustrationNotFound } from "@/components/atoms/ilustrationNotFound"

export default function notfound() {
  return (
    <div className="lg::pt-20 grid place-content-center bg-white px-4 pt-12 md:pt-14">
      <div className="text-center">
        <IlustrationNotFound />

        <h1 className="mt-6 text-2xl font-bold tracking-tight text-gray-900 sm:text-4xl">
          Yahh...
        </h1>

        <p className="mt-4 text-gray-500">Halaman tidak ditemukan.</p>
      </div>
    </div>
  )
}
