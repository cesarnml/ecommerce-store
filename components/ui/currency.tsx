'use client'

import { formatCurrency } from '@/lib/utils'
import { useState, useEffect } from 'react'

type Props = {
  value?: string | number
}

export const Currency = ({ value }: Props) => {
  const [isMounted, setIsMounted] = useState(false)

  useEffect(() => {
    setIsMounted(true)
  }, [])

  if (!isMounted) return null

  return <div className="font-semibold">{formatCurrency(Number(value))}</div>
}
