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

  const { images, isLoading } = useSearchImages({
    fetchAgain: inView,
    query: params.query,
  })

  useEffect(() => {
    setData((prevData) => [...prevData, ...images])
  }, [images])
  return (
    <div className="space-y-4">
      <div className="container border-b border-zinc-200 pb-3">
        <h1 className="text-3xl font-medium">
          Hasil Pencarian dari &quot;{params.query}&quot;
        </h1>
        {/* <p className="text-zinc-500">&quot;{params.query} &quot;</p> */}
      </div>
      <GalleriesLayout
        isLoading={isLoading}
        data={data}
        setInView={setInView}
      />
    </div>
  )
}
