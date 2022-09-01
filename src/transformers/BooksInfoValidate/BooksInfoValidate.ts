import BookInfo from "../../models/BookInfo"
import { bookDetails } from "../../types/storeType"
import {BookInfoResponse} from "../../api/BooksInfoResponseTypes"
export const validateBookInfo=(bookInfo:BookInfoResponse):bookDetails=>{
    const NoImage=`http://books.google.com/books/content?id=WV3FngEACAAJ&printsec=frontcover&img=2&zoom=9&source=gbs_api`
    const item=bookInfo
    const id:string=item.id;
    const title:string=("title" in item.volumeInfo)?item.volumeInfo.title:"Not Available";
    const thumbnail=item?.volumeInfo?.imageLinks?.thumbnail||NoImage
    const author=item?.volumeInfo?.authors?.[0]|| "Un Known";
    const publishedDate=item?.volumeInfo?.publishedDate || "Not Available"
    const isbn_10=(("industryIdentifiers" in item.volumeInfo)&&(item?.volumeInfo?.industryIdentifiers?.[0].identifier))||"not available" 
    const pageCount=item?.volumeInfo.pageCount|| 0;
    const description=item?.volumeInfo.description||"Description Not Available"
    console.log(thumbnail)
    return new BookInfo(id,title,thumbnail,author,publishedDate,isbn_10,pageCount,description)

}