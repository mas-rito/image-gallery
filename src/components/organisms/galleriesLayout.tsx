"use client"

import { useEffect, useState } from "react"

import { Loader } from "lucide-react"
import { Photo } from "pexels"
import { useInView } from "react-intersection-observer"
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry"

import { useGetImages } from "@/hooks/useGetImages"

import { EmptyData } from "../atoms/emptydata"
import { LoaderImage } from "../atoms/loaderImage"
import { CardGallery } from "../molecules/cardGallery"

export const GalleriesLayout = () => {
  const [data, setData] = useState<Photo[]>([])
  const { ref, inView } = useInView()
  const { images, isLoading } = useGetImages({ fetchAgain: inView })

  useEffect(() => {
    setData([...data, ...images])
  }, [images])

  return (
    <>
      <section className="container mt-[5.5rem]">
        {isLoading ? (
          <div className="mt-64">
            <LoaderImage />
          </div>
        ) : (
          <div className="">
            {data.length > 0 ? (
              <ResponsiveMasonry
                columnsCountBreakPoints={{
                  350: 2,
                  750: 3,
                  900: 4,
                  1200: 5,
                }}
              >
                <Masonry gutter="1rem">
                  {data.map((image) => (
                    <CardGallery key={image.id} image={image} />
                  ))}
                </Masonry>
              </ResponsiveMasonry>
            ) : (
              <EmptyData />
            )}
          </div>
        )}

        {isLoading === false && data.length > 0 && (
          <div ref={ref} className="bg -mt-48 flex justify-center pb-8 pt-44">
            <Loader className="animate-spin-slow text-red-600" />
          </div>
        )}
      </section>
    </>
  )
}
