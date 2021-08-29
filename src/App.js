import React from 'react'
import {BrowserRouter, Switch, Route} from 'react-router-dom'

import Header from './components/common/header';
import Footer from './components/common/footer'
import NotFound from './components/notFound/index'

import MangaContextProvider from './contexts/MangaContext';

import HomeMangas from './components/manga/index.jsx'
import TopMangas from './components/manga/topMangas'
import NewestMangas from './components/manga/newestMangas'
import ReadMangas from './components/manga/readMangas';

function App() {
  return (
    <div className='main'>
      <BrowserRouter>
        <Header/>
        <Switch>
          <Route exact path='/'>
            <MangaContextProvider>
              <HomeMangas/>
            </MangaContextProvider>
          </Route>
          <Route path='/top'>
            <MangaContextProvider>
              <TopMangas/>
            </MangaContextProvider>
          </Route>
          <Route path='/newest'>
            <MangaContextProvider>
              <NewestMangas/>
            </MangaContextProvider>
          </Route>
          <Route path='/toread'>
            <MangaContextProvider>
              <ReadMangas/>
            </MangaContextProvider>
          </Route>
          <Route path='/' component={NotFound}/>
        </Switch>
        <Footer/>
      </BrowserRouter>
    </div>
  );
}

export default App;
