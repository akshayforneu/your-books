import React, {useState, useEffect} from "react"
import { SearchBox, SearchButton, SearchContainer } from "./styles"
import {connect} from 'react-redux'
import {searchBooksActionCreator} from "../../types/actionCreatorTypes"
import storeType from "../../types/storeType"
import {
    
    searchBooks
} from "../../actions/index"
import Gallery from "../Gallery/Gallery"
import { GalleryContainer } from "../Gallery/styles"

interface FormElements extends HTMLFormControlsCollection{
    query: HTMLInputElement
}
interface UsernameFormElement extends HTMLFormElement{
    readonly elements: FormElements
}
interface ISearchProps{
    bookListLength:number,
    searchBooks: searchBooksActionCreator;
}
const Search: React.FC<ISearchProps>=({searchBooks,bookListLength}) =>{
 const [query, setQuery] = useState('REact')
 const handleSubmit=(event : React.FormEvent<UsernameFormElement>)=> {
  
    event.preventDefault()
    console.log(query)
    searchBooks(query)
    setQuery("")
    }
    useEffect(()=>{
      if(!bookListLength)
       searchBooks(query)
      setQuery("")
    },[])
  const handleChange =(event: React.ChangeEvent<HTMLInputElement>)=>
  {
    setQuery(event.target.value)
   // console.log(query)
  }


    const renderHelper=()=>{
        return (
           <>
            <SearchContainer onSubmit={handleSubmit}>
              <SearchBox id='query' value={query} placeholder='Enter a Book Name to start searching' onChange={handleChange}></SearchBox>
                 <SearchButton type='submit'>Search</SearchButton>
            </SearchContainer>
            <Gallery/>
          </>
             );
    }
    return renderHelper();

  } 


const mapStateToProps = (state: storeType) =>{
    return {
            bookListLength:state.bookData.books.length        
          };
    }

export default connect(mapStateToProps,{searchBooks,})(Search)