import React from 'react';
import Search from './components/Search/Search'
import {AppContainer} from './styles'
import Gallery from './components/Gallery/Gallery'
import BookInfo from "./components/Details/Details"
import { Route, Switch, Redirect, BrowserRouter } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
     <AppContainer>
        <Switch>
          <Route path='/' exact render={()=><Redirect to="/search"/>}/>
          <Route path="/search" exact component={Search} />
          <Route path="/bookinfo/:id" component={BookInfo} />
        </Switch>
       
        {/* <Gallery></Gallery> */}
       
      </AppContainer>
    </BrowserRouter>
     
  )
}

export default App;
