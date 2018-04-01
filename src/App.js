import React, { Component } from 'react';
import './style/App.css';
import Header from './components/ui/Header';
import PostsContainer from './components/containers/PostsContainer';
import PostDetails from './components/containers/PostDetails';
import NoMatch from './components/ui/NoMatch';
import { Switch, Route } from 'react-router-dom';
import CreatePost from './components/containers/CreatePost';

class App extends Component {
  render() {
    return (
      <div id="app">
        <Header />
        <main>
          <Switch>
            <Route exact path="/post/create" component={CreatePost} />
            <Route exact path="/:category?" component={PostsContainer} />
            <Route exact path="/post/:id" component={PostDetails} />
            <Route component={NoMatch} />
          </Switch>
        </main>
      </div>
    );
  }
}

export default App;
