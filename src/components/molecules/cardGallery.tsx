import Image from "next/image"
import Link from "next/link"

import { Photo } from "pexels"

import { DownloadImage, LinkFotoGrapher } from "../atoms/actionCard"

type Props = {
  image: Photo
}

export const CardGallery = ({ image }: Props) => {
  return (
    <div className="group space-y-1 overflow-hidden">
      <div className="relative overflow-hidden rounded-lg">
        <div className="invisible absolute left-0 top-0 z-10 h-full w-full rounded-lg opacity-0 transition-all duration-100 group-hover:visible group-hover:opacity-100">
          <Link
            title="Lihat detail"
            href={`/?image=${image.id}`}
            scroll={false}
            className="absolute left-0 top-0 h-full w-full bg-black/50"
          />
          <div className="absolute bottom-1.5 left-0 flex w-full items-center justify-between px-1.5 lg:bottom-2.5 lg:px-3">
            <LinkFotoGrapher
              name={image.photographer}
              href={image.photographer_url}
            />
            <DownloadImage
              url={image.src.original}
              filename={image.alt || "image"}
            />
          </div>
        </div>
        <Image
          key={image.id}
          width={700}
          height={700}
          loading="lazy"
          className="max-w-full select-none bg-zinc-200 transition-transform group-hover:scale-[1.03]"
          src={image.src.large}
          alt={image.alt || "image"}
        />
      </div>
      <h2 className="line-clamp-2 text-xs font-medium text-zinc-700 md:text-sm">
        {image.alt}
      </h2>
    </div>
  )
}
