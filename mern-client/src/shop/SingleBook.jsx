import React from 'react'
import { useLoaderData } from 'react-router-dom'
//click en la card y se muestra la info del book
const SingleBook = () => {
    const {_id,imageURL,bookTitle} = useLoaderData();
  return (
    
   <div className='mt-28 px-4 lg:px-24'>
    <img src={imageURL} alt="coverBook" className='h-96' />
    <h2>{bookTitle}</h2>
   </div>
  )
}

export default SingleBook