import React, { Component } from 'react';

export default class Comments extends Component {
  componentDidUpdate() {
    console.log(this.props);
    this.props.fetchComments(this.props.postId);
  }

  render() {
    const { comments } = this.props;
    return (
      <div>
        {comments &&
          comments.map(comment => <div key={comment.id}>{comment.id}</div>)}
      </div>
    );
  }
}
