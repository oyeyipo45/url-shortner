import React from 'react';
//import SuccessMessage from './SuccessMessage';
//import Button from './Buttons/Button';

export default class MyErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { error: null, errorInfo: null };
  }

  componentDidCatch(error, errorInfo) {
    console.table('Catch Error: ' + error.toString(), errorInfo);
    this.setState({
      error: error,
      errorInfo: errorInfo,
    });
  }

  goTo() {
    window.location.href = '/dashboard';
  }

  render() {
    if (this.state.errorInfo) {
      return (
        <div>
          {/* <SuccessMessage
            style={{ position: 'fixed', background: '#275FFF', color: '#fff' }}
            classname='white'
            title='Something went wrong.'
            message='Something went wrong. Reload the page or go to dashboard'
          >
            <Button onClick={() => this.goTo()} type='button' block color='secondary'>
              Go to dashboard
            </Button>
          </SuccessMessage> */}
          SOMETHING WENT WRONG

          {/*<details style={{ whiteSpace: 'pre-wrap' }}>
            {this.state.error && this.state.error.toString()}
            <br />
            {this.state.errorInfo.componentStack}
          </details>*/}
        </div>
      );
    }
    // Normally, just render children
    return this.props.children;
  }
}
