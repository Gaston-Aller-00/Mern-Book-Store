import React from 'react'
import BannerCards from '../Home/BannerCards'
import { Link } from 'react-router-dom'

const Banner = () => {
  return (
    <div className='px-4 lg:px-24 bg-teal-100 flex items-center'>
        <div className='flex w-full flex-col md:flex-row justify-between items-center gap-12 py-40'>
            {/*  left side */}
            <div className='md:w-1/2 space-y-8 h-full'>
                <h2 className='text-6xl font-bold leading-snug text-black'>Buy and Sell Your Books <span className='text-blue-700'>for the Best Prices</span></h2>
                <p className='md:w-4/5'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tempora velit aspernatur assumenda architecto facere, error, ducimus numquam autem a nesciunt cum hic, est officiis repellat nemo quidem dolorem dolore ut!m autem a nesciunt cum hic, est officiis repellat nemo quidem dolorem dolore ut!</p>
                <div>
                    {/* <input type="text" name='seatch' id='search' placeholder='Search a book' className='py-2 px-2 rounded-s-sm outline-none' /> */}
                    <Link to="/shop">
                    <button className='bg-blue-700 px-6 py-[9px] rounded text-white font-medium hover:bg-black transition-all duration-300'>Search Books</button>
                    </Link>
                    
                </div>
            </div>
            {/* right side */}
            <div><BannerCards/></div>
        </div>
        </div>
  )
}

export default Banner