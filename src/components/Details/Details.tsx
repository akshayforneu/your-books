import {BookInfoContainer,Description,Details,Thumbnail,BackButton, DetailsContainer} from './styles'
import {useEffect} from 'react'
import {connect} from 'react-redux'
import {getBookInfoActionCreator} from "../../types/actionCreatorTypes"
import Alert from '@material-ui/lab/Alert';
import storeType from "../../types/storeType"
import {getBookInfo} from "../../actions/index"
import { AlertContainer } from '../Gallery/styles';
import { Link } from 'react-router-dom';
import { Button } from '@material-ui/core';
const BookInfo = (props:any) => {
   
    useEffect(()=>{
        console.log(props)
        props.getBookInfo(props.match.params.id)
    },[])
  
    const bookInfo=props.bookInfo;
    const BookRender=()=>{
        function createMarkup(description:string) {
            return {
               __html: description    };
         }; 
    return <DetailsContainer>
    <Link to='/search'> <Button variant="contained" color="secondary"  disableElevation >Back to search results</Button></Link>
     <BookInfoContainer>
    
     <Thumbnail getUrl={bookInfo.thumbnail}></Thumbnail>
          
            <Details>
                <h5>Title : {bookInfo.title}</h5>
                <h5>Author : {bookInfo.author}</h5>
                <h5>Published : {bookInfo.publishedDate}</h5>
                <h5>ISBN_10 : {bookInfo.isbn_no}</h5>
                <h5>Pages : {bookInfo.pageCount}</h5>
            </Details>
           
        
         <Description dangerouslySetInnerHTML={createMarkup(bookInfo.description)}>
          
         </Description>
    </BookInfoContainer>
   
    </DetailsContainer>
  }
 const isBookInfoError=props.isBookInfoError
 const alertEm= <AlertContainer><Alert severity="error">Oops! Try Again,  Book Details Not Available</Alert> </AlertContainer> 
 return  ( isBookInfoError ?alertEm :  BookRender() );
    
}

const mapStateToProps = (state: storeType) =>{
    return {
            bookInfo:state.bookInfoData.bookInfo,
            isBookInfoError:state.bookInfoData.isBookInfoError
        };
    }

export default connect(mapStateToProps,{getBookInfo,})(BookInfo)