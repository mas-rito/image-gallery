import { useState } from "react"

import { Photo } from "pexels"

export const useModal = () => {
  const [isShow, setIsShow] = useState(false)
  const [dataModal, setDataModal] = useState<Photo>({} as Photo)

  const showModal = ({ data }: { data: Photo }) => {
    setDataModal(data)
    setIsShow(true)
  }

  const closeModal = () => {
    setDataModal({} as Photo)
    setIsShow(false)
  }

  return { isShow, dataModal, showModal, closeModal }
}
