import React, { Component } from 'react';
import { connect } from 'react-redux';
import FilterLinks from './FilterLinks';

const mapStateToProps = state => {
  return {
    visibilityFilter: state.visibilityFilter
  }
};

const mapDispatchToProps = dispatch => {
  return {
    onFilterLinkClick(event, filter)  {
      event.preventDefault();
      dispatch({
        type: 'SET_VISIBILITY_FILTER',
        filter
      });
    }
  }
};

let FilterLinksContainer = props => {
  const { visibilityFilter, onFilterLinkClick } = props;
  let filters = [
    { filter: 'SHOW_ALL', text: 'All' },
    { filter: 'SHOW_ACTIVE', text: 'Active' },
    { filter: 'SHOW_COMPLETED', text: 'Completed' }
  ];

  return (
    <FilterLinks
      currentFilter={visibilityFilter}
      filters={filters}
      onFilterLinkClick={onFilterLinkClick}
    />
  );
};

FilterLinksContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(FilterLinksContainer);

export default FilterLinksContainer;
