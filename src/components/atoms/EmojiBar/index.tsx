import { Image } from '@chakra-ui/react';
import emojis from '../../../assets/emojis.svg';
import React from 'react';
import useWindowDimensions from '../../../hooks/useWindowDimensions';

const EmojiBar = () => {
    const { width } = useWindowDimensions();

    return (
        <Image
            src={emojis}
            style={{
                position: 'relative',
                minWidth: width - 110,
                maxWidth: width - 110,
                pointerEvents: 'none',
                resize: 'horizontal',
            }}
            alt="emojis"
        />
    );
};

export default EmojiBar;
