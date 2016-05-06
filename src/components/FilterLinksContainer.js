import React, { Component } from 'react';
import FilterLinks from './FilterLinks';
import store from '../store/store';

class FilterLinksContainer extends Component {
  constructor(props) {
    super(props);
    const { visibilityFilter } = store.getState();
    this.state = { visibilityFilter };
    this.handleFilterLinkClick = this.handleFilterLinkClick.bind(this);
  }

  componentDidMount() {
    let removeTodosListener = store.subscribe(() => {
      let { visibilityFilter } = store.getState();
      this.setState({ visibilityFilter });
    });

    this.setState({ removeTodosListener });
  }

  componentWillUnmount() {
    this.state.removeTodosListener();
  }

  handleFilterLinkClick(event, filter) {
    event.preventDefault();
    store.dispatch({
      type: 'SET_VISIBILITY_FILTER',
      filter
    });
  }

  render() {
    const { visibilityFilter } = this.state;
    let filters = [
      { filter: 'SHOW_ALL', text: 'All' },
      { filter: 'SHOW_ACTIVE', text: 'Active' },
      { filter: 'SHOW_COMPLETED', text: 'Completed' }
    ];

    return (
      <FilterLinks
        currentFilter={visibilityFilter}
        filters={filters}
        onFilterLinkClick={this.handleFilterLinkClick}
      />
    );
  }
}

export default FilterLinksContainer;
