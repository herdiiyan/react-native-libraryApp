export const GET_ALL_BOOKS = "GET_ALL_BOOKS";
export const GET_ALL_BOOKS_SUCCESS = "GET_ALL_BOOKS_SUCCESS";
export const GET_ALL_BOOKS_ERROR = "GET_ALL_BOOKS_ERROR";

export const GET_BOOK = "GET_BOOK";
export const GET_BOOK_SUCCESS = "GET_BOOK_SUCCESS";
export const GET_BOOK_ERROR = "GET_BOOK_ERROR";

export const PUT_BOOK = "PUT_BOOK";
export const PUT_BOOK_SUCCESS = "PUT_BOOK_SUCCESS";
export const PUT_BOOK_ERROR = "PUT_BOOK_ERROR";

export const POST_BOOK = "POST_BOOK";
export const POST_BOOK_SUCCESS = "POST_BOOK_SUCCESS";
export const POST_BOOK_ERROR = "POST_BOOK_ERROR";

export const DELETE_BOOK = "DELETE_BOOK";
export const DELETE_BOOK_SUCCESS = "DELETE_BOOK_SUCCESS";
export const DELETE_BOOK_ERROR = "DELETE_BOOK_ERROR";

export function getAllBooks() {
  return {
    type: GET_ALL_BOOKS
  };
}

export function getBook(id) {
  return {
    type: GET_BOOK,
    id: id
  };
}

export function putBook(id, data) {
  return {
    type: PUT_BOOK,
    id: id,
    data: data
  };
}

export function postBook(data) {
  return {
    type: POST_BOOK,
    data: data
  };
}

export function deleteBook(id) {
  return {
    type: DELETE_BOOK,
    id: id
  };
}
