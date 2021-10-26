import React, { Component } from 'react';
import PropTypes from 'prop-types';

import './SearchPanel.css';

export default class SearchPanel extends Component {
  state = {
    searchText: '',
  };

  handleChange = (e) => {
    const searchText = e.target.value;
    this.setState({ searchText });
    this.props.onChange(searchText);
  };

  render() {
    return (
      <input
        type="text"
        className="form-control search-input"
        placeholder="type to search"
        value={this.state.searchText}
        onChange={this.handleChange}
      />
    );
  }
}

SearchPanel.propTypes = {
  onChange: PropTypes.func.isRequired,
};
