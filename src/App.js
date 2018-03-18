import React, { Component } from 'react'
import './style/App.css'
import Header from './components/ui/Header'
import Posts from './components/containers/Posts'
import { connect } from 'react-redux'

class App extends Component {
  render () {
    return (
      <div>
        <Header></Header>
        <Posts/>
      </div>
    )
  }
}

export default connect()(App)
