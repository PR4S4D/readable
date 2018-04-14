import { connect } from 'react-redux';
import PostDetails from '../ui/PostDetails';
import {
  fetchPosts,
  upvotePost,
  downvotePost,
  editPost,
  deletePost,
  fetchPost,
  setCategory
} from '../../actions';

const mapStateToProps = (state, props) => ({
  postId: props.match.params.id,
  post: props.post ? props.post : state.post,
  editPost: state.editPost,
  ajax: state.ajax
});

const mapDispatchToProps = dispatch => ({
  fetchPosts: () => dispatch(fetchPosts()),
  upvote: postId => dispatch(upvotePost(postId)),
  downvote: postId => dispatch(downvotePost(postId)),
  deletePost: postId => dispatch(deletePost(postId)),
  onEditPost: post => dispatch(editPost(post)),
  fetchPost: post => dispatch(fetchPost(post)),
  setCategory: category => dispatch(setCategory(category))
});

export default connect(mapStateToProps, mapDispatchToProps)(PostDetails);
