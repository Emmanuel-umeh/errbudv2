"use client";

import theme from "@/theme";
import { ChakraProvider } from "@chakra-ui/react";
import { ReactNode } from "react";

type Props = {
  children: ReactNode;
};

const ChakraUIProvider = ({ children }: Props) => {
  return <ChakraProvider theme={theme}>{children}</ChakraProvider>;
};

export default ChakraUIProvider;
