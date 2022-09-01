import {searchBooksAction,getBookInfoAction} from "./actionsType"
export type searchBooksActionCreator = (query:string) => searchBooksAction;
export type getBookInfoActionCreator=(id:string)=> getBookInfoAction;