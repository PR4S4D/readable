import React, { Component } from 'react'
import './style/App.css'
import Header from './components/ui/Header'
import PostsContainer from './components/containers/PostsContainer'
import PostDetail from './components/ui/PostDetail'
import NoMatch from './components/ui/NoMatch'
import { connect } from 'react-redux'
import { Switch, Route } from 'react-router-dom'
import CreatePost from './components/containers/CreatePost'

class App extends Component {
  render () {
    return (
      <div id='app'>
        <Header/>
        <main>
          <Switch>
            <Route exact path='/create' component={CreatePost} />
            <Route path='/:category?' component={PostsContainer} />
            <Route exact path='/post/:id' component={PostDetail} />
            <Route component={NoMatch} />
          </Switch>
        </main>
      </div>)
  }
}

export default connect()(App)
