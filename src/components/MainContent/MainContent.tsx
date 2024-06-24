import { Flex } from "@chakra-ui/react";
import React, { FC } from "react";
import ConnectWallet from "./ConnectWallet/ConnectWallet";
import MigrateTokens from "./MigrateTokens/MigrateTokens";
import ConfirmMigration from "./ConfirmMigration/ConfirmMigration";

export const MainContent: FC = () => {
  return (
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
      {/* Step 1 - Connect Wallet */}
      {/* <ConnectWallet /> */}

      {/* Step 2 - Migrate Tokens*/}
      <MigrateTokens />

      {/* Step 3 - Confirm Migration*/}
      {/* <ConfirmMigration /> */}
    </Flex>
  );
};
