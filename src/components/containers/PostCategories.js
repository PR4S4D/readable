import { connect } from 'react-redux'
import PostCategories from '../ui/PostCategories'
import { setCategory } from '../../actions'

const mapStateToProps = (state, props) => ({
  category: state.category,
  categories: state.categories
})

export default connect(mapStateToProps, {setCategory})(PostCategories)
