import { useEffect, useState } from "react"

import { Photo } from "pexels"

// Seharusnya di simpan di .env untuk lebih aman
// namun untuk mempermudahkan saat ibu/bapak menjalankan aplikasi ini
const PEXELS_API_KEY =
  "2l8p5PzPE6rfnRX1u6vU6icUiWIx2xVv4g34sbmbSYJX87AVOQ5R2zFI"

type UseGetImagesParams = {
  fetchAgain: boolean
}

export const useGetImages = ({ fetchAgain }: UseGetImagesParams) => {
  const [images, setImages] = useState<Photo[]>([])
  const [isLoading, setIsLoading] = useState<boolean>(true)
  const [page, setPage] = useState<number>(1)

  useEffect(() => {
    async function getImages() {
      const nextPage = page + 1
      setPage(nextPage)
      const url = `https://api.pexels.com/v1/curated?per_page=28&page=${page}`

      fetch(url, {
        headers: {
          Authorization: PEXELS_API_KEY,
        },
      })
        .then((response) => response.json())
        .then((data) => {
          setImages(data.photos)
          setIsLoading(false)
        })
    }

    getImages()
  }, [fetchAgain])

  return { images, isLoading }
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
        headers: {
          Authorization: PEXELS_API_KEY,
        },
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
  const [isLoading, setIsLoading] = useState<boolean>(true)
  const [page, setPage] = useState<number>(1)

  useEffect(() => {
    async function getImages() {
      const nextPage = page + 1
      setPage(nextPage)

      const url = `https://api.pexels.com/v1/search?query=${query}&per_page=28&page=${page}`

      fetch(url, {
        headers: {
          Authorization: PEXELS_API_KEY,
        },
      })
        .then((response) => response.json())
        .then((data) => {
          setImages(data.photos)
          setIsLoading(false)
        })
    }

    getImages()
  }, [fetchAgain, query])

  return { images, isLoading }
}
