import { connect } from 'react-redux';
import Comment from '../ui/Comment';
import {
  upvoteComment,
  downvoteComment,
  deleteComment,
  editComment
} from '../../actions';

const mapStateToProps = (state, props) => ({
  comment: props.comment
});

const mapDispatchToProps = {
  upvoteComment,
  downvoteComment,
  deleteComment,
  editComment
};

export default connect(mapStateToProps, mapDispatchToProps)(Comment);
