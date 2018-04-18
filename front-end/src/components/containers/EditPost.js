import { connect } from 'react-redux'
import EditPost from '../ui/EditPost'
import { updatePost, cancelEdit } from '../../actions'

const mapStateToProps = (state, props) => ({
})

const mapDispatchToProps = dispatch => ({
  cancelEdit: () => dispatch(cancelEdit()),
  updatePost: post => dispatch(updatePost(post))
})

export default connect(mapStateToProps, mapDispatchToProps)(EditPost)
