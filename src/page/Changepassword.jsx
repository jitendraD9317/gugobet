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
    InputGroup,
    InputRightElement,
    IconButton,
    Flex,
} from '@chakra-ui/react';
import { AiOutlineEye, AiOutlineEyeInvisible } from 'react-icons/ai';
import { RiArrowLeftSLine } from "react-icons/ri";
import { useSelector } from "react-redux";
import shield from "../assets/images/changepassword/shield.svg"
import React, { useState } from 'react';

function Changepassword() {
    const { primaryBg, primaryText, profileInputBg, GoToVerifyBG, changePassBg, playBtnHoverBorder, changePassConfirmBtn  } = useSelector((state) => state.theme);

    const contentWrStyle = {
        maxWidth: "calc(600px )",
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
        height: "48px",
        BsBorderRadius: "8px",
        padding: "10px 15px",
        border: "none"
    }
    const [showPassword, setShowPassword] = useState(false);
    const [userId, setUserId] = useState('');
    const [password, setPassword] = useState('');
    const togglePasswordVisibility = () => setShowPassword(!showPassword);
    const initialRef = React.useRef(null);
    const finalRef = React.useRef(null);


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
                        <Heading as="h5" fontSize={{ base: "18px", md: "20px" }} >Change Password</Heading>
                    </Box>
                </Box>
            </Box>
            <Box className='main_content' style={{ ...contentWrStyle }}>
                <Box className='flexCenter' height="52px" w="52px" borderRadius="100%" m="0 auto" p="9px" border={`1px solid ${playBtnHoverBorder}`} >
                    <Image src={shield}></Image>
                </Box>
                <FormControl>
                    <InputGroup marginTop="10px">
                        <Text w={{ base: "110px", md: "130px" }} fontSize={{ base: "14px", md: "16px" }} lineHeight="1.1">Current Password</Text>
                        <Input
                            placeholder='Current Password'
                            height="48px"
                            type={showPassword ? "text" : "password"}
                            borderBottom="1px solid #fff"
                            borderWidth="0 0 1px 0"
                            borderRadius="0"
                            outline="none"
                            boxShadow="none !important"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                        <InputRightElement width="4.5rem" height="48px">
                            <IconButton
                                h="1.75rem"
                                size="sm"
                                onClick={togglePasswordVisibility}
                                icon={showPassword ? <AiOutlineEyeInvisible size={24} /> : <AiOutlineEye size={24} />}
                                aria-label={'Toggle Password Visibility'}
                                bg="transparent"
                                color="#b5bac3"
                                _hover={{ background: "transparent" }}
                            />
                        </InputRightElement>
                    </InputGroup>
                    <InputGroup marginTop="10px">
                        <Text w={{ base: "110px", md: "130px" }} fontSize={{ base: "14px", md: "16px" }} lineHeight="1.1">New Password</Text>
                        <Input
                            placeholder='New Password'
                            height="48px"
                            type={showPassword ? "text" : "password"}
                            borderBottom="1px solid #fff"
                            borderWidth="0 0 1px 0"
                            borderRadius="0"
                            outline="none"
                            boxShadow="none !important"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                        <InputRightElement width="4.5rem" height="48px">
                            <IconButton
                                h="1.75rem"
                                size="sm"
                                onClick={togglePasswordVisibility}
                                icon={showPassword ? <AiOutlineEyeInvisible size={24} /> : <AiOutlineEye size={24} />}
                                aria-label={'Toggle Password Visibility'}
                                bg="transparent"
                                color="#b5bac3"
                                _hover={{ background: "transparent" }}
                            />
                        </InputRightElement>
                    </InputGroup>
                    <InputGroup marginTop="10px">
                        <Text w={{ base: "110px", md: "130px" }} fontSize={{ base: "14px", md: "16px" }} lineHeight="1.1">Confirm Password</Text>
                        <Input
                            placeholder='Confirm Password'
                            height="48px"
                            type={showPassword ? "text" : "password"}
                            borderBottom="1px solid #fff"
                            borderWidth="0 0 1px 0"
                            borderRadius="0"
                            outline="none"
                             boxShadow="none !important"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                        <InputRightElement width="4.5rem" height="48px">
                            <IconButton
                                h="1.75rem"
                                size="sm"
                                onClick={togglePasswordVisibility}
                                icon={showPassword ? <AiOutlineEyeInvisible size={24} /> : <AiOutlineEye size={24} />}
                                aria-label={'Toggle Password Visibility'}
                                bg="transparent"
                                color="#b5bac3"
                                _hover={{ background: "transparent" }}
                            />
                        </InputRightElement>
                    </InputGroup>
                </FormControl>
                <Button
                    bg={changePassConfirmBtn}
                    w="full"
                    mt="20px"
                    cursor="pointer"
                    height="48px"
                    color={labelColor}
                    _hover={{ bg: changePassConfirmBtn }}
                    borderRadius="27px"
                >
                    <Text >Confirm</Text>
                </Button>
            </Box>
        </Box>
    );
}

export default Changepassword;
