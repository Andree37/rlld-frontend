import {
    Slider,
    SliderFilledTrack,
    SliderThumb,
    SliderTrack,
    Text,
    Center,
    Box,
} from '@chakra-ui/react';
import React from 'react';
import Styleguide from '../../../Styleguide';
import EmojiBar from '../EmojiBar';

export type MemeSliderProps = {
    value: number;
    setValue: (value: number) => void;
    editable?: boolean;
};

const MemeSlider: React.FC<MemeSliderProps> = ({
    value,
    setValue,
    editable,
}) => {
    return (
        <Box pointerEvents={editable ? 'auto' : 'none'}>
            <Center>
                {editable && (
                    <Text fontSize={24} fontWeight={1000} color="black">
                        {value}%
                    </Text>
                )}
            </Center>
            <Center>
                <Slider
                    w="95%"
                    aria-label="slider-ex-4"
                    defaultValue={value}
                    onChange={(v) => setValue(v)}
                    isReadOnly={!editable}
                >
                    <SliderTrack
                        bg="transparent"
                        borderWidth="1px"
                        h="25px"
                        borderRadius="lg"
                        borderColor="gray.200"
                    >
                        <SliderFilledTrack
                            bg={Styleguide.color.lightAndre}
                        ></SliderFilledTrack>
                        {!editable && (
                            <Text textAlign="right" width={`${value + 15}%`}>
                                {value}%
                            </Text>
                        )}
                    </SliderTrack>
                    <div
                        style={{
                            width: `${value}%`,
                            overflow: 'hidden',
                        }}
                    >
                        <EmojiBar />
                    </div>
                    {editable && (
                        <SliderThumb
                            _focus={{ outline: 'none' }}
                            boxSize={45}
                            outline="none"
                            bgColor={Styleguide.color.purpleAndre}
                        />
                    )}
                </Slider>
            </Center>
        </Box>
    );
};

export default MemeSlider;
