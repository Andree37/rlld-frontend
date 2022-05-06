import { HamburgerIcon } from '@chakra-ui/icons';
import {
    IconButton,
    Menu,
    MenuButton,
    MenuItem,
    MenuList,
} from '@chakra-ui/react';
import React, { MutableRefObject } from 'react';
import Styleguide from '../../../Styleguide';

export type BurgerMenuProps = {
    generateRef: MutableRefObject<any>;
    whatRef: MutableRefObject<any>;
    myRef: MutableRefObject<any>;
    careersRef: MutableRefObject<any>;
};

const BurgerMenu: React.FC<BurgerMenuProps> = ({
    generateRef,
    whatRef,
    myRef,
    careersRef,
}) => {
    return (
        <Menu closeOnBlur closeOnSelect>
            <MenuButton
                as={IconButton}
                aria-label="Options"
                icon={<HamburgerIcon color="white" w={10} h={7} />}
                variant="outline"
                _hover={{ bg: Styleguide.color.lightAndre }}
                _expanded={{ bg: Styleguide.color.lightAndre }}
            />
            <MenuList backgroundColor="black" borderColor="black">
                <MenuItem
                    onClick={() => {
                        generateRef.current?.offsetTop &&
                            window.scrollTo(0, generateRef.current?.offsetTop);
                    }}
                    _hover={{ bg: Styleguide.color.lightAndre }}
                    color="white"
                >
                    Generate rlld
                </MenuItem>
                <MenuItem
                    onClick={() => {
                        whatRef.current?.offsetTop &&
                            window.scrollTo(0, whatRef.current?.offsetTop);
                    }}
                    _hover={{ bg: Styleguide.color.lightAndre }}
                    color="white"
                >
                    What is rlld
                </MenuItem>
                <MenuItem
                    onClick={() => {
                        myRef.current?.offsetTop &&
                            window.scrollTo(0, myRef.current?.offsetTop);
                    }}
                    _hover={{ bg: Styleguide.color.lightAndre }}
                    color="white"
                >
                    My rllds
                </MenuItem>
                <MenuItem
                    onClick={() => {
                        careersRef.current?.offsetTop &&
                            window.scrollTo(0, careersRef.current?.offsetTop);
                    }}
                    _hover={{ bg: Styleguide.color.lightAndre }}
                    color="white"
                >
                    Careers 👾
                </MenuItem>
            </MenuList>
        </Menu>
    );
};

export default BurgerMenu;
