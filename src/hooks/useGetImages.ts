import { useEffect, useState } from "react"

import {
  getImages,
  getSingleImage,
  searchImages,
} from "@/servers/actions/image"
import { Photo } from "pexels"

type UseGetImagesParams = {
  fetchAgain: boolean
}

export const useGetImages = ({ fetchAgain }: UseGetImagesParams) => {
  const [images, setImages] = useState<Photo[]>([])
  const [page, setPage] = useState<number>(1)

  useEffect(() => {
    async function get() {
      const nextPage = page + 1
      setPage(nextPage)
      getImages(nextPage).then((data) => setImages(data))
    }

    get()
  }, [fetchAgain])

  return { images }
}

type UseGetSigleImageParams = {
  imageId: string
}

export const useGetSigleImage = ({ imageId }: UseGetSigleImageParams) => {
  const [image, setImage] = useState<Photo>({} as Photo)
  const [isLoading, setIsLoading] = useState<boolean>(true)

  useEffect(() => {
    async function get() {
      setIsLoading(true)
      getSingleImage(imageId).then((data) => {
        setImage(data)
        setIsLoading(false)
      })
    }

    get()
  }, [imageId])

  return { image, isLoading }
}

type UseSearchImagesParams = {
  fetchAgain: boolean
  query: string
}

export const useSearchImages = ({
  fetchAgain,
  query,
}: UseSearchImagesParams) => {
  const [images, setImages] = useState<Photo[]>([])
  const [page, setPage] = useState<number>(1)

  useEffect(() => {
    async function getImages() {
      const nextPage = page + 1
      setPage(nextPage)

      searchImages(query, nextPage).then((data) => {
        setImages(data)
      })
    }

    getImages()
  }, [fetchAgain, query])

  return { images }
}
