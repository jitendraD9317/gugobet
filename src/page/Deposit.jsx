import {
    Box,
    Text,
    Heading,
    Image,
    useDisclosure,
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalCloseButton,
    ModalBody,
    Tabs, 
    TabList, 
    TabPanels, 
    Tab, 
    TabPanel
} from '@chakra-ui/react';
import { RiArrowLeftSLine } from "react-icons/ri";
import { useSelector } from "react-redux";
import React from 'react';
import bonusImg from "../assets/images/deposit/welcome-bonus.png";
import bonusBg from "../assets/images/deposit/bonus-bg.png";
import impsLogo from "../assets/images/deposit/logo-imps.svg";
import usdtLogo from "../assets/images/deposit/logo-usdt.svg";
import { MdKeyboardArrowRight } from "react-icons/md";
import { Link, Link as RouterLink } from 'react-router-dom';

function Deposit() {
    const {
        primaryBg,
        promotionCardBg,
        bonusTitle,
        linBg,
        RegistrationPopupBg,
        bonusRecordTabsBg,
        resultBoxBg
    } = useSelector((state) => state.theme);

    const contentWrStyle = {
        // maxWidth: { base: "100%", md: "600px" }, // Responsive maxWidth
        margin: "10px auto 50px",
    };

    const bonusBgStyle = {
        backgroundImage: `url(${bonusBg})`,
        backgroundRepeat: "no-repeat",
        backgroundPosition: "0",
        backgroundSize: "auto 100%",
        boxShadow: "inset 0 0 30px rgba(0, 0, 0, .4)",
        width: "100%",
        height: "66px",
        border: "1px solid #48698a",
        borderRadius: "13px",
        backgroundColor: "#162e45",
    };

    const paymentCardStyle = {
        position: "relative",
        height: "66px",
        marginTop: "13px",
        padding: "0 0 0 20px",
        borderRadius: "10px",
        overflow: "hidden",
    };

    const cashBackStyle = {
        padding: "3px 10px",
        borderRadius: "0 0 0 16px",
        background: "#ffeb3b",
        color: promotionCardBg,
    };

    const {
        isOpen: isOpenBank,
        onOpen: onOpenBank,
        onClose: onCloseBank,
    } = useDisclosure();

    const {
        isOpen: isOpenCrypto,
        onOpen: onOpenCrypto,
        onClose: onCloseCrypto,
    } = useDisclosure();

    const initialRef = React.useRef(null);
    const finalRef = React.useRef(null);

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
                        <Heading as="h5" fontSize={{ base: "18px", md: "20px" }} >Deposit</Heading>
                    </Box>
                </Box>
            </Box>
            <Box className='main_content' style={{ ...contentWrStyle }} maxWidth= { {base:"100%", md:"600px"} } >
                <Box className='welcomeBonus' mb="20px" position="relative" style={{ ...bonusBgStyle }}>
                    <Text css={{
                        position: "absolute",
                        top: "50%",
                        right: "15%",
                        height: "48%",
                        transform: "translate(-50%,-40%)",
                        fontWeight: "700"
                    }}>Click here to apply for Welcome Bonus!</Text>
                    <Image src={bonusImg} css={{
                        position: "absolute",
                        top: "50%",
                        right: "25px",
                        height: "36px",
                        transform: "translateY(-50%)",
                    }}></Image>
                </Box>

                <Box  mb="20px">
                    <Box as={RouterLink} to="/imps" mt="22px" >
                        <Heading className='titleLine' fontSize="18px" paddingLeft="20px" position="relative" _before={{
                            content: "''",
                            position: "absolute",
                            top: "0",
                            left: "0",
                            width: "6px",
                            height: "100%",
                            borderRadius: "212px",
                            backgroundColor: "#145ec7",
                        }}
                        >Bank Transfer</Heading>
                        <Box className='flexCenter' bg={promotionCardBg} style={{ ...paymentCardStyle }}>
                            <Box flexShrink="0" w="30%" mr="10px">
                                <Image src={impsLogo} maxH="20px"></Image>
                            </Box>
                            <Box w="100%">
                                <Box>
                                    <Box className='title' fontSize={{ base: "14px", md: "16px" }} fontWeight="600" >IMPS</Box>
                                    <Box className='subtitle' fontWeight="600" fontSize="14px" color={bonusTitle}></Box>
                                </Box>
                                <Box fontSize="12px" mt="3px" color={bonusTitle}>₹500 - ₹100,000</Box>
                            </Box>
                            <Box className='cashBack_wr flexCenter' justifyContent="end" position="relative" w="99.6px" flexShrink="0" alignSelf="flex-start" style={{ ...cashBackStyle }}
                                _before={{
                                    content: '"%"',
                                    position: "absolute",
                                    display: "flex",
                                    alignItems: "center",
                                    justifyContent: "center",
                                    width: "16px",
                                    height: "16px",
                                    borderRadius: "50%",
                                    marginRight: "5px",
                                    backgroundColor: "#0f1424",
                                    color: "#ffeb3b",
                                    left: "10px"
                                }}>
                                <Text fontSize="12px !important" lineHeight="normal">Cashback!</Text>
                            </Box>
                            <Box position="absolute" top="58%" right="20px" width="6px" transform="translateY(-50%)" >
                                <MdKeyboardArrowRight color={linBg} size={24} />
                            </Box>
                        </Box>
                    </Box>
                </Box>

                <Box>
                    <Box as={RouterLink} to="/usdt" mt="22px">
                        <Heading className='titleLine' fontSize="18px" paddingLeft="20px" position="relative" _before={{
                            content: "''",
                            position: "absolute",
                            top: "0",
                            left: "0",
                            width: "6px",
                            height: "100%",
                            borderRadius: "212px",
                            backgroundColor: "#145ec7",
                        }}
                        >Crypto</Heading>
                        <Box className='flexCenter' bg={promotionCardBg} style={{ ...paymentCardStyle }}>
                            <Box flexShrink="0" w="30%" mr="10px">
                                <Image src={usdtLogo} maxH="20px"></Image>
                            </Box>
                            <Box w="100%">
                                <Box>
                                    <Box className='title' fontSize={{ base: "14px", md: "16px" }} fontWeight="600" >USDT</Box>
                                    <Box className='subtitle' fontWeight="600" fontSize="14px" color={bonusTitle}></Box>
                                </Box>
                                <Box fontSize="12px" mt="3px" color={bonusTitle}>₹500 - ₹100,000</Box>
                            </Box>
                            <Box className='cashBack_wr flexCenter' justifyContent="end" position="relative" w="99.6px" flexShrink="0" alignSelf="flex-start" style={{ ...cashBackStyle }}
                                _before={{
                                    content: '"%"',
                                    position: "absolute",
                                    display: "flex",
                                    alignItems: "center",
                                    justifyContent: "center",
                                    width: "16px",
                                    height: "16px",
                                    borderRadius: "50%",
                                    marginRight: "5px",
                                    backgroundColor: "#0f1424",
                                    color: "#ffeb3b",
                                    left: "10px"
                                }}>
                                <Text fontSize="12px !important" lineHeight="normal">Cashback!</Text>
                            </Box>
                            <Box position="absolute" top="58%" right="20px" width="6px" transform="translateY(-50%)" >
                                <MdKeyboardArrowRight color={linBg} size={24} />
                            </Box>
                        </Box>
                    </Box>
                </Box>
            </Box >
        </Box >
    );
}

export default Deposit;
