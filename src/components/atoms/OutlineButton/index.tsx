import { Button, Text } from '@chakra-ui/react';
import React, { JSXElementConstructor, ReactElement } from 'react';
import { useURL } from '../../../contexts/URL';
import Styleguide from '../../../Styleguide';

export type OutlineButtonProps = {
    title: string;
    icon?: ReactElement<any, string | JSXElementConstructor<any>>;
    primaryColor?: string;
    secondaryColor?: string;
    onClick: () => void;
    h?: number;
    w?: number;
    fontSize?: number;
};

const OutlineButton: React.FC<OutlineButtonProps> = ({
    title,
    icon,
    primaryColor = Styleguide.color.purpleAndre,
    secondaryColor = Styleguide.color.purpleAndre,
    onClick,
    h = Styleguide.overlay.button.hSize,
    w = Styleguide.overlay.button.wSize,
    fontSize = 24,
}) => {
    const { state } = useURL();

    return (
        <Button
            isLoading={
                state.urls.length > 1 &&
                !state.urls[state.urls.length - 1].shortId
            }
            h={h}
            w={w}
            variant="outline"
            fontWeight="semibold"
            color={primaryColor}
            _hover={{
                bg: secondaryColor,
                color: 'white',
            }}
            borderColor={primaryColor}
            borderWidth={5}
            borderRadius={Styleguide.overlay.button.borderRadius}
            _focus={{ outline: 'none' }}
            leftIcon={icon}
            onClick={onClick}
            fontSize={fontSize}
        >
            <Text>{title}</Text>
        </Button>
    );
};

export default OutlineButton;
