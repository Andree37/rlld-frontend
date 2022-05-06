import React, { useRef } from 'react';
import './App.css';
import Main from './pages/main';
import Header from './components/molecules/Header';
import Mission from './components/molecules/Mission';
import { useURL } from './contexts/URL';
import { Box } from '@chakra-ui/react';

import OutlineButton from './components/atoms/OutlineButton';

function App() {
    const generateRef = useRef();
    const whatRef = useRef();
    const myRef = useRef();
    const careersRef = useRef();

    const { showCopy } = useURL();

    // if press shorten another -> go back to initial state

    // if press my rlld -> navigate to my rlld XXXXXXXXX

    return (
        <>
            <Header
                generateRef={generateRef}
                whatRef={whatRef}
                myRef={myRef}
                careersRef={careersRef}
            />
            <Main generateRef={generateRef} />
            {!showCopy ? (
                <Mission reference={whatRef} />
            ) : (
                <Box
                    display="flex"
                    backgroundColor="black"
                    height="16%"
                    justifyContent="space-between"
                    p="5"
                >
                    <OutlineButton
                        title="My rrlds"
                        primaryColor="white"
                        secondaryColor="white"
                        onClick={() => {}}
                        w={32}
                    />
                    <OutlineButton
                        title="Shorten another"
                        primaryColor="white"
                        secondaryColor="white"
                        onClick={() => {}}
                        w={44}
                        fontSize={20}
                    />
                </Box>
            )}
        </>
    );
}

export default App;
