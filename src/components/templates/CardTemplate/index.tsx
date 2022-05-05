import { Box, Stack, Center, Spacer } from '@chakra-ui/react';
import React, { JSXElementConstructor, ReactElement, ReactNode } from 'react';
import OutlineButton from '../../atoms/OutlineButton';
import Styleguide from '../../../Styleguide';

export type CardTemplateProps = {
    top: ReactNode;
    bot: ReactNode;
    button?: {
        color?: string;
        title: string;
        icon?: ReactElement<any, string | JSXElementConstructor<any>>;
        onClick?: () => void;
    };
    backgroundColor?: string;
};

const CardTemplate: React.FC<CardTemplateProps> = ({
    top,
    bot,
    button,
    backgroundColor = 'white',
}) => (
    // TODO: Make the URL input checkable for stuff
    <Box
        width="full"
        height="full"
        borderWidth="1px"
        borderRadius="lg"
        backgroundColor={backgroundColor}
    >
        <Stack
            spacing={Styleguide.overlay.spacing}
            padding={[
                Styleguide.overlay.padding,
                Styleguide.overlay.padding * 2,
            ]}
        >
            {top}
            {bot}
            {button && (
                <Center>
                    <OutlineButton
                        title={button.title}
                        icon={button.icon}
                        onClick={button.onClick!}
                    />
                </Center>
            )}
        </Stack>
    </Box>
);
export default CardTemplate;
