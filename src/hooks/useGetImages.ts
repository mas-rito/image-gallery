import { useEffect, useState } from "react"

import { Photo } from "pexels"

const headers: Record<string, string> = {
  Authorization: process.env.PEXELS_API_KEY as string,
}
type UseGetImagesParams = {
  fetchAgain: boolean
}

export const useGetImages = ({ fetchAgain }: UseGetImagesParams) => {
  const [images, setImages] = useState<Photo[]>([])
  const [page, setPage] = useState<number>(1)

  useEffect(() => {
    async function getImages() {
      const nextPage = page + 1
      setPage(nextPage)
      const url = `https://api.pexels.com/v1/curated?per_page=28&page=${page}`

      fetch(url, {
        headers: headers,
      })
        .then((response) => response.json())
        .then((data) => {
          setImages(data.photos)
        })
    }

    getImages()
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
    async function getImage() {
      setIsLoading(true)
      fetch(`https://api.pexels.com/v1/photos/${imageId}`, {
        headers: headers,
      })
        .then((response) => response.json())
        .then((data) => {
          setImage(data)
          setIsLoading(false)
        })
    }

    getImage()
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

      const url = `https://api.pexels.com/v1/search?query=${query}&per_page=28&page=${page}`

      fetch(url, {
        headers: headers,
      })
        .then((response) => response.json())
        .then((data) => {
          setImages(data.photos)
        })
    }

    getImages()
  }, [fetchAgain, query])

  return { images }
}
