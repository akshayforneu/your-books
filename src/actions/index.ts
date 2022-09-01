import {
  searchBooksActionCreator,
  getBookInfoActionCreator,
} from "../types/actionCreatorTypes";

export const searchBooks: searchBooksActionCreator = (query) => {
  return {
    type: "SEARCH_BOOKS",
    payload: { query },
  };
};

export const getBookInfo: getBookInfoActionCreator = (id) => {
  return {
    type: "GET_BOOKINFO",
    id,
  };
};
