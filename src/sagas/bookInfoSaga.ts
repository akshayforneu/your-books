import {actionIds, failedBookInfoAction, getBookInfoAction,gotBookInfoAction} from "../types/actionsType"
import {takeEvery, call, put,StrictEffect, getContext} from 'redux-saga/effects'
import {AxiosResponse} from "axios"
import { bookDetails } from "../types/storeType"
import {BookInfoResponse} from "../api/BooksInfoResponseTypes"
import {validateBookInfo} from  "../transformers/BooksInfoValidate/BooksInfoValidate"
import { BookService } from "../services/BookService"


function* getBookInfoWorker({id}: getBookInfoAction){
    try{
        // const response: AxiosResponse = yield call(booksApi.get,`/${id}`);
        const bookService: BookService = yield getContext("bookService");
        const response: AxiosResponse = yield call(bookService.getABookInfo, id);
        console.log('response', response)
        const responseData: BookInfoResponse = response.data;
            console.log('response', responseData)
            const bookInfo:bookDetails=validateBookInfo(responseData)
            const data: gotBookInfoAction={
              type:"GOT_BOOKINFO",
              bookInfo,
            }
          yield put(data)
          console.log(bookInfo);
    }
    
    catch(err){
        console.log(err)
        const data:failedBookInfoAction={
            type:"FAILED_BOOKINFO",
        }
        yield put(data)
    }
}



function* bookInfoSaga() : Generator<StrictEffect> {
    yield takeEvery(actionIds.GET_BOOKINFO,getBookInfoWorker);
}


export default bookInfoSaga