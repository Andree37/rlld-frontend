import React, { MutableRefObject } from 'react';

import { Box } from '@chakra-ui/react';

import GenerateURL from '../../components/molecules/GenerateURL';

export type MainProps = {
    generateRef: MutableRefObject<any>;
};

const Main: React.FC<MainProps> = ({ generateRef }) => {
    return (
        <Box m="5" minHeight="30%" ref={generateRef}>
            <GenerateURL />
        </Box>
    );
};

export default Main;
