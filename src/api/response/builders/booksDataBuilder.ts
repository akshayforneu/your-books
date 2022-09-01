import Book from "../../../models/Book";

export class BooksDataBuilder {
  private data: Book[] = [];
  withBook = (book: Book) => {
    this.data = [...this.data, book];
    return this;
  };

  build = () => {
    return { data: { items: this.data } };
  };
}
