/**
 * Created by xmityaz on 22.04.16.
 */

import React, { Component } from 'react';
import IconsPanel from '../../components/Home/IconsPanel/IconsPanel';
import styles from './Home.css';

class Home extends Component {
  render() {
    return (
      <div className={styles.home}>
        <input
          className={styles.todoInput}
          placeholder="Start typing to filter icons..."
        />

        <IconsPanel />
      </div>
    )
  }
}

export default Home;
