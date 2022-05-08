import {
    Text,
    Input,
    Alert,
    AlertIcon,
    AlertTitle,
    AlertDescription,
    useToast,
    Box,
} from '@chakra-ui/react';
import React, { MutableRefObject, useCallback, useMemo, useState } from 'react';
import { CopyIcon } from '@chakra-ui/icons';
import CardTemplate from '../../templates/CardTemplate';
import Styleguide from '../../../Styleguide';
import MemeSlider from '../../atoms/MemeSlider';
import { useURL } from '../../../contexts/URL';

export type GenerateURLProps = {
    reference: MutableRefObject<any>;
};

const GenerateURL: React.FC<GenerateURLProps> = ({ reference }) => {
    const toast = useToast();
    const { state, generateURL, setHasPressed, showCopy } = useURL();

    const [memePrctg, setMemePrctg] = useState(state._INITIAL_MEME_PRCTG);
    const [url, setURL] = useState('');

    const isValidURL = useMemo(() => {
        const expression =
            /[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_\+.~#?&//=]*)?/gi;
        const regex = new RegExp(expression);

        const m = url.match(regex)?.length;

        return url.length == 0 || (m && m > 0 && url.length > 0);
    }, [url]);

    const top = useMemo(() => {
        return (
            <Box>
                <Text fontSize="xl" color="black" ref={reference}>
                    Enter your URL to generate your rlld
                </Text>
                <Input
                    isInvalid={!isValidURL}
                    color={Styleguide.color.purpleAndre}
                    _hover={{ borderColor: Styleguide.color.lightAndre }}
                    focusBorderColor={Styleguide.color.purpleAndre}
                    placeholder="URL"
                    _placeholder={{ opacity: 1, color: 'inherit' }}
                    value={url}
                    onChange={(ev) => setURL(ev.target.value)}
                    borderColor="gray.200"
                    disabled={showCopy}
                />
                {!isValidURL && (
                    <Alert status="error" bgColor={Styleguide.color.darkUI}>
                        <AlertIcon />
                        <AlertTitle>Invalid URL</AlertTitle>
                        <AlertDescription>
                            Please ensure you have inserted a correct URL.
                        </AlertDescription>
                    </Alert>
                )}
            </Box>
        );
    }, [isValidURL, reference, showCopy, url]);

    const bot = useMemo(() => {
        if (showCopy) {
            return (
                <Box>
                    <Text fontSize="xl" color="black">
                        Generated rlld:
                    </Text>
                    <Input
                        color={Styleguide.color.purpleAndre}
                        _hover={{ borderColor: Styleguide.color.lightAndre }}
                        focusBorderColor={Styleguide.color.purpleAndre}
                        value={`http://localhost:8080/${
                            state.urls[state.urls.length - 1].shortId
                        }`}
                        onFocus={(ev) => {
                            ev.target.select();
                            const id = 1;
                            const s = `http://localhost:8080/${
                                state.urls[state.urls.length - 1].shortId
                            }`;
                            navigator.clipboard.writeText(s);
                            if (!toast.isActive(id)) {
                                toast({
                                    id,
                                    title: 'Copied rlld!',
                                    description: s,
                                    status: 'info',
                                    duration: 4000,
                                    isClosable: true,
                                    position: 'top',
                                });
                            }
                        }}
                        onChange={() => {}}
                        borderColor={Styleguide.color.purpleAndre}
                    />
                </Box>
            );
        } else {
            return (
                <Box>
                    <Text fontSize="xl" color="black">
                        Meme Probability
                    </Text>
                    <MemeSlider value={memePrctg} setValue={setMemePrctg} />
                </Box>
            );
        }
    }, [memePrctg, showCopy, state.urls, toast]);

    const onClick = useCallback(() => {
        if (isValidURL && url.length > 0) {
            setHasPressed(true);
            generateURL({ link: url, memePrctg, dateCreated: new Date() });
        }
    }, [generateURL, isValidURL, memePrctg, setHasPressed, url]);

    return (
        <Box>
            <CardTemplate
                top={top}
                bot={bot}
                button={{
                    title: 'Generate rlld!',
                    icon: <CopyIcon w={10} h={10} />,
                    onClick: onClick,
                }}
                generated={showCopy}
            />
            <Text color="white" fontWeight={100} fontSize="xs" mt="2">
                By clicking Generate rlld, I agree to the{' '}
                <strong>Terms of Service</strong>,
                <strong>Privacy Policy</strong> and Use of Cookies.
            </Text>
        </Box>
    );
};

export default GenerateURL;
