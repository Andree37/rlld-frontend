import { Button, Text } from '@chakra-ui/react';
import React, { JSXElementConstructor, ReactElement } from 'react';
import Styleguide from '../../../Styleguide';

export type OutlineButtonProps = {
    title: string;
    icon?: ReactElement<any, string | JSXElementConstructor<any>>;
    primaryColor?: string;
    secondaryColor?: string;
    onClick: () => void;
};

const OutlineButton: React.FC<OutlineButtonProps> = ({
    title,
    icon,
    primaryColor = Styleguide.color.purpleAndre,
    secondaryColor = Styleguide.color.purpleAndre,
    onClick,
}) => {
    return (
        <Button
            h={Styleguide.overlay.button.hSize}
            w={Styleguide.overlay.button.wSize}
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
        >
            <Text>{title}</Text>
        </Button>
    );
};

export default OutlineButton;
