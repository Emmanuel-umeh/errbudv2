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
import { useState, useMemo } from "react";
import { CleanerApplicationData } from "../page";

interface DefaultValues {
  bank_name?: string;
  sort_code?: string;
  account_number?: string;
  account_holder_name?: string;
}

interface Props {
  defaultValues?: DefaultValues;
  onNext: (data: Partial<CleanerApplicationData>) => void;
  onBack: () => void;
}

const StepThree = ({ defaultValues, onNext, onBack }: Props) => {
  const [accountHolderName, setAccountHolderName] = useState(
    defaultValues?.account_holder_name?.trim() ?? "",
  );
  const [bankName, setBankName] = useState(
    defaultValues?.bank_name?.trim() ?? "",
  );
  const [sortCode, setSortCode] = useState(
    defaultValues?.sort_code?.trim() ?? "",
  );
  const [accountNumber, setAccountNumber] = useState(
    defaultValues?.account_number?.trim() ?? "",
  );

  const isFormValid = useMemo(() => {
    return (
      accountHolderName.trim().length > 0 &&
      bankName.trim().length > 1 &&
      sortCode.trim().length >= 6 &&
      accountNumber.trim().length >= 8
    );
  }, [accountHolderName, bankName, sortCode, accountNumber]);

  const handleNext = () => {
    onNext({
      account_holder_name: accountHolderName.trim(),
      bank_name: bankName,
      sort_code: sortCode,
      account_number: accountNumber,
    });
  };

  return (
    <Stack w="100%" align="center" px={{ base: 4, md: 0 }}>
      <VStack spacing="24px" maxW="420px" w="100%">
        {/* Title */}
        <VStack spacing="6px" textAlign="center">
          <Heading fontSize="24px" fontWeight={600}>
            Payment Details
          </Heading>
          <Text fontSize="14px" color="gray.500">
            This is where your earnings will be paid.
          </Text>
        </VStack>

        {/* Form */}
        <VStack spacing="16px" w="100%">
          {/* Account holder name */}
          <FormControl isRequired>
            <Box border="1px solid #E4E7EC" rounded="8px" p="10px">
              <Text fontSize="12px" color="#667185" mb={1}>
                Account holder name
              </Text>
              <Input
                variant="unstyled"
                placeholder="Name as it appears on your bank account"
                value={accountHolderName}
                onChange={(e) => setAccountHolderName(e.target.value)}
              />
            </Box>
          </FormControl>

          {/* Bank Name */}
          <FormControl isRequired>
            <Box border="1px solid #E4E7EC" rounded="8px" p="10px">
              <Text fontSize="12px" color="#667185" mb={1}>
                Bank Name
              </Text>
              <Input
                variant="unstyled"
                placeholder="e.g. Barclays"
                value={bankName}
                onChange={(e) => setBankName(e.target.value)}
              />
            </Box>
          </FormControl>

          {/* Sort Code */}
          <FormControl isRequired>
            <Box border="1px solid #E4E7EC" rounded="8px" p="10px">
              <Text fontSize="12px" color="#667185" mb={1}>
                Sort Code
              </Text>
              <Input
                variant="unstyled"
                placeholder="e.g. 12-34-56"
                value={sortCode}
                onChange={(e) => setSortCode(e.target.value)}
              />
            </Box>
          </FormControl>

          {/* Account Number */}
          <FormControl isRequired>
            <Box border="1px solid #E4E7EC" rounded="8px" p="10px">
              <Text fontSize="12px" color="#667185" mb={1}>
                Account Number
              </Text>
              <Input
                variant="unstyled"
                placeholder="e.g. 12345678"
                value={accountNumber}
                onChange={(e) => setAccountNumber(e.target.value)}
              />
            </Box>
          </FormControl>
        </VStack>

        {/* Info Hint */}
        <Box
          w="100%"
          bg="#F0F7FF"
          px="12px"
          py="10px"
          rounded="8px"
          fontSize="12px"
          color="#175CD3"
        >
          Please ensure your bank details are correct to avoid payment delays.
        </Box>

        {/* Buttons */}
        <HStack justify="space-between" w="100%" mt="32px">
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
            bg={isFormValid ? "#2970FF" : "#9F9F9F"}
            color="white"
            rounded="full"
            cursor={isFormValid ? "pointer" : "not-allowed"}
            _hover={isFormValid ? { bg: "#175CD3" } : undefined}
            isDisabled={!isFormValid}
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
