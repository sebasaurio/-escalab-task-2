import React from 'react'
import {BrowserRouter, Switch, Route} from 'react-router-dom'

import Header from './components/common/header';
import Footer from './components/common/footer'
import NotFound from './components/notFound/index'

import HomeMangas from './components/manga/index.jsx'
import TopMangas from './components/manga/topMangas'
import NewestMangas from './components/manga/newestMangas'

function App() {
  return (
    <div className='main'>
      <BrowserRouter>
        <Header/>
        <Switch>
          <Route exact path='/' component={HomeMangas}/>
          <Route path='/top' component={TopMangas}/>
          <Route path='/newest' component={NewestMangas}/>
          <Route path='/' component={NotFound}/>
        </Switch>
        <Footer/>
      </BrowserRouter>
    </div>
  );
}

export default App;
