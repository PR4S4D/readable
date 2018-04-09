import React, { Component } from 'react';
import TextField from 'material-ui/TextField';
import { FormControl } from 'material-ui/Form';
import Button from 'material-ui/Button';
import { uuid } from '../../utils';
import { Paper } from 'material-ui';

export default class AddComment extends Component {
  initialState = {
    body: '',
    author: ''
  };
  state = this.initialState;

  handleChange = name => event => {
    this.setState({ [name]: event.target.value });
  };

  addComment = e => {
    e.preventDefault();
    this.reset();
    this.props.addComment({
      id: uuid(),
      parentId: this.props.postId,
      ...this.state
    });
  };

  reset = () => {
    this.setState(this.initialState);
  };

  render() {
    return (
      <Paper
        style={{
          margin: 'auto',
          width: '80%',
          marginTop: 10
        }}>
        <form
          onSubmit={this.addComment}
          style={{
            margin: '2%',
            padding: '2%'
          }}>
          <FormControl fullWidth>
            <TextField
              id="author"
              label="Author"
              placeholder="Author"
              value={this.state.author}
              onChange={this.handleChange('author')}
              multiline
              margin="normal"
            />
            <TextField
              id="body"
              label="Comment"
              placeholder="Comment"
              value={this.state.body}
              onChange={this.handleChange('body')}
              multiline
              margin="normal"
            />
          </FormControl>

          <Button type="Submit" variant="raised" size="small" color="primary">
            Submit
          </Button>
        </form>
      </Paper>
    );
  }
}
