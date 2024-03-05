import { Category } from '@/types'

const URL = `${process.env.NEXT_PUBLIC_API_URL}/categories/`

const getCategories = async (): Promise<Category[]> => {
  const res = await fetch(URL, { cache: 'no-store' })
  const data = await res.json()
  return data
}

export default getCategories
