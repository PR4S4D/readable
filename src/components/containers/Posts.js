import { connect } from 'react-redux'
import Posts from '../ui/Posts'
import { fetchPosts } from '../../actions'

const mapStateToProps = (state, props) => ({
  posts: state.posts,
  category: props.match.params.category ? props.match.params.category : 'all'
})

const mapDispatchToProps = dispatch => ({
  fetchPosts: () => dispatch(fetchPosts())
})

export default connect(mapStateToProps, mapDispatchToProps)(Posts)
