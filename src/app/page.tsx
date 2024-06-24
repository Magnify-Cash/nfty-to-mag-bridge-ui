import Header from "../components/Header/Header";
import Disclaimer from "../components/Disclaimer/Disclaimer";
import { Flex, Box } from "@chakra-ui/react";
import MigrationSteps from "../components/MigrationSteps/MigrationSteps";
import { MainContent } from "../components/MainContent/MainContent";

export default function Home() {
  return (
    <>
      <header>
        <Header />
      </header>
      <main>
        <Disclaimer />
        <Box padding={{ base: "0 10px", xxs: "0 16px" }}>
          <Flex
            maxWidth="1110px"
            justifyContent="space-between"
            margin="auto"
            mb="30"
            flexDirection={{ base: "column", lg: "row" }}
          >
            <MigrationSteps />
            <MainContent />
          </Flex>
        </Box>
      </main>
    </>
  );
}
