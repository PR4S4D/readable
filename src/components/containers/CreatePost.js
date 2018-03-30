import CreatePost from '../ui/CreatePost'
import { connect } from 'react-redux'
import { createPost } from '../../actions'

const mapStateToProps = (state, props) => ({
  categories: state.categories
})

const mapDispatchToProps = {createPost}

export default connect(mapStateToProps, {createPost})(CreatePost)
