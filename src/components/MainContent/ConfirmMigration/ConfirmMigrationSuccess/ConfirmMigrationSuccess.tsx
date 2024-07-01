"use client";

import { Box, Flex, Image, Text } from "@chakra-ui/react";
import React, { useMemo } from "react";
import { useInfoByUserAddress } from "@/api/http/user";
import { IUserInfoResponse } from "@/lib/types";
import { formatUnits } from "viem";

const ConfirmMigrationSuccess = () => {
  const { data } = useInfoByUserAddress();
  const userInfo = data as IUserInfoResponse | undefined;

  const activeTokenAmount = useMemo(
    () => (userInfo ? formatUnits(BigInt(userInfo.amount), 18) : 0),
    [userInfo],
  );

  const magAmount = Number(activeTokenAmount) / 8;

  return (
    <Flex
      direction="column"
      alignItems="center"
      padding={{ base: "40px 10px", md: "70px 10px" }}
      bg="radial-gradient(circle at top center, rgb(47,82,81) 0, rgb(30,44,43) 75%)"
      w="100%"
      height={{ base: "initial", md: "352px" }}
    >
      <Image
        w={{ base: "64px", md: "80px" }}
        h={{ base: "64px", md: "80px" }}
        alt="success"
        src="success.svg"
        mb={{ base: "24px", md: "33px" }}
      />
      <Text fontSize="32px" fontWeight="600" color="custom.50" mb="7px">
        Success!
      </Text>
      <Text
        color="custom.250"
        maxW={{ base: "230px", md: "375px" }}
        textAlign="center"
        mb="-2px"
        fontWeight="400"
        fontSize={{ base: "14px", md: "16px" }}
      >
        Migration of{" "}
        <Box as="span" fontWeight="600">
          {activeTokenAmount} NFTY
        </Box>{" "}
        to{" "}
        <Box as="span" fontWeight="600">
          {magAmount} MAG
        </Box>{" "}
        is successful
      </Text>
    </Flex>
  );
};
export default ConfirmMigrationSuccess;
