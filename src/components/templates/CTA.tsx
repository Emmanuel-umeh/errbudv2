import { Box, Heading, Image, Stack, Text, VStack } from "@chakra-ui/react";
import Link from "next/link";

const CTA = () => {
  return (
    <Stack w="full">
      <Box
        w={{ base: "100%", md: "1114px" }}
        h={{ base: "auto", md: "410px" }}
        py={{ base: "48px", md: "0" }}
        px={{ base: "20px", md: "0" }}
        backgroundImage="url('/images/CTA.png')"
        backgroundSize="cover"
        backgroundPosition="center"
        backgroundRepeat="no-repeat"
        borderRadius="24px"
        display={{ base: "none", md: "flex" }}
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
        w={{ base: "100%", md: "1114px" }}
        h={{ base: "100%", md: "410px" }}
        py={{ base: "80px", md: "0" }}
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
    </Stack>
  );
};

export default CTA;
