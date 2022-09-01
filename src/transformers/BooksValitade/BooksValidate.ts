import { ItemsEntity } from "../../api/BooksResponseTypes";
import { book } from "../../types/storeType";
import Book from "../../models/Book";
import { key } from "../../api/books-api";
export const transformBooksData = (items?: ItemsEntity[] | null): book[] => {
  const NoImage = `http://books.google.com/books/content?id=WV3FngEACAAJ&printsec=frontcover&img=2&zoom=9&source=gbs_api&key=${key}`;
  let books: book[] = [];

  items &&
    items.forEach((item: any) => {
      const id: string = item.id;
      const title: string =
        "title" in item.volumeInfo ? item.volumeInfo.title : "Not Available";
      let thumbnail = item?.volumeInfo?.imageLinks?.thumbnail || NoImage;
      console.log(thumbnail);
      books.push(new Book(id, title, thumbnail));
    });
  return books;
};
