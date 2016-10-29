/**
 * Created by xmityaz on 22.04.16.
 */

import React, { Component } from 'react';
import IconsPanel from '../../components/Home/IconsPanel/IconsPanel';
import styles from './Home.css';

class Home extends Component {
  constructor(props) {
    super(props);

    this.state = {
      searchText: ''
    };
  }

  onIconSearch = (e) => {
    this.setState({
      searchText: e.target.value,
    });
  };

  render() {
    const { searchText } = this.state;
    return (
      <div className={styles.home}>
        <input
          className={styles.todoInput}
          placeholder="Start typing to filter icons..."
          value={searchText}
          onChange={this.onIconSearch}
        />

        <IconsPanel searchText={searchText} />
      </div>
    )
  }
}

export default Home;
