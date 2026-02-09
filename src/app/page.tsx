import Footer from "@/components/molecules/Footer";
import Navbar from "@/components/molecules/Navbar";
import CTA from "@/components/templates/CTA";
import TestimonialScroller from "@/components/templates/TestimonialScroller";

import {
  Box,
  Center,
  Heading,
  Image,
  SimpleGrid,
  Stack,
  Text,
  VStack,
} from "@chakra-ui/react";
import Link from "next/link";

import SignUpDropdown from "@/components/molecules/SignUpDropdown";

export default function Home() {
  return (
    <Stack>
      {/* Navbar Section*/}
      <Navbar />

      {/* Banner Section */}
      <VStack>
        <Box
          width={{ base: "100%", md: "703px" }}
          height={{ base: "100%", md: "320px" }}
          mt={"52px"}
          textAlign={"center"}
          px={{ base: "16px", md: "" }}
        >
          <Heading
            fontWeight={600}
            fontSize={{ base: "32px", md: "56px" }}
            color={"#1D2739"}
            lineHeight={{ base: "120%", md: "100%" }}
          >
            <span style={{ color: "#4A90E2" }}>Cleaning</span> Made Simple.
            Reliable Help, Anytime.
          </Heading>

          <Text
            fontWeight={400}
            fontSize={{ base: "14px", md: "20px" }}
            textAlign={"center"}
            pr={{ base: "", md: "50px" }}
            color={"#1D2739"}
            pt={"24px"}
            lineHeight={"145%"}
          >
            Errbud connects you with trained, verified, and professional
            cleaners right when you need them. Fast booking, transparent
            pricing, and a clean space without the stress.
          </Text>

          <Box
            display={"flex"}
            flexDirection={"row"}
            alignItems={"center"}
            justifyContent={"center"}
            pt={"32px"}
            gap={"24px"}
          >
            <Link href={"/"}>
              <Image
                src={"/images/Play-store.png"}
                alt="store"
                height={"40px"}
                width={"120px"}
              />
            </Link>
            <Link href={"/"}>
              <Image
                src={"/images/Apple-store.png"}
                alt="store"
                height={"40px"}
                width={"120px"}
              />
            </Link>

            {/* Button */}
            {/* <Button
              rounded="full"
              display="flex"
              alignItems="center"
              gap="4px"
              h="47px"
              px="16px"
              bg={"#4A90E2"}
              color={"white"}
            >
              Try our services
              <MdOutlineKeyboardArrowDown
                style={{ width: "16px", height: "16px" }}
              />
            </Button> */}

            <SignUpDropdown triggerLabel="Try our services" placement="bottom" />
          </Box>
        </Box>
      </VStack>

      {/* Hero image */}
      <Image
        src="/images/banner-new.png"
        alt="hero image"
        width={"100%"}
        height={"100%"}
        style={{
          borderRadius: "0% 0% 71% 71% / 10% 10% 12% 12% ",
        }}
      />

      {/* How it works */}

      <Box mt={{ base: "10px", md: "83.92px" }} position="relative">
        {/* Decorative vector images scattered around */}
        <Image
          src="/images/how-it-work-star.png"
          alt="star left"
          position="absolute"
          top={"20px"}
          left="40px"
          width={{ base: "120px", md: "114px" }}
          height={{ base: "120px", md: "110px" }}
          display={{ base: "none", md: "none", lg: "block" }}
        />
        <Image
          src="/images/left-ellipse.png"
          alt="left ellipse"
          position="absolute"
          top={{ base: "350px", md: "290px" }}
          left="0px"
          width={{ base: "100px", md: "100px", lg: "250px" }}
          height={{ base: "300px", md: "200px", lg: "400px" }}
        />

        {/* Video star desktop */}
        <Image
          src="/images/video-star.png"
          alt="video star"
          position="absolute"
          bottom={{ base: "", md: "495px", lg: "602px" }}
          left={{ base: "", md: "90px", lg: "300px", xl: "400px" }}
          width={{ base: "", md: "120px", lg: "130px" }}
          height={{ base: "", md: "120px", lg: "130px" }}
          display={{ base: "none", md: "block", lg: "block" }}
        />

        {/* Video star mobile */}
        <Image
          src="/images/video-star.png"
          alt="video star"
          position="absolute"
          top="660px"
          right="258px"
          width="110px"
          height="100px"
          display={{ base: "block", md: "none" }}
        />

        {/* Single Star mobile */}
        <Image
          src="/images/single-star.png"
          alt="single star"
          position="absolute"
          top="670px"
          left="300px"
          width="57.58px"
          height="57.58px"
          display={{ base: "block", md: "none" }}
        />

        {/* Single star Desktop */}

        <Image
          src="/images/single-star.png"
          alt="single star"
          position="absolute"
          bottom={{ base: "", md: "500px", lg: "630px" }}
          right={{ base: "", md: "110px", lg: "320px", xl: "475px" }}
          width={{ base: "50px", md: "50px", lg: "57.58px" }}
          height={{ base: "50px", md: "50px", lg: "57.58px" }}
          display={{ base: "none", md: "block", lg: "block" }}
        />

        <Image
          src="/images/right-ellipse.png"
          alt="right ellipse"
          position="absolute"
          bottom={{ base: "", md: "0px", lg: "750px" }}
          top={{ base: "", md: "190px", lg: "" }}
          right={{ base: "", md: "0px", lg: "0px" }}
          width={{ base: "", md: "140px", lg: "300px" }}
          height={{ base: "", md: "200px", lg: "400px" }}
          display={{ base: "none", md: "block" }}
        />

        {/* Main content */}
        <Box>
          <Image
            src="/images/left-star.png"
            alt="star left"
            width={{ base: "80px", md: "90px", lg: "100px" }}
            height={{ base: "80px", md: "90px", lg: "100px" }}
            display={{ base: "block", md: "block", lg: "none" }}
          />

          <SimpleGrid
            columns={{ base: 1, md: 2 }}
            px={{ base: "16px", md: "16px", lg: "163px" }}
            id="how-it-works"
          >
            <Box position="relative" zIndex={{ base: "", md: "auto", lg: "" }}>
              <Text
                fontSize={{ base: "14px", md: "16px" }}
                fontWeight={500}
                color="primary"
              >
                HOW IT WORKS
              </Text>

              <Heading
                color="#1D2739"
                fontWeight={600}
                fontSize={{ base: "24px", md: "24px", lg: "36px" }}
                lineHeight={{ base: "120%", md: "normal" }}
                mb="8px"
              >
                Your Go-To Platform for
                <Box as="br" display={{ base: "none", md: "block" }} />
                Trusted Cleaning Services
              </Heading>

              <Text
                fontWeight={500}
                fontSize={{ base: "12px", md: "14px", lg: "18px" }}
                color="#667185"
                lineHeight="145%"
              >
                Errbud is a modern cleaning service platform that{" "}
                <Box as="br" display={{ base: "none", md: "block" }} />
                connects everyday users and businesses to qualified{" "}
                <Box as="br" display={{ base: "none", md: "block" }} />
                and verified cleaners—called Errbuddies. Whether it’s{" "}
                <Box as="br" display={{ base: "none", md: "block" }} />
                your home, office, restaurant, school, or short-let
                <Box as="br" display={{ base: "none", md: "block" }} />
                apartment, Errbud makes it easy to book and manage{" "}
                <Box as="br" display={{ base: "none", md: "block" }} />
                cleaning services from your phone.
              </Text>
            </Box>

            <Box
              pt={{ base: "45px", md: "", lg: "45px" }}
              position="relative"
              zIndex={{ base: 10, md: "auto" }}
            >
              <Image
                src="/images/hero-image-2.png"
                alt="hero image"
                height={{ base: "267.84px", md: "100%", lg: "370px" }}
                width={{ base: "367.57px", md: "100%", lg: "507.78px" }}
              />
            </Box>
          </SimpleGrid>
        </Box>

        {/* Video area */}
        <VStack mt="64px" pt="54px" id="video-area">
          <Text
            fontWeight={500}
            fontSize={{ base: "14px", md: "16px" }}
            color="primary"
          >
            VIDEO AREA
          </Text>

          <Heading
            fontWeight={600}
            fontSize={{ base: "24px", md: "36px" }}
            color="#1D2739"
          >
            See Errbud in Action
          </Heading>

          {/* desktop text */}

          <Text
            fontWeight={500}
            fontSize={{ base: "14px", md: "18px" }}
            color="#1D2739"
            textAlign="center"
            display={{ base: "none", md: "block" }}
          >
            Watch our short videos to see how Errbud is redefining <br />
            cleaning services—simple, fast, and trusted.
          </Text>

          {/* Mobile text */}
          <Text
            fontWeight={500}
            fontSize={{ base: "14px", md: "18px" }}
            color="#1D2739"
            textAlign="center"
            display={{ base: "block", md: "none" }}
          >
            Watch our short videos to see how Errbud is <br /> redefining
            cleaning services—simple, fast, and <br /> trusted.
          </Text>

          <SimpleGrid
            columns={{ base: 1, md: 3 }}
            spacing={{ base: "33px", md: "20px", lg: "33px" }}
            mt={{ base: "32px", md: "40px" }}
          >
            <Box>
              <Image
                src="/images/cleaning-1.png"
                alt="cleaning image"
                height={{ base: "", md: "", lg: "432px" }}
                rounded="md"
                transition="all 0.3s ease"
                _hover={{
                  transform: "scale(1.05)",
                  boxShadow: "xl",
                }}
              />
            </Box>

            <Box pt={{ base: "", md: "60px" }}>
              <Image
                src="/images/cleaning-2.png"
                alt="cleaning image"
                width={{ base: "", md: "", lg: "349px" }}
                rounded="md"
                transition="all 0.3s ease"
                _hover={{
                  transform: "scale(1.05)",
                  boxShadow: "xl",
                }}
              />
            </Box>

            <Box pt={{ base: "", md: "105px" }}>
              <Image
                src="/images/cleaning-3.png"
                alt="cleaning image"
                height={{ base: "", md: "", lg: "432px" }}
                width={{ base: "", md: "", lg: "349px" }}
                rounded="md"
                transition="all 0.3s ease"
                _hover={{
                  transform: "scale(1.05)",
                  boxShadow: "xl",
                }}
              />
            </Box>
          </SimpleGrid>
        </VStack>
      </Box>

      {/* Testimonials */}

      <Box
        bg="#EFF3FF"
        mt="54px"
        py="63.97px"
        px={{
          base: "16px", // mobile
          md: "48px", // tablets
          lg: "96px", // small laptops
          xl: "163px", // large screens (original)
        }}
        style={{ borderRadius: "47% 100% 53% 48% / 6% 12% 10% 14%" }}
        id="testimonials"
      >
        <SimpleGrid
          columns={{ base: 1, lg: 2 }} // 2 columns only on laptops+
          spacing={{ base: "32px", lg: "0" }}
        >
          <Center>
            <Box>
              <Text
                fontSize={{ base: "14px", md: "16px" }}
                fontWeight={500}
                color="primary"
              >
                TESTIMONIAL
              </Text>

              <Heading
                color="#1D2739"
                fontWeight={600}
                fontSize={{ base: "24px", md: "28px", lg: "36px" }}
                mb="8px"
              >
                Trusted by Homes & Businesses
              </Heading>

              {/* Desktop */}
              <Text
                fontWeight={500}
                fontSize="18px"
                color="#667185"
                lineHeight="145%"
                display={{ base: "none", lg: "block" }}
              >
                From busy professionals to families and businesses, <br />
                people choose Errbud for its reliability, professionalism,
                <br /> and ease of use.
              </Text>

              {/* Mobile / Tablet */}
              <Text
                fontWeight={400}
                fontSize="14px"
                color="#667185"
                lineHeight="145%"
                display={{ base: "block", lg: "none" }}
              >
                From busy professionals to families and businesses, <br />
                people choose Errbud for its reliability, <br />
                professionalism, and ease of use.
              </Text>
            </Box>
          </Center>

          <Box pt={{ base: "37px", lg: "0" }} position="relative">
            {/* Top fade overlay */}
            <Box
              position="absolute"
              top="0"
              left="0"
              right="0"
              h="80px"
              zIndex={2}
              pointerEvents="none"
              bgGradient="linear(to-b, #EFF3FF 0%, rgba(239,243,255,0) 100%)"
            />

            <TestimonialScroller />

            {/* Bottom fade overlay */}
            <Box
              position="absolute"
              bottom="0"
              left="0"
              right="0"
              h="80px"
              zIndex={2}
              pointerEvents="none"
              bgGradient="linear(to-t, #EFF3FF 0%, rgba(239,243,255,0) 100%)"
            />
          </Box>
        </SimpleGrid>
      </Box>

      {/* CTA */}

      <Box position="relative" mt={"79px"} mb={{ base: "60px", md: "89px" }}>
        <Image
          src="/images/left-star.png"
          alt="star left"
          position="absolute"
          display={{ base: "none", md: "none", lg: "block" }}
          top="20px"
          left="25px"
          width="130px"
          height="125px"
        />

        <Image
          src="/images/right-star.png"
          alt="star right"
          position="absolute"
          display={{ base: "none", md: "none", lg: "block" }}
          top="50%"
          transform="translateY(-50%)"
          right="30px"
          width="130px"
          height="125px"
        />
        <CTA />
      </Box>

      <Footer />
    </Stack>
  );
}
