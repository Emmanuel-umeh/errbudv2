import {
  Stack,
  Box,
  Input,
  Select,
  Textarea,
  Button,
  Text,
} from "@chakra-ui/react";
import React from "react";

const ContactForm = () => {
  return (
    <Stack
      spacing={5}
      width="100%"
      maxW="461px"
      bg="white"
      p={8}
      borderRadius="20px"
      boxShadow="xl"
    >
      <Box border={"1px solid #E4E7EC"} rounded={"8px"} padding={"10px"}>
        <Text mb={1} fontWeight={400} fontSize={"12px"}>
          Full Name
        </Text>
        <Input variant="unstyled" placeholder="Enter your full name" />
      </Box>

      <Box border={"1px solid #E4E7EC"} rounded={"8px"} padding={"10px"}>
        <Text mb={1} fontWeight={400} fontSize={"12px"}>
          Email Address
        </Text>
        <Input variant="unstyled" placeholder="Enter email" />
      </Box>
      <Box border={"1px solid #E4E7EC"} rounded={"8px"} padding={"10px"}>
        <Text mb={1} fontWeight={400} fontSize={"12px"}>
          Phone Number
        </Text>
        <Input variant="unstyled" placeholder="+44" />
      </Box>

      <Box border={"1px solid #E4E7EC"} rounded={"8px"} padding={"10px"}>
        <Text mb={1} fontWeight={400} fontSize={"12px"}>
          What do you need help with?
        </Text>
        <Select placeholder="Select a reason" variant={"unstyled"}>
          <option value="cleaning">Cleaning Services</option>
          <option value="partnership">Partnership</option>
          <option value="general">General Enquiry</option>
        </Select>
      </Box>

      <Box>
        <Textarea placeholder="Write your message here..." />
      </Box>

      <Button
        bg={"primary"}
        color={"white"}
        rounded="40px"
        fontWeight={500}
        fontSize={"16px"}
      >
        Submit
      </Button>
    </Stack>
  );
};

export default ContactForm;
