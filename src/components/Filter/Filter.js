import React from 'react';
import PropTypes from 'prop-types';

export default function Filter({ value, onChangeFilter }) {
  return (
    <div>
      Find contacts by name
      <input
        type="text"
        value={value}
        onChange={e => onChangeFilter(e.target.value)}
      />
    </div>
  );
}

Filter.propTypes = {
  
  onchangeFilter: PropTypes.func.isRequired,
};
