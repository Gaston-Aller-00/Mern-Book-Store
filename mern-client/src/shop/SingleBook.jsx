import React from "react";
import { useLoaderData } from "react-router-dom";
import { Card } from "flowbite-react";
import { PiShareNetwork } from "react-icons/pi";
import {getRandomPrice} from "../components/BooksCards";


const SingleBook = () => {
  const {
    _id,
    imageURL,
    bookTitle,
    authorName,
    category,
    bookDescription,
    bookPdfUrl,
  } = useLoaderData();

  const imageStyle = {
    height: "auto",
    width: "100%",
    maxWidth: "350px", 
    objectFit: "contain",
    borderRadius: "16px",
  };

  return (
    <div className="mt-10 lg:mt-20 px-4 lg:px-24 flex flex-col lg:flex-row justify-center items-center gap-4">
      <img style={imageStyle} src={imageURL} alt="bookCover" className="lg:mr-8" />
      <Card className="w-full lg:w-3/4 xl:w-1/2">
        <div className="p-4 lg:p-11">
          <div className="flex items-center justify-between">
            <h2 className="text-3xl font-extrabold tracking-tight text-gray-900 dark:text-white mb-2">
              {bookTitle}
            </h2>
            <a href={bookPdfUrl} target="_blank" rel="noopener noreferrer">
              <PiShareNetwork className="text-3xl" />
            </a>
          </div>

          <h3 className="text-xl font-semibold mb-4">{authorName}</h3>
          <p className=" font-semibold  mb-4">{category}</p>
          <p className="text-gray-700 dark:text-gray-400">{bookDescription}</p>
        </div>
        <div className="flex items-center justify-center lg:justify-start gap-4 p-4">
          <span className="text-3xl font-bold text-gray-900 dark:text-white">
          {getRandomPrice()}
          </span>
          <a
            href="#"
            className="rounded-lg bg-cyan-700 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-cyan-800 focus:outline-none focus:ring-4 focus:ring-cyan-300 dark:bg-cyan-600 dark:hover:bg-cyan-700 dark:focus:ring-cyan-800"
          >
            Add to cart
          </a>
        </div>
      </Card>
    </div>
  );
};

export default SingleBook;
