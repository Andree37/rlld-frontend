import { Box, Heading, Stack, Text, Button } from '@chakra-ui/react';
import React from 'react';
import { useURL } from '../../../contexts/URL';
import OutlineButton from '../../../components/atoms/OutlineButton';
import Styleguide from '../../../Styleguide';
import MemeSlider from '../../../components/atoms/MemeSlider';

export type HistoryRlldProps = {
    setScreen: (s: string) => void;
};

const HistoryRlld: React.FC<HistoryRlldProps> = ({ setScreen }) => {
    const { state } = useURL();
    return (
        <>
            {state.urls.length == 0 ? (
                <Box m="5" minHeight="30%">
                    <Heading mb={4}>
                        You don't currently have any rllds...
                    </Heading>
                    <Text fontSize="xl">
                        But that can change! <br />
                        Click the button below to create one :D
                    </Text>
                    <Button
                        size="lg"
                        mt="24px"
                        color={Styleguide.color.lightAndre}
                        colorScheme="gray"
                        onClick={() => {
                            setScreen('main');
                        }}
                    >
                        Create a rlld
                    </Button>
                </Box>
            ) : (
                state.urls.map((url) => (
                    <Box m="5" minHeight="30%">
                        <Stack
                            borderWidth="1px"
                            borderRadius="lg"
                            backgroundColor={Styleguide.color.darkUI}
                            spacing={Styleguide.overlay.spacing / 2}
                            padding={[
                                Styleguide.overlay.padding,
                                Styleguide.overlay.padding * 2,
                            ]}
                        >
                            <Stack
                                direction="row"
                                justifyContent="space-between"
                                alignItems="center"
                            >
                                <Text>{url.link}</Text>
                                <Text fontSize="sm" textAlign="right">
                                    {url.dateCreated &&
                                        url.dateCreated
                                            .toISOString()
                                            .split('T')[0]}
                                </Text>
                            </Stack>
                            <Text
                                color={Styleguide.color.lightAndre}
                                fontSize="xs"
                            >
                                http://localhost:8080/{url.shortId}
                            </Text>
                            <MemeSlider
                                value={url.memePrctg}
                                setValue={() => {}}
                            />
                            <Box>
                                <Text>Total rlld clicks</Text>
                                <Text>1</Text>
                                <OutlineButton
                                    title="Copy RLLD!"
                                    onClick={() => {}}
                                ></OutlineButton>
                            </Box>
                        </Stack>
                    </Box>
                ))
            )}
        </>
    );
};

export default HistoryRlld;
