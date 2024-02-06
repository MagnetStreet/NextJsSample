import React from 'react';

export class LifeCycleComponent extends React.Component {
  /* 
    These lifecycle methods provide various opportunities to manage the state and behavior of a React component throughout its lifecycle. 
    Depending on the requirements of your application,
    you may choose to implement some or all of these methods to achieve the desired functionality. 
    This is the OLD react way
  */

  constructor(props: any) {
    super(props);
    this.state = {
      message: 'Initial state message',
    };
    console.log('Constructor executed');
  }

  componentDidMount() {
    // Executes after the component is mounted
    // Note: HTR Hot Module Replacement (HMR): This Next Feature can lead to multiple "Component did mount" logs on dev environments
    console.log('Component did mount');
  }

  componentDidUpdate(prevProps, prevState) {
    // It receives the previous props and state as arguments and can be used to perform side effects after a component's state or props have changed.
    console.log('Component did update');
  }

  componentWillUnmount() {
    //Method is called just before the component is unmounted and destroyed.
    // Do some clean up
    console.log('Component will unmount');
  }

  shouldComponentUpdate(nextProps, nextState) {
    // method is used to control if the component should re-render
    // Prevent unecesarry render is we want to stop re render if we don't care if a prop or state changed
    console.log('Should component update?');
    return true;
  }

  static getDerivedStateFromProps(nextProps, prevState) {
    // Returns an object to update the state based on props
    // method is a static method that is called every time the component is rendered
    console.log('Get derived state from props');
    return null;
  }

  getSnapshotBeforeUpdate(prevProps, prevState) {
    // Returns a value to pass to componentDidUpdate
    // method is called right before changes from render are committed to the DOM
    console.log('Get snapshot before update');
    return null;
  }

  render() {
    // Renders the component's UI
    console.log('Render method executed');
    return <h1>Hello, world!</h1>;
  }
}
