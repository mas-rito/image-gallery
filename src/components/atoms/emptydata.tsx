import Link from "next/link"

import { ArrowUpRight, PackageOpen } from "lucide-react"

export const EmptyData = () => {
  return (
    <div className="mt-40">
      <div className="mx-auto space-y-8">
        <div className="space-y-2">
          <PackageOpen size={80} className="mx-auto text-red-600" />
          <h2 className="text-center">Foto tidak ditemukan.</h2>
        </div>
        <Link
          href={"/"}
          className="mx-auto flex w-fit items-center gap-x-1 rounded-full bg-red-600 py-2 pe-4 ps-2 text-white transition-opacity hover:opacity-90"
        >
          <ArrowUpRight /> kembali
        </Link>
      </div>
    </div>
  )
}
