"use client"

import { useGetImages } from "@/hooks/useGetImages"

import { CardGallery } from "../molecules/cardGallery"
import { LoaderImage } from "../molecules/loaderImage"

export const GalleriesLayout = () => {
  const { images, isLoading } = useGetImages()

  return (
    <>
      <section className="container mt-[5.5rem]">
        {isLoading ? (
          <div className="mt-64">
            <LoaderImage />
          </div>
        ) : images.length > 0 ? (
          <div className="mb-10 w-full columns-2 space-y-4 md:columns-3 lg:columns-4 xl:columns-5">
            {images.map((image) => (
              <CardGallery key={image.id} image={image} />
            ))}
          </div>
        ) : (
          <div className="h-screen">
            <div className=""></div>
          </div>
        )}
      </section>
    </>
  )
}
