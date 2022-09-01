
export type book ={
    id: string;
    title: string;
    thumbnail: string;
}
export type bookDetails={
    id:string;
    title: string;
    thumbnail: string;
    author:string;
    publishedDate:string;
    isbn_no:string;
    pageCount:number;
    description:string;
    
}
export type bookData={
    books: book[];
    isBookError:boolean
}
export type bookInfoData={
    isBookInfoError:string;
    bookInfo:bookDetails;
}
interface IStoreState{
    
    bookInfoData: bookInfoData,
    bookData:bookData,
}

export default IStoreState;