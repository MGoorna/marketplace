import React, { Component, ErrorInfo, ReactNode } from 'react'

interface Props {
  fallback: string,
  children: ReactNode;
}

interface State {
  hasError: boolean;
}

class ErrorBoundary extends React.Component<Props, State> {
  public state: State = { hasError: false }

  public static getDerivedStateFromError(error: Error): State {
    return { hasError: true }
  }

  public componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.log(error, errorInfo)
  }

  public render() {
    if (this.state.hasError) return this.props.fallback

    return this.props.children
  }

}

export default ErrorBoundary