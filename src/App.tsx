import React, { useRef } from 'react';
import './App.css';
import Main from './pages/main';
import Header from './components/molecules/Header';
import Mission from './components/molecules/Mission';

function App() {
    const generateRef = useRef();
    const whatRef = useRef();
    const myRef = useRef();
    const careersRef = useRef();

    return (
        <>
            <Header
                generateRef={generateRef}
                whatRef={whatRef}
                myRef={myRef}
                careersRef={careersRef}
            />
            <Main generateRef={generateRef} />
            <Mission reference={whatRef} />
        </>
    );
}

export default App;
