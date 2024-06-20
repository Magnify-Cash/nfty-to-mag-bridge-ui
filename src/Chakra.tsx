"use client";

import { ChakraProvider } from "@chakra-ui/react";
import { ReactNode } from "react";
import theme from "./theme";

interface ChakraProps {
  children: ReactNode;
}

export default function Chakra({ children }: ChakraProps) {
  return <ChakraProvider theme={theme}>{children}</ChakraProvider>;
}
