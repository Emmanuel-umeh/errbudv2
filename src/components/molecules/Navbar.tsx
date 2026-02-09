"use client";

import {
  Box,
  HStack,
  VStack,
  Image,
  List,
  ListItem,
  IconButton,
  useDisclosure,
  Text,
} from "@chakra-ui/react";
import Link from "next/link";
import { useEffect, useState } from "react";
import { FiChevronRight, FiMenu, FiX } from "react-icons/fi";

import SignUpDropdown from "@/components/molecules/SignUpDropdown";

const Navbar = () => {
  const { isOpen, onToggle } = useDisclosure();
  const [mobileSignUpOpen, setMobileSignUpOpen] = useState(false);
  const [mobileFindACleanerOpen, setMobileFindACleanerOpen] = useState(false);

  useEffect(() => {
    if (!isOpen) {
      setMobileSignUpOpen(false);
      setMobileFindACleanerOpen(false);
    }
  }, [isOpen]);

  return (
    <Box>
      <HStack
        pl={{ base: "20px", md: "49.81px" }}
        pr={{ base: "20px", md: "50.19px" }}
        py="22px"
        justifyContent="space-between"
      >
        <Link href="/">
          <Image
            src="/images/Errbud-logo-2.png"
            alt="logo"
            height="29.58px"
            width="111.19px"
          />
        </Link>

        {/* Desktop Menu */}
        {/* <VStack
          display={{ base: "none", md: "flex" }}
          justifyContent={"center"}
          alignItems={"center"}
        >
          <List display="flex" flexDirection="row" gap="16px">
            <ListItem fontWeight={600} fontSize="16px" fontFamily="heading">
              <Link href="/#how-it-works">How it Works</Link>
            </ListItem>

            <ListItem fontWeight={600} fontSize="16px" fontFamily="heading">
              <Link href="/#video-area">Video Area</Link>
            </ListItem>

            <ListItem fontWeight={600} fontSize="16px" fontFamily="heading">
              <Link href="/#testimonials">Testimonials</Link>
            </ListItem>

            <ListItem fontWeight={600} fontSize="16px" fontFamily="heading">
              <Link href="/contact-us">Contact</Link>
            </ListItem>

            <Button
              rounded={"full"}
              justifyContent={"center"}
              alignItems={"center"}
            >
              Sign Up <MdOutlineKeyboardArrowDown />
            </Button>
          </List>
        </VStack> */}

        <VStack
          display={{ base: "none", md: "flex" }}
          justifyContent="center"
          alignItems="center"
        >
          <HStack spacing="16px" alignItems="center">
            <List display="flex" flexDirection="row" gap="16px">
              <ListItem fontWeight={600} fontSize="16px" fontFamily="heading">
                <Link href="/#how-it-works">How it Works</Link>
              </ListItem>

              <ListItem fontWeight={600} fontSize="16px" fontFamily="heading">
                <Link href="/#video-area">Video Area</Link>
              </ListItem>

              <ListItem fontWeight={600} fontSize="16px" fontFamily="heading">
                <Link href="/#testimonials">Testimonials</Link>
              </ListItem>

              <ListItem fontWeight={600} fontSize="16px" fontFamily="heading">
                <Link href="/contact-us">Contact</Link>
              </ListItem>
            </List>

            <SignUpDropdown triggerLabel="Sign Up" />

          </HStack>
        </VStack>

        {/* Mobile Icon */}
        <IconButton
          aria-label="Toggle Menu"
          icon={isOpen ? <FiX size={22} /> : <FiMenu size={22} />}
          display={{ base: "flex", md: "none" }}
          onClick={onToggle}
          variant="ghost"
        />
      </HStack>

      {/* Mobile Menu Overlay */}
      {isOpen && (
        <>
          {/* Backdrop */}
          <Box
            position="fixed"
            top="0"
            left="0"
            w="100vw"
            h="100vh"
            bg="rgba(0, 0, 0, 0.4)"
            zIndex={999}
            onClick={onToggle}
          />

          {/* Menu */}
          <Box
            position="fixed"
            top="0"
            left="0"
            right="0"
            bg="white"
            zIndex={1000}
            px="20px"
            pt="96px"
            pb="32px"
            borderBottomRadius="16px"
            display={{ base: "block", md: "none" }}
            animation="slideDown 0.25s ease-out"
          >
            <VStack spacing="20px" alignItems="center">
              <Link href="/#how-it-works" onClick={onToggle}>
                How it Works
              </Link>

              <Link href="/#video-area" onClick={onToggle}>
                Video Area
              </Link>

              <Link href="/#testimonials" onClick={onToggle}>
                Testimonials
              </Link>

              <Link href="/contact-us" onClick={onToggle}>
                Contact
              </Link>

              {/* Sign up – expandable same options as desktop */}
              <Box w="100%">
                <Box
                  as="button"
                  type="button"
                  w="100%"
                  py="10px"
                  textAlign="left"
                  fontWeight={600}
                  onClick={() => setMobileSignUpOpen((o) => !o)}
                  display="flex"
                  alignItems="center"
                  justifyContent="space-between"
                >
                  Sign up as?
                  <Box
                    as="span"
                    transform={mobileSignUpOpen ? "rotate(180deg)" : undefined}
                    transition="transform 0.2s"
                  >
                    <FiChevronRight />
                  </Box>
                </Box>
                {mobileSignUpOpen && (
                  <VStack align="stretch" spacing="8px" pl="16px" mt="8px">
                    <Box>
                      <Box
                        as="button"
                        type="button"
                        w="100%"
                        py="6px"
                        textAlign="left"
                        fontWeight={600}
                        fontSize="15px"
                        onClick={() =>
                          setMobileFindACleanerOpen((o) => !o)
                        }
                        display="flex"
                        alignItems="center"
                        justifyContent="space-between"
                      >
                        Find a Cleaner
                        <Box
                          as="span"
                          transform={
                            mobileFindACleanerOpen
                              ? "rotate(180deg)"
                              : undefined
                          }
                          transition="transform 0.2s"
                        >
                          <FiChevronRight />
                        </Box>
                      </Box>
                      {mobileFindACleanerOpen && (
                        <VStack align="stretch" spacing="4px" pl="12px" mt="4px">
                          <Link
                            href="/kyc/find-a-cleaner"
                            onClick={onToggle}
                            style={{ width: "100%" }}
                          >
                            <Text fontSize="14px" color="gray.600" py="6px">
                              Domestic Client
                            </Text>
                          </Link>
                          <Link
                            href="/kyc/business-client"
                            onClick={onToggle}
                            style={{ width: "100%" }}
                          >
                            <Text fontSize="14px" color="gray.600" py="6px">
                              Business Client
                            </Text>
                          </Link>
                        </VStack>
                      )}
                    </Box>
                    <Link
                      href="/kyc/become-a-cleaner"
                      onClick={onToggle}
                      style={{ width: "100%" }}
                    >
                      <Text fontWeight={600} fontSize="15px" py="6px">
                        Become a Cleaner
                      </Text>
                    </Link>
                  </VStack>
                )}
              </Box>
            </VStack>
          </Box>
        </>
      )}
    </Box>
  );
};

export default Navbar;
