import React, { useEffect, useState } from 'react';

import RoulettePro from 'react-roulette-pro';
import './roulette.css';
import { useParams } from 'react-router-dom';
import { Center, Image } from '@chakra-ui/react';

const prizes = [
    {
        id: 'meme0',
        image: require('../../assets/meme-0.png'),
    },
    {
        id: 'meme1',
        image: require('../../assets/meme-1.png'),
    },
    {
        id: 'meme2',
        image: require('../../assets/meme-2.png'),
    },
    {
        id: 'meme3',
        image: require('../../assets/meme-3.png'),
    },
    {
        id: 'meme4',
        image: require('../../assets/meme-4.png'),
    },
    {
        id: 'meme5',
        image: require('../../assets/meme-5.png'),
    },
    {
        id: 'meme6',
        image: require('../../assets/meme-6.png'),
    },
    {
        id: 'meme7',
        image: require('../../assets/meme-7.png'),
    },
    {
        id: 'notmeme',
        image: require('../../assets/not_meme.jpeg'),
    },
    {
        id: 'question_mark',
        image: require('../../assets/question_mark.jpeg'),
    },
];

const WINNING_INDEX = 31;

const reproductionArray = (array: any = [], length = 0) => [
    ...Array(length)
        .fill('_')
        .map((_, i) => {
            if (i === WINNING_INDEX) {
                return array[array.length - 1];
            }
            return array[Math.floor(Math.random() * array.length)];
        }),
];

const prizeList = [...reproductionArray(prizes, prizes.length * 20)];

const Roulette = () => {
    const [start, setStart] = useState(false);
    const params = useParams();
    const prizeIndex = WINNING_INDEX;

    const handlePrizeDefined = () => {
        window.location.href = `${process.env.REACT_APP_BACKEND_URL}/api/${params.shortID}`;
    };

    useEffect(() => {
        setStart(true);
    }, []);

    return (
        <Center w={'100%'} h={'100%'}>
            <RoulettePro
                prizes={prizeList}
                prizeItemRenderFunction={(item: any, index: number) => {
                    return <Image key={`${index}`} src={item.image} alt={item.id} boxSize={220} objectFit="cover" />;
                }}
                prizeIndex={prizeIndex}
                start={start}
                onPrizeDefined={handlePrizeDefined}
                spinningTime={3}
                design="GracefulLines"
                designOptions={{
                    prizeItemWidth: 220,
                    prizeItemHeight: 220,
                    hideSideArrows: true,
                    hideCenterDelimter: false,
                }}
            />
        </Center>
    );
};

export default Roulette;
