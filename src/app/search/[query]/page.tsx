import { GalleriesLayout } from "@/components/organisms/galleriesLayout"

type Props = {
  params: { query: string }
}

export default function SearchPage({ params }: Props) {
  const query = params.query
  const decodedQuery = decodeURIComponent(query)

  return (
    <div className="space-y-4">
      <div className="container border-b border-zinc-200 pb-3">
        <h1 className="text-3xl font-medium">
          Hasil Pencarian dari &quot;{decodedQuery}&quot;
        </h1>
      </div>
      <GalleriesLayout query={query} />
    </div>
  )
}
