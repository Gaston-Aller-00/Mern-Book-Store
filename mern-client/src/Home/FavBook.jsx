import React from 'react'
import FavBookImg from "../assets/favoritebook.jpg"
import { Link } from 'react-router-dom'
const FavBook = () => {
  return (
    <div className='px-4 lg:p-24 my-20 flex flex-col md:flex-row justify-between items-center gap-10'>
        {/* banner de la derecha con todos los covers */}
        <div className='md:w-1/2'>
            <img src={FavBookImg}  alt='favoriteBook' className='rounded md:w-10/12'/>
        </div>
        <div className='md:w-1/2 space-y-6'>
            <h2 className='text-5xl font-bold my-5 md:w-3/4 leading-snug'>Find Your Favorite <span className='text-blue-700'>Book Here!</span></h2>
            <p className='mb-10 text-lg md:w-5/6'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Id, quam quisquam repellendus impedit dolor, a facilis provident eaque rerum deleniti non. Provident voluptates dolores harum eaque facere, unde rem animi.</p>
            {/* stats de la page */}
                <div className='flex flex-col sm:flex-row justify-between gap-6 md:w-3/4 my-14'>
                    <div>
                        <h3 className='text-3xl font-bold'>800+</h3>
                        <p className='text-base'>Book Listing</p>
                    </div>
                    <div>
                        <h3 className='text-3xl font-bold'>550+</h3>
                        <p className='text-base'>Register Users</p>
                    </div>
                    <div>
                        <h3 className='text-3xl font-bold'>1200+</h3>
                        <p className='text-base'>PDF Download</p>
                    </div>
                </div>
                <Link to="/shop" className='block mt-8'><button className='btnBlue'>Explore More</button></Link>
        </div>
    </div>
  )
}

export default FavBook