"use client"

import { useEffect, useState } from "react"

import { Photo } from "pexels"

import { useGetImages } from "@/hooks/useGetImages"

import { GalleriesLayout } from "@/components/organisms/galleriesLayout"

export default function Home() {
  const [data, setData] = useState<Photo[]>([])
  const [inView, setInView] = useState<boolean>(false)

  const { images, isLoading } = useGetImages({ fetchAgain: inView })

  useEffect(() => {
    setData((prevData) => [...prevData, ...images])
  }, [images])
  return (
    <>
      <GalleriesLayout
        isLoading={isLoading}
        data={data}
        setInView={setInView}
      />
    </>
  )
}
