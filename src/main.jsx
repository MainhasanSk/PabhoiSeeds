import React, { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { WeatherProvider } from './context/WeatherContext'
import './index.css'
import App from './App.jsx'

const ErrorFallback = ({ error }) => (
  <div style={{ padding: '20px', color: 'red' }}>
    <h2>Something went wrong:</h2>
    <pre>{error.message}</pre>
    <pre>{error.stack}</pre>
  </div>
);

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, error: null };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true, error };
  }

  componentDidCatch(error, errorInfo) {
    console.error("Uncaught error:", error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return <ErrorFallback error={this.state.error} />;
    }

    return this.props.children;
  }
}

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ErrorBoundary>
      <WeatherProvider>
        <App />
      </WeatherProvider>
    </ErrorBoundary>
  </StrictMode>,
)
