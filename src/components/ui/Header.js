import React from 'react'
import AppBar from 'material-ui/AppBar'
import Toolbar from 'material-ui/Toolbar'
import Typography from 'material-ui/Typography'
import { Book } from 'material-ui-icons'

export default () => {
  return (
    <AppBar position='static'>
      <Toolbar>
        <Book/>
        <Typography variant='title' color='inherit'>
          Readable
        </Typography>
      </Toolbar>
    </AppBar>
  )
}
