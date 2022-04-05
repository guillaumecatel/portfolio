import React from 'react'
import type { NextPage } from 'next'

import { Hero } from '@/components/hero'

const Index: NextPage = () => {
  return (
    <div className='h-full'>
      <div className='p-6 h-full'>
        <Hero />
      </div>
    </div>
  )
}

export default Index
