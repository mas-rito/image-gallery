"use server"

import { Photo } from "pexels"

export const getImages = async (page: number): Promise<Photo[]> => {
  const response = await fetch(
    `https://api.pexels.com/v1/curated?per_page=28&page=${page}`,
    {
      headers: {
        Authorization: process.env.PEXELS_API_KEY as string,
      },
    }
  )
  const data = await response.json()
  return data.photos
}

export const getSingleImage = async (id: string): Promise<Photo> => {
  const response = await fetch(`https://api.pexels.com/v1/photos/${id}`, {
    headers: {
      Authorization: process.env.PEXELS_API_KEY as string,
    },
  })
  const data = await response.json()
  return data
}

export const searchImages = async (
  query: string,
  page: number
): Promise<Photo[]> => {
  const response = await fetch(
    `https://api.pexels.com/v1/search?query=${query}&per_page=28&page=${page}`,
    {
      headers: {
        Authorization: process.env.PEXELS_API_KEY as string,
      },
    }
  )
  const data = await response.json()
  return data.photos
}
