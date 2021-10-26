import React, { Component } from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';

import './TodoListItem.css';

export default class TodoListItem extends Component {
  render() {
    const {
      label,
      onDelete,
      onToggleImportant,
      onToggleDone,
      isImportant,
      isDone,
    } = this.props;

    const classNames = cn('todo-list-item', {
      done: isDone,
      important: isImportant,
    });

    return (
      <span className={classNames}>
        <span className="todo-list-item-label" onClick={onToggleDone}>
          {label}
        </span>

        <button
          type="button"
          className="btn btn-outline-success btn-sm float-right"
          onClick={onToggleImportant}
        >
          <i className="fa fa-exclamation" />
        </button>

        <button
          type="button"
          className="btn btn-outline-danger btn-sm float-right"
          onClick={onDelete}
        >
          <i className="fa fa-trash-o" />
        </button>
      </span>
    );
  }
}

TodoListItem.propTypes = {
  label: PropTypes.string.isRequired,
  onDelete: PropTypes.func.isRequired,
  onToggleImportant: PropTypes.func.isRequired,
  onToggleDone: PropTypes.func.isRequired,
  isImportant: PropTypes.bool.isRequired,
  isDone: PropTypes.bool.isRequired,
};
