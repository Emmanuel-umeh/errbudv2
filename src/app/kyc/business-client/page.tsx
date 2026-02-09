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

import { IoIosArrowBack } from "react-icons/io";
import { useMutation } from "@tanstack/react-query";
import axios from "axios";

export interface BusinessKycData {
  business_name: string;
  facility_type: string;
  operation_hours: string;
  contract_duration: number;
  materials_provision: "yes" | "no" | "partial" | "";
  selectedMaterials: string[];
  contact_person_name: string;
  contact_person_email: string;
  contact_person_phone: string;

  // ✅ ADD THIS (optional)
  custom_facility_type?: string;
}

export default function Page() {
  const router = useRouter();
  const [step, setStep] = useState(1);

  // SINGLE SOURCE OF TRUTH
  const [kycData, setKycData] = useState<BusinessKycData>({
    business_name: "",
    facility_type: "",
    operation_hours: "",
    contract_duration: 0,
    materials_provision: "",
    selectedMaterials: [],
    contact_person_name: "",
    contact_person_email: "",
    contact_person_phone: "",
  });

  const mutation = useMutation({
    mutationFn: async (payload: typeof kycData) => {
      const res = await axios.post(
        "https://errbud-api-7bd24dbbd474.herokuapp.com/api/v1/business/apply",
        payload,
      );
      return res.data;
    },
  });

  // ✅ Safe partial updater
  const updateKycData = (data: Partial<BusinessKycData>) => {
    setKycData((prev) => ({
      ...prev,
      ...data,
    }));
  };

  // 🔁 Global back logic
  const handleBack = () => {
    if (step > 1) {
      setStep((prev) => prev - 1);
    } else {
      router.push("/");
    }
  };

  return (
    <Stack>
      <Navbar />

      {/* Global Back */}
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
              defaultValues={kycData}
              onNext={(data) => {
                updateKycData(data);
                setStep(2);
              }}
            />
          )}

          {step === 2 && (
            <StepTwo
              defaultValues={kycData}
              onBack={() => setStep(1)}
              onNext={(data) => {
                updateKycData(data);
                setStep(3);
              }}
            />
          )}

          {step === 3 && (
            <StepThree
              defaultValues={kycData}
              onBack={() => setStep(2)}
              onNext={(data) => {
                updateKycData(data);
                setStep(4);
              }}
            />
          )}

          {step === 4 && (
            <StepFour
              defaultValues={kycData}
              onBack={() => setStep(3)}
              onSubmit={(data) => {
                const { custom_facility_type, ...restKycData } = kycData;

                const finalPayload: BusinessKycData = {
                  ...restKycData,
                  ...data,
                  facility_type: restKycData.facility_type.toLowerCase(),
                  selectedMaterials:
                    restKycData.materials_provision === "partial"
                      ? restKycData.selectedMaterials
                      : [],
                };

                if (restKycData.facility_type.toLowerCase() === "other") {
                  finalPayload.custom_facility_type =
                    custom_facility_type?.toLowerCase();
                }

                console.log("FINAL PAYLOAD", finalPayload);

                mutation.mutate(finalPayload, {
                  onSuccess: () => {
                    router.push("/application-submitted");
                  },
                });
              }}
            />
          )}
        </VStack>
      </Box>
    </Stack>
  );
}
