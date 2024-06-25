import { Box, Flex, Image, Text } from "@chakra-ui/react";
import React, { FC } from "react";

const ConfirmMigrationError: FC = () => {
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
        Migration of{" "}
        <Box as="span" fontWeight="600">
          &lt;NFTY AMOUNT&gt;{" "}
        </Box>
        to{" "}
        <Box as="span" fontWeight="600">
          &lt;MAG AMOUNT&gt;
        </Box>{" "}
        was unsuccessful.
      </Text>
    </Flex>
  );
};
export default ConfirmMigrationError;
