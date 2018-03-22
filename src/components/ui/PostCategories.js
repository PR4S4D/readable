import React, {Component} from 'react'
import Tabs, {Tab} from 'material-ui/Tabs'
import {Paper} from 'material-ui'
import {Link} from 'react-router-dom'

export default class PostCategories extends Component {

  setCategory = (value) => {
    this
      .props
      .setCategory(value)
  };

  render() {

    const {categories, category, setCategory} = this.props
    let categoryIndex = category
      ? categories.findIndex(obj => obj.name === category)
      : 0

    return (
      <Paper style={{
        position: 'sticky',
        top: 0
      }}>
        <Tabs
          value={categoryIndex}
          indicatorColor="secondary"
          textColor="secondary"
          centered>
          {this
            .props
            .categories
            .map((cat) => <Tab
              key={cat.key}
              label={cat.name}
              component={Link}
              to={cat.path}
              onClick={() => setCategory(cat.name)}/>)}
        </Tabs>
      </Paper>
    )
  }
}
