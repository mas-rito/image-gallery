import { useEffect, useState } from "react"

import { createClient, Photo, Photos } from "pexels"

const client = createClient(
  "h1nBhUJKKQP94M6AZCXodzMRLFIuI7OA7DttYEciDZi1Q1JRCFXDHoc1"
)

export const useGetImages = () => {
  const [images, setImages] = useState<Photo[]>([])
  const [isLoading, setIsLoading] = useState<boolean>(false)
  useEffect(() => {
    async function getImages() {
      setIsLoading(true)
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

export const useGetSigleImage = ({ imageId }: { imageId: string }) => {
  const [image, setImage] = useState<Photo>({} as Photo)
  const [isLoading, setIsLoading] = useState<boolean>(false)

  useEffect(() => {
    async function getImage() {
      setIsLoading(true)
      fetch(`https://api.pexels.com/v1/photos/${imageId}`, {
        headers: {
          Authorization:
            "h1nBhUJKKQP94M6AZCXodzMRLFIuI7OA7DttYEciDZi1Q1JRCFXDHoc1",
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
