import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import BookShelf from "../components/BookShelf";
import * as BooksAPI from "../BooksAPI";
const Home = () => {
  const [books, setBooks] = useState([]);
  useEffect(() => {
    getBook();
  }, [books]);
  const getBook = async () => {
    await BooksAPI.getAll().then((data) => {
      setBooks(data);
    });
  };

  return (
    <div className="list-books">
      <div className="list-books-title">
        <h1>MyReads</h1>
      </div>
      <div className="list-books-content">
        <div>
          <BookShelf
            books={books.filter((book) => book.shelf === "currentlyReading")}
            shelfTitle={"Currently Reading"}
          />
          <BookShelf
            books={books.filter((book) => book.shelf === "wantToRead")}
            shelfTitle={"Want to Read"}
          />
          <BookShelf
            books={books.filter((book) => book.shelf === "read")}
            shelfTitle={"Read"}
          />
        </div>
      </div>
      <div className="open-search">
        <Link to="/search" className="search-book">
          Add a book
        </Link>
      </div>
    </div>
  );
};
export default Home;
