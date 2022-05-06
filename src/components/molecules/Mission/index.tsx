import React, { LegacyRef, MutableRefObject } from 'react';

import { Heading, Stack, Text, Image, Box, Spacer } from '@chakra-ui/react';
import catSleep from '../../../assets/catSleep.jpeg';
import tooDamnLong from '../../../assets/tooDamnLong.jpeg';

export type MissionProps = {
    reference: MutableRefObject<any>;
};

const Mission: React.FC<MissionProps> = ({ reference }) => {
    return (
        <Box display="flex" backgroundColor="black">
            <Stack alignItems="baseline" m="5">
                <Heading color="white">Who created rlld? 😬</Heading>
                <Text color="white" fontWeight={200} fontSize="s">
                    rlld is a tool André created when he didn't want to study
                    for an exam.
                </Text>
                <Box
                    display="flex"
                    justifyContent="center"
                    alignItems="center"
                    height="60%"
                    mt="15"
                    mb="15"
                >
                    <Image
                        src={catSleep}
                        style={{
                            height: '80%',
                            pointerEvents: 'none',
                        }}
                        alt="logo"
                    />
                </Box>
                <Text color="white" fontWeight={200} fontSize="s">
                    It goes without saying that his mission is not a noble
                    one...
                </Text>
                <Spacer />
                <Spacer />
                <Heading color="white" ref={reference as LegacyRef<any>}>
                    What is rlld?
                </Heading>
                <Text color="white" fontWeight={200} fontSize="s">
                    A rlld is simply a shorter version of an url, it might
                    redirect you to the original url or to a random meme. Our
                    goal is simply to make you enjoy a laugh with your friends.
                </Text>
                <Box
                    display="flex"
                    justifyContent="center"
                    alignItems="center"
                    height="60%"
                    mt="15"
                    mb="15"
                >
                    <Image
                        src={tooDamnLong}
                        style={{
                            height: '80%',
                            pointerEvents: 'none',
                        }}
                        alt="logo"
                    />
                </Box>
                <Text color="white" fontWeight={200} fontSize="s">
                    To do this we take use of 9GAG shuffle to generate the
                    random meme, with some probability. Beware this probability
                    is your choice.
                </Text>
                <Text color="white" fontWeight={100} fontSize="xs">
                    We have no control over the content displayed on the meme
                    and thus are not responsible for any effects it may have on
                    the viewer.
                </Text>
            </Stack>
        </Box>
    );
};

export default Mission;
