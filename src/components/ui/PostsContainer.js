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
    console.log(this.props)
    const {posts, categories, category} = this.props

    return (
      <div>
        {categories && <PostCategories />}
        <Posts/>
      </div>

    )
  }
}
