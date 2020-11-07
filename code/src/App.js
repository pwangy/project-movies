import React from 'react'
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom'

import { Nav } from './components/Nav'
import { Footer } from './components/Footer'
import { NotFound } from './pages/NotFound'
import { MovieList } from './components/MovieList'
import { MovieDetail } from './pages/MovieDetail'

export const App = () => {
  return (
    <BrowserRouter>
      <Nav />

      <Switch>
        {/* default: now playing */}
        <Route path="/" exact>
          <MovieList />
        </Route>
        {/* top rated */}
        <Route path="/top" exact>
          <MoviesTop />
        </Route>
        {/* coming soon */}
        <Route path="/soon" exact>
          <MoviesSoon />
        </Route>

        <Route path="/movies/:id" exact>
          <MovieDetail />
        </Route>

        <Route path="/404">
          <NotFound />
        </Route>
        <Redirect to="/404" />
      </Switch>
      <Footer />
    </BrowserRouter>
  )
}