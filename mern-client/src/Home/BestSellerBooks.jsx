import React, { useEffect, useState } from "react";
import useFetchData from "../hooks/useFetchData";
import BooksCards from "../components/BooksCards";
import { PuffLoader } from "react-spinners";

const BestSellerBooks = () => {
 

  const { data: books, isLoading } = useFetchData(
    "https://mern-book-store-eta.vercel.app/all-books",
    0,
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
      {/* spinner */}
      {isLoading2 && (
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            height: "100vh",
          }}
        >
          <PuffLoader
            color="#000080
"
            size={120}
          />
        </div>
      )}

      {/* books cuando  */}
      {!isLoading && (
        <BooksCards books={books}  headline="Best Seller " headline2="Books" />
      )}
    </div>
  );
};

export default BestSellerBooks;

//icon charge old
// import React from "react";
// import useFetchData from "../hooks/useFetchData";
// import BooksCards from "../components/BooksCards";

// const BestSellerBooks = () => {
//   const {
//     data: books,
//     isLoading,
//     loadingComponent,
//   } = useFetchData(
//     "https://mern-book-store-eta.vercel.app/all-books",
//     0,
//     16
//     //slice custom
//   );

//   return (
//     <div>
//       {loadingComponent}
//       {!isLoading && (
//         <BooksCards books={books} headline="Best Seller " headline2="Books" />
//       )}
//     </div>
//   );
// };

// export default BestSellerBooks;
