import React, { Component } from 'react'
import './style/App.css'
import Header from './components/ui/Header'
import Posts from './components/containers/Posts'
import PostDetail from './components/ui/PostDetail'
import NoMatch from './components/ui/NoMatch'
import { connect } from 'react-redux'
import { Switch, Route } from 'react-router-dom'

class App extends Component {
  render () {
    return (
      <div id='app'>
        <Header/>
        <main>
          <Switch>
            <Route exact path='/' component={Posts} />
            <Route exact path='/posts/:category' component={Posts} />
            <Route exact path='/post/:id' component={PostDetail} />
            <Route component={NoMatch} />
          </Switch>
        </main>
      </div>)
  }
}

export default connect()(App)
