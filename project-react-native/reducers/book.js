import {
  GET_ALL_BOOKS,
  GET_ALL_BOOKS_SUCCESS,
  GET_ALL_BOOKS_ERROR,
  GET_BOOK,
  GET_BOOK_SUCCESS,
  GET_BOOK_ERROR,
  PUT_BOOK,
  PUT_BOOK_SUCCESS,
  PUT_BOOK_ERROR,
  POST_BOOK,
  POST_BOOK_SUCCESS,
  POST_BOOK_ERROR,
  DELETE_BOOK,
  DELETE_BOOK_SUCCESS,
  DELETE_BOOK_ERROR
} from "../actions/book";

const getAllState = {
  data: [],
  loading: false
};

const initState = {
  data: null,
  loading: false
};

const deleteState = {
  data: false,
  loading: false
};

export function getAllBooks(state = getAllState, action) {
  switch (action.type) {
    case GET_ALL_BOOKS:
      return {
        ...getAllState,
        loading: true,
        error: null
      };
    case GET_ALL_BOOKS_SUCCESS:
      return {
        ...state,
        data: action.data,
        loading: false,
        error: null
      };
    case GET_ALL_BOOKS_ERROR:
      return {
        ...state,
        error: action.error,
        loading: false
      };
    default:
      return state;
  }
}

export function getBook(state = initState, action) {
  switch (action.type) {
    case GET_BOOK:
      return {
        ...initState,
        loading: true,
        error: null
      };
    case GET_BOOK_SUCCESS:
      return {
        ...state,
        data: action.data,
        loading: false,
        error: null
      };
    case GET_BOOK_ERROR:
      return {
        ...state,
        error: action.error,
        loading: false
      };
    default:
      return state;
  }
}

export function putBook(state = initState, action) {
  switch (action.type) {
    case PUT_BOOK:
      return {
        ...initState,
        loading: true,
        error: null
      };
    case PUT_BOOK_SUCCESS:
      return {
        ...state,
        data: action.data,
        loading: false,
        error: null
      };
    case PUT_BOOK_ERROR:
      return {
        ...state,
        error: action.error,
        loading: false
      };
    default:
      return state;
  }
}

export function postBook(state = initState, action) {
  switch (action.type) {
    case POST_BOOK:
      return {
        ...initState,
        loading: true,
        error: null
      };
    case POST_BOOK_SUCCESS:
      return {
        ...state,
        data: action.data,
        loading: false,
        error: null
      };
    case POST_BOOK_ERROR:
      return {
        ...state,
        error: action.error,
        loading: false
      };
    default:
      return state;
  }
}

export function deleteBook(state = deleteState, action) {
  switch (action.type) {
    case DELETE_BOOK:
      return {
        ...deleteState,
        data: false,
        loading: false,
        error: null
      };
    case DELETE_BOOK_SUCCESS:
      return {
        ...state,
        data: true,
        loading: true,
        error: null
      };
    case DELETE_BOOK_ERROR:
      return {
        ...state,
        error: action.error,
        loading: false
      };
    default:
      return state;
  }
}
