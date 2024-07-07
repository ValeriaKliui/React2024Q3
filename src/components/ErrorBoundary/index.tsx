import { Component, ErrorInfo, } from 'react';
import { ErrorBoundaryProps, ErrorBoundaryState } from './interfaces';
import './index.css';

export class ErrorBoundary extends Component<
    ErrorBoundaryProps,
    ErrorBoundaryState
> {
    constructor(props: ErrorBoundaryProps) {
        super(props);
        this.state = { hasError: false };
        this.resetError = this.resetError.bind(this);
    }

    static getDerivedStateFromError(_: Error): ErrorBoundaryState {
        return { hasError: true };
    }

    componentDidCatch(error: Error, errorInfo: ErrorInfo) {
        console.error('Error:', error, errorInfo);
    }

    resetError() {
        this.setState({ hasError: false })
    }

    render() {
        if (this.state.hasError) {
            return (
                <div className='container'>
                    <h3>Sorry.. there was an error</h3>
                    <button onClick={this.resetError}>OK</button>
                </div>
            );
        }
        return this.props.children;
    }
}
