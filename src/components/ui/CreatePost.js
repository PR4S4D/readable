import React, { Component } from 'react';
import MenuItem from 'material-ui/Menu/MenuItem';
import TextField from 'material-ui/TextField';
import Input from 'material-ui/Input';
import { FormControl } from 'material-ui/Form';
import Button from 'material-ui/Button';
import { uuid, capitalize } from '../../utils';

export default class CreatePost extends Component {
  componentWillMount() {
    if (this.props.categories.length === 0) {
      this.props.getCategories();
    }
  }

  handleChange = name => event => {
    this.setState({ [name]: event.target.value });
  };

  initialState = {
    title: '',
    body: '',
    author: '',
    category: ''
  };

  state = this.initialState;

  onReset = () => {
    this.setState(this.initialState);
  };

  onSubmit = e => {
    console.log('submitting the form');
    e.preventDefault();
    this.props.createPost({
      id: uuid(),
      timestamp: Date.now(),
      ...this.state
    });
    this.onReset();
  };

  render() {
    return (
      <div
        style={{
          margin: 'auto',
          width: '60%'
        }}>
        <form onSubmit={this.onSubmit}>
          <FormControl fullWidth>
            <TextField
              id="title"
              label="Title"
              onChange={this.handleChange('title')}
              value={this.state.title}
              required
              margin="normal"
            />
            <TextField
              id="body"
              label="Body"
              placeholder="Body"
              value={this.state.body}
              onChange={this.handleChange('body')}
              multiline
              margin="normal"
            />
          </FormControl>

          <TextField
            id="author"
            label="Author"
            placeholder="Author"
            value={this.state.author}
            onChange={this.handleChange('author')}
            margin="normal"
            style={{
              marginRight: '4%',
              width: '48%'
            }}
          />
          <TextField
            id="select-category"
            select
            label="Category"
            value={this.state.category}
            onChange={this.handleChange('category')}
            helperText="Please select your category"
            required
            style={{
              width: '48%'
            }}
            margin="normal">
            {this.props.categories.map(option => (
              <MenuItem key={option.name} value={option.name}>
                {capitalize(option.name)}
              </MenuItem>
            ))}
          </TextField>
          <Button
            variant="raised"
            size="small"
            color="primary"
            onClick={this.onReset}
            style={{
              marginRight: '2%'
            }}>
            Reset
          </Button>
          <Button type="Submit" variant="raised" size="small" color="primary">
            Submit
          </Button>
        </form>
      </div>
    );
  }
}
