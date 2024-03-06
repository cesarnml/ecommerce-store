import { create } from 'zustand'
import { createJSONStorage, persist } from 'zustand/middleware'

import { Product } from '@/types'
import toast from 'react-hot-toast'

type Store = {
  items: Product[]
  addItem: (data: Product) => void
  removeItem: (id: string) => void
  removeAll: () => void
}

export const useCart = create(
  persist<Store>(
    (set, get) => ({
      items: [],
      addItem: (data: Product) => {
        const currentItems = get().items
        const existingItem = currentItems.find((item) => item.id === data.id)

        if (existingItem) {
          return toast('ℹ️ Item already in cart')
        }

        set({ items: [...currentItems, data] })
        toast.success('Item added to cart')
      },
      removeItem: (id: string) => {
        const currentItems = get().items
        const newItems = currentItems.filter((item) => item.id !== id)
        set({ items: newItems })
        toast.success('Item removed from cart')
      },
      removeAll: () => set({ items: [] }),
    }),
    {
      name: 'cart-storage',
      storage: createJSONStorage(() => localStorage),
    },
  ),
)
