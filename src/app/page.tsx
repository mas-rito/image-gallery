"use client"

import { useEffect, useState } from "react"

import { Photo } from "pexels"

import { useGetImages } from "@/hooks/useGetImages"

import { GalleriesLayout } from "@/components/organisms/galleriesLayout"

export default function Home() {
  return <GalleriesLayout />
}
