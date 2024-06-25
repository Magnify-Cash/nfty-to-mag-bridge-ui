import { Box, Button, Flex, Image, Input, Text } from "@chakra-ui/react";
import React, { FC } from "react";
import Dropdown from "../../Dropdown/Dropdown";
import Loader from "../../Loader/Loader";
import CustomCheckbox from "../../CustomCheckbox/CustomCheckbox";

const MigrateTokens: FC = () => {
  return (
    <Flex
      direction="column"
      padding={{ base: "15px 10px", xxs: "24px 16px", md: "28px 24px" }}
      w="100%"
    >
      <Box mb="24px" w="100%">
        <Dropdown />
      </Box>

      <Flex
        justifyContent="space-between"
        w="100%"
        mb={{ base: "20px", sm: "31px" }}
        direction={{ base: "column", xl: "row" }}
      >
        <Flex
          bg="custom.500"
          borderRadius="8px"
          padding={{ base: "16px 16px", md: "14px 16px" }}
          direction="column"
          w={{ base: "100%", xl: "306px" }}
          alignItems={{ base: "center", xl: "flex-start" }}
        >
          <Flex alignItems="center" mb={{ base: "8px", sm: "13px" }}>
            <Image src="NFTY.svg" alt="NFTY icon" marginRight="8px" />
            <Text color="custom.50" fontSize="14px" fontWeight="400">
              NFTY
            </Text>
          </Flex>

          <Flex fontSize={{ base: "14px", md: "16px" }} color="custom.300">
            <Text fontWeight="500" mr="8px">
              Amount to migrate:
            </Text>
            <Text fontWeight="600" mr="4px">
              123
            </Text>
            <Text fontWeight="400"> NFTY</Text>
          </Flex>
        </Flex>

        <Flex alignItems="center" justifyContent="center">
          <Image
            src="reverse.svg"
            cursor="pointer"
            transition="0.3s ease"
            _hover={{ opacity: 0.7 }}
            margin={{ base: "18px 0", xl: "0 24px" }}
            w={{ base: "30px", md: "40px" }}
            h={{ base: "30px", md: "40px" }}
            alt=""
            transform={{ base: "rotate(90deg)", xl: "none" }}
          />
        </Flex>
        <Flex
          bg="custom.500"
          borderRadius="8px"
          padding="14px 16px"
          direction="column"
          w={{ base: "100%", xl: "306px" }}
          alignItems={{ base: "center", xl: "flex-start" }}
        >
          <Flex alignItems="center" mb="13px">
            <Image src="MAG.svg" alt="MAG icon" marginRight="8px" />
            <Text color="custom.50" fontSize="14px" fontWeight="400">
              MAG
            </Text>
          </Flex>

          <Flex fontSize={{ base: "14px", md: "16px" }} color="custom.300">
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

      <Flex mb={{ base: "16px", lg: "24px" }}>
        <Input
          borderColor="custom.550"
          placeholder="Enter a Destination Address"
          h="48px"
        />
      </Flex>

      {/* Confirm migration button*/}
      <Button
        variant="blueBtn"
        h={{ base: "48px", lg: "56px" }}
        fontSize={{ base: "14px", lg: "16px" }}
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
        <Text>Confirm Migration </Text>
      </Button>

      <Box mb="20px"></Box>

      {/* Waiting for Lock transaction button*/}
      <Button
        variant="blueBtn"
        h={{ base: "48px", lg: "56px" }}
        fontSize={{ base: "14px", lg: "16px" }}
        fontWeight="600"
        w="100%"
        pointerEvents="none"
      >
        <Flex>
          <Box>
            <Loader />
          </Box>
          <Text ml="12px">Waiting for Lock transaction </Text>
        </Flex>
      </Button>
    </Flex>
  );
};

export default MigrateTokens;
