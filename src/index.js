import { MantineProvider } from '@mantine/core';
import React from 'react';
import ReactDOM from 'react-dom';

import App from './App.js';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <MantineProvider withGlobalStyles withNormalizeCSS>
      <SettingsProvider>
      <App />
      </SettingsProvider>
    </MantineProvider>
  </React.StrictMode>
);

