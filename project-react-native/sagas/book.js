import { takeLatest, put } from "redux-saga/effects";
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
import { filterFetch } from "../utils/apiUtils"

function* getAllBooks() {
  try {
    const data = yield filterFetch('http://192.168.1.31:8080/buku/', {
      method: 'GET',
      headers: { 'Content-Type': 'application/json'},
    });
    yield put({
      type: GET_ALL_BOOKS_SUCCESS,
      data: data
    });
  } catch (error) {
    yield put({
      type: GET_ALL_BOOKS_ERROR,
      error: error
    });
  }
}

function* getBook(action) {
  try {
    const data = yield filterFetch('http://192.168.1.31:8080/buku/'+action.id, {
      method: 'GET',
      headers: { 'Content-Type': 'application/json'},
    });
    yield put({
      type: GET_BOOK_SUCCESS,
      data: data
    });
  } catch (error) {
    yield put({
      type: GET_BOOK_ERROR,
      error: error
    });
  }
}

function* putBook(action) {
  try {
    const data = yield filterFetch('http://192.168.1.31:8080/buku/'+action.id, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json'},
      body: JSON.stringify(action.data)
    });
    console.log('---------');

    console.log(data);
    
    yield put({
      type: PUT_BOOK_SUCCESS,
      data: data
    });
  } catch (error) {
    yield put({
      type: PUT_BOOK_ERROR,
      error: error
    });
  }
}

function* postBook(action) {
  try {
    const data = yield filterFetch('http://192.168.1.31:8080/buku/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json'},
      body: JSON.stringify(action.data)
    });
    
    console.log(data);
    
    yield put({
      type: POST_BOOK_SUCCESS,
      data: data
    });
  } catch (error) {
    console.log(error);
    
    yield put({
      type: POST_BOOK_ERROR,
      error: error
    });
  }
}

function* deleteBook(action) {
  try {
    const data = yield filterFetch('http://192.168.1.31:8080/buku/'+action.id, {
      method: 'DELETE',
      headers: { 'Content-Type': 'application/json'},
    });
    yield put({
      type: DELETE_BOOK_SUCCESS,
      data: data
    });
  } catch (error) {
    yield put({
      type: DELETE_BOOK_ERROR,
      error: error
    });
  }
}

export function* watchGetAllBooks() {
  yield takeLatest(GET_ALL_BOOKS, getAllBooks);
}

export function* watchGetBook() {
  yield takeLatest(GET_BOOK, getBook);
}

export function* watchPutBook() {
  yield takeLatest(PUT_BOOK, putBook);
}

export function* watchPostBook() {
  yield takeLatest(POST_BOOK, postBook);
}

export function* watchDeleteBook() {
  yield takeLatest(DELETE_BOOK, deleteBook);
}
