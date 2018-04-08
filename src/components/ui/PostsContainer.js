import React, { Component } from 'react';
import PostCategories from '../containers/PostCategories';
import Posts from '../containers/Posts';
import Button from 'material-ui/Button';
import AddIcon from 'material-ui-icons/Add';
import { Link, NavLink } from 'react-router-dom';
import NoMatch from './NoMatch';

export default class PostsContainer extends Component {
  componentWillMount() {
    this.props.getCategories();
    //reset edit post and comment on route change
    this.props.history.listen(() => this.props.cancelEdit());
  }

  componentDidUpdate() {
    if (this.props.category) {
      this.props.setCategory(this.props.category);
    } else {
      this.props.setCategory('all');
    }
  }

  isValidPath = () => {
    const { categories, category } = this.props;
    if (categories) {
      return (
        category === '' || categories.map(obj => obj.name).includes(category)
      );
    }

    return false;
  };

  render() {
    const { posts, categories, category, location } = this.props;
    return (
      <div>
        {this.isValidPath() && (
          <div>
            <PostCategories initialCategory={category} location={location} />
            <Posts />
            <NavLink to="/post/create" className="create-post">
              <Button variant="fab" color="secondary">
                <AddIcon />
              </Button>
            </NavLink>
          </div>
        )}
        {!this.isValidPath() && <NoMatch />}
      </div>
    );
  }
}
