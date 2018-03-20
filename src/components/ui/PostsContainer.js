import React, { Component } from 'react'
import PostCategories from './PostCategories'
import Posts from '../containers/Posts'

export default class PostsContainer extends Component {

  componentWillMount () {
    this
      .props
      .getCategories()
  }

  render () {
    const {posts, categories} = this.props

    return (
      <div>
        {categories && <PostCategories categories={categories} />}
        <Posts/>
      </div>

    )
  }
}
