import {
  takeEvery,
  call,
  put,
  StrictEffect,
  getContext,
  select,
} from "redux-saga/effects";
import {
  actionIds,
  failedBooksAction,
} from "../types/actionsType";
import { AxiosResponse } from "axios";
import Book from "../models/Book";
import { PayloadAction } from "@reduxjs/toolkit";
import { BooksResponse } from "../api/BooksResponseTypes";
import { transformBooksData } from "../transformers/BooksValitade/BooksValidate";
import { BookService } from "../services/BookService";


function* bookSaga(): Generator<StrictEffect> {
  yield takeEvery(actionIds.SEARCH_BOOKS, searchBookWorker);
}

export function* searchBookWorker(action: PayloadAction<{ query: string }>) {
  try {
    const { query } = action.payload;
    const bookService: BookService = yield getContext("bookService");
    const response: AxiosResponse = yield call(bookService.getBooksData, query);
    

    console.log("booksData", response);

    const responseData: BooksResponse = response.data;
    const books: Book[] = transformBooksData(responseData.items);
    console.log(books);
    yield put({
      type: "BOOKS_FOUND",
      books,
    });
  } catch (err) {
    console.log("error", err);
    // const books:Book[]=[]
    const data: failedBooksAction = {
      type: "BOOKS_NOTFOUND",
    };
    yield put(data);
  }
}

export default bookSaga;
