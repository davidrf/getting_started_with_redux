import React from 'react';
import FilterLink from './FilterLink';

const FilterLinks = props => {
  const { currentFilter, filters, onFilterLinkClick } = props;

  let filterLinkElements = filters.map(filterObject => {
    const { filter, text } = filterObject;
    let onClick = event => {
      onFilterLinkClick(event, filter);
    };
    let selected = currentFilter === filter;
    return (
      <FilterLink key={text} onClick={onClick} selected={selected} text={text} />
    );
  });

  return (
    <p>
      Show:
      {filterLinkElements}
    </p>
  );
};

export default FilterLinks;
