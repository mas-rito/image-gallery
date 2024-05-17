import { Loader } from "lucide-react"

export const LoaderImage = () => {
  return (
    <div className="mt-40">
      <div className="flex h-full w-full items-center justify-center">
        <div className="space-y-2">
          <Loader
            size={80}
            className="mx-auto animate-spin-slow text-red-600"
          />
          <h2>Sedang memuat...</h2>
        </div>
      </div>
    </div>
  )
}
