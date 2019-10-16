import { combineReducers } from "redux";
import { getAllBooks, getBook, putBook, postBook, deleteBook } from "./book";

const allReducers = combineReducers({
  books: getAllBooks,
  book: getBook,
  putBook,
  deleteBook,
  postBook
});
export default allReducers;
