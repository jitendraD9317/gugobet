import React, { useState } from 'react';
import { useDisclosure } from '@chakra-ui/react';
import PropTypes from 'prop-types';
import {
    Button,
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalCloseButton,
    ModalBody,
    FormControl,
    Input,
    InputGroup,
    InputRightElement,
    IconButton,
    Box,
    Tabs,
    TabList,
    TabPanels,
    Tab,
    TabPanel,
    Text,
    Link,
    Image,
} from "@chakra-ui/react";
import { AiOutlineEye, AiOutlineEyeInvisible } from 'react-icons/ai';
import loginBgVideo from "../assets/videos/login_pc.mp4";
import hiLang from "../assets/images/login/hi.png";
import { useSelector } from "react-redux";
import { FaRegCircleUser } from "react-icons/fa6";
import { FaMobileScreen } from "react-icons/fa6";
import { FaCircleQuestion } from "react-icons/fa6";

function LoginModal({ onLogin }) { // Ensure onLogin prop is received
    const { isOpen, onOpen, onClose } = useDisclosure();
    const [showPassword, setShowPassword] = useState(false);
    const [userId, setUserId] = useState('');
    const [password, setPassword] = useState('');

    const togglePasswordVisibility = () => setShowPassword(!showPassword);

    const initialRef = React.useRef(null);
    const finalRef = React.useRef(null);

    const {
        primaryText,
        secondryText,
        activeBtn,
        grayBtn,
        LoginPopupBg,
        loginPopupBtnTabsBg,
        inputBg,
        inputFlagBg,
        loginBtnPopup,
        loginBtnShadow,
        RegistrationText,
    } = useSelector((state) => state.theme);

    const commonBtnStyle = {
        borderRadius: '10px',
    }
    const LoginStyle = {
        width: '37%',
        backgroundImage: grayBtn,
        color: secondryText,
    }

    const handleLogin = () => {
        const defaultUserId = 'admin';
        const defaultPassword = 'admin123';

        if (userId === defaultUserId && password === defaultPassword) {
            console.log('Credentials matched. Calling onLogin.');
            onLogin(true); // Call the onLogin prop
            onClose(); // Close the modal
        } else {
            alert('Invalid credentials');
        }
    }

    return (
        <>
            <Button onClick={onOpen} type="button" style={{ ...LoginStyle, ...commonBtnStyle }} >
                Login
            </Button>
            <Modal
                initialFocusRef={initialRef}
                finalFocusRef={finalRef}
                isOpen={isOpen}
                onClose={onClose}
            >
                <ModalOverlay zIndex="999">
                    <Box className="background-video-wrapper loginPopup" position="relative" overflow="hidden" width="100%" height="100vh" >
                        <video
                            muted
                            autoPlay
                            loop
                            playsInline
                            className="background-video"
                            style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', objectFit: 'cover' }}
                        >
                            <source src={loginBgVideo} type="video/mp4" />
                        </video>
                    </Box>
                </ModalOverlay>

                <ModalContent className='loginPopupModal' bg={LoginPopupBg} padding="36px 18px 45px" borderRadius="20px">
                    <ModalHeader style={{ paddingTop: '0' }} className='text-base flex justify-center items-center'>
                        Login
                    </ModalHeader>
                    <ModalCloseButton />
                    <ModalBody>
                        <Tabs isFitted className='login_popupTabs'>
                            <TabList gap="15px" border="none">
                                <Tab bg={loginPopupBtnTabsBg} height="48px" opacity=".8" borderRadius="8px" border="none">
                                    <Box display="flex" gap="10px" alignItems="center">
                                        <Box className="icon_wr">
                                            <FaRegCircleUser size={22} />
                                        </Box>
                                        <Text fontWeight="700">User ID</Text>
                                    </Box>
                                </Tab>
                                <Tab bg={loginPopupBtnTabsBg} height="48px" opacity=".8" borderRadius="8px" border="none">
                                    <Box display="flex" gap="10px" alignItems="center">
                                        <Box className="icon_wr">
                                            <FaMobileScreen size={22} />
                                        </Box>
                                        <Text fontWeight="700">Phone</Text>
                                    </Box>
                                </Tab>
                            </TabList>

                            <TabPanels>
                                <TabPanel paddingX="0">
                                    <FormControl>
                                        <InputGroup marginTop="9px">
                                            <Input 
                                                ref={initialRef} 
                                                placeholder='User ID' 
                                                fontWeight="700" 
                                                bg={inputBg} 
                                                height="48px" 
                                                border="none" 
                                                outline="none" 
                                                boxShadow="none" 
                                                borderRadius="8px"
                                                value={userId}
                                                onChange={(e) => setUserId(e.target.value)}
                                            />
                                        </InputGroup>
                                        <InputGroup marginTop="35px">
                                            <Input
                                                placeholder='Password' 
                                                fontWeight="700" 
                                                bg={inputBg} 
                                                height="48px"
                                                type={showPassword ? "text" : "password"}
                                                border="none" 
                                                outline="none" 
                                                boxShadow="none" 
                                                borderRadius="8px"
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
                                    <Box>
                                        <Box mt={2} marginTop="60px" marginLeft="26px" display="flex" alignItems="center" gap="10px">
                                            <FaCircleQuestion color={loginPopupBtnTabsBg} size={26} />
                                            <Text fontSize="15px !important" fontWeight="700">Forgot Password?</Text>
                                        </Box>
                                        <Button 
                                            bg={loginBtnPopup} 
                                            boxShadow={loginBtnShadow} 
                                            _hover={{ background: loginBtnPopup }}
                                            color={primaryText} 
                                            w="full" 
                                            height="54px" 
                                            borderRadius="12px" 
                                            mt="40px"
                                            onClick={handleLogin} // Call handleLogin on click
                                        >
                                            Login
                                        </Button>
                                        <Box mt={4} textAlign="center">
                                            <Text>
                                                Don't have an account?
                                            </Text>
                                            <Link color={RegistrationText} fontWeight="700" href="#" onClick={() => console.log("Navigate to register")}>Ragistration</Link>
                                        </Box>
                                    </Box>
                                </TabPanel>
                                <TabPanel paddingX="0">
                                    <FormControl>
                                        <InputGroup marginTop="9px">
                                            <Box padding="0 24px 0 26px" width="112px" height="48px" bg={inputFlagBg} display="flex" alignItems="center" gap="5px" borderRadius="8px 0 0 8px">
                                                <Image src={hiLang} boxSize={22}></Image>
                                                <Text>+91</Text>
                                            </Box>
                                            <Input 
                                                ref={initialRef} 
                                                placeholder='Phone Number' 
                                                fontWeight="700" 
                                                bg={inputBg} 
                                                height="48px" 
                                                border="none" 
                                                outline="none" 
                                                boxShadow="none" 
                                                borderRadius="0 8px 8px 0" 
                                            />
                                        </InputGroup>
                                        <InputGroup marginTop="35px">
                                            <Input
                                                placeholder='Password' 
                                                fontWeight="700" 
                                                bg={inputBg} 
                                                height="48px"
                                                type={showPassword ? "text" : "password"}
                                                border="none" 
                                                outline="none" 
                                                boxShadow="none" 
                                                borderRadius="8px"
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
                                    <Box>
                                        <Box mt={2} marginTop="60px" marginLeft="26px" display="flex" alignItems="center" gap="10px">
                                            <FaCircleQuestion color={loginPopupBtnTabsBg} size={26} />
                                            <Text fontSize="15px !important" fontWeight="700">Forgot Password?</Text>
                                        </Box>
                                        <Button 
                                            bg={loginBtnPopup} 
                                            boxShadow={loginBtnShadow} 
                                            _hover={{ background: loginBtnPopup }}
                                            color={primaryText} 
                                            w="full" 
                                            height="54px" 
                                            borderRadius="12px" 
                                            mt="40px"
                                            onClick={handleLogin} // Call handleLogin on click
                                        >
                                            Login
                                        </Button>
                                        <Box mt={4} textAlign="center">
                                            <Text>
                                                Don't have an account?
                                            </Text>
                                            <Link color={RegistrationText} fontWeight="700" href="#" onClick={() => console.log("Navigate to register")}>Ragistration</Link>
                                        </Box>
                                    </Box>
                                </TabPanel>
                            </TabPanels>
                        </Tabs>
                    </ModalBody>
                </ModalContent>
            </Modal >
        </>
    );
}

LoginModal.propTypes = {
    onLogin: PropTypes.func.isRequired,
};

export default LoginModal;
