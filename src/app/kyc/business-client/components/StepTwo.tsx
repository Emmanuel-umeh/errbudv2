import {
  Box,
  Button,
  FormControl,
  Heading,
  HStack,
  Select,
  Stack,
  Text,
  VStack,
} from "@chakra-ui/react";
import { useState } from "react";
import { BusinessKycData } from "../page";

interface StepTwoData {
  operation_hours: string;
  contract_duration: number;
}

interface Props {
  defaultValues: BusinessKycData;
  onNext: (data: StepTwoData) => void;
  onBack: () => void;
}

const StepTwo = ({ defaultValues, onNext, onBack }: Props) => {
  const [operationHours, setOperationHours] = useState(
    defaultValues.operation_hours || ""
  );

  const [contractDuration, setContractDuration] = useState<number | "">(
    defaultValues.contract_duration || ""
  );

  const isValid = operationHours !== "" && contractDuration !== "";

  const handleNext = () => {
    onNext({
      operation_hours: operationHours,
      contract_duration: Number(contractDuration),
    });
  };

  return (
    <Stack>
      <VStack spacing="24px">
        {/* Title */}
        <VStack spacing="6px">
          <Heading fontSize="24px" fontWeight={600}>
            When Does Your Business Operate?
          </Heading>
          <Text fontSize="14px" color="gray.500" textAlign="center">
            Let us know your daily operating hours so we can schedule cleaning
            without disrupting your workflow.
          </Text>
        </VStack>

        {/* Form */}
        <VStack spacing="16px" w="100%" maxW="420px">
          <FormControl>
            <Box border="1px solid #E4E7EC" rounded="8px" p="10px">
              <Text fontSize="12px">Operating Hours</Text>
              <Select
                placeholder="Select operating hours"
                variant="unstyled"
                value={operationHours}
                onChange={(e) => setOperationHours(e.target.value)}
              >
                <option value="8:00 AM – 6:00 PM">8:00 AM – 6:00 PM</option>
                <option value="24/7">24/7</option>
                <option value="Night Shift">Night Shift</option>
                <option value="Mixed Hours">Mixed Hours</option>
              </Select>
            </Box>
          </FormControl>

          <FormControl>
            <Box border="1px solid #E4E7EC" rounded="8px" p="10px">
              <Text fontSize="12px">Contract Duration</Text>
              <Select
                placeholder="Select contract duration"
                variant="unstyled"
                value={contractDuration}
                onChange={(e) => setContractDuration(Number(e.target.value))}
              >
                <option value={3}>3 Months</option>
                <option value={6}>6 Months</option>
                <option value={12}>1 Year</option>
              </Select>
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
