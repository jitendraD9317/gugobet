import React, { useState, useRef, useEffect } from 'react';
import { useSelector } from "react-redux";
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { Box, Image, Text, Heading } from '@chakra-ui/react';
import t20 from '../assets/images/lobby/promotion/t20-invite.png'
import bonusImg from '../assets/images/lobby/promotion/welcome-bonus.png'
import checkindaily from '../assets/images/lobby/promotion/checkindaily.png'
import lightBg from '../assets/images/lobby/promotion/light-bg.png'

const PromotionPart = () => {

    const {
        textShadowCss,
        inviteBg,
        bonusBg,
        dailyEventBg,
    } = useSelector((state) => state.theme);
    const imgStyle = {
        position: "absolute",
        top: "-11px",
        right: "0",
        height: "100%"
    }
    const commonTextStyle = {
        lineHeight: "1",
        position: "relative",
        zIndex: "1",
        textShadow: "1px 1px 1px rgba(0, 0, 0, .5)",
    }
    const invite = {
        position: 'relative',
        background: inviteBg,

    }
    const bonus = {
        position: 'relative',
        background: bonusBg,

    }
    const dailyEvent = {
        position: 'relative',
        background: dailyEventBg,

    }
    const inviteAfter = {
        content: '""',
        position: 'absolute',
        top: 0,
        right: 0,
        width: '100%',
        height: '100%',
        borderRadius: '8px',
        backgroundImage: lightBg,
        backgroundRepeat: 'no-repeat',
        backgroundSize: '100% auto',
    }

    return (
        <Box style={{ padding: '0px' }} className="promotion_right" height="100%">
            <Box className="fixed_promotion flexFull" display="flex" flexDirection="column" gap="10px" height="100%">
                <Box className='fixed_promotion_button' display="flex" flexDirection={{base:"row", md:"column"}} gap="10px" height="50%">
                    <Box className='inviteBox hoverAnimation' position="relative" flexGrow="1">
                        <Image className='button__image' src={t20} zIndex={1} style={{ ...imgStyle }} top={{base:"-8px !important", md:"-11px"}}></Image>
                        <Box className='content_wr invite' style={{ ...invite }} _after={inviteAfter}>
                            <Box className="content">
                                <Heading as="h6" fontSize="22px" className='promotion_title' style={{ ...commonTextStyle }}>T20 Invite Friends</Heading>
                                <Text fontSize="14px" className='promotion_text' style={{ ...commonTextStyle, paddingTop: "5px" }}>Extra ₹50 Bonus!</Text>
                            </Box>
                        </Box>
                    </Box>
                    <Box className='inviteBox hoverAnimation' position="relative" flexGrow="1">
                        <Image className='button__image' src={bonusImg} zIndex={1} style={{ ...imgStyle }} top={{base:"-8px !important", md:"-11px"}}></Image>
                        <Box className='content_wr bonus' style={{ ...bonus }}>
                            <Box className="content">
                                <Heading as="h6" fontSize="22px" className='promotion_title' style={{ ...commonTextStyle }}>Welcome Bonus</Heading>
                                <Text fontSize="14px" className='promotion_text' style={{ ...commonTextStyle, paddingTop: "5px" }}>1st Deposit +100%</Text>
                            </Box>
                        </Box>
                    </Box>
                </Box>
                <Box className='daily_eventBox hoverAnimation' position="relative" height="50%">
                        <Image className='button__image' src={checkindaily} zIndex={1} style={{ ...imgStyle }} top={{base:"-8px", md:"0"}}></Image>
                        <Box className='content_wr daily_event' style={{ ...dailyEvent }} height={{base:"52px", md:"100%"}} borderRadius="10px" overflow="hidden">
                            <Box className="content" display="flex" justifyContent="center" height="100%" paddingLeft="12px" flexDirection="column">
                                <Box className='dailybg_wr'></Box>
                                <Heading as="h6" fontSize="22px" className='promotion_title ' style={{ ...commonTextStyle }}>Daily Check-in Bonus</Heading>
                                <Text fontSize="14px" className='promotion_text' style={{ ...commonTextStyle, paddingTop: "5px" }}>Login to get free cash everyday</Text>
                            </Box>
                        </Box>
                    </Box>
            </Box>
        </Box>
    );
};

export default PromotionPart;
