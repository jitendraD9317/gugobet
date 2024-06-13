import React from 'react'
import { useSelector } from "react-redux";
import upi from '../assets/images/footer/upi.png'
import phonepay from '../assets/images/footer/phonepay.png'
import paytm from '../assets/images/footer/paytm.png'
import amazonpay from '../assets/images/footer/amazonpay.png'
import gpay from '../assets/images/footer/gpay.png'
import hdfc from '../assets/images/footer/hdfc.png'
import axis from '../assets/images/footer/axis.png'
import sbi from '../assets/images/footer/sbi.png'
import icici from '../assets/images/footer/icici.png'
import yes from '../assets/images/footer/yes.png'
import visa from '../assets/images/footer/visa.png'
import master from '../assets/images/footer/master.png'
import astrapay from '../assets/images/footer/astrapay.png'

import ipl from '../assets/images/footer/ipl.png'
import cup from '../assets/images/footer/cup.png'
import bigbase from '../assets/images/footer/big-base.png'
import uefa from '../assets/images/footer/uefa.png'
import tennis from '../assets/images/footer/tennis.png'
import {
  Text,
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  Box,
  Heading,
  UnorderedList,
  ListItem,
  SimpleGrid,
  Flex,
  Image,
  Divider,
} from '@chakra-ui/react';
import { Link } from 'react-router-dom';
const Footer = () => {
  const {
    textLighter,
    primaryText,
    caretColor,
    borderColor,
    sectionBg,
    gray50,
  } = useSelector((state) => state.theme);
const payImages=[upi, phonepay,paytm,amazonpay,gpay,hdfc,axis,sbi,icici,yes,visa,master,astrapay]
const leagueImage=[ipl, cup,bigbase,uefa,tennis]
  return (
    <Box className='footer_main' >
    <Box className='section_spacing' >
      <Box style={{backgroundColor:sectionBg}} padding="0 14px 14px" borderRadius="8px">
      <Accordion allowToggle>
        <AccordionItem border="none">
          <h2>
            <AccordionButton style={{ borderBottom: `2px solid ${borderColor}`}} paddingY="12px" paddingX="0">
              <Box flex="1" textAlign="left" style={{ color: primaryText, }} fontSize="14px" lineHeight="normal" fontWeight="600">
                Online Sports Betting in GUGOBET India
              </Box>
              <AccordionIcon color={caretColor} />
            </AccordionButton>
          </h2>
          <AccordionPanel pb={4} >
            <SimpleGrid className='accordion_wr' spacingX="10px" spacingY="20px" mt="12px" >

              <Box mb={6} className='footer_accordion_content sport'>
                <Heading as="h3" color="#fff" fontSize="13px" fontWeight="700" mb={4}>
                  Sports
                </Heading>
                <UnorderedList listStyleType="none" style={{ marginLeft: "0" }}>
                  {['Sports Betting', 'Cricket', 'Football', 'Tennis', 'Basketball', 'Badminton', 'Baseball', 'Darts', 'Esports', 'Golf', 'Pool', 'Table Tennis', 'Volleyball', 'Game Rules'].map(item => (
                    <ListItem key={item} cursor="pointer" fontSize="12px" style={{ color: textLighter }} lineHeight="20px" mb={2}>
                      {item}
                    </ListItem>
                  ))}
                </UnorderedList>
              </Box>

              <Box mb={6} className="footer_accordion_content cricket">
                <Heading as="h3" color="#fff" fontSize="13px" fontWeight="700" mb={4}>
                  Cricket
                </Heading>
                <UnorderedList listStyleType="none" style={{ marginLeft: "0" }}>
                  {['IPL Online Betting', 'IPL Betting App', 'IPL Schedule', 'Cricket Today Match', 'Live Cricket Betting', 'Cricket Betting Odds', 'Cricket Betting Tips'].map(item => (
                    <ListItem key={item} cursor="pointer" fontSize="12px" style={{ color: textLighter }} lineHeight="20px" mb={2}>
                      {item}
                    </ListItem>
                  ))}
                </UnorderedList>
              </Box>

              <Box mb={6} className="footer_accordion_content casino">
                <Heading as="h3" color="#fff" fontSize="13px" fontWeight="700" mb={4}>
                  Casino
                </Heading>
                <UnorderedList listStyleType="none" style={{ marginLeft: "0" }}>
                  {['Live Casino', 'Andar Bahar', 'Online Roulette', 'Teen Patti', 'Rummy', 'Dragon Tiger', 'Baccarat', 'BlackJack', 'Poker Card', 'Table Games', 'Slots', 'Fish Game', 'Arcade Game', 'Lucky 7'].map(item => (
                    <ListItem key={item} cursor="pointer" fontSize="12px" style={{ color: textLighter }} lineHeight="20px" mb={2}>
                      {item}
                    </ListItem>
                  ))}
                </UnorderedList>
              </Box>

              <Box display="flex" flexDirection="column" justifyContent="space-between">
                <Box mb={6} className="footer_accordion_content mini_games">
                  <Heading as="h3" color="#fff" fontSize="13px" fontWeight="700" mb={4}>
                    Mini Games
                  </Heading>
                  <UnorderedList listStyleType="none" style={{ marginLeft: "0" }}>
                    {['Aviator games', 'JetX', 'Keno'].map(item => (
                      <ListItem key={item} cursor="pointer" fontSize="12px" style={{ color: textLighter }} lineHeight="20px" mb={2}>
                        {item}
                      </ListItem>
                    ))}
                  </UnorderedList>
                </Box>

                <Box mb={6} className="footer_accordion_content lottery">
                  <Heading as="h3" color="#fff" fontSize="13px" fontWeight="700" mb={4}>
                    Lottery
                  </Heading>
                  <UnorderedList listStyleType="none" style={{ marginLeft: "0" }}>
                    {['Matka Lottery', 'Kerala Lottery', 'Pick Lottery'].map(item => (
                      <ListItem key={item} cursor="pointer" fontSize="12px" style={{ color: textLighter }} lineHeight="20px" mb={2}>
                        {item}
                      </ListItem>
                    ))}
                  </UnorderedList>
                </Box>
              </Box>
            </SimpleGrid>
          </AccordionPanel>
        </AccordionItem>
      </Accordion>
      <SimpleGrid className='main_footer_wr'>
        <Box>
          <Heading as="h3" color="#fff" fontSize="13px" fontWeight="700" mb={4}>
            GUGOBET
          </Heading>
          <UnorderedList listStyleType="none" ml={0}>
            {['Mobile App', 'Registration', 'Deposit', 'Withdrawal'].map(item => (
              <ListItem key={item} cursor="pointer" fontSize="12px" color="#b0b0b0" lineHeight="20px" mb={2}>
                {item}
              </ListItem>
            ))}
          </UnorderedList>
        </Box>
        <Box mt={6}>
          <Heading as="h3" color="#fff" fontSize="13px" fontWeight="700" mb={4}>
            More Info
          </Heading>
          <UnorderedList listStyleType="none" ml={0}>
            {['Promotions', 'Partners', 'Blog'].map(item => (
              <ListItem key={item} cursor="pointer" fontSize="12px" color="#b0b0b0" lineHeight="20px" mb={2}>
                {item}
              </ListItem>
            ))}
          </UnorderedList>
        </Box>
        <Box mt={6}>
          <Heading as="h3" color="#fff" fontSize="13px" fontWeight="700" mb={4}>
            Terms & Conditions
          </Heading>
          <UnorderedList listStyleType="none" ml={0}>
            {['Terms of Service', 'Privacy Policy', 'Account & Payment'].map(item => (
              <ListItem key={item} cursor="pointer" fontSize="12px" color="#b0b0b0" lineHeight="20px" mb={2}>
                {item}
              </ListItem>
            ))}
          </UnorderedList>
        </Box>
      </SimpleGrid>
      </Box>
    </Box>
    <Box className='footer_payment section_spacing' marginTop="16px">
            <Flex flexWrap="wrap" alignItems="center" justifyContent="center">
              {payImages.map((item,index)=>(
                 <Box key={index} className='paymentIcon' display="flex" alignItems="center">
                 <Image src={item} alt={`Logo ${index + 1}`} height="25px" width="100%" objectFit="contain" />
               </Box>
              ))}
            </Flex>
      </Box>
      <Divider borderColor={borderColor}></Divider>
      <Box className='league section_spacing' marginTop="16px">
            <Flex flexWrap="wrap" alignItems="center" justifyContent="center">
              {leagueImage.map((item,index)=>(
                 <Box key={index} className='leagueIcon' display="flex" alignItems="center" margin="0 28px">
                 <Image src={item} alt={`Logo ${index + 1}`} height="25px" width="100%" objectFit="contain" />
               </Box>
              ))}
            </Flex>
      </Box>
      <Box padding="30px 0">
        <Text style={{color:gray50, fontSize:"12px", textAlign:"center"}}>Copyright © 2006-2024 GUGOBET. All rights reserved.</Text>
      </Box>
    </Box>
  )
}

export default Footer