import {
  Box,
  Button,
  Heading,
  HStack,
  Input,
  Stack,
  VStack,
} from "@chakra-ui/react";
import { useState } from "react";
import { useMutation } from "@tanstack/react-query";
import axios from "axios";
import { AxiosError } from "axios";

interface Props {
  onBack: () => void;
  onSuccess: () => void;
}

const StepFive = ({ onBack, onSuccess }: Props) => {
  const [otp, setOtp] = useState<string[]>(Array(6).fill(""));
  const [error, setError] = useState("");

  const verifyMutation = useMutation({
    mutationFn: async () => {
      const token = otp.join("");
      return axios.post(
        `https://errbud-api-7bd24dbbd474.herokuapp.com/api/v1/auth/verify/${token}`,
      );
    },
    onSuccess: () => {
      onSuccess();
    },
    onError: (err: AxiosError<{ message?: string }>) => {
      setError(
        err.response?.data?.message || "Invalid or expired verification code.",
      );
    },
  });

  const handleChange = (value: string, index: number) => {
    if (!/^\d?$/.test(value)) return;

    const updated = [...otp];
    updated[index] = value;
    setOtp(updated);
  };

  const handleVerify = () => {
    if (otp.join("").length !== 6) {
      setError("Please enter the 6-digit code.");
      return;
    }

    setError("");
    verifyMutation.mutate();
  };

  return (
    <Stack>
      <VStack spacing="24px">
        <Heading fontSize="24px">Verify Your Identity</Heading>

        <HStack spacing="8px">
          {otp.map((digit, index) => (
            <Input
              key={index}
              w="48px"
              h="48px"
              textAlign="center"
              fontSize="16px"
              maxLength={1}
              value={digit}
              onChange={(e) => handleChange(e.target.value, index)}
            />
          ))}
        </HStack>

        {error && (
          <Box bg="red.50" color="red.500" px="16px" py="8px">
            {error}
          </Box>
        )}

        <HStack justify="space-between" w="100%" mt="40px">
          <Button onClick={onBack}>Back</Button>

          <Button
            colorScheme="blue"
            isLoading={verifyMutation.isPending}
            onClick={handleVerify}
            isDisabled={otp.join("").length !== 6}
          >
            Verify & Continue
          </Button>
        </HStack>
      </VStack>
    </Stack>
  );
};

export default StepFive;
