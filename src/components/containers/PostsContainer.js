import { connect } from 'react-redux'
import PostsContainer from '../ui/PostsContainer'
import { fetchPosts, getCategories, setCategory } from '../../actions'

const mapStateToProps = (state, props) => ({
  categories: state.categories,
  category: props.match.params.category ? props.match.params.category : '',
  location: props.location && props.location.pathname
})

const mapDispatchToProps = dispatch => ({
  fetchPosts: () => dispatch(fetchPosts()),
  getCategories: () => dispatch(getCategories()),
  setCategory: (category) => dispatch(setCategory(category))
})

export default connect(mapStateToProps, mapDispatchToProps)(PostsContainer)
