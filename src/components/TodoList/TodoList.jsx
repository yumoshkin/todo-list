import React from 'react';
import PropTypes, { bool } from 'prop-types';

import TodoListItem from '../TodoListItem';
import './TodoList.css';

const TodoList = (props) => {
  // eslint-disable-next-line object-curly-newline
  const { todos, onDelete, onToggleImportant, onToggleDone } = props;

  if (todos.length === 0) {
    return null;
  }

  const elements = todos.map((item) => {
    const { id, ...itemProps } = item;

    return (
      <li key={id} className="list-group-item">
        <TodoListItem
          {...itemProps}
          onDelete={() => onDelete(id)}
          onToggleImportant={() => onToggleImportant(id)}
          onToggleDone={() => onToggleDone(id)}
        />
      </li>
    );
  });

  return <ul className="list-group todo-list">{elements}</ul>;
};

TodoList.propTypes = {
  todos: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      label: PropTypes.string.isRequired,
      isImportant: bool.isRequired,
      isDone: bool.isRequired,
    }),
  ).isRequired,
  onDelete: PropTypes.func.isRequired,
  onToggleImportant: PropTypes.func.isRequired,
  onToggleDone: PropTypes.func.isRequired,
};

export default TodoList;
