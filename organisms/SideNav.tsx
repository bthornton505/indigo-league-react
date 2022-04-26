import React, { useState } from 'react';
import ArrowRightIcon from '@mui/icons-material/ArrowRight';
import { 
  Box,
  Drawer,
  List,
  ListItemIcon,
  ListItemText,
  ListItemButton,
} from '@mui/material';

type Anchor = 'top' | 'left' | 'bottom' | 'right';

const navOptions: string[] = [ 'Roster', 'Schedule', 'Tier List', 'Leaderboard', 'Hall of Fame']

export const SideNav = ({ ...props }) => {
  const { state, toggleDrawer } = props;

  const list = (anchor: Anchor) => (
    <Box
      sx={{ width: 250, marginTop: '4rem' }}
      role="presentation"
    >
      <List>
        {navOptions.map((text, index) => (
          <ListItemButton component="a" href={`/${text}`} key={text}>
            <ListItemIcon>
              <ArrowRightIcon/>
            </ListItemIcon>
              <ListItemText primary={text} />
          </ListItemButton>
        ))}
      </List>
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