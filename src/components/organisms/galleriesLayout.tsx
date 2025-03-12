"use client"

import { getImages } from "@/servers/actions/image"
import { useInfiniteQuery, useQuery } from "@tanstack/react-query"
import { Loader } from "lucide-react"
import { Photo } from "pexels"
import { useInView } from "react-intersection-observer"
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry"

import { EmptyData } from "../atoms/emptydata"
import { LoaderImage } from "../atoms/loaderImage"
import { CardGallery } from "../molecules/cardGallery"

export const GalleriesLayout = () => {
  const { ref } = useInView({
    threshold: 0,
    onChange(inView) {
      if (inView) {
        fetchNextPage()
      }
    },
  })

  const { data, fetchNextPage, isLoading } = useInfiniteQuery({
    queryKey: ["images"],
    queryFn: async ({ pageParam = 0 }) => {
      const response: Photo[] = await getImages(pageParam)
      return response
    },
    initialPageParam: 0,
    getNextPageParam: (lastPage, allPages, lastPageParam) => {
      return lastPageParam + 1
    },
  })

  return (
    <>
      <section className="container">
        {isLoading ? (
          <LoaderImage />
        ) : (
          <div className="">
            {!data ? (
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
                      {data.pages.flatMap((page) =>
                        page.map((image) => (
                          <CardGallery key={image.id} image={image} />
                        ))
                      )}
                    </Masonry>
                  </ResponsiveMasonry>
                </div>

                <div
                  ref={ref}
                  className="-mt-36 flex justify-center pb-8 pt-52 lg:pt-48"
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
