import {combineReducers} from 'redux'
import {bookReducer} from './bookReducer'
import {bookInfoReducer} from "./bookInfoReducer"
export default combineReducers({
    bookData:bookReducer,
    bookInfoData:bookInfoReducer,
})