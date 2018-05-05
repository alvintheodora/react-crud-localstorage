// This file is shared across the demos.

import React from 'react';
import { ListItem, ListItemIcon, ListItemText } from 'material-ui/List';
import SettingsEthernetIcon from '@material-ui/icons/SettingsEthernet';
import CompareArrowsIcon from '@material-ui/icons/CompareArrows';
import DoneIcon from '@material-ui/icons/Done';
import HomeIcon from '@material-ui/icons/Home';


export const crudSessionStorage = (
    <div>
      <ListItem button>
        <ListItemIcon>
          <HomeIcon />
        </ListItemIcon>
        <ListItemText primary="CRUD with sessionStorage" />
      </ListItem>   
    </div>
  );

export const todoListWithFlux = (
  <div>
    <ListItem button>
      <ListItemIcon>
        <DoneIcon />
      </ListItemIcon>
      <ListItemText primary="To-Do List with Flux" />
    </ListItem>   
  </div>
);

export const reactRedux = (
  <div>
    <ListItem button>
      <ListItemIcon>
        <CompareArrowsIcon />
      </ListItemIcon>
      <ListItemText primary="React Redux" />
    </ListItem>   
  </div>
);

export const routerParams = (
    <div>
      <ListItem button>
        <ListItemIcon>
          <SettingsEthernetIcon />
        </ListItemIcon>
        <ListItemText primary="Router Params" />
      </ListItem>   
    </div>
);