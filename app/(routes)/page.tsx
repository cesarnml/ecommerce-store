import getBillboard from '@/actions/get-billboard'
import getProducts from '@/actions/get-products'
import { Billboard } from '@/components/billboard'
import { ProductList } from '@/components/product-list'
import { Container } from '@/components/ui/container'
import { ReactNode } from 'react'

export const revalidate = 0

export default async function HomePage() {
  const products = await getProducts({ isFeatured: true })
  const billboard = await getBillboard('6fca7e17-35ec-46f4-9c30-7d08ff6e25b1')
  return (
    <Container>
      <div className="scale-y-10 pb-10">
        <Billboard data={billboard} />
        <div className="flex flex-col gap-y-8 px-4 sm:px-6 lg:px-8">
          <ProductList title="Featured Products" items={products} />
        </div>
      </div>
    </Container>
  )
}
