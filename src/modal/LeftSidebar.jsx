
import {
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  useDisclosure,
  Button,
  Input,
  Box,
  Image,
  Text,
  Flex,
} from '@chakra-ui/react'
import React from 'react'
import { HiOutlineMenuAlt2 } from "react-icons/hi";
import { useSelector } from "react-redux";
import { useState } from 'react';
import logo from "../assets/images/logo.png";
import lightBg from "../assets/images/sideBar/light-bg.png";
import inviterBonus from "../assets/images/sideBar/main-inviterBonus.png";
import menuIconImg from "../assets/images/sideBar/new-menu-icons.png";
import veryIcon from "../assets/images/sideBar/icon-verify.svg"
import shieldicon from "../assets/images/shield-icon.png"
import reload from "../assets/images/reload.svg"
import { FaChevronDown } from "react-icons/fa6";
import { Link, Link as RouterLink } from 'react-router-dom';
import ChangeLanguage from './ChangeLanguage';

function LeftSidebar() {
  const { isOpen, onOpen, onClose } = useDisclosure()
  const btnRef = React.useRef()
  const {
    primaryText,
    leftSideBarBg,
    bgBlack,
    gray40,
    copyBg,
    changePassBg,
    transactionsActiveTab,
    loginBtnShadow,
    depositBtnBefore,
  } = useSelector((state) => state.theme);

  // Personal Account 
  const [personalsubmenuVisible, personalsetSubmenuVisible] = useState(false);
  const personalToggleSubmenu = () => {
    personalsetSubmenuVisible(!personalsubmenuVisible);
  };

  // Finance 
  const [FinancesubmenuVisible, FinancesetSubmenuVisible] = useState(false);
  const FinanceToggleSubmenu = () => {
    FinancesetSubmenuVisible(!FinancesubmenuVisible);
  };

  // All Game
  const [submenuVisible, setSubmenuVisible] = useState(false);
  const toggleSubmenu = () => {
    setSubmenuVisible(!submenuVisible);
  };

  const SiderBarcloseBtn = {
    left: "15px",
    top: "20px",
    position: "unset"
  }
  const invitePromotionCommon = {
    position: "absolute",
    top: "0",
    left: "0",
    height: "100%",
    borderRadius: "8px",
    objectFit: "contain",
    objectPosition: "left",
  }
  const promotionCard = {
    position: "absolute",
    top: "0",
    left: "0",
    width: "100%",
    height: "calc(100% - 17px)",
    marginTop: "17px",
    borderRadius: "8px",
    backgroundImage: "linear-gradient(180deg, #1c2d44 65.42%, hsla(0, 0%, 100%, .1))",
    boxShadow: "inset 0 -2px 8px 2px hsla(0, 0%, 100%, .1)",
  }
  const invitePromotion = {
    opacity: "1",
    transform: "translate(0px, 0px)",
    position: "relative",
    cursor: "pointer",
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-start",
    padding: "0 12px",
    borderadius: "8px",
    overflow: "hidden",
  }


  const menuItemStyle = {
    cursor: 'pointer',
    display: 'flex',
    alignItems: 'center',
    opacity: '1',
    transform: 'translate(0px, 0px)',
    marginBottom: '8px',
  };

  const titleStyle = {
    fontSize: '16px',
    fontWeight: '600',
    lineHeight: '13px',
    color: 'white',
    margin: '0',
    textTransform: 'capitalize',
  };

  const dividerStyle = {
    height: '1px',
    my: '2',
    backgroundImage: "linear-gradient(90deg, #ccc, hsla(0, 0%, 80%, 0))",
  };
  // Personal Account
  const personalsubmenuContainerStyle = {
    display: personalsubmenuVisible ? 'block' : 'none',
    flexDirection: 'column',
  };
  const personalsubmenuCaretRotate = {
    transform: personalsubmenuVisible ? 'rotate(180deg)' : 'rotate(0deg)',
  };

  // Finance
  const FinancesubmenuContainerStyle = {
    display: FinancesubmenuVisible ? 'block' : 'none',
    flexDirection: 'column',
  };
  const FinancesubmenuCaretRotate = {
    transform: FinancesubmenuVisible ? 'rotate(180deg)' : 'rotate(0deg)',
  };

  // All Game
  const submenuContainerStyle = {
    display: submenuVisible ? 'block' : 'none',
    flexDirection: 'column',
  };
  const submenuCaretRotate = {
    transform: submenuVisible ? 'rotate(180deg)' : 'rotate(0deg)',
  };
  const menuIconStyle = {
    flexShrink: "0",
    width: "20px",
    height: "20px",
    backgroundImage: `url(${menuIconImg})`,
    backgroundRepeat: "no-repeat",
    backgroundSize: "100% auto",
  };
  const verifyIconStyle = {
    flexShrink: "0",
    width: "16px",
    height: "18px",
    marginLeft: '5px',
    backgroundImage: `url(${veryIcon})`,
    backgroundRepeat: "no-repeat",
    backgroundPosition: "0 100%",
  };
  const menuIconPromotion = {
    backgroundPositionY: "42.30769%",
  }
  const menuIconMission = {
    backgroundPositionY: "46.15385%",
  }
  const menuIconroulette = {
    backgroundPositionY: "50%",
  }
  const menuIconAllGames = {
    backgroundPositionY: "53.84615%",
  }
  const menuIconSports = {
    backgroundPositionY: "57.69231%",
  }
  const menuIconCasino = {
    backgroundPositionY: "61.53846%",
  }
  const menuIconMinigames = {
    backgroundPositionY: "65.38462%",
  }
  const menuIconLottery = {
    backgroundPositionY: "100%",
  }
  const menuIconChesscards = {
    backgroundPositionY: "69.23077%",
  }
  const menuIconslots = {
    backgroundPositionY: "73.07692%",
  }
  const menuIconcricket = {
    backgroundPositionY: "76.92308%",
  }
  const menuIconblog = {
    backgroundPositionY: "80.76923%",
  }
  const menuIconAgent = {
    backgroundPositionY: "84.61538%",
  }
  const menuIconSponsor = {
    backgroundPositionY: "88.46154%",
  }
  const menuIconcache = {
    backgroundPositionY: "92.30769%",
  }
  // Personal Account
  const menuPersonal = {
    backgroundPositionY: "0",
  }
  const menuProfile = {
    backgroundPositionY: "3.84615%",
  }
  const menuBonus = {
    backgroundPositionY: "11.53846%",
  }

  // Finance 
  const menuFinance = {
    backgroundPositionY: "19.23077%",
  }
  const menuDeposit = {
    backgroundPositionY: "23.07692%",
  }
  const menuWithdraw = {
    backgroundPositionY: "26.92308%",
  }
  const menuBankInfo = {
    backgroundPositionY: "30.76923%",
  }
  const menuTransaction = {
    backgroundPositionY: "30.76923%",
  }

  // account Level
  const shieldLeveIcon = {
    width: "36px",
    height: "31.5px",
    backgroundImage: `url(${shieldicon})`,
    backgroundRepeat: " no-repeat",
    backgroundPositionY: "0",
    backgroundSize: "auto 100%",
  }
  const beforeStyle = {
    content: "''",
    position: "absolute",
    top: "50%",
    left: "0",
    width: "8px",
    height: "100%",
    borderRadius: "5px",
    backgroundColor: "#a4c0de33",
    transform: "translateY(-50%)",

  }
  const btnAnimation = {
    content: "''",
    position: "absolute",
    top: "0",
    left: "0",
    width: "100%",
    height: "100%",
    backgroundSize: "100%",
    backgroundImage: `us;(${depositBtnBefore})`,
    animation: " button-go-deposit__light-wave 4s linear infinite",
  }
  return (
    <>
      <Box className='leftSideBarMenu_wr'>
        <HiOutlineMenuAlt2 ref={btnRef} onClick={onOpen} fontSize={"26px"} style={{ color: primaryText }} />

        <Drawer
          isOpen={isOpen}
          placement='left'
          onClose={onClose}
          finalFocusRef={btnRef}
        >
          <DrawerOverlay />
          <DrawerContent bg={bgBlack} p="18px 12px 18px 12px" borderRadius="6px" width={{ base: "100%", md: "370px !important" }} maxW={{ base: "100%", md: "100%" }}  >
            <Box display="flex" height="65px" alignItems="center" position="relative" width="100%" bg={leftSideBarBg} borderRadius="6px 6px 0 0">
              <DrawerCloseButton className='SiderBarcloseBtn' style={{ ...SiderBarcloseBtn }} />
              <DrawerHeader>
                <Image src={logo} position="absolute" height="15px" top="28px" left="30px" ></Image>
              </DrawerHeader>
            </Box>

            <DrawerBody bg={leftSideBarBg} borderRadius="0 0 6px 6px" css={{

              '&::-webkit-scrollbar': {
                width: '0px',
              },
              '&::-webkit-scrollbar-thumb': {
                borderRadius: '10px',
              },
            }}>
              <Box className='menu_wr' overflowY="auto">
                <Box className='member_information'>
                  <Box className='member_information__account' position="relative" _before={beforeStyle} pl="28px" display="flex" alignItems="flex-end" justifyContent="space-between">
                    <Box className='account__content'>
                      <Box color={gray40} fontSize="14px">User ID</Box>
                      <Box className='account__content_details flexCenter' gap="6px">
                        <Box fontSize="24px" fontWeight="600">iaq417ac55e</Box>
                        <Box className='flexCenter' fontSize="12px" bg={copyBg} w="36px" h="18px" borderRadius="3px">copy</Box>
                      </Box>
                    </Box>
                    <Box className='account_level_icon' style={{ ...shieldLeveIcon }}></Box>
                  </Box>
                </Box>
                <Box mt="22px" mb="20px" className='member_information'>
                  <Box className='member_information__account' position="relative" _before={beforeStyle} pl="28px" display="flex" alignItems="flex-end" justifyContent="space-between">
                    <Box className='account__content'>
                      <Box color={gray40} fontSize="14px">Balance</Box>
                      <Box className='account__content_details flexCenter' gap="6px">
                        <Box fontSize="24px" fontWeight="600">₹0</Box>
                      </Box>
                    </Box>
                    <Box className='account_level_icon'>
                      <Image src={reload}></Image>
                    </Box>
                  </Box>
                </Box>
                <Box className='accountBtn flexCenter' gap="10px" mb="20px">
                  <Button color={primaryText} _hover="none" bg={changePassBg} flexGrow="1" h="48px">
                  <Link as={RouterLink} to="/withdraw">Withdraw</Link>
                    </Button>
                  <Button color={primaryText} _hover="none" bg={transactionsActiveTab} h="48px" flexGrow="1" boxShadow={loginBtnShadow} _before={btnAnimation} overflow="hidden" >
                  
                  <Link as={RouterLink} to="/deposit">Deposit</Link>
                  </Button>
                </Box>
                <Box className="invite_wr" mb="24px">
                  <Box className="invitePromotion_wr" style={{ ...invitePromotion, }} >
                    <Box className='promotionCard' style={{ ...promotionCard, }} />
                    <Image src={lightBg} alt="Friends" zIndex="2" style={{ ...invitePromotionCommon }} />
                    <Image src={inviterBonus} alt="Invite Friends" zIndex="2" style={{ ...invitePromotionCommon }} />
                    <Box className='flexCenter' flexDirection="column" zIndex="3" bottom="10px" textAlign="center" padding="30px 0 12px 96px" height="100%" width="100%" >
                      <Text fontSize="14px" fontWeight="700" color={primaryText} margin="0">
                        Invited Friends on T20WC
                      </Text>
                      <Text fontSize="12px" fontWeight="600" color="#f8e71c" margin="0">
                        Get ₹50 Bonus + Cashback
                      </Text>
                    </Box>
                  </Box>
                </Box>
                <Box>
                  <Flex direction="column">
                    <Box {...menuItemStyle} onClick={personalToggleSubmenu} justifyContent="space-between">
                      <Box display="flex" alignItems="center">
                        <Box className="menu-icon_all-games" style={{ ...menuIconStyle, ...menuPersonal }} />
                        <Box padding="10px 0 10px 10px">
                          <Text {...titleStyle}
                            css={{
                              position: 'relative',
                              '&::after': {
                                content: '""',
                                position: 'absolute',
                                width: "8px",
                                height: "8px",
                                top: "-5px",
                                left: "calc(100% + 5px)",
                                background: "#f54a2e",
                                borderRadius: "100%",
                              },
                            }}
                          >Personal Account</Text>
                        </Box>
                      </Box>
                      <FaChevronDown color='#2caceb' style={{ ...personalsubmenuCaretRotate }} />
                    </Box>
                    <Box {...personalsubmenuContainerStyle} marginLeft="30px">
                      <Box {...menuItemStyle}>
                        <Box className="menu_icon_sports" style={{ ...menuIconStyle, ...menuProfile }} />
                        <Box className='flexCenter' padding="10px 0 10px 10px" >
                          <Text {...titleStyle} >
                            <Link as={RouterLink} to="/profile">My Profile</Link>
                          </Text>
                          <Box style={{ ...verifyIconStyle }}></Box>
                        </Box>
                      </Box>
                      <Box {...menuItemStyle}>
                        <Box className="menu_icon_casino" style={{ ...menuIconStyle, ...menuBonus }} />
                        <Box padding="10px 0 10px 10px">
                          <Text {...titleStyle} >
                            <Link as={RouterLink} to="/bonus-record">Bonus Record</Link>
                          </Text>
                        </Box>
                      </Box>
                    </Box>
                    <Box {...menuItemStyle} onClick={FinanceToggleSubmenu} justifyContent="space-between">
                      <Box display="flex" alignItems="center">
                        <Box className="menu-icon_all-games" style={{ ...menuIconStyle, ...menuFinance }} />
                        <Box padding="10px 0 10px 10px">
                          <Text {...titleStyle} >Finance</Text>
                        </Box>
                      </Box>
                      <FaChevronDown color='#2caceb' style={{ ...FinancesubmenuCaretRotate }} />
                    </Box>
                    <Box {...FinancesubmenuContainerStyle} marginLeft="30px">
                      <Box {...menuItemStyle}>
                        <Box className="menu_icon_sports" style={{ ...menuIconStyle, ...menuDeposit }} />
                        <Box className='flexCenter' padding="10px 0 10px 10px" >
                          <Text {...titleStyle} >
                            <Link as={RouterLink} to="/deposit">Deposit</Link>
                          </Text>
                        </Box>
                      </Box>
                      <Box {...menuItemStyle}>
                        <Box className="menu_icon_casino" style={{ ...menuIconStyle, ...menuWithdraw }} />
                        <Box padding="10px 0 10px 10px">
                          <Text {...titleStyle} >
                            <Link as={RouterLink} to="/withdraw">Withdraw</Link>
                          </Text>
                        </Box>
                      </Box>
                      <Box {...menuItemStyle}>
                        <Box className="menu_icon_casino" style={{ ...menuIconStyle, ...menuBankInfo }} />
                        <Box padding="10px 0 10px 10px">
                          <Text {...titleStyle} >
                            <Link as={RouterLink} to="/bank-info">Bank Info</Link>
                          </Text>
                        </Box>
                      </Box>
                      <Box {...menuItemStyle}>
                        <Box className="menu_icon_casino" style={{ ...menuIconStyle, ...menuTransaction }} />
                        <Box padding="10px 0 10px 10px">
                          <Text {...titleStyle} >
                            <Link as={RouterLink} to="/transaction-details">Transaction Details</Link>
                          </Text>
                        </Box>
                      </Box>
                    </Box>
                    <Box {...dividerStyle} />
                    <Box {...menuItemStyle}>
                      <Box className="menu-icon_promotions" style={{ ...menuIconStyle, ...menuIconPromotion }} />
                      <Box padding="10px 0 10px 10px">
                        <Text {...titleStyle} >
                          <Link as={RouterLink} to="/promotion">promotions</Link>
                        </Text>
                      </Box>
                    </Box>
                    <Box {...menuItemStyle}>
                      <Box className="menu_icon_mission" style={{ ...menuIconStyle, ...menuIconMission }} />
                      <Box padding="10px 0 10px 10px">
                        <Text {...titleStyle} >
                          <Link as={RouterLink} to="/bonus">Bonus</Link>
                        </Text>
                      </Box>
                    </Box>
                    <Box {...menuItemStyle}>
                      <Box className="menu_icon_roulette" style={{ ...menuIconStyle, ...menuIconroulette }} />
                      <Box padding="10px 0 10px 10px">
                        <Text {...titleStyle}>Lucky Spin</Text>
                      </Box>
                    </Box>
                    <Box {...dividerStyle} />
                    <Box {...menuItemStyle} onClick={toggleSubmenu} justifyContent="space-between">
                      <Box display="flex" alignItems="center">
                        <Box className="menu-icon_all-games" style={{ ...menuIconStyle, ...menuIconAllGames }} />
                        <Box padding="10px 0 10px 10px">
                          <Text {...titleStyle}>All Games</Text>
                        </Box>
                      </Box>
                      <FaChevronDown color='#2caceb' style={{ ...submenuCaretRotate }} />
                    </Box>
                    <Box {...submenuContainerStyle} marginLeft="30px">
                      <Box {...menuItemStyle}>
                        <Box className="menu_icon_sports" style={{ ...menuIconStyle, ...menuIconSports }} />
                        <Box padding="10px 0 10px 10px">
                          <Text {...titleStyle}>Sports</Text>
                        </Box>
                      </Box>
                      <Box {...menuItemStyle}>
                        <Box className="menu_icon_casino" style={{ ...menuIconStyle, ...menuIconCasino }} />
                        <Box padding="10px 0 10px 10px">
                          <Text {...titleStyle}>Live Casino</Text>
                        </Box>
                      </Box>
                      <Box {...menuItemStyle}>
                        <Box className="menu_icon_minigames" style={{ ...menuIconStyle, ...menuIconMinigames }} />
                        <Box padding="10px 0 10px 10px">
                          <Text {...titleStyle}>Mini Games</Text>
                        </Box>
                      </Box>
                      <Box {...menuItemStyle}>
                        <Box className="menu-icon_lottery" style={{ ...menuIconStyle, ...menuIconLottery }} />
                        <Box padding="10px 0 10px 10px">
                          <Text {...titleStyle}>Lottery</Text>
                        </Box>
                      </Box>
                      <Box {...menuItemStyle}>
                        <Box className="menu_icon_chesscards" style={{ ...menuIconStyle, ...menuIconChesscards }} />
                        <Box padding="10px 0 10px 10px">
                          <Text {...titleStyle}>Table Games</Text>
                        </Box>
                      </Box>
                      <Box {...menuItemStyle}>
                        <Box className="menu-icon_slots" style={{ ...menuIconStyle, ...menuIconslots }} />
                        <Box padding="10px 0 10px 10px">
                          <Text {...titleStyle}>Slots</Text>
                        </Box>
                      </Box>
                      <Box {...menuItemStyle}>
                        <Box className="menu-icon_cricket" style={{ ...menuIconStyle, ...menuIconcricket }} />
                        <Box padding="10px 0 10px 10px">
                          <Text {...titleStyle}>Cricket</Text>
                        </Box>
                      </Box>
                    </Box>
                    <Box {...dividerStyle} />
                    <Box {...menuItemStyle}>
                      <Box className="menu-icon_blog" style={{ ...menuIconStyle, ...menuIconblog }} />
                      <Box padding="10px 0 10px 10px">
                        <Text {...titleStyle}>Online Betting Blog</Text>
                      </Box>
                    </Box>
                    <Box {...menuItemStyle}>
                      <Box className="menu-icon_agent" style={{ ...menuIconStyle, ...menuIconAgent }} />
                      <Box padding="10px 0 10px 10px">
                        <Text {...titleStyle}>Join GUGOBET Partner</Text>
                      </Box>
                    </Box>
                    <Box {...menuItemStyle}>
                      <Box className="menu-icon_sponsor" style={{ ...menuIconStyle, ...menuIconSponsor }} />
                      <Box padding="10px 0 10px 10px">
                        <Text {...titleStyle}>GUGOBET Sponsor</Text>
                      </Box>
                    </Box>
                    <Box {...menuItemStyle}>
                      <Box className="menu-icon_clear-cache" style={{ ...menuIconStyle, ...menuIconcache }} />
                      <Box padding="10px 0 10px 10px">
                        <Text {...titleStyle}>Clear Cache</Text>
                      </Box>
                    </Box>
                    <Box className='leftSideBar_lang' textAlign="right">
                      <ChangeLanguage></ChangeLanguage>
                    </Box>
                  </Flex>
                </Box>
              </Box>
            </DrawerBody>
          </DrawerContent>
        </Drawer>
      </Box>
    </>
  )
}


export default LeftSidebar