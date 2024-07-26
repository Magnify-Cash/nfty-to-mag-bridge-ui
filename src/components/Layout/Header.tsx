"use client";

import { Button, Center, Flex, Image, Text } from "@chakra-ui/react";
import Link from "next/link";
import React, { useMemo } from "react";
import { useAccount, useChainId, useDisconnect } from "wagmi";
import { getShortAddress, truncateNumber } from "@/lib/helpers/utils";
import { useIsMounted } from "@/lib/hooks/isMounted";
import { useAllNetworkUserTokenBalance } from "@/api/web3/read/tokenBalance";
import { formatUnits } from "viem";

const Header = () => {
  const { address, isConnected } = useAccount();
  const chainId = useChainId();
  const { disconnect } = useDisconnect();

  const isMounted = useIsMounted();
  const { data } = useAllNetworkUserTokenBalance();

  const activeTokenAmountBigint = data[chainId]?.amount;
  const activeTokenAmount = useMemo(
    () => formatUnits(activeTokenAmountBigint ?? 0, 18),
    [activeTokenAmountBigint],
  );

  const renderButton = useMemo(
    () =>
      address && (
        <Flex>
          <Flex
            borderRadius="8px"
            h="40px"
            mr="16px"
            padding="0px 24px"
            background="custom.200"
            alignItems="center"
            display={{ base: "none", md: "flex" }}
          >
            <Image alt="NFTY icon" w="24px" h="24px" src="NFTY.svg" mr="11px" />
            <Text color="custom.300" fontSize="16px" fontWeight="600">
              {truncateNumber(activeTokenAmount)}
            </Text>
          </Flex>

          <Button
            variant="borderedBtn"
            h="40px"
            fontSize={{ base: "12px", md: "14px" }}
            padding={{ base: "0px 5px", xxs: "0px 16px", md: "0px 21px" }}
            onClick={() => disconnect()}
          >
            <Image
              alt="Metamask icon"
              src="Metamask.svg"
              mr={{ base: "8px", md: "11px" }}
              width={{ base: "18px", md: "initial" }}
              height={{ base: "18px", md: "initial" }}
            />
            <Text>{getShortAddress(address)} </Text>
          </Button>
        </Flex>
      ),

    [activeTokenAmount, address, disconnect],
  );

  return (
    <Center
      as="header"
      h={{ base: "72px", md: "88px" }}
      borderBottom="1px solid"
      borderColor="custom.350"
      mb="15px"
      padding={{ base: "0 10px", xxs: "0 16px" }}
    >
      <Flex
        w="1110px"
        justifyContent={isMounted && isConnected ? "space-between" : "center"}
        color="custom.50"
      >
        <Link href="/connect">
          <Image
            alt="Magnify cash logo"
            src="logo.svg"
            w="100%"
            height="100%"
            cursor="pointer"
            transition="0.3s ease"
          />
        </Link>
        {isMounted && renderButton}
      </Flex>
    </Center>
  );
};

export default Header;
