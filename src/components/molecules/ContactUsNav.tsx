"use client";

import {
  Box,
  HStack,
  VStack,
  List,
  ListItem,
  IconButton,
  Collapse,
  useDisclosure,
} from "@chakra-ui/react";
import Image from "next/image";
import Link from "next/link";
import { FiMenu, FiX } from "react-icons/fi";

const ContactUsNav = () => {
  const { isOpen, onToggle } = useDisclosure();

  return (
    <Box>
      <HStack
        pl={{ base: "20px", md: "49.81px" }}
        pr={{ base: "20px", md: "50.19px" }}
        py="22px"
        justifyContent="space-between"
      >
        {/* Logo */}
        <Link href="/">
          <Image
            src="/images/Logo-white.png"
            alt="logo"
            height={100}
            width={100}
          />
        </Link>

        {/* Desktop Menu */}
        <VStack display={{ base: "none", md: "flex" }}>
          <List display="flex" flexDirection="row" gap="16px" color="white">
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

        {/* Mobile Hamburger / Close Icon */}
        <IconButton
          aria-label="Toggle Menu"
          icon={isOpen ? <FiX size={22} /> : <FiMenu size={22} />}
          display={{ base: "flex", md: "none" }}
          onClick={onToggle}
          variant="ghost"
          color="white"
        />
      </HStack>

      {/* Mobile Menu */}
      <Collapse in={isOpen} animateOpacity>
        <VStack
          px="20px"
          pb="24px"
          spacing="16px"
          alignItems="center"
          display={{ base: "flex", md: "none" }}
        >
          <Link
            href="/#how-it-works"
            onClick={onToggle}
            style={{ color: "white" }}
          >
            How it Works
          </Link>

          <Link
            href="/#video-area"
            onClick={onToggle}
            style={{ color: "white" }}
          >
            Video Area
          </Link>

          <Link
            href="/#testimonials"
            onClick={onToggle}
            style={{ color: "white" }}
          >
            Testimonials
          </Link>

          <Link
            href="/contact-us"
            onClick={onToggle}
            style={{ color: "white" }}
          >
            Contact
          </Link>
        </VStack>
      </Collapse>
    </Box>
  );
};

export default ContactUsNav;
