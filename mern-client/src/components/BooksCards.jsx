import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import { Link } from "react-router-dom";
import { FaCartShopping } from "react-icons/fa6";
//para poner price aleatorio

export  const getRandomPrice = () => {
  const min = 10;
  const max = 20;
  const randomDollars = Math.floor(Math.random() * (max - min + 1)) + min;
  const randomCents = Math.random() < 0.5 ? 50 : 99;
  return `$${randomDollars}.${randomCents}`;
};

const BooksCards = ({ headline, headline2, books }) => {
  return (
    <div className="my-16 px-4 lg:px-24">
      <h2 className="text-5xl text-center font-extrabold text-black my-5">
        {headline}
        <span className="text-blue-600 dark:text-blue-500">{headline2}</span>
      </h2>
      {/* cards */}
      <div className="mt-12">
        <Swiper
          slidesPerView={1}
          spaceBetween={10}
          pagination={{
            clickable: true,
          }}
          breakpoints={{
            640: {
              slidesPerView: 2,
              spaceBetween: 20,
            },
            768: {
              slidesPerView: 4,
              spaceBetween: 40,
            },
            1024: {
              slidesPerView: 5,
              spaceBetween: 50,
            },
          }}
          modules={[Pagination]}
          className="mySwiper w-full h-full"
        >
          {books.map((book) => (
            <SwiperSlide key={book._id}>
              <Link to={`/book/${book._id}`}>
                <div className="relative">
                  <div className="card">
                    <img
                      className="rounded-xl"
                      src={book.imageURL}
                      alt="pic book"
                    ></img>
                    <div className="absolute top-3 right-3 bg-blue-600 hover:bg-black p-2 rounded">
                      <FaCartShopping className="w-4 h-4 text-white" />
                    </div>
                  </div>
                </div>
                <div>
                  <div>
                    <h3 className="font-bold">{book.bookTitle}</h3>
                    <p className="font-semibold">{book.authorName}</p>
                  </div>
                  <div>
                    <p className="font-medium">{getRandomPrice()}</p>
                  </div>
                </div>
              </Link>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default BooksCards;
