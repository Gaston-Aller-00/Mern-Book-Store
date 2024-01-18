import React, { useEffect, useState } from 'react'
import BooksCards from '../components/BooksCards';

const OtherBooks = () => {
    const [books, setBooks] = useState([]);
    //fetch para traer los books
      useEffect(() => {
        fetch("http://localhost:5000/all-books")
          .then((res) => res.json())
          .then((data) => setBooks(data.slice(0,10)));
      }, []);
    
      return (
        <div>
          <BooksCards books={books} headline="Other Books" />
        </div>
      );
}

export default OtherBooks