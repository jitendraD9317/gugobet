import { Box, Text, Image, Icon, Flex, Heading, Tabs, TabList, TabPanels, Tab, TabPanel, position } from '@chakra-ui/react'
import { RiArrowLeftSLine } from "react-icons/ri";
import { useSelector } from "react-redux";
import React, { useState } from 'react';
import { FiMenu, FiSearch, FiHome } from "react-icons/fi";


import luckySportIcon from '../assets/images/cricket/lucky-sport-icon.png'
import enIcon from '../assets/images/cricket/en.png'

import livepage from '../assets/images/cricket/menu/live_page.svg'
import Quicklinkfire from '../assets/images/cricket/menu/Quicklink_fire.gif'
import Cricketquicklink from '../assets/images/cricket/menu/Cricket_quicklink_v3.svg'
import Soccerquicklink from '../assets/images/cricket/menu/Soccer_quicklink_v3.svg'
import Basketballquicklink from '../assets/images/cricket/menu/Basketball_quicklink_v3.svg'
import Tennisquicklink from '../assets/images/cricket/menu/Tennis_quicklink_v3.svg'
import Volleyballquicklink from '../assets/images/cricket/menu/Volleyball_quicklink_v3.svg'
import rugbyball from '../assets/images/cricket/menu/rugby-ball.png'
import Baseballquicklink from '../assets/images/cricket/menu/Baseball_quicklink_v3.svg'
import Icehockeyquicklink from '../assets/images/cricket/menu/Ice_hockey_quicklink_v3.svg'
import Badmintonquicklink from '../assets/images/cricket/menu/Badminton_quicklink_v3.svg'
import Tabletennisquicklink from '../assets/images/cricket/menu/Table_tennis_quicklink_v3.svg'
import boxingglove from '../assets/images/cricket/menu/boxing-glove.png'
import Aussierulesquicklink from '../assets/images/cricket/menu/Aussie_rules_quicklink_v3.svg'
import Dartsquicklink from '../assets/images/cricket/menu/Darts_quicklink_v3.svg'
import Snookerquicklink from '../assets/images/cricket/menu/Snooker_quicklink_v3.svg'
import Mmaquicklink from '../assets/images/cricket/menu/Mma_quicklink_v3.svg'
import fieldhockey from '../assets/images/cricket/menu/field_hockey.png'
import Bowls from '../assets/images/cricket/menu/Bowls.png'


import worldCup from '../assets/images/cricket/world-cup.jpg'

// Live
import live from '../assets/images/lobby/cards/live/live.png';
import Mode from '../component/Cricket/Mode';
import ModeRight from '../component/Cricket/ModeRight';

function Cricket() {
    const { cricketSectionBg, primaryBg, bonusRecordTabsBg, resultBoxBg } = useSelector((state) => state.theme);

    const borderStyle = {
        borderRight: "1px solid rgba(255, 255, 255, 0.1)",
        position: "relative"
    };
    const imgStyle = {
        width: "28px",
        hieght: "auto",
    }
    const liveCard = {
        width: "26px",
        height: "14px",
        backgroundColor: "rgb(231, 48, 48)",
        borderRadius: "7px",
        position: "absolute",
        right: "11px",
        top: "2px",
        display: "flex",
        justifyContent: "center",
        padding: "2px",
    }

    const bannerContent = [
        { img: worldCup, },
        { img: worldCup, },
        { img: worldCup, },
        { img: worldCup, },
        { img: worldCup, },
        { img: worldCup, },
        { img: worldCup, },
        { img: worldCup, },
        { img: worldCup, },
        { img: worldCup, },
        { img: worldCup, },
        { img: worldCup, },
    ];
    return (
        <Box className="cricket_page main_pageBody homePageGrid_spacing">
            <Box bg={cricketSectionBg} position="fixed" style={{ zIndex: '99' }} top={{ base: "103px", md: "65px" }} w={{ base: "100%", md: "calc( 100% - 81px)" }} >
                <Box className='topHeader flexCenter' h="93px" p="10px" justifyContent="space-between">
                    <Box>
                        <Image src={luckySportIcon} w="73px" h="73px"></Image>
                    </Box>
                    <Box display="flex" >
                        <Image src={enIcon} w="17px" h="16px" m="16px 8px 0px 0px"></Image>
                        <Box display="flex">
                            <Box>
                                <Box fontSize="9px" fontWeight="600">My Bets</Box>
                                <Box class="wallet flexCenter" fontWeight="600" fontSize="10px" bg="rgba(255, 255, 255, 0.1)" p="2px 10px" borderRadius="3px">0</Box>
                            </Box>
                            <Box>
                                <Image w="30px" h="30px" borderRadius="50%" ml="6px" mr="8px" src="https://img.freepik.com/free-vector/astronaut-holding-flag-space-cartoon-icon-illustration-technology-space-icon-isolated-flat-cartoon-style_138676-3099.jpg?w=1060&t=st=1677227456~exp=1677228056~hmac=d78bb17b7b7d6ac3f750c17b412d38034a22b3e20c42edba9b07925314a0fb2e"></Image>
                            </Box>
                        </Box>
                    </Box>
                </Box>
                <Box overflowX="auto"
                    css={{
                        '&::-webkit-scrollbar': {
                            width: '100%',
                            height: '5px',
                        },
                        '&::-webkit-scrollbar-track': {
                            background: "#5a6071",
                        },
                        // '&::-webkit-scrollbar-thumb': {
                        //     background: scrollThumbBg,
                        //     borderRadius: '10px',
                        // },
                    }}>
                    <Flex as="ul" className="navFixedV3" id="navlink_list">
                        <Box as="li" style={{ ...borderStyle }} className="nav-burger-pc">
                            <Box className="nav-burger burger-area" minW="80px" display="flex" justifyContent="center" alignItems="center">
                                <Icon as={FiMenu} height="28px" w="28px" />
                            </Box>
                        </Box>
                        <Box as="li" style={{ ...borderStyle }} >
                            <Box as="a" minW="80px" display="flex" justifyContent="center" alignItems="center" href="#/">
                                <Box className="nav-burger">
                                    <Icon as={FiSearch} height="28px" w="28px" />
                                </Box>
                            </Box>
                        </Box>
                        <Box as="li" style={{ ...borderStyle }} >
                            <Box as="a" minW="80px" display="flex" justifyContent="center" alignItems="center" href="#/">
                                <Box className="Home">
                                    <Icon as={FiHome} height="28px" w="28px" />
                                </Box>
                            </Box>
                        </Box>
                        <Box as="li" style={{ ...borderStyle }} >
                            <Box as="a" minW="80px" display="flex" justifyContent="center" alignItems="center" href="#/" >
                                <Image style={{ ...imgStyle }} src={livepage}></Image>
                            </Box>
                        </Box>
                        <Box as="li" style={{ ...borderStyle }} >
                            <Box as="a" minW="80px" display="flex" justifyContent="center" alignItems="center" href="#/">
                                <Image style={{ ...imgStyle }} src={Quicklinkfire}></Image>
                            </Box>
                        </Box>
                        <Box as="li" style={{ ...borderStyle }} >
                            <Box as="a" minW="80px" display="flex" justifyContent="center" alignItems="center" href="#/">
                                <Box style={{ ...liveCard }}>
                                    <svg id="Layer_2" data-name="Layer 2" width="12.85" height="10px" viewBox="0 0 1554.84 1209.87"><g id="Layer_2-2" data-name="Layer 2"><path d="M1462.81,218.89c-37.07-72.71-84.01-138.45-140.6-197.24-20.77-21.58-47.55-27.21-72.67-16.08-23.94,10.61-41.17,34.77-36.16,60.18,3.42,17.33,12.65,35.7,24.56,48.82,120.85,133.25,185.64,289.14,190.44,468.95,5.29,197.94-60.09,369.8-194.48,515.47-8.25,8.95-15.58,20.23-19.14,31.73-8.75,28.32,4.56,57.26,30.24,71.19,26.95,14.63,55.77,9.01,79.4-16.2,152.72-162.89,227.59-356.8,230.44-539.96,.27-175.9-30-305.18-92.04-426.88v.02Z" fill="#fff"></path><path d="M309.68,1085.1C99.84,854.9,65.61,497.11,230.16,232.64c27.85-44.76,63.61-84.66,96.45-126.24,16.7-21.14,21.73-43.63,11.33-68.39-10.18-24.24-29.73-35.98-49.75-37.35-27.93-.78-44.6,9.31-58.72,25.26C-5.5,291.37-57.71,591.58,62.25,922.51c36.56,100.85,97.06,188.39,171.6,265.75,26,26.98,63.89,28.4,89.98,4.11,24.96-23.23,26.22-61.4,2.8-88.7-5.46-6.36-11.3-12.39-16.95-18.58h0Z" fill="#fff"></path><path d="M778.2,416.18c-102.88-.12-187.19,84.6-187.49,188.43-.3,103.45,84.21,188.9,186.93,189.02,102.93,.11,187.17-84.58,187.46-188.45,.29-103.61-84.03-188.87-186.9-188.99h0Z" fill="#fff"></path><path d="M1116.76,242.64c-28.12-30.64-67.7-34.08-94.66-8.72-26.32,24.76-25.66,63.36,1.6,93.55,145.63,161.26,145.95,393.56,.76,553.9-28.46,31.43-29.19,70.24-1.77,94.97,27.72,25,66.06,21.14,94.5-9.88,93.86-102.38,139.77-223.56,141.49-361.98-1.82-138.45-48.03-259.53-141.92-361.84h0Z" fill="#fff"></path><path d="M530.37,329.48c29.06-31.88,29.86-71.78,1.93-96.56-27.52-24.42-66.02-19.97-94.46,11.15-93.16,101.91-138.78,222.43-140.76,360.01,1.7,139.13,47.61,261.07,142.97,363.11,9.89,10.59,24.28,19.48,38.19,23.28,27.45,7.5,54.33-6.35,67.31-30.3,13.96-25.77,8.59-53.88-15.32-80.17-143.37-157.66-143.31-393.1,.15-550.51h0Z" fill="#fff"></path></g></svg>
                                </Box>
                                <Image style={{ ...imgStyle }} src={Cricketquicklink}></Image>
                            </Box>
                        </Box>
                        <Box as="li" style={{ ...borderStyle }} className="iconClicked">
                            <Box as="a" minW="80px" display="flex" justifyContent="center" alignItems="center" href="#/">
                                <Box style={{ ...liveCard }}>
                                    <svg id="Layer_2" data-name="Layer 2" width="12.85" height="10px" viewBox="0 0 1554.84 1209.87"><g id="Layer_2-2" data-name="Layer 2"><path d="M1462.81,218.89c-37.07-72.71-84.01-138.45-140.6-197.24-20.77-21.58-47.55-27.21-72.67-16.08-23.94,10.61-41.17,34.77-36.16,60.18,3.42,17.33,12.65,35.7,24.56,48.82,120.85,133.25,185.64,289.14,190.44,468.95,5.29,197.94-60.09,369.8-194.48,515.47-8.25,8.95-15.58,20.23-19.14,31.73-8.75,28.32,4.56,57.26,30.24,71.19,26.95,14.63,55.77,9.01,79.4-16.2,152.72-162.89,227.59-356.8,230.44-539.96,.27-175.9-30-305.18-92.04-426.88v.02Z" fill="#fff"></path><path d="M309.68,1085.1C99.84,854.9,65.61,497.11,230.16,232.64c27.85-44.76,63.61-84.66,96.45-126.24,16.7-21.14,21.73-43.63,11.33-68.39-10.18-24.24-29.73-35.98-49.75-37.35-27.93-.78-44.6,9.31-58.72,25.26C-5.5,291.37-57.71,591.58,62.25,922.51c36.56,100.85,97.06,188.39,171.6,265.75,26,26.98,63.89,28.4,89.98,4.11,24.96-23.23,26.22-61.4,2.8-88.7-5.46-6.36-11.3-12.39-16.95-18.58h0Z" fill="#fff"></path><path d="M778.2,416.18c-102.88-.12-187.19,84.6-187.49,188.43-.3,103.45,84.21,188.9,186.93,189.02,102.93,.11,187.17-84.58,187.46-188.45,.29-103.61-84.03-188.87-186.9-188.99h0Z" fill="#fff"></path><path d="M1116.76,242.64c-28.12-30.64-67.7-34.08-94.66-8.72-26.32,24.76-25.66,63.36,1.6,93.55,145.63,161.26,145.95,393.56,.76,553.9-28.46,31.43-29.19,70.24-1.77,94.97,27.72,25,66.06,21.14,94.5-9.88,93.86-102.38,139.77-223.56,141.49-361.98-1.82-138.45-48.03-259.53-141.92-361.84h0Z" fill="#fff"></path><path d="M530.37,329.48c29.06-31.88,29.86-71.78,1.93-96.56-27.52-24.42-66.02-19.97-94.46,11.15-93.16,101.91-138.78,222.43-140.76,360.01,1.7,139.13,47.61,261.07,142.97,363.11,9.89,10.59,24.28,19.48,38.19,23.28,27.45,7.5,54.33-6.35,67.31-30.3,13.96-25.77,8.59-53.88-15.32-80.17-143.37-157.66-143.31-393.1,.15-550.51h0Z" fill="#fff"></path></g></svg>
                                </Box>
                                <Image style={{ ...imgStyle }} src={Soccerquicklink}></Image>
                            </Box>
                            <Box className="click_border" />
                        </Box>
                        <Box as="li" style={{ ...borderStyle }} >
                            <Box as="a" minW="80px" display="flex" justifyContent="center" alignItems="center" href="#/">
                                <Box style={{ ...liveCard }}>
                                    <svg id="Layer_2" data-name="Layer 2" width="12.85" height="10px" viewBox="0 0 1554.84 1209.87"><g id="Layer_2-2" data-name="Layer 2"><path d="M1462.81,218.89c-37.07-72.71-84.01-138.45-140.6-197.24-20.77-21.58-47.55-27.21-72.67-16.08-23.94,10.61-41.17,34.77-36.16,60.18,3.42,17.33,12.65,35.7,24.56,48.82,120.85,133.25,185.64,289.14,190.44,468.95,5.29,197.94-60.09,369.8-194.48,515.47-8.25,8.95-15.58,20.23-19.14,31.73-8.75,28.32,4.56,57.26,30.24,71.19,26.95,14.63,55.77,9.01,79.4-16.2,152.72-162.89,227.59-356.8,230.44-539.96,.27-175.9-30-305.18-92.04-426.88v.02Z" fill="#fff"></path><path d="M309.68,1085.1C99.84,854.9,65.61,497.11,230.16,232.64c27.85-44.76,63.61-84.66,96.45-126.24,16.7-21.14,21.73-43.63,11.33-68.39-10.18-24.24-29.73-35.98-49.75-37.35-27.93-.78-44.6,9.31-58.72,25.26C-5.5,291.37-57.71,591.58,62.25,922.51c36.56,100.85,97.06,188.39,171.6,265.75,26,26.98,63.89,28.4,89.98,4.11,24.96-23.23,26.22-61.4,2.8-88.7-5.46-6.36-11.3-12.39-16.95-18.58h0Z" fill="#fff"></path><path d="M778.2,416.18c-102.88-.12-187.19,84.6-187.49,188.43-.3,103.45,84.21,188.9,186.93,189.02,102.93,.11,187.17-84.58,187.46-188.45,.29-103.61-84.03-188.87-186.9-188.99h0Z" fill="#fff"></path><path d="M1116.76,242.64c-28.12-30.64-67.7-34.08-94.66-8.72-26.32,24.76-25.66,63.36,1.6,93.55,145.63,161.26,145.95,393.56,.76,553.9-28.46,31.43-29.19,70.24-1.77,94.97,27.72,25,66.06,21.14,94.5-9.88,93.86-102.38,139.77-223.56,141.49-361.98-1.82-138.45-48.03-259.53-141.92-361.84h0Z" fill="#fff"></path><path d="M530.37,329.48c29.06-31.88,29.86-71.78,1.93-96.56-27.52-24.42-66.02-19.97-94.46,11.15-93.16,101.91-138.78,222.43-140.76,360.01,1.7,139.13,47.61,261.07,142.97,363.11,9.89,10.59,24.28,19.48,38.19,23.28,27.45,7.5,54.33-6.35,67.31-30.3,13.96-25.77,8.59-53.88-15.32-80.17-143.37-157.66-143.31-393.1,.15-550.51h0Z" fill="#fff"></path></g></svg>
                                </Box>
                                <Image style={{ ...imgStyle }} src={Basketballquicklink}></Image>
                            </Box>
                        </Box>
                        <Box as="li" style={{ ...borderStyle }} >
                            <Box as="a" minW="80px" display="flex" justifyContent="center" alignItems="center" href="#/">
                                <Box style={{ ...liveCard }}>
                                    <svg id="Layer_2" data-name="Layer 2" width="12.85" height="10px" viewBox="0 0 1554.84 1209.87"><g id="Layer_2-2" data-name="Layer 2"><path d="M1462.81,218.89c-37.07-72.71-84.01-138.45-140.6-197.24-20.77-21.58-47.55-27.21-72.67-16.08-23.94,10.61-41.17,34.77-36.16,60.18,3.42,17.33,12.65,35.7,24.56,48.82,120.85,133.25,185.64,289.14,190.44,468.95,5.29,197.94-60.09,369.8-194.48,515.47-8.25,8.95-15.58,20.23-19.14,31.73-8.75,28.32,4.56,57.26,30.24,71.19,26.95,14.63,55.77,9.01,79.4-16.2,152.72-162.89,227.59-356.8,230.44-539.96,.27-175.9-30-305.18-92.04-426.88v.02Z" fill="#fff"></path><path d="M309.68,1085.1C99.84,854.9,65.61,497.11,230.16,232.64c27.85-44.76,63.61-84.66,96.45-126.24,16.7-21.14,21.73-43.63,11.33-68.39-10.18-24.24-29.73-35.98-49.75-37.35-27.93-.78-44.6,9.31-58.72,25.26C-5.5,291.37-57.71,591.58,62.25,922.51c36.56,100.85,97.06,188.39,171.6,265.75,26,26.98,63.89,28.4,89.98,4.11,24.96-23.23,26.22-61.4,2.8-88.7-5.46-6.36-11.3-12.39-16.95-18.58h0Z" fill="#fff"></path><path d="M778.2,416.18c-102.88-.12-187.19,84.6-187.49,188.43-.3,103.45,84.21,188.9,186.93,189.02,102.93,.11,187.17-84.58,187.46-188.45,.29-103.61-84.03-188.87-186.9-188.99h0Z" fill="#fff"></path><path d="M1116.76,242.64c-28.12-30.64-67.7-34.08-94.66-8.72-26.32,24.76-25.66,63.36,1.6,93.55,145.63,161.26,145.95,393.56,.76,553.9-28.46,31.43-29.19,70.24-1.77,94.97,27.72,25,66.06,21.14,94.5-9.88,93.86-102.38,139.77-223.56,141.49-361.98-1.82-138.45-48.03-259.53-141.92-361.84h0Z" fill="#fff"></path><path d="M530.37,329.48c29.06-31.88,29.86-71.78,1.93-96.56-27.52-24.42-66.02-19.97-94.46,11.15-93.16,101.91-138.78,222.43-140.76,360.01,1.7,139.13,47.61,261.07,142.97,363.11,9.89,10.59,24.28,19.48,38.19,23.28,27.45,7.5,54.33-6.35,67.31-30.3,13.96-25.77,8.59-53.88-15.32-80.17-143.37-157.66-143.31-393.1,.15-550.51h0Z" fill="#fff"></path></g></svg>
                                </Box>
                                <Image style={{ ...imgStyle }} src={Tennisquicklink}></Image>

                            </Box>
                        </Box>
                        <Box as="li" style={{ ...borderStyle }} >
                            <Box as="a" minW="80px" display="flex" justifyContent="center" alignItems="center" href="#/">
                                <Box as="span" className="tennis" />
                                <Image style={{ ...imgStyle }} src={Volleyballquicklink}></Image>
                            </Box>
                        </Box>
                        <Box as="li" style={{ ...borderStyle }} >
                            <Box as="a" minW="80px" display="flex" justifyContent="center" alignItems="center" href="#/">
                                <Box as="span" className="tennis" />
                                <Image style={{ ...imgStyle }} src={rugbyball}></Image>
                            </Box>
                        </Box>
                        <Box as="li" style={{ ...borderStyle }} >
                            <Box as="a" minW="80px" display="flex" justifyContent="center" alignItems="center" href="#/">
                                <Box style={{ ...liveCard }}>
                                    <svg id="Layer_2" data-name="Layer 2" width="12.85" height="10px" viewBox="0 0 1554.84 1209.87"><g id="Layer_2-2" data-name="Layer 2"><path d="M1462.81,218.89c-37.07-72.71-84.01-138.45-140.6-197.24-20.77-21.58-47.55-27.21-72.67-16.08-23.94,10.61-41.17,34.77-36.16,60.18,3.42,17.33,12.65,35.7,24.56,48.82,120.85,133.25,185.64,289.14,190.44,468.95,5.29,197.94-60.09,369.8-194.48,515.47-8.25,8.95-15.58,20.23-19.14,31.73-8.75,28.32,4.56,57.26,30.24,71.19,26.95,14.63,55.77,9.01,79.4-16.2,152.72-162.89,227.59-356.8,230.44-539.96,.27-175.9-30-305.18-92.04-426.88v.02Z" fill="#fff"></path><path d="M309.68,1085.1C99.84,854.9,65.61,497.11,230.16,232.64c27.85-44.76,63.61-84.66,96.45-126.24,16.7-21.14,21.73-43.63,11.33-68.39-10.18-24.24-29.73-35.98-49.75-37.35-27.93-.78-44.6,9.31-58.72,25.26C-5.5,291.37-57.71,591.58,62.25,922.51c36.56,100.85,97.06,188.39,171.6,265.75,26,26.98,63.89,28.4,89.98,4.11,24.96-23.23,26.22-61.4,2.8-88.7-5.46-6.36-11.3-12.39-16.95-18.58h0Z" fill="#fff"></path><path d="M778.2,416.18c-102.88-.12-187.19,84.6-187.49,188.43-.3,103.45,84.21,188.9,186.93,189.02,102.93,.11,187.17-84.58,187.46-188.45,.29-103.61-84.03-188.87-186.9-188.99h0Z" fill="#fff"></path><path d="M1116.76,242.64c-28.12-30.64-67.7-34.08-94.66-8.72-26.32,24.76-25.66,63.36,1.6,93.55,145.63,161.26,145.95,393.56,.76,553.9-28.46,31.43-29.19,70.24-1.77,94.97,27.72,25,66.06,21.14,94.5-9.88,93.86-102.38,139.77-223.56,141.49-361.98-1.82-138.45-48.03-259.53-141.92-361.84h0Z" fill="#fff"></path><path d="M530.37,329.48c29.06-31.88,29.86-71.78,1.93-96.56-27.52-24.42-66.02-19.97-94.46,11.15-93.16,101.91-138.78,222.43-140.76,360.01,1.7,139.13,47.61,261.07,142.97,363.11,9.89,10.59,24.28,19.48,38.19,23.28,27.45,7.5,54.33-6.35,67.31-30.3,13.96-25.77,8.59-53.88-15.32-80.17-143.37-157.66-143.31-393.1,.15-550.51h0Z" fill="#fff"></path></g></svg>
                                </Box>
                                <Image style={{ ...imgStyle }} src={Baseballquicklink}></Image>
                            </Box>
                        </Box>
                        <Box as="li" style={{ ...borderStyle }} >
                            <Box as="a" minW="80px" display="flex" justifyContent="center" alignItems="center" href="#/">
                                <Box as="span" className="tennis" />
                                <Image style={{ ...imgStyle }} src={Icehockeyquicklink}></Image>
                            </Box>
                        </Box>
                        <Box as="li" style={{ ...borderStyle }} >
                            <Box as="a" minW="80px" display="flex" justifyContent="center" alignItems="center" href="#/">
                                <Box style={{ ...liveCard }}>
                                    <svg id="Layer_2" data-name="Layer 2" width="12.85" height="10px" viewBox="0 0 1554.84 1209.87"><g id="Layer_2-2" data-name="Layer 2"><path d="M1462.81,218.89c-37.07-72.71-84.01-138.45-140.6-197.24-20.77-21.58-47.55-27.21-72.67-16.08-23.94,10.61-41.17,34.77-36.16,60.18,3.42,17.33,12.65,35.7,24.56,48.82,120.85,133.25,185.64,289.14,190.44,468.95,5.29,197.94-60.09,369.8-194.48,515.47-8.25,8.95-15.58,20.23-19.14,31.73-8.75,28.32,4.56,57.26,30.24,71.19,26.95,14.63,55.77,9.01,79.4-16.2,152.72-162.89,227.59-356.8,230.44-539.96,.27-175.9-30-305.18-92.04-426.88v.02Z" fill="#fff"></path><path d="M309.68,1085.1C99.84,854.9,65.61,497.11,230.16,232.64c27.85-44.76,63.61-84.66,96.45-126.24,16.7-21.14,21.73-43.63,11.33-68.39-10.18-24.24-29.73-35.98-49.75-37.35-27.93-.78-44.6,9.31-58.72,25.26C-5.5,291.37-57.71,591.58,62.25,922.51c36.56,100.85,97.06,188.39,171.6,265.75,26,26.98,63.89,28.4,89.98,4.11,24.96-23.23,26.22-61.4,2.8-88.7-5.46-6.36-11.3-12.39-16.95-18.58h0Z" fill="#fff"></path><path d="M778.2,416.18c-102.88-.12-187.19,84.6-187.49,188.43-.3,103.45,84.21,188.9,186.93,189.02,102.93,.11,187.17-84.58,187.46-188.45,.29-103.61-84.03-188.87-186.9-188.99h0Z" fill="#fff"></path><path d="M1116.76,242.64c-28.12-30.64-67.7-34.08-94.66-8.72-26.32,24.76-25.66,63.36,1.6,93.55,145.63,161.26,145.95,393.56,.76,553.9-28.46,31.43-29.19,70.24-1.77,94.97,27.72,25,66.06,21.14,94.5-9.88,93.86-102.38,139.77-223.56,141.49-361.98-1.82-138.45-48.03-259.53-141.92-361.84h0Z" fill="#fff"></path><path d="M530.37,329.48c29.06-31.88,29.86-71.78,1.93-96.56-27.52-24.42-66.02-19.97-94.46,11.15-93.16,101.91-138.78,222.43-140.76,360.01,1.7,139.13,47.61,261.07,142.97,363.11,9.89,10.59,24.28,19.48,38.19,23.28,27.45,7.5,54.33-6.35,67.31-30.3,13.96-25.77,8.59-53.88-15.32-80.17-143.37-157.66-143.31-393.1,.15-550.51h0Z" fill="#fff"></path></g></svg>
                                </Box>
                                <Image style={{ ...imgStyle }} src={Badmintonquicklink}></Image>
                            </Box>
                        </Box>
                        <Box as="li" style={{ ...borderStyle }} >
                            <Box as="a" minW="80px" display="flex" justifyContent="center" alignItems="center" href="#/">
                                <Box style={{ ...liveCard }}>
                                    <svg id="Layer_2" data-name="Layer 2" width="12.85" height="10px" viewBox="0 0 1554.84 1209.87"><g id="Layer_2-2" data-name="Layer 2"><path d="M1462.81,218.89c-37.07-72.71-84.01-138.45-140.6-197.24-20.77-21.58-47.55-27.21-72.67-16.08-23.94,10.61-41.17,34.77-36.16,60.18,3.42,17.33,12.65,35.7,24.56,48.82,120.85,133.25,185.64,289.14,190.44,468.95,5.29,197.94-60.09,369.8-194.48,515.47-8.25,8.95-15.58,20.23-19.14,31.73-8.75,28.32,4.56,57.26,30.24,71.19,26.95,14.63,55.77,9.01,79.4-16.2,152.72-162.89,227.59-356.8,230.44-539.96,.27-175.9-30-305.18-92.04-426.88v.02Z" fill="#fff"></path><path d="M309.68,1085.1C99.84,854.9,65.61,497.11,230.16,232.64c27.85-44.76,63.61-84.66,96.45-126.24,16.7-21.14,21.73-43.63,11.33-68.39-10.18-24.24-29.73-35.98-49.75-37.35-27.93-.78-44.6,9.31-58.72,25.26C-5.5,291.37-57.71,591.58,62.25,922.51c36.56,100.85,97.06,188.39,171.6,265.75,26,26.98,63.89,28.4,89.98,4.11,24.96-23.23,26.22-61.4,2.8-88.7-5.46-6.36-11.3-12.39-16.95-18.58h0Z" fill="#fff"></path><path d="M778.2,416.18c-102.88-.12-187.19,84.6-187.49,188.43-.3,103.45,84.21,188.9,186.93,189.02,102.93,.11,187.17-84.58,187.46-188.45,.29-103.61-84.03-188.87-186.9-188.99h0Z" fill="#fff"></path><path d="M1116.76,242.64c-28.12-30.64-67.7-34.08-94.66-8.72-26.32,24.76-25.66,63.36,1.6,93.55,145.63,161.26,145.95,393.56,.76,553.9-28.46,31.43-29.19,70.24-1.77,94.97,27.72,25,66.06,21.14,94.5-9.88,93.86-102.38,139.77-223.56,141.49-361.98-1.82-138.45-48.03-259.53-141.92-361.84h0Z" fill="#fff"></path><path d="M530.37,329.48c29.06-31.88,29.86-71.78,1.93-96.56-27.52-24.42-66.02-19.97-94.46,11.15-93.16,101.91-138.78,222.43-140.76,360.01,1.7,139.13,47.61,261.07,142.97,363.11,9.89,10.59,24.28,19.48,38.19,23.28,27.45,7.5,54.33-6.35,67.31-30.3,13.96-25.77,8.59-53.88-15.32-80.17-143.37-157.66-143.31-393.1,.15-550.51h0Z" fill="#fff"></path></g></svg>
                                </Box>
                                <Image style={{ ...imgStyle }} src={Tabletennisquicklink}></Image>
                            </Box>
                        </Box>
                        <Box as="li" style={{ ...borderStyle }} >
                            <Box as="a" minW="80px" display="flex" justifyContent="center" alignItems="center" href="#/">
                                <Box as="span" className="tennis" />
                                <Image style={{ ...imgStyle }} src={boxingglove}></Image>
                            </Box>
                        </Box>
                        <Box as="li" style={{ ...borderStyle }} >
                            <Box as="a" minW="80px" display="flex" justifyContent="center" alignItems="center" href="#/">
                                <Box as="span" className="tennis" />
                                <Image style={{ ...imgStyle }} src={Aussierulesquicklink}></Image>
                            </Box>
                        </Box>
                        <Box as="li" style={{ ...borderStyle }} >
                            <Box as="a" minW="80px" display="flex" justifyContent="center" alignItems="center" href="#/">
                                <Box as="span" className="tennis" />
                                <Image style={{ ...imgStyle }} src={Dartsquicklink}></Image>
                            </Box>
                        </Box>
                        <Box as="li" style={{ ...borderStyle }} >
                            <Box as="a" minW="80px" display="flex" justifyContent="center" alignItems="center" href="#/">
                                <Box as="span" className="tennis" />
                                <Image style={{ ...imgStyle }} src={Snookerquicklink}></Image>
                            </Box>
                        </Box>
                        <Box as="li" style={{ ...borderStyle }} >
                            <Box as="a" minW="80px" display="flex" justifyContent="center" alignItems="center" href="#/">
                                <Box as="span" className="tennis" />
                                <Image style={{ ...imgStyle }} src={Mmaquicklink}></Image>
                            </Box>
                        </Box>
                        <Box as="li" style={{ ...borderStyle }} >
                            <Box as="a" minW="80px" display="flex" justifyContent="center" alignItems="center" href="#/">
                                <Box as="span" className="tennis" />
                                <Image style={{ ...imgStyle }} src={fieldhockey}></Image>
                            </Box>
                        </Box>
                        <Box as="li" style={{ ...borderStyle }} >
                            <Box as="a" minW="80px" display="flex" justifyContent="center" alignItems="center" href="#/">
                                <Box as="span" className="tennis" />
                                <Image style={{ ...imgStyle }} src={Bowls}></Image>
                            </Box>
                        </Box>
                    </Flex>
                </Box>

            </Box>

            <Box className='main_content' mt="138px" >
                <Box className='cards' marginTop="10px">
                    <Flex flexShrink="0" style={{ padding: '0px' }} gap="10px" className="cardsSlider custom-carousel relative" pb="4px" css={{
                        overflow: 'auto',
                        '&::-webkit-scrollbar': {
                            width: '100%',
                            height: '5px',
                        },
                        '&::-webkit-scrollbar-track': {
                            background: "#5a6071",
                        },
                    }}>
                        {bannerContent.map((item, index) => (
                            <Box className='card_wr' flexShrink="0">
                                <Box className="card_content" >
                                    <Image borderRadius={{ base: "0", md: "8px" }} src={item.img} h={{ base: "25.5vw", md: "80px" }} maxH={{ base: "111px", md: "127px" }} w={{ base: "calc(-16px + 100vw)", sm: "412px", md: "295px" }} maxW="100%"></Image>
                                </Box>
                            </Box>
                        ))}
                    </Flex>
                </Box>

                <Box className='live_section sectionTop_spacing' mt="10px">
                    <Box className='cards'>
                        <Flex justifyContent="space-between" flexDirection="row" overflowX="auto" gap="10px" css={{
                            '&::-webkit-scrollbar': { display: 'none' },
                            '-ms-overflow-style': 'none',
                            'scrollbar-width': 'none',
                        }}>
                            {Array.from({ length: 10 }).map((_, index) => (
                                <Box key={index} width="100%">
                                    <Image src={live} minWidth="260px" />
                                </Box>
                            ))}
                        </Flex>
                    </Box>
                </Box>
                <Box className='content' pt="12px" pb="100px" display="flex" flexDirection={{base:"column", md:"row"}} w="100%">
                        <Box className='modeGridManageLarge' >
                            <Mode></Mode>
                        </Box>
                        <Box className='modeGridManageSamll' >
                            <ModeRight></ModeRight>
                        </Box>
                    </Box>
            </Box>
        </Box >
    );
}

export default Cricket;
