"use client";

import {
  Box,
  Grid,
  GridItem,
  HStack,
  Icon,
  Image,
  Stack,
  Text,
} from "@chakra-ui/react";
import Link from "next/link";
import { FaInstagram, FaLinkedinIn, FaXTwitter } from "react-icons/fa6";

const Footer = () => {
  return (
    <Box
      bg="white"
      py="40px"
      px={{ base: 6, md: 20 }}
      position="relative"
      overflow="hidden"
    >
      {/* CONTENT LAYER */}
      <Box position="relative" zIndex={2}>
        {/* Top Section */}
        <Grid
          templateColumns={{ base: "1fr", md: "2fr 1fr 1fr 1fr 1fr" }}
          gap={"54px"}
        >
          {/* Brand */}
          <GridItem>
            <Stack spacing={4}>
              <Image
                src="/images/Errbud-logo-2.png"
                alt="Errbud logo"
                width="171px"
                height={"45.48px"}
              />

              <Text fontSize="16px" color="#1D2739" fontWeight={400}>
                Errbud connects homes and businesses <br /> with trained,
                verified cleaners. We make <br /> booking cleaning services
                simple, secure,
                <br /> and reliable.
              </Text>

              <HStack spacing={3}>
                <Image
                  src="/images/Play-store.png"
                  alt="Google Play"
                  height="40px"
                />
                <Image
                  src="/images/Apple-store.png"
                  alt="App Store"
                  height="40px"
                />
              </HStack>
            </Stack>
          </GridItem>

          {/* Quick Links */}
          <GridItem>
            <Stack spacing={3}>
              <Text fontSize="18px" fontWeight={600} color={"#1D2739"}>
                Quick Links
              </Text>

              <Link href="#" style={{ color: "#667185" }}>
                Home
              </Link>
              <Link href="#" style={{ color: "#667185" }}>
                How It Works
              </Link>
              <Link href="#" style={{ color: "#667185" }}>
                Testimonials
              </Link>
              <Link href="#" style={{ color: "#667185" }}>
                Contact
              </Link>
            </Stack>
          </GridItem>

          {/* Support */}
          <GridItem>
            <Stack spacing={3}>
              <Text fontSize="18px" fontWeight={600} color={"#1D2739"}>
                Support
              </Text>

              <Link href="#" style={{ color: "#667185" }}>
                Terms of Service
              </Link>
              <Link href="#" style={{ color: "#667185" }}>
                Privacy Policy
              </Link>
            </Stack>
          </GridItem>

          {/* Contact */}
          <GridItem>
            <Stack spacing={3}>
              <Text fontSize="18px" fontWeight={600} color={"#1D2739"}>
                Contact Us
              </Text>

              <Text fontSize="14px" color={"#667185"}>
                info@errbud.com
              </Text>
              <Text fontSize="14px" color={"#667185"}>
                errbud.com
              </Text>
            </Stack>
          </GridItem>

          {/* Socials */}
          <GridItem>
            <Stack spacing={3}>
              <Text fontSize="18px" fontWeight={600} color={"#1D2739"}>
                Socials
              </Text>

              <HStack gap={4}>
                <Icon
                  as={FaInstagram}
                  boxSize={5}
                  cursor="pointer"
                  color={"#667185"}
                />
                <Icon
                  as={FaXTwitter}
                  boxSize={5}
                  cursor="pointer"
                  color={"#667185"}
                />
                <Icon
                  as={FaLinkedinIn}
                  boxSize={5}
                  cursor="pointer"
                  color={"#667185"}
                />
              </HStack>
            </Stack>
          </GridItem>
        </Grid>

        {/* Bottom Section */}
        <Box mt={"104px"} textAlign="center">
          <Text fontSize="14px" color="#1D2739">
            © 2025 Errbud. All rights reserved.
          </Text>
        </Box>
      </Box>

      {/* Decorative Figures (BEHIND CONTENT) */}
      <Image
        src="/images/happy-figure-left.png"
        alt="Happy figure left"
        position="absolute"
        left={{ base: "-40px", md: "0" }}
        bottom={{ base: "400px", md: "40px" }}
        width="222.34px"
        height="250px"
        zIndex={1}
      />

      <Image
        src="/images/happy-figure-right.png"
        alt="Happy figure right"
        position="absolute"
        right={{ base: "-40px", md: "0" }}
        bottom={{ base: "80px", md: "40px" }}
        width="222.34px"
        height="250px"
        zIndex={1}
      />
    </Box>
  );
};

export default Footer;
