import React, { useState, useRef, useEffect } from 'react';
import {
    Box,
    Flex,
    Grid,
    Heading,
    Image,
    Text,
    IconButton,
    Divider,
    Accordion,
    AccordionItem,
    AccordionButton,
    AccordionPanel,
    AccordionIcon,
    List,
    ListItem,
    ListIcon,
    UnorderedList,
    OrderedList,
} from '@chakra-ui/react';
import { useSelector } from "react-redux";
import Carousel from '../component/Carousel';
import Slider from 'react-slick';
import { RiPlayReverseFill, RiPlayFill } from 'react-icons/ri';
import PromotionPart from '../component/PromotionPart';
import live from '../assets/images/lobby/cards/live/live.png';
import logo from "../assets/images/logo.png";
import spades from '../assets/images/lobby/icon-spades.png';


// Top Choice
import TopChoices from '../assets/images/lobby/cards/top/TopChoices.png';
import T20 from '../assets/images/lobby/cards/top/T20-logo.svg';
import wicket from '../assets/images/lobby/cards/top/9wicket.png';
import aviator from '../assets/images/lobby/cards/top/aviator.png';
import liveCasino from '../assets/images/lobby/cards/top/liveCasino.png';
import luckySpin from '../assets/images/lobby/cards/top/luckySpin.png';
import bonus from '../assets/images/lobby/cards/top/bonus.png';
import deposit from '../assets/images/lobby/cards/top/deposit.png';
import jetx from '../assets/images/lobby/cards/top/jetx.png';

// Casino
import ezugiAndarBahar from '../assets/images/lobby/cards/casino/ezugiAndarBahar.jpg';
import evoRoulette from '../assets/images/lobby/cards/casino/evoRoulette.png';
import ezugi from '../assets/images/lobby/cards/casino/ezugi-logo.png';
import evo2 from '../assets/images/lobby/cards/casino/evo2-logo.png';
import LiveCasino from '../assets/images/lobby/cards/casino/LiveCasino-icon.png';


// Sports
import sportIcon from '../assets/images/lobby/cards/sport/sportIcon.png';
import cricket from '../assets/images/lobby/cards/sport/cricket.png';
import football from '../assets/images/lobby/cards/sport/football.png';
import tennis from '../assets/images/lobby/cards/sport/tennis.png';

// Mini Game
import hotMiniGame from '../assets/images/lobby/cards/mini-game/hot-mini-games.png';

// Table Game
import tableGameIcon from '../assets/images/lobby/cards/table-game/casino.png';


// Social
import sociallogo from '../assets/images/lobby/social/SocialNetworks.png';
import telegram from '../assets/images/lobby/social/telegram.png';
import whatsapp from '../assets/images/lobby/social/icon-whatsapp.svg';
import insta from '../assets/images/lobby/social/insta.png';
import fb from '../assets/images/lobby/social/fb.png';
import twitter from '../assets/images/lobby/social/twitter.png';

const CustomArrow = ({ direction, onClick }) => {
    const { primaryText } = useSelector((state) => state.theme);
    const Icon = direction === 'left' ? RiPlayReverseFill : RiPlayFill;
    return (
        <IconButton
            icon={<Icon color={primaryText} />}
            onClick={onClick}
            style={{ display: 'flex', zIndex: 2, justifyContent: "center", alignItems: "center" }}
            aria-label={`${direction === 'left' ? 'Previous' : 'Next'} Slide`}
        />
    );
};

const CustomArrowWrapper = (props) => {
    const { currentSlide, slideCount, ...arrowProps } = props;
    return (
        <Box className='nav_wr' position="absolute" bottom="30px" right="25px" display="flex" zIndex="2">
            <CustomArrow direction="left" {...arrowProps} />
            <Box mx="2" />
            <CustomArrow direction="right" {...arrowProps} />
        </Box>
    );
};

const Lobby = () => {
    const { sectionBg, gray30, caretColor, borderColor, primaryText, arrowBg, allBtn, logoLIineFooter, 
            telegramBg, whatsappBg, instaBg, fbBg, twitterBg, markerColor,
            scrollBarBg, scrollThumbBg, 
        } = useSelector((state) => state.theme);
    const { topChoiceBg, cardsShadow } = useSelector((state) => state.theme);
    const topChoices = [
        { title: `Men's T20\nWorld Cup`, icon: T20 },
        { title: `Cricket Exchange`, icon: wicket },
        { title: `Aviator`, icon: aviator },
        { title: `Live Casino`, icon: liveCasino },
        { title: `Lucky Spin`, icon: luckySpin },
        { title: `Bonus`, icon: bonus },
        { title: `Deposit`, icon: deposit },
        { title: `Jetx`, icon: jetx },
    ];

    const sports = [
        { title: `cricket`, icon: cricket },
        { title: `football`, icon: football },
        { title: `tennis`, icon: tennis },
        { title: `cricket`, icon: cricket },
        { title: `football`, icon: football },
        { title: `tennis`, icon: tennis },
        { title: `tennis`, icon: tennis },
        { title: `cricket`, icon: cricket },
        { title: `football`, icon: football },
        { title: `tennis`, icon: tennis },
        { title: `cricket`, icon: cricket },
        { title: `football`, icon: football },
        { title: `tennis`, icon: tennis },
    ];

    const topIconStyle = {
        width: "100%",
        maxWidth: "90px",
        height: "30px",
        objectFit: "contain",
    };

    const topCardStyle = {
        padding: "0 10px",
        transition: "transform .3s",
    };

    const casinoCardContent = [
        { title: "Andar Bahar", img: ezugiAndarBahar, logo: ezugi },
        { title: "Roulette", img: evoRoulette, logo: evo2 },
        { title: "Andar Bahar", img: ezugiAndarBahar, logo: ezugi },
        { title: "Roulette", img: evoRoulette, logo: evo2 },
        { title: "Andar Bahar", img: ezugiAndarBahar, logo: ezugi },
        { title: "Roulette", img: evoRoulette, logo: evo2 },
        { title: "Andar Bahar", img: ezugiAndarBahar, logo: ezugi },
        { title: "Roulette", img: evoRoulette, logo: evo2 },
        { title: "Andar Bahar", img: ezugiAndarBahar, logo: ezugi },
        { title: "Roulette", img: evoRoulette, logo: evo2 },
        { title: "Andar Bahar", img: ezugiAndarBahar, logo: ezugi },
        { title: "Roulette", img: evoRoulette, logo: evo2 },
    ];

    const [currentSlide, setCurrentSlide] = useState(0);
    const sliderRef = useRef(null);

    const SliderFn = async () => { /* Fetch data if needed */ };

    useEffect(() => {
        SliderFn();
    }, []);

    const settings = {
        infinite: true,
        variableWidth: true,
        speed: 1000,
        arrows: true,
        afterChange: (index) => setCurrentSlide(index),
        nextArrow: <CustomArrow direction="right" />,
        prevArrow: <CustomArrow direction="left" />,
        className: "slideSpacing",
    };

    const style = { borderRadius: '15px' };

    // Live Casino
    const casinoCardLogoStyle = {
        position: "absolute",
        bottom: "5px",
        left: "5px",
        height: "20%",
    }
    const casinoCardImageStyle = {
        width: "100%",
        height: "100%",
        transition: "transform .3s",
        objectFit: "cover",
    }
    const casinoCardsStyle = {
        position: "relative",
        width: "100%",
        height: "120px",
        borderRadius: "10px",
        overflow: "hidden",
        display: "flex",
        justifyContent: "center",
        alignItems: "center"
    }
    const casinoCardsShadowStyle = {
        position: 'absolute',
        top: "0",
        bottom: "0",
        left: "0",
        right: "0",
        background: cardsShadow,
    }

    // Social Media
    const socialIconStyle = {
        width: "100%",
        height: "100%",
        borderRadius: "8px",
        transition: "transform .3s",
    }
    const telegramStyle = {
        backgroundImage: telegramBg
    }
    const whatsappStyle = {
        backgroundImage: whatsappBg
    }
    const instaStyle = {
        backgroundImage: instaBg
    }
    const fbStyle = {
        backgroundImage: fbBg
    }
    const twitterStyle = {
        backgroundImage: twitterBg
    }

    // Footer Accordion 
    const footerAccordionStyle = {
        maxHeight: "35vh",
        paddingTop: "12px",
        overflow: "auto",
        borderTop: `1px solid ${borderColor}`
    }


    return (
        <Box className='lobby_page' marginTop="80px">
            <Box className='slider_promotions_part' display="flex" gap="22px" flexDirection={{ base: "column", md: "row" }}>
                <Box width={{ base: "100%", md: "74%" }}>
                    <Carousel />
                </Box>
                <Box width={{ base: "100%", md: "26%" }} marginTop="10px">
                    <PromotionPart />
                </Box>
            </Box>

            <Box className='live_section sectionTop_spacing'>
                <Box className='section_title_wr'>
                    <Box className='icon-wrapper live_icon_wr flexCenter'>
                        <Box className="light_wave"></Box>
                        <Box className="icon_live"></Box>
                    </Box>
                    <Heading as="h6" className='section_title'>Live</Heading>
                </Box>
                <Box className='cards' marginTop="10px">
                    <Flex justifyContent="space-between" flexDirection="row" overflowX="auto" gap="10px" css={{
                        '&::-webkit-scrollbar': { display: 'none' },
                        '-ms-overflow-style': 'none',
                        'scrollbar-width': 'none',
                    }}>
                        {Array.from({ length: 10 }).map((_, index) => (
                            <Box key={index} width="100%">
                                <Image src={live} minWidth="260px" />
                            </Box>
                        ))}
                    </Flex>
                </Box>
            </Box>

            <Box className='topChoices_section sectionTop_spacing'>
                <Box className='section_title_wr'>
                    <Box className='icon-wrapper live_icon_wr flexCenter icon_glow'>
                        <Image src={LiveCasino} />
                    </Box>
                    <Heading as="h6" className='section_title'>Top Choices</Heading>
                </Box>
                <Box className='cards' marginTop="10px">
                    <Grid overflowX="auto" gap="10px" css={{
                        '&::-webkit-scrollbar': { display: 'none' },
                        '-ms-overflow-style': 'none',
                        'scrollbar-width': 'none',
                        gridTemplateColumns: "repeat(4,1fr)",
                        gap: "12px",
                        '@media screen and (min-width:769px)': {
                            gridTemplateColumns: "repeat(8, minmax(10%, 1fr))",
                            gap: "17px",
                        }
                    }} paddingY="5px">
                        {topChoices.map((item, index) => (
                            <Flex flexDirection="column" className="topChoiceCards_wr flexCenter hoverAnimation" key={index} borderRadius="10px" height={{ base: "72px", md: "80px" }} bg={topChoiceBg}>
                                <Image src={item.icon} style={topIconStyle} />
                                <Text css={{
                                    '@media screen and (min-width:769px)': { padding: '0 15px', fontSize: "13px !important" }
                                }} lineHeight="1" marginTop="6px">{item.title}</Text>
                            </Flex>
                        ))}
                    </Grid>
                </Box>
            </Box>

            <Box className='casino_section sectionTop_spacing'>
                <Box className='section_title_wr' display="flex" justifyContent="space-between">
                    <Box className='headPart' display="flex">
                        <Box className='icon-wrapper live_icon_wr flexCenter icon_glow'>
                            <Image src={TopChoices} />
                        </Box>
                        <Heading as="h6" className='section_title'>Live Casino</Heading>
                    </Box>
                    <Box display="flex">
                        <Text marginRight="5px" color={allBtn} fontWeight="700">All</Text>
                        <RiPlayFill size={24} color={arrowBg} />
                    </Box>
                </Box>
                <Box className='cards' marginTop="10px">
                    <div style={{ padding: '0px' }} className="cardsSlider custom-carousel w-[100%] mt-0 relative">
                        <Slider ref={sliderRef} {...settings}>
                            {casinoCardContent.map((item, index) => (
                                <div key={index} className="w-[100%] relative" style={{ width: '190px' }}>
                                    <Box className='card_wr' margin="0 10px">
                                        <Box className="card_content" style={{ ...casinoCardsStyle }} css={{
                                            ':after': {
                                                position: "absolute",
                                                top: "0",
                                                bottom: "0",
                                                left: "0",
                                                right: "0",
                                                border: "2px solid hsla(0, 0%, 100%, .1)",
                                                borderRadius: "inherit",
                                                content: '""',
                                            }
                                        }}>
                                            <Image src={item.img} style={{ ...casinoCardImageStyle }}></Image>
                                            <Box className='card_shadow' style={{ ...casinoCardsShadowStyle }}></Box>
                                            <Image className='card_logo' src={item.logo} style={{ ...casinoCardLogoStyle }}></Image>
                                            <Box className='playBTn_wr'>
                                                <Text class="playBTn flexCenter">Play</Text>
                                            </Box>
                                        </Box>
                                        <Text className="card_title text-center" fontWeight="600" marginTop="5px">{item.title}</Text>
                                    </Box>
                                </div>
                            ))}
                        </Slider>
                    </div>
                </Box>
            </Box>

            <Box className='sports _section topChoices_section sectionTop_spacing'>
                <Box className='section_title_wr' display="flex" justifyContent="space-between">
                    <Box className='headPart' display="flex">
                        <Box className='icon-wrapper live_icon_wr flexCenter icon_glow'>
                            <Image src={sportIcon} />
                        </Box>
                        <Heading as="h6" className='section_title'>Sports</Heading>
                    </Box>
                    <Box display="flex">
                        <Text marginRight="5px" color={allBtn} fontWeight="700">All</Text>
                        <RiPlayFill size={24} color={arrowBg} />
                    </Box>
                </Box>
                <Box className='cards cardsScroll' marginTop="10px">
                    <Flex overflowX="auto" flexWrap="nowrap" gap="10px" css={{
                        '&::-webkit-scrollbar': { display: 'none' },
                        '-ms-overflow-style': 'none',
                        'scrollbar-width': 'none',
                        '@media screen and (min-width:769px)': {
                            gap: "17px",
                        }
                    }} paddingY="5px">
                        {sports.map((item, index) => (
                            <Flex flexDirection="column" minW={{ base: "90px", md: "144px" }} className="topChoiceCards_wr flexCenter hoverAnimation" key={index} borderRadius="10px" height={{ base: "72px", md: "80px" }} bg={topChoiceBg}>
                                <Image src={item.icon} style={topIconStyle} />
                                <Text css={{
                                    '@media screen and (min-width:769px)': { padding: '0 15px', fontSize: "13px !important" }
                                }} lineHeight="1" marginTop="6px">{item.title}</Text>
                            </Flex>
                        ))}
                    </Flex>
                </Box>
            </Box>

            <Box className='hot_miniGame_section casino_section sectionTop_spacing'>
                <Box className='section_title_wr' display="flex" justifyContent="space-between">
                    <Box className='headPart' display="flex">
                        <Box className='icon-wrapper live_icon_wr flexCenter icon_glow'>
                            <Image src={hotMiniGame} sizes={21} />
                        </Box>
                        <Heading as="h6" className='section_title'>Hot Mini Games</Heading>
                    </Box>
                    <Box display="flex">
                        <Text marginRight="5px" color={allBtn} fontWeight="700">All</Text>
                        <RiPlayFill size={24} color={arrowBg} />
                    </Box>
                </Box>
                <Box className='cards' marginTop="10px">
                    <div style={{ padding: '0px' }} className="cardsSlider custom-carousel w-[100%] mt-0 relative">
                        <Slider ref={sliderRef} {...settings}>
                            {casinoCardContent.map((item, index) => (
                                <div key={index} className="w-[100%] relative" style={{ width: '190px' }} >
                                    <Box className='card_wr' margin="0 10px">
                                        <Box className="card_content" style={{ ...casinoCardsStyle }} css={{
                                            ':after': {
                                                position: "absolute",
                                                top: "0",
                                                bottom: "0",
                                                left: "0",
                                                right: "0",
                                                border: "2px solid hsla(0, 0%, 100%, .1)",
                                                borderRadius: "inherit",
                                                content: '""',
                                            }
                                        }}>
                                            <Image src={item.img} style={{ ...casinoCardImageStyle }}></Image>
                                            <Box className='card_shadow' style={{ ...casinoCardsShadowStyle }}></Box>
                                            <Image className='card_logo' src={item.logo} style={{ ...casinoCardLogoStyle }}></Image>
                                            <Box className='playBTn_wr'>
                                                <Text class="playBTn flexCenter">Play</Text>
                                            </Box>
                                        </Box>
                                        <Text className="card_title text-center" fontWeight="600" marginTop="5px">{item.title}</Text>
                                    </Box>
                                </div>
                            ))}
                        </Slider>
                    </div>
                </Box>
            </Box>

            <Box className='table_Game_section casino_section sectionTop_spacing'>
                <Box className='section_title_wr' display="flex" justifyContent="space-between">
                    <Box className='headPart' display="flex">
                        <Box className='icon-wrapper live_icon_wr flexCenter icon_glow'>
                            <Image src={tableGameIcon} sizes={21} />
                        </Box>
                        <Heading as="h6" className='section_title'>Table Games</Heading>
                    </Box>
                    <Box display="flex">
                        <Text marginRight="5px" color={allBtn} fontWeight="700">All</Text>
                        <RiPlayFill size={24} color={arrowBg} />
                    </Box>
                </Box>
                <Box className='cards' marginTop="10px">
                    <div style={{ padding: '0px' }} className="cardsSlider custom-carousel w-[100%] mt-0 relative">
                        <Slider ref={sliderRef} {...settings}>
                            {casinoCardContent.map((item, index) => (
                                <div key={index} className="w-[100%] relative" style={{ width: '190px' }}>
                                    <Box className='card_wr' margin="0 10px">
                                        <Box className="card_content" style={{ ...casinoCardsStyle }} css={{
                                            ':after': {
                                                position: "absolute",
                                                top: "0",
                                                bottom: "0",
                                                left: "0",
                                                right: "0",
                                                border: "2px solid hsla(0, 0%, 100%, .1)",
                                                borderRadius: "inherit",
                                                content: '""',
                                            }
                                        }}>
                                            <Image src={item.img} style={{ ...casinoCardImageStyle }}></Image>
                                            <Box className='card_shadow' style={{ ...casinoCardsShadowStyle }}></Box>
                                            <Image className='card_logo' src={item.logo} style={{ ...casinoCardLogoStyle }}></Image>
                                            <Box className='playBTn_wr'>
                                                <Text class="playBTn flexCenter">Play</Text>
                                            </Box>
                                        </Box>
                                        <Text className="card_title text-center" fontWeight="600" marginTop="5px">{item.title}</Text>
                                    </Box>
                                </div>
                            ))}
                        </Slider>
                    </div>
                </Box>
            </Box>

            <Box className='footer_logo_line sectionTop_spacing' display="flex" justifyContent="center" alignItems="center">
                <Image height={{ base: "10px", xl: "10px" }} src={logo} alt="Logo" />
                <Box width="100%">
                    <Divider borderColor={logoLIineFooter} ></Divider>
                </Box>
            </Box>

            <Box className='social_section sectionTop_spacing'>
                <Box className='section_title_wr' display="flex" justifyContent="space-between">
                    <Box className='headPart' display="flex">
                        <Box className='icon-wrapper live_icon_wr flexCenter icon_glow'>
                            <Image src={sociallogo} sizes={21} />
                        </Box>
                        <Heading as="h6" className='section_title'>Social Networks</Heading>
                    </Box>
                </Box>
                <Flex className='social_Wr'
                    css={{
                        height: "34px",
                        marginTop: "7px",
                        gap: "14px",
                        '@media screen and (min-width:769px)': {
                            height: "48px",
                            marginTop: "9px",
                            width: "50%",
                        }
                    }}
                >
                    <Box className='social_icon flexCenter hoverAnimation' style={{ ...socialIconStyle, ...telegramStyle }}
                        css={{
                            '@media screen and (min-width:769px)': {
                                borderRadius: "10px"
                            }
                        }}>
                        <Image src={telegram} height="18px"
                            css={{
                                '@media screen and (min-width:769px)': {
                                    height: "25px"
                                }
                            }}></Image>
                    </Box>
                    <Box className='social_icon flexCenter hoverAnimation' style={{ ...socialIconStyle, ...whatsappStyle }}
                        css={{
                            '@media screen and (min-width:769px)': {
                                borderRadius: "10px"
                            }
                        }}>
                        <Image src={whatsapp} height="18px"
                            css={{
                                '@media screen and (min-width:769px)': {
                                    height: "25px"
                                }
                            }}></Image>
                    </Box>
                    <Box className='social_icon flexCenter hoverAnimation' style={{ ...socialIconStyle, ...instaStyle }}
                        css={{
                            '@media screen and (min-width:769px)': {
                                borderRadius: "10px"
                            }
                        }}>
                        <Image src={insta} height="18px"
                            css={{
                                '@media screen and (min-width:769px)': {
                                    height: "25px"
                                }
                            }}></Image>
                    </Box>
                    <Box className='social_icon flexCenter hoverAnimation' style={{ ...socialIconStyle, ...fbStyle }}
                        css={{
                            '@media screen and (min-width:769px)': {
                                borderRadius: "10px"
                            }
                        }}>
                        <Image src={fb} height="18px"
                            css={{
                                '@media screen and (min-width:769px)': {
                                    height: "25px"
                                }
                            }}></Image>
                    </Box>
                    <Box className='social_icon flexCenter hoverAnimation' style={{ ...socialIconStyle, ...twitterStyle }}
                        css={{
                            '@media screen and (min-width:769px)': {
                                borderRadius: "10px"
                            }
                        }}>
                        <Image src={twitter} height="18px"
                            css={{
                                '@media screen and (min-width:769px)': {
                                    height: "25px"
                                }
                            }}></Image>
                    </Box>
                </Flex>

            </Box>

            <Box className='sectionTop_spacing' >
                <Box style={{ backgroundColor: sectionBg }} padding="0 14px 0" borderRadius="8px">
                    <Accordion allowToggle>
                        <AccordionItem border="none">
                            <h2>
                                <AccordionButton paddingY="12px" paddingX="0">
                                    <Box flex="1" textAlign="left" style={{ color: primaryText, }} fontSize="14px" lineHeight="normal" fontWeight="600">
                                        <Box as="span">GUGOBET India Official Website |</Box>
                                        <Box as="span">Best Choice for Sports Betting and Online Casino</Box>
                                    </Box>
                                    <AccordionIcon color={caretColor} />
                                </AccordionButton>
                            </h2>
                            <AccordionPanel className='footerAccordion_panel' style={{ ...footerAccordionStyle }}
                                css={{
                                    paddingLeft:"0",
                                    
                                    '@media screen and (min-width:769px)': {
                                        maxHeight: "45vh",
                                    },
                                    '&::-webkit-scrollbar': {
                                        width: '5px',
                                    },
                                    '&::-webkit-scrollbar-track': {
                                        background: scrollBarBg,
                                    },
                                    '&::-webkit-scrollbar-thumb': {
                                        background: scrollThumbBg,
                                        borderRadius: '10px',
                                    },
                                }}>

                                <Text color={gray30}>When it comes to online betting platforms in India, GUGOBET is undoubtedly your best choice. With over 18 years of experience in the sports industry, pursuing a fair, transparent, and secure gambling experience for our players is what we’ve long been dedicated to. From IPL betting online to Andar Bahar, GUGOBET not only provides a wide range of betting options with competitive odds, but also thrilling real-time casino games. With GUGOBET sign-up process in minutes, you can start enjoying the fun of playing.</Text>
                                <Box className='content_wr'>
                                    <Box className="accordion_content_title">
                                        What Sets GUGOBET Apart?
                                    </Box>
                                    <Text>
                                        If you are searching for trustworthy online betting apps in India, choosing GUGOBET is opting for a premier online gaming experience.
                                    </Text>
                                    <List spacing={3}>
                                        <ListItem display="flex" gap="10px" >
                                            <Image src={spades} width="18px" />
                                            <Text>
                                                A rewarding platform offers 1000+ betting options and casino games with lucrative odds.
                                            </Text>
                                        </ListItem>
                                        <ListItem display="flex" gap="10px" >
                                            <Image src={spades} width="18px" />
                                            <Text>
                                                A secure place with multiple payment methods and fast deposit/withdrawal processes.
                                            </Text>
                                        </ListItem>
                                        <ListItem display="flex" gap="10px" >
                                            <Image src={spades} width="18px" />
                                            <Text>
                                                A considerate site provides support in 4 Indian languages, 24/7 customer service, and even accepts all currencies.
                                            </Text>
                                        </ListItem>
                                    </List>
                                    <Text>
                                        It is certainly a dream come true for bettors in India. There's no reason to select others, only GUGOBET platform is your best choice.
                                    </Text>
                                </Box>
                                <Box className='content_wr'>
                                    <Box className="accordion_content_title">
                                        GUGOBET App
                                    </Box>
                                    <Text>
                                        In addition to GUGOBET official website, the cricket betting app, compatible with both Android and iOS systems, is also a popular choice. The mobile app version covers the same features as our online betting site, with the added benefit of automatically adjusting its interface based on the mobile device. Additionally, the app provides faster loading speeds, enhancing the overall experience for players.
                                    </Text>
                                </Box>
                                <Box className='content_wr'>
                                    <Box className="accordion_content_title">
                                        How to Register
                                    </Box>
                                    <Text  color={gray30}>
                                        Whichever device you use, we provide simple and fast sign-up process, follow the steps below:
                                    </Text>
                                    <OrderedList sx={{
                                        marginLeft:"15px",
                                        "& > li::marker": {
                                            color: markerColor, 
                                            fontSize: "12px", 
                                            '@media screen and (min-width:769px)':{
                                                fontSize:"14px"
                                            }
                                        },
                                    }}>
                                        <ListItem>
                                            <Text color={gray30}>
                                                Open GUGOBET in desktop version or mobile app, press ”Registration” on the upper right corner.
                                            </Text>
                                        </ListItem>
                                        <ListItem>
                                            <Text color={gray30}>
                                                Enter your phone number and password.
                                            </Text>
                                        </ListItem>
                                        <ListItem>
                                            <Text color={gray30}>
                                                Confirm the information you typed are correct by ticking the box.
                                            </Text>
                                        </ListItem>
                                    </OrderedList>
                                    <Text color={gray30}>
                                        Once you finish the process, the system will automatically log you in, and you can start exploring the world of GUGOBET
                                    </Text>
                                </Box>
                            </AccordionPanel>
                        </AccordionItem>
                    </Accordion>
                </Box>
            </Box>

        </Box>
    );
};

export default Lobby;
