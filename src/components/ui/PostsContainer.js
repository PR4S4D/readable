import React, { Component } from 'react'

export default class Posts extends Component {

  componentWillMount () {
    this
      .props
      .fetchPosts()
  }

  render () {
    const {posts, category} = this.props
    return (
      <div>
        <span>{category}</span>
        {posts && posts.map(post => (
           <div key={post.id}>
             {post.title}
           </div>
         ))}
      </div>

    )
  }
}
