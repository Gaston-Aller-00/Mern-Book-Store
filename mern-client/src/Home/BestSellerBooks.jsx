import React from "react";
import useFetchData from "../hooks/useFetchData";
import BooksCards from "../components/BooksCards";
import { PuffLoader } from "react-spinners";

const BestSellerBooks = () => {
  const { data: books, isLoading } = useFetchData(
    "https://mern-book-store-eta.vercel.app/all-books",
    0,
    16
  );

  return (
    <div>
      {/* spinner */}
      {isLoading && (
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
        <BooksCards books={books} headline="Best Seller " headline2="Books" />
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
