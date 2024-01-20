import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
//pics writters
import pic1 from "../assets/writers/1.jpg";
import pic2 from "../assets/writers/2.jpg";
import pic3 from "../assets/writers/3.jpg"
import pic4 from "../assets/writers/4.jpg"

//react iconos
import { FaStar } from "react-icons/fa6";
import { Avatar } from "flowbite-react";
import profile from "../Home/profile.jpg";

// import ReviewCard from '../shared/ReviewCard';

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import './styles.css';

// import required modules
import { Pagination } from "swiper/modules";

const Review = () => {
  return (
    <div className="my-12 px-4 lg:px-24">
      <h2 className="text-5xl font-bold text-center mb-10 leading-snug">
        Best Selling Writers
      </h2>

      {/* reviews card */}
      <Swiper
        slidesPerView={1}
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        breakpoints={{
          640: {
            slidesPerView: 1,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 40,
          },
          1024: {
            slidesPerView: 3,
            spaceBetween: 50,
          },
        }}
        className="mySwiper"
      >
        <SwiperSlide className="shadow-xl bg-white py-8 px-4 md:m-5 rounded-lg border">
          <div className="space-y-6">
            <div className="text-amber-500 flex gap-2">
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStar />
            </div>

            {/* texts */}
            <div className="mt-7">
              <p className="mb-5">
                Brandon Sanderson is an American writer of fantasy literature
                and science fiction. He is best known for the fictional universe
                of Cosmere, in which most of his fantasy novels are set,
                including the series Born of the Mists and The Storm Archive.
              </p>
              <Avatar
                alt="avatar of Jese"
                img={pic1}
                rounded
                className="w-10  mb-4"
              />
              <h5 className="text-lg font-medium">Brandon Sanderson</h5>
              <p className="text-sm">Writter</p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className="shadow-xl bg-white py-8 px-4 md:m-5 rounded-lg border">
          <div className="space-y-6">
            <div className="text-amber-500 flex gap-2">
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStar />
            </div>

            {/* texts */}
            <div className="mt-7">
              <p className="mb-5">
                Masashi Kishimoto is a popular manga artist known for being the
                author of the Naruto series, started in 1999, drawing only the
                manga of this series. He is the older twin brother of Seishi
                Kishimoto and other mangas in the industry
              </p>
              <Avatar
                alt="avatar of Jese"
                img={pic2}
                rounded
                className="w-10 mb-4"
              />
              <h5 className="text-lg font-medium">Masashi Kishimoto</h5>
              <p className="text-sm"> Writter</p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className="shadow-xl bg-white py-8 px-4 md:m-5 rounded-lg border">
          <div className="space-y-6">
            <div className="text-amber-500 flex gap-2">
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStar />
            </div>

            {/* texts */}
            <div className="mt-7">
              <p className="mb-5">
              Joanne Rowling, who writes under the pseudonyms J. K. Rowling and Robert Galbraith, is a British writer, film producer and screenwriter, best known as the author of the Harry Potter series of books, which have sold more than half a billion copies.
              </p>
              <Avatar
                alt="avatar of Jese"
                img={pic3}
                rounded
                className="w-10 mb-4"
              />
              <h5 className="text-lg font-medium">
                J. K. Rowling Escritora británica
              </h5>
              <p className="text-sm">Writter</p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className="shadow-xl bg-white py-8 px-4 md:m-5 rounded-lg border">
          <div className="space-y-6">
            <div className="text-amber-500 flex gap-2">
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStar />
            </div>

            {/* texts */}
            <div className="mt-7">
              <p className="mb-5">
              Kengo Hanazawa is a Japanese mangaka known for his seinen works. He won the Best Theme Award at the 2005 Sense of Gender Awards for his work Ressentiment and was nominated at the third, fourth and fifth Manga Taisho Awards for I Am a Hero.
              </p>
              <Avatar
                alt="avatar of Jese"
                img={pic4}
                rounded
                className="w-10 mb-4"
              />
              <h5 className="text-lg font-medium">Kengo Hanazawa</h5>
              <p className="text-sm"> Writter</p>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>

      
    </div>
  );
};

export default Review;
