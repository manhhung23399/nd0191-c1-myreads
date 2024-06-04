import React from "react";
import * as BooksAPI from "../BooksAPI";

const updateShelf = (book, shelf) => {
  const update = async () => {
    await BooksAPI.update(book, shelf);
  };
  update();
};

const setShelf = (shelf) => {
  if (!shelf) {
    return "none";
  } else {
    return shelf;
  }
};

const Book = ({ book }) => {
  return (
    <li key={book.id}>
      <div className="book">
        <div className="book-top">
          <div
            className="book-cover"
            style={{
              width: 128,
              height: 193,
              backgroundImage: `url(${book.imageLinks.thumbnail})`,
            }}
          ></div>
          <div className="book-shelf-changer">
            <select
              defaultValue={setShelf(book.shelf)}
              onChange={(event) => updateShelf(book, event.target.value)}
            >
              <option value="none" disabled>
                Move to...
              </option>
              <option value="currentlyReading">Currently Reading</option>
              <option value="wantToRead">Want to Read</option>
              <option value="read">Read</option>
              <option value="none">None</option>
            </select>
          </div>
        </div>
        <div className="book-title">{book.title}</div>
        <div className="book-authors">{book.authors}</div>
      </div>
    </li>
  );
};
export default Book;
