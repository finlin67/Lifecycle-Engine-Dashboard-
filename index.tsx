import React from 'react';
import ReactDOM from 'react-dom/client';
import Lifecycle360 from './Lifecycle-360';

const rootElement = document.getElementById('root');
if (!rootElement) {
  throw new Error("Could not find root element to mount to");
}

const root = ReactDOM.createRoot(rootElement);
root.render(
  <React.StrictMode>
    <Lifecycle360 />
  </React.StrictMode>
);
