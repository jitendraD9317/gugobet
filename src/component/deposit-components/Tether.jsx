import {
    Box,
    Text,
    Heading,
    Image,
    useDisclosure,
    InputGroup,
    Input,
    Button,
} from '@chakra-ui/react';
import { RiArrowLeftSLine } from "react-icons/ri";
import { useSelector } from "react-redux";
import React, { useState } from 'react';
import impsLogo from "../../assets/images/deposit/logo-imps.svg";
import bonusBg from "../../assets/images/deposit/bonus-bg.png";
import tetherLogo from "../../assets/images/deposit/tether.svg";
import switchIcon from "../../assets/images/deposit/switch.svg";

function Tether() {
    const {
        primaryBg,
        promotionCardBg,
        inputBg,
        gray25,
        yellowColor,
        bonusRecordTabsBg,
        loginPopupBtnTabsBg,
        gray3,
        warningColor,
        primaryText,
        depositConfirmBtn
    } = useSelector((state) => state.theme);

    const contentWrStyle = {
        // maxWidth: "calc(600px )",
        margin: "10px auto 50px",
    };

    const [usdtAmount, setUsdtAmount] = useState('');
    const [inrAmount, setInrAmount] = useState('');
    const [cashback, setCashback] = useState(0);
    const [activeTab, setActiveTab] = useState(null);

    const exchangeRate = 91.14;

    const handleUsdtChange = (e) => {
        const value = e.target.value.replace(/[^0-9.]/g, '');
        setUsdtAmount(value);
        if (value === '') {
            setInrAmount('');
            setCashback(0);
        } else {
            const inrValue = (parseFloat(value) * exchangeRate).toFixed(2);
            setInrAmount(isNaN(inrValue) ? '' : inrValue);
            updateCashback(inrValue);
        }
        setActiveTab(null); 
    };

    const handleInrChange = (e) => {
        const value = e.target.value.replace(/\D/g, '');
        setInrAmount(value);
        if (value === '') {
            setUsdtAmount('');
            setCashback(0);
        } else {
            const usdtValue = (parseFloat(value) / exchangeRate).toFixed(2);
            setUsdtAmount(isNaN(usdtValue) ? '' : usdtValue);
            updateCashback(value);
        }
        setActiveTab(null); 
    };

    const updateCashback = (value) => {
        const numericValue = parseFloat(value);
        if (!isNaN(numericValue)) {
            setCashback((numericValue * 0.02).toFixed(2));
        } else {
            setCashback(0);
        }
    };

    const handleTabClick = (value) => {
        setInrAmount(value);
        const usdtValue = (parseFloat(value) / exchangeRate).toFixed(2);
        setUsdtAmount(usdtValue);
        updateCashback(value);
        setActiveTab(value);  // Set active tab
    };

    const isAmountValid = inrAmount >= 500 && inrAmount <= 100000;
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
                        <Image src={tetherLogo} maxH="30px" h="110px" m="0 auto 28px"></Image>
                        <Box className='result_title_wr flexCenter' textAlign="center" w="100%">
                            <Box className='titleDivider' background="hsla(0,0%,100%,.1)" flexGrow="1" h="1px"></Box>
                        </Box>
                        <Box display="flex" justifyContent="space-between" alignItems="center" mt="25px">
                            <Box fontSize="19px" color={gray25} fontWeight="600">Enter deposit amount</Box>
                            <Box>
                                <Box fontSize="14px" color={yellowColor}><strong>2%</strong> Cashback</Box>
                                <Text>1 USDT = 91.14 INR</Text>
                            </Box>
                            
                        </Box>
                        <Box className='flexCenter' w="100%" gap="1px" minH="48px" mt="10px" borderRadius="8px" alignItems="stretch" overflow="hidden">
                            <Box className='flexCenter' bg={inputBg} w="100%">
                                <InputGroup>
                                    <Input className='usdtInput'
                                        placeholder='Enter USDT amount'
                                        fontWeight="700"
                                        height="48px"
                                        type="text"
                                        value={usdtAmount}
                                        onChange={handleUsdtChange}
                                        border="none"
                                        outline="none"
                                        boxShadow="none"
                                        borderRadius="8px"
                                    />
                                </InputGroup>
                                <Box className='flexCenter' w="20%" minW="112px" bg={loginPopupBtnTabsBg} color={gray3} h="100%">USDT</Box>
                            </Box>
                        </Box>
                        <Box className='switchBtn flexCenter' position="relative" mt="-8px">
                           <Box className='flexCenter' w="32px" h="32px" bg="rgb(18 25 39)" borderRadius="100%"> <Image src={switchIcon} ></Image></Box>
                        </Box>
                        <Box className='flexCenter' mt="-5px" w="100%" gap="1px" minH="48px"  borderRadius="8px" alignItems="stretch" overflow="hidden">
                            <Box className='flexCenter' bg={inputBg} w="100%">
                                <InputGroup>
                                    <Input className='inrInput'
                                        placeholder='Enter INR amount'
                                        fontWeight="700"
                                        height="48px"
                                        type="text"
                                        value={inrAmount}
                                        onChange={handleInrChange}
                                        border="none"
                                        outline="none"
                                        boxShadow="none"
                                        borderRadius="8px"
                                    />
                                </InputGroup>
                                <Box className='flexCenter' w="20%" minW="112px" bg={loginPopupBtnTabsBg} color={gray3} h="100%">INR</Box>
                            </Box>
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

export default Tether;
