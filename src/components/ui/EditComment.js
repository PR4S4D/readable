import React, { Component } from 'react';
import { uuid } from '../../utils';
import TextField from 'material-ui/TextField';
import { FormControl } from 'material-ui/Form';
import Button from 'material-ui/Button';

export default class EditComment extends Component {
  componentWillMount = () => {
    if (this.props.comment)
      this.setState({
        body: this.props.comment.body,
        id: this.props.comment.id
      });
  };

  constructor() {
    super();
    this.state = {
      body: ''
    };
  }

  handleChange = name => event => {
    this.setState({ [name]: event.target.value });
  };

  onSubmit = e => {
    e.preventDefault();
    this.props.updateComment({
      id: uuid(),
      ...this.state
    });
  };

  render() {
    console.log(this.props);
    const { comment } = this.props;
    if (!comment) return <div />;
    return (
      <form
        onSubmit={this.onSubmit}
        style={{
          margin: 'auto',
          width: '90%',
          padding: '2%'
        }}>
        <FormControl fullWidth>
          <TextField
            label="Comment"
            placeholder="Comment"
            value={this.state.body}
            onChange={this.handleChange('body')}
            multiline
            margin="normal"
          />
        </FormControl>
        <Button
          type="Submit"
          variant="raised"
          size="small"
          color="primary"
          style={{
            marginRight: '2%'
          }}>
          Update
        </Button>
        <Button color="secondary" onClick={() => this.props.cancelEdit()}>
          Cancel
        </Button>
      </form>
    );
  }
}
