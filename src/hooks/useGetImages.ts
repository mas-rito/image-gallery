import { useEffect, useState } from "react"

import { createClient, Photo } from "pexels"

// Seharusnya di simpan di .env untuk lebih aman
// namun untuk mempermudahkan saat ibu/bapak menjalankan aplikasi ini
const PEXELS_API_KEY =
  "h1nBhUJKKQP94M6AZCXodzMRLFIuI7OA7DttYEciDZi1Q1JRCFXDHoc1"

export const useGetImages = () => {
  const [images, setImages] = useState<Photo[]>([])
  const [isLoading, setIsLoading] = useState<boolean>(true)

  useEffect(() => {
    async function getImages() {
      fetch(`https://api.pexels.com/v1/curated?per_page=28`, {
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
  }, [])

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
