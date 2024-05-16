import { Search } from "lucide-react"

import { Logo } from "../atoms/logo"

export const Navbar = () => {
  return (
    <nav className="fixed top-0 z-30 w-full bg-white py-2 shadow-sm">
      <div className="container flex items-center justify-between gap-x-5 md:gap-x-0">
        <div title="Image gallery">
          <Logo />
        </div>
        <div className="relative h-full w-full md:w-1/2 lg:w-1/3">
          <input
            type="text"
            placeholder="Cari..."
            title="Cari gambar"
            className="h-full w-full rounded-full py-2 pe-11 ps-4 text-zinc-700 outline outline-1 outline-zinc-200"
          />
          <button className="absolute bottom-0 right-0 top-0 rounded-full bg-red-600 p-2 text-white">
            <Search />
          </button>
        </div>
      </div>
    </nav>
  )
}
