"use client";

import { Button, Center, Flex, Image, Text } from "@chakra-ui/react";
import Link from "next/link";
import React, { FC, useMemo } from "react";
import { useAccount, useDisconnect } from "wagmi";
import { getShortAddress } from "@/lib/helpers/utils";
import { useIsMounted } from "@/lib/hooks/isMounted";

const Header: FC = () => {
  const { address } = useAccount();
  const { disconnect } = useDisconnect();
  const isMounted = useIsMounted();

  const renderButtons = useMemo(
    () =>
      !address ? (
        <Button
          width={{
            base: "120px",
            xxs: "133px",
            md: "147px",
          }}
          variant="blueBtn"
          h="40px"
          fontSize={{
            base: "12px",
            sm: "14px",
          }}
          fontWeight="500"
        >
          Connect Wallet
        </Button>
      ) : (
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
              234
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
    [address],
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
      <Flex w="1110px" justifyContent="space-between" color="custom.50">
        <Link href="/public">
          <Image
            alt="Magnify cash logo"
            src="logo.svg"
            w="100%"
            height="100%"
            cursor="pointer"
            transition="0.3s ease"
          />
        </Link>
        {isMounted && renderButtons}
      </Flex>
    </Center>
  );
};

export default Header;
