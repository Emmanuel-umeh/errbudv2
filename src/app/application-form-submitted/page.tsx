import {
  Box,
  Button,
  Heading,
  HStack,
  Image,
  Stack,
  Text,
  VStack,
} from "@chakra-ui/react";

const Page = () => {
  return (
    <Stack minH="100vh" align="center" justify="center" px="16px">
      <VStack spacing="32px" textAlign="center">
        {/* Illustration */}
        <Box>
          <Image
            src="/images/success.png"
            alt="Account Ready"
            maxW={{ base: "160px", md: "220px" }}
            mx="auto"
          />
        </Box>

        {/* Text */}
        <VStack spacing="12px">
          <Heading fontSize={{ base: "20px", md: "24px" }} fontWeight="600">
            Your Account Is Ready!
          </Heading>

          <Text fontSize="14px" color="gray.500" maxW="420px" lineHeight="1.6">
            To continue, please download the mobile app from the stores below to
            access your dashboard.
          </Text>
        </VStack>

        {/* Store Buttons */}
        <HStack spacing="12px">
          <Button
            variant="unstyled"
            _hover={{ transform: "translateY(-2px)" }}
            transition="0.2s"
          >
            <Image src="/images/play-store.png" alt="Google Play" h="40px" />
          </Button>

          <Button
            variant="unstyled"
            _hover={{ transform: "translateY(-2px)" }}
            transition="0.2s"
          >
            <Image src="/images/Apple-store.png" alt="App Store" h="40px" />
          </Button>
        </HStack>
      </VStack>
    </Stack>
  );
};

export default Page;
