import React from 'react';
import AppBar from 'material-ui/AppBar';
import Toolbar from 'material-ui/Toolbar';
import Typography from 'material-ui/Typography';
import { Book } from 'material-ui-icons';
import SortMenu from '../containers/SortMenu';
import { Link } from 'react-router-dom';

export default () => {
  return (
    <AppBar position="static">
      <Toolbar>
        <Book />
        <Typography variant="title" color="inherit" component={Link} to="/">
          Readable
        </Typography>
        <SortMenu />
      </Toolbar>
    </AppBar>
  );
};
