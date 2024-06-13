import { Box, Flex, Text, useTheme, Image } from '@chakra-ui/react';
import React, { useState } from 'react';
import { useSelector } from "react-redux";
import home from '../assets/images/home/home-icon.svg';
import cricket from '../assets/images/home/cricket-icon.svg';
import bonus from '../assets/images/home/bonus-icon.svg';
import spin from '../assets/images/home/spin-icon.svg';
import jetx from '../assets/images/home/jetx-icon.svg';
import deposit from '../assets/images/mobile-footer/footer-deposit.png';

function MobileFooter({ isLoggedIn, setIsLoggedIn }) {
    const { headerBg } = useSelector((state) => state.theme);

    const theme = useTheme();
    const { breakpoints } = theme;

    const [activeMenu, setActiveMenu] = useState('Lobby');

    const sideBarstyles = {
        bottom: '0',
        width: '100%',
        height: '60px',
        borderTop: 'initial',
        borderTop: '1px solid rgba(102, 161, 255, 0.2)',
    };

    const centerContent = {
        display: "flex",
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
    };

    const menuItems = [
        { name: 'Lobby', icon: home },
        { name: 'Cricket', icon: cricket },
        { name: 'Deposit', icon: '' }, 
        { name: 'Bonus', icon: bonus },
        { name: 'Lucky Spin', icon: spin },
    ];

    const depositIconStyle = {
        width: '43px',
        height: '43px',
        backgroundImage: `url(${deposit})`,
        backgroundPositionX: '0',
        backgroundPositionY: '10px',
        backgroundSize: '300% auto',
    };

    return (
        <>
            <Box bg="#0e111b" sx={sideBarstyles} position="fixed" h="100%" maxW="100%" zIndex="999" display={{ base: "block", md: "none" }}>
                <Box className='left_sideBar_menu' h="100%" maxW="100%"  style={{ backgroundImage: "linear-gradient(180deg,rgba(0,39,98,0),rgba(0,33,105,.5))" }} >
                    <Flex flexDirection="row" w="100%" height="100%">
                        {menuItems.map((item) => (
                            <Box
                                key={item.name}
                                style={{ ...centerContent, opacity: activeMenu === item.name ? 1 : 0.6 }}
                                className={`sider_menu ${item.name.toLowerCase().replace(' ', '-')}`}
                                flexGrow="1"
                                position='relative'
                                height="100%"
                            >
                                <Box style={{ ...centerContent }} height="100%" onClick={() => setActiveMenu(item.name)} position="relative" >
                                    <Box className="icon_wr">
                                        {item.name === 'Deposit' ? (
                                            <Box className='depositIcon' style={depositIconStyle}></Box>
                                        ) : (
                                            <Image src={item.icon} boxSize="20px"></Image>
                                        )}
                                    </Box>
                                    <Text fontSize="12px !important">{item.name}</Text>
                                    <Box className='active_line'>
                                        <Box className={` ${activeMenu === item.name ? 'active' : ''}`}></Box>
                                    </Box>
                                </Box>
                            </Box>
                        ))}
                    </Flex>
                </Box>
            </Box>
        </>
    );
}

export default MobileFooter;
