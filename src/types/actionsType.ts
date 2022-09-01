import { book, bookDetails } from "./storeType";
export interface searchBooksAction {
  type: "SEARCH_BOOKS";
  payload: { query: string };
}
export interface getBookInfoAction {
  type: "GET_BOOKINFO";
  id: string;
}

export interface gotBookInfoAction {
  type: "GOT_BOOKINFO";
  bookInfo: bookDetails;
}

export interface failedBookInfoAction {
  type: "FAILED_BOOKINFO";
}
export interface failedBooksAction {
  type: "BOOKS_NOTFOUND";
}
export interface booksFoundAction {
  type: "BOOKS_FOUND";
  books: book[];
}

export const actionIds = {
  SEARCH_BOOKS: "SEARCH_BOOKS",
  GET_BOOKINFO: "GET_BOOKINFO",
};
