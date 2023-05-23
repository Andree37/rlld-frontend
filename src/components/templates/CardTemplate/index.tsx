import { Stack, Center, useToast } from '@chakra-ui/react';
import React, { JSXElementConstructor, ReactElement, ReactNode } from 'react';
import OutlineButton from '../../atoms/OutlineButton';
import Styleguide from '../../../Styleguide';
import { CopyIcon } from '@chakra-ui/icons';
import { useURL } from '../../../contexts/URL';

export type CardTemplateProps = {
    top: ReactNode;
    bot: ReactNode;
    button?: {
        color?: string;
        title: string;
        icon?: ReactElement<any, string | JSXElementConstructor<any>>;
        onClick?: () => void;
    };
    generated: boolean;
    backgroundColor?: string;
};

const CardTemplate: React.FC<CardTemplateProps> = ({ top, bot, button, backgroundColor = 'white', generated = false }) => {
    const { state } = useURL();
    const toast = useToast();
    const url = `${process.env.REACT_APP_FRONTEND_URL}/${state.urls[state.urls.length - 1].shortId}`;

    return (
        <Stack
            borderWidth="1px"
            borderRadius="lg"
            backgroundColor={backgroundColor}
            spacing={Styleguide.overlay.spacing}
            padding={[Styleguide.overlay.padding, Styleguide.overlay.padding * 2]}
        >
            {top}
            {bot}
            {button && !generated ? (
                <Center>
                    <OutlineButton title={button.title} onClick={button.onClick!} fontSize={26} />
                </Center>
            ) : (
                <Center>
                    <OutlineButton
                        title="Copy rlld"
                        onClick={() => {
                            if (state.urls.length > 0) {
                                const id = 1;
                                const content = url;
                                navigator.clipboard.writeText(content);
                                if (!toast.isActive(id)) {
                                    toast({
                                        id,
                                        title: 'Copied rlld!',
                                        description: content,
                                        status: 'info',
                                        duration: 4000,
                                        isClosable: true,
                                        position: 'top',
                                    });
                                }
                            }
                        }}
                        icon={<CopyIcon w={10} h={10} />}
                    />
                </Center>
            )}
        </Stack>
    );
};
export default CardTemplate;
