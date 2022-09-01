import { AlertContainer, Figcaption, GalleryContainer , Thumbnail, } from "./styles"
import Alert from '@material-ui/lab/Alert';
import storeType,{book} from '../../types/storeType'
import { connect } from "react-redux"
import { Link } from "react-router-dom"
interface GalleryPropType{
     books:book[],
     isBookError:boolean
}
const Gallery : React.FC<GalleryPropType> = ({books,isBookError}) =>{

const alertElm=<AlertContainer><Alert severity="error">Oops! Try Again, Unable to search Books </Alert> </AlertContainer>;
return ( isBookError? alertElm : <GalleryContainer>{books.map((book)=>
    <Link to={'/bookinfo/'+book.id}  key={book.id}>
      <Thumbnail getUrl={book.thumbnail}>
     <Figcaption>
    {book.title}
      </Figcaption>   
     </Thumbnail>
 </Link>)  }</GalleryContainer>);    
}

const mapStateToProps = (state: storeType) => {
	console.log(state)
    return {
		books: state.bookData.books,
        isBookError:state.bookData.isBookError,
	};
};
export default connect(mapStateToProps)(Gallery)