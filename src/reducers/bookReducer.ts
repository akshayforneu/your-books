import {Reducer} from "redux"
import {book} from "../types/storeType"
import {booksFoundAction, failedBooksAction} from "../types/actionsType"
type actions = booksFoundAction |
failedBooksAction
;
type stateBookReducer={
    books:book[],
    isBookError: boolean,
}
export const initialState:stateBookReducer ={books:[],isBookError:false};
export const bookReducer:Reducer<stateBookReducer, actions>= (state = initialState, action) => {
   switch (action.type) {
      
       case "BOOKS_FOUND":
        console.log({...state})
        return  {...state, books:action.books,  isBookError: false}
        case "BOOKS_NOTFOUND":
        return {...state, isBookError: true}
       default:
         return state
   }

}
