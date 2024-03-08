import React, { useEffect } from "react";
import { useState } from "react";
import BooksCards from "../components/BooksCards";

const BestSellerBooks = () => {
  const [books, setBooks] = useState([]);
//fetch para traer los books
  useEffect(() => {
    fetch("https://mern-book-store-eta.vercel.app/all-books")
      .then((res) => res.json())
      .then((data) => setBooks(data.slice(0,11)));
  }, []);

  return (
    <div>
      <BooksCards books={books}  headline="Best Seller " headline2="Books" />
    </div>
  );
};

export default BestSellerBooks;
