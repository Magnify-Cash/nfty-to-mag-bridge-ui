"use client";
import {Button, Flex, Image, Text} from "@chakra-ui/react";
import React, { FC } from "react";
import { useActiveTxStore } from "@/state/tx";
import { useRouter } from "next/navigation";

const ConfirmMigrationError: FC = () => {
  const router = useRouter();
  const { setHash } = useActiveTxStore();
  const onClickHandler = () => {
    setHash(undefined);
    router.push("/migrate");
  };
  return (
    <Flex
      direction="column"
      alignItems="center"
      padding={{ base: "34px 10px", md: "70px 10px" }}
      w="100%"
      bg="radial-gradient(circle at top center, rgb(68,60,59) 0, rgb(30,44,43) 75%)"
      height={{ base: "initial", md: "352px" }}
    >
      <Image
        w={{ base: "70px", md: "80px" }}
        h={{ base: "70px", md: "80px" }}
        alt="failed"
        src="failed.svg"
        mb={{ base: "24px", md: "33px" }}
      />
      <Text fontSize="32px" fontWeight="600" color="custom.600" mb="7px">
        Failed!
      </Text>
      <Text
        color="custom.250"
        maxW={{ base: "230px", md: "375px" }}
        textAlign="center"
        mb="5px"
        fontWeight="400"
        fontSize={{ base: "14px", md: "16px" }}
      >
        Migration was unsuccessful.
      </Text>
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
export default ConfirmMigrationError;
