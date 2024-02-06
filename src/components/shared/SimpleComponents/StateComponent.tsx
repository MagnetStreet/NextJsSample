import React, { Component } from 'react';

interface CounterState {
  count: number;
}

interface CounterProps {
  init: number;
}

class StateComponent extends Component<CounterProps, CounterState> {
  // Props are send by the parent to be used along the state
  // The Child does have control over the props it relies on the parent to tell the "state" of the variable
  // Prop and state updates triggers rerenders
  constructor(props: CounterProps) {
    super(props);
    this.state = { count: props.init };
  }

  render() {
    return (
      <div>
        <p>Count: {this.state.count}</p>
        <button onClick={() => this.setState({ count: this.state.count + 1 })}>
          Increment
        </button>
      </div>
    );
  }
}

export default StateComponent;
