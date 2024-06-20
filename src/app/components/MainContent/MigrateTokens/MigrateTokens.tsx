import { Box, Flex, Image, Text, Input, Button } from "@chakra-ui/react";
import React, { FC } from "react";
import Dropdown from "../../Dropdown/Dropdown";
import Loader from "../../Loader/Loader";
import CustomCheckbox from "../../CustomCheckbox/CustomCheckbox";

const MigrateTokens: FC = () => {
  return (
    <Flex direction="column" padding="28px 24px" w="100%">
      <Box mb="24px" w="100%">
        <Dropdown />
      </Box>

      <Flex justifyContent="space-between" w="100%" mb="37px">
        <Flex
          bg="custom.500"
          borderRadius="8px"
          padding="14px 16px"
          direction="column"
          w="306px"
        >
          <Flex alignItems="center" mb="13px">
            <Image src="NFTY.svg" alt="NFTY icon" marginRight="8px" />
            <Text color="custom.50" fontSize="14px" fontWeight="400">
              NFTY
            </Text>
          </Flex>

          <Flex fontSize="16px" color="custom.300">
            <Text fontWeight="500" mr="8px">
              Amount to migrate:
            </Text>
            <Text fontWeight="600" mr="4px">
              123
            </Text>
            <Text fontWeight="400"> NFTY</Text>
          </Flex>
        </Flex>

        <Flex alignItems="center">
          <Image
            src="reverse.svg"
            cursor="pointer"
            transition="0.4s ease"
            _hover={{ opacity: 0.7 }}
            margin="0 24px"
            w="40px"
            h="40px"
          />
        </Flex>
        <Flex
          bg="custom.500"
          borderRadius="8px"
          padding="14px 16px"
          direction="column"
          w="306px"
        >
          <Flex alignItems="center" mb="13px">
            <Image src="MAG.svg" alt="MAG icon" marginRight="8px" />
            <Text color="custom.50" fontSize="14px" fontWeight="400">
              MAG
            </Text>
          </Flex>

          <Flex fontSize="16px" color="custom.300">
            <Text fontWeight="500" mr="8px">
              You will recieve:
            </Text>
            <Text fontWeight="600" mr="4px">
              12
            </Text>
            <Text fontWeight="400"> MAG</Text>
          </Flex>
        </Flex>
      </Flex>

      <Flex mb="16px">
        <CustomCheckbox />
      </Flex>

      <Flex mb="24px">
        <Input
          borderColor="custom.550"
          placeholder="Enter a Destination Address"
          h="48px"
        />
      </Flex>

      <Button
        variant="blueBtn"
        h="56px"
        fontSize="16px"
        fontWeight="600"
        w="100%"
        // isDisabled
        sx={{
          _disabled: {
            bg: "custom.150",
            color: "custom.100",
            cursor: "not-allowed",
            opacity: "1",
            _hover: {
              bg: "custom.150",
              color: "custom.100",
              boxShadow: "none",
              opacity: "1",
            },
          },
        }}
      >
        {/* Confirm migration */}
        <Text>Confirm Migration </Text>

        {/* Waiting for Lock transaction */}
        {/* <Flex>
          <Text><Loader/></Text>
          <Text ml="12px">Waiting for Lock transaction </Text>
        </Flex> */}
      </Button>
    </Flex>
  );
};

export default MigrateTokens;
