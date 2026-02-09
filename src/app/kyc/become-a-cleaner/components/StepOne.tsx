import {
  Box,
  Button,
  FormControl,
  Heading,
  Input,
  Text,
  VStack,
} from "@chakra-ui/react";
import { useState } from "react";

interface Props {
  defaultValues: {
    fullname: string;
  };
  onNext: (data: { fullname: string }) => void;
}

const StepOne = ({ defaultValues, onNext }: Props) => {
  const [firstName, setFirstName] = useState(() => {
    return defaultValues.fullname ? defaultValues.fullname.split(" ")[0] : "";
  });

  const [lastName, setLastName] = useState(() => {
    return defaultValues.fullname
      ? defaultValues.fullname.split(" ").slice(1).join(" ")
      : "";
  });

  const isValid = firstName.trim() && lastName.trim();

  const handleNext = () => {
    onNext({
      fullname: `${firstName} ${lastName}`,
    });
  };

  return (
    <VStack spacing="24px" w="100%">
      <VStack spacing="6px">
        <Heading fontSize="24px">Let’s Get to Know You</Heading>
        <Text fontSize="14px" color="gray.500" textAlign="center">
          Tell us your name so we can set up your Errbud account properly.
        </Text>
      </VStack>

      <VStack spacing="16px" w="100%" maxW="420px">
        <FormControl>
          <Box border="1px solid #E4E7EC" rounded="8px" p="10px">
            <Text fontSize="12px">First Name</Text>
            <Input
              variant="unstyled"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
            />
          </Box>
        </FormControl>

        <FormControl>
          <Box border="1px solid #E4E7EC" rounded="8px" p="10px">
            <Text fontSize="12px">Last Name</Text>
            <Input
              variant="unstyled"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
            />
          </Box>
        </FormControl>
      </VStack>

      <Box w="100%" maxW="420px" mt="112px" textAlign="right">
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
      </Box>
    </VStack>
  );
};

export default StepOne;
