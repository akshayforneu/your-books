import {Reducer} from "redux"
import {bookDetails} from "../types/storeType"
import { failedBookInfoAction, gotBookInfoAction} from "../types/actionsType"
import BookInfo from "../models/BookInfo";
type actions = gotBookInfoAction|
failedBookInfoAction;
type stateInfoReducer={
    bookInfo:bookDetails,
    isBookInfoError: boolean,
}
const initialState: stateInfoReducer = { bookInfo:new BookInfo(),isBookInfoError:false};
export const bookInfoReducer:Reducer<stateInfoReducer, actions>= (state= initialState, action) => {
   switch (action.type) {
    
       case "GOT_BOOKINFO" :
           return {...state, bookInfo:action.bookInfo, isBookInfoError:false}
       case "FAILED_BOOKINFO" :
            return {...state, isBookInfoError:true}
       default: 
       return state
   }

}