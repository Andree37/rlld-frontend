import React, { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import {
    ChakraProvider,
    extendTheme,
    ColorModeScript,
    ThemeConfig,
} from '@chakra-ui/react';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { URLProvider } from './contexts/URL';
const container = document.getElementById('root');
const root = createRoot(container!);

const config: ThemeConfig = {
    initialColorMode: 'dark',
    useSystemColorMode: false,
};

const theme = extendTheme({
    config,
    styles: { global: () => ({ body: { bg: '' } }) },
});

root.render(
    <StrictMode>
        <ColorModeScript initialColorMode={theme.config.initialColorMode} />
        <ChakraProvider theme={theme}>
            <URLProvider>
                <BrowserRouter>
                    <Routes>
                        <Route path="/" element={<App />} />
                    </Routes>
                </BrowserRouter>
            </URLProvider>
        </ChakraProvider>
    </StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
