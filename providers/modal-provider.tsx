'use client'

import { PreviewModal } from '@/components/preview-modal'
import { useState, useEffect } from 'react'

type Props = {}

export const ModalProvider = ({}: Props) => {
  const [isMounted, setIsMounted] = useState(false)

  useEffect(() => {
    setIsMounted(true)
  }, [])

  if (!isMounted) return null

  return (
    <>
      <PreviewModal />
    </>
  )
}
