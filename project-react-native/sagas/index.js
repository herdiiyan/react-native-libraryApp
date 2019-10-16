import { all, fork } from "redux-saga/effects";
import { watchGetAllBooks, watchGetBook, watchPutBook, watchPostBook, watchDeleteBook } from "./book";

export default function* sagas() {
  yield all([
    fork(watchGetAllBooks), 
    fork(watchGetBook), 
    fork(watchPutBook),
    fork(watchPostBook), 
    fork(watchDeleteBook)
  ]);
}
