import React, { useEffect } from "react";
import { useState } from "react";
import BooksCards from "../components/BooksCards";

const BestSellerBooks = () => {
  const [books, setBooks] = useState([]);
//fetch para traer los books
  useEffect(() => {
    fetch("http://localhost:5000/all-books")
      .then((res) => res.json())
      .then((data) => setBooks(data.slice(0,11)));
  }, []);

  return (
    <div>
      <BooksCards books={books} headline="Best Seller Books" />
    </div>
  );
};

export default BestSellerBooks;
