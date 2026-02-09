import { HStack, Box } from "@chakra-ui/react";

interface Props {
  step: number;
}

const steps = [1, 2, 3, 4, 5,];

const KycStepper = ({ step }: Props) => {
  return (
    <HStack spacing="8px" justify="center">
      {steps.map((item) => (
        <Box
          key={item}
          w={{ base: "32px", md: "64px" }}
          h="8px"
          bg={item <= step ? "blue.500" : "gray.200"}
          borderRadius="full"
          transition="all 0.3s"
        />
      ))}
    </HStack>
  );
};

export default KycStepper;
