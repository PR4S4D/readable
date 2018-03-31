import { connect } from 'react-redux'
import Posts from '../ui/Posts'
import { fetchPosts, upvotePost, downvotePost, editPost, deletePost } from '../../actions'

const mapStateToProps = (state, props) => ({
  posts: state.category === 'all'
    ? state.posts
    : state
      .posts
      .filter(post => post.category === state.category),
  editPost: state.editPost
})

const mapDispatchToProps = dispatch => ({
  fetchPosts: () => dispatch(fetchPosts()),
  upvote: (postId) => dispatch(upvotePost(postId)),
  downvote: (postId) => dispatch(downvotePost(postId)),
  deletePost: (postId) => dispatch(deletePost(postId)),
  onEditPost: (post) => dispatch(editPost(post))
})

export default connect(mapStateToProps, mapDispatchToProps)(Posts)
