import React, { Component } from 'react';
import Tooltip from 'material-ui/Tooltip';
import Card, { CardActions, CardHeader } from 'material-ui/Card';
import DeleteIcon from 'material-ui-icons/Delete';
import ThumbUpIcon from 'material-ui-icons/ThumbUp';
import ThumbDownIcon from 'material-ui-icons/ThumbDown';
import EditIcon from 'material-ui-icons/Edit';
import IconButton from 'material-ui/IconButton';
import Button from 'material-ui/Button';
import Collapse from 'material-ui/transitions/Collapse';
import EditPost from '../containers/EditPost';
import { NavLink } from 'react-router-dom';
import Avatar from 'material-ui/Avatar';
import { getPostedTime } from '../../utils';
import Divider from 'material-ui/Divider';

export default class Posts extends Component {
  componentWillMount() {
    this.props.fetchPosts();
  }

  state = {
    editPost: false
  };

  editPost = post => post.id === this.props.editPost.id;

  render() {
    const { posts, upvote, downvote, deletePost, onEditPost } = this.props;
    return (
      <Card className="posts">
        {posts &&
          posts.map((post, index) => (
            <div key={post.id} className="post">
              <Collapse in={!this.editPost(post)} timeout={500}>
                <CardHeader
                  avatar={<Avatar src={`/img/${post.category}.png`} />}
                  subheader={`${
                    post.voteScore
                  } Votes - Submitted ${getPostedTime(post.timestamp)} by ${
                    post.author
                  }`}
                  title={
                    <NavLink to={`post/${post.id}`}> {post.title} </NavLink>
                  }
                  action={
                    <IconButton>
                      <EditIcon onClick={e => onEditPost(post)} />
                    </IconButton>
                  }
                />
                <CardActions
                  style={{
                    position: 'static'
                  }}>
                  <Button>{`${post.commentCount} comments`}</Button>
                  <IconButton>
                    <ThumbUpIcon onClick={() => upvote(post.id)} />
                  </IconButton>
                  <IconButton>
                    <ThumbDownIcon onClick={() => downvote(post.id)} />
                  </IconButton>
                  <Tooltip
                    id="delete"
                    title="Delete Post"
                    placement="bottom-end"
                    style={{
                      marginLeft: 'auto'
                    }}>
                    <IconButton onClick={() => deletePost(post.id)}>
                      <DeleteIcon />
                    </IconButton>
                  </Tooltip>
                </CardActions>
              </Collapse>
              <Collapse in={this.editPost(post)} timeout={500}>
                {this.props.editPost && <EditPost post={post} />}
              </Collapse>
              <Divider />
            </div>
          ))}
      </Card>
    );
  }
}
