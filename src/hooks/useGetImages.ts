import { useEffect, useState } from "react"

import { Photo } from "pexels"

// Seharusnya di simpan di .env untuk lebih aman
// namun untuk mempermudahkan saat ibu/bapak menjalankan aplikasi ini
const PEXELS_API_KEY =
  "h1nBhUJKKQP94M6AZCXodzMRLFIuI7OA7DttYEciDZi1Q1JRCFXDHoc1"

export const useGetImages = ({ fetchAgain }: { fetchAgain: boolean }) => {
  const [images, setImages] = useState<Photo[]>([])
  const [isLoading, setIsLoading] = useState<boolean>(true)
  const [page, setPage] = useState<number>(1)

  useEffect(() => {
    async function getImages() {
      const nextPage = page + 1
      setPage(nextPage)
      fetch(`https://api.pexels.com/v1/curated?per_page=28&page=${page}`, {
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

  console.log(page)

  return { images, isLoading }
}

export const useGetSigleImage = ({ imageId }: { imageId: string }) => {
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
