import React, { Component } from 'react';

export default (importComponent) => {
  class AsyncComponent extends Component {
    constructor(props) {
      super(props);

      this.state = {};
    }

    componentDidMount() {
      importComponent()
        .then((component) => {
          this.setState({
            component: component.default
          });
        });
    }

    render() {
      const { component } = this.state;

      return component
        ? React.createElement(component)
        : null;
    }
  }

  return AsyncComponent
}
