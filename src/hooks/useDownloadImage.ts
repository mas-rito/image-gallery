import { useState } from "react"

import { downloadImage } from "@/libs/utis"

type Props = {
  url: string
  filename: string
}

export const useDownloadImage = ({ url, filename }: Props) => {
  const [isLoading, setIsLoading] = useState<boolean>(false)

  const download = async () => {
    setIsLoading(true)
    await downloadImage(url, filename)
    setIsLoading(false)
  }

  return { download, isLoading }
}
