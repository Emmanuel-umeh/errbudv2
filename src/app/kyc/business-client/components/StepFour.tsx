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

interface StepFourData {
  business_name: string;
  contact_person_name: string;
  contact_person_email: string;
  contact_person_phone: string;
}

interface Props {
  defaultValues: StepFourData;
  onBack: () => void;
  onSubmit: (data: StepFourData) => void;
}

const StepFour = ({ defaultValues, onBack, onSubmit }: Props) => {
  const [businessName, setBusinessName] = useState(
    defaultValues.business_name || "",
  );
  const [contactName, setContactName] = useState(
    defaultValues.contact_person_name || "",
  );
  const [email, setEmail] = useState(defaultValues.contact_person_email || "");
  const [phone, setPhone] = useState(defaultValues.contact_person_phone || "");

  const isValid = businessName && contactName && email && phone;

  const handleSubmit = () => {
    // ✅ Normalize phone number safely
    let normalizedPhone = phone.trim();

    if (normalizedPhone.startsWith("0")) {
      normalizedPhone = "+234" + normalizedPhone.slice(1);
    }

    if (!normalizedPhone.startsWith("+")) {
      normalizedPhone = "+234" + normalizedPhone;
    }

    onSubmit({
      business_name: businessName.trim(),
      contact_person_name: contactName.trim(),
      contact_person_email: email.trim(),
      contact_person_phone: normalizedPhone,
    });
  };

  return (
    <Stack>
      <VStack spacing="24px">
        {/* Title */}
        <VStack spacing="6px">
          <Heading fontSize="24px" fontWeight={600}>
            Primary Contact Information
          </Heading>
          <Text fontSize="14px" color="gray.500" textAlign="center">
            We’ll use these details to follow up and activate your account.
          </Text>
        </VStack>

        {/* Form */}
        <VStack spacing="16px" w="100%" maxW="420px">
          <FormControl>
            <Box border="1px solid #E4E7EC" rounded="8px" p="10px">
              <Text fontSize="12px">Business Name</Text>
              <Input
                variant="unstyled"
                value={businessName}
                onChange={(e) => setBusinessName(e.target.value)}
                placeholder="Enter business name"
              />
            </Box>
          </FormControl>

          <FormControl>
            <Box border="1px solid #E4E7EC" rounded="8px" p="10px">
              <Text fontSize="12px">Contact Name</Text>
              <Input
                variant="unstyled"
                value={contactName}
                onChange={(e) => setContactName(e.target.value)}
                placeholder="Enter full name"
              />
            </Box>
          </FormControl>

          <FormControl>
            <Box border="1px solid #E4E7EC" rounded="8px" p="10px">
              <Text fontSize="12px">Email Address</Text>
              <Input
                variant="unstyled"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter email"
              />
            </Box>
          </FormControl>

          <FormControl>
            <Box border="1px solid #E4E7EC" rounded="8px" p="10px">
              <Text fontSize="12px">Phone Number</Text>
              <Input
                variant="unstyled"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                placeholder="Enter phone number"
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
            onClick={handleSubmit}
          >
            Submit
          </Button>
        </HStack>
      </VStack>
    </Stack>
  );
};

export default StepFour;
