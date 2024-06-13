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
    Button,
    FormControl,
    FormLabel,
    Input,
    Stack,
    useColorModeValue,
    Flex,
} from '@chakra-ui/react';
import { RiArrowLeftSLine } from "react-icons/ri";
import { useSelector } from "react-redux";
import React from 'react';
import { Link, Link as RouterLink } from 'react-router-dom'; 

function Profile() {
    const { primaryBg, primaryText, profileInputBg, GoToVerifyBG, changePassBg  } = useSelector((state) => state.theme);

    const contentWrStyle = {
        // maxWidth: "calc(600px )",
        margin: "10px auto 50px",
    };
    const labelColor = useColorModeValue(primaryText);
    const inputBg = useColorModeValue(profileInputBg);
    const inputTextColor = useColorModeValue(primaryText);
    const verifyButtonBg = useColorModeValue(GoToVerifyBG);
    const changePass = useColorModeValue(changePassBg);
    const verifyButtonTextColor = useColorModeValue(primaryText);
    const verifyButtonDisabledBg = useColorModeValue("linear-gradient(0deg,#a4a9b4,#bcc4cf)");
    const inputStyle = {
        height:"48px",
        BsBorderRadius:"8px",
        padding:"10px 15px",
        border:"none"
    }
    return (
        <Box className="promotion_page main_pageBody homePageGrid_spacing">
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
                        <Heading as="h5" fontSize={{ base: "18px", md: "20px" }} >Profile</Heading>
                    </Box>
                </Box>
            </Box>
            <Box className='main_content' maxWidth={{base:"100%", md:"600px"}} style={{ ...contentWrStyle }}>
                <form>
                    <Stack spacing={4}>
                        <FormControl id="mobile_phone">
                            <FormLabel color={labelColor}>Phone Number</FormLabel>
                            <Box position="relative">
                                <Input
                                    type="text"
                                    placeholder="Phone Number"
                                    bg={inputBg}
                                    style={{...inputStyle}}
                                    color={inputTextColor}
                                    disabled
                                />
                                <Button
                                    position="absolute"
                                    right={2}
                                    top="50%"
                                    transform="translateY(-50%)"
                                    bg={verifyButtonBg}
                                    color={verifyButtonTextColor}
                                    cursor="pointer"
                                >
                                    Go to verify
                                </Button>
                            </Box>
                        </FormControl>

                        <FormControl id="email">
                            <FormLabel color={labelColor}>Email</FormLabel>
                            <Box position="relative">
                                <Input
                                    type="email"
                                    placeholder="Email"
                                    bg={inputBg}
                                    style={{...inputStyle}}
                                    color={inputTextColor}
                                />
                                <Button
                                    position="absolute"
                                    right={2}
                                    top="50%"
                                    transform="translateY(-50%)"
                                    bg={verifyButtonDisabledBg}
                                    color={verifyButtonTextColor}
                                    cursor="not-allowed"
                                >
                                    Go to verify
                                </Button>
                            </Box>
                        </FormControl>

                        <FormControl id="birthday">
                            <FormLabel color={labelColor}>Birthday</FormLabel>
                            <Input
                                type="date"
                                placeholder="Birthday"
                                bg={inputBg}
                                style={{...inputStyle}}
                                color={primaryText}
                                 className="custom-date-input"
                            />
                        </FormControl>

                        <FormControl id="password">
                            <FormLabel color={labelColor}>Password</FormLabel>
                            <Button
                                bg={changePass}
                                w="full"
                                mt={2}
                                cursor="pointer"
                                height="48px"
                                color={labelColor}
                                _hover={{bg:changePass}}
                            >
                            <Link as={RouterLink} to="/changepassword">Change Password</Link>
                            </Button>
                        </FormControl>
                    </Stack>
                </form>
            </Box>
        </Box>
    );
}

export default Profile;
