import React from 'react';
import { Box, Image, Stack } from '@chakra-ui/react';
import logo from './assets/logo.svg';
import './App.css';
import Home from './components/molecules/GenerateURL';

function App() {
    return (
        <Box m="5">
            <Stack alignItems="baseline">
                <Image
                    className="App-logo"
                    src={logo}
                    style={{
                        height: 60,
                        pointerEvents: 'none',
                    }}
                    alt="logo"
                />
                <Home />
            </Stack>
        </Box>
    );
}

export default App;
