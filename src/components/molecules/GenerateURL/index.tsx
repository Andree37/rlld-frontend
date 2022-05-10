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
import React, { useCallback, useMemo } from 'react';
import { CopyIcon } from '@chakra-ui/icons';
import CardTemplate from '../../templates/CardTemplate';
import Styleguide from '../../../Styleguide';
import MemeSlider from '../../atoms/MemeSlider';
import { useURL } from '../../../contexts/URL';

export type GenerateURLProps = {};

const GenerateURL: React.FC<GenerateURLProps> = () => {
    const toast = useToast();
    const {
        state,
        generateURL,
        setHasPressed,
        showCopy,
        url,
        setURL,
        memePrctg,
        setMemePrctg,
    } = useURL();

    const isValidURL = useMemo(() => {
        const expression = /([^\s\.]+\.[^\s]{2,}|www\.[^\s]+\.[^\s]{2,})/gi;
        const regex = new RegExp(expression);

        const m = url.match(regex)?.length;

        const s = url.includes(' ');

        const l = url
            .replaceAll('http://', '')
            .replaceAll('http://', '')
            .replaceAll('http:', '')
            .replaceAll('https:', '');

        return (
            url.length == 0 ||
            (m && m > 0 && url.length > 0 && !s && l.split('.').length > 2)
        );
    }, [url]);

    const top = useMemo(() => {
        return (
            <Box>
                <Text fontSize="xl" color="black">
                    Enter your URL to generate your rlld
                </Text>
                {!isValidURL && (
                    <Alert status="error" bgColor={Styleguide.color.darkUI}>
                        <AlertIcon />
                        <AlertTitle>Invalid URL</AlertTitle>
                        <AlertDescription>
                            Please ensure you have inserted a correct URL.
                        </AlertDescription>
                    </Alert>
                )}
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
            </Box>
        );
    }, [isValidURL, setURL, showCopy, url]);

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
                                    duration: 2000,
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
    }, [memePrctg, setMemePrctg, showCopy, state.urls, toast]);

    const onClick = useCallback(() => {
        if (isValidURL && url.length > 0) {
            setHasPressed(true);
            let link = url
                .replaceAll('http://', '')
                .replaceAll('http://', '')
                .replaceAll('http:', '')
                .replaceAll('https:', '');

            link = 'https://' + link;
            generateURL({
                // make this better somehow
                link,
                memePrctg,
                dateCreated: new Date(),
            });
        } else {
            const id = 2;
            if (!toast.isActive(id)) {
                toast({
                    id,
                    title: 'Error',
                    description: 'Please fill in URL correctly',
                    status: 'error',
                    duration: 2000,
                    isClosable: true,
                    position: 'top',
                });
            }
        }
    }, [generateURL, isValidURL, memePrctg, setHasPressed, toast, url]);

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
