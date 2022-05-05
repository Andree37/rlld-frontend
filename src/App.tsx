import React from 'react';
import { Box, ChakraProvider, Image, Stack } from '@chakra-ui/react';
import logo from './assets/logo.svg';
import Styleguide from './Styleguide';
import Home from './components/molecules/GenerateURL';

function App() {
    return (
        <Box margin={5}>
            <Stack
                paddingBottom={Styleguide.overlay.spacing}
                alignItems="baseline"
            >
                <Image
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
