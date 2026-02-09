import {
  Box,
  Button,
  Checkbox,
  Heading,
  HStack,
  Stack,
  Text,
  VStack,
} from "@chakra-ui/react";
import { useState } from "react";
import { BusinessKycData } from "../page";

const materials = [
  "Vacuum cleaner",
  "Mop",
  "Bucket",
  "Bathroom cleaner",
  "Toilet cleaner",
];

interface StepThreeData {
  materials_provision: "yes" | "no" | "partial";
  selectedMaterials: string[];
}

interface Props {
  defaultValues: BusinessKycData;
  onNext: (data: StepThreeData) => void;
  onBack: () => void;
}

const StepThree = ({ defaultValues, onNext, onBack }: Props) => {
  const [selection, setSelection] = useState<
    "yes" | "no" | "partial" | ""
  >(defaultValues.materials_provision || "");

  const [selectedMaterials, setSelectedMaterials] = useState<string[]>(
    defaultValues.selectedMaterials || []
  );

  const handleCheckboxChange = (item: string) => {
    setSelectedMaterials((prev) =>
      prev.includes(item)
        ? prev.filter((i) => i !== item)
        : [...prev, item]
    );
  };

  const isValid =
    selection === "yes" ||
    selection === "no" ||
    (selection === "partial" && selectedMaterials.length > 0);

 const handleNext = () => {
  onNext({
    materials_provision: selection as "yes" | "no" | "partial",
    selectedMaterials:
      selection === "partial"
        ? selectedMaterials
        : ["none"],
  });
};

  return (
    <Stack w="100%" align="center">
      <VStack spacing="32px" maxW="520px" w="100%">
        {/* Title */}
        <VStack spacing="6px" textAlign="center">
          <Heading fontSize="24px" fontWeight={600}>
            Do You Have Cleaning Materials On-Site?
          </Heading>
          <Text fontSize="14px" color="gray.500">
            Let us know if your facility provides cleaning materials or if our
            Errbuddies need to bring their own equipment.
          </Text>
        </VStack>

        {/* Options */}
        <Stack spacing="12px" w="100%">
          <Button
            variant="outline"
            justifyContent="flex-start"
            borderColor={selection === "yes" ? "#2970FF" : "#E4E7EC"}
            bg={selection === "yes" ? "#F0F7FF" : "white"}
            onClick={() => setSelection("yes")}
          >
            Yes (we provide everything)
          </Button>

          <Button
            variant="outline"
            justifyContent="flex-start"
            borderColor={selection === "no" ? "#2970FF" : "#E4E7EC"}
            bg={selection === "no" ? "#F0F7FF" : "white"}
            onClick={() => setSelection("no")}
          >
            No (we rely on Errbud to supply materials)
          </Button>

          <Button
            variant="outline"
            justifyContent="flex-start"
            borderColor={selection === "partial" ? "#2970FF" : "#E4E7EC"}
            bg={selection === "partial" ? "#F0F7FF" : "white"}
            onClick={() => setSelection("partial")}
          >
            Partially (some items available)
          </Button>
        </Stack>

        {/* Checkbox list */}
        {selection === "partial" && (
          <Box
            w="100%"
            maxH="160px"
            overflowY="auto"
            border="1px solid #E4E7EC"
            rounded="12px"
            px="16px"
            py="12px"
          >
            <VStack align="flex-start" spacing="10px">
              {materials.map((item) => (
                <Checkbox
                  key={item}
                  isChecked={selectedMaterials.includes(item)}
                  onChange={() => handleCheckboxChange(item)}
                >
                  {item}
                </Checkbox>
              ))}
            </VStack>
          </Box>
        )}

        {/* Navigation */}
        <HStack w="100%" justifyContent="space-between" pt="48px">
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
            bg="#2970FF"
            color="white"
            rounded="full"
            isDisabled={!isValid}
            onClick={handleNext}
          >
            Next
          </Button>
        </HStack>
      </VStack>
    </Stack>
  );
};

export default StepThree;
