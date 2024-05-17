"use client"

import { useEffect } from "react"

import { Loader } from "lucide-react"
import { Photo } from "pexels"
import { useInView } from "react-intersection-observer"
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry"

import { EmptyData } from "../atoms/emptydata"
import { LoaderImage } from "../atoms/loaderImage"
import { CardGallery } from "../molecules/cardGallery"

type Props = {
  isLoading: boolean
  data: Photo[]
  setInView: React.Dispatch<React.SetStateAction<boolean>>
}

export const GalleriesLayout = ({ isLoading, data, setInView }: Props) => {
  const { ref, inView } = useInView()

  useEffect(() => {
    if (inView) setInView(inView)
  }, [inView])

  return (
    <>
      <section className="container">
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
                  {data.map((image, index) => (
                    <CardGallery key={index} image={image} />
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
