import * as BooksAPI from "../BooksAPI";
import Book from "../components/Book";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Search = () => {
  const [books, setBooks] = useState([]);
  const [oldBooks, setOldBooks] = useState([]);

  const getOldBook = async () => {
    await BooksAPI.getAll().then((data) => {
      setOldBooks(data);
    });
  };
  const searchBook = async (query) => {
    if (query.length > 0) {
      await BooksAPI.search(query)
        .then((data) => {
          if (data.error == null) {
            for (let i = 0; i < oldBooks.length; i++) {
              for (let j = 0; j < data.length; j++) {
                if (data[j].title === oldBooks[i].title) {
                  data[j] = oldBooks[i];
                }
              }
            }

            setBooks(data);
          }
        })
        .catch((error) => {
          console.error("Exception", error);
        });
    }
  };
  useEffect(() => {
    getOldBook();
  }, []);

  return (
    <div className="search-books">
      <div className="search-books-bar">
        <Link to="/">
          <button className="close-search">Close</button>
        </Link>
        <div className="search-books-input-wrapper">
          <input
            type="text"
            placeholder="Search by title, author, or ISBN"
            onChange={(event) => searchBook(event.target.value)}
          />
        </div>
      </div>
      <div className="search-books-results">
        <ol className="books-grid">
          {books.map((book) => (
            <Book key={book.id} book={book} />
          ))}
        </ol>
      </div>
    </div>
  );
};
export default Search;
