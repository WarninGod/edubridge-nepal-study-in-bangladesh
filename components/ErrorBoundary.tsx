import React, { Component, ReactNode, ErrorInfo } from 'react';

interface ErrorBoundaryProps {
  children: ReactNode;
}

interface ErrorBoundaryState {
  hasError: boolean;
  error: Error | null;
}

export class ErrorBoundary extends Component<ErrorBoundaryProps, ErrorBoundaryState> {
  public readonly props: ErrorBoundaryProps;
  public state: ErrorBoundaryState = { hasError: false, error: null };

  public constructor(props: ErrorBoundaryProps) {
    super(props);
  }

  public static getDerivedStateFromError(error: Error): ErrorBoundaryState {
    return { hasError: true, error };
  }

  public componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error('Error caught by boundary:', error, errorInfo);
  }

  public render() {
    if (this.state.hasError) {
      return (
        <div className="min-h-screen flex items-center justify-center bg-slate-50 px-4">
          <div className="bg-white p-8 rounded-lg shadow-lg max-w-md w-full text-center">
            <h1 className="text-2xl font-bold text-[#0A2647] mb-4">Oops! Something went wrong</h1>
            <p className="text-slate-600 mb-6">
              We're sorry for the inconvenience. Please try refreshing the page.
            </p>
            {this.state.error && (
              <details className="bg-slate-100 p-3 rounded text-sm text-left mb-6 text-slate-700">
                <summary className="cursor-pointer font-semibold">Error details</summary>
                <pre className="mt-2 overflow-auto text-xs">{this.state.error.toString()}</pre>
              </details>
            )}
            <button
              onClick={() => window.location.reload()}
              className="bg-[#0A2647] text-white py-2 px-6 rounded font-semibold hover:bg-[#146C94] transition-colors"
            >
              Refresh Page
            </button>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}
