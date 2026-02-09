"use client";

import { Box, Stack, VStack } from "@chakra-ui/react";
import { useState } from "react";
import { useMutation } from "@tanstack/react-query";

import { api, getToken } from "@/config/axios";
import Navbar from "@/components/molecules/Navbar";
import KycStepper from "./components/kycstepper";
import StepOne from "./components/StepOne";
import StepTwo from "./components/StepTwo";
import StepThree from "./components/StepThree";
import StepFour from "./components/StepFour";
import StepFive from "./components/StepFive";

/** Form state (can include UI-only fields). */
export interface CleanerApplicationData {
  cv_url: string;
  photograph_url: string;
  ni_number: string;
  rtw_code?: string;
  bank_name: string;
  sort_code: string;
  account_number: string;
  account_holder_name: string;
  category: string;
}

/** Exact payload for POST /api/v1/errbuddy/apply – no extra fields. */
export interface ErrbuddyApplyPayload {
  category: string;
  cv_url: string;
  photograph_url: string;
  ni_number: string;
  rtw_code: string;
  bank_name: string;
  account_number: string;
  sort_code: string;
  account_holder_name: string;
}

export default function Page() {
  const [step, setStep] = useState(1);

  // ✅ SINGLE SOURCE OF TRUTH
  const [applicationData, setApplicationData] =
    useState<CleanerApplicationData>({
      cv_url: "",
      photograph_url: "",
      ni_number: "",
      rtw_code: "",
      bank_name: "",
      sort_code: "",
      account_number: "",
      account_holder_name: "",
      category: "",
    });

  const [files, setFiles] = useState<{
    imageFile: File | null;
    cvFile: File | null;
  }>({
    imageFile: null,
    cvFile: null,
  });

  const updateData = (data: Partial<CleanerApplicationData>) => {
    setApplicationData((prev) => ({ ...prev, ...data }));
  };

  const mutation = useMutation({
    mutationFn: async () => {
      if (!files.imageFile || !files.cvFile) {
        throw new Error("Missing required files");
      }

      if (!getToken()?.trim()) {
        throw new Error(
          "Please log in to submit your application. The upload and application require authentication.",
        );
      }

      const formData = new FormData();
      formData.append("files", files.imageFile);
      formData.append("files", files.cvFile);

      const uploadRes = await api.post(
        "services/cloudinary/upload",
        formData,
      );

      const urls = uploadRes.data?.data?.urls as string[] | undefined;
      if (!urls?.length || urls.length < 2) {
        throw new Error("Upload did not return both file URLs");
      }
      const [photograph_url, cv_url] = urls;

      const accountHolderName = applicationData.account_holder_name?.trim();
      if (!accountHolderName) {
        throw new Error("Account holder name is required.");
      }

      const payload: ErrbuddyApplyPayload = {
        category: applicationData.category,
        cv_url,
        photograph_url,
        ni_number: applicationData.ni_number,
        rtw_code: applicationData.rtw_code ?? "",
        bank_name: applicationData.bank_name,
        account_number: applicationData.account_number,
        sort_code: applicationData.sort_code,
        account_holder_name: accountHolderName,
      };

      const res = await api.post("errbuddy/apply", payload);
      return res.data;
    },
    onSuccess: () => {
      // Navigation is handled in StepFive after a successful submit.
    },
  });

  return (
    <Stack>
      <Navbar />

      <Box px={{ base: "16px", md: "40px" }} py="40px">
        <VStack spacing="40px">
          <KycStepper step={step} />

          {step === 1 && (
            <StepOne
              onNext={(data) => {
                setFiles({
                  imageFile: data.imageFile,
                  cvFile: data.cvFile,
                });
                setStep(2);
              }}
            />
          )}

          {step === 2 && (
            <StepTwo
              onNext={(data) => {
                updateData(data);
                setStep(3);
              }}
              onBack={() => setStep(1)}
            />
          )}

          {step === 3 && (
            <StepThree
              defaultValues={{
                account_holder_name: applicationData.account_holder_name,
                bank_name: applicationData.bank_name,
                sort_code: applicationData.sort_code,
                account_number: applicationData.account_number,
              }}
              onNext={(data) => {
                updateData(data);
                setStep(4);
              }}
              onBack={() => setStep(2)}
            />
          )}

          {step === 4 && (
            <StepFour
              onNext={(data) => {
                updateData(data);
                setStep(5);
              }}
              onBack={() => setStep(3)}
            />
          )}
          {step === 5 && (
            <StepFive
              onSubmit={async () => {
                await mutation.mutateAsync();
              }}
              onBack={() => setStep(4)}
            />
          )}
        </VStack>
      </Box>
    </Stack>
  );
}
