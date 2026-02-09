"use client";

import { Box, Button, HStack, Stack, Text, VStack } from "@chakra-ui/react";
import { useState } from "react";
import { useRouter } from "next/navigation";

import Navbar from "@/components/molecules/Navbar";
import KycStepper from "./components/kycstepper";

import StepOne from "./components/StepOne";
import StepTwo from "./components/StepTwo";
import StepThree from "./components/StepThree";
import StepFour from "./components/StepFour";
import StepFive from "./components/StepFive";

import { IoIosArrowBack } from "react-icons/io";

export default function KycPage() {
  const router = useRouter();
  const [step, setStep] = useState(1);

  // 🔥 SINGLE SOURCE OF TRUTH
  const [formData, setFormData] = useState({
    fullname: "",
    email: "",
    phone: "",
    password: "",
    agreed_to_terms: false,
    referral_code: "",
    currency: "",
    device_token: "",
  });

  const updateFormData = (data: Partial<typeof formData>) => {
    setFormData((prev) => ({ ...prev, ...data }));
  };

  const handleBack = () => {
    if (step > 1) setStep((prev) => prev - 1);
    else router.push("/");
  };

  return (
    <Stack>
      <Navbar />

      <HStack gap={3} px="50px" mt="44px">
        <Button rounded="full" onClick={handleBack}>
          <IoIosArrowBack />
        </Button>
        <Text fontWeight={500} fontSize="16px">
          Back
        </Text>
      </HStack>

      <Box px={{ base: "16px", md: "40px" }} py="40px">
        <VStack spacing="40px">
          <KycStepper step={step} />

          {step === 1 && (
            <StepOne
              defaultValues={formData}
              onNext={(data) => {
                updateFormData(data);
                setStep(2);
              }}
            />
          )}

          {step === 2 && (
            <StepTwo
              defaultValues={formData}
              onNext={(data) => {
                updateFormData(data);
                setStep(3);
              }}
              onBack={handleBack}
            />
          )}

          {step === 3 && (
            <StepThree
              defaultValues={formData}
              onNext={(data) => {
                updateFormData(data);
                setStep(4);
              }}
              onBack={handleBack}
            />
          )}

          {step === 4 && (
            <StepFour
              defaultValues={formData}
              onNext={(data) => {
                updateFormData(data);
                setStep(5);
              }}
              onBack={handleBack}
            />
          )}

          {step === 5 && (
            <StepFive
              onBack={handleBack}
              onSuccess={() => router.push("/kyc/client-application")}
            />
          )}
        </VStack>
      </Box>
    </Stack>
  );
}
