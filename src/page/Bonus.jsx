import {
    Box,
    Heading,
    Tabs,
    TabList,
    TabPanels,
    Tab,
    TabPanel,
    Image,
    Text,
    useDisclosure,
    Modal,
    ModalOverlay,
    ModalContent,
    ModalCloseButton,
    ModalBody,
    ModalHeader,
    ModalFooter,
    Flex,
} from '@chakra-ui/react';
import { BsArrowRight } from "react-icons/bs";
import { RiArrowLeftSLine } from "react-icons/ri";
import { FaLink } from "react-icons/fa6";
import { MdArrowRight } from "react-icons/md";
import cardImg from "../assets/images/bonus/bonuscard.png";
import worldCup from "../assets/images/promotion/t20-world-cup.jpeg";
import { useSelector } from "react-redux";
import React from 'react';

const Bonus = () => {
    const { tabsBg, bonusTitle, bonusTitleLine, primaryText, promotionCardBg, PopupBg, RegistrationText, popupFooterBg } = useSelector((state) => state.theme);

    const contentWrStyle = {
        display: "grid",
        gridTemplateColumns: { base: "1fr", md: "repeat(2, 1fr)" },
        gridGap: { base: "25px", md: "25px" },
        // marginTop: { base: "25px", md: "45px" },
        maxWidth: { base: "100%", md: "calc(800px + 300px)" },
        margin: "0 auto",
    };

    const tabsStyle = {
        width: "100%",
        maxWidth: "404px",
        height: "50px",
        margin: "0 auto",
        padding: "5px",
        borderRadius: "10px",
    }

    return (
        <Box className="promotion_page main_pageBody homePageGrid_spacing">

            <Tabs className="promotionTabs" paddingTop="20px">
                <TabList className='tabsList' justifyContent="center" style={{ ...tabsStyle }} border="none" bg={tabsBg} position="sticky" top="65px" zIndex="99">
                    <Tab flexGrow="1">Bonuses</Tab>
                    <Tab flexGrow="1">Active</Tab>
                    <Tab flexGrow="1">History</Tab>
                </TabList>
                <Box className='listTitle' padding="30px 0 20px" margin="0 auto" alignItems="center" display="flex" justifyContent="center" maxW="200px" w="100%"
                    css={{
                        position: 'relative',
                        '&::before': {
                            content: '""',
                            position: 'absolute',
                            width: "60px",
                            height: "7px",
                            backgroundImage: bonusTitleLine,
                            transform: "skewX(36deg)",
                            left: "-40px"
                        },
                        '&::after': {
                            content: '""',
                            position: 'absolute',
                            width: "60px",
                            height: "7px",
                            right: "-40px",
                            backgroundImage: bonusTitleLine,
                            transform: "scaleX(-1) skewX(36deg)",
                        },
                    }}
                >
                    <Text color={bonusTitle} textAlign="center" fontSize="16px !important" fontWeight="700" >Limited Bonus</Text>
                </Box>
                <TabPanels>
                    <TabPanel>
                        <Box className="tabsCardBox" sx={contentWrStyle}>
                            <Image w="100%" src={cardImg}></Image>
                            <Image w="100%" src={cardImg}></Image>
                            <Image w="100%" src={cardImg}></Image>
                            <Image w="100%" src={cardImg}></Image>
                            <Image w="100%" src={cardImg}></Image>
                            <Image w="100%" src={cardImg}></Image>
                        </Box>
                    </TabPanel>
                    <TabPanel>
                        <Box className="tabsCardBox" sx={contentWrStyle}>
                            <Image w="100%" src={cardImg}></Image>
                            <Image w="100%" src={cardImg}></Image>
                            <Image w="100%" src={cardImg}></Image>
                        </Box>
                    </TabPanel>
                    <TabPanel>
                        <Box className="tabsCardBox" sx={contentWrStyle}>
                            <Image w="100%" src={cardImg}></Image>
                            <Image w="100%" src={cardImg}></Image>
                            <Image w="100%" src={cardImg}></Image>
                            <Image w="100%" src={cardImg}></Image>
                            <Image w="100%" src={cardImg}></Image>
                            <Image w="100%" src={cardImg}></Image>
                            <Image w="100%" src={cardImg}></Image>
                        </Box>
                    </TabPanel>
                </TabPanels>
            </Tabs>
        </Box>
    );
};

export default Bonus;
