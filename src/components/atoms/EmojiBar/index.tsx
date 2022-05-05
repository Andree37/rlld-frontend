import { Image } from '@chakra-ui/react';
import emojis from '../../../assets/emojis.svg';
import React from 'react';

const EmojiBar = () => {
    return (
        <Image
            src={emojis}
            style={{
                position: 'relative',
                minWidth: 320,
                overflow: 'hidden',
                pointerEvents: 'none',
                resize: 'horizontal',
            }}
            alt="emojis"
        />
    );
};

export default EmojiBar;
