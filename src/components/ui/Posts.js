import React, {Component} from 'react'
import Tooltip from 'material-ui/Tooltip'
import Card, {CardActions, CardHeader, CardContent} from 'material-ui/Card'
import Typography from 'material-ui/Typography'
import DeleteIcon from 'material-ui-icons/Delete';
import ThumbUpIcon from 'material-ui-icons/ThumbUp';
import ThumbDownIcon from 'material-ui-icons/ThumbDown';
import EditIcon from 'material-ui-icons/Edit';
import IconButton from 'material-ui/IconButton';
import Button from 'material-ui/Button'

export default class Posts extends Component {

  componentWillMount = () => {
    this
      .props
      .fetchPosts()
  }

  render() {
    const {posts, upvote, downvote, deletePost} = this.props
    return (
      <div>
        {posts.map(post => (
          <Card
            key={post.id}
            style={{
            width: '80%',
            margin: 'auto',
            marginTop: 10
          }}>
            <CardHeader
              title={post.title}
              subheader={`September 14, 2016 ~ ${post.author} ~ ${post.voteScore} votes`}
              action={< IconButton > <EditIcon/> < /IconButton>}/>

            <CardActions>

              <Button>
                {`${post.commentCount} comments`}
              </Button>
              <IconButton>
                <ThumbUpIcon onClick={() => upvote(post.id)}/>
              </IconButton>

              <IconButton>
                <ThumbDownIcon onClick={() => downvote(post.id)}/>
              </IconButton>
              <Tooltip
                id='delete'
                title='Show the source'
                placement="bottom-end"
                style={{
                marginLeft: 'auto'
              }}>
                <IconButton>
                  <DeleteIcon onClick={() => deletePost(post.id)}/>
                </IconButton>
              </Tooltip>

            </CardActions>
          </Card>
        ))}
      </div>
    )
  }
}