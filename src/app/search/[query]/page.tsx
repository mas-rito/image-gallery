"use client"

import { useEffect, useState } from "react"

import { Photo } from "pexels"

import { useSearchImages } from "@/hooks/useGetImages"

import { GalleriesLayout } from "@/components/organisms/galleriesLayout"

type Props = {
  params: { query: string }
}

export default function SearchPage({ params }: Props) {
  const [data, setData] = useState<Photo[]>([])
  const [inView, setInView] = useState<boolean>(false)
  const [isSetDataLoading, setIsSetDataLoading] = useState<boolean>(true)

  const { images } = useSearchImages({
    fetchAgain: inView,
    query: params.query,
  })

  useEffect(() => {
    setData((prevData) => [...prevData, ...images])
    setIsSetDataLoading(false)
  }, [images])

  const decodedQuery = decodeURIComponent(params.query)

  return (
    <div className="space-y-4">
      <div className="container border-b border-zinc-200 pb-3">
        <h1 className="text-3xl font-medium">
          Hasil Pencarian dari &quot;{decodedQuery}&quot;
        </h1>
      </div>
      <GalleriesLayout
        isLoading={isSetDataLoading}
        isDataEmpty={data.length < 0}
        data={data}
        setInView={setInView}
      />
    </div>
  )
}
