import { expectSaga } from "redux-saga-test-plan";
import { getContext } from "redux-saga/effects";
import { BookBuilder } from "../../api/response/builders/bookBuilder";
import { BooksDataBuilder } from "../../api/response/builders/booksDataBuilder";
import {
  bookReducer,
  initialState as BooksDataInitialState,
} from "../../reducers/bookReducer";
import { actionIds, searchBooksAction } from "../../types/actionsType";
import { searchBookWorker } from "../bookSaga";

describe("Books Saga Test", () => {
  test("On Successful data fetch, transform and store in the state", async () => {
    // Arrange
    const action = {
      type: actionIds.SEARCH_BOOKS,
      payload: {
        query: "react",
      },
    };

    const getBooksData = () => {
      const book1 = new BookBuilder()
        .withId("Aaug_RnI-xQC")
        .withVolumeInfo({
          title: "Fullstack React",
          imageLinks: {
            smallThumbnail:
              "http://books.google.com/books/content?id=ppjUtAEACAAJ&printsec=frontcover&img=1&zoom=5&source=gbs_api",
            thumbnail:
              "http://books.google.com/books/content?id=ppjUtAEACAAJ&printsec=frontcover&img=1&zoom=1&source=gbs_api",
          },
        })
        .build();

      const book2 = new BookBuilder()
        .withId("OswftAEACAAJ")
        .withVolumeInfo({
          title: "Learning React",
          imageLinks: {
            smallThumbnail:
              "http://books.google.com/books/content?id=tjjrDwAAQBAJ&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api",
            thumbnail:
              "http://books.google.com/books/content?id=tjjrDwAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api",
          },
        })
        .build();

      return new BooksDataBuilder().withBook(book1).withBook(book2).build();
    };

    // Act
    const sagaAction = expectSaga(searchBookWorker, action)
      .provide([[getContext("bookService"), { getBooksData }]])
      .withReducer(bookReducer, BooksDataInitialState);

    const results = await sagaAction.run();

    // Assert

    console.log("results", results.storeState);
    expect(results.storeState.books[0].id).toEqual("Aaug_RnI-xQC");
    expect(results.storeState.books[0].title).toEqual("Fullstack React");
    expect(results.storeState.books[0].thumbnail).toEqual(
      "http://books.google.com/books/content?id=ppjUtAEACAAJ&printsec=frontcover&img=1&zoom=1&source=gbs_api"
    );

    expect(results.storeState.books[1].id).toEqual("OswftAEACAAJ");
    expect(results.storeState.books[1].title).toEqual("Learning React");
    expect(results.storeState.books[1].thumbnail).toEqual(
      "http://books.google.com/books/content?id=tjjrDwAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api"
    );

    expect(results.storeState.isBookError).toBe(false);
  });

  test("On data fetch failure, and updated state", async () => {
    const action = {
      type: actionIds.SEARCH_BOOKS,
      payload: {
        query: "react",
      },
    };
    const sagaAction = expectSaga(searchBookWorker, action)
      .provide([[getContext("bookService"), {}]])
      .withReducer(bookReducer, BooksDataInitialState);

    const results = await sagaAction.run();

    expect(results.storeState.isBookError).toBe(true);
  });
});
