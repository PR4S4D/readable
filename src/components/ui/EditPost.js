import React, {Component} from 'react'
import MenuItem from 'material-ui/Menu/MenuItem'
import TextField from 'material-ui/TextField'
import Input from 'material-ui/Input'
import {FormControl} from 'material-ui/Form'
import Button from 'material-ui/Button';
import {uuid, capitalize} from '../../utils'

export default class EditPost extends Component {

  componentDidMount() {
    if (this.props.post) 
      this.setState({id: this.props.post.id, title: this.props.post.title, body: this.props.post.body})
  }

  onSubmit = (e) => {
    e.preventDefault();
    this
      .props
      .updatePost(this.state)
  }

  handleChange = name => event => {
    this.setState({[name]: event.target.value});
  };

  render() {
    if (!this.props.post || !this.state) 
      return (<div/>)
    const {author, category} = this.props.post
    return (
      <div
        style={{
        margin: 'auto',
        width: '80%',
        padding: '5%'
      }}>
        <form onSubmit={this.onSubmit}>
          <FormControl fullWidth>
            <TextField
              id="title"
              label="Title"
              onChange={this.handleChange('title')}
              value={this.state.title}
              required
              margin="normal"/>
            <TextField
              id="body"
              label="Body"
              placeholder="Body"
              value={this.state.body}
              onChange={this.handleChange('body')}
              multiline
              margin="normal"/>
          </FormControl>

          <TextField
            id="author"
            label="Author"
            value={author}
            disabled
            margin="normal"
            style={{
            marginRight: '4%',
            width: '48%'
          }}/>

          <TextField
            id="category"
            label="Category"
            value={category}
            disabled
            margin="normal"
            style={{
            width: '48%'
          }}/>

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

      </div>
    )
  }
}
