import axios, { AxiosRequestConfig } from "axios";
import booksApi, { key } from "../api/books-api";

export class BookService {
  config: AxiosRequestConfig = {};

  private cancellationToken = axios.CancelToken.source();

  private static currentInstance: BookService | null;

  static createInstance(): BookService {
    const activeInstance = new BookService();
    activeInstance.cancellationToken = axios.CancelToken.source();

    activeInstance.config.cancelToken = activeInstance.cancellationToken.token;
    return activeInstance;
  }

  static getInstance(): BookService {
    if (this.currentInstance) {
      return this.currentInstance;
    }
    const activeInstance = new BookService();
    activeInstance.cancellationToken = axios.CancelToken.source();
    activeInstance.config.cancelToken = activeInstance.cancellationToken.token;
    this.currentInstance = activeInstance;
    return activeInstance;
  }

  static cancelActiveRequests() {
    this.currentInstance?.cancellationToken?.cancel("RequestCancellation");
    this.currentInstance = null;
  }

  cancelRequests() {
    this.cancellationToken.cancel("RequestCancellation");
    return BookService.getInstance();
  }

  getBooksData(searchKey: string) {
    return booksApi.get(`?q=${searchKey}&key=${key}`);
  }

  getABookInfo(id: string) {
    return booksApi.get(`/${id}`);
  }
}
