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
              {" "}
              <Image
                src={"/images/Apple-store.png"}
                alt="store"
                height={"40px"}
                width={"120px"}
              />
            </Link>
          </Box>
        </Box>
      </VStack>

      {/* image */}
      <Image
        src="/images/hero-img.png"
        alt="hero image"
        width={"100%"}
        height={"100%"}
      />

      {/* How it works */}

      <Box mt={{ base: "10px", md: "83.92px" }} position="relative">
        {/* Decorative vector images scattered around */}
        <Image
          src="/images/left-star.png"
          alt="star left"
          position="absolute"
          top={"20px"}
          left="60px"
          width="87.13px"
          height="112.61px"
          display={{ base: "none", md: "block" }}
        />
        <Image
          src="/images/left-ellipse.png"
          alt="left ellipse"
          position="absolute"
          top={{ base: "350px", md: "290px" }}
          left="0px"
          width={{ base: "100px", md: "250px" }}
          height={{ base: "300px", md: "400px" }}
          zIndex={3}
        />

        {/* Video star Desktp */}
        <Image
          src="/images/video-star.png"
          alt="video star"
          position="absolute"
          bottom={{ base: "", md: "650px" }}
          top={{ base: "720px", md: "" }}
          right={{ base: "260px", md: "" }}
          left={{ base: "", md: "472px" }}
          width="126.81px"
          height="99.39px"
          display={{ base: "block", md: "none" }}
        />

        {/* Video star Mobile */}
        <Image
          src="/images/video-star.png"
          alt="video star"
          position="absolute"
          bottom="650px"
          left="472px"
          width="126.81px"
          height="99.39px"
          display={{ base: "none", md: "block" }}
        />

        {/* Single Star mobile */}

        <Image
          src="/images/single-star.png"
          alt="single star"
          position="absolute"
          bottom={{ base: "", md: "650px" }}
          right={{ base: "", md: "472px" }}
          top={{ base: "720px", md: "" }}
          left={{ base: "300px", md: "" }}
          width="57.58px"
          height="57.58px"
          display={{ base: "block", md: "none" }}
        />

        {/* Single star Desktop */}

        <Image
          src="/images/single-star.png"
          alt="single star"
          position="absolute"
          bottom="650px"
          right="472px"
          width="57.58px"
          height="57.58px"
          display={{ base: "none", md: "block" }}
        />

        <Image
          src="/images/right-ellipse.png"
          alt="right ellipse"
          position="absolute"
          bottom="750px"
          right="0px"
          width="300px"
          height="400px"
          display={{ base: "none", md: "block" }}
        />

        {/* Main content */}
        <SimpleGrid
          columns={{ base: 1, md: 2 }}
          px={{ base: "16px", md: "163px" }}
          id="how-it-works"
        >
          <Box>
            <Image
              src="/images/left-star.png"
              alt="star left"
              width="87.13px"
              height="112.61px"
              display={{ base: "block", md: "none" }}
            />

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
              fontSize={{ base: "24px", md: "36px" }}
              lineHeight={{ base: "120%", md: "normal" }}
              mb="8px"
            >
              Your Go-To Platform for
              <Box as="br" display={{ base: "none", md: "block" }} />
              Trusted Cleaning Services
            </Heading>

            <Text
              fontWeight={500}
              fontSize={{ base: "14px", md: "18px" }}
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
            pt="45px"
            position="relative" // 👈 VERY IMPORTANT
            zIndex={{ base: 10, md: "auto" }}
          >
            <Image
              src="/images/hero-image-2.png"
              alt="hero image"
              height={{ base: "267.84px", md: "370px" }}
              width={{ base: "367.57px", md: "507.78px" }}
            />
          </Box>
        </SimpleGrid>

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
            spacing="33px"
            mt={{ base: "32px", md: "40px" }}
          >
            <Box>
              <Image
                src="/images/cleaning-1.png"
                alt="cleaning image"
                height="432px"
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
                width="349px"
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
                height="432px"
                width="349px"
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
        bg={"#EFF3FF"}
        mt={"54px"}
        py={"63.97px"}
        px={{ base: "16px", md: "163px" }}
        style={{ borderRadius: "47% 100% 53% 48% / 6% 12% 10% 14% " }}
        id="testimonials"
      >
        <SimpleGrid columns={{ base: 1, md: 2 }}>
          <Center>
            <Box>
              <Text
                fontSize={{ base: "14px", md: "16px" }}
                fontWeight={500}
                color={"primary"}
              >
                TESTIMONIAL
              </Text>

              <Heading
                color={"#1D2739"}
                fontWeight={600}
                fontSize={{ base: "24px", md: "36px" }}
                mb={"8px"}
              >
                Trusted by Homes & Businesses
              </Heading>

              {/* For Desktop */}
              <Text
                fontWeight={500}
                fontSize={"18px"}
                color={"#667185"}
                lineHeight={"145%"}
                display={{ base: "none", md: "block" }}
              >
                From busy professionals to families and businesses, <br />
                people choose Errbud for its reliability, professionalism,
                <br /> and ease of use.
              </Text>

              {/* For Mobile */}
              <Text
                fontWeight={400}
                fontSize={"14px"}
                color={"#667185"}
                lineHeight={"145%"}
                display={{ base: "block", md: "none" }}
              >
                From busy professionals to families and businesses, <br />
                people choose Errbud for its reliability, <br />
                professionalism, and ease of use.
              </Text>
            </Box>
          </Center>

          <Box pt={{ base: "37px", md: "" }}>
            <TestimonialScroller />
          </Box>
        </SimpleGrid>
      </Box>

      {/* CTA */}
      <Box
        position="relative"
        px={{ base: "16px", md: "163px" }}
        mt="79px"
        py={{ base: "48px", md: "89px" }}
      >
        {/* Left star */}
        <Image
          src="/images/left-star.png"
          alt="star left"
          position="absolute"
          display={{ base: "none", md: "block" }}
          bottom="400px"
          left="30px"
          width="84.07px"
          height="108.65px"
        />

        {/* Right star */}
        <Image
          src="/images/right-star.png"
          alt="star right"
          position="absolute"
          display={{ base: "none", md: "block" }}
          top="43%"
          right="90px"
          width="102.56px"
          height="132.54px"
        />

        <CTA />
      </Box>

      <Footer />
    </Stack>
  );
}
