import {
  Box,
  Button,
  Heading,
  HStack,
  Stack,
  Text,
  VStack,
} from "@chakra-ui/react";
import { useState } from "react";

type CleaningCategory = "A" | "B";

interface Props {
  onNext: (data: { category: string }) => void;
  onBack: () => void;
}


const StepFour = ({ onNext, onBack }: Props) => {
  const [selectedCategory, setSelectedCategory] =
    useState<CleaningCategory | null>(null);

  const handleSelect = (category: CleaningCategory) => {
    setSelectedCategory(category);
  };

  return (
    <Stack w="100%" align="center" px={{ base: 4, md: 0 }}>
      <VStack spacing="24px" maxW="420px" w="100%">
        {/* Title */}
        <VStack spacing="6px" textAlign="center">
          <Heading fontSize="24px" fontWeight={600}>
            Cleaning Category
          </Heading>
          <Text fontSize="14px" color="gray.500">
            This helps us match you with the right jobs.
          </Text>
        </VStack>

        {/* Categories */}
        <VStack spacing="16px" w="100%">
          {/* Category A */}
          <Box
            w="100%"
            border="1px solid"
            borderColor={selectedCategory === "A" ? "#2970FF" : "#E4E7EC"}
            bg={selectedCategory === "A" ? "#EFF3FF" : "transparent"}
            rounded="8px"
            p="14px"
            cursor="pointer"
            onClick={() => handleSelect("A")}
            transition="all 0.2s ease"
          >
            <VStack align="flex-start" spacing="4px">
              <Text fontSize="18px" fontWeight={600}>
                Category A
              </Text>
              <Text fontSize="14px" color="gray.600">
                You provide your own cleaning materials.
              </Text>
            </VStack>
          </Box>

          {/* Category B */}
          <Box
            w="100%"
            border="1px solid"
            borderColor={selectedCategory === "B" ? "#2970FF" : "#E4E7EC"}
            bg={selectedCategory === "B" ? "#EFF3FF" : "transparent"}
            rounded="8px"
            p="14px"
            cursor="pointer"
            onClick={() => handleSelect("B")}
            transition="all 0.2s ease"
          >
            <VStack align="flex-start" spacing="4px">
              <Text fontSize="18px" fontWeight={600}>
                Category B
              </Text>
              <Text fontSize="14px" color="gray.600">
                You rely on the client to provide cleaning materials.
              </Text>
            </VStack>
          </Box>
        </VStack>

        {/* Buttons */}
        <HStack
          justifyContent="space-between"
          alignItems="center"
          w="100%"
          mt="48px"
        >
          <Button
            w="132px"
            h="48px"
            bg="#E4E7EC"
            rounded="full"
            onClick={onBack}
          >
            Back
          </Button>

          <Button
            w="132px"
            h="48px"
            bg={selectedCategory ? "#2970FF" : "#9F9F9F"}
            color="white"
            rounded="full"
            cursor={selectedCategory ? "pointer" : "not-allowed"}
            _hover={selectedCategory ? { bg: "#175CD3" } : undefined}
            isDisabled={!selectedCategory}
            onClick={() =>
              onNext({
                category: selectedCategory!,
              })
            }
          >
            Next
          </Button>
        </HStack>
      </VStack>
    </Stack>
  );
};

export default StepFour;
