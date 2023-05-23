import React, { MutableRefObject } from 'react';
import { HStack, Image } from '@chakra-ui/react';
import BurgerMenu from '../BurgerMenu';
import logo from '../../../assets/logo.svg';
import Styleguide from '../../../Styleguide';

export type HeaderProps = {
    generateRef: MutableRefObject<any>;
    whatRef: MutableRefObject<any>;
    careersRef: MutableRefObject<any>;
    setScreen: (s: string) => void;
};

const Header: React.FC<HeaderProps> = ({ generateRef, whatRef, careersRef, setScreen }) => {
    return (
        <HStack direction="row" justifyContent="space-between" width="100%" padding={Styleguide.overlay.padding * 1}>
            <Image
                className="App-logo"
                src={logo}
                style={{
                    height: 60,
                    pointerEvents: 'none',
                }}
                alt="logo"
            />
            <BurgerMenu generateRef={generateRef} whatRef={whatRef} careersRef={careersRef} setScreen={setScreen} />
        </HStack>
    );
};

export default Header;
