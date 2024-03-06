'use client'
import { GalleryTab } from '@/components/gallery/gallery-tab'
import { Image as ImageType } from '@/types'
import { Tab } from '@headlessui/react'
import Image from 'next/image'

type Props = {
  images: ImageType[]
}

export const Gallery = ({ images }: Props) => {
  //code
  return (
    <Tab.Group as="div" className="flex flex-col-reverse">
      <div className="mx-auto mt-6 hidden w-full max-w-3xl sm:block lg:max-w-none">
        <Tab.List className="grid grid-cols-4 gap-6">
          {images.map((image) => (
            <GalleryTab key={image.id} image={image} />
          ))}
        </Tab.List>
      </div>
      <Tab.Panels className="aspect-square w-full">
        {images.map((image) => (
          <Tab.Panel key={image.id}>
            <div className="aspect-square relative size-full sm:rounded-lg overflow-hidden">
              <Image fill src={image.url} alt="product" className="object-cover object-center" />
            </div>
          </Tab.Panel>
        ))}
      </Tab.Panels>
    </Tab.Group>
  )
}
