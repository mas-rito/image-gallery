type Props = {
  className?: string
}
export const Skeleton = ({ className }: Props) => {
  return <div className={`${className} animate-pulse bg-zinc-200`}></div>
}
