import { Text, Input } from '@chakra-ui/react';
import React, { MutableRefObject, useMemo, useState } from 'react';
import { CopyIcon } from '@chakra-ui/icons';
import CardTemplate from '../../templates/CardTemplate';
import Styleguide from '../../../Styleguide';
import MemeSlider from '../../atoms/MemeSlider';

const DEFAULT_SLIDER_VALUE = 30;

export type GenerateURLProps = {
    reference: MutableRefObject<any>;
};

const GenerateURL: React.FC<GenerateURLProps> = ({ reference }) => {
    // TODO: Make the URL input checkable for stuff
    const [memePrctg, setMemePrctg] = useState(DEFAULT_SLIDER_VALUE);
    const [url, setURL] = useState('');

    const top = useMemo(() => {
        return (
            <>
                <Text fontSize="xl" color="black" ref={reference}>
                    Enter your URL to generate your rlld
                </Text>
                <Input
                    color={Styleguide.color.purpleAndre}
                    placeholder="URL"
                    _placeholder={{ opacity: 1, color: 'inherit' }}
                    value={url}
                    onChange={(ev) => setURL(ev.target.value)}
                    borderColor="gray.200"
                />
            </>
        );
    }, [reference, url]);

    const bot = useMemo(() => {
        return (
            <>
                <Text fontSize="xl" color="black">
                    Meme Probability
                </Text>
                <MemeSlider value={memePrctg} setValue={setMemePrctg} />
            </>
        );
    }, [memePrctg]);

    return (
        <>
            <CardTemplate
                top={top}
                bot={bot}
                button={{
                    title: 'Generate rlld!',
                    icon: <CopyIcon w={10} h={10} />,
                    onClick: () => {
                        // eslint-disable-next-line no-console
                        console.log(url);
                    },
                }}
            />
        </>
    );
};

export default GenerateURL;
