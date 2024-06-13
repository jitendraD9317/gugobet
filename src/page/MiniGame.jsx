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
    HStack,
    Button,
} from '@chakra-ui/react';
import { useSelector } from "react-redux";
import Carousel from '../component/Carousel';
import Slider from 'react-slick';
import { RiPlayReverseFill, RiPlayFill } from 'react-icons/ri';
import PromotionPart from '../component/PromotionPart';
import live from '../assets/images/lobby/cards/live/live.png';
import logo from "../assets/images/logo.png";
import spades from '../assets/images/lobby/icon-spades.png';

import sportMenuIcon from '../assets/images/sport/sport-menu.png';
import { FaAngleLeft } from "react-icons/fa6";
import { FaAngleRight } from "react-icons/fa6";
const itemsPerPage = 20; // Number of items to show per page

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

// Provider
import providerIcon from '../assets/images/casino/provider/provider.svg';
import evolution from '../assets/images/casino/provider/evolution.png';
import ezugiIcon from '../assets/images/casino/provider/ezugi.png';
import sexy from '../assets/images/casino/provider/sexy.png';

// cricket
import ninewCricket from '../assets/images/sport/cricket/ninewCricket.png';
import sabaVirtualCricket from '../assets/images/sport/cricket/sabaVirtualCricket.png';
import sabaSportbookCricket from '../assets/images/sport/cricket/sabaSportbookCricket.jpg';
import imCricket from '../assets/images/sport/cricket/imCricket.jpg';
import digitainCricket from '../assets/images/sport/cricket/digitainCricket.jpg';

// Football
import ninewExchangeFootball from '../assets/images/sport/football/ninewExchangeFootball-min.jpg';

// Tennis
import ninewExchangeTennis from '../assets/images/sport/tennis/ninewExchangeTennis.jpg';

// Tennis
import ninewExchangebasketball from '../assets/images/sport/basketball/digitainbasketball.jpg';

// Tennis
import digitainBadminton from '../assets/images/sport/badminton/digitainBadminton.jpg';

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

const MiniGame = () => {
    const { sectionBg, gray30, caretColor, borderColor, primaryText, arrowBg, allBtn, logoLIineFooter,
        telegramBg, whatsappBg, instaBg, fbBg, twitterBg, markerColor, providerBg,
        scrollBarBg, scrollThumbBg, sportTopDivider, paginationBtnBgActive, paginationBtnBgInActive
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

    const cricketCardImg = [
        { title: "Exchange Cricket", img: ninewCricket, logo: ezugi },
        { title: "Virtual Cricket", img: sabaVirtualCricket, logo: evo2 },
        { title: "Sportsbook Cricket", img: sabaSportbookCricket, logo: ezugi },
        { title: "IM Cricket", img: imCricket, logo: evo2 },
        { title: "DIGITAIN Cricket", img: digitainCricket, logo: ezugi },
    ];
    const footballCardImg = [
        { title: "Exchange Football", img: ninewExchangeFootball, logo: ezugi },
        { title: "Exchange Football", img: ninewExchangeFootball, logo: ezugi },
        { title: "Exchange Football", img: ninewExchangeFootball, logo: ezugi },
        { title: "Exchange Football", img: ninewExchangeFootball, logo: ezugi },
        { title: "Exchange Football", img: ninewExchangeFootball, logo: ezugi },
        { title: "Exchange Football", img: ninewExchangeFootball, logo: ezugi },
    ];
    const otherGameCardImg = [
        { title: "Exchange Football", img: ninewExchangeFootball, logo: ezugi },
        { title: "Exchange Football", img: ninewExchangeFootball, logo: ezugi },
        { title: "Exchange Football", img: ninewExchangeFootball, logo: ezugi },
        { title: "Exchange Football", img: ninewExchangeFootball, logo: ezugi },
        { title: "Exchange Football", img: ninewExchangeFootball, logo: ezugi },
        { title: "Exchange Football", img: ninewExchangeFootball, logo: ezugi },
        { title: "Exchange Football", img: ninewExchangeFootball, logo: ezugi },
        { title: "Exchange Football", img: ninewExchangeFootball, logo: ezugi },
        { title: "Exchange Football", img: ninewExchangeFootball, logo: ezugi },
        { title: "Exchange Football", img: ninewExchangeFootball, logo: ezugi },
        { title: "Exchange Football", img: ninewExchangeFootball, logo: ezugi },
        { title: "Exchange Football", img: ninewExchangeFootball, logo: ezugi },
        { title: "Exchange Football", img: ninewExchangeFootball, logo: ezugi },
        { title: "Exchange Football", img: ninewExchangeFootball, logo: ezugi },
        { title: "Exchange Football", img: ninewExchangeFootball, logo: ezugi },
        { title: "Exchange Football", img: ninewExchangeFootball, logo: ezugi },
        { title: "Exchange Football", img: ninewExchangeFootball, logo: ezugi },
        { title: "Exchange Football", img: ninewExchangeFootball, logo: ezugi },
        { title: "Exchange Football", img: ninewExchangeFootball, logo: ezugi },
        { title: "Exchange Football", img: ninewExchangeFootball, logo: ezugi },
        { title: "Exchange Football", img: ninewExchangeFootball, logo: ezugi },
        { title: "Exchange Football", img: ninewExchangeFootball, logo: ezugi },
        { title: "Exchange Football", img: ninewExchangeFootball, logo: ezugi },
        { title: "Exchange Football", img: ninewExchangeFootball, logo: ezugi },
        { title: "Exchange Football", img: ninewExchangeFootball, logo: ezugi },
        { title: "Exchange Football", img: ninewExchangeFootball, logo: ezugi },
        { title: "Exchange Football", img: ninewExchangeFootball, logo: ezugi },
        { title: "Exchange Football", img: ninewExchangeFootball, logo: ezugi },
        { title: "Exchange Football", img: ninewExchangeFootball, logo: ezugi },
    ];
    const tennisCardImg = [
        { title: "Exchange Tennis", img: ninewExchangeTennis, logo: ezugi },
        { title: "Exchange Tennis", img: ninewExchangeTennis, logo: ezugi },
        { title: "Exchange Tennis", img: ninewExchangeTennis, logo: ezugi },
        { title: "Exchange Tennis", img: ninewExchangeTennis, logo: ezugi },
    ];

    const basketballCardImg = [
        { title: "Exchange Basketball", img: ninewExchangebasketball, logo: ezugi },
        { title: "Exchange Basketball", img: ninewExchangebasketball, logo: ezugi },
        { title: "Exchange Basketball", img: ninewExchangebasketball, logo: ezugi },
    ];

    const badmintonCardImg = [
        { title: "DIGITAIN Badminton", img: digitainBadminton, logo: ezugi },
        { title: "DIGITAIN Badminton", img: digitainBadminton, logo: ezugi },
        { title: "DIGITAIN Badminton", img: digitainBadminton, logo: ezugi },
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

    const SportTopDividerStyle = {
        width: "100%",
        height: "15px",
        margin: "5px 0",
        backgroundImage: sportTopDivider,
        backgroundSize: "5px 5px",
    }
    const SportTop = {
        backgroundImage: `url(${sportMenuIcon})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "100% auto",
        backgroundPositionY: "65.38462%",
    }

    const providerStyle = {
        padding: "5px 7px",
        borderRadius: "4px",
        backgroundColor: providerBg,
        transition: "background-color .3s",
        '@media screen and (minWidth:1024px)': {
            padding: "8px 10px",
        }
    }

    const [currentPage, setCurrentPage] = useState(1);

    const totalPages = Math.ceil(otherGameCardImg.length / itemsPerPage);

    const handlePrevious = () => {
        if (currentPage > 1) {
            setCurrentPage(currentPage - 1);
        }
    };

    const handleNext = () => {
        if (currentPage < totalPages) {
            setCurrentPage(currentPage + 1);
        }
    };

    const handlePageClick = (pageNumber) => {
        setCurrentPage(pageNumber);
    };

    // Calculate the indices of the items to show for the current page
    const startIdx = (currentPage - 1) * itemsPerPage;
    const endIdx = startIdx + itemsPerPage;
    const currentItems = otherGameCardImg.slice(startIdx, endIdx);

    return (
        <Box className='sport_page' marginTop="80px">
            <Box className='slider_promotions_part' display="flex" gap="22px" flexDirection={{ base: "column", md: "row" }}>
                <Box width={{ base: "100%", md: "74%" }}>
                    <Carousel />
                </Box>
                <Box width={{ base: "100%", md: "26%" }} marginTop="10px">
                    <PromotionPart />
                </Box>
            </Box>
            <Box className='sportTop'>
                <Box className='section_title_wr'>
                    <Box className='icon-wrapper live_icon_wr flexCenter icon_glow' style={{ ...SportTop, width: "30px", height: "30px" }}>
                    </Box>
                    <Heading as="h6" className='section_title section_title_White' color={primaryText} >Mini Games</Heading>
                </Box>
                <Box className='sportDivider sportTop_icon_wr flexCenter'>
                    <Box className="icon" style={{ ...SportTopDividerStyle }}></Box>
                </Box>
            </Box>

            <Box className='provider'>
                <Box className='section_title_wr'>
                    <Box className='icon-wrapper live_icon_wr flexCenter'>
                        <Image src={providerIcon} />
                    </Box>
                    <Heading as="h6" className='section_title section_title_silver' color={primaryText} >Providers</Heading>
                </Box>
                <Box marginTop="10px">
                    <Flex gap="5px">
                        <Flex className="icon" gap="5px" alignItems="center" justifyContent="center" style={{ ...providerStyle }}>
                            <Image src={evolution} boxSize="19px"></Image>
                            <Text>Evolution</Text>
                        </Flex>
                        <Flex className="icon" gap="5px" alignItems="center" justifyContent="center" style={{ ...providerStyle }}>
                            <Image src={ezugiIcon} boxSize="19px"></Image>
                            <Text>Ezugi</Text>
                        </Flex>
                        <Flex className="icon" gap="5px" alignItems="center" justifyContent="center" style={{ ...providerStyle }}>
                            <Image src={sexy} boxSize="19px"></Image>
                            <Text>sexy</Text>
                        </Flex>
                    </Flex>
                </Box>
            </Box>

            <Box className='hot sectionTop_spacing'>
                <Box className='section_title_wr' display="flex" justifyContent="space-between">
                    <Box className='headPart' display="flex">
                        <Heading as="h6" className='section_title section_title_darkGray'>Hot</Heading>
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

            <Box className='new_games sectionTop_spacing'>
                <Box className='section_title_wr' display="flex" justifyContent="space-between">
                    <Box className='headPart' display="flex">
                        <Heading as="h6" className='section_title section_title_darkGray'>New Games</Heading>
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

            <Box className='keno sectionTop_spacing'>
                <Box className='section_title_wr' display="flex" justifyContent="space-between">
                    <Box className='headPart' display="flex">
                        <Heading as="h6" className='section_title section_title_darkGray'>Keno</Heading>
                    </Box>
                </Box>
                <Box className='cards' marginTop="10px">
                    <Flex style={{ padding: '0px' }} gap="10px" className="cardsSlider custom-carousel relative" css={{
                        flexWrap: "wrap"
                    }}>
                        {footballCardImg.map((item, index) => (
                            <div key={index} className="w-[100%] relative" style={{ width: '190px' }}>
                                <Box className='card_wr'>
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
                    </Flex>
                </Box>
            </Box>

            <Box className='other_game sectionTop_spacing'>
                <Box className='section_title_wr' display="flex" justifyContent="space-between">
                    <Box className='headPart' display="flex">
                        <Heading as="h6" className='section_title section_title_darkGray'>Other Games</Heading>
                    </Box>
                </Box>
                <Box className='cards' marginTop="10px">
                    <Flex style={{ padding: '0px' }} gap="10px" className="cardsSlider custom-carousel relative" css={{ flexWrap: "wrap" }}>
                        {currentItems.map((item, index) => (
                            <div key={index} className="w-[100%] relative" style={{ width: '190px' }}>
                                <Box className='card_wr'>
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
                                            <Text className="playBTn flexCenter">Play</Text>
                                        </Box>
                                    </Box>
                                    <Text className="card_title text-center" fontWeight="600" marginTop="5px">{item.title}</Text>
                                </Box>
                            </div>
                        ))}
                    </Flex>
                    <HStack spacing={4} justify="center" maxW="500px" margin="40px auto 60px">
                        <IconButton
                            icon={<FaAngleLeft color="#fff" />}
                            onClick={handlePrevious}
                            disabled={currentPage === 1}
                            variant="ghost"
                            aria-label="Previous"
                            flexGrow="1"
                            _hover={{ bg: paginationBtnBgInActive , color: 'white' }}
                        />
                        {Array.from({ length: totalPages }, (_, i) => (
                            <Button
                                key={i}
                                onClick={() => handlePageClick(i + 1)}
                                variant={currentPage === i + 1 ? 'solid' : 'ghost'}
                                backgroundColor={currentPage === i + 1 ? '#1e90ff' : 'transparent'}
                                color={currentPage === i + 1 ? 'white' : 'gray.500'}
                                _hover={{ bg: paginationBtnBgInActive , color: 'white' }}
                                _active={{ bg: paginationBtnBgActive, color: 'white' }}
                                flexGrow="1"
                            >
                                {i + 1}
                            </Button>
                        ))}
                        <IconButton
                            icon={<FaAngleRight color="#fff" />}
                            onClick={handleNext}
                            disabled={currentPage === totalPages}
                            variant="ghost"
                            aria-label="Next"
                            flexGrow="1"
                            _hover={{ bg: paginationBtnBgInActive , color: 'white' }}
                        />
                    </HStack>
                </Box>
            </Box>

        </Box>
    );
};

export default MiniGame;
