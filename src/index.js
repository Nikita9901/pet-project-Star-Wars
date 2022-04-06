import React from 'react';
import {createRoot} from 'react-dom/client';
import {App} from '@react_redux_course/App';
import '@react_redux_course/styles/index.css';

const rootElement = document.getElementById('root');
const root = createRoot(rootElement);

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);