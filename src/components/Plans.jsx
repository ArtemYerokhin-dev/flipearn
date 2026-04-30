import React from 'react'
import {PricingTable} from '@clerk/clerk-react'
const Plans = () => {
  return (
    <div className='max-w-2xl mx-auto z-20 my-20 msx-md:px-4'>
      <div className='text-center'>
        <h2 className='text-grau-600 text-4xl font-semibold'>Your Plan</h2>
        <p className='text-gray-500 text-sm max-w-md mx-auto'>Start fo free and  scale up as you grow. Find the perfect plan for your content cration needs.</p>
      </div>
      <div className='mt-14'>
         <PricingTable />
      </div>
    </div>
  )
}

export default Plans
