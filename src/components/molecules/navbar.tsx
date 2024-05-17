"use client"

import Link from "next/link"
import { useRouter } from "next/navigation"

import { Search } from "lucide-react"

import { Logo } from "../atoms/logo"

export const Navbar = () => {
  const router = useRouter()
  const handleSearch = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const formData = new FormData(e.currentTarget)
    const search = formData.get("search")

    if (search) {
      router.push(`/search/${search}`)
    }
  }
  return (
    <nav className="fixed top-0 z-30 w-full bg-white py-2 shadow-sm">
      <div className="container flex items-center justify-between gap-x-5 md:gap-x-0">
        <Link
          href="/"
          title="Image gallery"
          className="flex items-center gap-x-3 transition-opacity hover:opacity-90"
        >
          <Logo />
          <h1 className="hidden text-2xl font-semibold text-zinc-800 md:block">
            Image <span className="text-red-600">gallery</span>
          </h1>
        </Link>
        <form
          onSubmit={handleSearch}
          className="relative h-full w-full md:w-1/2 lg:w-1/3"
        >
          <input
            type="text"
            placeholder="Cari..."
            title="Cari gambar"
            name="search"
            className="h-full w-full rounded-full py-2 pe-11 ps-4 text-zinc-700 outline outline-1 outline-zinc-200"
          />
          <button
            type="submit"
            className="absolute bottom-0 right-0 top-0 rounded-full bg-red-600 p-2 text-white"
          >
            <Search />
          </button>
        </form>
      </div>
    </nav>
  )
}
