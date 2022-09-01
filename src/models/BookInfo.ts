class BookInfo{
    id:string;
    thumbnail: string;
    author:string;
    title:string;
    publishedDate:string;
    isbn_no:string;
    pageCount:number;
    description:string;
    
    
    constructor(
        id:string="",
        title:string="",
        thumbnail: string="",
        author:string="",
        publishedDate:string="",
        isbn_no:string="",
        pageCount:number=0,
        description:string="",
       
       ){
           this.id=id;
           this.title=title;
           this.thumbnail=thumbnail;
           this.author=author;
           this.publishedDate=publishedDate;
           this.isbn_no=isbn_no;
           this.pageCount=pageCount;
           this.description=description;
           
        }
    }
    
    export default BookInfo