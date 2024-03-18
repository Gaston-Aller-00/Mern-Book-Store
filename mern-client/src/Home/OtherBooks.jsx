import React, { useEffect, useState } from "react";
import BooksCards from "../components/BooksCards";
import useFetchData from "../hooks/useFetchData";
import { PuffLoader } from "react-spinners";

const OtherBooks = () => {
  const { data: books, isLoading } = useFetchData(
    "https://mern-book-store-eta.vercel.app/all-books",
    8,
    16
  );


  const [isLoading2, setIsLoading2] = useState(true);
  const [books2, setBooks] = useState(null);

  useEffect(() => {
    fetch("https://mern-book-store-eta.vercel.app/all-books")
      .then((res) => res.json())
      .then((data) => {
        setBooks(data);
        setIsLoading2(false);
      });
  }, []);

  if (isLoading2)
    return (
      <p className=" flex items-center justify-center text-3xl font-extrabold mt-5 ">
        If books load slowly, refresh the page.
      </p>
    );

  return (
    <div>
      {isLoading && (
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            height: "100vh",
          }}
        >
          {/* spinner red */}
          <PuffLoader
            color="#000080
"
            size={120}
          />
        </div>
      )}
      <BooksCards
        books={books}
        headline="Other "
        headline2="Interesting Books"
      />
    </div>
  );
};

export default OtherBooks;

// const [books, setBooks] = useState([]);

//fetch para traer los books
// useEffect(() => {
//   fetch("https://mern-book-store-eta.vercel.app/all-books")
//     .then((res) => res.json())
//     .then((data) => setBooks(data.slice(6,16)));
// }, []);
