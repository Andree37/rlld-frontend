import React, { MutableRefObject } from 'react';

import { Box, Stack } from '@chakra-ui/react';

import GenerateURL from '../../components/molecules/GenerateURL';

export type MainProps = {
    generateRef: MutableRefObject<any>;
};

const Main: React.FC<MainProps> = ({ generateRef }) => {
    return (
        <Box>
            <Box m="5">
                <Stack alignItems="baseline">
                    <GenerateURL reference={generateRef} />
                </Stack>
            </Box>
        </Box>
    );
};

export default Main;
