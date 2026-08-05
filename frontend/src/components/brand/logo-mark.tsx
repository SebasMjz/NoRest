import { cn } from '@/lib/utils'

interface LogoMarkProps {
  className?: string
  imageClassName?: string
}

export function LogoMark({ className, imageClassName }: LogoMarkProps) {
  return (
    <span className={cn('inline-flex bg-white p-2', className)}>
      <img
        src="/assets/norest-logo.png"
        alt="NoRest Solutions"
        width={160}
        height={72}
        className={cn('h-12 w-auto object-contain', imageClassName)}
      />
    </span>
  )
}
