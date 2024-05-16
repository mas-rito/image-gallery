"use client"

import Image from "next/image"

import { Photo } from "pexels"

import { useGetImages } from "@/hooks/useGetImages"

import { LoaderImage } from "../molecules/loaderImage"

export const GalleriesLayout = () => {
  const { images, isLoading } = useGetImages()

  let splitArrays: Photo[][] = []

  for (let i = 0; i < images.length; i += images.length / 4) {
    splitArrays.push(images.slice(i, i + images.length / 4))
  }

  return (
    <section className="container mt-[5.5rem]">
      {isLoading ? (
        <div className="mt-64">
          <LoaderImage />
        </div>
      ) : (
        <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
          {splitArrays.length > 0 ? (
            splitArrays.map((splitArray, index) => (
              <div key={index} className="grid h-fit gap-4">
                {splitArray.map((image) => (
                  <Image
                    key={image.id}
                    width={700}
                    height={700}
                    loading="lazy"
                    className="max-w-full rounded-lg"
                    src={image.src.original}
                    alt={image.alt || "image"}
                  />
                ))}
              </div>
            ))
          ) : (
            <div className="h-screen">
              <div className=""></div>
            </div>
          )}
        </div>
      )}
    </section>
  )
}
