import React, {Component} from 'react'
import Tabs, {Tab} from 'material-ui/Tabs'
import {Paper} from 'material-ui'

export default class PostCategories extends Component {

  handleChange = (event, value) => {
    this.setState({value});
  };

  state = {
    value: 0
  }

  render() {
    return (
      <Paper style={{
        position: 'sticky',
        top: 0
      }}>
        <Tabs
          value={this.state.value}
          onChange={this.handleChange}
          indicatorColor="red"
          textColor="primary"
          centered>
          {this
            .props
            .categories
            .map((cat) => (<Tab key={cat.name} label={cat.name} href={cat.path}/>))}
        </Tabs>
      </Paper>
    )
  }
}
