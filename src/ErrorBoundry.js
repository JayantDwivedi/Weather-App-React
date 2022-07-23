import React, { Component } from "react";

export default class ErrorBoundry extends Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error) {
    // Update state so the next render will show the fallback UI.
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    console.log("Error====>" + error.toString());
    console.log("Error from boundry info =======>", errorInfo.componentStack);
  }

  render() {
    if (this.state.hasError) {
      return (
        <>
          <div>Something went wrong</div>
          <button
            onClick={() => {
              window.location.reload();
            }}
          >
            Go to home page
          </button>
        </>
      );
    }
    return this.props.children;
  }
}
