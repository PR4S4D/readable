import React, {Component} from 'react'
import MenuItem from 'material-ui/Menu/MenuItem'
import TextField from 'material-ui/TextField'
import Input from 'material-ui/Input'
import {FormControl} from 'material-ui/Form'
import InputAdornment from 'material-ui/Input';
import Button from 'material-ui/Button';
import {withStyles} from 'material-ui/styles';

export default class CreatePost extends Component {
  handleChange = name => event => {
    this.setState({[name]: event.target.value});
  };

  state = {
    category: ''
  }
  render() {
    return (
      <div style={{
        margin: 'auto',
        width: '60%'
      }}>
        <form action=''>
          <FormControl fullWidth>
            <TextField
              id="title"
              label="Title"
              onChange={this.handleChange('title')}
              required
              margin="normal"/>
            <TextField id="body" label="Body" placeholder="Body" multiline margin="normal"/>
          </FormControl>

          <TextField
            id="author"
            label="Author"
            placeholder="Author"
            margin="normal"
            style={{
            marginRight: '4%',
            width: '48%'
          }}/>
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
            {['react', 'redux', 'udacity'].map(option => (
              <MenuItem key={option} value={option}>
                {option}
              </MenuItem>
            ))}
          </TextField>
          <Button
            variant="raised"
            size="small"
            color="primary"
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
    )
  }
}