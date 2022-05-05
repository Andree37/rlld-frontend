import {
    Slider,
    SliderFilledTrack,
    SliderThumb,
    SliderTrack,
    Tooltip,
    Text,
    Center,
} from '@chakra-ui/react';
import React from 'react';
import Styleguide from '../../../Styleguide';

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
    const [showTooltip, setShowTooltip] = React.useState(false);
    return (
        <>
            <Center>
                <Text fontWeight={800}>{value}%</Text>
            </Center>
            <Slider
                aria-label="slider-ex-4"
                defaultValue={defaultValue}
                onChange={(v) => setValue(v)}
                onMouseEnter={() => setShowTooltip(true)}
                onMouseLeave={() => setShowTooltip(false)}
            >
                <SliderTrack
                    bg="white"
                    borderWidth="1px"
                    h="20px"
                    borderRadius="lg"
                >
                    <SliderFilledTrack bg={Styleguide.color.lightAndre} />
                </SliderTrack>
                <Tooltip
                    hasArrow={false}
                    bg="teal.500"
                    color="white"
                    placement="bottom"
                    isOpen={showTooltip}
                    label={`${value}%`}
                >
                    <SliderThumb
                        _focus={{ outline: 'none' }}
                        boxSize={10}
                        outline="none"
                        bgColor={Styleguide.color.purpleAndre}
                    />
                </Tooltip>
            </Slider>
        </>
    );
};

export default MemeSlider;
