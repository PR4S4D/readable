import { connect } from 'react-redux';
import Comment from '../ui/Comment';
import {
  upvoteComment,
  downvoteComment,
  deleteComment,
  editComment,
  clearComments
} from '../../actions';

const mapStateToProps = (state, props) => ({
  comment: props.comment,
  edit:
    state.editComment && state.editComment.id === props.comment.id
      ? true
      : false
});

const mapDispatchToProps = {
  upvoteComment,
  downvoteComment,
  deleteComment,
  editComment
};

export default connect(mapStateToProps, mapDispatchToProps)(Comment);
