import { Text, Flex, Box } from "@chakra-ui/react";
import React, { FC } from "react";

const Disclaimer: FC = () => {
  return (
    <Box padding="0 10px" mb="64px">
      <Flex
        bg="custom.100"
        margin="auto"
        maxWidth="1110px"
        padding="14px"
        alignItems="center"
        direction="column"
        fontSize="12px"
        position="relative"
        h="84px"
        sx={{
          "&::after": {
            content: '""',
            position: "absolute",
            top: "9px",
            right: "8px",
            width: "24px",
            height: "24px",
            backgroundImage: "close.svg",
            backgroundSize: "cover",
            backgroundPosition: "center center",
            backgroundRepeat: "no-repeat",
            cursor: "pointer",
            transition: "opacity 0.4s ease",
          },
          "&:hover::after": {
            opacity: 0.7,
          },
        }}
      >
        <Text
          color="custom.300"
          fontWeight="600"
          textTransform="uppercase"
          mb="3px"
        >
          DISCLAIMER
        </Text>
        <Flex direction="column" alignItems="center">
          <Text
            color="custom.250"
            maxW="360px"
            textAlign="center"
            mb="-2px"
            fontWeight="400"
          >
            NFTY Token is discontinued and will be terminated at &lt;Timer&gt;{" "}
          </Text>
          <Text
            color="custom.250"
            maxW="500px"
            textAlign="center"
            fontWeight="400"
          >
            Before that we allow migration for all NFTY holders as of
            &lt;date&gt; Migration is valid &lt;timer&gt;
          </Text>
        </Flex>
      </Flex>
    </Box>
  );
};

export default Disclaimer;
