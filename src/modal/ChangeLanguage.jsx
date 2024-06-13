import React from 'react'
import { FaCaretDown } from "react-icons/fa";
import hindi from "../assets/images/flags/hi.svg";
import bangladesh from "../assets/images/flags/bangladesh.svg";
import en from "../assets/images/flags/en.svg";
import hi from "../assets/images/flags/hi.svg";
import { useSelector } from "react-redux";
import { useMediaQuery } from '@chakra-ui/react';
import { FaRegCircleCheck } from "react-icons/fa6";

import {
    Button,
    Menu,
    MenuButton,
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalCloseButton,
    ModalBody,
    ModalFooter,
    useDisclosure,
    Box,
    Link,
    Image,
    Text
} from "@chakra-ui/react";

const ChangeLanguage = ({ isLoggedIn, setIsLoggedIn }) => {
    const { isOpen, onOpen, onClose } = useDisclosure();

    const initialRef = React.useRef(null);
    const finalRef = React.useRef(null);

    const style = {
        marginRight: '10px',
        border: '1px solid #66a6ff',
        borderRadius: '5px',
    }
    const {
        primaryText,
        languagePopupBg,
        languageActiveBg,
        paginationBtnBgActive,
        borderColor,
    } = useSelector((state) => state.theme);
    const langStyle = {
        minWidth: '100px',
        fontWeight: '400',
        border: '1px solid #d9dee4',
        padding: "8px 10px",
        display: 'flex',
        justifyContent: 'center',
    }
    const hover = {
        _hover: {
            backgroundColor: 'transparent',  // Example of hover effect
        },
    }
    const [isXl] = useMediaQuery("(min-width: 1280px)");

    const lagnguageStyle = {
        borderRadius: "10px",
        height: "50px",
        padding: "0 28px",
    }
    return (
        <>
          <Box className='languageChange_wr'>
          <Button
                marginRight={{ base: "0", xl: '5px' }}
                bg={{ base: "transparent", xl: "transparent" }}
                //  width={{ base:"44px", xl:"44px"}}
                height={{ base: "28px", xl: "28px" }}
                padding={{ base: "0 5px", xl: "0" }}
                style={{ ...hover }}
                onClick={onOpen}>
                <Menu >
                    <MenuButton as={Button} rightIcon={isXl ? <FaCaretDown style={{ color: primaryText, marginLeft: "2" }} /> : undefined}
                        width={{ base: "44px", xl: "44px" }}
                        height={{ base: "26px", xl: "26px" }}
                        borderRadius={{ base: "50%", xl: "0" }}
                        padding={{ base: "0 5px", xl: "0" }}
                        bg={{ base: "transparent", xl: "transparent" }}
                        style={{ ...hover, ...style }}
                    >
                        <Image src={hindi} alt='Hindi'
                            height={{ base: "18px", xl: "18px" }}
                            width={{ base: "18px", xl: "18px" }}
                            style={{ borderRadius: '50%', objectFit: 'cover', }}
                        />
                    </MenuButton>
                </Menu>
            </Button>
            <Modal
                initialFocusRef={initialRef}
                finalFocusRef={finalRef}
                isOpen={isOpen}
                onClose={onClose}
            >
                <ModalOverlay />
                <ModalContent bg={languagePopupBg} margin="auto">
                    <ModalHeader style={{ paddingTop: '0', paddingBottom: '10px' }} fontSize="1.1rem" className=' flex justify-center items-center'></ModalHeader>
                    <ModalCloseButton />
                    <ModalBody padding="18px 18px 30px">
                        <Box className="lang-list-wrapper default-center">
                            <ul>
                                <li style={{ fontSize: "24px", fontWeight: "700" }}>Language</li>
                                <li style={{ padding: '5px 0' }} >
                                    <Box className="justify-between lang-selection-wrapper" display="flex" alignItems="center" style={{ ...lagnguageStyle }} bg={languageActiveBg}>
                                        <Box className="" display="flex" alignItems="center" gap="10px">
                                            <Box w="30px" h="30px" borderRadius="50%" overflow="hidden">
                                                <Image src={bangladesh} alt="Country Flag" className="flag" objectFit="cover" h="30px" ></Image>
                                            </Box>
                                            <Link href="/en-BD" className='rounded'>
                                                <Box className="lang-bg-wrapper" >
                                                    <Text>English</Text>
                                                </Box>
                                            </Link>
                                        </Box>
                                        <Link href="/bn-BD" className='rounded'>
                                            <FaRegCircleCheck color={paginationBtnBgActive} size={23} />
                                        </Link>
                                    </Box>
                                </li>
                                <li style={{ padding: '5px 0', borderBottom: "1px solid rgba(102,161,255,.2)" }} >
                                    <Box className="justify-between lang-selection-wrapper" display="flex" alignItems="center" style={{ ...lagnguageStyle }} >
                                        <Box className="" display="flex" alignItems="center" gap="10px">
                                            <Box w="30px" h="30px" borderRadius="50%" overflow="hidden">
                                                <Image src={en} alt="Country Flag" className="flag" objectFit="cover" h="30px" ></Image>
                                            </Box>
                                            <Link href="/en-BD" className='rounded'>
                                                <Box className="lang-bg-wrapper" >
                                                    <Text>English</Text>
                                                </Box>
                                            </Link>
                                        </Box>
                                        {/* <Link href="/bn-BD" className='rounded'>
                                            <FaRegCircleCheck color={paginationBtnBgActive} size={23}/>
                                        </Link> */}
                                    </Box>
                                </li>
                                <li style={{ padding: '5px 0', borderBottom: "1px solid rgba(102,161,255,.2)" }} >
                                    <Box className="justify-between lang-selection-wrapper" display="flex" alignItems="center" style={{ ...lagnguageStyle }} >
                                        <Box className="" display="flex" alignItems="center" gap="10px">
                                            <Box w="30px" h="30px" borderRadius="50%" overflow="hidden">
                                                <Image src={hi} alt="Country Flag" className="flag" objectFit="cover" h="30px" ></Image>
                                            </Box>
                                            <Link href="/en-BD" className='rounded'>
                                                <Box className="lang-bg-wrapper" >
                                                    <Text>हिन्दी</Text>
                                                </Box>
                                            </Link>
                                        </Box>
                                        {/* <Link href="/bn-BD" className='rounded'>
                                            <FaRegCircleCheck color={paginationBtnBgActive} size={23}/>
                                        </Link> */}
                                    </Box>
                                </li>
                            </ul>
                        </Box>
                    </ModalBody>
                </ModalContent>
            </Modal>
          </Box>
        </>
    );
}

export default ChangeLanguage