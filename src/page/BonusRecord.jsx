import { Box, Text, Heading, Tabs, TabList, TabPanels, Tab, TabPanel } from '@chakra-ui/react'
import { RiArrowLeftSLine } from "react-icons/ri";
import { useSelector } from "react-redux";
import React, { useState } from 'react';

function BonusRecord() {
    const { primaryBg, bonusRecordTabsBg, resultBoxBg } = useSelector((state) => state.theme);

    const contentWrStyle = {
        // maxWidth: "calc(676px )",
        margin: "10px auto 50px",
    };


    return (
        <Box className="bonusRecord_page main_pageBody homePageGrid_spacing">
            <Box position="sticky" top="65px" zIndex="99" bg={primaryBg}>
                <Box height="40px" position="relative">
                    <Box display="flex" alignItems="center" padding={{ base: "0 27px 0 4px", md: "0 27px" }} height="100%">
                        <RiArrowLeftSLine />
                        <Text>Lobby</Text>
                    </Box>
                    <Box css={{
                        position: "absolute",
                        top: "7px",
                        bottom: "0",
                        left: "50%",
                        transform: " translateX(-50%)",
                        height: "100%",
                    }}>
                        <Heading as="h5" fontSize={{ base: "18px", md: "20px" }} >Bonus Record</Heading>
                    </Box>
                </Box>
            </Box>
            <Box className='main_content' maxW={{base:"100%",md:"676px"}} style={{ ...contentWrStyle }} >
                <Tabs>
                    <Box className='bonusRecordTabs' bg={bonusRecordTabsBg} p="27px 25px" borderRadius="10px">
                        <Heading className='titleLine' fontSize="15px" paddingLeft="20px" position="relative" _before={{
                            content: "''",
                            position: "absolute",
                            top: "0",
                            left: "0",
                            width: "6px",
                            height: "100%",
                            borderRadius: "212px",
                            backgroundColor: "#145ec7",
                        }}
                        >Please select Date Range</Heading>
                        <TabList border="none" gap="6px" mt="20px">
                            <Tab>This Week</Tab>
                            <Tab>Last Week</Tab>
                            <Tab>This Month</Tab>
                            <Tab>Last Month</Tab>
                        </TabList>
                    </Box>
                    <Box bg={bonusRecordTabsBg} p="27px 25px" borderRadius="10px" mt="15px">
                        <Box className='result_title_wr flexCenter' textAlign="center" w="100%">
                            <Box className='titleDivider' background="hsla(0,0%,100%,.1)" flexGrow="1" h="1px"></Box>
                            <Heading fontSize="18px" p="0 24px" display="inline-block">Result</Heading>
                            <Box className='titleDivider' background="hsla(0,0%,100%,.1)" flexGrow="1" h="1px"></Box>
                        </Box>
                        <TabPanels>
                            <TabPanel p="0">
                                <Box className='flexCenter' w="100%" gap="1px" minH="48px" mt="20px" borderRadius="8px" alignItems="stretch" overflow="hidden">
                                    <Box className='flexCenter' bg={resultBoxBg} w="50%">
                                        <Text>Total</Text>
                                    </Box>
                                    <Box className='flexCenter' bg={resultBoxBg} w="50%">
                                        <Text>0</Text>
                                    </Box>
                                </Box>
                            </TabPanel>
                            <TabPanel p="0">
                                <Box className='flexCenter' w="100%" gap="1px" minH="48px" mt="20px" borderRadius="8px" alignItems="stretch" overflow="hidden">
                                    <Box className='flexCenter' bg={resultBoxBg} w="50%">
                                        <Text>Total</Text>
                                    </Box>
                                    <Box className='flexCenter' bg={resultBoxBg} w="50%">
                                        <Text>0</Text>
                                    </Box>
                                </Box>
                            </TabPanel>
                            <TabPanel p="0">
                                <Box className='flexCenter' w="100%" gap="1px" minH="48px" mt="20px" borderRadius="8px" alignItems="stretch" overflow="hidden">
                                    <Box className='flexCenter' bg={resultBoxBg} w="50%">
                                        <Text>Total</Text>
                                    </Box>
                                    <Box className='flexCenter' bg={resultBoxBg} w="50%">
                                        <Text>0</Text>
                                    </Box>
                                </Box>
                            </TabPanel>
                            <TabPanel p="0">
                                <Box className='flexCenter' w="100%" gap="1px" minH="48px" mt="20px" borderRadius="8px" alignItems="stretch" overflow="hidden">
                                    <Box className='flexCenter' bg={resultBoxBg} w="50%">
                                        <Text>Total</Text>
                                    </Box>
                                    <Box className='flexCenter' bg={resultBoxBg} w="50%">
                                        <Text>0</Text>
                                    </Box>
                                </Box>
                            </TabPanel>

                        </TabPanels>
                    </Box>

                </Tabs>
            </Box >
        </Box >
    );
}

export default BonusRecord;
