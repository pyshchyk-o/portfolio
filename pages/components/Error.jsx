import * as React from 'react';

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { error: false };
  }

  static getDerivedStateFromError(error) {
    return { error: error };
  }

  componentDidCatch(error, errorInfo) {
    console.log('componentDidCatch-----error', error);
  }

  render() {
    if (this.state.error) {
      return <h1>There seems to be a problem.</h1>;
    }
    return this.props.children;
  }
}

export default ErrorBoundary;
