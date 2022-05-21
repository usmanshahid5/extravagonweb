import React                          from "react";
import { ErrorBoundary }              from 'react-error-boundary';
import { ReactComponent as PageLogo } from '../../assets/images/hdc-logo.svg';
import './Error.css';

class Error extends React.Component {
  ErrorFallback = ({ resetErrorBoundary }) => {
    return (
      <div className="error-container">
        <div className="error-holder-container">
          <div className="error-logo-holder">
            <PageLogo/>
          </div>
          <h4 className="error-caption">Sorry, something went wrong.</h4>
          <p className="error-description">
            We are working on it and we will get it fixed as soon as we can
          </p>
          <span href="#" className="error-go-back-btn" onClick={ () => {
            resetErrorBoundary();
            window.location.origin();
          } }>Go Back</span>
        </div>
      </div>
    )
  }

  myErrorHandler = (error, componentStack) => {
    console.log(error, componentStack);
  }

  render() {
    const { children } = this.props;
    return (
      <ErrorBoundary
        FallbackComponent={ this.ErrorFallback }
        onError={ this.myErrorHandler }
      >
        { children }
      </ErrorBoundary>
    )
  }
}

export default Error