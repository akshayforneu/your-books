import axios from "axios"
export const key="AIzaSyBSCHTLprEt4xIfTHAOJ1ewRDhCTPh4nIo"
const booksApi = axios.create({
    baseURL: "https://www.googleapis.com/books/v1/volumes",
});

export default booksApi;
