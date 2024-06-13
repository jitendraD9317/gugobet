import { Box, Text, Heading, Image, IconButton, TabPanels, Tab, TabPanel, border, position } from '@chakra-ui/react'
import { RiArrowLeftSLine } from "react-icons/ri";
import bankIcon from "../assets/images/bankinfo/icon-bank.svg"
import { TbCheck } from "react-icons/tb";
import { Link, Link as RouterLink } from 'react-router-dom';

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

function Withdraw() {
    const { primaryBg, yellowColor, gray25, promotionCardBg, changePassBg, bankinfoBorder, bankinfoShadow, primaryText } = useSelector((state) => state.theme);

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
    const style = {
        borderRadius: '15px',
    };
    return (
        <Box className="bankInfo_page main_pageBody homePageGrid_spacing">
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
                        <Heading as="h5" fontSize={{ base: "18px", md: "20px" }} >Withdraw</Heading>
                    </Box>
                </Box>
            </Box>
            <Box className='main_content' maxWidth={{ base: "100%", md: "474px" }} style={{ ...contentWrStyle }} >
            <Box className='bonusRecordTabs' bg={promotionCardBg} mb="20px" p="27px 25px 40px" borderRadius="10px">
                    <Box className='titleLine' display="flex" position="relative" gap="16px" alignItems="center">
                        <Image src={checkbox} boxSize="33px"></Image>
                       <Box display="flex" flexDirection="column">
                        <Text fontWeight="700">You still need to play <Box as="span" color={yellowColor}>0</Box></Text>
                        <Text fontWeight="700">More valid bet to apply withdraw</Text>
                       </Box>
                    </Box>
                    <Box h="1px" bg="hsla(0,0%,100%,.1)" m="20px 0 15px" w="100%"></Box>
                    <Box className='flexCenter' >
                       <Box fontSize={{base:"15px", md:"16px"}} color={gray25}>Withdrawable balance</Box>
                        <Box fontSize={{base:"24px", md:"32px"}} fontWeight="700" width="100%" textAlign="right" pr="14px" flexGrow="1">₹0</Box>
                        <Box w="20px" h="20px" flexShrink="0">
                            <Image src={reload} w="20px" h="20px"></Image>
                        </Box>
                    </Box>
                </Box>
                <Box className='bonusRecordTabs' bg={promotionCardBg} p="27px 25px 40px" borderRadius="10px">
                    <Heading className='titleLine'  paddingLeft="20px" position="relative" _before={{
                        content: "''",
                        position: "absolute",
                        top: "0",
                        left: "0",
                        width: "6px",
                        height: "100%",
                        borderRadius: "212px",
                        backgroundColor: "#145ec7",
                    }}>
                       <Box display="flex" flexDirection="column">
                       <Box as="sapn" fontSize="20px">Step 1: Select Receiving Account</Box>
                       <Box as="sapn" fontSize="12px" mt="4px" display="inline-block">Please double-check your receiving account details.</Box>
                       </Box>
                    </Heading>
                    <Box as={RouterLink} to="/add-bank" className='flexCenter' style={{ ...bankInfo }}
                        _after={{
                            content: "''",
                            position: "absolute",
                            bottom: "0",
                            right: "0",
                            borderWidth: "15px",
                            borderStyle: "solid",
                            borderColor: "transparent #1a9ad9 #1a9ad9 transparent",
                            borderRadius: "0 0 8px 0",
                        }}
                    >
                        <Image src={bankIcon} maxW="50px" h="22px"></Image>
                        <Text ml="7px">Bank</Text>
                        <Box style={{ ...bankCheckBox }} />
                    </Box>
                    <Box padding="0" className="homeSlider custom-carousel w-[100%] mt-0 relative">
                        <Box mt="21px">
                            <Slider ref={sliderRef} {...settings}>
                                {images.map((item, index) => (
                                    <Box key={index} className="w-[100%] relative" as={RouterLink} to="/add-bank">
                                        <img src={item} className="w-[100%]" alt="" style={style} />
                                    </Box>
                                ))}
                            </Slider>
                        </Box>
                    </Box>
                </Box>
            </Box >
        </Box >
    );
}

export default Withdraw;
