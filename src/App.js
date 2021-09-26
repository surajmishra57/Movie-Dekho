import { Container } from '@material-ui/core';
import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.css';
import Header from './components/header/Header';
import SimpleBottomNavigation from './components/header/MainNav';
import Movies from './pages/movies/Movies';
import Search from './pages/search/Search';
import Series from './pages/series/Series';
import Trending from './pages/trending/Trending';

function App() {
  return (
    <BrowserRouter>
      <Header />
      <div className="app">
        <Container>
          <Switch>
            <Route path='/' component={Trending} exact />
            <Route path='/movie' component={Movies} />
            <Route path='/series' component={Series} />
            <Route path='/search' component={Search} />
          </Switch>
        </Container>
      </div>
      <SimpleBottomNavigation />
    </BrowserRouter>
  )
}
export default App