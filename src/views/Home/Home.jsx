/**
 * Created by xmityaz on 22.04.16.
 */

import React, { Component, PropTypes } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { addTodo, removeTodo, completeTodo, clearCompleted } from '../../actions/todos';
import TodoItem from '../../components/Home/TodoItem/TodoItem';
import Footer from '../../components/Home/Footer/Footer';
import { SHOW_ALL, SHOW_COMPLETED, SHOW_ACTIVE} from '../../constants/filters';
import styles from './Home.css';
import { IconAlert, IconPerson } from '../../components/Icons';

const propTypes = {
  todos: PropTypes.array.isRequired,
  actions: PropTypes.object.isRequired,
};

const filterHandlers = {
  [SHOW_ALL]: () => true,
  [SHOW_COMPLETED]: todo => todo.completed,
  [SHOW_ACTIVE]: todo => !todo.completed
};

class Home extends Component {
  render() {
    return (
      <div className={styles.home}>
        <input
          className={styles.todoInput}
          placeholder="Start typing to filter icons..."
        />

        <div className={styles.iconsPanel}>
          <IconAlert />
          <IconPerson />
        </div>
      </div>
    )
  }
}

Home.propTypes = propTypes;

function mapStateToProps(state) {
  return {
    todos: state.todos
  }
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators({
      addTodo,
      removeTodo,
      completeTodo,
      clearCompleted
    }, dispatch)
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Home);
