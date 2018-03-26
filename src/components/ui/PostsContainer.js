import React, { Component } from 'react'
import PostCategories from '../containers/PostCategories'
import Posts from '../containers/Posts'

export default class PostsContainer extends Component {

  componentWillMount () {
    this
      .props
      .getCategories()
  }

  render () {
    const {posts, categories, category} = this.props
    return (
      <div>
        {categories && <PostCategories initialCategory={category} />}
        <Posts/>
      </div>
    )
  }
}
