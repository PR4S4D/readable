import CreatePost from '../ui/CreatePost'
import { connect } from 'react-redux'
import { createPost, getCategories } from '../../actions'

const mapStateToProps = (state, props) => ({
  categories: state.categories.filter(cat => cat.name !== 'all')
})

const mapDispatchToProps = {createPost,getCategories}

export default connect(mapStateToProps, mapDispatchToProps)(CreatePost)
