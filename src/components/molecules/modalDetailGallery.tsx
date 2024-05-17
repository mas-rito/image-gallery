"use client"

import Image from "next/image"
import Link from "next/link"
import { useRouter, useSearchParams } from "next/navigation"

import { ArrowUpRight, CircleUserRound, Loader, X } from "lucide-react"

import { useDownloadImage } from "@/hooks/useDownloadImage"
import { useGetSigleImage } from "@/hooks/useGetImages"

import { Skeleton } from "../atoms/skeleton"

export const ModalDetailGallery = () => {
  const searchParams = useSearchParams()
  const imageId = searchParams.get("image")
  const router = useRouter()

  const { image, isLoading: imageIsLoading } = useGetSigleImage({
    imageId: imageId as string,
  })

  const { download, isLoading } = useDownloadImage({
    url: image?.src?.original,
    filename: image?.alt || "image",
  })

  const handleCloseModal = () => {
    router.back()
  }

  return (
    <div
      className={`${imageId ? "visible opacity-100" : "invisible opacity-0"} fixed inset-0 z-40 transition-all`}
    >
      <section className="h-screen w-full overflow-y-auto bg-black/70 py-8 backdrop-blur">
        <div className="relative mx-auto grid w-11/12 max-w-screen-xl grid-cols-1 gap-2 lg:w-10/12 lg:grid-cols-6">
          <div className="absolute -right-3 -top-3 md:-right-3.5 md:-top-3.5">
            <button
              onClick={handleCloseModal}
              className="block rounded-full border border-zinc-700 bg-white p-2 text-zinc-900"
              title="Kembali"
            >
              <X className="h-5 w-5 md:h-6 md:w-6" />
            </button>
          </div>
          <div className="col-span-1 min-h-64 rounded-xl bg-white p-2 shadow md:h-[80svh] lg:col-span-4 lg:h-[90vh]">
            {imageIsLoading ? (
              <Skeleton className="h-full w-full rounded-lg" />
            ) : (
              <Image
                width={700}
                height={700}
                priority
                className="h-full w-full rounded-lg object-contain"
                src={image?.src?.large2x || "/"}
                alt={image?.alt || "image"}
              />
            )}
          </div>
          <div className="col-span-1 h-fit space-y-2 rounded-xl bg-white px-4 pb-6 pt-4 shadow lg:col-span-2">
            <h2 className="text-zinc-600 md:text-lg">Tentang foto</h2>
            <div className="space-y-10">
              <div className="space-y-6">
                {imageIsLoading ? (
                  <Skeleton className="h-8 w-full rounded-lg" />
                ) : (
                  <h1 className="text-lg font-medium md:text-2xl">
                    {image?.alt || ""}
                  </h1>
                )}
                <div className="space-y-2">
                  <p className="text-sm text-zinc-500">Fotografer</p>
                  {imageIsLoading ? (
                    <Skeleton className="h-12 w-full rounded-full" />
                  ) : (
                    <div className="flex w-full items-center justify-between gap-x-4 rounded-full bg-zinc-50 p-1">
                      <div className="flex items-center gap-x-2 rounded-full bg-zinc-200 py-2 pe-3.5 ps-2.5 text-zinc-700 transition-opacity hover:opacity-90">
                        <CircleUserRound />
                        <h3 className="max-w-28 truncate md:max-w-full">
                          {image?.photographer}
                        </h3>
                      </div>
                      <Link
                        href={image?.photographer_url || "#"}
                        target="_blank"
                        className="rounded-full bg-zinc-200 p-2 text-zinc-700 transition-opacity hover:opacity-90"
                        title="Lihat profil"
                      >
                        <ArrowUpRight />
                      </Link>
                    </div>
                  )}
                </div>
              </div>
              <button
                onClick={download}
                disabled={isLoading || imageIsLoading}
                title="Download foto"
                className="w-full rounded-full bg-red-600 py-3 text-center text-white transition-opacity hover:opacity-90 disabled:opacity-90"
              >
                {isLoading ? (
                  <Loader className="mx-auto h-5 w-5 animate-spin-slow md:h-6 md:w-6" />
                ) : (
                  "Download"
                )}
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export const ModalLoading = () => {
  return (
    <div className="flex h-svh w-svw items-center justify-center bg-white">
      <Loader size={80} className="mx-auto animate-spin-slow text-red-600" />
    </div>
  )
}
