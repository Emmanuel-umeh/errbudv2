"use client";

import {
  Box,
  HStack,
  VStack,
  Image,
  List,
  ListItem,
  IconButton,
  Collapse,
  useDisclosure,
} from "@chakra-ui/react";
import Link from "next/link";
import { FiMenu, FiX } from "react-icons/fi";

const Navbar = () => {
  const { isOpen, onToggle } = useDisclosure();

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
        <VStack display={{ base: "none", md: "flex" }}>
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
            </VStack>
          </Box>
        </>
      )}
    </Box>
  );
};

export default Navbar;
