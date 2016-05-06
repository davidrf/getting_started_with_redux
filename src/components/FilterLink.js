import React from 'react';

const FilterLink = props => {
  const { onClick, selected, text } = props;
  let className = "filter-link";

  if (selected) {
    return (
      <span className="filter-link">
        {text}
      </span>
    );
  }

  return (
    <a className="filter-link" href="#" onClick={onClick}>
      {text}
    </a>
  );
};

export default FilterLink;
