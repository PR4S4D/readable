import { connect } from 'react-redux'
import Posts from '../ui/Posts'
import { fetchPosts } from '../../actions'

const mapStateToProps = (state, props) => ({
  posts: state.posts
})

const mapDispatchToProps = dispatch => ({
  fetchPosts: () => dispatch(fetchPosts())
})

export default connect(mapStateToProps, mapDispatchToProps)(Posts)
