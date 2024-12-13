import axios from "axios"
import React, { useEffect, useState } from "react";
import "./List.scss";

const List = () => {
  const [books, setBooks] = useState([]);

  async function getBooks() {
    try {
        const api = await axios.get(`https://api.nytimes.com/svc/books/v3/lists/current/hardcover-fiction.json?api-key=4TRya6sGTyKaUs0DVhy04lHo860CZuZn`);
        setBooks(api.data.results.books);
    } catch (error) {
      console.error(error);
    }
  }

  useEffect(() => {
    getBooks();
  }, []);

  return (
    <>
    <div className="books">
    {books.map((book) => {
        return (
          <div className="book">
            <p className="title">{book.title}</p>
            <br />
            <img src={book.book_image} />
          </div>
        );
    })}
    </div>
    </>
  )
}

export default List