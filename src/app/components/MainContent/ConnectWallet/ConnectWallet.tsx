import { Button, Flex, Heading, Text, Image } from "@chakra-ui/react";
import React, { FC } from "react";

const ConnectWallet: FC = () => {
  return (
    <Flex direction="column" padding="40px 80px" alignItems="center" w="100%">
      <Heading
        as="h2"
        mb="14px"
        fontSize={{ base: "20px", md: "20px" }}
        fontWeight="700"
        color="custom.300"
        textAlign="center"
      >
        Connect wallet to start Migration
      </Heading>
      <Text
        color="custom.250"
        maxW="460px"
        textAlign="center"
        fontWeight="400"
        fontSize="16px"
        lineHeight="24px"
        mb="25px"
      >
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua.
      </Text>

      <Flex direction="column" w="100%">
        <Button
          variant="connectBtn"
          h="56px"
          fontSize="18px"
          w="100%"
          mb="16px"
        >
          <Image alt="Metamask icon" src="Metamask.svg" mr="15px" />
          <Text>Metamask</Text>
        </Button>

        <Button variant="connectBtn" h="56px" fontSize="18px" w="100%">
          <Image alt="WalletConnect icon" src="walletConnect.svg" mr="15px" />
          <Text>WalletConnect </Text>
        </Button>
      </Flex>
    </Flex>
  );
};

export default ConnectWallet;
