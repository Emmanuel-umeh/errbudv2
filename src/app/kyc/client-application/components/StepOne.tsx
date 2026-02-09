"use client";

import {
  Box,
  Button,
  FormControl,
  Heading,
  HStack,
  Icon,
  IconButton,
  Input,
  Stack,
  Text,
  VStack,
} from "@chakra-ui/react";
import { FiFile, FiTrash2, FiUpload, FiUser } from "react-icons/fi";
import { useState, useEffect } from "react";

interface Props {
  onNext: (data: { imageFile: File; cvFile: File }) => void;
}

const MAX_FILE_SIZE = 10 * 1024 * 1024; // 10MB

const StepOne = ({ onNext }: Props) => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");

  const [imageFile, setImageFile] = useState<File | null>(null);
  const [cvFile, setCvFile] = useState<File | null>(null);
  const [imagePreviewUrl, setImagePreviewUrl] = useState<string | null>(null);

  const [error, setError] = useState("");

  useEffect(() => {
    if (!imageFile) {
      setImagePreviewUrl(null);
      return;
    }
    const url = URL.createObjectURL(imageFile);
    setImagePreviewUrl(url);
    return () => URL.revokeObjectURL(url);
  }, [imageFile]);

  const isValid = !!(
    firstName.trim() &&
    lastName.trim() &&
    imageFile &&
    cvFile
  );

  const handleSubmit = () => {
    if (!imageFile || !cvFile) return;

    setError("");

    onNext({
      imageFile,
      cvFile,
    });
  };

  const handleFile =
    (setter: (file: File) => void, types: string[]) =>
    (e: React.ChangeEvent<HTMLInputElement>) => {
      const file = e.target.files?.[0];
      if (!file) return;

      if (!types.includes(file.type)) {
        setError("Invalid file type selected.");
        return;
      }

      if (file.size > MAX_FILE_SIZE) {
        setError("File size exceeds 10MB.");
        return;
      }

      setter(file);
      setError("");
    };

  return (
    <Stack w="100%" align="center">
      <VStack spacing="32px" maxW="420px" w="100%">
        {/* Title */}
        <VStack spacing="6px" textAlign="center">
          <Heading fontSize="24px" fontWeight={600}>
            Personal Details
          </Heading>
          <Text fontSize="16px" color="gray.500">
            These details are verified from your identity documents.
          </Text>
        </VStack>

        {/* Names */}
        <VStack spacing="16px" w="100%">
          <FormControl>
            <Box border="1px solid #E4E7EC" rounded="8px" p="10px">
              <Text fontSize="12px">First Name</Text>
              <Input
                variant="unstyled"
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
                placeholder="Enter first name"
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
                placeholder="Enter last name"
              />
            </Box>
          </FormControl>

          {/* Profile Image */}
          <HStack w="100%" spacing="12px" align="center">
            <Box
              w="40px"
              h="40px"
              rounded="full"
              bg="gray.100"
              overflow="hidden"
              flexShrink={0}
              display="flex"
              alignItems="center"
              justifyContent="center"
            >
              {imagePreviewUrl ? (
                <Box
                  as="img"
                  src={imagePreviewUrl}
                  alt="Profile preview"
                  w="100%"
                  h="100%"
                  objectFit="cover"
                />
              ) : (
                <Icon as={FiUser} />
              )}
            </Box>

            <Button
              size="sm"
              bg="#2970FF"
              color="white"
              rounded="full"
              as="label"
              cursor="pointer"
            >
              {imagePreviewUrl ? "Change image" : "Upload image"}
              <Input
                type="file"
                hidden
                accept="image/*"
                onChange={handleFile(setImageFile, [
                  "image/png",
                  "image/jpeg",
                  "image/jpg",
                ])}
              />
            </Button>
          </HStack>

          {/* Upload CV */}
          <Box w="100%">
            <Text fontSize="12px" mb="6px" color="gray.500">
              Upload CV
            </Text>

            <Box
              border="1px dashed #D0D5DD"
              rounded="12px"
              py="20px"
              textAlign="center"
              as="label"
              cursor="pointer"
              _hover={{ borderColor: "gray.400", bg: "gray.50" }}
            >
              <Icon as={FiUpload} boxSize="20px" mb="8px" />
              <Text fontSize="14px">
                Drop your file here or <Text as="span" color="#2970FF" fontWeight={500}>browse</Text>
              </Text>
              <Text fontSize="12px" color="gray.500" mt="4px">
                Max file size up to 10 MB
              </Text>
              <Input
                type="file"
                hidden
                accept=".pdf,.doc,.docx"
                onChange={handleFile(setCvFile, [
                  "application/pdf",
                  "application/msword",
                  "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
                ])}
              />
            </Box>

            {cvFile && (
              <HStack
                mt="12px"
                p="10px"
                border="1px solid #E4E7EC"
                rounded="8px"
                bg="gray.50"
                justify="space-between"
              >
                <HStack spacing="8px" minW={0}>
                  <Icon as={FiFile} boxSize="18px" color="gray.600" flexShrink={0} />
                  <Text fontSize="14px" isTruncated>
                    {cvFile.name}
                  </Text>
                </HStack>
                <IconButton
                  aria-label="Remove CV"
                  size="sm"
                  variant="ghost"
                  colorScheme="red"
                  icon={<Icon as={FiTrash2} />}
                  onClick={(e) => {
                    e.preventDefault();
                    setCvFile(null);
                  }}
                />
              </HStack>
            )}
          </Box>

          {error && (
            <Box bg="red.50" color="red.500" p="10px" rounded="8px">
              {error}
            </Box>
          )}
        </VStack>

        {/* Continue */}
        <Button
          h="47px"
          bg="#2970FF"
          color="white"
          rounded="full"
          w="100%"
          onClick={handleSubmit}
          isDisabled={!isValid}
        >
          Continue
        </Button>
      </VStack>
    </Stack>
  );
};

export default StepOne;
