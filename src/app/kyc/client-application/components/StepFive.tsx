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
import { useRouter } from "next/navigation";

interface Props {
  onBack: () => void;
  onSubmit: () => Promise<void>;
}

const StepFive = ({ onBack, onSubmit }: Props) => {
  const router = useRouter();
  const [agreed, setAgreed] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async () => {
    if (!agreed) return;

    try {
      setLoading(true);
      setError(null);

      // Submit full application payload here
      await onSubmit();

      router.push("/application-submitted");
    } catch (err) {
      const message =
        err instanceof Error ? err.message : "Something went wrong. Please try again.";
      setError(message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <Stack w="100%" align="center" px={{ base: 4, md: 0 }}>
      <VStack spacing="24px" maxW="420px" w="100%">
        {/* Title */}
        <VStack spacing="6px" textAlign="center">
          <Heading fontSize="24px" fontWeight={600}>
            Final Agreement
          </Heading>
          <Text fontSize="14px" color="gray.500">
            Please review and confirm before submitting your application.
          </Text>
        </VStack>

        {/* Policy Box */}
        <Box
          w="100%"
          h="220px"
          border="1px solid #E4E7EC"
          rounded="12px"
          boxShadow="sm"
          overflow="hidden"
        >
          <Box
            h="100%"
            overflowY="auto"
            px={4}
            py={3}
            sx={{
              "&::-webkit-scrollbar": { width: "6px" },
              "&::-webkit-scrollbar-thumb": {
                background: "#BBD7FF",
                borderRadius: "10px",
              },
            }}
          >
            <PrivacyAndPolicyText />
          </Box>
        </Box>

        {/* Checkbox */}
        <Checkbox
          isChecked={agreed}
          onChange={(e) => setAgreed(e.target.checked)}
          fontSize="12px"
          color="#667185"
        >
          I have read and agree to Errbud’s Terms & Conditions and Policies.
        </Checkbox>

        {error && (
          <Box
            bg="red.50"
            color="red.600"
            px="12px"
            py="8px"
            rounded="8px"
            fontSize="12px"
            w="100%"
            textAlign="center"
          >
            {error}
          </Box>
        )}

        {/* Buttons */}
        <HStack justify="space-between" w="100%" mt="16px">
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
            bg={agreed ? "#2970FF" : "#9F9F9F"}
            color="white"
            rounded="full"
            isLoading={loading}
            isDisabled={!agreed || loading}
            _hover={agreed ? { bg: "#175CD3" } : undefined}
            onClick={handleSubmit}
          >
            Submit
          </Button>
        </HStack>
      </VStack>
    </Stack>
  );
};

export default StepFive;
