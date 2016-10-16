/**
 * Created by xmityaz on 16.10.16.
 */

import React, { PropTypes } from 'react';
import iconsMap from '../../Icons/iconsMap'
import IconContainer from '../IconContaiener/IconContainer';
import theme from './IconsPanel.css';

function IconsPanel() {
  return (
    <div className={theme.root}>
      {iconsMap.map(item => (
        <IconContainer icon={item.icon} {...item} key={item.name} />
      ))}
    </div>
  );
}

export default IconsPanel ;
