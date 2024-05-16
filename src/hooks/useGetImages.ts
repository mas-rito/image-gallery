import { useEffect, useState } from "react"

import { createClient, Photo, Photos } from "pexels"

export const useGetImages = () => {
  const [images, setImages] = useState<Photo[]>([])
  const [isLoading, setIsLoading] = useState<boolean>(false)
  useEffect(() => {
    async function getImages() {
      setIsLoading(true)
      const client = createClient(
        "h1nBhUJKKQP94M6AZCXodzMRLFIuI7OA7DttYEciDZi1Q1JRCFXDHoc1"
      )
      const res = await client.photos.curated({
        per_page: 24,
      })

      const images = (res as Photos).photos

      return images
    }

    getImages().then((images) => setImages(images))
    setIsLoading(false)
  }, [])

  return { images, isLoading }
}
