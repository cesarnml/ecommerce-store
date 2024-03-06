'use client'
import { cn } from '@/lib/utils'
import { Image as ImageType } from '@/types'
import { Tab } from '@headlessui/react'
import Image from 'next/image'
type Props = {
  image: ImageType
}

export const GalleryTab = ({ image }: Props) => {
  //code
  return (
    <Tab className="relative flex aspect-square cursor-pointer items-center justify-center rounded-md bg-white">
      {({ selected }) => (
        <div>
          <span className="absolute size-full aspect-square inset-0 overflow-hidden rounded-md">
            <Image fill src={image.url} alt="product" className="object-cover object-center" />
          </span>
          <span
            className={cn(
              'absolute inset-0 rounded-md ring-2 ring-offset-2',
              selected ? 'ring-black' : 'ring-transparent',
            )}
          />
        </div>
      )}
    </Tab>
  )
}
