import React from 'react';
import IconAlert from './IconAlert.jsx';
import IconPerson from './IconPerson.jsx';

const iconsMap = [
  {
    name: 'alert',
    tags: ['alert', 'warning', 'triangle'],
    icon: <IconAlert />
  },
  {
    name: 'person',
    tags: ['person', 'user'],
    icon: <IconPerson />
  }
];

export default iconsMap;
