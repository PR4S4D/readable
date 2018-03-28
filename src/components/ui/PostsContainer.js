import React, { Component } from 'react'
import PostCategories from '../containers/PostCategories'
import Posts from '../containers/Posts'
import Button from 'material-ui/Button'
import AddIcon from 'material-ui-icons/Add'
import { Link } from 'react-router-dom'

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
        <Link to='/create' class='create-post'>
        <Button variant='fab' color='secondary'>
          <AddIcon/>
        </Button>
        </Link>
      </div>
    )
  }
}
