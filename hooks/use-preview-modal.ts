import { create } from 'zustand'

import { Product } from '@/types'

type Store = {
  isOpen: boolean
  data?: Product
  onOpen: (data: Product) => void
  onClose: () => void
}

export const usePreviewModal = create<Store>((set) => ({
  isOpen: false,
  onOpen: (data) => set({ isOpen: true, data }),
  onClose: () => set({ isOpen: false }),
}))
