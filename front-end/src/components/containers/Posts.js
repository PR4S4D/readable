import { connect } from 'react-redux';
import Posts from '../ui/Posts';
import {
  fetchPosts,
  upvotePost,
  downvotePost,
  editPost,
  deletePost
} from '../../actions';

const getSortedPosts = state => {
  let filteredPosts =
    state.category === 'all'
      ? state.posts
      : state.posts.filter(post => post.category === state.category);

  if (filteredPosts) {
    switch (state.sort) {
      case 0:
        return filteredPosts.sort((a, b) => b.timestamp - a.timestamp);
      case 1:
        return filteredPosts.sort((a, b) => a.timestamp - b.timestamp);
      case 2:
        return filteredPosts.sort((a, b) => b.voteScore - a.voteScore);
      case 3:
        return filteredPosts.sort((a, b) => a.voteScore - b.voteScore);
      default:
        return filteredPosts;
    }
  }

  return filteredPosts;
};

const mapStateToProps = (state, props) => ({
  posts: getSortedPosts(state),
  editPost: state.editPost,
  sort: state.sort
});

const mapDispatchToProps = dispatch => ({
  fetchPosts: () => dispatch(fetchPosts()),
  upvote: postId => dispatch(upvotePost(postId)),
  downvote: postId => dispatch(downvotePost(postId)),
  deletePost: postId => dispatch(deletePost(postId)),
  onEditPost: post => dispatch(editPost(post))
});

export default connect(mapStateToProps, mapDispatchToProps)(Posts);
