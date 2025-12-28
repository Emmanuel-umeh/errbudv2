// components/TestimonialCard.tsx
import { Box, Text, HStack, VStack } from "@chakra-ui/react";

interface Props {
  name: string;
  message: string;
}

const TestimonialCard = ({ name, message }: Props) => {
  return (
    <Box bg="white" p={5} rounded="15px" shadow="sm" w="full">
      <Text fontSize="sm" color="gray.600" mb={4}>
        “{message}”
      </Text>

      <HStack spacing={3}>
        <VStack align="start" spacing={0}>
          <Text fontWeight="medium">-{name}</Text>
        </VStack>
      </HStack>
    </Box>
  );
};
export default TestimonialCard;
