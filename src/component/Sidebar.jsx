import { Box, Flex, Text, Image, useTheme } from '@chakra-ui/react';
import React, { useState } from 'react';
import { useSelector } from "react-redux";
import { Link as RouterLink } from 'react-router-dom';
import home from '../assets/images/home/home-icon.svg';
import cricket from '../assets/images/home/cricket-icon.svg';
import bonus from '../assets/images/home/bonus-icon.svg';
import spin from '../assets/images/home/spin-icon.svg';
import jetx from '../assets/images/home/jetx-icon.svg';

const Sidebar = () => {
  const { headerBg } = useSelector((state) => state.theme);

  const theme = useTheme();
  const { breakpoints } = theme;

  const [activeMenu, setActiveMenu] = useState('Lobby');

  const sideBarstyles = {
    [`@media(min-width: ${breakpoints.md})`]: {
      top: '65px',
      width: '81px',
      height: '100%',
      borderTop: 'initial',
      borderRight: '1px solid rgba(102, 161, 255, 0.2)',
    }
  };

  const centerContent = {
    display: "flex",
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  };

  const menuItems = [
    { name: 'Lobby', icon: home, link: '/' },
    { name: 'Cricket', icon: cricket, link: '/cricket' },
    { name: 'Bonus', icon: bonus, link: '/bonus' },
    { name: 'Lucky Spin', icon: spin, link: '/lucky-spin' },
    { name: 'JetX', icon: jetx, link: '/jetx' }
  ];

  return (
    <Box className='left_sideBar_menu' display={{ base: "none", md: "block" }} sx={sideBarstyles} style={{ backgroundImage: "linear-gradient(90deg,rgba(0,33,105,.5),rgba(0,39,98,0))" }} position="fixed" h="100%" maxW="100%" >
      <Flex flexDirection="column" paddingTop="12px">
        {menuItems.map((item) => (
          <RouterLink to={item.link} key={item.name} style={{ ...centerContent, opacity: activeMenu === item.name ? 1 : 0.6 }} className={`sider_menu ${item.name.toLowerCase().replace(' ', '-')}`}>
            <Box style={{ ...centerContent }} onClick={() => setActiveMenu(item.name)} position="relative" height="80px" width="80px">
              <Box className="icon_wr">
                <Image src={item.icon} boxSize="20px"></Image>
              </Box>
              <Text fontSize="12px !important">{item.name}</Text>
              <Box className='active_line'>
                <Box className={` ${activeMenu === item.name ? 'active' : ''}`} ></Box>
              </Box>
            </Box>
          </RouterLink>
        ))}
      </Flex>
    </Box>
  );
};

export default Sidebar;
