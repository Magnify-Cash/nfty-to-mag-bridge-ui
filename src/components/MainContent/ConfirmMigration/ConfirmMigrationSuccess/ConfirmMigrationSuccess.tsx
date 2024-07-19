"use client";

import { Box, Button, Flex, Image, Text } from "@chakra-ui/react";
import React, { useMemo } from "react";
import { useInfoByUserAddress } from "@/api/http/user";
import { IUserInfoResponse } from "@/lib/types";
import { formatUnits } from "viem";
import { useRouter } from "next/navigation";
import { useActiveTxStore } from "@/state/tx";

const ConfirmMigrationSuccess = () => {
  const router = useRouter();
  const { data } = useInfoByUserAddress();
  const userInfo = data as IUserInfoResponse | undefined;
  const { setHash } = useActiveTxStore();

  const activeTokenAmount = useMemo(
    () => (userInfo ? formatUnits(BigInt(userInfo.amount), 18) : 0),
    [userInfo],
  );

  const magAmount = Number(activeTokenAmount) / 8;

  const onClickHandler = () => {
    setHash(undefined);
    router.push("/migrate");
  };

  return (
    <Flex
      padding={{ base: "40px 10px", md: "70px 10px" }}
      bg="radial-gradient(circle at top center, rgb(47,82,81) 0, rgb(30,44,43) 75%)"
      w="100%"
      height={{ base: "initial", md: "352px" }}
      flexDirection="column"
    >
      <Flex
        direction="column"
        alignItems="center"
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
      <Flex justifyContent="center" mt="16px">
        <Button
          variant="borderedBtn"
          h="40px"
          fontSize={{ base: "12px", md: "14px" }}
          padding={{ base: "0px 5px", xxs: "0px 16px", md: "0px 21px" }}
          width={{
            base: "120px",
            xxs: "133px",
            md: "147px",
          }}
          textTransform="capitalize"
          onClick={onClickHandler}
        >
          back to home page
        </Button>
      </Flex>
    </Flex>
  );
};
export default ConfirmMigrationSuccess;
