import Disclaimer from "@/components/Disclaimer/Disclaimer";
import Header from "@/components/Header/Header";
import MigrateTokens from "@/components/MainContent/MigrateTokens/MigrateTokens";
import MigrationSteps from "@/components/MigrationSteps/MigrationSteps";
import { Box, Flex } from "@chakra-ui/react";

function MigrateTokensPage() {
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
              <MigrateTokens />
            </Flex>
          </Flex>
        </Box>
      </main>
    </>
  );
}

export default MigrateTokensPage;
