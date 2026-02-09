import {
  Box,
  Button,
  FormControl,
  Heading,
  HStack,
  Input,
  Stack,
  Text,
  VStack,
} from "@chakra-ui/react";
import { useState } from "react";

interface StepTwoData {
  email: string;
  phone: string;
}

interface Props {
  defaultValues: {
    email: string;
    phone: string;
  };
  onNext: (data: StepTwoData) => void;
  onBack: () => void;
}

const StepTwo = ({ defaultValues, onNext, onBack }: Props) => {
  const [email, setEmail] = useState(defaultValues.email || "");
  const [phone, setPhone] = useState(defaultValues.phone || "");

  const isValid = email.trim() !== "" && phone.trim() !== "";

  const normalizeEmail = (value: string) => {
    return value
      .trim() // remove leading & trailing spaces
      .replace(/\s+/g, "") // remove ALL spaces inside
      .toLowerCase(); // emails are case-insensitive
  };

  const normalizePhone = (value: string) => {
    return value.replace(/\s+/g, "");
  };

  const handleNext = () => {
    onNext({
      email,
      phone,
    });
  };

  return (
    <Stack>
      <VStack spacing="24px">
        {/* Title */}
        <VStack spacing="6px">
          <Heading fontSize="24px" fontWeight={600}>
            How Can We Reach You?
          </Heading>
          <Text fontSize="14px" color="gray.500" textAlign="center">
            Add your contact details so we can verify your account and keep you
            updated about your bookings.
          </Text>
        </VStack>

        {/* Form */}
        <VStack spacing="16px" w="100%" maxW="420px">
          <FormControl>
            <Box border="1px solid #E4E7EC" rounded="8px" p="10px">
              <Text fontSize="12px">Email</Text>
              <Input
                variant="unstyled"
                placeholder="example@email.com"
                value={email}
                onChange={(e) => setEmail(normalizeEmail(e.target.value))}
              />
            </Box>
          </FormControl>

          <FormControl>
            <Box border="1px solid #E4E7EC" rounded="8px" p="10px">
              <Text fontSize="12px">Phone Number</Text>
              <Input
                variant="unstyled"
                placeholder="+234..."
                value={phone}
                onChange={(e) => setPhone(normalizePhone(e.target.value))}
              />
            </Box>
          </FormControl>
        </VStack>

        {/* Buttons */}
        <HStack justify="space-between" mt="112px" w="100%">
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

export default StepTwo;
