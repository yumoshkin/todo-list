import React, { Component } from 'react';
import PropTypes from 'prop-types';

import './ItemAddForm.css';

export default class ItemAddForm extends Component {
  state = {
    label: '',
  };

  handleLabelChange = (e) => {
    this.setState({
      label: e.target.value,
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.onAddItem(this.state.label);
    this.setState({
      label: '',
    });
  };

  render() {
    return (
      <form className="item-add-form d-flex" onSubmit={this.handleSubmit}>
        <input
          type="text"
          className="form-control"
          placeholder="What needs to be done"
          onChange={this.handleLabelChange}
          value={this.state.label}
        />
        <button className="btn btn-outline-secondary" disabled={!this.state.label}>
          Add Item
        </button>
      </form>
    );
  }
}

ItemAddForm.propTypes = {
  onAddItem: PropTypes.func.isRequired,
};
