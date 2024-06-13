import {
  Box,
  Heading,
  Tabs,
  TabList,
  TabPanels,
  Tab,
  TabPanel,
  Image,
  Text,
  useDisclosure,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalCloseButton,
  ModalBody,
  ModalHeader,
  ModalFooter,
  Flex,
} from '@chakra-ui/react';
import { BsArrowRight } from "react-icons/bs";
import { RiArrowLeftSLine } from "react-icons/ri";
import { FaLink } from "react-icons/fa6";
import { MdArrowRight } from "react-icons/md";
import cardImg from "../assets/images/promotion/cardImg.jpeg";
import worldCup from "../assets/images/promotion/t20-world-cup.jpeg";
import { useSelector } from "react-redux";
import React from 'react';

const Promotion = () => {
  const { primaryText, primaryBg, promotionCardBg, PopupBg, RegistrationText, popupFooterBg } = useSelector((state) => state.theme);

  const contentWrStyle = {
    display: "grid",
    gridTemplateColumns: { base: "1fr", md: "repeat(2, 1fr)" },
    gridGap: { base: "25px", md: "45px" },
    marginTop: { base: "25px", md: "45px" },
    maxWidth: "calc(800px + 300px)",
    margin: "0 auto",
  };

  const footerStyle = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: promotionCardBg,
    height: { base: "46px", md: "62px" },
    padding: { base: "0 18px", md: "0 30px" },
  };

  const titleStyle = {
    fontSize: '15px',
    fontWeight: '700',
    color: primaryText,
    margin: '0',
  };

  const { isOpen, onOpen, onClose } = useDisclosure();
  const initialRef = React.useRef(null);
  const finalRef = React.useRef(null);

  const modalContentStyles = {
    width: '100%',
    maxHeight: '100%',
    paddingBottom: 'calc(64px + var(--safe-area-inset-bottom))',
    borderRadius: '24px 24px 0 0',
    overflow: 'auto',
    overscrollBehavior: 'none',
    padding: "36px 18px 45px",
    borderRadius: "20px",
    width: "100vw",
    maxWidth: "100%"
  };

  const inviteTextCommon = {
    position: "absolute",
    top: "50%",
    left: "50%",
    width: "90%",
    wordBreak: "break-word",
    transform: "translate(-50%, -50%)",
  }
  const inviteLinkCopy = {

    width: "32px",
    height: "32px",
    border: "1px solid #3dbefd",
    borderRadius: " 10px",
    background: PopupBg,
  }
  return (
    <Box className="promotion_page main_pageBody homePageGrid_spacing">
      <Box position="sticky" top="65px" zIndex="99">
        <Box height="40px" position="relative" bg={primaryBg}>
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
            <Heading as="h5" fontSize={{ base: "18px", md: "20px" }}>Promotions</Heading>
          </Box>
        </Box>
      </Box>

      <Tabs className="promotionTabs" paddingTop="20px">
        <TabList className='tabsList' justifyContent="center" border="none">
          <Tab>All</Tab>
          <Tab>Lobby</Tab>
          <Tab>Mini Games</Tab>
          <Tab>Sports</Tab>
          <Tab>Table Games</Tab>
        </TabList>
        <TabPanels>
          <TabPanel>
            <Box className="tabsCardBox" sx={contentWrStyle}>
              <Box className="Card_wr" bg={promotionCardBg} >
                <Box onClick={onOpen} >
                  <Image src={cardImg} />
                  <Box className="cardFooter" sx={footerStyle}>
                    <Heading as="h2" sx={titleStyle}>
                      T20 World Cup Invite Friends: Extra Cash Event
                    </Heading>
                    <Box>
                      <BsArrowRight size={18} />
                    </Box>
                  </Box>
                  <Modal className="model_box"
                    initialFocusRef={initialRef}
                    finalFocusRef={finalRef}
                    isOpen={isOpen}
                    onClose={onClose}
                    bg={PopupBg}
                  >
                    <ModalOverlay zIndex="999">

                    </ModalOverlay>

                    <ModalContent className='promotionCardPopup_wr' style={{ ...modalContentStyles }} bg={PopupBg}
                      css={{
                        '&::-webkit-scrollbar': {
                          width: '0',
                        },
                      }}>
                      <ModalHeader style={{ paddingTop: '0' }} className='text-base flex justify-center items-center'>

                      </ModalHeader>
                      <ModalCloseButton />
                      <ModalBody>
                        <Box>
                          <Image src={worldCup} maxWidth="510px" m="0 auto" css={{

                            '@media screen and (min-width: 769px)': {
                              borderRadius: "30px 30px 0 0",
                            }
                          }}></Image>
                        </Box>
                      </ModalBody>
                      <ModalFooter position="fixed" left='0' bottom="0" padding="0" w="100%" >
                        <Box bg={popupFooterBg} width="100%">
                          <Box height="64px" p="10px 20px" maxW="500px" m="0 auto" width="100%">
                            <Flex flexDirection="row" width="100%" justifyContent="space-between" alignItems="center">
                              <Box className='flexCenter' style={{ ...inviteLinkCopy }}>
                                <FaLink />
                              </Box>
                              <Box className='promotioninviteBtn_footer' position="relative" flexGrow="1" p="0 10px" height="48px">
                                <Text className='invite_text fullsizeText' fontSize="14px important" style={{ ...inviteTextCommon }}>Start invite!</Text>
                                <Text className='invite_text_blur fullsizeText' style={{ ...inviteTextCommon }}>Start invite!</Text>
                              </Box>
                              <Box color={RegistrationText} display="flex" alignItems="center">
                                <Text className='fullsizeText' fontWeight="600">All</Text>
                                <MdArrowRight />
                              </Box>
                            </Flex>
                          </Box>
                        </Box>
                      </ModalFooter>
                    </ModalContent>
                  </Modal >
                </Box>

              </Box>
            </Box>
          </TabPanel>
          <TabPanel>

          </TabPanel>
          <TabPanel>

          </TabPanel>
          <TabPanel>

          </TabPanel>
          <TabPanel>

          </TabPanel>
        </TabPanels>
      </Tabs>
    </Box>
  );
};

export default Promotion;
