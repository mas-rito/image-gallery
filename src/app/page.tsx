"use client"

import { useEffect, useState } from "react"

import { Photo } from "pexels"

import { useGetImages } from "@/hooks/useGetImages"

import { GalleriesLayout } from "@/components/organisms/galleriesLayout"

export default function Home() {
  const [data, setData] = useState<Photo[]>([])
  const [inView, setInView] = useState<boolean>(false)
  const [isSetDataLoading, setIsSetDataLoading] = useState<boolean>(true)

  const { images } = useGetImages({ fetchAgain: inView })

  useEffect(() => {
    setData((prevData) => [...prevData, ...images])
    setIsSetDataLoading(false)
  }, [images])

  return (
    <>
      <GalleriesLayout
        isLoading={isSetDataLoading}
        isDataEmpty={data.length < 0}
        data={data}
        setInView={setInView}
      />
    </>
  )
}
