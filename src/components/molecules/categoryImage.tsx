"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"

export const CategoryImage = () => {
  const pathname = usePathname()
  const categories = [
    "Sunset",
    "Forest",
    "Clouds",
    "City",
    "Mountains",
    "Street",
    "Winter",
    "Car",
    "Flower",
    "Night",
    "Cat",
    "Dog",
    "Bird",
    "Food",
    "Fruit",
    "Sea",
    "Hill",
    "Lake",
    "House",
    "Park",
    "People",
    "Sport",
    "Music",
    "Space",
    "Animal",
    "Tree",
    "Fashion",
    "Fish",
  ]
  return (
    <div className="scroll-bar container overflow-x-scroll py-2">
      <div className="flex w-max items-center gap-x-2">
        {categories.map((category) => (
          <Link
            href={`/search/${category}`}
            key={category}
            className={`${pathname === `/search/${category}` ? "bg-red-600 text-white" : "bg-zinc-200 text-zinc-600"} block rounded-full px-4 py-1.5 text-xs font-medium transition-opacity hover:opacity-85`}
          >
            {category}
          </Link>
        ))}
      </div>
    </div>
  )
}
