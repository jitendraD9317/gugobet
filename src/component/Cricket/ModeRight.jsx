import React, { useState, useRef, useEffect } from 'react';
import { useSelector } from "react-redux";
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { RiPlayReverseFill, RiPlayFill } from 'react-icons/ri';
import { FaCalendarDays } from "react-icons/fa6";
import calendar from '../../assets/images/cricket/calendar.svg'

import { Box, Tabs, TabList, TabPanels, Tab, TabPanel, Image, Text, position, Flex, Button } from '@chakra-ui/react';


const ModeRight = () => {
    const { primaryText, cricketSectionBg, transectionBtn, matchNameBg, matchBycometitionBg } = useSelector((state) => state.theme);
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
    const countNumberStyle = {
        alignItems: "flex-end",
        height: "25px",
        letterSpacing: "0.29px",
        fontSize: "14px",
    }
    return (
        <Box padding="0" className="cricketModeRight relative">
            <Tabs >
                <Box className=' transactions_tabs' p="12px 0" borderRadius="10px">
                    <TabList className='tabsMainList' border="none" gap="8px" px="0">
                        <Tab className='flexCenter' color={primaryText} fontSize="14px" flexGrow="1">Live</Tab>
                        <Tab className='flexCenter' color={primaryText} fontSize="14px" flexGrow="1">OrderSlip</Tab>
                        <Tab className='flexCenter' color={primaryText} fontSize="14px" flexGrow="1">Statement</Tab>
                    </TabList>
                </Box>

                <TabPanels>
                    <TabPanel p="0">
                        <Box className='flexCenter' flexDirection="column" px="0" h="calc(-183px + 100vh)" bg={cricketSectionBg}>
                            <Box fontSize="14px" fontWeight="600">Click the match to watch and show Match info</Box>
                        </Box>
                    </TabPanel>
                    <TabPanel p="0">
                        <Box className='flexCenter' flexDirection="column" px="0" h="calc(-183px + 100vh)" bg={cricketSectionBg}>
                            <Box fontSize="14px" fontWeight="600">There are no bets on your orderslip.</Box>
                            <Box fontSize="12px" fontWeight="400">Click the selections to add a bet.</Box>
                        </Box>
                    </TabPanel>
                    <TabPanel p="0">
                        <Box>
                            <Tabs className='statementTabs_wr'>
                                <TabList className='statementTabs' bg={cricketSectionBg} border="0">
                                    <Tab style={{ ...tabsStyle }} borderRight="1px solid rgba(255, 255, 255, 0.1) !important">Today</Tab>
                                    <Tab style={{ ...tabsStyle }} borderRight="1px solid rgba(255, 255, 255, 0.1) !important">Last 7 Days</Tab>
                                    <Tab style={{ ...tabsStyle }} >Date Range</Tab>
                                </TabList>

                                <TabPanels>
                                    <TabPanel p="0">
                                        <Box bg={cricketSectionBg} h="105px" p="0px 14px" mt="14px">
                                            <Box fontSize="14px" p="9px 0px" borderBottom="1px solid rgba(255, 255, 255, 0.1)" letterSpacing="0.22px">Filter Breakdown</Box>
                                            <Flex h="70px" alignItems="center">
                                                <Box className='count_box' flex="2 1 0%">
                                                    <Box style={{ ...countNumberStyle }}>0</Box>
                                                    <Box letterSpacing="0.16px" whiteSpace="nowrap" fontSize="10px">BETS</Box>
                                                </Box>
                                                <Box className='count_box' flex="2 1 0%">
                                                    <Box style={{ ...countNumberStyle }}>0</Box>
                                                    <Box letterSpacing="0.16px" whiteSpace="nowrap" fontSize="10px">WON</Box>
                                                </Box>
                                                <Box className='count_box' flex="2 1 0%">
                                                    <Box style={{ ...countNumberStyle }}>0</Box>
                                                    <Box letterSpacing="0.16px" whiteSpace="nowrap" fontSize="10px">LOST</Box>
                                                </Box>
                                                <Box className='count_box' flex="3 1 0%">
                                                    <Box style={{ ...countNumberStyle }}>0</Box>
                                                    <Box letterSpacing="0.16px" whiteSpace="nowrap" fontSize="10px">P&L</Box>
                                                </Box>
                                                <Box className='count_box' flex="3 1 0%">
                                                    <Box style={{ ...countNumberStyle }}>0</Box>
                                                    <Box letterSpacing="0.16px" whiteSpace="nowrap" fontSize="10px">TOTAL EXPOSURE</Box>
                                                </Box>
                                            </Flex>
                                        </Box>
                                        <Box>
                                            <Tabs className='statementTabs_wr'>
                                                <TabList className='statementTabs' bg={cricketSectionBg} border="0" mt="10px">
                                                    <Tab style={{ ...tabsStyle }} borderRight="1px solid rgba(255, 255, 255, 0.1) !important">Unsettled</Tab>
                                                    <Tab style={{ ...tabsStyle }} borderRight="1px solid rgba(255, 255, 255, 0.1) !important">Settled</Tab>
                                                </TabList>

                                                <TabPanels>
                                                    <TabPanel p="0"></TabPanel>
                                                    <TabPanel p="0"></TabPanel>
                                                </TabPanels>
                                            </Tabs>
                                        </Box>
                                    </TabPanel>
                                    <TabPanel p="0">
                                        <Box bg={cricketSectionBg} h="105px" p="0px 14px" mt="14px">
                                            <Box fontSize="14px" p="9px 0px" borderBottom="1px solid rgba(255, 255, 255, 0.1)" letterSpacing="0.22px">Filter Breakdown</Box>
                                            <Flex h="70px" alignItems="center">
                                                <Box className='count_box' flex="2 1 0%">
                                                    <Box style={{ ...countNumberStyle }}>0</Box>
                                                    <Box letterSpacing="0.16px" whiteSpace="nowrap" fontSize="10px">BETS</Box>
                                                </Box>
                                                <Box className='count_box' flex="2 1 0%">
                                                    <Box style={{ ...countNumberStyle }}>0</Box>
                                                    <Box letterSpacing="0.16px" whiteSpace="nowrap" fontSize="10px">WON</Box>
                                                </Box>
                                                <Box className='count_box' flex="2 1 0%">
                                                    <Box style={{ ...countNumberStyle }}>0</Box>
                                                    <Box letterSpacing="0.16px" whiteSpace="nowrap" fontSize="10px">LOST</Box>
                                                </Box>
                                                <Box className='count_box' flex="3 1 0%">
                                                    <Box style={{ ...countNumberStyle }}>0</Box>
                                                    <Box letterSpacing="0.16px" whiteSpace="nowrap" fontSize="10px">P&L</Box>
                                                </Box>
                                                <Box className='count_box' flex="3 1 0%">
                                                    <Box style={{ ...countNumberStyle }}>0</Box>
                                                    <Box letterSpacing="0.16px" whiteSpace="nowrap" fontSize="10px">TOTAL EXPOSURE</Box>
                                                </Box>
                                            </Flex>
                                        </Box>
                                        <Box>
                                            <Tabs className='statementTabs_wr'>
                                                <TabList className='statementTabs' bg={cricketSectionBg} border="0" mt="10px">
                                                    <Tab style={{ ...tabsStyle }} borderRight="1px solid rgba(255, 255, 255, 0.1) !important">Unsettled</Tab>
                                                    <Tab style={{ ...tabsStyle }} borderRight="1px solid rgba(255, 255, 255, 0.1) !important">Settled</Tab>
                                                </TabList>

                                                <TabPanels>
                                                    <TabPanel p="0"></TabPanel>
                                                    <TabPanel p="0"></TabPanel>
                                                </TabPanels>
                                            </Tabs>
                                        </Box>
                                    </TabPanel>
                                    <TabPanel p="0">
                                        <Box bg={cricketSectionBg} h="105px" p="0px 14px" mt="14px">
                                            <Box display="flex" justifyContent="space-between" p="10px">
                                                <Box>From:</Box>
                                                <Box>12/06/2024</Box>
                                                <Box>
                                                <Image src={calendar} boxSize="19px"></Image>
                                                </Box>
                                            </Box>
                                            <Box display="flex" justifyContent="space-between" p="10px">
                                                <Box>To:</Box>
                                                <Box>12/06/2024</Box>
                                                <Box>
                                                <Image src={calendar} boxSize="19px"></Image>
                                                </Box>
                                            </Box>
                                        </Box>
                                        <Box>
                                            <Box fontSize="12px" m="20px 8px 15px">Please note: the maximum date range is 1 month.</Box>
                                            <Button bg={transectionBtn} borderRadius="4px" h="45px" fontSize="14px" color={primaryText} w="100%">Show History</Button>
                                        </Box>
                                    </TabPanel>
                                </TabPanels>
                            </Tabs>
                        </Box>
                    </TabPanel>

                </TabPanels>
            </Tabs>
        </Box>
    );
};

export default ModeRight;
