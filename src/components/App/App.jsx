import React, { Component } from 'react';
import _ from 'lodash';

import AppHeader from '../AppHeader';
import SearchPanel from '../SearchPanel';
import TodoList from '../TodoList';
import ItemStatusFilter from '../ItemStatusFilter';
import ItemAddForm from '../ItemAddForm';
import './App.css';

const todoItems = [
  {
    id: Number(_.uniqueId()),
    label: 'Drink coffee',
    isImportant: false,
    isDone: false,
  },
  {
    id: Number(_.uniqueId()),
    label: 'Build awesome app',
    isImportant: true,
    isDone: false,
  },
  {
    id: Number(_.uniqueId()),
    label: 'Have lunch',
    isImportant: false,
    isDone: false,
  },
];

export default class App extends Component {
  state = {
    todos: todoItems,
    searchText: '',
    filterValue: 'all',
  };

  deleteItem = (id) => {
    this.setState(({ todos }) => {
      const newArray = todos.filter((el) => el.id !== id);
      return { todos: newArray };
    });
  };

  addItem = (text) => {
    const newTodo = {
      id: _.uniqueId(),
      label: text,
      isImported: false,
      isDone: false,
    };

    this.setState(({ todos }) => {
      const newArray = [...todos, newTodo];
      return { todos: newArray };
    });
  };

  toggleProperty = (todos, id, propName) => {
    const idx = todos.findIndex((el) => el.id === id);
    const newTodo = { ...todos[idx], [propName]: !todos[idx][propName] };
    const newArr = [...todos.slice(0, idx), newTodo, ...todos.slice(idx + 1)];
    return newArr;
  };

  toggleImportant = (id) => {
    this.setState(({ todos }) => ({
      todos: this.toggleProperty(todos, id, 'isImportant'),
    }));
  };

  toggleDone = (id) => {
    this.setState(({ todos }) => ({
      todos: this.toggleProperty(todos, id, 'isDone'),
    }));
  };

  getDoneCount = () => {
    const doneCount = this.state.todos.filter((el) => el.isDone).length;
    return doneCount;
  };

  search = (items, searchText) => {
    if (searchText.length === 0) {
      return items;
    }
    return items.filter((item) => item.label.toLowerCase().indexOf(searchText.toLowerCase()) > -1);
  };

  filter = (items, filter) => {
    switch (filter) {
      case 'all':
        return items;
      case 'active':
        return items.filter((item) => !item.isDone);
      case 'done':
        return items.filter((item) => item.isDone);
      default:
        return items;
    }
  };

  getTodoCount = () => this.state.todos.length - this.getDoneCount();

  handleSearchChange = (searchText) => {
    this.setState({ searchText });
  };

  handleFilterChange = (filterValue) => {
    this.setState({ filterValue });
  };

  render() {
    const { todos, searchText, filterValue } = this.state;

    const visibleItems = this.filter(this.search(todos, searchText), filterValue);

    return (
      <div className="todo-app">
        <AppHeader toDo={this.getTodoCount()} done={this.getDoneCount()} />
        <div className="top-panel d-flex">
          <SearchPanel onChange={this.handleSearchChange} />
          <ItemStatusFilter filter={filterValue} onChange={this.handleFilterChange} />
        </div>

        <TodoList
          todos={visibleItems}
          onDelete={this.deleteItem}
          onToggleImportant={this.toggleImportant}
          onToggleDone={this.toggleDone}
        />

        <ItemAddForm onAddItem={this.addItem} />
      </div>
    );
  }
}
