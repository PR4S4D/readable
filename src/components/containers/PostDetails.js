import { connect } from 'react-redux';
import PostDetails from '../ui/PostDetails';
import {
  fetchPosts,
  upvotePost,
  downvotePost,
  editPost,
  deletePost
} from '../../actions';

const mapStateToProps = (state, props) => ({
  post: state.posts.find(post => post.id === props.match.params.id),
  editPost: state.editPost
});

const mapDispatchToProps = dispatch => ({
  fetchPosts: () => dispatch(fetchPosts()),
  upvote: postId => dispatch(upvotePost(postId)),
  downvote: postId => dispatch(downvotePost(postId)),
  deletePost: postId => dispatch(deletePost(postId)),
  onEditPost: post => dispatch(editPost(post))
});

export default connect(mapStateToProps, mapDispatchToProps)(PostDetails);
