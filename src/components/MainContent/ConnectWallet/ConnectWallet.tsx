"use client";

import { Flex, Heading, Text } from "@chakra-ui/react";
import { useConnect } from "wagmi";
import { WalletButton } from "./WalletButton";

const ConnectWallet = () => {
  const { connectors, connect } = useConnect();
  return (
    <Flex
      direction="column"
      padding={{ base: "21px 16px", lg: "40px 80px" }}
      alignItems="center"
      w="100%"
    >
      <Heading
        as="h2"
        mb="14px"
        fontSize={{ base: "18px", sm: "20px" }}
        fontWeight="700"
        color="custom.300"
        textAlign="center"
      >
        Connect wallet to start Migration
      </Heading>
      <Text
        color="custom.250"
        maxW="540px"
        textAlign="center"
        fontWeight="400"
        fontSize={{ base: "14px", sm: "16px" }}
        lineHeight={{ base: "21px", sm: "24px" }}
        mb={{ base: "22px", sm: "25px" }}
      >
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua.
      </Text>

      <Flex direction="column" w="100%" gap='16px'>
        {connectors.map((connector) => (
          <WalletButton
            key={connector.uid}
            connectorName={connector.name}
            onClick={() => connect({ connector })}
          />
        ))}
      </Flex>
    </Flex>
  );
};

export default ConnectWallet;
