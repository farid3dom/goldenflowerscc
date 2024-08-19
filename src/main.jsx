import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import { StyledEngineProvider } from '@mui/material/styles';

///Import Utils
import './utils/i18n';

ReactDOM.createRoot(document.getElementById('root')).render(
    <StyledEngineProvider injectFirst>
        <App />
    </StyledEngineProvider>
);
