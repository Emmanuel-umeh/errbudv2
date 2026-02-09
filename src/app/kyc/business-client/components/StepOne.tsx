import {
  Box,
  Button,
  Heading,
  Input,
  SimpleGrid,
  Text,
  VStack,
} from "@chakra-ui/react";
import { useState } from "react";

interface StepOneData {
  facility_type: string;
  custom_facility_type?: string;
}

interface Props {
  onNext: (data: StepOneData) => void;
  defaultValues?: {
    facility_type?: string;
  };
}

const facilities = [
  "Restaurant",
  "School",
  "Hospital",
  "Construction Site",
  "Office",
  "Retail Store",
  "Service Apartment",
  "Warehouse",
  "Other",
];

const StepOne = ({ onNext }: Props) => {
  const [selected, setSelected] = useState<string>("Office");
  const [otherValue, setOtherValue] = useState<string>("");

  const isValid =
    selected !== "Other" || (selected === "Other" && otherValue.trim() !== "");

  return (
    <VStack spacing="32px" w="100%">
      {/* Title */}
      <VStack width={"500px"} spacing={"40px"}>
        <VStack spacing="8px">
          <Heading fontSize="24px" fontWeight="600" textAlign="center">
            Tell Us About Your Facility
          </Heading>
          <Text
            fontSize="14px"
            color="gray.500"
            textAlign="center"
            maxW="420px"
          >
            Choose the type of facility that requires cleaning. This helps us
            assign the right team with the right expertise.
          </Text>
        </VStack>

        {/* Facility Options */}
        <SimpleGrid
          columns={{ base: 2, md: 4 }}
          spacing="15px"
          maxW="520px"
          w="100%"
        >
          {facilities.map((item) => {
            const isActive = selected === item;

            return (
              <Button
                key={item}
                px="14px"
                py="8px"
                h="auto"
                borderRadius="8px"
                fontSize="13px"
                fontWeight={500}
                border="1px solid"
                borderColor={isActive ? "#2970FF" : "#E4E7EC"}
                bg={isActive ? "#2970FF" : "#F9FAFB"}
                color={isActive ? "white" : "gray.700"}
                _hover={{
                  borderColor: "#2970FF",
                  bg: isActive ? "#2970FF" : "#F0F7FF",
                }}
                _active={{ transform: "scale(0.98)" }}
                onClick={() => setSelected(item)}
              >
                {item}
              </Button>
            );
          })}
        </SimpleGrid>

        {/* Other input (shows only when "Other" is selected) */}
        {selected === "Other" && (
          <Box w="100%">
            <Box border="1px solid #E4E7EC" rounded="8px" px="12px" py="10px">
              <Text mb={1} fontSize="12px" color="gray.500">
                Please specify
              </Text>
              <Input
                variant="unstyled"
                placeholder="Enter facility type"
                value={otherValue}
                onChange={(e) => setOtherValue(e.target.value)}
              />
            </Box>
          </Box>
        )}

        {/* Next Button */}
        <Box
          w="100%"
          display="flex"
          justifyContent="flex-end"
          alignItems="center"
        >
          <Button
            mt="48px"
            w={{ base: "100%", md: "160px" }}
            h="48px"
            bg="#2970FF"
            color="white"
            rounded="full"
            isDisabled={!isValid}
            onClick={() =>
              onNext(
                selected === "Other"
                  ? {
                      facility_type: "Other",
                      custom_facility_type: otherValue,
                    }
                  : {
                      facility_type: selected,
                      custom_facility_type: "",
                    },
              )
            }
          >
            Next
          </Button>
        </Box>
      </VStack>
    </VStack>
  );
};

export default StepOne;
