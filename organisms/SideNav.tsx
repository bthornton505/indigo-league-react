import React, { useState } from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
// import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import ArrowRightIcon from '@mui/icons-material/ArrowRight';

type Anchor = 'top' | 'left' | 'bottom' | 'right';

const navOptions: string[] = [ 'Roster', 'Schedule', 'Tier List', 'Leaderboard', 'Hall of Fame']

export const SideNav = ({ ...props }) => {
  const { state, toggleDrawer } = props;

  const list = (anchor: Anchor) => (
    <Box
      sx={{ width: 250, marginTop: '4rem' }}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <List>
        {navOptions.map((text, index) => (
          <ListItem button key={text}>
            <ListItemIcon>
              <ArrowRightIcon/>
            </ListItemIcon>
            <ListItemText primary={text} />
          </ListItem>
        ))}
      </List>
      {/* <Divider />
      <List>
        {['All mail', 'Trash', 'Spam'].map((text, index) => (
          <ListItem button key={text}>
            <ListItemIcon>
              <ArrowRightIcon/>
            </ListItemIcon>
            <ListItemText primary={text} />
          </ListItem>
        ))}
      </List> */}
    </Box>
  );

  return (
    <Drawer
      anchor={'left'}
      open={state['left']}
      onClose={toggleDrawer('left', false)}
    >
      {list('left')}
    </Drawer>
  );
}