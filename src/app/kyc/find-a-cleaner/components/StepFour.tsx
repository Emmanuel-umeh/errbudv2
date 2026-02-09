import PrivacyAndPolicyText from "@/components/templates/PrivacyAndPolicyText";
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
import { useMutation } from "@tanstack/react-query";
import axios from "axios";
import { AxiosError } from "axios";

interface Props {
  defaultValues: {
    agreed_to_terms?: boolean;
    fullname?: string;
    email?: string;
    phone?: string;
    password?: string;
    referral_code?: string;
    currency?: string;
    device_token?: string;
  };
  onNext: (data: { agreed_to_terms: boolean }) => void;
  onBack: () => void;
}

const StepFour = ({ defaultValues, onNext, onBack }: Props) => {
  const [agreed, setAgreed] = useState<boolean>(
    defaultValues.agreed_to_terms || false,
  );
  const [error, setError] = useState("");

  const registerMutation = useMutation({
    mutationFn: async () => {
      return axios.post(
        "https://errbud-api-7bd24dbbd474.herokuapp.com/api/v1/auth/register",
        {
          fullname: defaultValues.fullname,
          email: defaultValues.email,
          phone: defaultValues.phone,
          password: defaultValues.password,
          referral_code: defaultValues.referral_code || "",
          currency: defaultValues.currency || "",
          device_token: defaultValues.device_token || "",
          agreed_to_terms: true,
        },
      );
    },
    onSuccess: () => {
      onNext({ agreed_to_terms: true }); // move to OTP step
    },
    onError: (err: AxiosError<{ message?: string }>) => {
      setError(
        err.response?.data?.message ||
          "Something went wrong. Please try again.",
      );
    },
  });

  const handleNext = () => {
    if (!agreed) {
      setError("You must agree to the Terms & Conditions to continue.");
      return;
    }

    setError("");
    registerMutation.mutate();
  };

  return (
    <Stack>
      <VStack spacing="24px">
        <VStack spacing="6px">
          <Heading fontSize="24px" fontWeight={600}>
            Almost Done!
          </Heading>
          <Text fontSize="14px" color="gray.500" textAlign="center">
            Please read and accept our Terms & Conditions to <br />
            finish setting up your account.
          </Text>
        </VStack>

        <Box
          w="416px"
          h="227px"
          rounded="15px"
          boxShadow="0px 4px 12px rgba(101, 101, 101, 0.08)"
          overflow="hidden"
          px={1}
          py={2}
        >
          <Box h="100%" overflowY="auto" px={3}>
            <PrivacyAndPolicyText />
          </Box>
        </Box>

        <Checkbox
          colorScheme="green"
          fontSize="12px"
          isChecked={agreed}
          onChange={(e) => setAgreed(e.target.checked)}
        >
          I have read and agree to Errbud’s Terms & Conditions and Policies.
        </Checkbox>

        {error && (
          <Box bg="red.50" color="red.500" px="16px" py="8px" fontSize="12px">
            {error}
          </Box>
        )}

        <HStack justifyContent="space-between" w="100%" mt="20px">
          <Button
            w="132px"
            h="48px"
            bg="#E4E7EC"
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
            isLoading={registerMutation.isPending}
            rounded="full"
          >
            Agree & Continue
          </Button>
        </HStack>
      </VStack>
    </Stack>
  );
};

export default StepFour;
