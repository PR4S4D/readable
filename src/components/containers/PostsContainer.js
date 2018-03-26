import { connect } from 'react-redux'
import PostsContainer from '../ui/PostsContainer'
import { fetchPosts, getCategories } from '../../actions'

const mapStateToProps = (state, props) => ({
  categories: state.categories,
  category: props.match.params.category ? props.match.params.category : ''
})

const mapDispatchToProps = dispatch => ({
  fetchPosts: () => dispatch(fetchPosts()),
  getCategories: () => dispatch(getCategories())
})

export default connect(mapStateToProps, mapDispatchToProps)(PostsContainer)
