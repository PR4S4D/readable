import React, { Component } from 'react';
import Card, { CardActions, CardContent } from 'material-ui/Card';
import Tooltip from 'material-ui/Tooltip';
import Typography from 'material-ui/Typography';
import DeleteIcon from 'material-ui-icons/Delete';
import ThumbUpIcon from 'material-ui-icons/ThumbUp';
import ThumbDownIcon from 'material-ui-icons/ThumbDown';
import EditIcon from 'material-ui-icons/Edit';
import IconButton from 'material-ui/IconButton';
import Collapse from 'material-ui/transitions/Collapse';
import EditComment from '../containers/EditComment';
import { getPostedTime } from '../../utils';

export default class Comment extends Component {
  render() {
    const {
      comment,
      upvoteComment,
      downvoteComment,
      deleteComment,
      editComment,
      edit
    } = this.props;

    return (
      <div className="comment">
        {comment && (
          <Card key={comment.id}>
            <Collapse in={!edit}>
              <CardContent>
                <Typography>{comment.body}</Typography>
                <Typography variant="caption">
                  {comment.voteScore} Votes - Submitted{' '}
                  {getPostedTime(comment.timestamp)} by {comment.author}
                </Typography>
              </CardContent>
              <CardActions>
                <IconButton>
                  <ThumbUpIcon onClick={() => upvoteComment(comment.id)} />
                </IconButton>
                <IconButton>
                  <ThumbDownIcon onClick={() => downvoteComment(comment.id)} />
                </IconButton>
                <Tooltip
                  id="delete"
                  title="Delete Comment"
                  placement="bottom-end"
                  style={{
                    marginLeft: 'auto'
                  }}>
                  <IconButton onClick={() => deleteComment(comment.id)}>
                    <DeleteIcon />
                  </IconButton>
                </Tooltip>
                <Tooltip id="edit" title="Edit Comment" placement="bottom-end">
                  <IconButton onClick={e => editComment(comment)}>
                    <EditIcon />
                  </IconButton>
                </Tooltip>
              </CardActions>
            </Collapse>

            <Collapse in={edit}>
              <EditComment comment={comment} />
            </Collapse>
          </Card>
        )}
      </div>
    );
  }
}
