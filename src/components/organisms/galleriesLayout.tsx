"use client"

import { Photo } from "pexels"

import { useGetImages } from "@/hooks/useGetImages"

import { CardGalery } from "../molecules/cardGalery"
import { LoaderImage } from "../molecules/loaderImage"

export const GalleriesLayout = () => {
  const { images, isLoading } = useGetImages()
  let splitArrays: Photo[][] = []

  for (let i = 0; i < images.length; i += images.length / 4) {
    splitArrays.push(images.slice(i, i + images.length / 4))
  }

  console.log(splitArrays)

  return (
    <section className="container mt-[5.5rem]">
      {isLoading ? (
        <div className="mt-64">
          <LoaderImage />
        </div>
      ) : (
        <div className="grid grid-cols-2 gap-2 md:grid-cols-4 md:gap-4">
          {splitArrays.length > 0 ? (
            splitArrays.map((splitArray, index) => (
              <div key={index} className="grid h-fit gap-2 md:gap-4">
                {splitArray.map((image) => (
                  <CardGalery key={image.id} image={image} />
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
