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
    InputGroup,
    Input,
    Button,
} from '@chakra-ui/react';
import { RiArrowLeftSLine } from "react-icons/ri";
import { useSelector } from "react-redux";
import React, { useState } from 'react';
import impsLogo from "../../assets/images/deposit/logo-imps.svg";
import bonusBg from "../../assets/images/deposit/bonus-bg.png";

function Imps() {
    const {
        primaryBg,
        promotionCardBg,
        inputBg,
        gray25,
        yellowColor,
        bonusRecordTabsBg,
        resultBoxBg,
        depositConfirmBtn,
        loginPopupBtnTabsBg,
        gray3,
        warningColor,
        primaryText,
    } = useSelector((state) => state.theme);

    const contentWrStyle = {
        // maxWidth: "calc(600px )",
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

    const [amount, setAmount] = useState('');
    const [cashback, setCashback] = useState(0);
    const [activeTab, setActiveTab] = useState(null);

    const handleInputChange = (e) => {
        const value = e.target.value.replace(/\D/g, '');
        setAmount(value);
        updateCashback(value);
        setActiveTab(null);  // Reset active tab when typing
    };

    const updateCashback = (value) => {
        const numericValue = parseFloat(value);
        if (!isNaN(numericValue)) {
            setCashback((numericValue * 0.005).toFixed(2));
        } else {
            setCashback(0);
        }
    };

    const handleTabClick = (value) => {
        setAmount(value);
        updateCashback(value);
        setActiveTab(value);  // Set active tab
    };

    const isAmountValid = amount >= 500 && amount <= 100000;
    const buttonStyle = isAmountValid
        ? {
            background: "linear-gradient(180deg,#5cf298,#00b58b)",
            boxShadow: "0 0 12px rgba(0,181,139,.2)"
        }
        : {
            background: depositConfirmBtn
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
                        <Heading as="h5" fontSize={{ base: "18px", md: "20px" }} >Deposit</Heading>
                    </Box>
                </Box>
            </Box>
            <Box className='main_content' maxWidth={{base:"100%", md:"600px"}} style={{ ...contentWrStyle }} >

                <Box>
                    <Box p="27px 25px" bg={bonusRecordTabsBg} borderRadius="10px" mt="15px">
                        <Image src={impsLogo} maxH="30px" h="110px" m="0 auto 28px"></Image>
                        <Box className='result_title_wr flexCenter' textAlign="center" w="100%">
                            <Box className='titleDivider' background="hsla(0,0%,100%,.1)" flexGrow="1" h="1px"></Box>
                        </Box>
                        <Box display="flex" justifyContent="space-between" alignItems="center" mt="25px">
                            <Box fontSize="19px" color={gray25} fontWeight="600">Enter deposit amount</Box>
                            <Box fontSize="14px" color={yellowColor}><strong>0.5%</strong> Cashback</Box>
                        </Box>
                        <Box className='flexCenter' w="100%" gap="1px" minH="48px" mt="10px" borderRadius="8px" alignItems="stretch" overflow="hidden">
                            <Box className='flexCenter' bg={inputBg} w="100%">
                                <InputGroup>
                                    <Input
                                        placeholder='50-100,000'
                                        fontWeight="700"
                                        height="48px"
                                        type="text"
                                        value={amount}
                                        onChange={handleInputChange}
                                        border="none"
                                        outline="none"
                                        boxShadow="none"
                                        borderRadius="8px"
                                    />
                                </InputGroup>
                                <Box className='flexCenter' w="20%" minW="112px" bg={loginPopupBtnTabsBg} color={gray3} h="100%">INR</Box>
                            </Box>
                        </Box>
                        <Box display="flex" justifyContent="space-between" gap="5px" mt="10px">
                            {['500', '600', '2000', '10000', '100000'].map((value) => (
                                <Button
                                    key={value}
                                    className='bonusTab'
                                    bg={value === activeTab ? 'linear-gradient(180deg,#223652,#1c2d44)' : inputBg}
                                    w="20%"
                                    borderRadius="8px"
                                    h="42px"
                                    color={primaryText}
                                    _hover={{bg:inputBg}}
                                    onClick={() => handleTabClick(value)}
                                >
                                    {value}
                                </Button>
                            ))}
                        </Box>
                        {isAmountValid ? (
                            <Box className='cashBack' color={gray25} p="7px 0">Cashback amount - <Box className='bonusPoints' as="strong" color={yellowColor}>{cashback} INR</Box></Box>
                        ) : (
                            <Box className='warning' color={warningColor} p="7px 0">Min amount - 500 INR</Box>
                        )}
                        <Box className='flexCenter' mt="53px" w="100%" borderRadius="12px">
                            <Button className='confirmBtn' minH="54px" w="100%" color={primaryText} style={buttonStyle}>Continue</Button>
                        </Box>
                    </Box>
                </Box>
            </Box >
        </Box >
    );
}

export default Imps;
