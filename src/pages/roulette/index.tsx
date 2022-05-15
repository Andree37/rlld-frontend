import React from 'react';

import RoulettePro from 'react-roulette-pro';
import 'react-roulette-pro/dist/index.css';

const prizes = [
    {
        id: 'meme',
        image: 'https://i.ibb.co/6Z6Xm9d/good-1.png',
    },
    {
        id: 'notmeme',
        image: 'https://i.ibb.co/T1M05LR/good-2.png',
    },
    {
        id: 'question',
        image: 'https://i.ibb.co/Qbm8cNL/good-3.png',
    },
];

const reproductionArray = (array: any = [], length = 0) => [
    ...Array(length)
        .fill('_')
        .map(() => array[Math.floor(Math.random() * array.length)]),
];

const prizeList = [
    ...prizes,
    ...reproductionArray(prizes, prizes.length * 12),
    ...prizes,
    ...reproductionArray(prizes, prizes.length),
];

const Roulette = () => {
    const prizeIndex = prizes.length * 1 + 2;

    const handlePrizeDefined = () => {
        console.log('🥳 Prize defined! 🥳');
    };

    return (
        <>
            <RoulettePro
                prizes={prizeList}
                prizeIndex={prizeIndex}
                start
                onPrizeDefined={handlePrizeDefined}
            />
        </>
    );
};

export default Roulette;
