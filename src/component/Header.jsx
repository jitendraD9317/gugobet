// import React from 'react';
import { RiHome4Line } from "react-icons/ri";
import { MdOutlineSportsSoccer } from "react-icons/md";
import { MdCasino } from "react-icons/md";
import { IoRocketOutline } from "react-icons/io5";
import { TbBrandAppleArcade } from "react-icons/tb";
import { IoGiftOutline } from "react-icons/io5";
import { LiaCrownSolid } from "react-icons/lia";
import { CgGames } from "react-icons/cg";
import { AiOutlineAim } from "react-icons/ai";
import { useTranslation } from "react-i18next";
import { useSelector } from "react-redux";
import React, { useState } from 'react';
import {  Link, Link as RouterLink , NavLink, useLocation } from 'react-router-dom';
import Login from "../page/Login";
import img1 from "../assets/images/logo.png";
import { Button } from '@chakra-ui/react';

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
    Box
} from '@chakra-ui/react'
import LeftSidebar from "../modal/LeftSidebar";
import ChangeLanguage from "../modal/ChangeLanguage";
import LoginModal from "../modal/LoginModal";
import RegistrationModal from "../modal/RegistrationModal";


function Header({ isLoggedIn, setIsLoggedIn }) {
    const {
        primaryText,
        secondryText,
        activeBtn,
        grayBtn,
        headerBg,
        primaryBg,
    } = useSelector((state) => state.theme);

    const { t, i18n } = useTranslation();
    const location = useLocation();
    const isActive = (path) => {
        return location.pathname === path;
    };
    const headerBackground = {
        backgroundImage: headerBg,
    }
    return (
        <>
            <Box style={{ position: 'fixed', top: '0', width: '100%', backgroundColor: primaryBg }} zIndex={{base:"999", md:"999"}} >
                <Box style={{ ...headerBackground }} padding={{base:"0", md:"0 15px"}} gap={{base:"0", md:"10px"}} className='flex justify-between' flexDirection={{base:"column", md:"row"}} borderBottom="1px solid rgba(102,161,255,.1)">
                    <Box className='flex justify-between items-center' gap="10px" css={{
                        '@media screen and (max-width:767px)':{
                            height:"50px",
                            borderBottom:"1px solid rgba(102, 161, 255, .1)",
                            padding:"0 15px"
                        }
                    }}>
                        <Box className="">
                            <LeftSidebar></LeftSidebar>
                        </Box>
                        <Box display="flex" gap="10px" flexGrow="1" alignItems="center">
                            <Box>
                               <Link as={RouterLink} to="/">
                                <Image height={{ base: "18px", xl: "15px" }} src={img1} alt="Logo" />
                               </Link>
                            </Box>
                            <Box>
                                <ChangeLanguage></ChangeLanguage>
                            </Box>
                        </Box>
                    </Box>
                    <Box className="w-full flex justify-end items-center" height={{ base: "65px", xl: "65px" }} width={{base:"100%", md:"409px"}} padding={{base:"0 15px", md:"0"}}>
                        <LoginModal></LoginModal>
                       <RegistrationModal></RegistrationModal>
                    </Box>
                </Box>
            </Box>
        </>
    )
}


export default Header