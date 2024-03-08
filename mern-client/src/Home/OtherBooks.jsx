import React, { useEffect, useState } from 'react'
import BooksCards from '../components/BooksCards';

const OtherBooks = () => {
    const [books, setBooks] = useState([]);
    //fetch para traer los books
      useEffect(() => {
        fetch("https://mern-book-store-eta.vercel.app/all-books")
          .then((res) => res.json())
          .then((data) => setBooks(data.slice(6,16)));
      }, []);
    
      return (
        <div>
          <BooksCards books={books} headline="Other " headline2="Interesting Books" />
        </div>
      );
}

export default OtherBooks