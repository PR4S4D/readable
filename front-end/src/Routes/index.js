import React, { Component } from 'react';
import PostsContainer from '../components/containers/PostsContainer';
import PostDetails from '../components/containers/PostDetails';
import NoMatch from '../components/ui/NoMatch';
import { Switch, Route } from 'react-router-dom';
import CreatePost from '../components/containers/CreatePost';

export default class Routes extends Component {
  render() {
    return (
      <div>
        <Switch>
          <Route exact path="/post/create" component={CreatePost} />
          <Route exact path="/:category?" component={PostsContainer} />
          <Route exact path="/:category/:id" component={PostDetails} />
          <Route component={NoMatch} />
        </Switch>
      </div>
    );
  }
}
