// import React from 'react';
import { useTranslation } from "react-i18next";
import { useSelector } from "react-redux";
import React, { useState } from 'react';
import { Link, Link as RouterLink, NavLink, useLocation } from 'react-router-dom';
import Login from "../page/Login";
import img1 from "../assets/images/logo.png";
import help from "../assets/images/help.png";
import refresh from "../assets/images/refresh.svg";
import shield from "../assets/images/shield-icon.png";


import {
    Menu,
    MenuButton,
    MenuList,
    MenuItem,
    MenuItemOption,
    MenuGroup,
    MenuOptionGroup,
    MenuDivider,
    Image,
    Box,
    Text,
    Divider
} from '@chakra-ui/react'
import LeftSidebar from "../modal/LeftSidebar";
import ChangeLanguage from "../modal/ChangeLanguage";
import LoginModal from "../modal/LoginModal";
import RegistrationModal from "../modal/RegistrationModal";


function LoginHeader({ isLoggedIn, setIsLoggedIn }) {
    const {
        primaryText,
        secondryText,
        activeBtn,
        lighterBlue,
        headerBg,
        primaryBg,
        refreshBg,
        WhiteBg,
    } = useSelector((state) => state.theme);

    const { t, i18n } = useTranslation();
    const location = useLocation();
    const isActive = (path) => {
        return location.pathname === path;
    };
    const headerBackground = {
        backgroundImage: headerBg,
    }
    const rankShield = {
        width: "30px",
        height: "26.25px",
        backgroundImage: `url(${shield})`,
        backgroundSize: "auto 100%",
        backgroundRepeat: " no-repeat",
        backgroundPositionX: "0",
    }
    const borderStyle = {
        // borderLeft: "1px solid rgba(191, 216, 255, .3)",
        // borderRight: "1px solid rgba(191, 216, 255, .3)",
        borderLeft: { base: "0", md: "1px solid rgba(191, 216, 255, .3)" },
        borderRight: { base: "0", md: "1px solid rgba(191, 216, 255, .3)" },
    }
    return (
        <>
            <Box style={{ position: 'fixed', top: '0', width: '100%', backgroundColor: primaryBg }} zIndex={{ base: "999", md: "999" }} >
                <Box style={{ ...headerBackground }} padding={{ base: "0", md: "0 15px" }} gap={{ base: "0", md: "10px" }} className='flex justify-between' flexDirection={{ base: "row", md: "row" }} borderBottom="1px solid rgba(102,161,255,.1)">
                    <Box className='flex justify-between items-center' gap="10px" css={{
                        '@media screen and (max-width:767px)': {
                            height: "50px",
                            borderBottom: {base:"none", md:"1px solid rgba(102, 161, 255, .1)"},
                            padding: "0 15px"
                        }
                    }}>
                        <Box className="">
                            <LeftSidebar></LeftSidebar>
                        </Box>
                        <Box className="flexCenter" gap="10px" flexGrow="1" alignItems="center">
                            <Box flexShrink="0" marginLeft="32px">
                                <Link as={RouterLink} to="/">
                                    <Image height={{ base: "18px", xl: "15px" }} src={img1} alt="Logo" />
                                </Link>
                            </Box>
                            <Box>
                                <ChangeLanguage></ChangeLanguage>
                            </Box>
                        </Box>
                    </Box>
                    <Box className="w-full flex justify-end items-center" height={{ base: "65px", xl: "65px" }} width={{ base: "100%", md: "409px" }} padding={{ base: "0 15px", md: "0" }}>
                        <Box px="14px" style={{ ...borderStyle }} borderLeftWidth={{base:"0",md:"1px"}} borderRightWidth={{base:"0",md:"1px"}} display={{base:"none", md:"flex"}}>
                            <Image src={help} width="30px"></Image>
                        </Box>
                        <Box className="flex justify-end items-center">
                            <Box className="flexCenter" style={{ ...borderStyle }} borderLeftWidth={{base:"0",md:"0"}} borderRightWidth={{base:"0",md:"1px"}} px={{base:"none", md:"14px"}}>
                                <Box className="flexCenter" bg={refreshBg} width="22px" height="22px" borderRadius="50%">
                                    <Image src={refresh}></Image>
                                </Box>
                                <Box className="flex justify-end items-center" px="7px">
                                    <Text fontSize="17px !important" fontWeight="600">0</Text>
                                    <Text fontSize="17px !important" ml="5px">₹</Text>
                                </Box>
                                <Box style={{ ...rankShield }}></Box>
                            </Box>
                            <Box className="hoverAnimation flexCenter" as={RouterLink} to="/deposit" display={{base:"none", md:"flex"}} w='100px' overflow="hidden" bg={refreshBg} height="29px" paddingRight="9px" borderRadius="8px" ml="14px">
                                <Box className="flexCenter" bg="rgba(0,71,107,.3)" w="38px" h="38px" borderRadius="100%" transform="translateX(-6px)" position="relative">
                                    <Box className="flexCenter" color={lighterBlue} w="19px" h="19px" borderRadius="100%" bg={WhiteBg} position="relative">
                                        ₹
                                        <Box className="deposit_plus_wr flexCenter" position="absolute" bg="#1b89c1" w="12px" h="12px" right="-4px" top="-5px" borderRadius="100%">
                                            <Box className="deposit_plus" w="8px" h="8px" borderRadius="100%" bg={WhiteBg}
                                                css={{
                                                    position: 'relative',
                                                    '&::before': {
                                                        content: '""',
                                                        position: 'absolute',
                                                        width: "1px",
                                                        background: "#1b89c1",
                                                        borderRadius: "2px",
                                                        transform: "translateX(-50%)",
                                                        top: "1px",
                                                        bottom: "1px",
                                                        left: "50%",
                                                    },
                                                    '&::after': {
                                                        content: '""',
                                                        position: 'absolute',
                                                        height: "1px",
                                                        top: "50%",
                                                        right: "1px",
                                                        left: "1px",
                                                        background: "#1b89c1",
                                                        borderRadius: "2px",
                                                        ransform: "translateY(-50%)",
                                                    },
                                                }}
                                            ></Box>
                                        </Box>
                                    </Box>
                                </Box>

                                <Text fontWeight="600" >
                                        Deposit
                                </Text>
                            </Box>
                        </Box>
                    </Box>
                </Box>
            </Box>
        </>
    )
}


export default LoginHeader