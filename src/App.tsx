import React, { useRef, useState } from 'react';
import './App.css';
import Main from './pages/main';
import Header from './components/molecules/Header';
import Mission from './components/molecules/Mission';
import { useURL } from './contexts/URL';
import { Box } from '@chakra-ui/react';

import OutlineButton from './components/atoms/OutlineButton';
import HistoryRlld from './components/molecules/HistoryRlld';

function App() {
    const generateRef = useRef();
    const whatRef = useRef();
    const careersRef = useRef();

    const [screen, setScreen] = useState('main');

    const { showCopy, setHasPressed, setURL } = useURL();

    // REDO THE URL VALIDATION ON FRONTEND AND BACKEND LEL

    // if press my rlld -> navigate to my rlld XXXXXXXXX

    return (
        <>
            <Header generateRef={generateRef} whatRef={whatRef} careersRef={careersRef} setScreen={setScreen} />
            {screen === 'my' ? <HistoryRlld setScreen={setScreen} /> : <Main generateRef={generateRef} />}
            {!showCopy || screen == 'my' ? (
                <Mission reference={whatRef} />
            ) : (
                <Box display="flex" backgroundColor="black" height="16%" justifyContent="space-between" p="5">
                    <OutlineButton
                        title="My rrlds"
                        primaryColor="white"
                        secondaryColor="white"
                        onClick={() => {
                            setScreen('my');
                        }}
                        w={32}
                    />
                    <OutlineButton
                        title="Shorten another"
                        primaryColor="white"
                        secondaryColor="white"
                        onClick={() => {
                            setHasPressed(false);
                            setURL('');
                        }}
                        w={44}
                        fontSize={20}
                    />
                </Box>
            )}
        </>
    );
}

export default App;
