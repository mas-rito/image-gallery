"use client"

import { useGetImages } from "@/hooks/useGetImages"

import { EmptyData } from "../atoms/emptydata"
import { LoaderImage } from "../atoms/loaderImage"
import { CardGallery } from "../molecules/cardGallery"

export const GalleriesLayout = () => {
  const { images, isLoading } = useGetImages()

  return (
    <>
      <section className="container mt-[5.5rem]">
        {isLoading ? (
          <div className="mt-64">
            <LoaderImage />
          </div>
        ) : (
          <div className="">
            {images.length > 0 ? (
              <div className="mb-10 w-full columns-2 space-y-4 md:columns-3 lg:columns-4 xl:columns-5">
                {images.map((image) => (
                  <CardGallery key={image.id} image={image} />
                ))}
              </div>
            ) : (
              <EmptyData />
            )}
          </div>
        )}
      </section>
    </>
  )
}
