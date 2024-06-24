import { Text, Flex, Box, Show } from "@chakra-ui/react";
import React, { FC } from "react";
import CloseIcon from "../CloseIcon/CloseIcon";

const Disclaimer: FC = () => {
  return (
    <Box
      padding={{ base: "0 10px", xxs: "0 16px" }}
      mb={{ base: "40px", lg: "64px" }}
    >
      <Flex
        bg="custom.100"
        margin="auto"
        maxWidth={{ base: "600px", lg: "1110px" }}
        padding={{ base: "10px", xxs: "15px 16px" }}
        alignItems="center"
        direction="column"
        fontSize={{ base: "11px", sm: "12px" }}
        position="relative"
        borderRadius="8px"
        color="custom.250"
      >
        <Box
          width="24px"
          height="24px"
          position="absolute"
          top={{ base: "4px", md: "9px" }}
          right={{ base: "5px", md: "8px" }}
        >
          <CloseIcon />
        </Box>
        <Text
          color="custom.300"
          fontWeight="600"
          textTransform="uppercase"
          mb="3px"
        >
          DISCLAIMER
        </Text>

        <Flex
          direction="column"
          alignItems="center"
          display={{ base: "none", md: "flex" }}
        >
          <Text maxW="360px" textAlign="center" mb="-2px" fontWeight="400">
            NFTY Token is discontinued and will be terminated at &lt;Timer&gt;{" "}
          </Text>
          <Text maxW="500px" textAlign="center" fontWeight="400">
            Before that we allow migration for all NFTY holders as of
            &lt;date&gt; Migration is valid &lt;timer&gt;
          </Text>
        </Flex>

        <Flex>
          <Text textAlign="center" display={{ base: "flex", md: "none" }}>
            NFTY Token is discontinued and will be terminated at &lt;Timer&gt;{" "}
            Before that we allow migration for all NFTY holders as of
            &lt;date&gt; Migration is valid &lt;timer&gt;{" "}
          </Text>
        </Flex>
      </Flex>
    </Box>
  );
};

export default Disclaimer;
