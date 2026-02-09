import {
  Box,
  Button,
  Checkbox,
  FormControl,
  Heading,
  HStack,
  Input,
  Stack,
  Text,
  VStack,
} from "@chakra-ui/react";
import { useState } from "react";

interface Props {
  defaultValues: {
    password?: string;
  };
  onNext: (data: { password: string }) => void;
  onBack: () => void;
}

const StepThree = ({ defaultValues, onNext, onBack }: Props) => {
  const [password, setPassword] = useState(defaultValues.password || "");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");

  const handleNext = () => {
    if (!password || !confirmPassword) {
      setError("Password fields cannot be empty");
      return;
    }

    if (password !== confirmPassword) {
      setError("Passwords do not match");
      return;
    }

    setError("");
    onNext({ password });
  };

  return (
    <Stack>
      <VStack spacing="24px">
        {/* Title */}
        <VStack spacing="6px">
          <Heading fontSize="24px" fontWeight={600}>
            Create a Secure Password
          </Heading>
          <Text fontSize="16px" color="gray.500" textAlign="center">
            Protect your account with a strong password.
          </Text>
        </VStack>

        {/* Form */}
        <Stack gap="16px" w="100%" maxW="420px">
          {/* Password */}
          <FormControl>
            <Box border="1px solid #E4E7EC" rounded="8px" p="10px">
              <Text fontSize="12px" color="#667185">
                Password
              </Text>
              <Input
                variant="unstyled"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </Box>
          </FormControl>

          {/* Criteria (UI only for now) */}
          <Box display="flex" flexDirection="column" gap={2}>
            <Checkbox isChecked={password.length >= 8} colorScheme="green">
              Minimum 8 characters
            </Checkbox>
            <Checkbox isChecked={/[A-Z]/.test(password)} colorScheme="green">
              One uppercase letter
            </Checkbox>
            <Checkbox isChecked={/[a-z]/.test(password)} colorScheme="green">
              One lowercase letter
            </Checkbox>
            <Checkbox isChecked={/\d/.test(password)} colorScheme="green">
              One number
            </Checkbox>
            <Checkbox
              isChecked={/[!@#$%^&*]/.test(password)}
              colorScheme="green"
            >
              One special character
            </Checkbox>
          </Box>

          {/* Confirm Password */}
          <FormControl>
            <Box border="1px solid #E4E7EC" rounded="8px" p="10px">
              <Text fontSize="12px" color="#667185">
                Confirm Password
              </Text>
              <Input
                variant="unstyled"
                type="password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
              />
            </Box>
          </FormControl>
        </Stack>

        {/* Buttons */}
        <HStack justify="space-between" mt="112px" w="100%">
          <Button
            w="132px"
            h="48px"
            bg="#E4E7EC"
            color="black"
            onClick={onBack}
            rounded="full"
          >
            Back
          </Button>

          <Button
            w="132px"
            h="48px"
            bg="#9F9F9F"
            color="white"
            onClick={handleNext}
            rounded="full"
          >
            Next
          </Button>
        </HStack>

        {/* Error */}
        {error && (
          <Box
            bg="red.50"
            color="red.500"
            px="16px"
            py="8px"
            borderRadius="8px"
            fontSize="12px"
          >
            {error}
          </Box>
        )}
      </VStack>
    </Stack>
  );
};

export default StepThree;
