import React, { MutableRefObject } from 'react';

import { Box } from '@chakra-ui/react';

import GenerateURL from '../../components/molecules/GenerateURL';
import useWindowDimensions from '../../hooks/useWindowDimensions';

export type MainProps = {
    generateRef: MutableRefObject<any>;
};

const Main: React.FC<MainProps> = ({ generateRef }) => {
    const { height } = useWindowDimensions();
    return (
        <Box m="5" minHeight={height / 2}>
            <GenerateURL reference={generateRef} />
        </Box>
    );
};

export default Main;
