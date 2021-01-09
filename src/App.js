import React from 'react'
import {Route, Switch} from 'react-router-dom'
import {Auth} from 'pages/auth'
import {Home} from 'pages/home'
import './styles/index.scss'

export function App() {
  return (
    <Switch>
      <Route exact path={['/', '/login']} component={Auth} />
      <Route path="/im" component={Home} />
    </Switch>
  )
}
