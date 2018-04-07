import React, { Component } from 'react';
import Tooltip from 'material-ui/Tooltip';
import Card, { CardActions, CardHeader, CardContent } from 'material-ui/Card';
import Typography from 'material-ui/Typography';
import DeleteIcon from 'material-ui-icons/Delete';
import ThumbUpIcon from 'material-ui-icons/ThumbUp';
import ThumbDownIcon from 'material-ui-icons/ThumbDown';
import EditIcon from 'material-ui-icons/Edit';
import IconButton from 'material-ui/IconButton';
import Button from 'material-ui/Button';
import Collapse from 'material-ui/transitions/Collapse';
import EditPost from '../containers/EditPost';
import Comments from '../containers/Comments';
import AddComment from '../containers/AddComment';
import { NavLink } from 'react-router-dom';
import Avatar from 'material-ui/Avatar';

export default class PostDetails extends Component {
  componentWillMount() {
    /*   if (!this.props.post && !this.props.post.id) { */
    this.props.fetchPost(this.props.postId);
    /* } */
  }

  state = {
    editPost: false
  };

  editPost = post => post.id === this.props.editPost.id;
  render() {
    const { post, upvote, downvote, deletePost, onEditPost } = this.props;
    return (
      <div>
        {post && (
          <Card
            key={post.id}
            style={{
              width: '80%',
              margin: 'auto',
              marginTop: 10
            }}
            className="post">
            <Collapse in={!this.editPost(post)} timeout={500}>
              <CardHeader
                avatar={<Avatar src={`/img/${post.category}.png`} />}
                subheader={`September 14, 2016 ~ ${post.author} ~ ${
                  post.voteScore
                } votes`}
                title={post.title}
                action={
                  <IconButton>
                    <EditIcon onClick={e => onEditPost(post)} />
                  </IconButton>
                }
              />
              <CardContent>
                <Typography>{post.body}</Typography>
              </CardContent>
              <CardActions
                style={{
                  position: 'static'
                }}>
                <IconButton>
                  <ThumbUpIcon onClick={() => upvote(post.id)} />
                </IconButton>
                <IconButton>
                  <ThumbDownIcon onClick={() => downvote(post.id)} />
                </IconButton>
                <Button>{`${post.commentCount} comments`}</Button>
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
          </Card>
        )}

        <Comments />
        <AddComment />
      </div>
    );
  }
}
