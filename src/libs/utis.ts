export async function downloadImage(url: string, filename: string) {
  const response = await fetch(url)
  const blob = await response.blob()
  const fileURL = URL.createObjectURL(blob)

  const link = document.createElement("a")
  link.href = fileURL
  link.download = filename
  link.click()

  URL.revokeObjectURL(fileURL)
}
