import React from "react";
import useFetchData from "../hooks/useFetchData";
import BooksCards from "../components/BooksCards";

const BestSellerBooks = () => {
  const {
    data: books,
    isLoading,
    loadingComponent,
  } = useFetchData(
    "https://mern-book-store-eta.vercel.app/all-books",
    0,
    16
    //slice custom
  );

  return (
    <div>
      {loadingComponent}
      {!isLoading && (
        <BooksCards books={books} headline="Best Seller " headline2="Books" />
      )}
    </div>
  );
};

export default BestSellerBooks;
