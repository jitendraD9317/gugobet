import {
    Box,
    Text,
    Heading,
    Image,
    IconButton,
    FormControl,
    FormLabel,
    Input,
    Stack,
    useColorModeValue,
    Flex,
    Button
} from '@chakra-ui/react'
import { RiArrowLeftSLine } from "react-icons/ri";
import bankIcon from "../assets/images/bankinfo/icon-bank.svg"
import { TbCheck } from "react-icons/tb";

import React, { useState, useRef, useEffect } from 'react';
import { useSelector } from "react-redux";
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { RiPlayReverseFill, RiPlayFill } from 'react-icons/ri';
import { MdOutlineKeyboardArrowLeft, MdOutlineKeyboardArrowRight } from "react-icons/md";
import slide1 from '../assets/images/bankinfo/bank-card.png';
import slide2 from '../assets/images/bankinfo/bank-card.png';
import slide3 from '../assets/images/bankinfo/bank-card.png';
import slide4 from '../assets/images/bankinfo/bank-card.png';

import checkbox from '../assets/images/withdraw/checkbox.svg';
import reload from '../assets/images/reload.svg';
import bell from '../assets/images/bell.png';


const ArrowButton = ({ onClick, direction }) => {
    const { primaryText } = useSelector((state) => state.theme);
    const icon = direction === 'prev' ? < MdOutlineKeyboardArrowLeft color={primaryText} /> : <MdOutlineKeyboardArrowRight color={primaryText} />;
    return (
        <IconButton
            icon={icon}
            onClick={onClick}
            style={{ display: 'flex', zIndex: 2, justifyContent: "center", alignItems: "center" }}
            aria-label={direction === 'prev' ? 'Previous Slide' : 'Next Slide'}
        />
    );
};

function BankAdd() {
    const { 
        primaryBg, 
        bellIconBg, 
        loginBtnPopup, 
        promotionCardBg, 
        changePassBg, 
        bankinfoBorder, 
        bankinfoShadow, 
        bankDetailsInputBg, 
        primaryText, 
        bankDetailsText
     } = useSelector((state) => state.theme);

    const inputBg = useColorModeValue(bankDetailsInputBg);
    const inputTextColor = useColorModeValue(primaryText);

    const contentWrStyle = {
        // maxWidth:{ base: "100%", md: "400px" },
        margin: "10px auto 50px",
    };
    const bankInfo = {
        border: `1px solid ${bankinfoBorder}`,
        boxShadow: bankinfoShadow,
        backgroundImage: changePassBg,
        height: '48px',
        borderRadius: "8px",
        marginTop: "27px",
        position: "relative"
    }
    const bankCheckBox = {
        position: "absolute",
        bottom: "5px",
        right: "5px",
        width: "3px",
        height: "8px",
        zIndex: "1",
        borderBottom: "2px solid #fff",
        borderRight: "2px solid #fff",
        transform: "rotate(45deg)",
    }


    const images = [slide1, slide2, slide3, slide4];
    const sliderRef = useRef(null);
    const [currentSlide, setCurrentSlide] = useState(0);
    useEffect(() => {
        const fetchSliderData = async () => {
            // Fetch slider data here
        };
        fetchSliderData();
    }, []);

    const settings = {
        infinite: true,
        slidesToShow: 1,
        speed: 1000,
        autoplay: true,
        autoplaySpeed: 5000,
        dots: true,
        arrows: true,
        afterChange: setCurrentSlide,
        nextArrow: <ArrowButton direction="next" />,
        prevArrow: <ArrowButton direction="prev" />,
    };
    const inputStyle = {
        height: "48px",
        BsBorderRadius: "8px",
        padding: "10px 15px",
        border: "none"
    }
    return (
        <Box className="bankInfo_page main_pageBody homePageGrid_spacing">
            <Box position="sticky" top="65px" zIndex="99" bg={primaryBg}>
                <Box height="40px" position="relative">
                    <Box display="flex" alignItems="center" padding={{ base: "0 27px 0 4px", md: "0 27px" }} height="100%">
                        <RiArrowLeftSLine />
                        <Text>Bank Info</Text>
                    </Box>
                    <Box css={{
                        position: "absolute",
                        top: "7px",
                        bottom: "0",
                        left: "50%",
                        transform: " translateX(-50%)",
                        height: "100%",
                    }}>
                        {/* <Heading as="h5" fontSize={{ base: "18px", md: "20px" }} >Withdraw</Heading> */}
                    </Box>
                </Box>
            </Box>
            <Box className='main_content' maxWidth={{ base: "100%", md: "400px" }} style={{ ...contentWrStyle }} >
                <Box className='bonusRecordTabs' bg={promotionCardBg} mb="20px" p="27px 25px 40px" borderRadius="10px">
                    <Box className='titleLine' display="flex" position="relative" gap="16px" alignItems="start">
                        <Box className='flexCenter' borderRadius="50%" w="34px" h="34px" bg={bellIconBg} flexShrink="0">
                            <Image src={bell} w="18px" h="17px"></Image>
                        </Box>
                        <Box display="flex" flexDirection="column">
                            <Text >Bank Account, Birthday, Email can't be changed after creating! Please enter correctly to get your withdrawal.</Text>
                        </Box>
                    </Box>
                    <Box h="1px" bg="hsla(0,0%,100%,.1)" m="15px 0 20px" w="100%"></Box>
                    <Box className='flexCenter' border="1px solid #42536b" h="48px" borderRadius="12px" >
                        <Image src={bankIcon} maxW="50px" h="22px"></Image>
                        <Text ml="7px">Bank</Text>
                        <Box style={{ ...bankCheckBox }} />
                    </Box>
                    <Box m="24px auto 31px">
                        <FormControl id="ifsc">
                            <FormLabel color={bankDetailsText} mb="5px" fontWeight="600" >IFSC</FormLabel>
                            <Box position="relative">
                                <Input
                                    type="text"
                                    bg={bankDetailsInputBg}
                                    style={{ ...inputStyle }}
                                    color={inputTextColor}
                                    minH="50px"
                                />
                            </Box>
                        </FormControl>
                        <Box h="1px" bg="hsla(0,0%,100%,.1)" m="31px 0 22px" w="100%"></Box>
                        <FormControl id="name" mb="13px">
                            <FormLabel color={bankDetailsText} mb="5px" fontWeight="600" >Account Holder Name</FormLabel>
                            <Box position="relative">
                                <Input
                                    type="text"
                                    bg={bankDetailsInputBg}
                                    style={{ ...inputStyle }}
                                    color={inputTextColor}
                                    minH="50px"
                                />
                            </Box>
                        </FormControl>
                        <FormControl id="accountNum" mb="13px">
                            <FormLabel color={bankDetailsText} mb="5px" fontWeight="600" >Account Number</FormLabel>
                            <Box position="relative">
                                <Input
                                    type="text"
                                    bg={bankDetailsInputBg}
                                    style={{ ...inputStyle }}
                                    color={inputTextColor}
                                    minH="50px"
                                />
                            </Box>
                        </FormControl>
                        <FormControl id="accountNum" mb="13px">
                            <FormLabel color={bankDetailsText} mb="5px" fontWeight="600" >Email</FormLabel>
                            <Box position="relative">
                                <Input
                                    type="email"
                                    bg={bankDetailsInputBg}
                                    style={{ ...inputStyle }}
                                    color={inputTextColor}
                                    minH="50px"
                                />
                            </Box>
                        </FormControl>
                        <FormControl id="birthday">
                            <FormLabel color={bankDetailsText} mb="5px" fontWeight="600">Birthday</FormLabel>
                            <Input
                                type="date"
                                placeholder="Birthday"
                                bg={inputBg}
                                style={{ ...inputStyle }}
                                color={primaryText}
                                className="custom-date-input"
                            />
                        </FormControl>

                        <Button bg={loginBtnPopup} color={primaryText} w="100%" _hover="none" h="54px" borderRadius="12px" mt="31px">Confirm</Button>
                    </Box>
                </Box>

            </Box >
        </Box >
    );
}

export default BankAdd;
