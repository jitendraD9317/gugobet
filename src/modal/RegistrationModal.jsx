import React, { useState } from 'react';
import {
    Button,
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalCloseButton,
    ModalBody,
    ModalFooter,
    FormControl,
    Input,
    Text,
    useDisclosure,
    InputGroup,
    InputLeftElement,
    InputRightElement,
    IconButton,
    Link,
    Box,
    Heading,
    Image,
    Stack, 
    Checkbox,
} from "@chakra-ui/react";
import { AiOutlineEye, AiOutlineEyeInvisible } from 'react-icons/ai';
// import img1 from "../assets/logo.svg";
import loginBgVideo from "../assets/videos/login_pc.mp4";
import hiLang from "../assets/images/login/hi.png";
import { useSelector } from "react-redux";
import { FaRegCircleUser } from "react-icons/fa6";
import { MdLock } from "react-icons/md";
import { FaMobileScreen } from "react-icons/fa6";
import { FaCircleQuestion } from "react-icons/fa6";


function RegistrationModal() {
    const { isOpen, onOpen, onClose } = useDisclosure();
    const [showPassword, setShowPassword] = useState(false);
    const togglePasswordVisibility = () => setShowPassword(!showPassword);

    const initialRef = React.useRef(null);
    const finalRef = React.useRef(null);

    const [isChecked, setIsChecked] = useState(false);
    const toggleCheck = () => {
        setIsChecked(!isChecked);
    };
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
        RegistrationPopupBg,
    } = useSelector((state) => state.theme);

    const commonBtnStyle = {
        borderRadius: '10px',
    }
    const registrationStyle = {
        width: '63%',
        marginLeft: '10px',
        backgroundImage: activeBtn,
        boxShadow: '0 0 12px rgba(79, 208, 255, 0.2)',
        color: primaryText,
    }
    const tabsStyle = {
        background: "#1c2d44"
    }
    const bonusStyle = {
        boxSizing: " border-box",
        height: "66px",
        padding: "1px",
        borderRadius: "8px",
        overflow: "hidden",
    }
    const promotionBtnContentStyle = {
        display: "flex",
        alignItems: "center",
        position: "relative",
        zIndex: "1",
        width: " 100%",
        height: "100%",
        borderRadius: "8px",
        backgroundColor: "#1c2d44",
        boxShadow: "inset 0 -5px 15px 1px hsla(0, 0%, 100%, .2)",
        overflow: "hidden",
    }
    const checkboxStyle = {
        inputStyle: {
          margin: '0 5px',
          width: '100%',
          textAlign: 'right'
        }
      }
    return (
        <>
            <Button onClick={onOpen} type="button" style={{ ...registrationStyle, ...commonBtnStyle }}
            >
                Registration
            </Button>
            <Modal
                initialFocusRef={initialRef}
                finalFocusRef={finalRef}
                isOpen={isOpen}
                onClose={onClose}
            >
                <ModalOverlay background="rgba(0,0,0,.8)">
                </ModalOverlay>

                <ModalContent className='registrationPopupModal' bg={RegistrationPopupBg} padding="36px 18px 45px" borderRadius="20px">
                    <ModalHeader style={{ paddingTop: '0' }} className='text-base flex justify-center items-center'>
                        Registration
                    </ModalHeader>
                    <ModalCloseButton />
                    <ModalBody>
                        <Box className="promotionBtn_wr" position="relative" style={{ ...bonusStyle }} backgroundColor="rgba(0, 0, 0, 0.5)">
                            <Box className="promotionBtnContent" style={{ ...promotionBtnContentStyle }}>
                                <Box className="promotionBtnBg" position="absolute" top="0" left="0" width="100%" height="100%" zIndex="-1" ></Box>
                                <Box className="promotionBtn" paddingLeft="105px" >
                                    <Text as="span" fontSize="16px" fontWeight="700" lineHeight="14px" color={primaryText}>100% Welcome Bonus</Text>
                                    <Text as="span" fontSize="14px" fontWeight="600" lineHeight="14px" color={primaryText} display="block">On First Deposit</Text>
                                </Box>
                            </Box>
                        </Box>
                        <FormControl mt="25px">
                            <InputGroup marginTop="9px">
                                <Box padding="0 24px 0 26px" width="112px" height="48px" bg={inputFlagBg} display="flex" alignItems="center" gap="5px" borderRadius="8px 0 0 8px">
                                    <Image src={hiLang} boxSize={22}></Image>
                                    <Text>+91</Text>
                                </Box>
                                <Input ref={initialRef} placeholder='Phone Number' fontWeight="700" bg={inputBg} height="48px" border="none" outline="none" boxShadow="none" borderRadius="0 8px 8px 0" />
                            </InputGroup>
                            <InputGroup marginTop="35px">
                                <Input
                                    placeholder='Password' fontWeight="700" bg={inputBg} height="48px"
                                    type={showPassword ? "text" : "password"}
                                    border="none" outline="none" boxShadow="none" borderRadius="8px"
                                />
                                <InputRightElement width="4.5rem" height="48px">
                                    <IconButton
                                        h="1.75rem" size="sm"
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
                        <Box className='checkBox_message' mt="25px" display="flex" alignItems="center" cursor="pointer" onClick={toggleCheck}>
                            <Box>
                                <Stack spacing={5} direction='row' justifyContent='end' style={{ ...checkboxStyle.inputStyle }}>
                                    <Checkbox
                                        colorScheme='custom'
                                        defaultChecked
                                        sx={{
                                            '.chakra-checkbox__control': {
                                                bg: 'black',
                                            },
                                            '.chakra-checkbox__label': {
                                                fontSize: '.8rem',
                                            },
                                        }}
                                    >
                                       <Text color={primaryText} fontSize="14px" textAlign="left">
                                        I have confirmed <Text as="span" color="#f8e71c" fontWeight="700">the phone number filled in is correct</Text>, and cannot be changed after registration.
                                    </Text>
                                    </Checkbox>
                                </Stack>
                            </Box>
                           
                        </Box>
                        <Box>
                            <Button bg={loginBtnPopup} boxShadow={loginBtnShadow} _hover={{ background: loginBtnPopup }}
                                color={primaryText} w="full" height="54px" borderRadius="12px" mt="40px">Confirm Registration</Button>
                            <Box mt={4} textAlign="center">
                                <Text>
                                Have an account?
                                </Text>
                                <Link color={RegistrationText} fontWeight="700" href="#" onClick={() => console.log("Navigate to register")}>Login</Link>
                            </Box>
                        </Box>
                    </ModalBody>
                </ModalContent>
            </Modal >
        </>
    );
}

export default RegistrationModal;
