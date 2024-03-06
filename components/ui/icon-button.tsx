import { cn } from '@/lib/utils'
import { MouseEventHandler, ReactElement } from 'react'

type Props = {
  onClick?: MouseEventHandler<HTMLButtonElement> | undefined
  icon: ReactElement
  className?: string
}

export const IconButton = ({ onClick, icon, className }: Props) => {
  //code
  return (
    <button
      onClick={onClick}
      className={cn(
        'rounded-full flex items-center justify-center bg-white border shadow-md p-2 hover:scale-110 transition',
        className,
      )}
    >
      {icon}
    </button>
  )
}
