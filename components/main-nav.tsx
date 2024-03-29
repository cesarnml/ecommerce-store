'use client'

import { cn } from '@/lib/utils'
import { Category } from '@/types'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

type Props = {
  data: Category[]
}

export const MainNav = ({ data }: Props) => {
  const pathname = usePathname()
  const routes = data.map((route) => ({
    href: `/categories/${route.id}`,
    label: route.name,
    active: pathname === `/categories/${route.id}`,
  }))
  return (
    <nav className="mx-6 items-center space-x-4 lg:space-x-6">
      {routes.map((route) => (
        <Link
          key={route.href}
          href={route.href}
          className={cn(
            'text-sm font-medium transition-colors hover:text-black',
            route.active ? 'text-black' : 'text-neutral-500',
          )}
        >
          {route.label}
        </Link>
      ))}
    </nav>
  )
}
