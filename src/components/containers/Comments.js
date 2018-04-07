import { connect } from 'react-redux';
import Comments from '../ui/Comments';
import { fetchComments } from '../../actions';

const mapStateToProps = (state, props) => ({
  postId: state.post ? state.post.id : null,
  comments: state.comments
});

const mapDispatchToProps = { fetchComments };

export default connect(mapStateToProps, mapDispatchToProps)(Comments);
