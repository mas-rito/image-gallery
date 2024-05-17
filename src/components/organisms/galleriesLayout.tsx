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
  isDataEmpty: boolean
}

export const GalleriesLayout = ({
  isLoading,
  data,
  setInView,
  isDataEmpty,
}: Props) => {
  const { ref, inView } = useInView()

  useEffect(() => {
    setInView(inView)
  }, [inView])

  return (
    <>
      <section className="container">
        {isLoading ? (
          <LoaderImage />
        ) : (
          <div className="">
            {isDataEmpty ? (
              <EmptyData />
            ) : (
              <>
                <div className="min-h-screen">
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
                </div>

                <div
                  ref={ref}
                  className="bg -mt-48 flex justify-center pb-8 pt-52 lg:pt-44"
                >
                  <Loader className="animate-spin-slow text-red-600" />
                </div>
              </>
            )}
          </div>
        )}
      </section>
    </>
  )
}
