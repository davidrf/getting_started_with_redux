import React, { Component } from 'react';
import store from '../store/store';
import Counter from './Counter';

class CounterContainer extends Component {
  constructor(props) {
    super(props);
    this.state = { count: store.getState() };
    this.handlePlusButtonClick = this.handlePlusButtonClick.bind(this);
    this.handleMinusButtonClick = this.handleMinusButtonClick.bind(this);
  }

  componentDidMount() {
    let unsubscribeListener = store.subscribe(() => {
      this.setState({ count: store.getState() })
    });

    this.setState({ unsubscribeListener });
  }

  componentWillUnmount() {
    const { unsubscribeListener } = this.state;
    unsubscribeListener();
  }

  handlePlusButtonClick() {
    store.dispatch({ type: 'INCREMENT' });
  }

  handleMinusButtonClick() {
    store.dispatch({ type: 'DECREMENT' });
  }

  render() {
    const { count } = this.state;

    return (
      <Counter
        count={count}
        onPlusButtonClick={this.handlePlusButtonClick}
        onMinusButtonClick={this.handleMinusButtonClick}
      />
    );
  }
}

export default CounterContainer;
