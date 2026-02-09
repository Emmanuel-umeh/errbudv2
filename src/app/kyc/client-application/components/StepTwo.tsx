import {
  Box,
  Button,
  FormControl,
  Heading,
  HStack,
  Input,
  Select,
  Stack,
  Text,
  VStack,
} from "@chakra-ui/react";
import { useState } from "react";

interface StepTwoData {
  rtw_code: string;
  ni_number: string;
}

interface Props {
  onNext: (data: StepTwoData) => void;
  onBack?: () => void;
}

const StepTwo = ({ onNext, onBack }: Props) => {
  const [rightToWorkStatus, setRightToWorkStatus] = useState<
    "available" | "na"
  >("available");

  const [rtwCode, setRtwCode] = useState("");
  const [niNumber, setNiNumber] = useState("");
  const [error, setError] = useState("");

  // 🔒 Input sanitizers
  const sanitizeInput = (value: string) =>
    value.replace(/\s+/g, "").trim();

  const handleNext = () => {
    const cleanNI = sanitizeInput(niNumber);
    const cleanRTW = sanitizeInput(rtwCode);

    if (!cleanNI) {
      setError("National Insurance Number is required.");
      return;
    }

    if (rightToWorkStatus === "available" && !cleanRTW) {
      setError("Right-to-Work share code is required.");
      return;
    }

    setError("");

    onNext({
      ni_number: cleanNI,
      rtw_code: rightToWorkStatus === "available" ? cleanRTW : "",
    });
  };

  return (
    <Stack>
      <VStack spacing="24px">
        {/* Title */}
        <VStack spacing="6px">
          <Heading fontSize="24px" fontWeight={600}>
            Legal & Work Eligibility
          </Heading>
          <Text fontSize="14px" color="gray.500" textAlign="center">
            We’re required to confirm your eligibility to work.
          </Text>
        </VStack>

        {/* Form */}
        <VStack spacing="16px" w="100%" maxW="420px">
          {/* Dropdown */}
          <FormControl>
            <Box border="1px solid #E4E7EC" rounded="8px" p="10px">
              <Select
                variant="unstyled"
                value={rightToWorkStatus}
                onChange={(e) => {
                  const value = e.target.value as "available" | "na";
                  setRightToWorkStatus(value);

                  // 🔥 Clear RTW code if user selects N/A
                  if (value === "na") {
                    setRtwCode("");
                  }
                }}
              >
                <option value="available">Available</option>
                <option value="na">N/A</option>
              </Select>
            </Box>
          </FormControl>

          {/* Right-to-Work Code */}
          {rightToWorkStatus === "available" && (
            <FormControl>
              <Box border="1px solid #E4E7EC" rounded="8px" p="10px">
                <Text fontSize="12px" color="#667185">
                  Right-to-Work Share Code
                </Text>
                <Input
                  variant="unstyled"
                  value={rtwCode}
                  onChange={(e) =>
                    setRtwCode(sanitizeInput(e.target.value))
                  }
                  placeholder="Enter share code"
                />
              </Box>
            </FormControl>
          )}

          {/* National Insurance Number */}
          <FormControl>
            <Box border="1px solid #E4E7EC" rounded="8px" p="10px">
              <Text fontSize="12px" color="#667185">
                National Insurance Number
              </Text>
              <Input
                variant="unstyled"
                value={niNumber}
                onChange={(e) =>
                  setNiNumber(sanitizeInput(e.target.value))
                }
                placeholder="Enter NI number"
              />
            </Box>
          </FormControl>

          {/* Error */}
          {error && (
            <Box
              bg="red.50"
              color="red.500"
              px="12px"
              py="8px"
              borderRadius="8px"
              fontSize="12px"
            >
              {error}
            </Box>
          )}
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
