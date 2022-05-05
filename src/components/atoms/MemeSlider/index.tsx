import {
    Slider,
    SliderFilledTrack,
    SliderThumb,
    SliderTrack,
    Text,
    Center,
} from '@chakra-ui/react';
import React from 'react';
import Styleguide from '../../../Styleguide';
import EmojiBar from '../EmojiBar';

const DEFAULT_SLIDER_VALUE = 30;

export type MemeSliderProps = {
    value: number;
    setValue: (value: number) => void;
    defaultValue?: number;
};

const MemeSlider: React.FC<MemeSliderProps> = ({
    value,
    setValue,
    defaultValue = DEFAULT_SLIDER_VALUE,
}) => {
    return (
        <>
            <Center>
                <Text fontSize={24} fontWeight={1000}>
                    {value}%
                </Text>
            </Center>
            <Center>
                <Slider
                    w="95%"
                    aria-label="slider-ex-4"
                    defaultValue={defaultValue}
                    onChange={(v) => setValue(v)}
                >
                    <SliderTrack
                        bg="white"
                        borderWidth="1px"
                        h="25px"
                        borderRadius="lg"
                    >
                        <SliderFilledTrack
                            bg={Styleguide.color.lightAndre}
                        ></SliderFilledTrack>
                    </SliderTrack>
                    <div style={{ width: `${value}%`, overflow: 'hidden' }}>
                        <EmojiBar />
                    </div>
                    <SliderThumb
                        _focus={{ outline: 'none' }}
                        boxSize={45}
                        outline="none"
                        bgColor={Styleguide.color.purpleAndre}
                    />
                </Slider>
            </Center>
        </>
    );
};

export default MemeSlider;
