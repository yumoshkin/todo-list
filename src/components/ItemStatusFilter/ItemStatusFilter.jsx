import React from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';

import './ItemStatusFilter.css';

const ItemStatusFilter = (props) => {
  const { filter, onChange } = props;

  const buttonArray = [
    { name: 'all', label: 'All' },
    { name: 'active', label: 'Active' },
    { name: 'done', label: 'Done' },
  ];

  const buttons = buttonArray.map(({ name, label }) => {
    const classNames = cn('btn', {
      'btn-info': filter === name,
      'btn-outline-secondary': filter !== name,
    });

    return (
      <button type="button" className={classNames} key={name} onClick={() => onChange(name)}>
        {label}
      </button>
    );
  });

  return <div className="btn-group">{buttons}</div>;
};

ItemStatusFilter.defaultProps = {
  filter: null,
};

ItemStatusFilter.propTypes = {
  filter: PropTypes.string,
  onChange: PropTypes.func.isRequired,
};

export default ItemStatusFilter;
