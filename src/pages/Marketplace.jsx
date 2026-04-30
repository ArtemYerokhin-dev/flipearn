import { ArrowLeftIcon, FilterIcon } from 'lucide-react'
import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import ListingCard from '../components/ListingCard'
import FilterSidebar from '../components/FilterSidebar'

const Marketplace = () => {


  const [showFilterPhone, setShowFilterPhone] = useState(false)
  const navigate = useNavigate()
  const[filter, setFilter] = useState({
    platform: null,
    maxPrice: 100000,
    minFollowers: 0,
    niche: null,
    verified: false,
    monetized: false
  })
  const listings = useSelector((state) => state.listing.listings) || [];
  const filteredListings = listings.filter((listing)=>{
    if(filter.platform && filter.platform.length > 0){
      if(!filter.platform.includes(listing.platform)) return false
    }
    if(filter.maxPrice){
      if(listing.price > filter.maxPrice) return false
    }
    if(filter.minFollowers){
      if(listing.followers_count > filter.minFollowers) return false
    }
    if(filter.niche && filter.niche.length){
      if(!filter.niche.includes(listing.niche))  return false
    }
    if(filter.verified && listing.verified !== filter.verified) return false
    if(filter.monetized && listing.monetized !== filter.monetized) return false
    return true
  })
  return (
    <div className='px-6 md:px-16 lg:px-24 xl:px-32'>
      <div className='flex items-center justify-between text-slate-500'>
        <button className='flex items-center gap-2 py-5' onClick={()=> {navigate('/'); scrollTo(0,0)}}>
          <ArrowLeftIcon  className='size-4'/>
          Back to Home
        </button>
        <button onClick={()=> setShowFilterPhone(true) } className='flex sm:hidden items-center gap-2 py-5'>
          <FilterIcon className='size-4'/>
          Filters
        </button>
      </div>
      <div className='relative flex items-start justify-between gap-8 pb-8'>
        <FilterSidebar setFilter={setFilter} filter={filter} setShowFilterPhone={setShowFilterPhone} showFilterPhone={showFilterPhone}/>
        <div className='flex-1 grid xl:gridcols-2 gap-4'>
          {filteredListings.sort((a,b)=> a.featured ? -1 : b.featured ? 1 : 0).map((listing, index)=>(
            <ListingCard listing={listing} key={index}/>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Marketplace
