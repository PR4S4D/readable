import { connect } from 'react-redux';
import Comments from '../ui/Comments';
import { fetchComments, clearComments } from '../../actions';

const mapStateToProps = (state, props) => ({
  postId: state.post ? state.post.id : null,
  comments: state.comments
});

const mapDispatchToProps = {
  fetchComments,
  clearComments
};

export default connect(mapStateToProps, mapDispatchToProps)(Comments);
