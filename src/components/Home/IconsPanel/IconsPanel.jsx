// @flow

import React  from 'react';
import allIcons from '../../Icons/icons'
import IconContainer from '../IconContaiener/IconContainer';
import theme from './IconsPanel.css';

function isIconApplied(icon:Object, text:string) {
  const { name, tags } = icon;
  return ~name.indexOf(text) || tags.find(tag => ~tag.indexOf(text));
}


function IconsPanel({searchText, icons}: { searchText: string, icons: Array<Object> }) {
  return (
    <div className={theme.root}>
      {
        icons
          .filter(icon => isIconApplied(icon, searchText))
          .map(item => (
            <IconContainer icon={item.icon} {...item} key={item.name}/>
          ))
      }
    </div>
  );
}

IconsPanel.defaultProps = {
  icons: allIcons,
};
export default IconsPanel;
