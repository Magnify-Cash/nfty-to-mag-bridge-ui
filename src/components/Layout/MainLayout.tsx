import { ReactNode } from "react";
import Header from "@/components/Layout/Header";
import Disclaimer from "@/components/Disclaimer/Disclaimer";
import { Box, Flex } from "@chakra-ui/react";
import MigrationSteps from "@/components/MigrationSteps/MigrationSteps";
import { Footer } from "@/components/Layout/Footer";

export const MainLayout = ({ children }: { children: ReactNode }) => {
  return (
    <>
      <Header />
      <Disclaimer />
      <Box
        as="main"
        padding={{ base: "0 10px", xxs: "0 16px" }}
        pt={{ base: "40px", lg: "64px" }}
      >
        <Flex
          maxWidth="1110px"
          justifyContent="space-between"
          margin="auto"
          mb="30"
          flexDirection={{ base: "column", lg: "row" }}
        >
          <MigrationSteps />

          <Flex
            bg="custom.450"
            borderRadius="20px"
            border="1px solid"
            borderColor="custom.150"
            flexGrow="1"
            overflow="hidden"
            margin={{ base: "auto", lg: "initial" }}
            maxW={{ base: "600px", lg: "initial" }}
            w={{ base: "100%", lg: "initial" }}
          >
            {children}
          </Flex>
        </Flex>
      </Box>
      <Footer />
    </>
  );
};
