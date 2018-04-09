import React, { Component } from 'react';
import Sort from 'material-ui-icons/Sort';
import Menu, { MenuItem } from 'material-ui/Menu';
import IconButton from 'material-ui/IconButton';

export default class SortMenu extends Component {
  handleSortMenu = event => {
    this.setState({ anchorEl: event.currentTarget });
  };

  handleClose = e => {
    this.setState({ anchorEl: null });
    if (e.target.value) this.props.sort(e.target.value);
  };

  state = {
    anchorEl: null
  };

  sortOptions = [
    { sortId: 0, value: 'Time - New to Old' },
    { sortId: 1, value: 'Time - Old to New' },
    { sortId: 2, value: 'Votes - High to Low' },
    { sortId: 3, value: 'Votes - Low to High' }
  ];

  render() {
    const { anchorEl } = this.state;
    const { sortId } = this.props;
    const open = Boolean(anchorEl);
    return (
      <div
        style={{
          position: 'absolute',
          right: '2%'
        }}>
        <IconButton
          aria-haspopup="true"
          color="inherit"
          aria-owns={open ? 'menu-appbar' : null}
          aria-haspopup="true"
          onClick={this.handleSortMenu}>
          <Sort />
        </IconButton>

        <Menu
          id="menu-appbar"
          anchorEl={anchorEl}
          open={open}
          onClose={this.handleClose}>
          {this.sortOptions.map(option => (
            <MenuItem
              key={option.sortId}
              onClick={this.handleClose}
              value={option.sortId}
              selected={option.sortId === sortId}>
              {option.value}
            </MenuItem>
          ))}
        </Menu>
      </div>
    );
  }
}
