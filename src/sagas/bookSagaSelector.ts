import { createSelector } from "@reduxjs/toolkit";
import IStoreState from "../types/storeType";

const selectDomain = (state: IStoreState) => state.bookData;

export const booksDataSelector = createSelector(
  selectDomain,
  (state) => state
);
