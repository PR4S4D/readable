import React, { Component } from 'react'

export default class Posts extends Component {

  componentWillMount () {
    this.props.fetchPosts()
  }

  render () {
    const {posts} = this.props
    return (
      <div>
        {posts && posts.map(post => (
           <div key={post.id}>
             {post.title}
           </div>
         ))}
      </div>
    )
  }
}
