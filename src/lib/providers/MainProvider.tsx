"use client";

import { ReactNode, useState } from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { WagmiProvider } from "wagmi";
import { wagmiConfig } from "@/lib/configs/wagmi";
import { ChakraProvider as ChakraBaseProvider } from "@chakra-ui/react";
import theme from "@/styles/theme";

const ChakraProvider = ({ children }: { children: ReactNode }) => (
  <ChakraBaseProvider theme={theme}>{children}</ChakraBaseProvider>
);

const ReactQueryClientProvider = ({ children }: { children: ReactNode }) => {
  const [queryClient] = useState(
    () =>
      new QueryClient({
        defaultOptions: {
          queries: {
            staleTime: 60 * 1000,
          },
        },
      }),
  );
  return (
    <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
  );
};
const Web3Provider = ({ children }: { children: ReactNode }) => (
  <WagmiProvider config={wagmiConfig}>{children}</WagmiProvider>
);

export const MainProvider = ({ children }: { children: ReactNode }) => {
  return (
    <ChakraProvider>
      <ReactQueryClientProvider>
        <Web3Provider>{children}</Web3Provider>
      </ReactQueryClientProvider>
    </ChakraProvider>
  );
};
