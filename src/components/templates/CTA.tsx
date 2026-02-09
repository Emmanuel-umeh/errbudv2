import { Box, Heading, Image, Stack, Text, VStack } from "@chakra-ui/react";
import Link from "next/link";

const CTA = () => {
  return (
    <Stack w="100%" px={{ base: "16px", md: "40px", lg: "163px" }}>
      {/* desktop */}
      <Box
        w={{ base: "100%", md: "100%", lg: "100%" }}
        h={{ base: "auto", md: "380px", lg: "440px" }}
        pt={{ base: "0", md: "65px" }}
        backgroundImage="url('/images/CTA.png')"
        backgroundSize="cover"
        backgroundPosition="center"
        backgroundRepeat="no-repeat"
        borderRadius="24px"
        display={{ base: "none", md: "flex" }}
        justifyContent="center"
      >
        <VStack textAlign="center">
          <Heading
            color="white"
            fontSize={{ base: "22px", md: "32px", lg: "36px" }}
            lineHeight={{ base: "1.3", md: "1.2" }}
          >
            Cleaning Help Is One Tap Away
          </Heading>

          <Text
            color="#E4E7EC"
            fontSize={{ base: "14px", md: "15px", lg: "16px" }}
            maxW={{ base: "100%", md: "520px", lg: "100%" }}
          >
            Get the Errbud app to book cleaners, track appointments, manage
            <Box as="br" display={{ base: "none", md: "block" }} />
            business contracts, and enjoy a seamless cleaning experience built
            <Box as="br" display={{ base: "none", md: "block" }} />
            for simplicity and trust.
          </Text>

          <Box
            display="flex"
            flexDirection={"row"}
            alignItems="center"
            justifyContent="center"
            pt="32px"
            gap="16px"
          >
            <Link href="/">
              <Image
                src="/images/Play-store.png"
                alt="store"
                h="40px"
                w="128px"
              />
            </Link>

            <Link href="/">
              <Image
                src="/images/Apple-store.png"
                alt="store"
                h="40px"
                w="128px"
              />
            </Link>
          </Box>
        </VStack>
      </Box>

      {/* Mobile */}
      <Box
        w="100%"
        h="auto"
        py={{ base: "56px", md: "0" }}
        px={{ base: "20px", md: "0" }}
        backgroundImage="url('/images/cta-banner.png')"
        backgroundSize="cover"
        backgroundPosition="center"
        backgroundRepeat="no-repeat"
        borderRadius="24px"
        display={{ base: "flex", md: "none" }}
        alignItems="center"
        justifyContent="center"
      >
        <VStack spacing="12px" maxW="700px" textAlign="center">
          <Heading color="white" fontSize={{ base: "20px", md: "36px" }}>
            Cleaning Help Is One Tap Away
          </Heading>

          <Text color="#E4E7EC" fontSize={{ base: "14px", md: "16px" }}>
            Get the Errbud app to book cleaners, track appointments, manage
            <Box as="br" display={{ base: "none", md: "block" }} />
            business contracts, and enjoy a seamless cleaning experience built
            <Box as="br" display={{ base: "none", md: "block" }} />
            for simplicity and trust.
          </Text>

          <Box
            display="flex"
            flexDirection={{ base: "row", md: "row" }}
            justifyContent="center"
            pt={{ base: "24px", md: "32px" }}
            gap="16px"
          >
            <Link href="/">
              <Image
                src="/images/Play-store.png"
                alt="store"
                h="40px"
                w="128px"
              />
            </Link>

            <Link href="/">
              <Image
                src="/images/Apple-store.png"
                alt="store"
                h="40px"
                w="128px"
              />
            </Link>
          </Box>
        </VStack>
      </Box>
    </Stack>
  );
};

export default CTA;
