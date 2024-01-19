import React, { useEffect, useState } from "react";
import { Card } from "flowbite-react";
import { Link, useLoaderData } from "react-router-dom";
//cards en la seccion shop
const Shop = () => {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/all-books")
      .then((res) => res.json())
      .then((data) => setBooks(data));
  }, []);

  return (
    
    <div className="cursor-pointer mt-28 px-4 lg:px-24">
      <h2 className="text-5xl font-bold text-center">All Books are here</h2>
  
      <div className="grid gap-8 my-12 lg:grid-cols-4 sm:grid-cols-2 md:grid-col-3 grid-cols-1">
        {books.map((book) => (
          <Card key={book._id} className="card">
            <img src={book.imageURL} alt="cardBook" className="" />
            <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              {book.bookTitle}
            </h5>
            {/* hidden desc despues de la 4 linea */}
            <p className="font-normal text-gray-700 dark:text-gray-400 overflow-hidden" style={{ maxHeight: '6em', WebkitLineClamp: 4 }}>
              {book.bookDescription}
            </p>
            {/* lead to book id */}
            <Link to={`/book/${book._id}`}>
            <button className="btnBlue w-full ">Buy Now!</button>
            </Link>
          </Card>
        ))}
      </div>
    </div>
  );
        }
export default Shop;
