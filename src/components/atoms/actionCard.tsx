import Link from "next/link"

import { ArrowUpRight, Download, Loader } from "lucide-react"

import { useDownloadImage } from "@/hooks/useDownloadImage"

type LinkFotoGrapherProps = {
  name: string
  href: string
}

export const LinkFotoGrapher = ({ name, href }: LinkFotoGrapherProps) => {
  return (
    <Link
      href={href}
      target="_blank"
      title="Profile photographer"
      className="flex select-none items-center gap-x-1 rounded-full bg-white/90 px-2.5 py-1 transition-opacity hover:bg-white"
    >
      <ArrowUpRight size={16} />
      <p className="max-w-10 truncate text-xs md:max-w-14 lg:max-w-24 lg:text-sm">
        {name}
      </p>
    </Link>
  )
}

type DownloadImageProps = {
  url: string
  filename: string
}

export const DownloadImage = ({ url, filename }: DownloadImageProps) => {
  const { download, isLoading } = useDownloadImage({ url, filename })

  return (
    <button
      onClick={download}
      title="Download foto"
      className="rounded-full bg-white/90 p-2 transition-opacity hover:bg-white"
    >
      {isLoading ? (
        <Loader className="h-5 w-5 animate-spin-slow text-red-600 md:h-6 md:w-6" />
      ) : (
        <Download className="h-5 w-5 md:h-6 md:w-6" />
      )}
    </button>
  )
}
