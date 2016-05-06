import React, { Component } from 'react';
import FilterLinks from './FilterLinks';

class FilterLinksContainer extends Component {
  constructor(props, context) {
    super(props, context);
    const { store } = this.context;
    const { visibilityFilter } = store.getState();
    this.state = { visibilityFilter };
    this.handleFilterLinkClick = this.handleFilterLinkClick.bind(this);
  }

  componentDidMount() {
    const { store } = this.context;
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
    const { store } = this.context;
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
FilterLinksContainer.contextTypes = {
  store: React.PropTypes.object
};

export default FilterLinksContainer;
