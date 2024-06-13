import React from "react";
import { useTranslation } from "react-i18next";
import { useSelector } from "react-redux";
import { MdOutlineSearch } from "react-icons/md";
import { Tabs, TabList, TabPanels, Tab, TabPanel, Input, InputGroup, InputLeftElement, Box, Text, useBreakpointValue } from '@chakra-ui/react';
import { useState } from 'react';
import gameCategory from '../assets/images/home/game-category.png';
import Footer from "../component/Footer";
import Lobby from "./Lobby";
import Sport from "./Sport";
import Casino from "./Casino";
import MiniGame from "./MiniGame";
import Lottery from "./Lottery";
import TableGame from "./TableGame";
import Slots from "./Slots";

const Home = () => {
  const { primaryBg} = useSelector((state) => state.theme);
  const [searchQuery, setSearchQuery] = useState('');
  const { t } = useTranslation();

  const searchBox = {
    padding: '0 13px',
    borderRadius: '6px',
    backgroundImage: "linear-gradient(180deg, rgba(2, 33, 104, .35), rgba(8, 53, 121, .35))",
  };

  const tabsIconStyle = {
    width: '27px',
    height: '27px',
    backgroundImage: `url(${gameCategory})`,
    backgroundSize: 'auto 54px',
  };

  const tabStyles = {
    whiteSpace: 'nowrap',
    overflow: 'hidden',
    textOverflow: 'ellipsis',
  };

  const lobby = { backgroundPositionX: '100%' };
  const sports = { backgroundPositionX: '77.77778%' };
  const casino = { backgroundPositionX: '33.33333%' };
  const minigames = { backgroundPositionX: '88.88889%' };
  const lottery = { backgroundPositionX: '44.44444%' };
  const chesscards = { backgroundPositionX: '55.55556%' };
  const slots = { backgroundPositionX: '66.66667%' };
  const searchIconSize = useBreakpointValue({ base: 24, md: 32 });
  return (
    <div className="text-4xl main_pageBody homePageGrid_spacing">
      <Box className="section_spacing">
        <Tabs position='relative' variant='unstyled' className="home_tabs">
          <Box position="fixed" top={{base:"103px", md:"65px"}} style={{ backgroundColor: primaryBg, zIndex: '99' }} w="100%" paddingY="15px">
            <Box position="absolute" style={{backgroundColor:primaryBg}} paddingRight="8px" zIndex="99">
              <InputGroup className="search-input" height={{base:"35px", md:"47px"}} style={{ ...searchBox }} width={{base:"35px", md:"50px"}} >
                <InputLeftElement h="100%" w="100%" pointerEvents="none">
                  <MdOutlineSearch size={searchIconSize} />
                </InputLeftElement>
              </InputGroup>
            </Box>
            <TabList className="home_Tabs_wr" gap="9px" paddingLeft={{base:"45px", md:"60px"}} overflowX="auto" whiteSpace="nowrap" css={{
              '&::-webkit-scrollbar': {
                display: 'none',
              },
              '-ms-overflow-style': 'none',
              'scrollbar-width': 'none', 
            }}>
              <Tab>
                <Box className="game_category_icon_wr" position="relative">
                  <Box style={{ ...tabsIconStyle, ...lobby }} className="icon_wr lobby"></Box>
                </Box>
                <Text style={{ ...tabStyles }} paddingLeft={{ base: "4px", md: "9px" }} fontSize={{ base: "14px", md: "18px" }} fontWeight="700">Lobby</Text>
              </Tab>
              <Tab>
                <Box className="game_category_icon_wr" position="relative">
                  <Box style={{ ...tabsIconStyle, ...sports }} className="icon_wr sports"></Box>
                </Box>
                <Text style={{ ...tabStyles }} paddingLeft={{ base: "4px", md: "9px" }} fontSize={{ base: "14px", md: "18px" }} fontWeight="700">Sports</Text>
              </Tab>
              <Tab>
                <Box className="game_category_icon_wr" position="relative">
                  <Box style={{ ...tabsIconStyle, ...casino }} className="icon_wr casino"></Box>
                </Box>
                <Text style={{ ...tabStyles }} paddingLeft={{ base: "4px", md: "9px" }} fontSize={{ base: "14px", md: "18px" }} fontWeight="700">Casino</Text>
              </Tab>
              <Tab>
                <Box className="game_category_icon_wr" position="relative">
                  <Box style={{ ...tabsIconStyle, ...minigames }} className="icon_wr minigames"></Box>
                </Box>
                <Text style={{ ...tabStyles }} paddingLeft={{ base: "4px", md: "9px" }} fontSize={{ base: "14px", md: "18px" }} fontWeight="700">Mini Games</Text>
              </Tab>
              <Tab>
                <Box className="game_category_icon_wr" position="relative">
                  <Box style={{ ...tabsIconStyle, ...lottery }} className="icon_wr lottery"></Box>
                </Box>
                <Text style={{ ...tabStyles }} paddingLeft={{ base: "4px", md: "9px" }} fontSize={{ base: "14px", md: "18px" }} fontWeight="700">Lottery</Text>
              </Tab>
              <Tab>
                <Box className="game_category_icon_wr" position="relative">
                  <Box style={{ ...tabsIconStyle, ...chesscards }} className="icon_wr chesscards"></Box>
                </Box>
                <Text style={{ ...tabStyles }} paddingLeft={{ base: "4px", md: "9px" }} fontSize={{ base: "14px", md: "18px" }} fontWeight="700">Table Games</Text>
              </Tab>
              <Tab>
                <Box className="game_category_icon_wr" position="relative">
                  <Box style={{ ...tabsIconStyle, ...slots }} className="icon_wr slots"></Box>
                </Box>
                <Text style={{ ...tabStyles }} paddingLeft={{ base: "4px", md: "9px" }} fontSize={{ base: "14px", md: "18px" }} fontWeight="700">Slots</Text>
              </Tab>
            </TabList>
          </Box>
          <TabPanels padding="0">
            <TabPanel padding="0">
              <Lobby />
            </TabPanel>
            <TabPanel padding="0">
              <Sport></Sport>
            </TabPanel>
            <TabPanel padding="0">
             <Casino></Casino>
            </TabPanel>
            <TabPanel padding="0">
             <MiniGame></MiniGame>
            </TabPanel>
            <TabPanel padding="0">
             <Lottery></Lottery>
            </TabPanel>
            <TabPanel padding="0">
             <TableGame></TableGame>
            </TabPanel>
            <TabPanel padding="0">
             <Slots></Slots>
            </TabPanel>
          </TabPanels>
        </Tabs>
      </Box>
      <Footer />
    </div>
  );
};

export default Home;
