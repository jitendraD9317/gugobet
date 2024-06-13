import React, { useState, useRef, useEffect } from 'react';
import { useSelector } from "react-redux";
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { Box, Tabs, TabList, TabPanels, Tab, TabPanel, Image, Text, position } from '@chakra-ui/react';
import { RiPlayReverseFill, RiPlayFill } from 'react-icons/ri';

import Video from '../../assets/images/cricket/match-icon/Video.svg'
import clockF from '../../assets/images/cricket/match-icon/clockF.svg'
import clockB from '../../assets/images/cricket/match-icon/clockB.svg'
import PIcon from '../../assets/images/cricket/match-icon/P.svg'

import noEvent from '../../assets/images/cricket/no_event.svg'

const Mode = () => {
    const { primaryText, cricketSectionBg, matchNameColor, matchNameBg, matchBycometitionBg } = useSelector((state) => state.theme);

    const tabsStyle = {
        flex: "1 1 0 %",
        textAlign: "center",
        font: '500 14px / 19px "Avenir Next"',
        letterSpacing: " 0.22px",
        color: primaryText,
        width: "100%",
        border: "0",
        height: "32px"
    }
    const matchNameBeforeStyle = {
        content: "''",
        position: "absolute",
        width: "8px",
        height: "8px",
        borderRadius: "50%",
        backgroundColor: "rgb(107, 189, 17)",
        border: "1px solid rgba(51, 51, 51, 0.4)",
        marginRight: "5px",
        paddingLeft: "5px",
        left: "-13px",
        top: "7px",
    }

    return (
        <Box padding="0" className="cricketMode_section relative">
            <Box css={{
                '&::-webkit-scrollbar': {
                    width: '5px',
                    height: '150px',
                    borderRadius: "5px",
                },
                '&::-webkit-scrollbar-track': {
                    background: "#5a6071",
                },
                '&::-webkit-scrollbar-thumb': {
                    borderRadius: '10px',
                },
                '@media screen and (min-width: 1440px)': {
                    flex: "3 1 0%",
                },
                '@media screen and (min-width: 768px)': {
                    height: "calc(-140px + 100vh)",
                    flex: "2 1 0%",
                    overflowY: "overlay",
                }
            }}>
                <Tabs>
                    <TabList border="0" bg={cricketSectionBg} m="12px 0px">
                        <Tab style={{ ...tabsStyle }} borderRight="1px solid rgba(255, 255, 255, 0.1) !important">Ex Mode</Tab>
                        <Tab style={{ ...tabsStyle }}>Origin Mode</Tab>
                    </TabList>

                    <TabPanels>
                        <TabPanel p="0">
                            <Tabs>
                                <TabList border="0" bg={cricketSectionBg} >
                                    <Tab style={{ ...tabsStyle }} borderRight="1px solid rgba(255, 255, 255, 0.1) !important">By Time</Tab>
                                    <Tab style={{ ...tabsStyle }}>By Competition</Tab>
                                </TabList>

                                <TabPanels>
                                    <TabPanel p="0" mt="12px">
                                        <Box className='exMode_byTime' bg={cricketSectionBg}>
                                            <Box className='' display="flex" justifyContent="center" flexDirection="column" h="52px" pl="25px" borderTop="1px solid rgba(255, 255, 255, 0.1)">
                                                <Box className='match_icon' display="flex" flexDirection="row" gap="5px">
                                                    <Image height="15px" src={Video}></Image>
                                                    <Image height="15px" src={clockF}></Image>
                                                    <Image height="15px" src={clockB}></Image>
                                                    <Image height="15px" src={PIcon}></Image>
                                                    <Box fontSize="12px" color="rgba(255, 255, 255, 0.6)">In-Play</Box>
                                                </Box>
                                                <Box className='match_name' _before={matchNameBeforeStyle} position="relative">
                                                    <Text fontWeight="700" color={matchNameColor}>Trident Stallions vs JK Super Strikers</Text>
                                                </Box>

                                            </Box>
                                            <Box className='' display="flex" justifyContent="center" flexDirection="column" h="52px" pl="25px" borderTop="1px solid rgba(255, 255, 255, 0.1)">
                                                <Box className='match_icon' display="flex" flexDirection="row" gap="5px">
                                                    <Image height="15px" src={Video}></Image>
                                                    <Image height="15px" src={clockF}></Image>
                                                    <Image height="15px" src={clockB}></Image>
                                                    <Image height="15px" src={PIcon}></Image>
                                                    <Box fontSize="12px" color="rgba(255, 255, 255, 0.6)">In-Play</Box>
                                                </Box>
                                                <Box className='match_name' _before={matchNameBeforeStyle} position="relative">
                                                    <Text fontWeight="700" color={matchNameColor}>Trident Stallions vs JK Super Strikers</Text>
                                                </Box>

                                            </Box>
                                            <Box className='' display="flex" justifyContent="center" flexDirection="column" h="52px" pl="25px" borderTop="1px solid rgba(255, 255, 255, 0.1)">
                                                <Box className='match_icon' display="flex" flexDirection="row" gap="5px">
                                                    <Image height="15px" src={Video}></Image>
                                                    <Image height="15px" src={clockF}></Image>
                                                    <Image height="15px" src={clockB}></Image>
                                                    <Image height="15px" src={PIcon}></Image>
                                                    <Box fontSize="12px" color="rgba(255, 255, 255, 0.6)">In-Play</Box>
                                                </Box>
                                                <Box className='match_name' _before={matchNameBeforeStyle} position="relative">
                                                    <Text fontWeight="700" color={matchNameColor}>Trident Stallions vs JK Super Strikers</Text>
                                                </Box>

                                            </Box>
                                            <Box className='' display="flex" justifyContent="center" flexDirection="column" h="52px" pl="25px" borderTop="1px solid rgba(255, 255, 255, 0.1)">
                                                <Box className='match_icon' display="flex" flexDirection="row" gap="5px">
                                                    <Image height="15px" src={Video}></Image>
                                                    <Image height="15px" src={clockF}></Image>
                                                    <Image height="15px" src={clockB}></Image>
                                                    <Image height="15px" src={PIcon}></Image>
                                                    <Box fontSize="12px" color="rgba(255, 255, 255, 0.6)">In-Play</Box>
                                                </Box>
                                                <Box className='match_name' _before={matchNameBeforeStyle} position="relative">
                                                    <Text fontWeight="700" color={matchNameColor}>Trident Stallions vs JK Super Strikers</Text>
                                                </Box>

                                            </Box>
                                            <Box className='' display="flex" justifyContent="center" flexDirection="column" h="52px" pl="25px" borderTop="1px solid rgba(255, 255, 255, 0.1)">
                                                <Box className='match_icon' display="flex" flexDirection="row" gap="5px">
                                                    <Image height="15px" src={Video}></Image>
                                                    <Image height="15px" src={clockF}></Image>
                                                    <Image height="15px" src={clockB}></Image>
                                                    <Image height="15px" src={PIcon}></Image>
                                                    <Box fontSize="12px" color="rgba(255, 255, 255, 0.6)">In-Play</Box>
                                                </Box>
                                                <Box className='match_name' _before={matchNameBeforeStyle} position="relative">
                                                    <Text fontWeight="700" color={matchNameColor}>Trident Stallions vs JK Super Strikers</Text>
                                                </Box>

                                            </Box>
                                            <Box className='' display="flex" justifyContent="center" flexDirection="column" h="52px" pl="25px" borderTop="1px solid rgba(255, 255, 255, 0.1)">
                                                <Box className='match_icon' display="flex" flexDirection="row" gap="5px">
                                                    <Image height="15px" src={Video}></Image>
                                                    <Image height="15px" src={clockF}></Image>
                                                    <Image height="15px" src={clockB}></Image>
                                                    <Image height="15px" src={PIcon}></Image>
                                                    <Box fontSize="12px" color="rgba(255, 255, 255, 0.6)">In-Play</Box>
                                                </Box>
                                                <Box className='match_name' _before={matchNameBeforeStyle} position="relative">
                                                    <Text fontWeight="700" color={matchNameColor}>Trident Stallions vs JK Super Strikers</Text>
                                                </Box>

                                            </Box>
                                            <Box className='' display="flex" justifyContent="center" flexDirection="column" h="52px" pl="25px" borderTop="1px solid rgba(255, 255, 255, 0.1)">
                                                <Box className='match_icon' display="flex" flexDirection="row" gap="5px">
                                                    <Image height="15px" src={Video}></Image>
                                                    <Image height="15px" src={clockF}></Image>
                                                    <Image height="15px" src={clockB}></Image>
                                                    <Image height="15px" src={PIcon}></Image>
                                                    <Box fontSize="12px" color="rgba(255, 255, 255, 0.6)">In-Play</Box>
                                                </Box>
                                                <Box className='match_name' _before={matchNameBeforeStyle} position="relative">
                                                    <Text fontWeight="700" color={matchNameColor}>Trident Stallions vs JK Super Strikers</Text>
                                                </Box>

                                            </Box>
                                            <Box className='' display="flex" justifyContent="center" flexDirection="column" h="52px" pl="25px" borderTop="1px solid rgba(255, 255, 255, 0.1)">
                                                <Box className='match_icon' display="flex" flexDirection="row" gap="5px">
                                                    <Image height="15px" src={Video}></Image>
                                                    <Image height="15px" src={clockF}></Image>
                                                    <Image height="15px" src={clockB}></Image>
                                                    <Image height="15px" src={PIcon}></Image>
                                                    <Box fontSize="12px" color="rgba(255, 255, 255, 0.6)">In-Play</Box>
                                                </Box>
                                                <Box className='match_name' _before={matchNameBeforeStyle} position="relative">
                                                    <Text fontWeight="700" color={matchNameColor}>Trident Stallions vs JK Super Strikers</Text>
                                                </Box>

                                            </Box>
                                            <Box className='' display="flex" justifyContent="center" flexDirection="column" h="52px" pl="25px" borderTop="1px solid rgba(255, 255, 255, 0.1)">
                                                <Box className='match_icon' display="flex" flexDirection="row" gap="5px">
                                                    <Image height="15px" src={Video}></Image>
                                                    <Image height="15px" src={clockF}></Image>
                                                    <Image height="15px" src={clockB}></Image>
                                                    <Image height="15px" src={PIcon}></Image>
                                                    <Box fontSize="12px" color="rgba(255, 255, 255, 0.6)">In-Play</Box>
                                                </Box>
                                                <Box className='match_name' _before={matchNameBeforeStyle} position="relative">
                                                    <Text fontWeight="700" color={matchNameColor}>Trident Stallions vs JK Super Strikers</Text>
                                                </Box>

                                            </Box>
                                            <Box className='' display="flex" justifyContent="center" flexDirection="column" h="52px" pl="25px" borderTop="1px solid rgba(255, 255, 255, 0.1)">
                                                <Box className='match_icon' display="flex" flexDirection="row" gap="5px">
                                                    <Image height="15px" src={Video}></Image>
                                                    <Image height="15px" src={clockF}></Image>
                                                    <Image height="15px" src={clockB}></Image>
                                                    <Image height="15px" src={PIcon}></Image>
                                                    <Box fontSize="12px" color="rgba(255, 255, 255, 0.6)">In-Play</Box>
                                                </Box>
                                                <Box className='match_name' _before={matchNameBeforeStyle} position="relative">
                                                    <Text fontWeight="700" color={matchNameColor}>Trident Stallions vs JK Super Strikers</Text>
                                                </Box>

                                            </Box>
                                            <Box className='' display="flex" justifyContent="center" flexDirection="column" h="52px" pl="25px" borderTop="1px solid rgba(255, 255, 255, 0.1)">
                                                <Box className='match_icon' display="flex" flexDirection="row" gap="5px">
                                                    <Image height="15px" src={Video}></Image>
                                                    <Image height="15px" src={clockF}></Image>
                                                    <Image height="15px" src={clockB}></Image>
                                                    <Image height="15px" src={PIcon}></Image>
                                                    <Box fontSize="12px" color="rgba(255, 255, 255, 0.6)">In-Play</Box>
                                                </Box>
                                                <Box className='match_name' _before={matchNameBeforeStyle} position="relative">
                                                    <Text fontWeight="700" color={matchNameColor}>Trident Stallions vs JK Super Strikers</Text>
                                                </Box>

                                            </Box>
                                            <Box className='' display="flex" justifyContent="center" flexDirection="column" h="52px" pl="25px" borderTop="1px solid rgba(255, 255, 255, 0.1)">
                                                <Box className='match_icon' display="flex" flexDirection="row" gap="5px">
                                                    <Image height="15px" src={Video}></Image>
                                                    <Image height="15px" src={clockF}></Image>
                                                    <Image height="15px" src={clockB}></Image>
                                                    <Image height="15px" src={PIcon}></Image>
                                                    <Box fontSize="12px" color="rgba(255, 255, 255, 0.6)">In-Play</Box>
                                                </Box>
                                                <Box className='match_name' _before={matchNameBeforeStyle} position="relative">
                                                    <Text fontWeight="700" color={matchNameColor}>Trident Stallions vs JK Super Strikers</Text>
                                                </Box>

                                            </Box>
                                            <Box className='' display="flex" justifyContent="center" flexDirection="column" h="52px" pl="25px" borderTop="1px solid rgba(255, 255, 255, 0.1)">
                                                <Box className='match_icon' display="flex" flexDirection="row" gap="5px">
                                                    <Image height="15px" src={Video}></Image>
                                                    <Image height="15px" src={clockF}></Image>
                                                    <Image height="15px" src={clockB}></Image>
                                                    <Image height="15px" src={PIcon}></Image>
                                                    <Box fontSize="12px" color="rgba(255, 255, 255, 0.6)">In-Play</Box>
                                                </Box>
                                                <Box className='match_name' _before={matchNameBeforeStyle} position="relative">
                                                    <Text fontWeight="700" color={matchNameColor}>Trident Stallions vs JK Super Strikers</Text>
                                                </Box>

                                            </Box>
                                            <Box className='' display="flex" justifyContent="center" flexDirection="column" h="52px" pl="25px" borderTop="1px solid rgba(255, 255, 255, 0.1)">
                                                <Box className='match_icon' display="flex" flexDirection="row" gap="5px">
                                                    <Image height="15px" src={Video}></Image>
                                                    <Image height="15px" src={clockF}></Image>
                                                    <Image height="15px" src={clockB}></Image>
                                                    <Image height="15px" src={PIcon}></Image>
                                                    <Box fontSize="12px" color="rgba(255, 255, 255, 0.6)">In-Play</Box>
                                                </Box>
                                                <Box className='match_name' _before={matchNameBeforeStyle} position="relative">
                                                    <Text fontWeight="700" color={matchNameColor}>Trident Stallions vs JK Super Strikers</Text>
                                                </Box>

                                            </Box>
                                            <Box className='' display="flex" justifyContent="center" flexDirection="column" h="52px" pl="25px" borderTop="1px solid rgba(255, 255, 255, 0.1)">
                                                <Box className='match_icon' display="flex" flexDirection="row" gap="5px">
                                                    <Image height="15px" src={Video}></Image>
                                                    <Image height="15px" src={clockF}></Image>
                                                    <Image height="15px" src={clockB}></Image>
                                                    <Image height="15px" src={PIcon}></Image>
                                                    <Box fontSize="12px" color="rgba(255, 255, 255, 0.6)">In-Play</Box>
                                                </Box>
                                                <Box className='match_name' _before={matchNameBeforeStyle} position="relative">
                                                    <Text fontWeight="700" color={matchNameColor}>Trident Stallions vs JK Super Strikers</Text>
                                                </Box>

                                            </Box>
                                            <Box className='' display="flex" justifyContent="center" flexDirection="column" h="52px" pl="25px" borderTop="1px solid rgba(255, 255, 255, 0.1)">
                                                <Box className='match_icon' display="flex" flexDirection="row" gap="5px">
                                                    <Image height="15px" src={Video}></Image>
                                                    <Image height="15px" src={clockF}></Image>
                                                    <Image height="15px" src={clockB}></Image>
                                                    <Image height="15px" src={PIcon}></Image>
                                                    <Box fontSize="12px" color="rgba(255, 255, 255, 0.6)">In-Play</Box>
                                                </Box>
                                                <Box className='match_name' _before={matchNameBeforeStyle} position="relative">
                                                    <Text fontWeight="700" color={matchNameColor}>Trident Stallions vs JK Super Strikers</Text>
                                                </Box>

                                            </Box>
                                            <Box className='' display="flex" justifyContent="center" flexDirection="column" h="52px" pl="25px" borderTop="1px solid rgba(255, 255, 255, 0.1)">
                                                <Box className='match_icon' display="flex" flexDirection="row" gap="5px">
                                                    <Image height="15px" src={Video}></Image>
                                                    <Image height="15px" src={clockF}></Image>
                                                    <Image height="15px" src={clockB}></Image>
                                                    <Image height="15px" src={PIcon}></Image>
                                                    <Box fontSize="12px" color="rgba(255, 255, 255, 0.6)">In-Play</Box>
                                                </Box>
                                                <Box className='match_name' _before={matchNameBeforeStyle} position="relative">
                                                    <Text fontWeight="700" color={matchNameColor}>Trident Stallions vs JK Super Strikers</Text>
                                                </Box>

                                            </Box>
                                            <Box className='' display="flex" justifyContent="center" flexDirection="column" h="52px" pl="25px" borderTop="1px solid rgba(255, 255, 255, 0.1)">
                                                <Box className='match_icon' display="flex" flexDirection="row" gap="5px">
                                                    <Image height="15px" src={Video}></Image>
                                                    <Image height="15px" src={clockF}></Image>
                                                    <Image height="15px" src={clockB}></Image>
                                                    <Image height="15px" src={PIcon}></Image>
                                                    <Box fontSize="12px" color="rgba(255, 255, 255, 0.6)">In-Play</Box>
                                                </Box>
                                                <Box className='match_name' _before={matchNameBeforeStyle} position="relative">
                                                    <Text fontWeight="700" color={matchNameColor}>Trident Stallions vs JK Super Strikers</Text>
                                                </Box>

                                            </Box>
                                            <Box className='' display="flex" justifyContent="center" flexDirection="column" h="52px" pl="25px" borderTop="1px solid rgba(255, 255, 255, 0.1)">
                                                <Box className='match_icon' display="flex" flexDirection="row" gap="5px">
                                                    <Image height="15px" src={Video}></Image>
                                                    <Image height="15px" src={clockF}></Image>
                                                    <Image height="15px" src={clockB}></Image>
                                                    <Image height="15px" src={PIcon}></Image>
                                                    <Box fontSize="12px" color="rgba(255, 255, 255, 0.6)">In-Play</Box>
                                                </Box>
                                                <Box className='match_name' _before={matchNameBeforeStyle} position="relative">
                                                    <Text fontWeight="700" color={matchNameColor}>Trident Stallions vs JK Super Strikers</Text>
                                                </Box>

                                            </Box>
                                        </Box>
                                    </TabPanel>
                                    <TabPanel p="0" mt="12px">
                                        <Box className='exMode_byTime' bg={matchBycometitionBg}>
                                            <Box >
                                                <Box display="flex" alignItems="center" pl="10px" bg={matchNameBg} h="32px" borderTop="1px solid rgba(255, 255, 255, 0.1)" fontWeight="700" fontSize="12px">
                                                    T20 Sher E Punjab Cup
                                                </Box>
                                                <Box bg={cricketSectionBg}>
                                                    <Box className='' display="flex" justifyContent="center" flexDirection="column" h="52px" pl="25px" borderTop="1px solid rgba(255, 255, 255, 0.1)">
                                                        <Box className='match_icon' display="flex" flexDirection="row" gap="5px">
                                                            <Image height="15px" src={Video}></Image>
                                                            <Image height="15px" src={clockF}></Image>
                                                            <Image height="15px" src={clockB}></Image>
                                                            <Image height="15px" src={PIcon}></Image>
                                                            <Box fontSize="12px" color="rgba(255, 255, 255, 0.6)">In-Play</Box>
                                                        </Box>
                                                        <Box className='match_name' _before={matchNameBeforeStyle} position="relative">
                                                            <Text fontWeight="700" color={matchNameColor}>Trident Stallions vs JK Super Strikers</Text>
                                                        </Box>

                                                    </Box>
                                                    <Box className='' display="flex" justifyContent="center" flexDirection="column" h="52px" pl="25px" borderTop="1px solid rgba(255, 255, 255, 0.1)">
                                                        <Box className='match_icon' display="flex" flexDirection="row" gap="5px">
                                                            <Image height="15px" src={Video}></Image>
                                                            <Image height="15px" src={clockF}></Image>
                                                            <Image height="15px" src={clockB}></Image>
                                                            <Image height="15px" src={PIcon}></Image>
                                                            <Box fontSize="12px" color="rgba(255, 255, 255, 0.6)">In-Play</Box>
                                                        </Box>
                                                        <Box className='match_name' _before={matchNameBeforeStyle} position="relative">
                                                            <Text fontWeight="700" color={matchNameColor}>Trident Stallions vs JK Super Strikers</Text>
                                                        </Box>

                                                    </Box>
                                                </Box>
                                            </Box>
                                            <Box >
                                                <Box display="flex" alignItems="center" pl="10px" bg={matchNameBg} h="32px" borderTop="1px solid rgba(255, 255, 255, 0.1)" fontWeight="700" fontSize="12px">
                                                    T20 Sher E Punjab Cup
                                                </Box>
                                                <Box bg={cricketSectionBg}>
                                                    <Box className='' display="flex" justifyContent="center" flexDirection="column" h="52px" pl="25px" borderTop="1px solid rgba(255, 255, 255, 0.1)">
                                                        <Box className='match_icon' display="flex" flexDirection="row" gap="5px">
                                                            <Image height="15px" src={Video}></Image>
                                                            <Image height="15px" src={clockF}></Image>
                                                            <Image height="15px" src={clockB}></Image>
                                                            <Image height="15px" src={PIcon}></Image>
                                                            <Box fontSize="12px" color="rgba(255, 255, 255, 0.6)">In-Play</Box>
                                                        </Box>
                                                        <Box className='match_name' _before={matchNameBeforeStyle} position="relative">
                                                            <Text fontWeight="700" color={matchNameColor}>Trident Stallions vs JK Super Strikers</Text>
                                                        </Box>

                                                    </Box>
                                                    <Box className='' display="flex" justifyContent="center" flexDirection="column" h="52px" pl="25px" borderTop="1px solid rgba(255, 255, 255, 0.1)">
                                                        <Box className='match_icon' display="flex" flexDirection="row" gap="5px">
                                                            <Image height="15px" src={Video}></Image>
                                                            <Image height="15px" src={clockF}></Image>
                                                            <Image height="15px" src={clockB}></Image>
                                                            <Image height="15px" src={PIcon}></Image>
                                                            <Box fontSize="12px" color="rgba(255, 255, 255, 0.6)">In-Play</Box>
                                                        </Box>
                                                        <Box className='match_name' _before={matchNameBeforeStyle} position="relative">
                                                            <Text fontWeight="700" color={matchNameColor}>Trident Stallions vs JK Super Strikers</Text>
                                                        </Box>

                                                    </Box>
                                                </Box>
                                            </Box>
                                            <Box >
                                                <Box display="flex" alignItems="center" pl="10px" bg={matchNameBg} h="32px" borderTop="1px solid rgba(255, 255, 255, 0.1)" fontWeight="700" fontSize="12px">
                                                    T20 Sher E Punjab Cup
                                                </Box>
                                                <Box bg={cricketSectionBg}>
                                                    <Box className='' display="flex" justifyContent="center" flexDirection="column" h="52px" pl="25px" borderTop="1px solid rgba(255, 255, 255, 0.1)">
                                                        <Box className='match_icon' display="flex" flexDirection="row" gap="5px">
                                                            <Image height="15px" src={Video}></Image>
                                                            <Image height="15px" src={clockF}></Image>
                                                            <Image height="15px" src={clockB}></Image>
                                                            <Image height="15px" src={PIcon}></Image>
                                                            <Box fontSize="12px" color="rgba(255, 255, 255, 0.6)">In-Play</Box>
                                                        </Box>
                                                        <Box className='match_name' _before={matchNameBeforeStyle} position="relative">
                                                            <Text fontWeight="700" color={matchNameColor}>Trident Stallions vs JK Super Strikers</Text>
                                                        </Box>

                                                    </Box>
                                                    <Box className='' display="flex" justifyContent="center" flexDirection="column" h="52px" pl="25px" borderTop="1px solid rgba(255, 255, 255, 0.1)">
                                                        <Box className='match_icon' display="flex" flexDirection="row" gap="5px">
                                                            <Image height="15px" src={Video}></Image>
                                                            <Image height="15px" src={clockF}></Image>
                                                            <Image height="15px" src={clockB}></Image>
                                                            <Image height="15px" src={PIcon}></Image>
                                                            <Box fontSize="12px" color="rgba(255, 255, 255, 0.6)">In-Play</Box>
                                                        </Box>
                                                        <Box className='match_name' _before={matchNameBeforeStyle} position="relative">
                                                            <Text fontWeight="700" color={matchNameColor}>Trident Stallions vs JK Super Strikers</Text>
                                                        </Box>

                                                    </Box>
                                                </Box>
                                            </Box>
                                            <Box >
                                                <Box display="flex" alignItems="center" pl="10px" bg={matchNameBg} h="32px" borderTop="1px solid rgba(255, 255, 255, 0.1)" fontWeight="700" fontSize="12px">
                                                    T20 Sher E Punjab Cup
                                                </Box>
                                                <Box bg={cricketSectionBg}>
                                                    <Box className='' display="flex" justifyContent="center" flexDirection="column" h="52px" pl="25px" borderTop="1px solid rgba(255, 255, 255, 0.1)">
                                                        <Box className='match_icon' display="flex" flexDirection="row" gap="5px">
                                                            <Image height="15px" src={Video}></Image>
                                                            <Image height="15px" src={clockF}></Image>
                                                            <Image height="15px" src={clockB}></Image>
                                                            <Image height="15px" src={PIcon}></Image>
                                                            <Box fontSize="12px" color="rgba(255, 255, 255, 0.6)">In-Play</Box>
                                                        </Box>
                                                        <Box className='match_name' _before={matchNameBeforeStyle} position="relative">
                                                            <Text fontWeight="700" color={matchNameColor}>Trident Stallions vs JK Super Strikers</Text>
                                                        </Box>

                                                    </Box>
                                                    <Box className='' display="flex" justifyContent="center" flexDirection="column" h="52px" pl="25px" borderTop="1px solid rgba(255, 255, 255, 0.1)">
                                                        <Box className='match_icon' display="flex" flexDirection="row" gap="5px">
                                                            <Image height="15px" src={Video}></Image>
                                                            <Image height="15px" src={clockF}></Image>
                                                            <Image height="15px" src={clockB}></Image>
                                                            <Image height="15px" src={PIcon}></Image>
                                                            <Box fontSize="12px" color="rgba(255, 255, 255, 0.6)">In-Play</Box>
                                                        </Box>
                                                        <Box className='match_name' _before={matchNameBeforeStyle} position="relative">
                                                            <Text fontWeight="700" color={matchNameColor}>Trident Stallions vs JK Super Strikers</Text>
                                                        </Box>

                                                    </Box>
                                                </Box>
                                            </Box>
                                            <Box >
                                                <Box display="flex" alignItems="center" pl="10px" bg={matchNameBg} h="32px" borderTop="1px solid rgba(255, 255, 255, 0.1)" fontWeight="700" fontSize="12px">
                                                    T20 Sher E Punjab Cup
                                                </Box>
                                                <Box bg={cricketSectionBg}>
                                                    <Box className='' display="flex" justifyContent="center" flexDirection="column" h="52px" pl="25px" borderTop="1px solid rgba(255, 255, 255, 0.1)">
                                                        <Box className='match_icon' display="flex" flexDirection="row" gap="5px">
                                                            <Image height="15px" src={Video}></Image>
                                                            <Image height="15px" src={clockF}></Image>
                                                            <Image height="15px" src={clockB}></Image>
                                                            <Image height="15px" src={PIcon}></Image>
                                                            <Box fontSize="12px" color="rgba(255, 255, 255, 0.6)">In-Play</Box>
                                                        </Box>
                                                        <Box className='match_name' _before={matchNameBeforeStyle} position="relative">
                                                            <Text fontWeight="700" color={matchNameColor}>Trident Stallions vs JK Super Strikers</Text>
                                                        </Box>

                                                    </Box>
                                                    <Box className='' display="flex" justifyContent="center" flexDirection="column" h="52px" pl="25px" borderTop="1px solid rgba(255, 255, 255, 0.1)">
                                                        <Box className='match_icon' display="flex" flexDirection="row" gap="5px">
                                                            <Image height="15px" src={Video}></Image>
                                                            <Image height="15px" src={clockF}></Image>
                                                            <Image height="15px" src={clockB}></Image>
                                                            <Image height="15px" src={PIcon}></Image>
                                                            <Box fontSize="12px" color="rgba(255, 255, 255, 0.6)">In-Play</Box>
                                                        </Box>
                                                        <Box className='match_name' _before={matchNameBeforeStyle} position="relative">
                                                            <Text fontWeight="700" color={matchNameColor}>Trident Stallions vs JK Super Strikers</Text>
                                                        </Box>

                                                    </Box>
                                                </Box>
                                            </Box>
                                            <Box >
                                                <Box display="flex" alignItems="center" pl="10px" bg={matchNameBg} h="32px" borderTop="1px solid rgba(255, 255, 255, 0.1)" fontWeight="700" fontSize="12px">
                                                    T20 Sher E Punjab Cup
                                                </Box>
                                                <Box bg={cricketSectionBg}>
                                                    <Box className='' display="flex" justifyContent="center" flexDirection="column" h="52px" pl="25px" borderTop="1px solid rgba(255, 255, 255, 0.1)">
                                                        <Box className='match_icon' display="flex" flexDirection="row" gap="5px">
                                                            <Image height="15px" src={Video}></Image>
                                                            <Image height="15px" src={clockF}></Image>
                                                            <Image height="15px" src={clockB}></Image>
                                                            <Image height="15px" src={PIcon}></Image>
                                                            <Box fontSize="12px" color="rgba(255, 255, 255, 0.6)">In-Play</Box>
                                                        </Box>
                                                        <Box className='match_name' _before={matchNameBeforeStyle} position="relative">
                                                            <Text fontWeight="700" color={matchNameColor}>Trident Stallions vs JK Super Strikers</Text>
                                                        </Box>

                                                    </Box>
                                                    <Box className='' display="flex" justifyContent="center" flexDirection="column" h="52px" pl="25px" borderTop="1px solid rgba(255, 255, 255, 0.1)">
                                                        <Box className='match_icon' display="flex" flexDirection="row" gap="5px">
                                                            <Image height="15px" src={Video}></Image>
                                                            <Image height="15px" src={clockF}></Image>
                                                            <Image height="15px" src={clockB}></Image>
                                                            <Image height="15px" src={PIcon}></Image>
                                                            <Box fontSize="12px" color="rgba(255, 255, 255, 0.6)">In-Play</Box>
                                                        </Box>
                                                        <Box className='match_name' _before={matchNameBeforeStyle} position="relative">
                                                            <Text fontWeight="700" color={matchNameColor}>Trident Stallions vs JK Super Strikers</Text>
                                                        </Box>

                                                    </Box>
                                                </Box>
                                            </Box>
                                            <Box >
                                                <Box display="flex" alignItems="center" pl="10px" bg={matchNameBg} h="32px" borderTop="1px solid rgba(255, 255, 255, 0.1)" fontWeight="700" fontSize="12px">
                                                    T20 Sher E Punjab Cup
                                                </Box>
                                                <Box bg={cricketSectionBg}>
                                                    <Box className='' display="flex" justifyContent="center" flexDirection="column" h="52px" pl="25px" borderTop="1px solid rgba(255, 255, 255, 0.1)">
                                                        <Box className='match_icon' display="flex" flexDirection="row" gap="5px">
                                                            <Image height="15px" src={Video}></Image>
                                                            <Image height="15px" src={clockF}></Image>
                                                            <Image height="15px" src={clockB}></Image>
                                                            <Image height="15px" src={PIcon}></Image>
                                                            <Box fontSize="12px" color="rgba(255, 255, 255, 0.6)">In-Play</Box>
                                                        </Box>
                                                        <Box className='match_name' _before={matchNameBeforeStyle} position="relative">
                                                            <Text fontWeight="700" color={matchNameColor}>Trident Stallions vs JK Super Strikers</Text>
                                                        </Box>

                                                    </Box>
                                                    <Box className='' display="flex" justifyContent="center" flexDirection="column" h="52px" pl="25px" borderTop="1px solid rgba(255, 255, 255, 0.1)">
                                                        <Box className='match_icon' display="flex" flexDirection="row" gap="5px">
                                                            <Image height="15px" src={Video}></Image>
                                                            <Image height="15px" src={clockF}></Image>
                                                            <Image height="15px" src={clockB}></Image>
                                                            <Image height="15px" src={PIcon}></Image>
                                                            <Box fontSize="12px" color="rgba(255, 255, 255, 0.6)">In-Play</Box>
                                                        </Box>
                                                        <Box className='match_name' _before={matchNameBeforeStyle} position="relative">
                                                            <Text fontWeight="700" color={matchNameColor}>Trident Stallions vs JK Super Strikers</Text>
                                                        </Box>

                                                    </Box>
                                                </Box>
                                            </Box>
                                        </Box>
                                    </TabPanel>
                                </TabPanels>
                            </Tabs>
                        </TabPanel>
                        <TabPanel p="0" className='byOriginMode_tabsCOntent'>
                            <Tabs>
                                <Box display="flex" justifyContent="space-between" h={{base:"26px", md:"32px"}}>
                                    <TabList border="0" className='tabsList' w="70%" gap="7px">
                                        <Tab>In-Play</Tab>
                                        <Tab>Next 24hrs</Tab>
                                        <Tab>Early</Tab>
                                        <Tab>Result</Tab>
                                    </TabList>
                                    <Box className='flexCenter' bg={cricketSectionBg} width="20%" minW="6.5em" maxW="9em" borderRadius="20px">Competitions</Box>
                                </Box>
                                <TabPanels>
                                    <TabPanel>
                                        <Box className='flexCenter' flexDirection="column" mt={{base:"29vh",md:"0"}} mb={{base:"100vh",md:"0"}} >
                                            <Image src={noEvent} h="103" w="103" ml="9px" mt={{base:"0", md:"15vh"}} ></Image>
                                            <Text>No Event</Text>
                                        </Box>
                                    </TabPanel>
                                    <TabPanel>
                                        <Box className='flexCenter' flexDirection="column" mt={{base:"29vh",md:"0"}} mb={{base:"100vh",md:"0"}} >
                                            <Image src={noEvent} h="103" w="103" ml="9px" mt={{base:"0", md:"15vh"}} ></Image>
                                            <Text>No Event</Text>
                                        </Box>
                                    </TabPanel>
                                    <TabPanel>
                                        <Box className='flexCenter' flexDirection="column" mt={{base:"29vh",md:"0"}} mb={{base:"100vh",md:"0"}} >
                                            <Image src={noEvent} h="103" w="103" ml="9px" mt={{base:"0", md:"15vh"}} ></Image>
                                            <Text>No Event</Text>
                                        </Box>
                                    </TabPanel>
                                    <TabPanel>
                                        <Box className='flexCenter' flexDirection="column" mt={{base:"29vh",md:"0"}} mb={{base:"100vh",md:"0"}} >
                                            <Image src={noEvent} h="103" w="103" ml="9px" mt={{base:"0", md:"15vh"}} ></Image>
                                            <Text>No Event</Text>
                                        </Box>
                                    </TabPanel>
                                </TabPanels>
                            </Tabs>
                        </TabPanel>
                    </TabPanels>
                </Tabs>
            </Box>
        </Box>
    );
};

export default Mode;
