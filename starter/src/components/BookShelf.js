import Book from "../components/Book";
import PropTypes from "prop-types";

const BookShelf = ({ books, shelfTitle }) => {
  return (
    <div className="bookshelf">
      <h2 className="bookshelf-title">{shelfTitle}</h2>
      <div className="bookshelf-books">
        <ol className="books-grid">
          {books.map((book) => (
            <Book key={book.id} book={book} />
          ))}
        </ol>
      </div>
    </div>
  );
};
BookShelf.propTypes = {
  books: PropTypes.array.isRequired,
  shelfTitle: PropTypes.string,
};
export default BookShelf;
