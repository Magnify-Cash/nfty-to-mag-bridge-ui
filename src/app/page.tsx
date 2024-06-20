import Header from "./components/Header/Header";
import Disclaimer from "./components/Disclaimer/Disclaimer";
import { Flex, Box } from "@chakra-ui/react";
import MigrationSteps from "./components/MigrationSteps/MigrationSteps";
import { MainContent } from "./components/MainContent/MainContent";

export default function Home() {
  return (
    <>
      <header>
        <Header />
      </header>
      <main>
        <Disclaimer />
        <Box padding="0 10px">
          <Flex
            maxWidth="1110px"
            justifyContent="space-between"
            margin="auto"
            mb="30"
          >
            <MigrationSteps />
            <MainContent />
          </Flex>
        </Box>
      </main>
    </>
  );
}
