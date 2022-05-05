import React, { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';

import { ChakraProvider, extendTheme } from '@chakra-ui/react';
import App from './App';
import reportWebVitals from './reportWebVitals';
const container = document.getElementById('root');
const root = createRoot(container!);

// remove unwanted white background
const theme = extendTheme({
    styles: {
        global: () => ({
            body: {
                bg: '',
            },
        }),
    },
});

root.render(
    <StrictMode>
        <ChakraProvider theme={theme}>
            <App />
        </ChakraProvider>
    </StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
