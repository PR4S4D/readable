import React, { Component } from 'react';
import Tabs, { Tab } from 'material-ui/Tabs';
import { Link } from 'react-router-dom';
import AppBar from 'material-ui/AppBar';

export default class PostCategories extends Component {
  render() {
    const { categories, category } = this.props;
    let categoryIndex = category
      ? categories.findIndex(obj => obj.name === category)
      : 0;

    return (
      <AppBar style={{ position: 'sticky', background: 'white' }}>
        <Tabs
          value={categoryIndex}
          indicatorColor="secondary"
          textColor="secondary"
          centered>
          {this.props.categories.map(cat => (
            <Tab
              key={cat.name}
              label={cat.name}
              component={Link}
              to={cat.path}
            />
          ))}
        </Tabs>
      </AppBar>
    );
  }
}
