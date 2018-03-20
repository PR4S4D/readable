import { connect } from 'react-redux'
import PostsContainer from '../ui/PostsContainer'
import { fetchPosts } from '../../actions'

const mapStateToProps = (state, props) => ({
  posts: state.posts,
  category: props.match.params.category ? props.match.params.category : 'all'
})

const mapDispatchToProps = dispatch => ({
  fetchPosts: () => dispatch(fetchPosts())
})

export default connect(mapStateToProps, mapDispatchToProps)(PostsContainer)
